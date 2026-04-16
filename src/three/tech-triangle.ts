/**
 * Tech Triangle — spinning 3D wireframe triangle for the infrastructure section.
 * Rendered on its own transparent Three.js canvas, positioned over the 2D field.
 * Glow is simulated by stacking multiple Line objects with additive blending
 * at slightly increasing scales and decreasing opacity.
 */

import * as THREE from 'three';

export function initTechTriangle(): void {
  const canvas = document.getElementById('techTriangle') as HTMLCanvasElement | null;
  if (!canvas) return;

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setClearColor(0x000000, 0);

  const scene  = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(44, 1, 0.1, 100);
  camera.position.z = 4.6;

  // ── Equilateral triangle vertices (closed loop) ────────────────────────────
  const S  = 1.72;                          // side length
  const TH = S * Math.sqrt(3) / 2;          // height
  const verts = [
    new THREE.Vector3(0,        TH * 2 / 3,  0),   // top
    new THREE.Vector3(-S / 2,  -TH / 3,      0),   // bottom-left
    new THREE.Vector3( S / 2,  -TH / 3,      0),   // bottom-right
    new THREE.Vector3(0,        TH * 2 / 3,  0),   // close
  ];

  function makeLine(hexColor: string, opacity: number, scale: number): THREE.Line {
    const geo = new THREE.BufferGeometry().setFromPoints(verts);
    const mat = new THREE.LineBasicMaterial({
      color: hexColor,
      transparent: true,
      opacity,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const line = new THREE.Line(geo, mat);
    line.scale.setScalar(scale);
    return line;
  }

  // Stack 4 layers: core line + 3 increasingly diffuse glow halos
  const group = new THREE.Group();
  group.add(makeLine('#ff2244', 0.06, 1.16));  // outer halo
  group.add(makeLine('#e82040', 0.16, 1.08));  // mid halo
  group.add(makeLine('#d41c38', 0.46, 1.03));  // inner halo
  group.add(makeLine('#cc1830', 1.00, 1.00));  // core edge

  // Tilt forward so the triangle reads as 3D at rest
  group.rotation.x = 0.26;
  scene.add(group);

  // ── Render loop ────────────────────────────────────────────────────────────

  let rafId = 0;

  function tick(): void {
    rafId = requestAnimationFrame(tick);
    group.rotation.y += 0.007;
    renderer.render(scene, camera);
  }

  // ── Resize ─────────────────────────────────────────────────────────────────

  function doResize(): void {
    const rect = canvas!.getBoundingClientRect();
    if (!rect.width) return;
    renderer.setSize(rect.width, rect.height);
    camera.aspect = rect.width / rect.height;
    camera.updateProjectionMatrix();
  }

  doResize();

  let resizeTimer = 0;
  window.addEventListener('resize', () => {
    window.clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(doResize, 130);
  }, { passive: true });

  // ── IntersectionObserver: pause when off-screen ─────────────────────────────

  const io = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (e.isIntersecting && !rafId) {
        rafId = requestAnimationFrame(tick);
      } else if (!e.isIntersecting && rafId) {
        cancelAnimationFrame(rafId);
        rafId = 0;
      }
    }
  }, { threshold: 0.01 });
  io.observe(canvas);

  rafId = requestAnimationFrame(tick);
}
