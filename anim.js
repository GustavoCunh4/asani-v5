'use strict';

(function asaniAnim() {
  const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (isReduced) {
    document.documentElement.classList.remove('hero-booting');
    return;
  }

  const gsapLoaded = typeof window.gsap !== 'undefined';
  const stLoaded = typeof window.ScrollTrigger !== 'undefined';
  const lenisLoaded = typeof window.Lenis !== 'undefined';
  const threeLoaded = typeof window.THREE !== 'undefined';
  const isTouch = window.matchMedia('(pointer: coarse)').matches;
  const isDesktop = () => window.innerWidth >= 1025;

  const reduceMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  const SCRAMBLE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  const revealObserver = !gsapLoaded || !stLoaded
    ? new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -10% 0px' })
    : null;

  let lenis = null;
  let scrollVelocity = 0;
  let heroBrand3D = null;

  function bindMediaChange(query, listener) {
    if (typeof query.addEventListener === 'function') {
      query.addEventListener('change', listener);
      return;
    }
    if (typeof query.addListener === 'function') {
      query.addListener(listener);
    }
  }

  function scramble(element, durationMs) {
    if (!element) return;

    const original = element.textContent;
    const totalFrames = Math.round((durationMs / 1000) * 40);
    let frame = 0;

    const timer = window.setInterval(() => {
      element.textContent = original.split('').map((char, index) => {
        if (char === ' ' || char === '/') return char;
        const progress = frame / totalFrames;
        const charProgress = progress - (index / original.length) * 0.28;
        if (charProgress >= 0.72) return char;
        return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
      }).join('');

      frame += 1;
      if (frame > totalFrames) {
        element.textContent = original;
        window.clearInterval(timer);
      }
    }, 1000 / 40);
  }

  function createVisibilityObserver(onVisible, threshold = 0.18) {
    return new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        onVisible(entry.target);
      });
    }, { threshold });
  }

  function initLenis() {
    if (!lenisLoaded) return;

    lenis = new window.Lenis({
      duration: 1.15,
      easing: (t) => 1 - Math.pow(1 - t, 4),
      wheelMultiplier: 0.92,
      touchMultiplier: 1.45,
      smoothTouch: false,
    });

    if (gsapLoaded && stLoaded) {
      lenis.on('scroll', window.ScrollTrigger.update);
      window.gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
      });
      window.gsap.ticker.lagSmoothing(0);
    } else {
      (function raf(time) {
        lenis.raf(time);
        window.requestAnimationFrame(raf);
      }(performance.now()));
    }

    lenis.on('scroll', ({ velocity }) => {
      scrollVelocity = velocity;
    });
  }

  function initHeroBrand3D() {
    if (!threeLoaded) return;

    const canvas = document.getElementById('heroBrand3D');
    const hero = document.getElementById('hero');
    if (!canvas || !hero) return;

    const hasTextRuntime = typeof window.THREE.FontLoader !== 'undefined'
      && typeof window.THREE.TextGeometry !== 'undefined';

    const renderer = new window.THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.6));
    renderer.setClearColor(0x000000, 0);

    const scene = new window.THREE.Scene();
    const camera = new window.THREE.PerspectiveCamera(24, 1, 0.1, 100);
    camera.position.set(0, 0, 16.5);

    // Intensidades reduzidas: evita saturaÃ§Ã£o em telas vivid/AMOLED
    const hemi = new window.THREE.HemisphereLight(0xffffff, 0xeee8e4, 0.68);
    scene.add(hemi);

    const key = new window.THREE.DirectionalLight(0xffffff, 0.78);
    key.position.set(4.5, 5.5, 7.5);
    scene.add(key);

    // Luz de preenchimento neutra â€” cor branca quente, sem rosa que satura em telas vivid
    const fill = new window.THREE.PointLight(0xfff4ee, 0.42, 30, 2);
    fill.position.set(-5.2, 1.4, 5.8);
    scene.add(fill);

    const brandRoot = new window.THREE.Group();
    const trianglePivot = new window.THREE.Group();
    const wordmarkGroup = new window.THREE.Group();
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
    };

    // Metalness reduzido: alto metalness reflete luz como pink em telas vivid (Samsung, iPhone high-saturation)
    const redMaterials = [
      new window.THREE.MeshStandardMaterial({ color: 0xc30012, roughness: 0.44, metalness: 0.64, envMapIntensity: 0.72 }),
      new window.THREE.MeshStandardMaterial({ color: 0x87000f, roughness: 0.48, metalness: 0.60, envMapIntensity: 0.68 }),
      new window.THREE.MeshStandardMaterial({ color: 0xa80010, roughness: 0.42, metalness: 0.66, envMapIntensity: 0.74 }),
    ];
    const wordMaterial = new window.THREE.MeshStandardMaterial({
      color: 0x111111,
      roughness: 0.22,
      metalness: 0.92,
      envMapIntensity: 0.9,
      transparent: true,
      opacity: 0,
    });

    function makePiece(points, material, depth) {
      const shape = new window.THREE.Shape();
      shape.moveTo(points[0][0], points[0][1]);
      for (let i = 1; i < points.length; i += 1) {
        shape.lineTo(points[i][0], points[i][1]);
      }
      shape.closePath();

      let geometry = new window.THREE.ExtrudeGeometry(shape, {
        depth,
        bevelEnabled: true,
        bevelSegments: 4,
        steps: 1,
        bevelSize: 0.016,
        bevelThickness: 0.022,
      });
      geometry.translate(0, 0, -depth / 2);
      geometry = geometry.toNonIndexed();
      geometry.computeVertexNormals();

      const mesh = new window.THREE.Mesh(geometry, material);
      mesh.castShadow = false;
      mesh.receiveShadow = false;
      return mesh;
    }

    const outerSide = 3.8;
    const outerHeight = outerSide * Math.sqrt(3) / 2;
    const apex = [0, outerHeight / 2];
    const left = [-outerSide / 2, -outerHeight / 2];
    const right = [outerSide / 2, -outerHeight / 2];
    const lerpPoint = (a, b, t) => [
      a[0] + (b[0] - a[0]) * t,
      a[1] + (b[1] - a[1]) * t,
    ];
    const addPoint = (a, b) => [a[0] + b[0], a[1] + b[1]];
    const subPoint = (a, b) => [a[0] - b[0], a[1] - b[1]];
    const mulPoint = (a, s) => [a[0] * s, a[1] * s];
    const cross2D = (a, b, c) => (b[0] - a[0]) * (c[1] - a[1]) - (b[1] - a[1]) * (c[0] - a[0]);
    const lengthOf = (v) => Math.hypot(v[0], v[1]) || 1;
    const normalize = (v) => {
      const len = lengthOf(v);
      return [v[0] / len, v[1] / len];
    };

    function lineIntersection(p1, p2, p3, p4) {
      const x1 = p1[0], y1 = p1[1];
      const x2 = p2[0], y2 = p2[1];
      const x3 = p3[0], y3 = p3[1];
      const x4 = p4[0], y4 = p4[1];
      const denom = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);
      if (Math.abs(denom) < 1e-6) return p2;
      const px = ((x1 * y2 - y1 * x2) * (x3 - x4) - (x1 - x2) * (x3 * y4 - y3 * x4)) / denom;
      const py = ((x1 * y2 - y1 * x2) * (y3 - y4) - (y1 - y2) * (x3 * y4 - y3 * x4)) / denom;
      return [px, py];
    }

    function clipPolygon(poly, lineA, lineB, keepLeft) {
      const result = [];
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

    function createChannel(start, end, width, samplePointOnPositiveSide) {
      const dir = normalize(subPoint(end, start));
      let normal = [-dir[1], dir[0]];
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
    const centerJoin = [0, centerJoinBase[1]];

    const mainCut = createChannel(mainCenterStart, mainCenterEnd, 0.16, apex);
    const secondaryCut = createChannel(centerJoin, right, 0.13, shoulderRight);
    const outerPolygon = [left, apex, right];
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
      new window.THREE.Vector3(-1.0, 0.78, 0),
      new window.THREE.Vector3(-0.14, -0.96, 0),
      new window.THREE.Vector3(0.94, 0.12, 0),
    ];
    trianglePieces.forEach((piece, index) => {
      piece.userData.origin = triangleOrigins[index];
      trianglePivot.add(piece);
    });
    trianglePivot.position.set(0, 0.42, 0);

    canvas.classList.remove('is-wordmark-ready');

    const solidLetters = [];
    const particleLetters = [];
    const tempMatrix = new window.THREE.Matrix4();
    const tempPosition = new window.THREE.Vector3();
    const tempScale = new window.THREE.Vector3();
    const tempQuaternion = new window.THREE.Quaternion();
    function buildWordmark(font) {
      if (solidLetters.length || particleLetters.length) return;
      const chars = 'ASANI'.split('');
      const size = 0.66;
      const depth = 0.16;
      const spacing = 0.08;
      let offsetX = 0;
      chars.forEach((char, index) => {
        let geometry = new window.THREE.TextGeometry(char, {
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
        const bounds = geometry.boundingBox;
        const width = bounds.max.x - bounds.min.x;
        geometry.translate(-(bounds.min.x + width / 2), 0, -depth / 2);
        geometry = geometry.toNonIndexed();
        geometry.computeVertexNormals();
        const basePosition = new window.THREE.Vector3(offsetX + width / 2, 0, 0);
        const solidMesh = new window.THREE.Mesh(geometry.clone(), wordMaterial.clone());
        solidMesh.userData.basePosition = basePosition.clone();
        solidMesh.userData.index = index;
        solidMesh.material.opacity = 0;
        solidMesh.material.transparent = true;
        solidMesh.renderOrder = 6;
        solidMesh.material.depthWrite = true;
        wordmarkGroup.add(solidMesh);
        solidLetters.push(solidMesh);
        const positionAttr = geometry.getAttribute('position');
        const sampled = [];
        const step = Math.max(1, Math.floor(positionAttr.count / 145));
        for (let i = 0; i < positionAttr.count; i += step) {
          sampled.push(new window.THREE.Vector3(
            positionAttr.getX(i),
            positionAttr.getY(i),
            positionAttr.getZ(i)
          ));
        }
        const particleMaterial = new window.THREE.MeshStandardMaterial({
          color: 0xefe7e2,
          roughness: 0.2,
          metalness: 0.62,
          envMapIntensity: 0.68,
          transparent: true,
          opacity: 0,
        });
        const particles = new window.THREE.InstancedMesh(
          new window.THREE.SphereGeometry(0.028, 8, 8),
          particleMaterial,
          sampled.length
        );
        particles.instanceMatrix.setUsage(window.THREE.DynamicDrawUsage);
        particles.renderOrder = 4;
        particles.material.depthWrite = false;
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
          return new window.THREE.Vector3(
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
          letter.userData.starts.forEach((startPoint) => {
            startPoint.x -= centerOffset;
          });
        }
      });
      wordmarkGroup.position.set(0, -1.88, 0);
      canvas.classList.add('is-wordmark-ready');
      applyAssembly();
    }

    // Em mobile/tablet (â‰¤1024px): nÃ£o carrega a fonte â€” wordmark Ã© ocultado,
    // apenas o sÃ­mbolo triangular Ã© exibido como elemento visual de fundo.
    // Isso evita carregar ~250KB de font desnecessariamente e elimina o conflito
    // visual entre o texto "ASANI" e a headline/parÃ¡grafo de conteÃºdo.
    const isDesktopBrand = window.innerWidth > 1024;
    if (hasTextRuntime && isDesktopBrand) {
      const loader = new window.THREE.FontLoader();
      loader.load(
        'assets/helvetiker_regular.typeface.json',
        (font) => buildWordmark(font),
        undefined,
        () => {}
      );
    }

    const hitPlane = new window.THREE.Mesh(
      new window.THREE.BoxGeometry(5.2, 5.2, 0.8),
      new window.THREE.MeshBasicMaterial({ visible: false })
    );
    hitPlane.position.copy(trianglePivot.position);
    scene.add(hitPlane);

    const pointer = { x: 0, y: 0 };
    const raycaster = new window.THREE.Raycaster();
    const mouseNDC = new window.THREE.Vector2();
    let isDragging = false;
    let lastDragX = 0;
    let lastDragY = 0;
    let dragVelY = 0;
    let dragVelX = 0;
    let active = true;

    function applyAssembly() {
      const t = brandState.assembly;
      const eased = t * t * (3 - 2 * t);
      trianglePieces.forEach((piece, index) => {
        const origin = piece.userData.origin;
        piece.position.set(
          origin.x * (1 - eased),
          origin.y * (1 - eased),
          0
        );
        piece.material.opacity = brandState.triangleOpacity;
        piece.material.transparent = brandState.triangleOpacity < 0.999;
      });

      particleLetters.forEach((letter) => {
        const delay = letter.userData.index * 0.085;
        const local = Math.max(0, Math.min(1, (t - delay) / 0.62));
        const reveal = local * local * (3 - 2 * local);
        letter.position.set(0, 0, 0);
        letter.rotation.set(0, 0, 0);
        letter.scale.setScalar(1);
        const targets = letter.userData.targets;
        const starts = letter.userData.starts;
        const jitter = letter.userData.jitter;
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
        letter.material.opacity = Math.min(1, reveal * 1.2) * particleOpacity * brandState.wordmarkOpacity;
      });

      solidLetters.forEach((letter) => {
        const delay = letter.userData.index * 0.085;
        const local = Math.max(0, Math.min(1, (t - (delay + 0.28)) / 0.26));
        const reveal = local * local * (3 - 2 * local);
        const base = letter.userData.basePosition;
        letter.position.set(base.x, base.y + (1 - reveal) * 0.03, 0.06);
        letter.rotation.set(0, 0, 0);
        letter.scale.setScalar(0.985 + reveal * 0.015);
        letter.material.opacity = Math.min(1, reveal * 1.35) * brandState.wordmarkOpacity;
      });
    }

    function setBrandState(next) {
      Object.assign(brandState, next);
      applyAssembly();
    }

    function resize() {
      const w = hero.clientWidth || window.innerWidth;
      const h = hero.clientHeight || window.innerHeight;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();

      const narrow = window.innerWidth <= 480;
      const mobile = window.innerWidth <= 768;
      if (narrow) {
        // Telas estreitas â‰¤480px (Samsung Galaxy, iPhone SE):
        // CÃ¢mera afastada z=16.5 evita clip horizontal (FOV 24Â° â†’ largura visÃ­vel â‰ˆ 3.24u).
        // TriÃ¢ngulo deslocado para cima (y=1.6): apex fica na metade superior do hero,
        // abaixo do nav mas acima da zona de leitura â€” sem colidir com headline.
        camera.position.set(0, 0.0, 16.5);
        brandRoot.scale.setScalar(0.58);
        trianglePivot.scale.setScalar(0.54);
        trianglePivot.position.set(0, 1.6, 0);
        // wordmarkGroup posiÃ§Ã£o irrelevante â€” opacity sempre 0 em mobile
        wordmarkGroup.position.set(0, -0.8, 0);
      } else if (mobile) {
        // Mobile regular 481â€“768px (iPhone 12/14 Pro: 390â€“430px largura):
        // TriÃ¢ngulo na metade superior (y=1.8) â€” sÃ­mbolo decorativo, sem sobrepor texto.
        camera.position.set(0, 0.0, 14.5);
        brandRoot.scale.setScalar(0.68);
        trianglePivot.scale.setScalar(0.60);
        trianglePivot.position.set(0, 1.8, 0);
        wordmarkGroup.position.set(0, -0.9, 0);
      } else if (window.innerWidth <= 1024) {
        // Tablet retrato/paisagem 769â€“1024px:
        // TriÃ¢ngulo maior, posiÃ§Ã£o superior â€” aproveita a tela sem colidir com conteÃºdo.
        camera.position.set(0, 0.0, 13.2);
        brandRoot.scale.setScalar(0.78);
        trianglePivot.scale.setScalar(0.70);
        trianglePivot.position.set(0, 1.6, 0);
        wordmarkGroup.position.set(0, -0.7, 0);
      } else {
        // Desktop: logo completo (triÃ¢ngulo + wordmark ASANI) como backdrop
        camera.position.set(0, 0, 16.5);
        brandRoot.scale.setScalar(0.7);
        trianglePivot.scale.setScalar(0.78);
        wordmarkGroup.scale.setScalar(0.94);
        trianglePivot.position.set(0, 0.42, 0);
        wordmarkGroup.position.set(0, -1.88, 0);
      }
      if (!canInteract()) {
        trianglePivot.rotation.x = -0.05;
      }
      hitPlane.position.copy(trianglePivot.position);
    }

    function canInteract() {
      return window.innerWidth > 768;
    }

    canvas.addEventListener('mousedown', (event) => {
      if (!canInteract()) return;
      const rect = canvas.getBoundingClientRect();
      mouseNDC.set(((event.clientX - rect.left) / rect.width) * 2 - 1, -(((event.clientY - rect.top) / rect.height) * 2 - 1));
      raycaster.setFromCamera(mouseNDC, camera);
      const hit = raycaster.intersectObject(hitPlane);
      if (!hit.length) return;
      isDragging = true;
      lastDragX = event.clientX;
      lastDragY = event.clientY;
      canvas.style.cursor = 'grabbing';
    });

    window.addEventListener('mousemove', (event) => {
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

    new IntersectionObserver(
      (entries) => entries.forEach((entry) => { active = entry.isIntersecting; }),
      { threshold: 0.08 }
    ).observe(hero);

    // Mobile/tablet: wordmark oculto desde o primeiro frame â€” apenas triÃ¢ngulo Ã© visÃ­vel
    setBrandState({ assembly: 0, wordmarkOpacity: isDesktopBrand ? 1 : 0, triangleOpacity: 1 });

    (function tick() {
      window.requestAnimationFrame(tick);
      if (document.hidden || !active) return;

      if (!isDragging) {
        // rotaÃ§Ã£o automÃ¡tica â€” mais rÃ¡pida no desktop com drag velocity, lenta no mobile
        if (canInteract()) {
          trianglePivot.rotation.y += 0.009 + dragVelY;
          trianglePivot.rotation.x += (-pointer.y * 0.08 - trianglePivot.rotation.x) * 0.035;
        } else {
          trianglePivot.rotation.y += 0.0045;
          trianglePivot.rotation.x += (-0.05 - trianglePivot.rotation.x) * 0.08;
        }
        dragVelY *= 0.92;
        dragVelX *= 0.92;
      } else {
        dragVelY *= 0.9;
        dragVelX *= 0.9;
      }

      brandRoot.scale.x += (brandState.brandScale - brandRoot.scale.x) * 0.08;
      brandRoot.scale.y += (brandState.brandScale - brandRoot.scale.y) * 0.08;
      brandRoot.scale.z += (brandState.brandScale - brandRoot.scale.z) * 0.08;

      renderer.render(scene, camera);
    }());

    // Cena 3D inicializada â€” oculta a imagem fallback imediatamente,
    // independente de a fonte do wordmark ter carregado ou nÃ£o.
    canvas.classList.add('is-brand-ready');

    heroBrand3D = {
      canvas,
      setAssembly(value) {
        setBrandState({ assembly: value });
      },
      setWordmarkOpacity(value) {
        setBrandState({ wordmarkOpacity: value });
      },
      setTriangleOpacity(value) {
        setBrandState({ triangleOpacity: value });
      },
      setBrandScale(value) {
        setBrandState({ brandScale: value });
      },
    };
  }

  function initHeroIntro() {
    if (!gsapLoaded || !stLoaded) {
      document.documentElement.classList.remove('hero-booting');
      if (heroBrand3D) heroBrand3D.setAssembly(1);
      initHeroReveal();
      return;
    }

    const hero = document.getElementById('hero');
    const brandCanvas = document.getElementById('heroBrand3D');
    const heroBody = document.querySelector('.hero-body');
    const blocks = Array.from(document.querySelectorAll('.h1-block'));
    const subWrap = document.querySelector('.hero-sub-wrap');
    const brandId = document.querySelector('.hero-brand-id');
    if (!hero || !brandCanvas || !heroBody || !blocks.length) return;

    // Envolve cada linha no clip para o reveal yPercent
    blocks.forEach((block) => {
      if (block.parentElement && block.parentElement.classList.contains('h1-clip')) return;
      const clip = document.createElement('div');
      clip.className = 'h1-clip';
      block.parentNode.insertBefore(clip, block);
      clip.appendChild(block);
    });

    // Mobile usa entrada rÃ¡pida; desktop usa entrada cinemÃ¡tica longa
    const isMobileBoot = window.innerWidth <= 1024;
    const brandInDuration = isMobileBoot ? 0.52 : 1.02;
    const brandInitScale  = isMobileBoot ? 0.88 : 0.62;
    const brandInitBlur   = isMobileBoot ? '4px' : '10px';
    // Mobile: brand entra diretamente na opacidade de fundo â€” nunca vai para opacidade total
    // Isso garante que o conteÃºdo seja o protagonista desde o primeiro frame
    const brandTargetOpacity = window.innerWidth <= 768 ? 0.22 : (isMobileBoot ? 0.18 : 1);

    // Estado inicial: logo minÃºscula (como vinda de longe, do fundo do espaÃ§o)
    // SEM yPercent â€” qualquer percentual confunde o GSAP ao ler CSS transforms existentes
    window.gsap.set(hero, { opacity: 1, visibility: 'visible', clearProps: 'pointerEvents' });
    window.gsap.set(brandCanvas, { opacity: 0, scale: brandInitScale, filter: `blur(${brandInitBlur})`, transformOrigin: 'center center', clearProps: 'y,yPercent' });
    window.gsap.set(heroBody, { opacity: 0 });
    window.gsap.set(blocks, { y: '110%' });
    if (subWrap) window.gsap.set(subWrap, { opacity: 0, y: 22 });
    // brandId entra com leve deslocamento para baixo (complementar ao rise das linhas do h1)
    if (brandId) window.gsap.set(brandId, { opacity: 0, y: -10 });
    if (heroBrand3D) {
      heroBrand3D.setAssembly(0);
      // Mobile/tablet: wordmark oculto desde o inÃ­cio â€” apenas triÃ¢ngulo como sÃ­mbolo de fundo.
      // O texto "ASANI" nÃ£o deve ficar atrÃ¡s da headline em telas menores.
      heroBrand3D.setWordmarkOpacity(isMobileBoot ? 0 : 1);
      heroBrand3D.setTriangleOpacity(1);
      heroBrand3D.setBrandScale(1);
    }
    const introTl = window.gsap.timeline({
      defaults: { overwrite: true },
      onStart: () => {
        document.documentElement.classList.remove('hero-booting');
      },
    });

    // Entrada: logo se aproxima do fundo atÃ© o tamanho natural (scale 1)
    // Mobile: vai direto para brandTargetOpacity (bg level) â€” nunca opacidade total
    // Desktop: vai para opacity:1 (protagonista antes do scroll diminar)
    introTl.to(brandCanvas, {
      opacity: brandTargetOpacity,
      scale: 1,
      filter: 'blur(0px)',
      duration: brandInDuration,
      ease: 'expo.out',
    }, 0.02);
    if (heroBrand3D) {
      introTl.to(heroBrand3D, {
        dummy: 1,
        duration: brandInDuration + 0.06,
        ease: 'expo.out',
        onUpdate() {
          const progress = this.progress();
          heroBrand3D.setAssembly(progress);
          heroBrand3D.setBrandScale(0.9 + progress * 0.1);
        },
      }, 0.02);
    }

    // Usa o spacer como trigger â€” sem pin, sem spacer artificial do GSAP
    const spacer = document.getElementById('hero-scroll-space');
    if (!spacer) { initHeroReveal(); return; }

    // â”€â”€ MOBILE / TABLET (â‰¤1024px) â€” ConteÃºdo Ã© protagonista â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    // Brand jÃ¡ entra em brandTargetOpacity (nÃ­vel de fundo) na tween acima.
    // Headline e CTAs surgem imediatamente, sem esperar o brand se completar.
    // Scroll serve apenas para a saÃ­da do hero.
    if (window.innerWidth <= 1024) {
      spacer.style.height = '120vh'; // espaÃ§o suficiente apenas para o dissolve de saÃ­da

      // Sequencia de entrada: brandId â†’ heroBody â†’ linhas h1 â†’ subWrap
      // brandId entra primeiro â€” e a identidade da marca antes da proposta de valor
      if (brandId) {
        introTl.to(brandId, { opacity: 1, y: 0, duration: 0.36, ease: 'power2.out' }, 0.06);
      }
      introTl.to(heroBody, { opacity: 1, duration: 0.26, ease: 'none' }, 0.08);
      introTl.to(blocks, { y: '0%', stagger: 0.06, duration: 0.46, ease: 'power3.out' }, 0.10);
      if (subWrap) {
        introTl.to(subWrap, { opacity: 1, y: 0, duration: 0.38, ease: 'power2.out' }, 0.46);
      }

      // SaÃ­da via scroll: apenas dissolve o hero completo
      window.gsap.timeline({
        scrollTrigger: {
          trigger: spacer,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.8,
          invalidateOnRefresh: true,
          onLeave: () => {
            hero.style.visibility = 'hidden';
            hero.style.pointerEvents = 'none';
          },
          onEnterBack: () => {
            hero.style.visibility = '';
            hero.style.pointerEvents = '';
          },
        },
      }).to(hero, { opacity: 0, ease: 'power1.in', duration: 1 }, 0);

      return;
    }

    // â”€â”€ DESKTOP (>1024px) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    // Spacer: cobre toda a sequÃªncia + pausa longa apÃ³s texto completo
    // 200vh total â†’ cada unidade â‰ˆ ~64vh de scroll
    spacer.style.height = '200vh';

    // Timeline â€” 3.15 unidades totais:
    // 0.0 â†’ 0.6 : pausa inicial (logo+globo em destaque)
    // 0.6 â†’ 1.5 : logo recua para backdrop
    // 1.5 â†’ 2.1 : texto e botÃµes surgem
    // 2.1 â†’ 2.65: hero completo visÃ­vel antes de desaparecer
    // 2.65â†’ 3.15: dissolve final
    const tl = window.gsap.timeline({
      scrollTrigger: {
        trigger: spacer,
        start: 'top top',
        end: 'bottom top',
        scrub: 1.2,
        invalidateOnRefresh: true,
        onLeave: () => {
          hero.style.visibility = 'hidden';
          hero.style.pointerEvents = 'none';
        },
        onEnterBack: () => {
          hero.style.visibility = '';
          hero.style.pointerEvents = '';
        },
      },
    });

    // Pausa inicial: nada acontece (logo+globo em destaque)
    tl.to({}, { duration: 0.6 }, 0);

    // Logo recua para backdrop
    tl.to(brandCanvas, {
      opacity: 0.12,
      scale: 1,
      ease: 'power2.inOut',
      duration: 0.9,
    }, 0.6);
    if (heroBrand3D) {
      tl.to(heroBrand3D, {
        dummy: 1,
        duration: 0.9,
        ease: 'power2.inOut',
        onUpdate() {
          const progress = this.progress();
          heroBrand3D.setWordmarkOpacity(1 - progress * 0.78);
          heroBrand3D.setTriangleOpacity(1 - progress * 0.32);
          heroBrand3D.setBrandScale(1 - progress * 0.08);
        },
      }, 0.6);
    }

    // Texto e botÃµes surgem (overlap leve com fim do recuo do logo)
    tl.to(heroBody, { opacity: 1, duration: 0.22, ease: 'none' }, 1.48);
    tl.to(blocks, { y: '0%', stagger: 0.06, duration: 0.62, ease: 'power3.out' }, 1.48);
    if (subWrap) {
      tl.to(subWrap, { opacity: 1, y: 0, duration: 0.42, ease: 'power2.out' }, 1.62);
    }

    // Pausa: hero completo visÃ­vel antes de desaparecer
    tl.to({}, { duration: 0.5 }, 2.15);

    // Dissolve o hero no final â€” evita que apareÃ§a atrÃ¡s das seÃ§Ãµes
    tl.to(hero, { opacity: 0, ease: 'power2.in', duration: 0.5 }, 2.65);

  }

  function initHeroReveal() {
    const blocks = Array.from(document.querySelectorAll('.h1-block'));
    const subWrap = document.querySelector('.hero-sub-wrap');
    const brandId = document.querySelector('.hero-brand-id');
    if (!blocks.length || !gsapLoaded) return;

    blocks.forEach((block) => {
      if (block.parentElement && block.parentElement.classList.contains('h1-clip')) return;
      const clip = document.createElement('div');
      clip.className = 'h1-clip';
      block.parentNode.insertBefore(clip, block);
      clip.appendChild(block);
      window.gsap.set(block, { y: '110%' });
    });

    if (subWrap) {
      window.gsap.set(subWrap, { opacity: 0, y: 26 });
    }
    if (brandId) {
      window.gsap.set(brandId, { opacity: 0, y: -10 });
    }

    window.setTimeout(() => {
      if (brandId) {
        window.gsap.to(brandId, { opacity: 1, y: 0, duration: 0.44, ease: 'power2.out' });
      }
      window.gsap.to(blocks, {
        y: '0%',
        stagger: 0.11,
        duration: 1.02,
        ease: 'power4.out',
      });

      if (subWrap) {
        window.gsap.to(subWrap, {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
          delay: blocks.length * 0.11 + 0.12,
          clearProps: 'opacity,transform',
        });
      }
    }, 80);
  }

  function initHeroDepth() {
    if (isTouch || !gsapLoaded) return;

    const hero = document.getElementById('hero');
    const blocks = Array.from(document.querySelectorAll('.h1-block'));
    const ambient = document.getElementById('heroAmbient');
    if (!hero || !blocks.length) return;

    let mx = 0;
    let my = 0;
    let hovering = false;

    hero.addEventListener('mousemove', (event) => {
      const rect = hero.getBoundingClientRect();
      mx = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      my = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
      hovering = true;
    });

    hero.addEventListener('mouseleave', () => {
      hovering = false;
      blocks.forEach((block) => {
        window.gsap.to(block, {
          x: 0,
          y: 0,
          rotateX: 0,
          rotateY: 0,
          duration: 1.1,
          ease: 'power3.out',
          overwrite: true,
        });
      });

      if (ambient) {
        window.gsap.to(ambient, {
          x: 0,
          y: 0,
          duration: 1.1,
          ease: 'power3.out',
          overwrite: true,
        });
      }
    });

    window.gsap.ticker.add(() => {
      if (!hovering) return;

      blocks.forEach((block) => {
        const depth = parseFloat(block.dataset.depth || '0');
        const factor = 6 + depth * 4;
        window.gsap.to(block, {
          x: mx * factor,
          y: my * factor * 0.45,
          rotateY: mx * depth * -3,
          rotateX: my * depth * 1.4,
          duration: 0.8,
          ease: 'power2.out',
          overwrite: true,
        });
      });

      if (ambient) {
        window.gsap.to(ambient, {
          x: mx * -18,
          y: my * -12,
          duration: 1,
          ease: 'power2.out',
          overwrite: true,
        });
      }
    });
  }

  function initLineReveal() {
    const titles = Array.from(document.querySelectorAll('.manifesto-title'));
    if (!titles.length) return;

    titles.forEach((title) => {
      const raw = title.innerHTML;
      if (!/<br\s*\/?>/i.test(raw) || title.querySelector('.ln-inner')) return;

      const parts = raw.split(/<br\s*\/?>/i).map((part) => part.trim());
      title.innerHTML = parts.map((part) =>
        `<span class="ln-clip"><span class="ln-inner">${part}</span></span>`
      ).join('');

      const inners = title.querySelectorAll('.ln-inner');

      if (gsapLoaded && stLoaded) {
        window.gsap.set(inners, { yPercent: 112 });
        window.ScrollTrigger.create({
          trigger: title,
          start: 'top 82%',
          once: true,
          onEnter: () => {
            window.gsap.to(inners, {
              yPercent: 0,
              stagger: 0.14,
              duration: 1.08,
              ease: 'power4.out',
            });
          },
        });
      } else {
        inners.forEach((inner) => inner.classList.add('is-visible'));
      }
    });
  }

  function initRevealClasses() {
    const nodes = Array.from(document.querySelectorAll('[data-reveal]'));
    if (!nodes.length) return;

    if (gsapLoaded && stLoaded) {
      nodes.forEach((node) => {
        window.ScrollTrigger.create({
          trigger: node,
          start: 'top 88%',
          once: true,
          onEnter: () => node.classList.add('is-visible'),
        });
      });
      return;
    }

    nodes.forEach((node) => revealObserver.observe(node));
  }

  function initScrollAnimations() {
    if (!gsapLoaded || !stLoaded) return;

    document.querySelectorAll('.sec-kicker').forEach((kicker) => {
      window.ScrollTrigger.create({
        trigger: kicker,
        start: 'top 90%',
        once: true,
        onEnter: () => scramble(kicker, 700),
      });

      window.gsap.from(kicker, {
        x: -18,
        opacity: 0,
        duration: 0.62,
        ease: 'power3.out',
        immediateRender: false,
        scrollTrigger: {
          trigger: kicker,
          start: 'top 90%',
          toggleActions: 'play none none none',
        },
      });
    });

    document.querySelectorAll('.sec-title').forEach((title) => {
      window.gsap.from(title, {
        y: 44,
        opacity: 0,
        duration: 1,
        ease: 'power4.out',
        immediateRender: false,
        scrollTrigger: {
          trigger: title,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });
    });

    const groupedAnimations = [
      { selector: '.mstep', y: 26, stagger: 0.08, trigger: '.manifesto-steps' },
      { selector: '.proc-item', y: 36, stagger: 0.11, trigger: '.process-track' },
      { selector: '.case-card', y: 48, stagger: 0.1, trigger: '.cases-grid' },
      { selector: '.tech-pillar', x: -26, stagger: 0.1, trigger: '.tech-pillars' },
      { selector: '.cm-item', y: 18, stagger: 0.03, trigger: '.clients-marquee' },
    ];

    groupedAnimations.forEach(({ selector, trigger, y = 0, x = 0, stagger }) => {
      const elements = document.querySelectorAll(selector);
      const triggerNode = document.querySelector(trigger);
      if (!elements.length || !triggerNode) return;

      window.gsap.from(elements, {
        x,
        y,
        opacity: 0,
        stagger,
        duration: 0.85,
        ease: 'power3.out',
        immediateRender: false,
        scrollTrigger: {
          trigger: triggerNode,
          start: 'top 84%',
          toggleActions: 'play none none none',
        },
      });
    });

    const processLine = document.querySelector('.process-line');
    if (processLine) {
      const svgLine = processLine.querySelector('line');
      if (svgLine) {
        window.gsap.to(svgLine, {
          strokeDashoffset: 0,
          ease: 'none',
          immediateRender: false,
          scrollTrigger: {
            trigger: '.process-track',
            start: 'top 80%',
            end: 'bottom 55%',
            scrub: 0.5,
          },
        });
      } else {
        window.gsap.from(processLine, {
          scaleX: 0,
          transformOrigin: 'left center',
          duration: 1,
          ease: 'power2.inOut',
          immediateRender: false,
          scrollTrigger: {
            trigger: '.process-track',
            start: 'top 82%',
            toggleActions: 'play none none none',
          },
        });
      }
    }

    document.querySelectorAll('.founder').forEach((founder) => {
      window.ScrollTrigger.create({
        trigger: founder,
        start: 'top 86%',
        once: true,
        onEnter: () => founder.classList.add('is-visible'),
      });
    });
  }

  function initParallax() {
    if (!gsapLoaded || !stLoaded || !isDesktop()) return;

    // heroBody parallax removido â€” o hero usa scroll-driven intro (initHeroIntro)
    // e o parallax y:-74 deslocava o conteÃºdo para cima durante a fase de hold.

    document.querySelectorAll('.sec-head').forEach((head) => {
      const section = head.closest('section');
      if (!section) return;

      window.gsap.to(head, {
        y: -24,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.4,
        },
      });
    });
  }

  function initManifestoTakeover() {
    if (!gsapLoaded || !stLoaded || !isDesktop()) return;

    const manifesto = document.getElementById('manifesto');
    if (!manifesto) return;

    // NÃ£o adiciona manifesto-takeover: essa classe tem margin-top:-100vh
    // que causa sobreposiÃ§Ã£o com a seÃ§Ã£o anterior. Aplicamos o estilo via GSAP.
    window.gsap.set(manifesto, {
      y: () => Math.round(window.innerHeight * 0.5),
      zIndex: 10,
      scale: 0.985,
      transformOrigin: '50% 0%',
      willChange: 'transform',
    });

    // Desliza o manifesto para cima quando entra na viewport.
    // Sem pin em #opening-stage â€” o pin causava o hero (position:fixed) a
    // perder o viewport como containing block e sair da tela.
    window.gsap.timeline({
      scrollTrigger: {
        trigger: manifesto,
        start: 'top bottom',
        end: () => `+=${Math.round(window.innerHeight * 0.85)}`,
        scrub: 1,
        invalidateOnRefresh: true,
      },
    }).to(manifesto, {
      y: 0,
      scale: 1,
      ease: 'none',
    }, 0);
  }

  function initNavActiveLinks() {
    if (!stLoaded || !gsapLoaded) return;

    const sectionLinkMap = [
      ['sobre', '#sobre'],
      ['soluÃ§Ãµes', '#soluÃ§Ãµes'],
      ['processo', '#processo'],
      ['cases', '#cases'],
      ['fundadores', '#fundadores'],
    ];

    const navLinks = Array.from(document.querySelectorAll('.nav-links a'));
    const drawerNavLinks = Array.from(document.querySelectorAll('.drawer-link'));

    function setActive(href) {
      navLinks.forEach((link) => {
        link.classList.toggle('nav-active', link.getAttribute('href') === href);
      });

      drawerNavLinks.forEach((link) => {
        link.classList.toggle('drawer-link-active', link.getAttribute('href') === href);
      });
    }

    sectionLinkMap.forEach(([sectionId, href]) => {
      const section = document.getElementById(sectionId);
      if (!section) return;

      window.ScrollTrigger.create({
        trigger: section,
        start: 'top 42%',
        end: 'bottom 42%',
        onEnter: () => setActive(href),
        onEnterBack: () => setActive(href),
      });
    });
  }

  function initMagnetic() {
    if (isTouch || !gsapLoaded) return;

    document.querySelectorAll('.btn-primary, .btn-ghost, .nav-btn').forEach((element) => {
      element.addEventListener('mousemove', (event) => {
        const rect = element.getBoundingClientRect();
        const x = (event.clientX - rect.left - rect.width * 0.5) * 0.18;
        const y = (event.clientY - rect.top - rect.height * 0.5) * 0.18;
        window.gsap.to(element, {
          x,
          y,
          duration: 0.24,
          ease: 'power2.out',
          overwrite: true,
        });
      });

      element.addEventListener('mouseleave', () => {
        window.gsap.to(element, {
          x: 0,
          y: 0,
          duration: 0.6,
          ease: 'elastic.out(1,0.55)',
          overwrite: true,
        });
      });
    });
  }

  function initProgress() {
    const bar = document.getElementById('page-progress');
    if (!bar || !gsapLoaded || !stLoaded) return;

    window.gsap.set(bar, { scaleX: 0, transformOrigin: '0 0' });
    window.gsap.to(bar, {
      scaleX: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0,
      },
    });
  }

  function initSmoothAnchors() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      const href = anchor.getAttribute('href');
      if (!href || href === '#') return;

      const target = document.querySelector(href);
      if (!target) return;

      anchor.addEventListener('click', (event) => {
        event.preventDefault();

        if (lenis) {
          lenis.scrollTo(target, { offset: -80, duration: 1.35 });
        } else {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }

  function initHeroAmbient() {
    if (!threeLoaded) return;

    const canvas = document.getElementById('heroAmbient');
    const hero = document.getElementById('hero');
    if (!canvas || !hero) return;

    canvas.style.display = 'block';

    const renderer = new window.THREE.WebGLRenderer({
      canvas,
      antialias: false,
      alpha: true,
      powerPreference: 'low-power',
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    renderer.setClearColor(0x000000, 0);

    const scene = new window.THREE.Scene();
    const camera = new window.THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const geometry = new window.THREE.PlaneGeometry(2, 2);

    const material = new window.THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      uniforms: {
        uTime: { value: 0 },
        uVelocity: { value: 0 },
        uResolution: { value: new window.THREE.Vector2() },
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

          // Velocidade suave â€” scroll acelera levemente a fumaÃ§a sem saltos
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

    scene.add(new window.THREE.Mesh(geometry, material));

    function resize() {
      const width = hero.clientWidth || window.innerWidth;
      const height = hero.clientHeight || window.innerHeight;
      renderer.setSize(width, height, false);
      material.uniforms.uResolution.value.set(width, height);
    }

    resize();
    window.addEventListener('resize', resize, { passive: true });

    let active = true;
    // Tempo real via performance.now() â€” framerate-independent, sem travamento em jank
    let startTime = performance.now();
    // Velocidade suavizada com inÃ©rcia â€” evita saltos bruscos do Lenis
    let smoothVel = 0;

    // Observer correto: liga/desliga baseado em isIntersecting
    new IntersectionObserver((entries) => {
      entries.forEach((entry) => { active = entry.isIntersecting; });
    }, { threshold: 0.04 }).observe(hero);

    (function tick() {
      window.requestAnimationFrame(tick);
      if (document.hidden || !active) return;
      // Suaviza velocidade com inÃ©rcia (tau â‰ˆ 12 frames) para animaÃ§Ã£o fluida
      smoothVel += (scrollVelocity - smoothVel) * 0.08;
      material.uniforms.uTime.value = (performance.now() - startTime) * 0.001;
      material.uniforms.uVelocity.value = smoothVel;
      renderer.render(scene, camera);
    }());
  }

  function initCtaAmbient() {
    if (!threeLoaded || !isDesktop()) return;

    const canvas = document.getElementById('ctaCanvas');
    const section = document.getElementById('contato');
    if (!canvas || !section) return;

    canvas.style.display = 'block';
    canvas.style.opacity = '0';

    const renderer = new window.THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: 'low-power',
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    renderer.setClearColor(0x000000, 0);

    const scene = new window.THREE.Scene();
    const camera = new window.THREE.PerspectiveCamera(42, 1, 0.1, 100);
    camera.position.set(0, 0, 14);

    const group = new window.THREE.Group();
    scene.add(group);

    scene.add(new window.THREE.AmbientLight(0xffffff, 0.85));

    const keyLight = new window.THREE.PointLight(0xa3001d, 3.5, 44, 2);
    keyLight.position.set(0, 1, 10);
    scene.add(keyLight);

    const rimLight = new window.THREE.PointLight(0xffffff, 1.2, 34, 2);
    rimLight.position.set(-8, -2, 8);
    scene.add(rimLight);

    const material = new window.THREE.MeshPhysicalMaterial({
      color: 0x8f1122,
      roughness: 0.22,
      metalness: 0.24,
      clearcoat: 0.9,
      clearcoatRoughness: 0.22,
    });

    const orbiters = [];
    const count = 72;

    for (let index = 0; index < count; index += 1) {
      const ratio = index / count;
      const node = new window.THREE.Group();
      const mesh = new window.THREE.Mesh(
        new window.THREE.IcosahedronGeometry(0.04 + (index % 4) * 0.008, 0),
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

    function resize() {
      const width = section.clientWidth || window.innerWidth;
      const height = section.clientHeight || 520;
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    }

    resize();
    window.addEventListener('resize', resize, { passive: true });

    if (gsapLoaded && stLoaded) {
      window.gsap.to(canvas, {
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
    } else {
      canvas.style.opacity = '1';
    }

    let active = false;
    const clock = new window.THREE.Clock();
    const visibilityObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        active = entry.isIntersecting;
      });
    }, { threshold: 0.16 });
    visibilityObserver.observe(section);

    (function render() {
      window.requestAnimationFrame(render);
      if (document.hidden || !active) return;

      const time = clock.getElapsedTime();
      const velocityFactor = Math.min(Math.abs(scrollVelocity) * 0.02, 0.32);

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

  function initSolutionsOrbit() {
    const carousel = document.getElementById('solutionsCarousel');
    const track = document.getElementById('solutionsTrack');
    const stage = carousel ? carousel.querySelector('.solutions-stack-stage') : null;
    const section = carousel ? carousel.closest('.section-solutions') : null;
    if (!carousel || !track || !stage || !section) return;

    const cards = Array.from(track.querySelectorAll('.sol-card'));
    if (!cards.length) return;

    let activeIndex = 0;
    let activeProgress = 0;

    const nameBackdrop = section.querySelector('.solutions-name-bg');
    let currentBackdropName = '';

    function clamp(value, min, max) {
      return Math.min(max, Math.max(min, value));
    }

    function mix(start, end, amount) {
      return start + (end - start) * amount;
    }

    function easeStack(amount) {
      const t = clamp(amount, 0, 1);
      return 1 - Math.pow(1 - t, 3);
    }

    function updateNameBackdrop(name) {
      if (!nameBackdrop || name === currentBackdropName) return;
      currentBackdropName = name;
      if (gsapLoaded) {
        window.gsap.to(nameBackdrop, {
          opacity: 0,
          duration: 0.14,
          ease: 'power2.in',
          overwrite: true,
          onComplete: () => {
            nameBackdrop.textContent = name;
            window.gsap.to(nameBackdrop, { opacity: 1, duration: 0.36, ease: 'power2.out' });
          },
        });
      } else {
        nameBackdrop.textContent = name;
      }
    }

    function getMetrics() {
      if (window.innerWidth <= 480) {
        return {
          x: [0, 8, -10, 14, -18],
          y: [0, 8, 15, 22, 29],
          z: [0, -16, -32, -48, -64],
          rotateZ: [-0.3, -1.1, 0.9, -1.5, 1.2],
          rotateX: [0, 0.5, 1, 1.4, 1.8],
          rotateY: [-0.4, -1.2, 1, -1.5, 1.2],
          scale: [1, 0.972, 0.946, 0.918, 0.892],
          opacity: [1, 0.82, 0.66, 0.48, 0.3],
          blur: [0, 0.28, 0.6, 0.96, 1.28],
          saturate: [1.04, 0.9, 0.78, 0.66, 0.56],
          brighten: [1.02, 0.94, 0.86, 0.78, 0.7],
          liftY: -124,
          liftZ: 78,
          liftRotateZ: 8,
          liftRotateY: -10,
        };
      }

      if (window.innerWidth <= 900) {
        return {
          x: [0, 10, -13, 18, -22],
          y: [0, 9, 18, 27, 36],
          z: [0, -22, -44, -66, -88],
          rotateZ: [-0.4, -1.3, 1.1, -1.8, 1.4],
          rotateX: [0, 0.6, 1.2, 1.8, 2.2],
          rotateY: [-0.5, -1.6, 1.3, -2, 1.6],
          scale: [1, 0.97, 0.942, 0.912, 0.882],
          opacity: [1, 0.84, 0.68, 0.52, 0.34],
          blur: [0, 0.32, 0.7, 1.08, 1.46],
          saturate: [1.05, 0.9, 0.78, 0.66, 0.56],
          brighten: [1.03, 0.94, 0.86, 0.78, 0.7],
          liftY: -152,
          liftZ: 92,
          liftRotateZ: 8.8,
          liftRotateY: -12,
        };
      }

      return {
        x: [0, 12, -16, 22, -28],
        y: [0, 10, 20, 30, 40],
        z: [0, -28, -56, -84, -112],
        rotateZ: [-0.5, -1.5, 1.2, -2, 1.6],
        rotateX: [0, 0.7, 1.3, 2, 2.5],
        rotateY: [-0.7, -1.9, 1.5, -2.3, 1.8],
        scale: [1, 0.968, 0.938, 0.906, 0.874],
        opacity: [1, 0.85, 0.7, 0.54, 0.36],
        blur: [0, 0.36, 0.76, 1.16, 1.56],
        saturate: [1.06, 0.92, 0.8, 0.68, 0.58],
        brighten: [1.04, 0.95, 0.87, 0.79, 0.72],
        liftY: -186,
        liftZ: 110,
        liftRotateZ: 9.6,
        liftRotateY: -13,
      };
    }

    function getPoseForSlot(slot, metrics) {
      const i = Math.min(slot, metrics.x.length - 1);
      return {
        x: metrics.x[i],
        y: metrics.y[i],
        z: metrics.z[i],
        rotateX: metrics.rotateX[i],
        rotateY: metrics.rotateY[i],
        rotateZ: metrics.rotateZ[i],
        scale: metrics.scale[i],
        opacity: metrics.opacity[i],
        blur: metrics.blur[i],
        saturate: metrics.saturate[i],
        brighten: metrics.brighten[i],
      };
    }

    function mixPose(fromPose, toPose, amount) {
      return {
        x: mix(fromPose.x, toPose.x, amount),
        y: mix(fromPose.y, toPose.y, amount),
        z: mix(fromPose.z, toPose.z, amount),
        rotateX: mix(fromPose.rotateX, toPose.rotateX, amount),
        rotateY: mix(fromPose.rotateY, toPose.rotateY, amount),
        rotateZ: mix(fromPose.rotateZ, toPose.rotateZ, amount),
        scale: mix(fromPose.scale, toPose.scale, amount),
        opacity: mix(fromPose.opacity, toPose.opacity, amount),
        blur: mix(fromPose.blur, toPose.blur, amount),
        saturate: mix(fromPose.saturate, toPose.saturate, amount),
        brighten: mix(fromPose.brighten, toPose.brighten, amount),
      };
    }

    function arcPose(fromPose, midPose, toPose, amount) {
      if (amount <= 0.5) return mixPose(fromPose, midPose, easeStack(amount / 0.5));
      return mixPose(midPose, toPose, easeStack((amount - 0.5) / 0.5));
    }

    function getLiftPose(toPose, metrics) {
      return {
        x: toPose.x * 0.08,
        y: metrics.liftY,
        z: metrics.liftZ,
        rotateX: -10,
        rotateY: metrics.liftRotateY,
        rotateZ: metrics.liftRotateZ,
        scale: 0.91,
        opacity: 0.82,
        blur: 0.2,
        saturate: 1.06,
        brighten: 1.04,
      };
    }

    function getOrderForIndex(index) {
      return cards.slice(index).concat(cards.slice(0, index));
    }

    function render(index, progress) {
      const metrics = getMetrics();
      const baseIndex = clamp(index, 0, cards.length - 1);
      const order = getOrderForIndex(baseIndex);
      const easedProgress = reduceMotionQuery.matches ? (progress >= 0.5 ? 1 : 0) : easeStack(progress);
      const visibleIndex = progress < 0.5 ? baseIndex : clamp(baseIndex + 1, 0, cards.length - 1);

      cards.forEach((card) => {
        const currentSlot = order.indexOf(card);
        const currentPose = getPoseForSlot(currentSlot, metrics);
        let pose = currentPose;

        if (baseIndex < cards.length - 1 && progress > 0) {
          if (card === cards[baseIndex]) {
            pose = arcPose(
              currentPose,
              getLiftPose(getPoseForSlot(cards.length - 1, metrics), metrics),
              getPoseForSlot(cards.length - 1, metrics),
              progress
            );
          } else if (currentSlot > 0) {
            pose = mixPose(currentPose, getPoseForSlot(currentSlot - 1, metrics), easedProgress);
          }
        }

        const zIndex = card === cards[baseIndex]
          ? (progress < 0.56 ? 18 : 4)
          : Math.max(3, 16 - currentSlot);

        card.style.transform = `translate3d(calc(-50% + ${pose.x}px), calc(-50% + ${pose.y}px), ${pose.z}px) rotateX(${pose.rotateX}deg) rotateY(${pose.rotateY}deg) rotateZ(${pose.rotateZ}deg) scale(${pose.scale})`;
        card.style.opacity = String(pose.opacity);
        card.style.filter = `blur(${pose.blur}px) saturate(${pose.saturate}) brightness(${pose.brighten})`;
        card.style.zIndex = String(zIndex);
        card.classList.toggle('is-stack-active', card === cards[visibleIndex]);
        card.classList.toggle('is-stack-next', baseIndex < cards.length - 1 && card === cards[baseIndex + 1]);
        card.setAttribute('aria-hidden', card === cards[visibleIndex] ? 'false' : 'true');
      });

      updateNameBackdrop(cards[visibleIndex]?.querySelector('h3')?.textContent || '');
    }

    function setState(index, progress) {
      activeIndex = clamp(index, 0, cards.length - 1);
      activeProgress = clamp(progress, 0, 1);
      render(activeIndex, activeProgress);
    }

    function renderFromScrollProgress(progress) {
      const transitionCount = Math.max(1, cards.length - 1);
      const scaledProgress = clamp(progress, 0, 1) * transitionCount;
      const isLastFrame = scaledProgress >= transitionCount;
      const baseIndex = isLastFrame ? cards.length - 1 : Math.floor(scaledProgress);
      const localProgress = isLastFrame ? 0 : (scaledProgress - baseIndex);
      setState(baseIndex, localProgress);
    }

    setState(0, 0);

    if (!gsapLoaded || !stLoaded) {
      return;
    }

    const scrollDistance = () => {
      const w = window.innerWidth;
      const viewportFactor = w <= 480 ? 0.58 : w <= 900 ? 0.68 : 0.88;
      return Math.round(Math.max(1, cards.length - 1) * window.innerHeight * viewportFactor);
    };

    const scrubAmount = window.innerWidth <= 900 ? 0.6 : 0.9;

    window.ScrollTrigger.create({
      trigger: section,
      start: 'top top',
      end: () => `+=${scrollDistance()}`,
      pin: true,
      pinSpacing: true,
      scrub: scrubAmount,
      anticipatePin: 1,
      invalidateOnRefresh: true,
      onRefresh: (self) => {
        renderFromScrollProgress(self.progress);
      },
      onUpdate: (self) => {
        renderFromScrollProgress(self.progress);
      },
    });
  }
  function initStatsSequence() {
    const section = document.getElementById('sobre');
    if (!section) return;

    const items = Array.from(section.querySelectorAll('.stat-item'));
    if (!items.length) return;

    // Fallback sem GSAP/ScrollTrigger: empilha os itens visivelmente
    if (!gsapLoaded || !stLoaded) {
      items.forEach((item, i) => {
        item.style.opacity = '1';
        item.style.position = i === 0 ? 'relative' : 'absolute';
        if (i > 0) item.style.display = 'none';
      });
      return;
    }

    const N = items.length;
    const ENTER = 0.20;
    const EXIT  = 0.20;
    const isMobile = () => window.innerWidth <= 768;
    const scrollPerStat = () => Math.round(
      window.innerHeight * (isMobile() ? 0.55 : 0.75)
    );

    // Stage sempre 100svh â€” .stat-item usa position:absolute e colapsa se o pai nÃ£o tiver altura explÃ­cita
    const stage = section.querySelector('.stats-stage');
    const getPinnedDistance = () => Math.round(N * scrollPerStat());

    function setStageHeight() {
      if (stage) {
        stage.style.height = '100svh';
      }
      section.style.minHeight = `${Math.round(window.innerHeight + getPinnedDistance())}px`;
    }
    setStageHeight();
    window.addEventListener('resize', setStageHeight, { passive: true });

    // Estado inicial: tudo invisÃ­vel
    items.forEach((item) => {
      const left = item.querySelector('.stat-left');
      const bgWord = item.querySelector('.stat-bg-word');
      window.gsap.set(item, { opacity: 0 });
      if (left)   window.gsap.set(left,   { yPercent: 6,  opacity: 0 });
      if (bgWord) window.gsap.set(bgWord, { xPercent: 5,  opacity: 0 });
    });

    const tl = window.gsap.timeline({
      scrollTrigger: {
        trigger: stage,
        pin: true,
        pinSpacing: false,
        start: 'top top',
        end: () => `+=${getPinnedDistance()}`,
        scrub: 1,
        invalidateOnRefresh: true,
        anticipatePin: 1,
        onToggle: (self) => section.classList.toggle('is-stats-active', self.isActive),
        onRefreshInit: setStageHeight,
      },
    });

    items.forEach((item, i) => {
      const base   = i;
      const left   = item.querySelector('.stat-left');
      const bgWord = item.querySelector('.stat-bg-word');

      // Item container visÃ­vel durante seu slot
      tl.to(item, { opacity: 1, duration: 0.01 }, base);

      // ConteÃºdo esquerdo entra de baixo
      if (left) {
        tl.fromTo(
          left,
          { yPercent: 6, opacity: 0 },
          { yPercent: 0, opacity: 1, ease: 'power3.out', duration: ENTER },
          base
        );
      }

      // Palavra de fundo entra da direita, ligeiramente atrasada â€” cria ritmo
      if (bgWord) {
        tl.fromTo(
          bgWord,
          { xPercent: 5, opacity: 0 },
          { xPercent: 0, opacity: 1, ease: 'power2.out', duration: ENTER * 1.2 },
          base + 0.04
        );
      }

      // SaÃ­da para cima (exceto o Ãºltimo)
      if (i < N - 1) {
        if (left) {
          tl.to(left, { yPercent: -6, opacity: 0, ease: 'power2.in', duration: EXIT }, base + 1 - EXIT);
        }
        if (bgWord) {
          tl.to(bgWord, { xPercent: -4, opacity: 0, ease: 'power2.in', duration: EXIT }, base + 1 - EXIT);
        }
        tl.to(item, { opacity: 0, duration: 0.01 }, base + 1);
      }
    });
  }

  function initStatsGlobe() {
    // statsGlobe canvas removido â€” seÃ§Ã£o de nÃºmeros usa initStatsSequence()
  }

  function initTechOrbit() {
    if (!threeLoaded || !isDesktop()) return;
    const canvas = document.getElementById('techOrbit');
    const section = document.getElementById('tecnologia');
    if (!canvas || !section) return;

    canvas.style.display = 'block';
    canvas.style.opacity = '0';

    const renderer = new window.THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: 'low-power',
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    renderer.setClearColor(0x000000, 0);

    const scene = new window.THREE.Scene();
    const camera = new window.THREE.PerspectiveCamera(48, 1, 0.1, 100);
    camera.position.set(0, 0, 11);

    const style = getComputedStyle(document.documentElement);
    const accentHex = style.getPropertyValue('--accent').trim() || '#840016';

    function makeIconTexture(label, bgColor) {
      const size = 128;
      const c = document.createElement('canvas');
      c.width = size;
      c.height = size;
      const ctx = c.getContext('2d');
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
      return new window.THREE.CanvasTexture(c);
    }

    function makeCentralTexture() {
      const size = 256;
      const c = document.createElement('canvas');
      c.width = size;
      c.height = size;
      const ctx = c.getContext('2d');
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
      return new window.THREE.CanvasTexture(c);
    }

    const centralMat = new window.THREE.SpriteMaterial({
      map: makeCentralTexture(),
      transparent: true,
      depthWrite: false,
    });
    const central = new window.THREE.Sprite(centralMat);
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

    const orbitItems = [];
    ringDefs.forEach((ring) => {
      ring.items.forEach((item, index) => {
        const tex = makeIconTexture(item.label, item.bg);
        const mat = new window.THREE.SpriteMaterial({ map: tex, transparent: true, depthWrite: false });
        const sprite = new window.THREE.Sprite(mat);
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
    section.addEventListener('mousemove', (event) => {
      const rect = section.getBoundingClientRect();
      mouseX = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      mouseY = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
    });
    section.addEventListener('mouseleave', () => { mouseX = 0; mouseY = 0; });

    function resize() {
      const w = canvas.clientWidth || section.clientWidth || window.innerWidth;
      const h = canvas.clientHeight || 520;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    }
    resize();
    window.addEventListener('resize', resize, { passive: true });

    if (gsapLoaded && stLoaded) {
      window.gsap.to(canvas, {
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
    } else {
      canvas.style.opacity = '1';
    }

    let active = false;
    const clock = new window.THREE.Clock();
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

  function initHeroGlobe() {
    if (!threeLoaded) return;
    const canvas = document.getElementById('heroGlobe');
    const hero = document.getElementById('hero');
    if (!canvas || !hero) return;

    canvas.style.opacity = '0';

    const renderer = new window.THREE.WebGLRenderer({
      canvas, alpha: true, antialias: false, powerPreference: 'low-power',
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    renderer.setClearColor(0x000000, 0);

    const scene = new window.THREE.Scene();
    const camera = new window.THREE.PerspectiveCamera(52, 1, 0.1, 100);
    camera.position.set(0, 0, 7.5);

    const themeStyle = getComputedStyle(document.documentElement);
    const accentHex = themeStyle.getPropertyValue('--accent').trim() || '#840016';
    const accentColor = new window.THREE.Color(accentHex);
    const R = 3.0;

    /* ---- MÃ¡scara de terra: canvas 2D offscreen com continentes ---- */
    const MW = 512, MH = 256;
    const mc = document.createElement('canvas');
    mc.width = MW; mc.height = MH;
    const cx = mc.getContext('2d');
    cx.fillStyle = '#000';
    cx.fillRect(0, 0, MW, MH);
    cx.fillStyle = '#fff';

    // Converte [lng, lat] â†’ pixel no canvas equirretangular
    const p = (lng, lat) => [(lng + 180) / 360 * MW, (90 - lat) / 180 * MH];

    function terra(coords) {
      cx.beginPath();
      cx.moveTo(...p(coords[0][0], coords[0][1]));
      for (let i = 1; i < coords.length; i++) cx.lineTo(...p(coords[i][0], coords[i][1]));
      cx.closePath();
      cx.fill();
    }

    // AmÃ©rica do Norte + AmÃ©rica Central
    terra([[-167,68],[-140,72],[-100,75],[-78,72],[-60,60],[-55,47],
           [-66,44],[-70,42],[-76,34],[-80,25],[-83,10],[-78,8],
           [-83,8],[-97,22],[-100,20],[-110,26],[-117,32],[-124,38],
           [-126,50],[-130,54],[-140,60],[-155,60],[-167,68]]);
    // GroenlÃ¢ndia
    terra([[-56,76],[-20,82],[-16,72],[-26,62],[-44,60],[-52,64],[-56,76]]);
    // AmÃ©rica do Sul
    terra([[-78,8],[-60,12],[-52,4],[-36,-4],[-35,-8],[-38,-15],[-42,-22],
           [-44,-23],[-50,-28],[-52,-33],[-58,-38],[-65,-55],[-68,-52],
           [-73,-48],[-70,-38],[-72,-28],[-72,-18],[-76,-12],[-78,-2],[-80,4],[-78,8]]);
    // Europa Ocidental
    terra([[-10,36],[-5,44],[-10,54],[-5,48],[2,50],[4,52],[8,56],
           [10,60],[14,56],[18,56],[20,60],[24,60],[28,56],[26,50],
           [22,42],[16,38],[12,36],[2,36],[-8,36],[-10,36]]);
    // EscandinÃ¡via
    terra([[14,56],[20,70],[28,72],[30,64],[26,56],[22,56],[18,56],[14,56]]);
    // GrÃ£-Bretanha (aprox.)
    terra([[-8,50],[-6,56],[-4,58],[-2,56],[-2,50],[-5,50],[-8,50]]);
    // Ãfrica
    terra([[-18,14],[-5,5],[2,6],[8,4],[12,-4],[18,-12],[22,-18],
           [26,-30],[32,-30],[36,-20],[40,-12],[44,-2],[50,10],[52,12],
           [44,12],[42,20],[38,22],[32,28],[22,36],[16,36],[8,36],
           [2,36],[-2,32],[-8,28],[-16,20],[-18,14]]);
    // PenÃ­nsula ArÃ¡bica
    terra([[32,28],[38,22],[42,20],[44,12],[52,12],[56,22],[60,22],[50,30],[44,30],[40,32],[36,30],[32,28]]);
    // Europa Oriental + CÃ¡ucaso
    terra([[26,42],[40,42],[50,44],[60,50],[56,60],[50,60],[40,52],[30,46],[26,42]]);
    // SibÃ©ria + RÃºssia (massa principal)
    terra([[26,60],[30,70],[40,72],[60,74],[80,74],[100,76],[120,74],
           [140,72],[168,68],[180,68],[180,52],[168,52],[155,50],
           [148,44],[140,50],[130,50],[120,52],[110,54],[100,52],
           [90,52],[80,50],[72,54],[60,50],[50,44],[40,42],[28,50],[26,60]]);
    // Subcontinente Indiano
    terra([[60,22],[72,20],[76,8],[80,8],[82,14],[80,22],[76,22],
           [72,24],[64,24],[60,24],[56,22],[60,22]]);
    terra([[68,24],[76,22],[80,22],[80,14],[78,8],[72,8],[68,8],[66,14],[68,20],[68,24]]);
    // Leste AsiÃ¡tico + Sudeste AsiÃ¡tico
    terra([[96,28],[100,30],[108,28],[112,26],[116,24],[120,22],
           [124,22],[128,24],[130,32],[132,34],[136,36],[140,40],
           [142,44],[140,50],[130,50],[124,44],[118,38],[110,36],
           [104,36],[100,40],[96,38],[92,36],[88,26],[96,28]]);
    terra([[100,4],[104,2],[108,-2],[110,-8],[115,-8],[120,-10],
           [130,-14],[140,-14],[145,-14],[148,-10],[148,-4],[140,-2],
           [130,-4],[120,-2],[110,2],[100,4]]);
    // JapÃ£o
    terra([[130,32],[132,34],[136,36],[140,40],[142,44],[140,44],[136,38],[132,34],[130,32]]);
    // AustrÃ¡lia
    terra([[114,-22],[116,-20],[122,-14],[130,-12],[136,-12],[140,-14],
           [145,-18],[148,-22],[150,-28],[150,-34],[148,-38],[142,-38],
           [136,-34],[130,-32],[120,-30],[115,-34],[114,-30],[114,-22]]);
    // Nova GuinÃ©
    terra([[132,-2],[136,-4],[142,-4],[148,-6],[148,-8],[140,-6],[132,-4],[132,-2]]);
    // AntÃ¡rtida
    terra([[-180,-70],[-140,-74],[-100,-74],[-60,-72],[-20,-70],
           [20,-70],[60,-70],[100,-72],[140,-74],[180,-70],
           [180,-90],[-180,-90],[-180,-70]]);

    /* ---- Amostrar pixels â†’ vÃ©rtices na esfera ---- */
    const imgData = cx.getImageData(0, 0, MW, MH);
    const verts = [];
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

    const pGeo = new window.THREE.BufferGeometry();
    pGeo.setAttribute('position', new window.THREE.Float32BufferAttribute(startPositions.slice(), 3));
    const pMat = new window.THREE.PointsMaterial({
      size: 0.036, color: accentColor, transparent: true, opacity: 0, sizeAttenuation: true,
    });
    const globePoints = new window.THREE.Points(pGeo, pMat);

    /* ---- Grupo do globo â€” facilita rotaÃ§Ã£o por drag sem afetar cÃ¢mera ---- */
    const globeGroup = new window.THREE.Group();
    scene.add(globeGroup);

    /* ---- Esfera sÃ³lida (corpo do globo) â€” frente e verso ---- */
    const themeIsLight = document.documentElement.getAttribute('data-theme') === 'light';
    const sphereColor = themeIsLight ? new window.THREE.Color('#d6c8c8') : new window.THREE.Color('#2a1a1e');

    // Verso da esfera (face interna â€” cria profundidade)
    const backGeo = new window.THREE.SphereGeometry(R * 0.995, 48, 48);
    const backMat = new window.THREE.MeshBasicMaterial({
      color: sphereColor, transparent: true, opacity: 0, side: window.THREE.BackSide,
    });
    globeGroup.add(new window.THREE.Mesh(backGeo, backMat));

    // Frente da esfera (face externa â€” vidro leve)
    const frontGeo = new window.THREE.SphereGeometry(R * 0.998, 48, 48);
    const frontMat = new window.THREE.MeshBasicMaterial({
      color: sphereColor, transparent: true, opacity: 0, side: window.THREE.FrontSide,
    });
    globeGroup.add(new window.THREE.Mesh(frontGeo, frontMat));

    globeGroup.add(globePoints);

    /* ---- Linhas de grade lat/lng ---- */
    const lMat = new window.THREE.LineBasicMaterial({ color: accentColor, transparent: true, opacity: 0 });
    const eMat = new window.THREE.LineBasicMaterial({ color: accentColor, transparent: true, opacity: 0 });

    function latLine(latDeg, mat, segs) {
      const phi = (90 - latDeg) * Math.PI / 180;
      const ry = R * Math.cos(phi), rh = R * Math.sin(phi);
      const pts = Array.from({ length: (segs || 64) + 1 }, (_, i) => {
        const a = (i / (segs || 64)) * Math.PI * 2;
        return new window.THREE.Vector3(rh * Math.sin(a), ry, rh * Math.cos(a));
      });
      return new window.THREE.Line(new window.THREE.BufferGeometry().setFromPoints(pts), mat);
    }

    function lngLine(lngDeg, mat, segs) {
      const lam = lngDeg * Math.PI / 180;
      const pts = Array.from({ length: (segs || 64) + 1 }, (_, i) => {
        const phi = (i / (segs || 64)) * Math.PI;
        return new window.THREE.Vector3(
          R * Math.sin(phi) * Math.sin(lam), R * Math.cos(phi), R * Math.sin(phi) * Math.cos(lam)
        );
      });
      return new window.THREE.Line(new window.THREE.BufferGeometry().setFromPoints(pts), mat);
    }

    // Equador em destaque, trÃ³picos e polares em sutil
    globeGroup.add(latLine(0, eMat));
    [-66, -30, 30, 66].forEach((lat) => globeGroup.add(latLine(lat, lMat)));
    [0, 45, 90, 135].forEach((lng) => globeGroup.add(lngLine(lng, lMat)));

    /* ---- Estado de interaÃ§Ã£o (drag + parallax) ---- */
    function getGlobeRestScale() {
      if (window.innerWidth <= 480) return 0.8;
      if (window.innerWidth <= 768) return 0.86;
      if (window.innerWidth <= 1024) return 0.94;
      return 1;
    }

    function getGlobeIntroScale() {
      return getGlobeRestScale() * 0.72;
    }

    globeGroup.scale.set(getGlobeIntroScale(), getGlobeIntroScale(), getGlobeIntroScale());
    globeGroup.rotation.set(0.34, -1.28, 0);

    const introState = { progress: 0 };
    function updateGlobeAssembly() {
      const positionAttr = pGeo.getAttribute('position');
      const current = positionAttr.array;
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

    if (gsapLoaded) {
      window.gsap.to(introState, {
        progress: 1,
        duration: 0.95,
        ease: 'expo.out',
        delay: 0.02,
        onUpdate: updateGlobeAssembly,
      });
      window.gsap.to(canvas, {
        opacity: 0.72,
        duration: 0.28,
        ease: 'power2.out',
      });
      window.gsap.to(pMat, {
        opacity: 0.65,
        duration: 0.24,
        ease: 'power2.out',
      });
      window.gsap.to(backMat, {
        opacity: 0.52,
        duration: 0.55,
        ease: 'power2.out',
        delay: 0.14,
      });
      window.gsap.to(frontMat, {
        opacity: 0.22,
        duration: 0.55,
        ease: 'power2.out',
        delay: 0.18,
      });
      window.gsap.to(lMat, {
        opacity: 0.09,
        duration: 0.5,
        ease: 'power2.out',
        delay: 0.2,
      });
      window.gsap.to(eMat, {
        opacity: 0.20,
        duration: 0.5,
        ease: 'power2.out',
        delay: 0.22,
      });
      window.gsap.to(globeGroup.scale, {
        x: getGlobeRestScale(),
        y: getGlobeRestScale(),
        z: getGlobeRestScale(),
        duration: 1,
        ease: 'expo.out',
      });
      window.gsap.to(globeGroup.rotation, {
        x: 0.08,
        y: -0.26,
        z: 0,
        duration: 1.1,
        ease: 'expo.out',
      });
    } else {
      introState.progress = 1;
      updateGlobeAssembly();
      canvas.style.opacity = '0.72';
      pMat.opacity = 0.65;
      backMat.opacity = 0.52;
      frontMat.opacity = 0.22;
      lMat.opacity = 0.09;
      eMat.opacity = 0.20;
      globeGroup.scale.set(getGlobeRestScale(), getGlobeRestScale(), getGlobeRestScale());
      globeGroup.rotation.set(0.08, -0.26, 0);
    }

    let isDragging = false;
    let lastDragX = 0, lastDragY = 0;
    let velX = 0, velY = 0;
    let autoRotate = true;
    let resumeGlobeTimer = 0;
    let mx = 0, my = 0;
    let activeRing = null;

    /* ---- DistorÃ§Ã£o por hover ---- */
    const DIST_RADIUS   = 1.3;   // raio de influÃªncia em unidades locais do globo
    const DIST_STRENGTH = 0.52;  // deslocamento mÃ¡ximo radial (unidades Three.js)
    const DIST_LERP_IN  = 0.16;  // velocidade de entrada da distorÃ§Ã£o
    const DIST_LERP_OUT = 0.08;  // velocidade de saÃ­da (mais suave)

    const distortOffsets = new Float32Array(targetPositions.length / 3); // escalar por ponto
    const mouseLocal = new window.THREE.Vector3();
    let isHoveringGlobe = false;

    // Esfera invisÃ­vel para raycast â€” mesmo raio do globo, no grupo
    const hitSphere = new window.THREE.Mesh(
      new window.THREE.SphereGeometry(R, 32, 32),
      new window.THREE.MeshBasicMaterial({ visible: false })
    );
    globeGroup.add(hitSphere);

    const raycaster = new window.THREE.Raycaster();
    const mouseNDC   = new window.THREE.Vector2();

    /* ---- Anel do cursor: aparece no clique, segue o cursor, dissolve ao soltar ---- */
    function createClickRing(clientX, clientY) {
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
      // Fecha o cÃ­rculo na entrada
      window.requestAnimationFrame(() => {
        circ.style.transition = 'stroke-dashoffset 0.4s cubic-bezier(0.22,1,0.36,1)';
        circ.setAttribute('stroke-dashoffset', '0');
      });
      return {
        // Segue o cursor durante o drag
        update(x, y) {
          svg.style.left = x + 'px';
          svg.style.top = y + 'px';
        },
        // Dissolve o anel ao soltar
        destroy() {
          svg.style.transition = 'opacity 0.25s ease';
          svg.style.opacity = '0';
          window.setTimeout(() => { if (svg.parentNode) svg.parentNode.removeChild(svg); }, 280);
        },
      };
    }

    /* ---- Handlers de drag ---- */
    function allowGlobeInteraction() {
      return window.innerWidth > 768 && window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    }

    function startDrag(clientX, clientY) {
      if (!allowGlobeInteraction()) return;
      isDragging = true;
      autoRotate = false;
      window.clearTimeout(resumeGlobeTimer);
      lastDragX = clientX;
      lastDragY = clientY;
      velX = 0;
      velY = 0;
      hero.style.cursor = allowGlobeInteraction() ? 'grabbing' : '';
      if (gsapLoaded) {
        window.gsap.to(globeGroup.scale, {
          x: 1.1, y: 1.1, z: 1.1, duration: 0.45, ease: 'power2.out', overwrite: true,
        });
      }
      if (activeRing) { activeRing.destroy(); activeRing = null; }
      activeRing = createClickRing(clientX, clientY);
    }

    function moveDrag(clientX, clientY) {
      if (!isDragging) return;
      const dx = clientX - lastDragX;
      const dy = clientY - lastDragY;
      lastDragX = clientX;
      lastDragY = clientY;
      velY = dx * 0.007;
      velX = dy * 0.004;
      globeGroup.rotation.y += velY;
      globeGroup.rotation.x = Math.max(-Math.PI * 0.5, Math.min(Math.PI * 0.5, globeGroup.rotation.x + velX));
      // Anel segue o cursor
      if (activeRing) activeRing.update(clientX, clientY);
    }

    function endDrag() {
      if (!isDragging) return;
      isDragging = false;
      hero.style.cursor = allowGlobeInteraction() ? 'grab' : '';
      if (activeRing) { activeRing.destroy(); activeRing = null; }
      if (gsapLoaded) {
        window.gsap.to(globeGroup.scale, {
          x: 1, y: 1, z: 1, duration: 0.9, ease: 'elastic.out(1,0.55)', overwrite: true,
        });
      }
      // Retoma auto-rotaÃ§Ã£o apÃ³s 2.5s parado
      resumeGlobeTimer = window.setTimeout(() => { autoRotate = true; }, 2500);
    }

    // cursor: grab herda para todos os filhos do hero via CSS cascade
    // botÃµes e links sobrescrevem com cursor: pointer automaticamente
    hero.style.cursor = allowGlobeInteraction() ? 'grab' : '';

    /* ---- Eventos de mouse (desktop) ----
       Ouve no #hero (nÃ£o no canvas) pois .hero-body z-index:3 fica acima
       do canvas z-index:2 e bloquearia os eventos do canvas.
       O evento borbulha de qualquer filho atÃ© o #hero. ---- */
    hero.addEventListener('mousedown', (e) => {
      if (!allowGlobeInteraction()) return;
      // NÃ£o inicia drag se o clique foi em elemento interativo
      if (e.target.closest('a, button, input, select, textarea')) return;
      e.preventDefault();
      startDrag(e.clientX, e.clientY);
    });
    window.addEventListener('mousemove', (e) => {
      moveDrag(e.clientX, e.clientY);
      // Atualiza parallax e distorÃ§Ã£o apenas quando nÃ£o estÃ¡ arrastando
      if (!isDragging) {
        const rect = hero.getBoundingClientRect();
        mx = ((e.clientX - rect.left) / rect.width  - 0.5) * 2;
        my = ((e.clientY - rect.top)  / rect.height - 0.5) * 2;

        // Raycast: converte coordenadas do hero para NDC da cÃ¢mera
        mouseNDC.set(mx, -my);
        raycaster.setFromCamera(mouseNDC, camera);
        const hits = raycaster.intersectObject(hitSphere);
        if (hits.length > 0) {
          isHoveringGlobe = true;
          // Transforma o ponto de impacto para o espaÃ§o local do globeGroup
          globeGroup.worldToLocal(mouseLocal.copy(hits[0].point));
        } else {
          isHoveringGlobe = false;
        }
      }
    });
    window.addEventListener('mouseup', () => {
      if (isDragging) endDrag();
    });

    hero.addEventListener('mouseleave', () => {
      if (!isDragging) { mx = 0; my = 0; }
      isHoveringGlobe = false;
    });

    /* ---- Resize ---- */
    function resize() {
      const w = hero.clientWidth || window.innerWidth;
      const h = hero.clientHeight || window.innerHeight;
      renderer.setSize(w, h, false);
      hero.style.cursor = allowGlobeInteraction() && !isDragging ? 'grab' : '';
      camera.aspect = w / h;
      if (window.innerWidth <= 480) {
        camera.position.set(0, 0, 13.2);
        globeGroup.scale.set(getGlobeRestScale(), getGlobeRestScale(), getGlobeRestScale());
      } else if (window.innerWidth <= 768) {
        camera.position.set(0, 0, 12.1);
        globeGroup.scale.set(getGlobeRestScale(), getGlobeRestScale(), getGlobeRestScale());
      } else if (window.innerWidth <= 1024) {
        camera.position.set(0, 0, 10.3);
        globeGroup.scale.set(getGlobeRestScale(), getGlobeRestScale(), getGlobeRestScale());
      } else {
        camera.position.set(0, 0, 7.5);
        globeGroup.scale.set(getGlobeRestScale(), getGlobeRestScale(), getGlobeRestScale());
      }
      camera.updateProjectionMatrix();
    }
    resize();
    window.addEventListener('resize', resize, { passive: true });

    /* ---- Pausa quando fora da viewport ---- */
    let active = true;
    new IntersectionObserver(
      (entries) => entries.forEach((e) => { active = e.isIntersecting; }),
      { threshold: 0.08 }
    ).observe(hero);

    /* ---- Loop de renderizaÃ§Ã£o ---- */
    (function tick() {
      window.requestAnimationFrame(tick);
      if (document.hidden || !active) return;

      if (!isDragging) {
        // Auto-rotaÃ§Ã£o suave quando nÃ£o estÃ¡ sendo arrastado
        if (autoRotate) globeGroup.rotation.y += 0.0012;
        // InÃ©rcia pÃ³s-drag â€” decaimento gradual da velocidade
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

      // DistorÃ§Ã£o por hover â€” sÃ³ depois que o intro terminou
      if (introState.progress >= 0.99 && !isDragging) {
        const posAttr = pGeo.getAttribute('position');
        const arr = posAttr.array;
        let changed = false;

        for (let i = 0; i < targetPositions.length; i += 3) {
          const j  = i / 3;
          const tx = targetPositions[i];
          const ty = targetPositions[i + 1];
          const tz = targetPositions[i + 2];

          // Deslocamento desejado com falloff gaussiano
          let desired = 0;
          if (isHoveringGlobe) {
            const dx   = tx - mouseLocal.x;
            const dy   = ty - mouseLocal.y;
            const dz   = tz - mouseLocal.z;
            const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
            if (dist < DIST_RADIUS) {
              // Gaussiana: mÃ¡ximo no centro, zero na borda
              const t = dist / DIST_RADIUS;
              desired = DIST_STRENGTH * Math.exp(-t * t * 3.5);
            }
          }

          // Lerp assimÃ©trico: entrada rÃ¡pida, saÃ­da suave
          const rate = desired > distortOffsets[j] ? DIST_LERP_IN : DIST_LERP_OUT;
          distortOffsets[j] += (desired - distortOffsets[j]) * rate;

          const offset = distortOffsets[j];
          if (Math.abs(offset) > 0.001) {
            // Deslocamento radial ao longo da normal da esfera
            arr[i]     = tx + (tx / R) * offset;
            arr[i + 1] = ty + (ty / R) * offset;
            arr[i + 2] = tz + (tz / R) * offset;
            changed = true;
          } else if (arr[i] !== tx) {
            arr[i]     = tx;
            arr[i + 1] = ty;
            arr[i + 2] = tz;
            changed = true;
          }
        }

        if (changed) posAttr.needsUpdate = true;
      }

      renderer.render(scene, camera);
    }());
  }

  function initReducedMotionWatcher() {
    bindMediaChange(reduceMotionQuery, (event) => {
      if (!event.matches) return;
      if (lenis) {
        lenis.stop();
      }
    });
  }

  function boot() {
    if (gsapLoaded && stLoaded) {
      window.gsap.registerPlugin(window.ScrollTrigger);
    }

    initLenis();
    initHeroGlobe();
    initHeroBrand3D();
    initHeroIntro();
    initHeroDepth();
    initLineReveal();
    initRevealClasses();
    initScrollAnimations();
    initManifestoTakeover();
    initParallax();
    initNavActiveLinks();
    initMagnetic();
    initProgress();
    initSmoothAnchors();
    initHeroAmbient();
    initCtaAmbient();
    initSolutionsOrbit();
    initStatsSequence();
    initTechOrbit();
    initReducedMotionWatcher();

    if (gsapLoaded && stLoaded) {
      window.ScrollTrigger.refresh();
    }
  }

  boot();

  window.addEventListener('resize', () => {
    if (!gsapLoaded || !stLoaded) return;
    window.ScrollTrigger.refresh();
  }, { passive: true });
}());
