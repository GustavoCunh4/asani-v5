import * as THREE from 'three';
import { FontLoader, Font } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';

export interface HeroBrand3D {
  canvas: HTMLCanvasElement;
  setAssembly(value: number): void;
  setWordmarkOpacity(value: number): void;
  setTriangleOpacity(value: number): void;
  setBrandScale(value: number): void;
}

export function initHeroBrand3D(): HeroBrand3D | null {
  const canvas = document.getElementById('heroBrand3D') as HTMLCanvasElement | null;
  const hero = document.getElementById('hero');
  if (!canvas || !hero) return null;

  const renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
    antialias: true,
    powerPreference: 'high-performance',
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.6));
  renderer.setClearColor(0x000000, 0);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(24, 1, 0.1, 100);
  camera.position.set(0, 0, 16.5);

  const hemi = new THREE.HemisphereLight(0xffffff, 0xeee8e4, 0.68);
  scene.add(hemi);

  const key = new THREE.DirectionalLight(0xffffff, 0.78);
  key.position.set(4.5, 5.5, 7.5);
  scene.add(key);

  const fill = new THREE.PointLight(0xfff4ee, 0.42, 30, 2);
  fill.position.set(-5.2, 1.4, 5.8);
  scene.add(fill);

  const brandRoot = new THREE.Group();
  const trianglePivot = new THREE.Group();
  const wordmarkGroup = new THREE.Group();
  brandRoot.add(trianglePivot, wordmarkGroup);
  scene.add(brandRoot);

  const brandState = {
    assembly: 0,
    wordmarkOpacity: 1,
    triangleOpacity: 1,
    triangleSpin: 0,
    dragY: 0,
    dragX: 0,
    brandScale: 1,
    layoutScale: 1,
  };

  const redMaterials = [
    new THREE.MeshStandardMaterial({ color: 0xc30012, roughness: 0.44, metalness: 0.64, envMapIntensity: 0.72 }),
    new THREE.MeshStandardMaterial({ color: 0x87000f, roughness: 0.48, metalness: 0.60, envMapIntensity: 0.68 }),
    new THREE.MeshStandardMaterial({ color: 0xa80010, roughness: 0.42, metalness: 0.66, envMapIntensity: 0.74 }),
  ];
  const wordMaterial = new THREE.MeshStandardMaterial({
    color: 0x111111,
    roughness: 0.22,
    metalness: 0.92,
    envMapIntensity: 0.9,
    transparent: true,
    opacity: 0,
  });

  type Point2D = [number, number];

  function makePiece(points: Point2D[], material: THREE.MeshStandardMaterial, depth: number): THREE.Mesh {
    const shape = new THREE.Shape();
    shape.moveTo(points[0][0], points[0][1]);
    for (let i = 1; i < points.length; i += 1) {
      shape.lineTo(points[i][0], points[i][1]);
    }
    shape.closePath();

    let geometry: THREE.BufferGeometry = new THREE.ExtrudeGeometry(shape, {
      depth,
      bevelEnabled: true,
      bevelSegments: 4,
      steps: 1,
      bevelSize: 0.016,
      bevelThickness: 0.022,
    });
    geometry.translate(0, 0, -depth / 2);
    if (geometry.index) geometry = geometry.toNonIndexed();
    geometry.computeVertexNormals();

    const mesh = new THREE.Mesh(geometry, material);
    mesh.castShadow = false;
    mesh.receiveShadow = false;
    return mesh;
  }

  const outerSide = 3.8;
  const outerHeight = outerSide * Math.sqrt(3) / 2;
  const apex: Point2D = [0, outerHeight / 2];
  const left: Point2D = [-outerSide / 2, -outerHeight / 2];
  const right: Point2D = [outerSide / 2, -outerHeight / 2];

  const lerpPoint = (a: Point2D, b: Point2D, t: number): Point2D => [
    a[0] + (b[0] - a[0]) * t,
    a[1] + (b[1] - a[1]) * t,
  ];
  const addPoint = (a: Point2D, b: Point2D): Point2D => [a[0] + b[0], a[1] + b[1]];
  const subPoint = (a: Point2D, b: Point2D): Point2D => [a[0] - b[0], a[1] - b[1]];
  const mulPoint = (a: Point2D, s: number): Point2D => [a[0] * s, a[1] * s];
  const cross2D = (a: Point2D, b: Point2D, c: Point2D): number =>
    (b[0] - a[0]) * (c[1] - a[1]) - (b[1] - a[1]) * (c[0] - a[0]);
  const lengthOf = (v: Point2D): number => Math.hypot(v[0], v[1]) || 1;
  const normalize = (v: Point2D): Point2D => {
    const len = lengthOf(v);
    return [v[0] / len, v[1] / len];
  };

  function lineIntersection(p1: Point2D, p2: Point2D, p3: Point2D, p4: Point2D): Point2D {
    const [x1, y1] = p1, [x2, y2] = p2, [x3, y3] = p3, [x4, y4] = p4;
    const denom = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);
    if (Math.abs(denom) < 1e-6) return p2;
    const px = ((x1 * y2 - y1 * x2) * (x3 - x4) - (x1 - x2) * (x3 * y4 - y3 * x4)) / denom;
    const py = ((x1 * y2 - y1 * x2) * (y3 - y4) - (y1 - y2) * (x3 * y4 - y3 * x4)) / denom;
    return [px, py];
  }

  function clipPolygon(poly: Point2D[], lineA: Point2D, lineB: Point2D, keepLeft: boolean): Point2D[] {
    const result: Point2D[] = [];
    const epsilon = 1e-6;
    for (let i = 0; i < poly.length; i += 1) {
      const current = poly[i];
      const next = poly[(i + 1) % poly.length];
      const currentInside = keepLeft ? cross2D(lineA, lineB, current) >= -epsilon : cross2D(lineA, lineB, current) <= epsilon;
      const nextInside = keepLeft ? cross2D(lineA, lineB, next) >= -epsilon : cross2D(lineA, lineB, next) <= epsilon;
      if (currentInside && nextInside) {
        result.push(next);
      } else if (currentInside && !nextInside) {
        result.push(lineIntersection(current, next, lineA, lineB));
      } else if (!currentInside && nextInside) {
        result.push(lineIntersection(current, next, lineA, lineB));
        result.push(next);
      }
    }
    return result;
  }

  function createChannel(start: Point2D, end: Point2D, width: number, samplePointOnPositiveSide: Point2D) {
    const dir = normalize(subPoint(end, start));
    let normal: Point2D = [-dir[1], dir[0]];
    if (cross2D(start, end, samplePointOnPositiveSide) < 0) {
      normal = mulPoint(normal, -1);
    }
    return {
      positiveStart: addPoint(start, mulPoint(normal, width / 2)),
      positiveEnd: addPoint(end, mulPoint(normal, width / 2)),
      negativeStart: addPoint(start, mulPoint(normal, -width / 2)),
      negativeEnd: addPoint(end, mulPoint(normal, -width / 2)),
    };
  }

  const shoulderRight = lerpPoint(apex, right, 0.4);
  const mainCenterStart = left;
  const mainCenterEnd = shoulderRight;
  const centerJoinBase = lerpPoint(mainCenterStart, mainCenterEnd, (-left[0]) / (shoulderRight[0] - left[0]));
  const centerJoin: Point2D = [0, centerJoinBase[1]];

  const mainCut = createChannel(mainCenterStart, mainCenterEnd, 0.16, apex);
  const secondaryCut = createChannel(centerJoin, right, 0.13, shoulderRight);
  const outerPolygon: Point2D[] = [left, apex, right];
  const topPolygon = clipPolygon(outerPolygon, mainCut.positiveStart, mainCut.positiveEnd, true);
  const lowerRegion = clipPolygon(outerPolygon, mainCut.negativeStart, mainCut.negativeEnd, false);
  const rightPolygon = clipPolygon(lowerRegion, secondaryCut.positiveStart, secondaryCut.positiveEnd, true);
  const bottomPolygon = clipPolygon(lowerRegion, secondaryCut.negativeStart, secondaryCut.negativeEnd, false);

  const trianglePieces = [
    makePiece(topPolygon, redMaterials[0], 0.22),
    makePiece(bottomPolygon, redMaterials[1], 0.24),
    makePiece(rightPolygon, redMaterials[2], 0.2),
  ];
  const triangleOrigins = [
    new THREE.Vector3(-1.0, 0.78, 0),
    new THREE.Vector3(-0.14, -0.96, 0),
    new THREE.Vector3(0.94, 0.12, 0),
  ];
  trianglePieces.forEach((piece, index) => {
    (piece as any).userData.origin = triangleOrigins[index];
    trianglePivot.add(piece);
  });
  trianglePivot.position.set(0, 0.42, 0);

  canvas.classList.remove('is-wordmark-ready');

  const solidLetters: THREE.Mesh[] = [];
  const particleLetters: THREE.InstancedMesh[] = [];
  const tempMatrix = new THREE.Matrix4();
  const tempPosition = new THREE.Vector3();
  const tempScale = new THREE.Vector3();
  const tempQuaternion = new THREE.Quaternion();

  function buildWordmark(font: Font): void {
    if (solidLetters.length || particleLetters.length) return;
    const chars = 'ASANI'.split('');
    const size = 0.66;
    const depth = 0.16;
    const spacing = 0.08;
    let offsetX = 0;

    chars.forEach((char, index) => {
      let geometry: THREE.BufferGeometry = new TextGeometry(char, {
        font,
        size,
        height: depth,
        curveSegments: 10,
        bevelEnabled: true,
        bevelThickness: 0.012,
        bevelSize: 0.01,
        bevelSegments: 3,
      });
      geometry.computeBoundingBox();
      const bounds = geometry.boundingBox!;
      const width = bounds.max.x - bounds.min.x;
      geometry.translate(-(bounds.min.x + width / 2), 0, -depth / 2);
      if (geometry.index) geometry = geometry.toNonIndexed();
      geometry.computeVertexNormals();

      const basePosition = new THREE.Vector3(offsetX + width / 2, 0, 0);
      const solidMesh = new THREE.Mesh(geometry.clone(), wordMaterial.clone() as THREE.MeshStandardMaterial);
      solidMesh.userData.basePosition = basePosition.clone();
      solidMesh.userData.index = index;
      (solidMesh.material as THREE.MeshStandardMaterial).opacity = 0;
      (solidMesh.material as THREE.MeshStandardMaterial).transparent = true;
      solidMesh.renderOrder = 6;
      (solidMesh.material as THREE.MeshStandardMaterial).depthWrite = false;
      wordmarkGroup.add(solidMesh);
      solidLetters.push(solidMesh);

      const positionAttr = geometry.getAttribute('position');
      const sampled: THREE.Vector3[] = [];
      const step = Math.max(1, Math.floor(positionAttr.count / 145));
      for (let i = 0; i < positionAttr.count; i += step) {
        sampled.push(new THREE.Vector3(
          positionAttr.getX(i),
          positionAttr.getY(i),
          positionAttr.getZ(i)
        ));
      }

      const particleMaterial = new THREE.MeshStandardMaterial({
        color: 0xefe7e2,
        roughness: 0.2,
        metalness: 0.62,
        envMapIntensity: 0.68,
        transparent: true,
        opacity: 0,
      });
      const particles = new THREE.InstancedMesh(
        new THREE.SphereGeometry(0.028, 8, 8),
        particleMaterial,
        sampled.length
      );
      particles.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
      particles.renderOrder = 4;
      (particles.material as THREE.MeshStandardMaterial).depthWrite = false;
      particles.userData.basePosition = basePosition.clone();
      particles.userData.index = index;
      particles.userData.targets = sampled;
      particles.userData.starts = sampled.map((target, pointIndex) => {
        const lane = pointIndex % 3;
        const horizontalSign = target.x >= 0 ? 1 : -1;
        const sideStartX = basePosition.x + horizontalSign * (2.2 + Math.random() * 2.4);
        const sideStartY = basePosition.y + (Math.random() - 0.5) * 0.9;
        const bottomStartX = basePosition.x + (Math.random() - 0.5) * 2.6;
        const bottomStartY = basePosition.y - (1.8 + Math.random() * 1.9);
        return new THREE.Vector3(
          lane === 2 ? bottomStartX : sideStartX,
          lane === 2 ? bottomStartY : sideStartY,
          target.z + 1.2 + Math.random() * 1.2
        );
      });
      particles.userData.jitter = sampled.map(() => Math.random() * 0.24);
      wordmarkGroup.add(particles);
      particleLetters.push(particles);
      offsetX += width + spacing;
    });

    const centerOffset = offsetX / 2 - spacing / 2;
    solidLetters.forEach((letter) => {
      letter.userData.basePosition.x -= centerOffset;
    });
    particleLetters.forEach((letter) => {
      letter.userData.basePosition.x -= centerOffset;
      if (letter.userData.starts) {
        (letter.userData.starts as THREE.Vector3[]).forEach((startPoint) => {
          startPoint.x -= centerOffset;
        });
      }
    });
    wordmarkGroup.position.set(0, -1.56, 0);
    canvas.classList.add('is-wordmark-ready');
    applyAssembly();
  }

  const isDesktopBrand = window.innerWidth > 1024;
  if (isDesktopBrand) {
    const loader = new FontLoader();
    loader.load(
      '/assets/helvetiker_regular.typeface.json',
      (font: Font) => buildWordmark(font),
      undefined,
      () => {}
    );
  }

  const hitPlane = new THREE.Mesh(
    new THREE.BoxGeometry(5.2, 5.2, 0.8),
    new THREE.MeshBasicMaterial({ visible: false })
  );
  hitPlane.position.copy(trianglePivot.position);
  scene.add(hitPlane);

  const pointer = { x: 0, y: 0 };
  const raycaster = new THREE.Raycaster();
  const mouseNDC = new THREE.Vector2();
  let isDragging = false;
  let lastDragX = 0;
  let lastDragY = 0;
  let dragVelY = 0;
  let dragVelX = 0;
  let active = true;

  function applyAssembly(): void {
    const t = brandState.assembly;
    const eased = t * t * (3 - 2 * t);
    const assemblySpread = canInteract() ? 1 : 0.08;

    trianglePieces.forEach((piece) => {
      const origin = piece.userData.origin as THREE.Vector3;
      piece.position.set(
        origin.x * assemblySpread * (1 - eased),
        origin.y * assemblySpread * (1 - eased),
        0
      );
      (piece.material as THREE.MeshStandardMaterial).opacity = brandState.triangleOpacity;
      (piece.material as THREE.MeshStandardMaterial).transparent = brandState.triangleOpacity < 0.999;
    });

    particleLetters.forEach((letter) => {
      const delay = letter.userData.index * 0.085;
      const local = Math.max(0, Math.min(1, (t - delay) / 0.62));
      const reveal = local * local * (3 - 2 * local);
      letter.position.set(0, 0, 0);
      letter.rotation.set(0, 0, 0);
      letter.scale.setScalar(1);
      const targets = letter.userData.targets as THREE.Vector3[];
      const starts = letter.userData.starts as THREE.Vector3[];
      const jitter = letter.userData.jitter as number[];

      for (let i = 0; i < targets.length; i += 1) {
        const pointDelay = delay + jitter[i];
        const particleLocal = Math.max(0, Math.min(1, (t - pointDelay) / 0.5));
        const particleReveal = particleLocal * particleLocal * (3 - 2 * particleLocal);
        tempPosition.copy(starts[i]).lerp(targets[i], particleReveal);
        const drift = (1 - particleReveal);
        tempPosition.x += Math.sin((i * 1.7) + t * 11) * 0.024 * drift;
        tempPosition.y += Math.cos((i * 1.3) + t * 9) * 0.024 * drift;
        tempPosition.z += drift * 0.3;
        const moleculeScale = 0.3 + particleReveal * 0.7;
        tempScale.setScalar(moleculeScale);
        tempMatrix.compose(tempPosition, tempQuaternion, tempScale);
        letter.setMatrixAt(i, tempMatrix);
      }
      letter.instanceMatrix.needsUpdate = true;
      const particleOpacity = Math.max(0, 1 - Math.max(0, t - 0.82) / 0.18);
      (letter.material as THREE.MeshStandardMaterial).opacity =
        Math.min(1, reveal * 1.2) * particleOpacity * brandState.wordmarkOpacity;
    });

    solidLetters.forEach((letter) => {
      const delay = letter.userData.index * 0.085;
      const local = Math.max(0, Math.min(1, (t - (delay + 0.28)) / 0.26));
      const reveal = local * local * (3 - 2 * local);
      const base = letter.userData.basePosition as THREE.Vector3;
      letter.position.set(base.x, base.y + (1 - reveal) * 0.03, 0.06);
      letter.rotation.set(0, 0, 0);
      letter.scale.setScalar(0.985 + reveal * 0.015);
      (letter.material as THREE.MeshStandardMaterial).opacity =
        Math.min(1, reveal * 1.35) * brandState.wordmarkOpacity;
    });
  }

  function setBrandState(next: Partial<typeof brandState>): void {
    Object.assign(brandState, next);
    applyAssembly();
  }

  function canInteract(): boolean {
    return window.innerWidth > 1024;
  }

  function resize(): void {
    const w = hero!.clientWidth || window.innerWidth;
    const h = hero!.clientHeight || window.innerHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();

    const narrow = window.innerWidth <= 480;
    const mobile = window.innerWidth <= 768;
    if (narrow) {
      camera.position.set(0, 0.0, 16.5);
      brandState.layoutScale = 0.60;
      brandRoot.scale.setScalar(brandState.layoutScale * brandState.brandScale);
      trianglePivot.scale.setScalar(0.42);
      trianglePivot.position.set(0, 2.62, 0);
      wordmarkGroup.scale.setScalar(1);
      wordmarkGroup.position.set(0, -0.8, 0);
    } else if (mobile) {
      camera.position.set(0, 0.0, 14.5);
      brandState.layoutScale = 0.62;
      brandRoot.scale.setScalar(brandState.layoutScale * brandState.brandScale);
      trianglePivot.scale.setScalar(0.42);
      trianglePivot.position.set(0, 2.62, 0);
      wordmarkGroup.scale.setScalar(1);
      wordmarkGroup.position.set(0, -0.9, 0);
    } else if (window.innerWidth <= 1024) {
      camera.position.set(0, 0.0, 14.8);
      brandState.layoutScale = 0.78;
      brandRoot.scale.setScalar(brandState.layoutScale * brandState.brandScale);
      trianglePivot.scale.setScalar(0.74);
      trianglePivot.position.set(0, 2.16, 0);
      wordmarkGroup.scale.setScalar(1);
      wordmarkGroup.position.set(0, -0.86, 0);
    } else {
      camera.position.set(0, 0, 16.5);
      brandState.layoutScale = 0.7;
      brandRoot.scale.setScalar(brandState.layoutScale * brandState.brandScale);
      trianglePivot.scale.setScalar(0.78);
      wordmarkGroup.scale.setScalar(1.04);
      trianglePivot.position.set(0, 0.42, 0);
      wordmarkGroup.position.set(0, -1.56, 0);
    }
    if (!canInteract()) {
      trianglePivot.rotation.x = -0.05;
      trianglePivot.rotation.y = 0;
      trianglePivot.rotation.z = 0;
    }
    hitPlane.position.copy(trianglePivot.position);
  }

  canvas.addEventListener('mousedown', (event: MouseEvent) => {
    if (!canInteract()) return;
    const rect = canvas.getBoundingClientRect();
    mouseNDC.set(
      ((event.clientX - rect.left) / rect.width) * 2 - 1,
      -(((event.clientY - rect.top) / rect.height) * 2 - 1)
    );
    raycaster.setFromCamera(mouseNDC, camera);
    const hit = raycaster.intersectObject(hitPlane);
    if (!hit.length) return;
    isDragging = true;
    lastDragX = event.clientX;
    lastDragY = event.clientY;
    canvas.style.cursor = 'grabbing';
  });

  window.addEventListener('mousemove', (event: MouseEvent) => {
    const rect = canvas.getBoundingClientRect();
    pointer.x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
    pointer.y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
    if (!isDragging) return;
    dragVelY = (event.clientX - lastDragX) * 0.008;
    dragVelX = (event.clientY - lastDragY) * 0.004;
    lastDragX = event.clientX;
    lastDragY = event.clientY;
    trianglePivot.rotation.y += dragVelY;
    trianglePivot.rotation.x = Math.max(-0.55, Math.min(0.55, trianglePivot.rotation.x + dragVelX));
  });

  window.addEventListener('mouseup', () => {
    isDragging = false;
    canvas.style.cursor = canInteract() ? 'grab' : 'default';
  });

  resize();
  canvas.style.cursor = canInteract() ? 'grab' : 'default';
  window.addEventListener('resize', resize, { passive: true });

  const _brandObserver = new IntersectionObserver(
    (entries) => entries.forEach((entry) => { active = entry.isIntersecting; }),
    { threshold: 0.08 }
  );
  _brandObserver.observe(hero);

  setBrandState({ assembly: 0, wordmarkOpacity: isDesktopBrand ? 1 : 0, triangleOpacity: 1 });

  let _rafId = 0;
  (function tick() {
    _rafId = window.requestAnimationFrame(tick);
    if (document.hidden || !active) return;

    if (!isDragging) {
      if (canInteract()) {
        trianglePivot.rotation.y += 0.009 + dragVelY;
        trianglePivot.rotation.x += (-pointer.y * 0.08 - trianglePivot.rotation.x) * 0.035;
      } else {
        trianglePivot.rotation.y += 0.011;
        trianglePivot.rotation.x += (-0.05 - trianglePivot.rotation.x) * 0.08;
      }
      dragVelY *= 0.92;
      dragVelX *= 0.92;
    } else {
      dragVelY *= 0.9;
      dragVelX *= 0.9;
    }

    const targetBrandScale = brandState.layoutScale * brandState.brandScale;
    brandRoot.scale.x += (targetBrandScale - brandRoot.scale.x) * 0.08;
    brandRoot.scale.y += (targetBrandScale - brandRoot.scale.y) * 0.08;
    brandRoot.scale.z += (targetBrandScale - brandRoot.scale.z) * 0.08;

    renderer.render(scene, camera);
  }());

  canvas.classList.add('is-brand-ready');

  return {
    canvas,
    setAssembly(value: number) { setBrandState({ assembly: value }); },
    setWordmarkOpacity(value: number) { setBrandState({ wordmarkOpacity: value }); },
    setTriangleOpacity(value: number) { setBrandState({ triangleOpacity: value }); },
    setBrandScale(value: number) { setBrandState({ brandScale: value }); },
  };
}
