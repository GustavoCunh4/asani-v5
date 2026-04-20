import { isTouch } from '../core/media';

// Tipos usados pela animacao de badges da secao tecnica.

interface Vec2 { x: number; y: number }

interface BadgeSpec {
  label: string;
  draw: (ctx: CanvasRenderingContext2D, r: number) => void;
}

interface BadgeParticle {
  x: number; y: number;
  vx: number; vy: number;
  // Tamanho renderizado do sprite: metade da largura/altura.
  r: number;
  opacity: number;
  targetOpacity: number;
  specIndex: number;
  depth: number;
  phase: 0 | 1 | 2 | 3; // nascendo | flutuando | atraido | dissolvendo
  phaseT: number;
  driftVx: number; driftVy: number;
}

interface Pulse {
  x: number; y: number;
  r: number; maxR: number;
  opacity: number;
}

// Cada icone e desenhado centralizado em (0, 0), cabendo no raio informado.
// As cores do contexto sao definidas antes de chamar estas funcoes.

function iconData(ctx: CanvasRenderingContext2D, r: number): void {
  // Cilindros de banco de dados.
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
  // Colchetes de codigo: < / >.
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
  // Rede neural: 3 entradas, 2 nos intermediarios e 1 saida.
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
  // Nuvem simplificada com tres arcos superiores.
  const by = r * 0.18;
  ctx.beginPath();
  ctx.arc(-r * 0.24, -by, r * 0.28, Math.PI, 0, false);
  ctx.arc(r * 0.12, -by - r * 0.14, r * 0.22, Math.PI, 0, false);
  ctx.arc(r * 0.42, by - r * 0.06, r * 0.18, -Math.PI / 2, Math.PI / 3, false);
  ctx.lineTo(r * 0.5, by + r * 0.1);
  ctx.arc(0, by + r * 0.1, r * 0.50, 0, Math.PI, false);
  ctx.closePath();
  ctx.stroke();
}

function iconLock(ctx: CanvasRenderingContext2D, r: number): void {
  // Cadeado com corpo arredondado e haste semicircular.
  const bw = r * 0.56, bh = r * 0.44, by = r * 0.14;
  ctx.beginPath();
  ctx.roundRect(-bw / 2, by - bh / 2, bw, bh, r * 0.1);
  ctx.stroke();
  const sw = bw * 0.28, sTop = by - bh / 2 - r * 0.2;
  ctx.beginPath();
  ctx.moveTo(-sw, by - bh / 2);
  ctx.lineTo(-sw, sTop);
  ctx.arc(0, sTop, sw, Math.PI, 0);
  ctx.lineTo(sw, by - bh / 2);
  ctx.stroke();
  ctx.beginPath(); ctx.arc(0, by, r * 0.1, 0, Math.PI * 2); ctx.fill();
}

function iconChip(ctx: CanvasRenderingContext2D, r: number): void {
  // Chip com nucleo interno e pinos nas quatro laterais.
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
  // Dois pontos conectados por uma linha central.
  const cx = r * 0.46;
  ctx.beginPath(); ctx.arc(-cx, 0, r * 0.28, 0, Math.PI * 2); ctx.stroke();
  ctx.beginPath(); ctx.arc( cx, 0, r * 0.28, 0, Math.PI * 2); ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(-cx + r * 0.28, 0); ctx.lineTo(cx - r * 0.28, 0);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(0, -r * 0.1); ctx.lineTo(0, r * 0.1);
  ctx.stroke();
}

function iconML(ctx: CanvasRenderingContext2D, r: number): void {
  // Dois lobos sobrepostos para representar modelo/IA.
  const ox = r * 0.24, oy = r * 0.08, lr = r * 0.34;
  ctx.beginPath(); ctx.arc(-ox, -oy, lr, 0, Math.PI * 2); ctx.stroke();
  ctx.beginPath(); ctx.arc( ox, -oy, lr, 0, Math.PI * 2); ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(0, -oy - lr * 0.8);
  ctx.lineTo(0,  oy + r * 0.28);
  ctx.stroke();
}

const BADGE_SPECS: BadgeSpec[] = [
  { label: 'Dados', draw: iconData        },
  { label: 'API', draw: iconApi           },
  { label: 'IA', draw: iconAI             },
  { label: 'Nuvem', draw: iconCloud       },
  { label: 'Conexões', draw: iconIntegration },
  { label: 'Seguro', draw: iconLock       },
  { label: 'Sistema', draw: iconChip      },
  { label: 'Automação', draw: iconML      },
];

// Sprites sao gerados uma vez e reutilizados em cada frame.

const SPRITE_SIZE = 156;
const LABEL_PAD   = 30;

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
  const cy = size * 0.42;
  const r  = size * 0.28;

  c.shadowColor = 'rgba(255,255,255,0.34)';
  c.shadowBlur = size * 0.14;
  c.fillStyle = 'rgba(255,255,255,0.08)';
  c.globalAlpha = 1;
  c.beginPath(); c.arc(cx, cy, r, 0, Math.PI * 2); c.fill();

  c.strokeStyle = 'rgba(255,255,255,0.46)';
  c.lineWidth = 2;
  c.beginPath(); c.arc(cx, cy, r, 0, Math.PI * 2); c.stroke();

  c.save();
  c.translate(cx, cy);
  c.shadowBlur = 0;
  c.strokeStyle = 'rgba(255,255,255,0.86)';
  c.fillStyle   = 'rgba(255,255,255,0.86)';
  c.lineWidth   = size * 0.028;
  c.lineCap  = 'round';
  c.lineJoin = 'round';
  spec.draw(c, r * 0.56);
  c.restore();

  c.shadowColor = 'rgba(60,0,10,0.55)';
  c.shadowBlur = 8;
  c.fillStyle = 'rgba(255,255,255,0.88)';
  c.font = `700 ${spec.label.length > 7 ? 12 : 13}px Arial, sans-serif`;
  c.textAlign = 'center';
  c.textBaseline = 'middle';
  c.fillText(spec.label, cx, size + LABEL_PAD * 0.46);

  return oc;
}

const ATTR_FRAC  = 0.11;    // raio de absorcao relativo ao menor lado
const INF_FRAC   = 0.56;    // raio de influencia para curvar os badges
const CONN_DIST  = 150;     // distancia maxima das linhas de conexao
const GRID_COLS  = 22;
const GRID_ROWS  = 14;
const GRID_SAMP  = 50;
const DIST_RAD   = 0.18;    // raio de distorcao do mouse
const DIST_AMP   = 34;

function badgeCount(cw: number): number {
  if (cw <= 600)  return 16;
  if (cw <= 1024) return 26;
  return 38;
}

export function initTechField(): void {
  const canvas = document.getElementById('techField') as HTMLCanvasElement | null;
  const section = document.getElementById('tecnologia');
  if (!canvas || !section) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  let w = 0, h = 0, dpr = 1;
  let rafId = 0, lastT = 0;

  const mouse:       Vec2 = { x: 0.5, y: 0.5 };
  const mouseSmooth: Vec2 = { x: 0.5, y: 0.5 };
  let mousePulse = 0;

  // Atrator alinhado ao triangulo central da secao.
  const attractor: Vec2 = { x: 0.5, y: 0.50 };

  const badges:  BadgeParticle[] = [];
  const pulses:  Pulse[]         = [];

  // Um sprite por badge, criado uma vez na inicializacao.
  const sprites: SpriteCanvas[] = BADGE_SPECS.map(s => bakeSprite(s, SPRITE_SIZE));

  function rnd(lo: number, hi: number): number { return lo + Math.random() * (hi - lo); }

  function edgeSpawn(): Vec2 {
    const side = (Math.random() * 4) | 0;
    if (side === 0) return { x: Math.random() * w, y: -40 };
    if (side === 1) return { x: w + 40, y: Math.random() * h };
    if (side === 2) return { x: Math.random() * w, y: h + 40 };
    return { x: -40, y: Math.random() * h };
  }

  function makeBadge(fromEdge: boolean): BadgeParticle {
    const depth = rnd(0.30, 1);
    const spd   = rnd(0.24, 0.52) * depth;
    const pos   = fromEdge ? edgeSpawn() : { x: rnd(0.1, 0.9) * w, y: rnd(0.1, 0.9) * h };
    const tx = attractor.x * w - pos.x;
    const ty = attractor.y * h - pos.y;
    const len = Math.hypot(tx, ty) || 1;
    const wobble = rnd(-0.16, 0.16);
    const dirX = tx / len + (-ty / len) * wobble;
    const dirY = ty / len + (tx / len) * wobble;
    return {
      x: pos.x, y: pos.y, vx: 0, vy: 0,
      r: rnd(22, 32) + depth * 14,
      opacity:       fromEdge ? 0 : rnd(0.18, 0.95),
      targetOpacity: rnd(0.72, 1),
      specIndex: (Math.random() * BADGE_SPECS.length) | 0,
      depth,
      phase:  fromEdge ? 0 : 1,
      phaseT: fromEdge ? 0 : Math.random(),
      driftVx: dirX * spd,
      driftVy: dirY * spd,
    };
  }

  function resetBadge(b: BadgeParticle): void {
    const depth = rnd(0.30, 1);
    const spd   = rnd(0.24, 0.52) * depth;
    const pos   = edgeSpawn();
    const tx = attractor.x * w - pos.x;
    const ty = attractor.y * h - pos.y;
    const len = Math.hypot(tx, ty) || 1;
    const wobble = rnd(-0.16, 0.16);
    b.x = pos.x; b.y = pos.y; b.vx = 0; b.vy = 0;
    b.r            = rnd(22, 32) + depth * 14;
    b.opacity      = 0;
    b.targetOpacity = rnd(0.72, 1);
    b.specIndex    = (Math.random() * BADGE_SPECS.length) | 0;
    b.depth        = depth;
    b.phase        = 0; b.phaseT = 0;
    b.driftVx      = (tx / len + (-ty / len) * wobble) * spd;
    b.driftVy      = (ty / len + (tx / len) * wobble) * spd;
  }

  function populate(): void {
    const count = badgeCount(w);
    for (let i = 0; i < count; i++) badges.push(makeBadge(true));
  }

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
          // Nasce com fade-in e movimento leve.
          b.phaseT = Math.min(1, b.phaseT + dt * 3.5);
          b.opacity = b.phaseT * b.targetOpacity * 0.72;
          b.x += b.driftVx * dt * 190;
          b.y += b.driftVy * dt * 190;
          if (b.phaseT >= 1) { b.phase = 2; b.phaseT = 0; }
          break;
        }
        case 1: {
          // Flutua naturalmente ate entrar no raio de influencia.
          b.opacity += (b.targetOpacity - b.opacity) * Math.min(1, dt * 5);
          b.vx += (b.driftVx - b.vx) * Math.min(1, dt * 8);
          b.vy += (b.driftVy - b.vy) * Math.min(1, dt * 8);
          b.x += b.vx * dt * 180;
          b.y += b.vy * dt * 180;
          if (dist < infR) { b.phase = 2; b.phaseT = 0; }
          // Fora da tela, volta para uma borda.
          if (b.x < -80 || b.x > w + 80 || b.y < -80 || b.y > h + 80) resetBadge(b);
          break;
        }
        case 2: {
          // Curva em direcao ao nucleo do triangulo.
          const t    = Math.max(0, 1 - dist / infR);
          const pull = 0.018 * (0.42 + t * t) * b.depth;
          b.vx += (dx / dist) * pull * 60 * dt;
          b.vy += (dy / dist) * pull * 60 * dt;
          b.vx *= 0.982;
          b.vy *= 0.982;
          b.x += b.vx * dt * 260;
          b.y += b.vy * dt * 260;
          const fadeStart = infR * 0.62;
          const fadeNear = Math.max(0, Math.min(1, dist / fadeStart));
          b.opacity = b.targetOpacity * Math.max(0, fadeNear * fadeNear);
          if (dist < absR) { b.phase = 3; b.phaseT = 0; }
          break;
        }
        case 3: {
          // Some ao ser absorvido pelo triangulo.
          b.phaseT = Math.min(1, b.phaseT + dt * 6.2);
          const fade = 1 - b.phaseT;
          b.opacity = b.targetOpacity * Math.max(0, fade * fade) * 0.35;
          b.x += (dx / dist) * dt * 360;
          b.y += (dy / dist) * dt * 360;
          if (b.phaseT >= 0.3 && pulses.length < 6) {
            // Pulso visual emitido apenas uma vez na absorcao.
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

    // Mantem a quantidade adequada para o tamanho atual.
    const count = badgeCount(w);
    while (badges.length < count) badges.push(makeBadge(true));
    if (badges.length > count + 4) badges.length = count + 4;

    // Atualiza os pulsos de absorcao.
    for (let i = pulses.length - 1; i >= 0; i--) {
      const p = pulses[i];
      p.r       += (p.maxR - p.r) * dt * 5;
      p.opacity -= dt * 2.2;
      if (p.opacity <= 0) pulses.splice(i, 1);
    }
  }

  function drawBackground(): void {
    ctx.fillStyle = '#5a0712';
    ctx.fillRect(0, 0, w, h);

    const cx = attractor.x * w;
    const cy = attractor.y * h;
    const core = ctx.createRadialGradient(cx, cy, 0, cx, cy, Math.min(w, h) * 0.58);
    core.addColorStop(0, 'rgba(255,255,255,0.12)');
    core.addColorStop(0.22, 'rgba(255,56,88,0.42)');
    core.addColorStop(0.58, 'rgba(128,10,26,0.54)');
    core.addColorStop(1, 'rgba(90,7,18,0)');
    ctx.fillStyle = core;
    ctx.fillRect(0, 0, w, h);

    const vignette = ctx.createRadialGradient(cx, cy, Math.min(w, h) * 0.24, cx, cy, Math.max(w, h) * 0.78);
    vignette.addColorStop(0, 'rgba(0,0,0,0)');
    vignette.addColorStop(1, 'rgba(70,0,12,0.34)');
    ctx.fillStyle = vignette;
    ctx.fillRect(0, 0, w, h);
  }

  // Grade regular que distorce perto do cursor para reforcar profundidade.

  function drawGrid(): void {
    if (mousePulse < 0.02) return;

    const mx     = mouse.x * w;
    const my     = mouse.y * h;
    const distR  = Math.min(w, h) * DIST_RAD;
    const distR2 = distR * distR;

    ctx.save();
    ctx.strokeStyle = `rgba(255,255,255,${0.13 * mousePulse})`;
    ctx.lineWidth   = 0.65;
    ctx.lineCap = 'round';

    // Linhas horizontais.
    for (let row = 0; row <= GRID_ROWS; row++) {
      const y0 = (row / GRID_ROWS) * h;
      ctx.beginPath();
      for (let s = 0; s <= GRID_SAMP; s++) {
        const px = (s / GRID_SAMP) * w;
        const dx = px - mx;
        const dy = y0 - my;
        const d2 = dx * dx + dy * dy;
        // Repulsao suave com pico perto do meio do raio.
        const t     = Math.max(0, 1 - d2 / distR2);
        const yDisp = (dy / (Math.sqrt(d2) || 1)) * t * (1 - t) * 4 * DIST_AMP * mousePulse;
        const py    = y0 + yDisp;
        s === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
      }
      ctx.stroke();
    }

    // Linhas verticais.
    for (let col = 0; col <= GRID_COLS; col++) {
      const x0 = (col / GRID_COLS) * w;
      ctx.beginPath();
      for (let s = 0; s <= GRID_SAMP; s++) {
        const py = (s / GRID_SAMP) * h;
        const dx = x0 - mx;
        const dy = py - my;
        const d2 = dx * dx + dy * dy;
        const t     = Math.max(0, 1 - d2 / distR2);
        const xDisp = (dx / (Math.sqrt(d2) || 1)) * t * (1 - t) * 4 * DIST_AMP * mousePulse;
        const px    = x0 + xDisp;
        s === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
      }
      ctx.stroke();
    }

    ctx.restore();
  }

  function drawMouseDistortion(): void {
    if (mousePulse < 0.02) return;

    const mx = mouse.x * w;
    const my = mouse.y * h;
    const radius = Math.min(w, h) * DIST_RAD;

    ctx.save();
    ctx.globalCompositeOperation = 'screen';
    const glow = ctx.createRadialGradient(mx, my, 0, mx, my, radius);
    glow.addColorStop(0, `rgba(255,220,224,${0.24 * mousePulse})`);
    glow.addColorStop(0.34, `rgba(255,72,96,${0.14 * mousePulse})`);
    glow.addColorStop(1, 'rgba(255,72,96,0)');
    ctx.fillStyle = glow;
    ctx.fillRect(mx - radius, my - radius, radius * 2, radius * 2);

    ctx.globalCompositeOperation = 'multiply';
    const shadow = ctx.createRadialGradient(mx - radius * 0.18, my - radius * 0.18, 0, mx, my, radius * 1.08);
    shadow.addColorStop(0, 'rgba(255,255,255,0)');
    shadow.addColorStop(0.54, `rgba(90,0,14,${0.12 * mousePulse})`);
    shadow.addColorStop(1, 'rgba(90,0,14,0)');
    ctx.fillStyle = shadow;
    ctx.fillRect(mx - radius * 1.1, my - radius * 1.1, radius * 2.2, radius * 2.2);

    ctx.globalCompositeOperation = 'source-over';
    ctx.strokeStyle = `rgba(255,235,238,${0.18 * mousePulse})`;
    ctx.lineWidth = 1.2;
    ctx.beginPath();
    ctx.arc(mx, my, radius * (0.28 + 0.38 * (1 - mousePulse)), 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }

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
          ctx.strokeStyle = `rgba(255,255,255,${al * 0.72})`;
          ctx.lineWidth   = t * 0.65;
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
        }
      }
    }
    ctx.restore();
  }

  function drawBadges(): void {
    ctx.save();
    for (const b of badges) {
      if (b.opacity < 0.01) continue;

      // A dissolucao reduz o badge visualmente.
      const scale = b.phase === 3 ? Math.max(0.05, 1 - b.phaseT * 0.85) : 1;
      const drawR = b.r * scale;
      const spriteH = SPRITE_SIZE + LABEL_PAD;
      const speed = Math.hypot(b.vx, b.vy);
      if (speed > 0.001 && b.phase !== 3) {
        const trail = Math.min(130, 48 + speed * 260);
        const nx = b.vx / speed;
        const ny = b.vy / speed;
        const gradient = ctx.createLinearGradient(b.x - nx * trail, b.y - ny * trail, b.x, b.y);
        gradient.addColorStop(0, 'rgba(255,255,255,0)');
        gradient.addColorStop(1, `rgba(255,255,255,${Math.min(0.42, b.opacity * 0.34)})`);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = Math.max(1, drawR * 0.08);
        ctx.beginPath();
        ctx.moveTo(b.x - nx * trail, b.y - ny * trail);
        ctx.lineTo(b.x - nx * drawR * 0.5, b.y - ny * drawR * 0.5);
        ctx.stroke();
      }

      ctx.globalAlpha = Math.min(1, b.opacity);
      ctx.drawImage(
        sprites[b.specIndex] as CanvasImageSource,
        b.x - drawR,
        b.y - drawR,
        drawR * 2,
        drawR * 2 * (spriteH / SPRITE_SIZE),
      );
    }
    ctx.globalAlpha = 1;
    ctx.restore();
  }

  function drawPulses(): void {
    ctx.save();
    for (const p of pulses) {
      ctx.strokeStyle = `rgba(255,255,255,${p.opacity * 0.82})`;
      ctx.lineWidth   = 1.2;
      ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.stroke();
    }
    ctx.restore();
  }

  function tick(ts: number): void {
    rafId = requestAnimationFrame(tick);
    const dt = Math.min((ts - lastT) / 1000, 0.05);
    lastT = ts;

    mouseSmooth.x = mouse.x;
    mouseSmooth.y = mouse.y;
    mousePulse += (0 - mousePulse) * Math.min(1, dt * 8.5);

    update(dt);

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    drawBackground();
    drawMouseDistortion();
    drawConnections();
    drawBadges();
    drawPulses();
  }

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

  function onMouseMove(e: MouseEvent): void {
    const rect = section!.getBoundingClientRect();
    mouse.x = (e.clientX - rect.left) / rect.width;
    mouse.y = (e.clientY - rect.top)  / rect.height;
    mousePulse = 1;
  }

  doResize();
  populate();

  if (!isTouch) {
    section.addEventListener('mousemove', onMouseMove, { passive: true });
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
