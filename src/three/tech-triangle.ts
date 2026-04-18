import * as THREE from 'three';

type Point2D = [number, number];

function lerpPoint(a: Point2D, b: Point2D, t: number): Point2D {
  return [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t];
}

function addPoint(a: Point2D, b: Point2D): Point2D {
  return [a[0] + b[0], a[1] + b[1]];
}

function subPoint(a: Point2D, b: Point2D): Point2D {
  return [a[0] - b[0], a[1] - b[1]];
}

function mulPoint(a: Point2D, s: number): Point2D {
  return [a[0] * s, a[1] * s];
}

function cross2D(a: Point2D, b: Point2D, c: Point2D): number {
  return (b[0] - a[0]) * (c[1] - a[1]) - (b[1] - a[1]) * (c[0] - a[0]);
}

function normalize(v: Point2D): Point2D {
  const len = Math.hypot(v[0], v[1]) || 1;
  return [v[0] / len, v[1] / len];
}

function lineIntersection(p1: Point2D, p2: Point2D, p3: Point2D, p4: Point2D): Point2D {
  const [x1, y1] = p1;
  const [x2, y2] = p2;
  const [x3, y3] = p3;
  const [x4, y4] = p4;
  const denom = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);
  if (Math.abs(denom) < 1e-6) return p2;
  return [
    ((x1 * y2 - y1 * x2) * (x3 - x4) - (x1 - x2) * (x3 * y4 - y3 * x4)) / denom,
    ((x1 * y2 - y1 * x2) * (y3 - y4) - (y1 - y2) * (x3 * y4 - y3 * x4)) / denom,
  ];
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
  if (cross2D(start, end, samplePointOnPositiveSide) < 0) normal = mulPoint(normal, -1);
  return {
    positiveStart: addPoint(start, mulPoint(normal, width / 2)),
    positiveEnd: addPoint(end, mulPoint(normal, width / 2)),
    negativeStart: addPoint(start, mulPoint(normal, -width / 2)),
    negativeEnd: addPoint(end, mulPoint(normal, -width / 2)),
  };
}

function makePiece(points: Point2D[], material: THREE.MeshStandardMaterial, depth: number): THREE.Mesh {
  const shape = new THREE.Shape();
  shape.moveTo(points[0][0], points[0][1]);
  for (let i = 1; i < points.length; i += 1) shape.lineTo(points[i][0], points[i][1]);
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

  return new THREE.Mesh(geometry, material);
}

function makeHeroTriangle(): THREE.Group {
  const redMaterials = [
    new THREE.MeshStandardMaterial({ color: 0xc30012, roughness: 0.44, metalness: 0.64, envMapIntensity: 0.72 }),
    new THREE.MeshStandardMaterial({ color: 0x87000f, roughness: 0.48, metalness: 0.60, envMapIntensity: 0.68 }),
    new THREE.MeshStandardMaterial({ color: 0xa80010, roughness: 0.42, metalness: 0.66, envMapIntensity: 0.74 }),
  ];

  const outerSide = 3.8;
  const outerHeight = outerSide * Math.sqrt(3) / 2;
  const apex: Point2D = [0, outerHeight / 2];
  const left: Point2D = [-outerSide / 2, -outerHeight / 2];
  const right: Point2D = [outerSide / 2, -outerHeight / 2];

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

  const group = new THREE.Group();
  group.add(
    makePiece(topPolygon, redMaterials[0], 0.22),
    makePiece(bottomPolygon, redMaterials[1], 0.24),
    makePiece(rightPolygon, redMaterials[2], 0.2),
  );
  group.scale.setScalar(1.03);
  return group;
}

export function initTechTriangle(): void {
  const canvas = document.getElementById('techTriangle') as HTMLCanvasElement | null;
  const section = document.getElementById('tecnologia');
  if (!canvas || !section) return;

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
  camera.position.set(0, 0, 14);

  const hemi = new THREE.HemisphereLight(0xffffff, 0xeee8e4, 0.62);
  scene.add(hemi);

  const key = new THREE.DirectionalLight(0xffffff, 0.84);
  key.position.set(4.5, 5.5, 7.5);
  scene.add(key);

  const fill = new THREE.PointLight(0xffd3cc, 0.72, 30, 2);
  fill.position.set(-4.5, 1.2, 5.4);
  scene.add(fill);

  const triangle = makeHeroTriangle();
  triangle.rotation.x = 0.18;
  scene.add(triangle);

  let rafId = 0;
  let active = false;

  function tick(): void {
    rafId = requestAnimationFrame(tick);
    if (!active || document.hidden) return;

    triangle.rotation.y += 0.009;
    triangle.rotation.z = Math.sin(performance.now() * 0.00045) * 0.035;
    renderer.render(scene, camera);
  }

  function resize(): void {
    const rect = canvas!.getBoundingClientRect();
    if (!rect.width || !rect.height) return;
    renderer.setSize(rect.width, rect.height, false);
    camera.aspect = rect.width / rect.height;
    camera.updateProjectionMatrix();
  }

  resize();
  window.addEventListener('resize', resize, { passive: true });

  const io = new IntersectionObserver((entries) => {
    for (const entry of entries) active = entry.isIntersecting;
  }, { threshold: 0.01 });
  io.observe(section);

  rafId = requestAnimationFrame(tick);
}
