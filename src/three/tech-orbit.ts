import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { isDesktop } from '../core/media';

export function initTechOrbit(): void {
  if (!isDesktop()) return;

  const canvas = document.getElementById('techOrbit') as HTMLCanvasElement | null;
  const section = document.getElementById('tecnologia');
  if (!canvas || !section) return;

  canvas.style.display = 'block';
  canvas.style.opacity = '0';

  const renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
    antialias: true,
    powerPreference: 'low-power',
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
  renderer.setClearColor(0x000000, 0);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(48, 1, 0.1, 100);
  camera.position.set(0, 0, 11);

  const style = getComputedStyle(document.documentElement);
  const accentHex = style.getPropertyValue('--accent').trim() || '#840016';

  function makeIconTexture(label: string, bgColor: string): THREE.CanvasTexture {
    const size = 128;
    const c = document.createElement('canvas');
    c.width = size; c.height = size;
    const ctx = c.getContext('2d')!;
    ctx.clearRect(0, 0, size, size);
    const r = 18;
    ctx.beginPath();
    ctx.moveTo(r, 0);
    ctx.lineTo(size - r, 0);
    ctx.arcTo(size, 0, size, r, r);
    ctx.lineTo(size, size - r);
    ctx.arcTo(size, size, size - r, size, r);
    ctx.lineTo(r, size);
    ctx.arcTo(0, size, 0, size - r, r);
    ctx.lineTo(0, r);
    ctx.arcTo(0, 0, r, 0, r);
    ctx.closePath();
    ctx.fillStyle = bgColor;
    ctx.fill();
    ctx.strokeStyle = 'rgba(255,255,255,0.18)';
    ctx.lineWidth = 2;
    ctx.stroke();
    const fontSize = label.length > 3 ? 20 : 26;
    ctx.fillStyle = '#f5f1f0';
    ctx.font = `700 ${fontSize}px 'JetBrains Mono', Courier New, monospace`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(label, size / 2, size / 2);
    return new THREE.CanvasTexture(c);
  }

  function makeCentralTexture(): THREE.CanvasTexture {
    const size = 256;
    const c = document.createElement('canvas');
    c.width = size; c.height = size;
    const ctx = c.getContext('2d')!;
    ctx.clearRect(0, 0, size, size);
    ctx.beginPath();
    ctx.arc(size / 2, size / 2, size / 2 - 4, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(255,255,255,0.05)';
    ctx.fill();
    ctx.strokeStyle = accentHex;
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.fillStyle = '#f5f1f0';
    ctx.font = `800 ${Math.round(size * 0.20)}px 'Clash Display', Arial Black, sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('Asani', size / 2, size / 2);
    return new THREE.CanvasTexture(c);
  }

  const centralMat = new THREE.SpriteMaterial({
    map: makeCentralTexture(),
    transparent: true,
    depthWrite: false,
  });
  const central = new THREE.Sprite(centralMat);
  central.scale.set(2.6, 2.6, 1);
  scene.add(central);

  const ringDefs = [
    { radius: 2.2, speed: 0.22, yScale: 0.32, items: [
      { label: 'AI',  bg: 'rgba(132,0,22,0.82)' },
      { label: 'GPT', bg: 'rgba(16,163,127,0.72)' },
      { label: 'WA',  bg: 'rgba(37,211,102,0.72)' },
    ]},
    { radius: 3.6, speed: 0.14, yScale: 0.28, items: [
      { label: 'AWS', bg: 'rgba(255,153,0,0.68)' },
      { label: 'GCP', bg: 'rgba(66,133,244,0.68)' },
      { label: 'PY',  bg: 'rgba(55,118,171,0.68)' },
      { label: 'API', bg: 'rgba(132,0,22,0.68)' },
    ]},
    { radius: 5.0, speed: 0.09, yScale: 0.22, items: [
      { label: 'RDS', bg: 'rgba(0,160,220,0.62)' },
      { label: 'HUB', bg: 'rgba(255,122,0,0.62)' },
      { label: 'SAP', bg: 'rgba(0,121,202,0.62)' },
      { label: 'N8N', bg: 'rgba(234,84,85,0.62)' },
      { label: 'ZAP', bg: 'rgba(255,74,23,0.62)' },
    ]},
  ];

  interface OrbitItem {
    sprite: THREE.Sprite;
    radius: number;
    speed: number;
    yScale: number;
    phase: number;
  }

  const orbitItems: OrbitItem[] = [];
  ringDefs.forEach((ring) => {
    ring.items.forEach((item, index) => {
      const tex = makeIconTexture(item.label, item.bg);
      const mat = new THREE.SpriteMaterial({ map: tex, transparent: true, depthWrite: false });
      const sprite = new THREE.Sprite(mat);
      sprite.scale.set(0.9, 0.9, 1);
      scene.add(sprite);
      orbitItems.push({
        sprite,
        radius: ring.radius,
        speed: ring.speed,
        yScale: ring.yScale,
        phase: (index / ring.items.length) * Math.PI * 2,
      });
    });
  });

  let mouseX = 0;
  let mouseY = 0;
  section.addEventListener('mousemove', (event: MouseEvent) => {
    const rect = section.getBoundingClientRect();
    mouseX = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
    mouseY = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
  });
  section.addEventListener('mouseleave', () => { mouseX = 0; mouseY = 0; });

  function resize(): void {
    const w = canvas!.clientWidth || section!.clientWidth || window.innerWidth;
    const h = canvas!.clientHeight || 520;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }

  resize();
  window.addEventListener('resize', resize, { passive: true });

  gsap.to(canvas, {
    opacity: 1,
    duration: 0.6,
    ease: 'power2.out',
    immediateRender: false,
    scrollTrigger: {
      trigger: section,
      start: 'top 88%',
      once: true,
    },
  });

  let active = false;
  const clock = new THREE.Clock();
  const visObs = new IntersectionObserver((entries) => {
    entries.forEach((entry) => { active = entry.isIntersecting; });
  }, { threshold: 0.1 });
  visObs.observe(section);

  (function tick() {
    window.requestAnimationFrame(tick);
    if (document.hidden || !active) return;

    const time = clock.getElapsedTime();
    orbitItems.forEach((item) => {
      const angle = item.phase + time * item.speed;
      item.sprite.position.set(
        Math.cos(angle) * item.radius,
        Math.sin(angle) * item.radius * item.yScale,
        0,
      );
    });

    camera.position.x += (mouseX * 0.3 - camera.position.x) * 0.055;
    camera.position.y += (-mouseY * 0.3 - camera.position.y) * 0.055;
    camera.lookAt(0, 0, 0);

    renderer.render(scene, camera);
  }());
}
