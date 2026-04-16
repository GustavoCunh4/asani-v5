/**
 * Tech Field — 2D Canvas visual system for the infrastructure section.
 *
 * Layers (bottom → top):
 *   1. Dark background fill
 *   2. Grid lines — regular grid that distorts (repels) near the mouse cursor
 *   3. Connection lines — between nearby badges
 *   4. Badge particles — tech-themed circular elements that float from the edges,
 *      accelerate toward the triangle attractor, and dissolve on contact
 *   5. Absorption pulses — brief expanding rings when a badge is consumed
 *
 * Badge types represent: DATA · API · AI · CLOUD · SECURITY · COMPUTE · INTEGRATION · ML
 * Each is a pre-baked OffscreenCanvas sprite (circle + icon + label).
 *
 * Performance:
 *   - Sprites pre-rendered at startup, drawn via drawImage() each frame.
 *   - Grid distortion sampled only within mouse influence radius.
 *   - Badge count capped per viewport width.
 *   - Mouse interaction disabled on touch devices.
 *   - rAF paused via IntersectionObserver when section is off-screen.
 */

import { isTouch } from '../core/media';

// ─── Types ────────────────────────────────────────────────────────────────────

interface Vec2 { x: number; y: number }

interface BadgeSpec {
  label: string;
  color: string;   // circle fill color
  draw: (ctx: CanvasRenderingContext2D, r: number) => void;
}

interface BadgeParticle {
  x: number; y: number;
  vx: number; vy: number;
  // sprite rendered size (half-width/height = r)
  r: number;
  opacity: number;
  targetOpacity: number;
  specIndex: number;
  depth: number;
  phase: 0 | 1 | 2 | 3;  // spawning | drifting | attracted | dissolving
  phaseT: number;
  driftVx: number; driftVy: number;
  rot: number;   // unused for badges but kept for future use
}

interface Pulse {
  x: number; y: number;
  r: number; maxR: number;
  opacity: number;
}

// ─── Badge icon drawing routines ──────────────────────────────────────────────
// Each function draws centered at (0,0) fitting within ±r.
// ctx strokeStyle/fillStyle are set to white before the call.

function iconData(ctx: CanvasRenderingContext2D, r: number): void {
  // Three horizontal ellipses — database cylinders
  const rw = r * 0.64, rh = r * 0.16;
  for (const dy of [-r * 0.36, 0, r * 0.36]) {
    ctx.beginPath(); ctx.ellipse(0, dy, rw, rh, 0, 0, Math.PI * 2); ctx.stroke();
  }
  ctx.beginPath();
  ctx.moveTo(-rw, -r * 0.36); ctx.lineTo(-rw, r * 0.36);
  ctx.moveTo(rw, -r * 0.36);  ctx.lineTo(rw, r * 0.36);
  ctx.stroke();
}

function iconApi(ctx: CanvasRenderingContext2D, r: number): void {
  // Code brackets: < / >
  const bx = r * 0.44, by = r * 0.44, arm = r * 0.24;
  ctx.beginPath();
  ctx.moveTo(-bx + arm, -by); ctx.lineTo(-bx, -by * 0.5);
  ctx.lineTo(-bx, by * 0.5); ctx.lineTo(-bx + arm, by);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(bx - arm, -by); ctx.lineTo(bx, -by * 0.5);
  ctx.lineTo(bx, by * 0.5); ctx.lineTo(bx - arm, by);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(r * 0.16, -by); ctx.lineTo(-r * 0.16, by);
  ctx.stroke();
}

function iconAI(ctx: CanvasRenderingContext2D, r: number): void {
  // Neural network: 3 inputs → 2 hidden → 1 output
  const inputs: [number, number][] = [[-r * 0.56, -r * 0.38], [-r * 0.56, 0], [-r * 0.56, r * 0.38]];
  const hidden: [number, number][] = [[0, -r * 0.22], [0, r * 0.22]];
  const out: [number, number] = [r * 0.56, 0];
  const origLW = ctx.lineWidth;
  ctx.lineWidth = origLW * 0.55;
  for (const [ax, ay] of inputs) {
    for (const [bx, by] of hidden) {
      ctx.beginPath(); ctx.moveTo(ax, ay); ctx.lineTo(bx, by); ctx.stroke();
    }
  }
  for (const [bx, by] of hidden) {
    ctx.beginPath(); ctx.moveTo(bx, by); ctx.lineTo(out[0], out[1]); ctx.stroke();
  }
  ctx.lineWidth = origLW;
  const nr = r * 0.12;
  for (const [x, y] of [...inputs, ...hidden]) {
    ctx.beginPath(); ctx.arc(x, y, nr, 0, Math.PI * 2); ctx.fill();
  }
  ctx.beginPath(); ctx.arc(out[0], out[1], nr * 1.4, 0, Math.PI * 2); ctx.fill();
}

function iconCloud(ctx: CanvasRenderingContext2D, r: number): void {
  // Simplified cloud: arc with three bumps on top
  const by = r * 0.18;
  ctx.beginPath();
  ctx.arc(-r * 0.24, -by, r * 0.28, Math.PI, 0, false);   // left bump
  ctx.arc(r * 0.12, -by - r * 0.14, r * 0.22, Math.PI, 0, false);  // right bump
  ctx.arc(r * 0.42, by - r * 0.06, r * 0.18, -Math.PI / 2, Math.PI / 3, false);
  ctx.lineTo(r * 0.5, by + r * 0.1);
  ctx.arc(0, by + r * 0.1, r * 0.50, 0, Math.PI, false);
  ctx.closePath();
  ctx.stroke();
}

function iconLock(ctx: CanvasRenderingContext2D, r: number): void {
  // Padlock: rounded rectangle body + semicircle shackle
  const bw = r * 0.56, bh = r * 0.44, by = r * 0.14;
  ctx.beginPath();
  ctx.roundRect(-bw / 2, by - bh / 2, bw, bh, r * 0.1);
  ctx.stroke();
  // Shackle
  const sw = bw * 0.28, sTop = by - bh / 2 - r * 0.2;
  ctx.beginPath();
  ctx.moveTo(-sw, by - bh / 2);
  ctx.lineTo(-sw, sTop);
  ctx.arc(0, sTop, sw, Math.PI, 0);
  ctx.lineTo(sw, by - bh / 2);
  ctx.stroke();
  // Keyhole dot
  ctx.beginPath(); ctx.arc(0, by, r * 0.1, 0, Math.PI * 2); ctx.fill();
}

function iconChip(ctx: CanvasRenderingContext2D, r: number): void {
  // CPU die: outer square + inner square + pins on four sides
  const s = r * 0.48;
  ctx.strokeRect(-s, -s, s * 2, s * 2);
  ctx.strokeRect(-s * 0.5, -s * 0.5, s, s);
  const pinL = s * 0.38, step = s * 0.56;
  for (const off of [-step * 0.5, step * 0.5]) {
    ctx.beginPath(); ctx.moveTo(off, -s); ctx.lineTo(off, -s - pinL); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(off,  s); ctx.lineTo(off,  s + pinL); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(-s, off); ctx.lineTo(-s - pinL, off); ctx.stroke();
    ctx.beginPath(); ctx.moveTo( s, off); ctx.lineTo( s + pinL, off); ctx.stroke();
  }
}

function iconIntegration(ctx: CanvasRenderingContext2D, r: number): void {
  // Two circles connected by a line with arrows at midpoint
  const cx = r * 0.46;
  ctx.beginPath(); ctx.arc(-cx, 0, r * 0.28, 0, Math.PI * 2); ctx.stroke();
  ctx.beginPath(); ctx.arc( cx, 0, r * 0.28, 0, Math.PI * 2); ctx.stroke();
  // Connecting line with small perpendicular ticks (API endpoint markers)
  ctx.beginPath();
  ctx.moveTo(-cx + r * 0.28, 0); ctx.lineTo(cx - r * 0.28, 0);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(0, -r * 0.1); ctx.lineTo(0, r * 0.1);
  ctx.stroke();
}

function iconML(ctx: CanvasRenderingContext2D, r: number): void {
  // Two overlapping lobes (brain/ML) + center divider
  const ox = r * 0.24, oy = r * 0.08, lr = r * 0.34;
  ctx.beginPath(); ctx.arc(-ox, -oy, lr, 0, Math.PI * 2); ctx.stroke();
  ctx.beginPath(); ctx.arc( ox, -oy, lr, 0, Math.PI * 2); ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(0, -oy - lr * 0.8);
  ctx.lineTo(0,  oy + r * 0.28);
  ctx.stroke();
}

// ─── Badge catalogue ──────────────────────────────────────────────────────────

const BADGE_SPECS: BadgeSpec[] = [
  { label: 'DATA',   color: '#204e8c', draw: iconData        },
  { label: 'API',    color: '#8c4020', draw: iconApi         },
  { label: 'AI',     color: '#58208c', draw: iconAI          },
  { label: 'CLOUD',  color: '#186878', draw: iconCloud       },
  { label: 'SSL',    color: '#1a6442', draw: iconLock        },
  { label: 'GPU',    color: '#785418', draw: iconChip        },
  { label: 'INTEGR', color: '#782044', draw: iconIntegration },
  { label: 'ML',     color: '#481878', draw: iconML          },
];

// ─── Pre-baked sprite generation ──────────────────────────────────────────────
// Sprites are rendered once at SPRITE_SIZE and drawn via drawImage() each frame.

const SPRITE_SIZE = 160;      // px — source resolution of each sprite canvas
const LABEL_PAD   = 26;       // extra height for text label

type SpriteCanvas = OffscreenCanvas | HTMLCanvasElement;

function bakeSprite(spec: BadgeSpec, size: number): SpriteCanvas {
  let oc: SpriteCanvas;
  try {
    oc = new OffscreenCanvas(size, size + LABEL_PAD);
  } catch {
    oc = document.createElement('canvas');
    (oc as HTMLCanvasElement).width  = size;
    (oc as HTMLCanvasElement).height = size + LABEL_PAD;
  }
  const c = oc.getContext('2d') as CanvasRenderingContext2D;
  if (!c) return oc;

  const cx = size / 2;
  const cy = size / 2;
  const r  = size * 0.40;   // circle radius within the sprite

  // Circle fill
  c.fillStyle = spec.color;
  c.globalAlpha = 0.90;
  c.beginPath(); c.arc(cx, cy, r, 0, Math.PI * 2); c.fill();

  // White border
  c.globalAlpha = 1;
  c.strokeStyle = 'rgba(255,255,255,0.20)';
  c.lineWidth = 2;
  c.beginPath(); c.arc(cx, cy, r, 0, Math.PI * 2); c.stroke();

  // Icon
  c.save();
  c.translate(cx, cy);
  c.strokeStyle = 'rgba(255,255,255,0.90)';
  c.fillStyle   = 'rgba(255,255,255,0.90)';
  c.lineWidth   = size * 0.032;
  c.lineCap  = 'round';
  c.lineJoin = 'round';
  spec.draw(c, r * 0.50);
  c.restore();

  // Label text below the circle
  c.fillStyle = 'rgba(255,255,255,0.62)';
  c.font = `700 ${size * 0.115}px "JetBrains Mono", monospace`;
  c.textAlign    = 'center';
  c.textBaseline = 'top';
  c.fillText(spec.label, cx, size + 4);

  return oc;
}

// ─── Constants ────────────────────────────────────────────────────────────────

const ATTR_FRAC  = 0.09;    // absorption radius as fraction of min(w,h)
const INF_FRAC   = 0.40;    // influence radius — badges start curving here
const CONN_DIST  = 120;     // px — max distance for connection lines
const GRID_COLS  = 18;
const GRID_ROWS  = 12;
const GRID_SAMP  = 50;      // sample points per grid line for distortion
const DIST_RAD   = 0.22;    // mouse distortion radius as fraction of min(w,h)
const DIST_AMP   = 22;      // max px displacement of grid lines

function badgeCount(cw: number): number {
  if (cw <= 600)  return 10;
  if (cw <= 1024) return 16;
  return 24;
}

// ─── Public init ──────────────────────────────────────────────────────────────

export function initTechField(): void {
  const canvas = document.getElementById('techField') as HTMLCanvasElement | null;
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  let w = 0, h = 0, dpr = 1;
  let rafId = 0, lastT = 0;

  const mouse:       Vec2 = { x: 0.5, y: 0.5 };
  const mouseSmooth: Vec2 = { x: 0.5, y: 0.5 };

  // Attractor is at the center of the section — aligned with the triangle canvas
  const attractor: Vec2 = { x: 0.5, y: 0.50 };

  const badges:  BadgeParticle[] = [];
  const pulses:  Pulse[]         = [];

  // Pre-baked sprites (one per spec, created once on init)
  const sprites: SpriteCanvas[] = BADGE_SPECS.map(s => bakeSprite(s, SPRITE_SIZE));

  // ─── Helpers ───────────────────────────────────────────────────────────────

  function rnd(lo: number, hi: number): number { return lo + Math.random() * (hi - lo); }

  function edgeSpawn(): Vec2 {
    const side = (Math.random() * 4) | 0;
    if (side === 0) return { x: Math.random() * w, y: -40 };
    if (side === 1) return { x: w + 40, y: Math.random() * h };
    if (side === 2) return { x: Math.random() * w, y: h + 40 };
    return { x: -40, y: Math.random() * h };
  }

  // ─── Badge lifecycle ───────────────────────────────────────────────────────

  function makeBadge(fromEdge: boolean): BadgeParticle {
    const depth = rnd(0.30, 1);
    const spd   = rnd(0.04, 0.14) * depth;
    const ang   = Math.random() * Math.PI * 2;
    const pos   = fromEdge ? edgeSpawn() : { x: rnd(0.1, 0.9) * w, y: rnd(0.1, 0.9) * h };
    return {
      x: pos.x, y: pos.y, vx: 0, vy: 0,
      r: (rnd(22, 30) + depth * 16),   // sprite display radius
      opacity:       fromEdge ? 0 : rnd(0, 0.9),
      targetOpacity: rnd(0.52, 0.88),
      specIndex: (Math.random() * BADGE_SPECS.length) | 0,
      depth,
      phase:  fromEdge ? 0 : 1,
      phaseT: fromEdge ? 0 : Math.random(),
      driftVx: Math.cos(ang) * spd,
      driftVy: Math.sin(ang) * spd,
      rot: 0,
    };
  }

  function resetBadge(b: BadgeParticle): void {
    const depth = rnd(0.30, 1);
    const spd   = rnd(0.04, 0.14) * depth;
    const ang   = Math.random() * Math.PI * 2;
    const pos   = edgeSpawn();
    b.x = pos.x; b.y = pos.y; b.vx = 0; b.vy = 0;
    b.r            = rnd(22, 30) + depth * 16;
    b.opacity      = 0;
    b.targetOpacity = rnd(0.52, 0.88);
    b.specIndex    = (Math.random() * BADGE_SPECS.length) | 0;
    b.depth        = depth;
    b.phase        = 0; b.phaseT = 0;
    b.driftVx      = Math.cos(ang) * spd;
    b.driftVy      = Math.sin(ang) * spd;
  }

  function populate(): void {
    const count = badgeCount(w);
    for (let i = 0; i < count; i++) badges.push(makeBadge(false));
  }

  // ─── Update ────────────────────────────────────────────────────────────────

  function update(dt: number): void {
    const ax   = attractor.x * w;
    const ay   = attractor.y * h;
    const infR = Math.min(w, h) * INF_FRAC;
    const absR = Math.min(w, h) * ATTR_FRAC;

    for (const b of badges) {
      const dx   = ax - b.x;
      const dy   = ay - b.y;
      const dist = Math.sqrt(dx * dx + dy * dy) || 0.001;

      switch (b.phase) {
        case 0: {
          // Spawning — fade in while drifting gently
          b.phaseT = Math.min(1, b.phaseT + dt * 0.9);
          b.opacity = b.phaseT * b.targetOpacity * 0.5;
          b.x += b.driftVx * dt * 44;
          b.y += b.driftVy * dt * 44;
          if (b.phaseT >= 1) { b.phase = 1; b.phaseT = 0; }
          break;
        }
        case 1: {
          // Drifting — natural ambient float
          b.opacity += (b.targetOpacity - b.opacity) * Math.min(1, dt * 2);
          b.vx += (b.driftVx - b.vx) * Math.min(1, dt * 2.5);
          b.vy += (b.driftVy - b.vy) * Math.min(1, dt * 2.5);
          b.x += b.vx * dt * 60;
          b.y += b.vy * dt * 60;
          if (dist < infR) { b.phase = 2; b.phaseT = 0; }
          // Out of bounds → reset
          if (b.x < -80 || b.x > w + 80 || b.y < -80 || b.y > h + 80) resetBadge(b);
          break;
        }
        case 2: {
          // Attracted — curves toward the triangle core
          const t    = Math.max(0, 1 - dist / infR);
          const pull = 0.0018 * t * b.depth;
          b.vx += (dx / dist) * pull * 60 * dt;
          b.vy += (dy / dist) * pull * 60 * dt;
          b.vx *= 0.968;
          b.vy *= 0.968;
          b.x += b.vx * dt * 60;
          b.y += b.vy * dt * 60;
          b.opacity = b.targetOpacity * (0.60 + t * 0.56);
          if (dist < absR) { b.phase = 3; b.phaseT = 0; }
          break;
        }
        case 3: {
          // Dissolving — absorbed into the triangle, shrinks + fades
          b.phaseT = Math.min(1, b.phaseT + dt * 1.8);
          const fade = 1 - b.phaseT * b.phaseT;
          b.opacity = b.targetOpacity * Math.max(0, fade);
          b.x += (dx / dist) * dt * 52;
          b.y += (dy / dist) * dt * 52;
          if (b.phaseT >= 0.3 && pulses.length < 6) {
            // Emit absorption pulse once (guard phaseT so it fires only once)
            if (b.phaseT < 0.35) {
              const maxR = Math.min(w, h) * 0.08;
              pulses.push({ x: ax, y: ay, r: 4, maxR, opacity: 0.5 });
            }
          }
          if (b.phaseT >= 1) resetBadge(b);
          break;
        }
      }
    }

    // Maintain count
    const count = badgeCount(w);
    while (badges.length < count) badges.push(makeBadge(true));
    if (badges.length > count + 4) badges.length = count + 4;

    // Update absorption pulses
    for (let i = pulses.length - 1; i >= 0; i--) {
      const p = pulses[i];
      p.r       += (p.maxR - p.r) * dt * 5;
      p.opacity -= dt * 2.2;
      if (p.opacity <= 0) pulses.splice(i, 1);
    }
  }

  // ─── Draw: background ──────────────────────────────────────────────────────

  function drawBackground(): void {
    ctx.fillStyle = '#080508';
    ctx.fillRect(0, 0, w, h);
  }

  // ─── Draw: distorted grid ──────────────────────────────────────────────────
  // The grid is a regular mesh of lines. Near the mouse cursor each line's
  // perpendicular position is displaced outward (repulsion). The distortion
  // falls off smoothly via a squared distance function.

  function drawGrid(): void {
    const mx     = mouseSmooth.x * w;
    const my     = mouseSmooth.y * h;
    const distR  = Math.min(w, h) * DIST_RAD;
    const distR2 = distR * distR;

    ctx.save();
    ctx.strokeStyle = 'rgba(140,30,50,0.10)';
    ctx.lineWidth   = 0.6;
    ctx.lineCap = 'round';

    // Horizontal lines
    for (let row = 0; row <= GRID_ROWS; row++) {
      const y0 = (row / GRID_ROWS) * h;
      ctx.beginPath();
      for (let s = 0; s <= GRID_SAMP; s++) {
        const px = (s / GRID_SAMP) * w;
        const dx = px - mx;
        const dy = y0 - my;
        const d2 = dx * dx + dy * dy;
        // Smooth bell-curve repulsion: 0 at center, 0 at distR, peak at ~0.5×distR
        const t     = Math.max(0, 1 - d2 / distR2);
        const yDisp = (dy / (Math.sqrt(d2) || 1)) * t * (1 - t) * 4 * DIST_AMP;
        const py    = y0 + yDisp;
        s === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
      }
      ctx.stroke();
    }

    // Vertical lines
    for (let col = 0; col <= GRID_COLS; col++) {
      const x0 = (col / GRID_COLS) * w;
      ctx.beginPath();
      for (let s = 0; s <= GRID_SAMP; s++) {
        const py = (s / GRID_SAMP) * h;
        const dx = x0 - mx;
        const dy = py - my;
        const d2 = dx * dx + dy * dy;
        const t     = Math.max(0, 1 - d2 / distR2);
        const xDisp = (dx / (Math.sqrt(d2) || 1)) * t * (1 - t) * 4 * DIST_AMP;
        const px    = x0 + xDisp;
        s === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
      }
      ctx.stroke();
    }

    ctx.restore();
  }

  // ─── Draw: connection lines between nearby badges ──────────────────────────

  function drawConnections(): void {
    ctx.save();
    for (let i = 0; i < badges.length; i++) {
      const a = badges[i];
      if (a.phase === 3 || a.opacity < 0.08) continue;
      for (let j = i + 1; j < badges.length; j++) {
        const b = badges[j];
        if (b.phase === 3 || b.opacity < 0.08) continue;
        const d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d < CONN_DIST) {
          const t  = 1 - d / CONN_DIST;
          const al = t * Math.min(a.opacity, b.opacity) * 0.28;
          if (al < 0.006) continue;
          ctx.strokeStyle = `rgba(180,48,68,${al})`;
          ctx.lineWidth   = t * 0.65;
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
        }
      }
    }
    ctx.restore();
  }

  // ─── Draw: badge sprites ───────────────────────────────────────────────────

  function drawBadges(): void {
    ctx.save();
    for (const b of badges) {
      if (b.opacity < 0.01) continue;

      // Dissolving shrinks the badge visually
      const scale = b.phase === 3 ? Math.max(0.05, 1 - b.phaseT * 0.85) : 1;
      const drawR = b.r * scale;
      const spriteH = SPRITE_SIZE + LABEL_PAD;

      ctx.globalAlpha = Math.min(1, b.opacity);
      ctx.drawImage(
        sprites[b.specIndex] as CanvasImageSource,
        b.x - drawR,                           // dest x
        b.y - drawR,                           // dest y
        drawR * 2,                             // dest w (circle portion)
        drawR * 2 * (spriteH / SPRITE_SIZE),   // dest h (includes label)
      );
    }
    ctx.globalAlpha = 1;
    ctx.restore();
  }

  // ─── Draw: absorption pulses ───────────────────────────────────────────────

  function drawPulses(): void {
    ctx.save();
    for (const p of pulses) {
      ctx.strokeStyle = `rgba(220,50,70,${p.opacity})`;
      ctx.lineWidth   = 1.2;
      ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.stroke();
    }
    ctx.restore();
  }

  // ─── Render loop ───────────────────────────────────────────────────────────

  function tick(ts: number): void {
    rafId = requestAnimationFrame(tick);
    const dt = Math.min((ts - lastT) / 1000, 0.05);
    lastT = ts;

    mouseSmooth.x += (mouse.x - mouseSmooth.x) * 0.044;
    mouseSmooth.y += (mouse.y - mouseSmooth.y) * 0.044;

    update(dt);

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    drawBackground();
    drawGrid();
    drawConnections();
    drawBadges();
    drawPulses();
  }

  // ─── Resize ────────────────────────────────────────────────────────────────

  function doResize(): void {
    const rect = canvas!.getBoundingClientRect();
    w   = rect.width;
    h   = rect.height;
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas!.width  = Math.round(w * dpr);
    canvas!.height = Math.round(h * dpr);
  }

  let resizeTimer = 0;
  function onResize(): void {
    window.clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(doResize, 130);
  }

  // ─── Events ────────────────────────────────────────────────────────────────

  function onMouseMove(e: MouseEvent): void {
    const rect = canvas!.getBoundingClientRect();
    mouse.x = (e.clientX - rect.left) / rect.width;
    mouse.y = (e.clientY - rect.top)  / rect.height;
  }

  // ─── Init ──────────────────────────────────────────────────────────────────

  doResize();
  populate();

  if (!isTouch) {
    canvas.addEventListener('mousemove', onMouseMove, { passive: true });
  }
  window.addEventListener('resize', onResize, { passive: true });

  const io = new IntersectionObserver((entries) => {
    for (const ent of entries) {
      if (ent.isIntersecting && !rafId) {
        rafId = requestAnimationFrame((ts) => { lastT = ts; tick(ts); });
      } else if (!ent.isIntersecting && rafId) {
        cancelAnimationFrame(rafId);
        rafId = 0;
      }
    }
  }, { threshold: 0.01 });
  io.observe(canvas);

  rafId = requestAnimationFrame((ts) => { lastT = ts; tick(ts); });
}
