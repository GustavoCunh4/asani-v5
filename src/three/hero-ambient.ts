import * as THREE from 'three';
import { getScrollVelocity } from '../core/lenis';

export function initHeroAmbient(): void {
  const canvas = document.getElementById('heroAmbient') as HTMLCanvasElement | null;
  const hero = document.getElementById('hero');
  if (!canvas || !hero) return;

  canvas.style.display = 'block';

  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: false,
    alpha: true,
    powerPreference: 'low-power',
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
  renderer.setClearColor(0x000000, 0);

  const scene = new THREE.Scene();
  const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
  const geometry = new THREE.PlaneGeometry(2, 2);

  const material = new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    uniforms: {
      uTime: { value: 0 },
      uVelocity: { value: 0 },
      uResolution: { value: new THREE.Vector2() },
    },
    vertexShader: `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      precision mediump float;
      uniform float uTime;
      uniform float uVelocity;
      uniform vec2 uResolution;
      varying vec2 vUv;

      float hash(vec2 p) {
        p = fract(p * vec2(234.34, 435.345));
        p += dot(p, p + 34.23);
        return fract(p.x * p.y);
      }

      float noise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        f = f * f * (3.0 - 2.0 * f);
        return mix(
          mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x),
          mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x),
          f.y
        );
      }

      float fbm(vec2 p) {
        float v = 0.0;
        float a = 0.52;
        for (int i = 0; i < 5; i++) {
          v += a * noise(p);
          p = p * 2.1 + vec2(0.31, 0.73);
          a *= 0.46;
        }
        return v;
      }

      void main() {
        vec2 uv = vUv;
        uv.x *= uResolution.x / uResolution.y;

        float vel = clamp(abs(uVelocity) * 0.018, 0.0, 0.55);
        float t = uTime * (0.055 + vel * 0.045);
        vec2 q = vec2(fbm(uv + t * 0.38), fbm(uv + vec2(1.3, 0.8)));
        vec2 r = vec2(
          fbm(uv + 1.7 * q + vec2(1.7, 9.2) + t * 0.12),
          fbm(uv + 1.7 * q + vec2(8.3, 2.8) + t * 0.09)
        );
        float f = fbm(uv + r + vel * 0.18 * q);
        f = smoothstep(0.30, 0.82, f);

        vec3 col = vec3(0.61, 0.0, 0.13) * f * 1.8;
        float vx = smoothstep(0.0, 0.35, vUv.x) * smoothstep(1.0, 0.62, vUv.x);
        float vy = smoothstep(0.0, 0.28, vUv.y) * smoothstep(1.0, 0.50, vUv.y);
        gl_FragColor = vec4(col, f * vx * vy * 0.72);
      }
    `,
  });

  scene.add(new THREE.Mesh(geometry, material));

  function resize(): void {
    const width = hero!.clientWidth || window.innerWidth;
    const height = hero!.clientHeight || window.innerHeight;
    renderer.setSize(width, height, false);
    material.uniforms.uResolution.value.set(width, height);
  }

  resize();
  window.addEventListener('resize', resize, { passive: true });

  let active = true;
  const startTime = performance.now();
  let smoothVel = 0;

  new IntersectionObserver((entries) => {
    entries.forEach((entry) => { active = entry.isIntersecting; });
  }, { threshold: 0.04 }).observe(hero);

  (function tick() {
    window.requestAnimationFrame(tick);
    if (document.hidden || !active) return;
    smoothVel += (getScrollVelocity() - smoothVel) * 0.08;
    material.uniforms.uTime.value = (performance.now() - startTime) * 0.001;
    material.uniforms.uVelocity.value = smoothVel;
    renderer.render(scene, camera);
  }());
}
