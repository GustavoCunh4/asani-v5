import * as THREE from 'three';

export interface HeroBrand3D {
  canvas: HTMLCanvasElement;
  setAssembly(value: number): void;
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
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.18;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(24, 1, 0.1, 100);
  camera.position.set(0, 0, 16.5);

  const hemi = new THREE.HemisphereLight(0xffffff, 0xf4ece8, 0.92);
  scene.add(hemi);

  const key = new THREE.DirectionalLight(0xffffff, 1.08);
  key.position.set(4.8, 6.4, 8.2);
  scene.add(key);

  const fill = new THREE.PointLight(0xfff2ed, 0.72, 34, 2);
  fill.position.set(-5.4, 2.0, 6.2);
  scene.add(fill);

  const rim = new THREE.DirectionalLight(0xffd7dc, 0.36);
  rim.position.set(-3.8, 2.8, 5.2);
  scene.add(rim);

  const brandRoot = new THREE.Group();
  const trianglePivot = new THREE.Group();
  brandRoot.add(trianglePivot);
  scene.add(brandRoot);

  const brandState = {
    assembly: 0,
    triangleOpacity: 1,
    triangleSpin: 0,
    dragY: 0,
    dragX: 0,
    brandScale: 1,
    layoutScale: 1,
  };

  const redMaterials = [
    new THREE.MeshStandardMaterial({ color: 0xd20b1d, roughness: 0.38, metalness: 0.52, envMapIntensity: 0.96 }),
    new THREE.MeshStandardMaterial({ color: 0x9d0618, roughness: 0.42, metalness: 0.50, envMapIntensity: 0.90 }),
    new THREE.MeshStandardMaterial({ color: 0xba071a, roughness: 0.36, metalness: 0.54, envMapIntensity: 0.98 }),
  ];
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
    } else if (mobile) {
      camera.position.set(0, 0.0, 14.5);
      brandState.layoutScale = 0.62;
      brandRoot.scale.setScalar(brandState.layoutScale * brandState.brandScale);
      trianglePivot.scale.setScalar(0.42);
      trianglePivot.position.set(0, 2.62, 0);
    } else if (window.innerWidth <= 1024) {
      camera.position.set(0, 0.0, 14.8);
      brandState.layoutScale = 0.78;
      brandRoot.scale.setScalar(brandState.layoutScale * brandState.brandScale);
      trianglePivot.scale.setScalar(0.74);
      trianglePivot.position.set(0, 2.16, 0);
    } else {
      camera.position.set(0, 0, 16.5);
      brandState.layoutScale = 0.7;
      brandRoot.scale.setScalar(brandState.layoutScale * brandState.brandScale);
      trianglePivot.scale.setScalar(0.78);
      trianglePivot.position.set(0, 0.42, 0);
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

  setBrandState({ assembly: 0, triangleOpacity: 1 });

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
    setTriangleOpacity(value: number) { setBrandState({ triangleOpacity: value }); },
    setBrandScale(value: number) { setBrandState({ brandScale: value }); },
  };
}
