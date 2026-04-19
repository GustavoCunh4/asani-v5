import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { getScrollVelocity } from '../core/lenis';

export function initCtaAmbient(): void {
  const canvas = document.getElementById('ctaCanvas') as HTMLCanvasElement | null;
  const section = document.getElementById('contato');
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
  const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
  camera.position.set(0, 0, 14);

  const group = new THREE.Group();
  scene.add(group);

  scene.add(new THREE.AmbientLight(0xffffff, 0.85));

  const keyLight = new THREE.PointLight(0xa3001d, 3.5, 44, 2);
  keyLight.position.set(0, 1, 10);
  scene.add(keyLight);

  const rimLight = new THREE.PointLight(0xffffff, 1.2, 34, 2);
  rimLight.position.set(-8, -2, 8);
  scene.add(rimLight);

  const material = new THREE.MeshPhysicalMaterial({
    color: 0x8f1122,
    roughness: 0.22,
    metalness: 0.24,
    clearcoat: 0.9,
    clearcoatRoughness: 0.22,
  });

  interface Orbiter {
    node: THREE.Group;
    radius: number;
    speed: number;
    phase: number;
    yScale: number;
    zAmp: number;
    spinX: number;
    spinY: number;
    spinZ: number;
  }

  const orbiters: Orbiter[] = [];
  const count = 72;

  for (let index = 0; index < count; index += 1) {
    const ratio = index / count;
    const node = new THREE.Group();
    const mesh = new THREE.Mesh(
      new THREE.IcosahedronGeometry(0.04 + (index % 4) * 0.008, 0),
      material.clone()
    );

    node.add(mesh);
    group.add(node);

    orbiters.push({
      node,
      radius: 4.2 + (index % 6) * 0.08,
      speed: 0.8 + (index % 5) * 0.014,
      phase: ratio * Math.PI * 2,
      yScale: 0.76,
      zAmp: 0.04 + (index % 3) * 0.008,
      spinX: 0.012 + (index % 3) * 0.001,
      spinY: 0.016 + (index % 4) * 0.001,
      spinZ: 0.01 + (index % 5) * 0.0008,
    });
  }

  function resize(): void {
    const width = section!.clientWidth || window.innerWidth;
    const height = section!.clientHeight || 520;
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  }

  resize();
  window.addEventListener('resize', resize, { passive: true });

  material.dispose();

  gsap.to(canvas, {
    opacity: 1,
    duration: 0.44,
    ease: 'power2.out',
    immediateRender: false,
    scrollTrigger: {
      trigger: section,
      start: 'top 92%',
      once: true,
    },
  });

  let active = false;
  let _rafId = 0;
  const clock = new THREE.Clock();
  const visibilityObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => { active = entry.isIntersecting; });
  }, { threshold: 0.16 });
  visibilityObserver.observe(section);

  (function render() {
    _rafId = window.requestAnimationFrame(render);
    if (document.hidden || !active) return;

    const time = clock.getElapsedTime();
    const velocityFactor = Math.min(Math.abs(getScrollVelocity()) * 0.02, 0.32);

    orbiters.forEach((orbiter, index) => {
      const angle = orbiter.phase + time * orbiter.speed;
      const radiusJitter = 1 + Math.sin(time * 0.28 + index * 0.09) * 0.003;
      const x = Math.cos(angle) * orbiter.radius * radiusJitter;
      const y = Math.sin(angle) * orbiter.radius * orbiter.yScale;
      const z = Math.cos(angle) * orbiter.zAmp - 4.3;

      orbiter.node.position.set(x, y, z);
      orbiter.node.rotation.x += orbiter.spinX + velocityFactor * 0.018;
      orbiter.node.rotation.y += orbiter.spinY + velocityFactor * 0.022;
      orbiter.node.rotation.z += orbiter.spinZ + velocityFactor * 0.014;
    });

    renderer.render(scene, camera);
  }());
}
