import * as THREE from 'three';
import gsap from 'gsap';

export function initHeroGlobe(): void {
  const canvas = document.getElementById('heroGlobe') as HTMLCanvasElement | null;
  const hero = document.getElementById('hero');
  if (!canvas || !hero) return;

  canvas.style.opacity = '0';

  const renderer = new THREE.WebGLRenderer({
    canvas, alpha: true, antialias: false, powerPreference: 'low-power',
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
  renderer.setClearColor(0x000000, 0);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(52, 1, 0.1, 100);
  camera.position.set(0, 0, 7.5);

  const themeStyle = getComputedStyle(document.documentElement);
  const accentHex = themeStyle.getPropertyValue('--accent').trim() || '#840016';
  const accentColor = new THREE.Color(accentHex);
  const R = 3.0;

  // Build land mask via 2D canvas
  const MW = 512, MH = 256;
  const mc = document.createElement('canvas');
  mc.width = MW; mc.height = MH;
  const cx = mc.getContext('2d')!;
  cx.fillStyle = '#000';
  cx.fillRect(0, 0, MW, MH);
  cx.fillStyle = '#fff';

  const p = (lng: number, lat: number): [number, number] =>
    [(lng + 180) / 360 * MW, (90 - lat) / 180 * MH];

  function terra(coords: [number, number][]): void {
    cx.beginPath();
    cx.moveTo(...p(coords[0][0], coords[0][1]));
    for (let i = 1; i < coords.length; i++) cx.lineTo(...p(coords[i][0], coords[i][1]));
    cx.closePath();
    cx.fill();
  }

  terra([[-167,68],[-140,72],[-100,75],[-78,72],[-60,60],[-55,47],[-66,44],[-70,42],[-76,34],[-80,25],[-83,10],[-78,8],[-83,8],[-97,22],[-100,20],[-110,26],[-117,32],[-124,38],[-126,50],[-130,54],[-140,60],[-155,60],[-167,68]]);
  terra([[-56,76],[-20,82],[-16,72],[-26,62],[-44,60],[-52,64],[-56,76]]);
  terra([[-78,8],[-60,12],[-52,4],[-36,-4],[-35,-8],[-38,-15],[-42,-22],[-44,-23],[-50,-28],[-52,-33],[-58,-38],[-65,-55],[-68,-52],[-73,-48],[-70,-38],[-72,-28],[-72,-18],[-76,-12],[-78,-2],[-80,4],[-78,8]]);
  terra([[-10,36],[-5,44],[-10,54],[-5,48],[2,50],[4,52],[8,56],[10,60],[14,56],[18,56],[20,60],[24,60],[28,56],[26,50],[22,42],[16,38],[12,36],[2,36],[-8,36],[-10,36]]);
  terra([[14,56],[20,70],[28,72],[30,64],[26,56],[22,56],[18,56],[14,56]]);
  terra([[-8,50],[-6,56],[-4,58],[-2,56],[-2,50],[-5,50],[-8,50]]);
  terra([[-18,14],[-5,5],[2,6],[8,4],[12,-4],[18,-12],[22,-18],[26,-30],[32,-30],[36,-20],[40,-12],[44,-2],[50,10],[52,12],[44,12],[42,20],[38,22],[32,28],[22,36],[16,36],[8,36],[2,36],[-2,32],[-8,28],[-16,20],[-18,14]]);
  terra([[32,28],[38,22],[42,20],[44,12],[52,12],[56,22],[60,22],[50,30],[44,30],[40,32],[36,30],[32,28]]);
  terra([[26,42],[40,42],[50,44],[60,50],[56,60],[50,60],[40,52],[30,46],[26,42]]);
  terra([[26,60],[30,70],[40,72],[60,74],[80,74],[100,76],[120,74],[140,72],[168,68],[180,68],[180,52],[168,52],[155,50],[148,44],[140,50],[130,50],[120,52],[110,54],[100,52],[90,52],[80,50],[72,54],[60,50],[50,44],[40,42],[28,50],[26,60]]);
  terra([[60,22],[72,20],[76,8],[80,8],[82,14],[80,22],[76,22],[72,24],[64,24],[60,24],[56,22],[60,22]]);
  terra([[68,24],[76,22],[80,22],[80,14],[78,8],[72,8],[68,8],[66,14],[68,20],[68,24]]);
  terra([[96,28],[100,30],[108,28],[112,26],[116,24],[120,22],[124,22],[128,24],[130,32],[132,34],[136,36],[140,40],[142,44],[140,50],[130,50],[124,44],[118,38],[110,36],[104,36],[100,40],[96,38],[92,36],[88,26],[96,28]]);
  terra([[100,4],[104,2],[108,-2],[110,-8],[115,-8],[120,-10],[130,-14],[140,-14],[145,-14],[148,-10],[148,-4],[140,-2],[130,-4],[120,-2],[110,2],[100,4]]);
  terra([[130,32],[132,34],[136,36],[140,40],[142,44],[140,44],[136,38],[132,34],[130,32]]);
  terra([[114,-22],[116,-20],[122,-14],[130,-12],[136,-12],[140,-14],[145,-18],[148,-22],[150,-28],[150,-34],[148,-38],[142,-38],[136,-34],[130,-32],[120,-30],[115,-34],[114,-30],[114,-22]]);
  terra([[132,-2],[136,-4],[142,-4],[148,-6],[148,-8],[140,-6],[132,-4],[132,-2]]);
  terra([[-180,-70],[-140,-74],[-100,-74],[-60,-72],[-20,-70],[20,-70],[60,-70],[100,-72],[140,-74],[180,-70],[180,-90],[-180,-90],[-180,-70]]);

  const imgData = cx.getImageData(0, 0, MW, MH);
  const verts: number[] = [];
  const STEP = 2;

  for (let py = 0; py < MH; py += STEP) {
    for (let px = 0; px < MW; px += STEP) {
      if (imgData.data[(py * MW + px) * 4] < 128) continue;
      const lng = (px / MW) * 360 - 180;
      const lat = 90 - (py / MH) * 180;
      const phi = (90 - lat) * (Math.PI / 180);
      const lam = lng * (Math.PI / 180);
      verts.push(
        R * Math.sin(phi) * Math.sin(lam),
        R * Math.cos(phi),
        R * Math.sin(phi) * Math.cos(lam)
      );
    }
  }

  const targetPositions = new Float32Array(verts);
  const startPositions = new Float32Array(targetPositions.length);
  for (let i = 0; i < targetPositions.length; i += 3) {
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(Math.max(-1, Math.min(1, Math.random() * 2 - 1)));
    const radius = 10.5 + Math.random() * 5.5;
    startPositions[i] = Math.sin(phi) * Math.cos(theta) * radius;
    startPositions[i + 1] = Math.cos(phi) * radius + (Math.random() - 0.5) * 0.8;
    startPositions[i + 2] = Math.sin(phi) * Math.sin(theta) * radius;
  }

  const pGeo = new THREE.BufferGeometry();
  pGeo.setAttribute('position', new THREE.Float32BufferAttribute(startPositions.slice(), 3));
  const pMat = new THREE.PointsMaterial({
    size: 0.036, color: accentColor, transparent: true, opacity: 0, sizeAttenuation: true,
  });
  const globePoints = new THREE.Points(pGeo, pMat);

  const globeGroup = new THREE.Group();
  scene.add(globeGroup);

  const themeIsLight = document.documentElement.getAttribute('data-theme') === 'light';
  const sphereColor = themeIsLight ? new THREE.Color('#d6c8c8') : new THREE.Color('#2a1a1e');

  const backGeo = new THREE.SphereGeometry(R * 0.995, 48, 48);
  const backMat = new THREE.MeshBasicMaterial({
    color: sphereColor, transparent: true, opacity: 0, side: THREE.BackSide,
  });
  globeGroup.add(new THREE.Mesh(backGeo, backMat));

  const frontGeo = new THREE.SphereGeometry(R * 0.998, 48, 48);
  const frontMat = new THREE.MeshBasicMaterial({
    color: sphereColor, transparent: true, opacity: 0, side: THREE.FrontSide,
  });
  globeGroup.add(new THREE.Mesh(frontGeo, frontMat));
  globeGroup.add(globePoints);

  const lMat = new THREE.LineBasicMaterial({ color: accentColor, transparent: true, opacity: 0 });
  const eMat = new THREE.LineBasicMaterial({ color: accentColor, transparent: true, opacity: 0 });

  function latLine(latDeg: number, mat: THREE.LineBasicMaterial, segs = 64): THREE.Line {
    const phi = (90 - latDeg) * Math.PI / 180;
    const ry = R * Math.cos(phi), rh = R * Math.sin(phi);
    const pts = Array.from({ length: segs + 1 }, (_, i) => {
      const a = (i / segs) * Math.PI * 2;
      return new THREE.Vector3(rh * Math.sin(a), ry, rh * Math.cos(a));
    });
    return new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), mat);
  }

  function lngLine(lngDeg: number, mat: THREE.LineBasicMaterial, segs = 64): THREE.Line {
    const lam = lngDeg * Math.PI / 180;
    const pts = Array.from({ length: segs + 1 }, (_, i) => {
      const phi2 = (i / segs) * Math.PI;
      return new THREE.Vector3(
        R * Math.sin(phi2) * Math.sin(lam), R * Math.cos(phi2), R * Math.sin(phi2) * Math.cos(lam)
      );
    });
    return new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), mat);
  }

  globeGroup.add(latLine(0, eMat));
  [-66, -30, 30, 66].forEach((lat) => globeGroup.add(latLine(lat, lMat)));
  [0, 45, 90, 135].forEach((lng) => globeGroup.add(lngLine(lng, lMat)));

  function getGlobeRestScale(): number {
    if (window.innerWidth <= 480) return 0.8;
    if (window.innerWidth <= 768) return 0.86;
    if (window.innerWidth <= 1024) return 0.94;
    return 1;
  }

  globeGroup.scale.setScalar(getGlobeRestScale() * 0.72);
  globeGroup.rotation.set(0.34, -1.28, 0);

  const introState = { progress: 0 };

  function updateGlobeAssembly(): void {
    const positionAttr = pGeo.getAttribute('position') as THREE.BufferAttribute;
    const current = positionAttr.array as Float32Array;
    const progress = introState.progress;
    const eased = progress * progress * (3 - 2 * progress);

    for (let i = 0; i < current.length; i += 3) {
      current[i] = startPositions[i] + (targetPositions[i] - startPositions[i]) * eased;
      current[i + 1] = startPositions[i + 1] + (targetPositions[i + 1] - startPositions[i + 1]) * eased;
      current[i + 2] = startPositions[i + 2] + (targetPositions[i + 2] - startPositions[i + 2]) * eased;
    }
    positionAttr.needsUpdate = true;
  }

  updateGlobeAssembly();

  gsap.to(introState, {
    progress: 1,
    duration: 0.95,
    ease: 'expo.out',
    delay: 0.02,
    onUpdate: updateGlobeAssembly,
  });
  gsap.to(canvas, { opacity: 0.72, duration: 0.28, ease: 'power2.out' });
  gsap.to(pMat, { opacity: 0.65, duration: 0.24, ease: 'power2.out' });
  gsap.to(backMat, { opacity: 0.52, duration: 0.55, ease: 'power2.out', delay: 0.14 });
  gsap.to(frontMat, { opacity: 0.22, duration: 0.55, ease: 'power2.out', delay: 0.18 });
  gsap.to(lMat, { opacity: 0.09, duration: 0.5, ease: 'power2.out', delay: 0.2 });
  gsap.to(eMat, { opacity: 0.20, duration: 0.5, ease: 'power2.out', delay: 0.22 });
  gsap.to(globeGroup.scale, { x: getGlobeRestScale(), y: getGlobeRestScale(), z: getGlobeRestScale(), duration: 1, ease: 'expo.out' });
  gsap.to(globeGroup.rotation, { x: 0.08, y: -0.26, z: 0, duration: 1.1, ease: 'expo.out' });

  let isDragging = false;
  let lastDragX = 0, lastDragY = 0;
  let velX = 0, velY = 0;
  let autoRotate = true;
  let resumeGlobeTimer = 0;
  let mx = 0, my = 0;
  let activeRing: { update(x: number, y: number): void; destroy(): void } | null = null;

  const DIST_RADIUS   = 1.3;
  const DIST_STRENGTH = 0.52;
  const DIST_LERP_IN  = 0.16;
  const DIST_LERP_OUT = 0.08;

  const distortOffsets = new Float32Array(targetPositions.length / 3);
  const mouseLocal = new THREE.Vector3();
  let isHoveringGlobe = false;

  const hitSphere = new THREE.Mesh(
    new THREE.SphereGeometry(R, 32, 32),
    new THREE.MeshBasicMaterial({ visible: false })
  );
  globeGroup.add(hitSphere);

  const raycaster = new THREE.Raycaster();
  const mouseNDC = new THREE.Vector2();

  function createClickRing(clientX: number, clientY: number) {
    const svgNS = 'http://www.w3.org/2000/svg';
    const svg = document.createElementNS(svgNS, 'svg');
    const r = 24;
    const dim = r * 2 + 8;
    svg.setAttribute('width', String(dim));
    svg.setAttribute('height', String(dim));
    svg.setAttribute('aria-hidden', 'true');
    svg.style.cssText = `position:fixed;pointer-events:none;z-index:9999;left:${clientX}px;top:${clientY}px;transform:translate(-50%,-50%);overflow:visible;`;
    const circ = document.createElementNS(svgNS, 'circle');
    circ.setAttribute('cx', String(dim / 2));
    circ.setAttribute('cy', String(dim / 2));
    circ.setAttribute('r', String(r));
    circ.setAttribute('fill', 'none');
    circ.setAttribute('stroke', accentHex);
    circ.setAttribute('stroke-width', '2.5');
    circ.setAttribute('stroke-linecap', 'round');
    const length = 2 * Math.PI * r;
    circ.setAttribute('stroke-dasharray', String(length));
    circ.setAttribute('stroke-dashoffset', String(length));
    svg.appendChild(circ);
    document.body.appendChild(svg);
    window.requestAnimationFrame(() => {
      circ.style.transition = 'stroke-dashoffset 0.4s cubic-bezier(0.22,1,0.36,1)';
      circ.setAttribute('stroke-dashoffset', '0');
    });
    return {
      update(x: number, y: number) {
        svg.style.left = x + 'px';
        svg.style.top = y + 'px';
      },
      destroy() {
        svg.style.transition = 'opacity 0.25s ease';
        svg.style.opacity = '0';
        window.setTimeout(() => { if (svg.parentNode) svg.parentNode.removeChild(svg); }, 280);
      },
    };
  }

  function allowGlobeInteraction(): boolean {
    return window.innerWidth > 768 && window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  }

  function startDrag(clientX: number, clientY: number): void {
    if (!allowGlobeInteraction()) return;
    isDragging = true;
    autoRotate = false;
    window.clearTimeout(resumeGlobeTimer);
    lastDragX = clientX;
    lastDragY = clientY;
    velX = 0; velY = 0;
    hero!.style.cursor = 'grabbing';
    gsap.to(globeGroup.scale, { x: 1.1, y: 1.1, z: 1.1, duration: 0.45, ease: 'power2.out', overwrite: true });
    if (activeRing) { activeRing.destroy(); activeRing = null; }
    activeRing = createClickRing(clientX, clientY);
  }

  function moveDrag(clientX: number, clientY: number): void {
    if (!isDragging) return;
    const dx = clientX - lastDragX;
    const dy = clientY - lastDragY;
    lastDragX = clientX; lastDragY = clientY;
    velY = dx * 0.007;
    velX = dy * 0.004;
    globeGroup.rotation.y += velY;
    globeGroup.rotation.x = Math.max(-Math.PI * 0.5, Math.min(Math.PI * 0.5, globeGroup.rotation.x + velX));
    if (activeRing) activeRing.update(clientX, clientY);
  }

  function endDrag(): void {
    if (!isDragging) return;
    isDragging = false;
    hero!.style.cursor = allowGlobeInteraction() ? 'grab' : '';
    if (activeRing) { activeRing.destroy(); activeRing = null; }
    gsap.to(globeGroup.scale, { x: 1, y: 1, z: 1, duration: 0.9, ease: 'elastic.out(1,0.55)', overwrite: true });
    resumeGlobeTimer = window.setTimeout(() => { autoRotate = true; }, 2500);
  }

  hero.style.cursor = allowGlobeInteraction() ? 'grab' : '';

  hero.addEventListener('mousedown', (e: MouseEvent) => {
    if (!allowGlobeInteraction()) return;
    if ((e.target as Element).closest('a, button, input, select, textarea')) return;
    e.preventDefault();
    startDrag(e.clientX, e.clientY);
  });

  window.addEventListener('mousemove', (e: MouseEvent) => {
    moveDrag(e.clientX, e.clientY);
    if (!isDragging) {
      const rect = hero!.getBoundingClientRect();
      mx = ((e.clientX - rect.left) / rect.width  - 0.5) * 2;
      my = ((e.clientY - rect.top)  / rect.height - 0.5) * 2;
      mouseNDC.set(mx, -my);
      raycaster.setFromCamera(mouseNDC, camera);
      const hits = raycaster.intersectObject(hitSphere);
      if (hits.length > 0) {
        isHoveringGlobe = true;
        globeGroup.worldToLocal(mouseLocal.copy(hits[0].point));
      } else {
        isHoveringGlobe = false;
      }
    }
  });

  window.addEventListener('mouseup', () => { if (isDragging) endDrag(); });
  hero.addEventListener('mouseleave', () => {
    if (!isDragging) { mx = 0; my = 0; }
    isHoveringGlobe = false;
  });

  function resize(): void {
    const w = hero!.clientWidth || window.innerWidth;
    const h = hero!.clientHeight || window.innerHeight;
    renderer.setSize(w, h, false);
    hero!.style.cursor = allowGlobeInteraction() && !isDragging ? 'grab' : '';
    camera.aspect = w / h;
    if (window.innerWidth <= 480) {
      camera.position.set(0, 0, 13.2);
    } else if (window.innerWidth <= 768) {
      camera.position.set(0, 0, 12.1);
    } else if (window.innerWidth <= 1024) {
      camera.position.set(0, 0, 10.3);
    } else {
      camera.position.set(0, 0, 7.5);
    }
    globeGroup.scale.setScalar(getGlobeRestScale());
    camera.updateProjectionMatrix();
  }

  resize();
  window.addEventListener('resize', resize, { passive: true });

  let active = true;
  const _heroObserver = new IntersectionObserver(
    (entries) => entries.forEach((e) => { active = e.isIntersecting; }),
    { threshold: 0.08 }
  );
  _heroObserver.observe(hero);

  let _rafId = 0;
  (function tick() {
    _rafId = window.requestAnimationFrame(tick);
    if (document.hidden || !active) return;

    if (!isDragging) {
      if (autoRotate) globeGroup.rotation.y += 0.0012;
      if (Math.abs(velX) > 0.00008 || Math.abs(velY) > 0.00008) {
        globeGroup.rotation.y += velY;
        globeGroup.rotation.x = Math.max(-Math.PI * 0.5, Math.min(Math.PI * 0.5, globeGroup.rotation.x + velX));
        velX *= 0.94;
        velY *= 0.94;
      }
    }

    camera.position.x += (mx * 0.9 - camera.position.x) * 0.045;
    camera.position.y += (-my * 0.5 - camera.position.y) * 0.045;
    camera.lookAt(0, 0, 0);

    if (introState.progress >= 0.99 && !isDragging) {
      const posAttr = pGeo.getAttribute('position') as THREE.BufferAttribute;
      const arr = posAttr.array as Float32Array;
      let changed = false;

      for (let i = 0; i < targetPositions.length; i += 3) {
        const j = i / 3;
        const tx = targetPositions[i], ty = targetPositions[i + 1], tz = targetPositions[i + 2];
        let desired = 0;

        if (isHoveringGlobe) {
          const dx = tx - mouseLocal.x, dy2 = ty - mouseLocal.y, dz = tz - mouseLocal.z;
          const dist = Math.sqrt(dx * dx + dy2 * dy2 + dz * dz);
          if (dist < DIST_RADIUS) {
            const t = dist / DIST_RADIUS;
            desired = DIST_STRENGTH * Math.exp(-t * t * 3.5);
          }
        }

        const rate = desired > distortOffsets[j] ? DIST_LERP_IN : DIST_LERP_OUT;
        distortOffsets[j] += (desired - distortOffsets[j]) * rate;

        const offset = distortOffsets[j];
        if (Math.abs(offset) > 0.001) {
          arr[i]     = tx + (tx / R) * offset;
          arr[i + 1] = ty + (ty / R) * offset;
          arr[i + 2] = tz + (tz / R) * offset;
          changed = true;
        } else if (arr[i] !== tx) {
          arr[i] = tx; arr[i + 1] = ty; arr[i + 2] = tz;
          changed = true;
        }
      }

      if (changed) posAttr.needsUpdate = true;
    }

    renderer.render(scene, camera);
  }());
}
