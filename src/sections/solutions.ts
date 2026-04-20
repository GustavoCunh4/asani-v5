import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { reduceMotionQuery } from '../core/media';

export function initSolutionsOrbit(): void {
  const carousel = document.getElementById('solutionsCarousel');
  const track = document.getElementById('solutionsTrack');
  const stage = carousel ? carousel.querySelector<HTMLElement>('.solutions-stack-stage') : null;
  const section = carousel ? carousel.closest<HTMLElement>('.section-solutions') : null;
  if (!carousel || !track || !stage || !section) return;

  const cards = Array.from(track.querySelectorAll<HTMLElement>('.sol-card'));
  if (!cards.length) return;

  const mobileMotionQuery = window.matchMedia('(max-width: 767px), (pointer: coarse)');

  let activeIndex = 0;
  let activeProgress = 0;

  const nameBackdrop = section.querySelector<HTMLElement>('.solutions-name-bg');
  let currentBackdropName = '';

  function clamp(value: number, min: number, max: number): number {
    return Math.min(max, Math.max(min, value));
  }

  function mix(start: number, end: number, t: number): number {
    return start + (end - start) * t;
  }

  // Saida rapida e desacelerada para a fase em que o card sobe.
  function easeLift(t: number): number {
    const c = clamp(t, 0, 1);
    return 1 - Math.pow(1 - c, 4);
  }

  // Entrada acelerada para a fase em que o card volta para a pilha.
  function easeLand(t: number): number {
    const c = clamp(t, 0, 1);
    return c * c;
  }

  // Deslocamento suave dos cards que acompanham a transicao.
  function easeSlide(t: number): number {
    const c = clamp(t, 0, 1);
    return 1 - Math.pow(1 - c, 3);
  }

  function updateNameBackdrop(name: string): void {
    if (mobileMotionQuery.matches) return;
    if (!nameBackdrop || name === currentBackdropName) return;
    currentBackdropName = name;
    gsap.to(nameBackdrop, {
      opacity: 0,
      duration: 0.14,
      ease: 'power2.in',
      overwrite: true,
      onComplete: () => {
        nameBackdrop!.textContent = name;
        gsap.to(nameBackdrop, { opacity: 1, duration: 0.36, ease: 'power2.out' });
      },
    });
  }

  interface Pose {
    x: number; y: number; z: number;
    rx: number; ry: number; rz: number;
    scale: number; opacity: number;
    blur: number; saturate: number; brighten: number;
  }

  interface LiftConfig {
    liftY: number; liftZ: number;
    liftRz: number; liftRy: number;
  }

  // Slots de repouso dos cards em cada profundidade da pilha.

  function getStackSlots(): Pose[] {
    const w = window.innerWidth;
    if (w <= 480) {
      return [
        { x: 0,   y: 0,  z: 0,   rx: 0,   ry: -0.4, rz: -0.3, scale: 1,     opacity: 1,    blur: 0,    saturate: 1.04, brighten: 1.02 },
        { x: 8,   y: 8,  z: -16, rx: 0.5, ry: -1.2, rz: -1.1, scale: 0.972, opacity: 0.82, blur: 0.28, saturate: 0.90, brighten: 0.94 },
        { x: -10, y: 15, z: -32, rx: 1.0, ry:  1.0, rz:  0.9, scale: 0.946, opacity: 0.66, blur: 0.60, saturate: 0.78, brighten: 0.86 },
        { x: 14,  y: 22, z: -48, rx: 1.4, ry: -1.5, rz: -1.5, scale: 0.918, opacity: 0.48, blur: 0.96, saturate: 0.66, brighten: 0.78 },
      ];
    }
    if (w <= 900) {
      return [
        { x: 0,   y: 0,  z: 0,   rx: 0,   ry: -0.5, rz: -0.4, scale: 1,     opacity: 1,    blur: 0,    saturate: 1.05, brighten: 1.03 },
        { x: 10,  y: 9,  z: -22, rx: 0.6, ry: -1.6, rz: -1.3, scale: 0.970, opacity: 0.84, blur: 0.32, saturate: 0.90, brighten: 0.94 },
        { x: -13, y: 18, z: -44, rx: 1.2, ry:  1.3, rz:  1.1, scale: 0.942, opacity: 0.68, blur: 0.70, saturate: 0.78, brighten: 0.86 },
        { x: 18,  y: 27, z: -66, rx: 1.8, ry: -2.0, rz: -1.8, scale: 0.912, opacity: 0.52, blur: 1.08, saturate: 0.66, brighten: 0.78 },
      ];
    }
    return [
      { x: 0,   y: 0,  z: 0,   rx: 0,   ry: -0.7, rz: -0.5, scale: 1,     opacity: 1,    blur: 0,    saturate: 1.06, brighten: 1.04 },
      { x: 12,  y: 10, z: -28, rx: 0.7, ry: -1.9, rz: -1.5, scale: 0.968, opacity: 0.85, blur: 0.36, saturate: 0.92, brighten: 0.95 },
      { x: -16, y: 20, z: -56, rx: 1.3, ry:  1.5, rz:  1.2, scale: 0.938, opacity: 0.70, blur: 0.76, saturate: 0.80, brighten: 0.87 },
      { x: 22,  y: 30, z: -84, rx: 2.0, ry: -2.3, rz: -2.0, scale: 0.906, opacity: 0.54, blur: 1.16, saturate: 0.68, brighten: 0.79 },
    ];
  }

  // Pose do card ativo quando ele sobe acima da pilha.
  function getLiftConfig(): LiftConfig {
    const w = window.innerWidth;
    if (w <= 480) return { liftY: -148, liftZ:  94, liftRz:  8.0, liftRy: -10 };
    if (w <= 900) return { liftY: -180, liftZ: 110, liftRz:  8.8, liftRy: -12 };
    return              { liftY: -224, liftZ: 144, liftRz:  9.6, liftRy: -13 };
  }

  function getLiftedPose(cfg: LiftConfig): Pose {
    return {
      x: 0,
      y: cfg.liftY,
      z: cfg.liftZ,
      rx: -8,
      ry: cfg.liftRy,
      rz: cfg.liftRz,
      scale: 1.04,
      opacity: 0.97,
      blur: 0,
      saturate: 1.12,
      brighten: 1.08,
    };
  }

  function mixPose(a: Pose, b: Pose, t: number): Pose {
    return {
      x: mix(a.x, b.x, t), y: mix(a.y, b.y, t), z: mix(a.z, b.z, t),
      rx: mix(a.rx, b.rx, t), ry: mix(a.ry, b.ry, t), rz: mix(a.rz, b.rz, t),
      scale: mix(a.scale, b.scale, t), opacity: mix(a.opacity, b.opacity, t),
      blur: mix(a.blur, b.blur, t), saturate: mix(a.saturate, b.saturate, t),
      brighten: mix(a.brighten, b.brighten, t),
    };
  }

  // Arco em duas fases: subida rapida e retorno controlado para tras da pilha.
  const LIFT_END = 0.35;

  function arcPose(fromPose: Pose, liftPose: Pose, toPose: Pose, amount: number): Pose {
    if (amount <= LIFT_END) {
      return mixPose(fromPose, liftPose, easeLift(amount / LIFT_END));
    }
    return mixPose(liftPose, toPose, easeLand((amount - LIFT_END) / (1 - LIFT_END)));
  }

  function getOrderForIndex(index: number): HTMLElement[] {
    return cards.slice(index).concat(cards.slice(0, index));
  }

  function render(index: number, progress: number): void {
    const slots = getStackSlots();
    const cfg = getLiftConfig();
    const baseIndex = clamp(index, 0, cards.length - 1);
    const order = getOrderForIndex(baseIndex);

    // Em movimento reduzido, troca de estado sem interpolacao.
    const snapProgress = progress >= 0.5 ? 1 : 0;
    const effectiveProgress = reduceMotionQuery.matches ? snapProgress : progress;
    const slidedProgress = reduceMotionQuery.matches ? snapProgress : easeSlide(progress);

    const visibleIndex = effectiveProgress < 0.5
      ? baseIndex
      : clamp(baseIndex + 1, 0, cards.length - 1);

    const liftPose = getLiftedPose(cfg);
    const backSlot = slots[slots.length - 1];

    cards.forEach((card) => {
      const slotIndex = order.indexOf(card);
      const restPose = slots[Math.min(slotIndex, slots.length - 1)];
      let pose: Pose = restPose;

      if (baseIndex < cards.length - 1 && progress > 0) {
        if (card === cards[baseIndex]) {
          // Card da frente sobe e volta para tras da pilha.
          pose = arcPose(restPose, liftPose, backSlot, effectiveProgress);
        } else if (slotIndex > 0) {
          // Os cards de tras avancam um slot.
          const nextSlot = slots[Math.min(slotIndex - 1, slots.length - 1)];
          pose = mixPose(restPose, nextSlot, slidedProgress);
        }
      }

      const zIndex = card === cards[baseIndex]
        ? (effectiveProgress < 0.56 ? 18 : 4)
        : Math.max(3, 16 - slotIndex);

      card.style.transform = `translate3d(calc(-50% + ${pose.x}px), calc(-50% + ${pose.y}px), ${pose.z}px) rotateX(${pose.rx}deg) rotateY(${pose.ry}deg) rotateZ(${pose.rz}deg) scale(${pose.scale})`;
      card.style.opacity = String(pose.opacity);
      card.style.filter = `blur(${pose.blur}px) saturate(${pose.saturate}) brightness(${pose.brighten})`;
      card.style.zIndex = String(zIndex);
      card.classList.toggle('is-stack-active', card === cards[visibleIndex]);
      card.classList.toggle('is-stack-next', baseIndex < cards.length - 1 && card === cards[baseIndex + 1]);
      card.setAttribute('aria-hidden', card === cards[visibleIndex] ? 'false' : 'true');
    });

    updateNameBackdrop(cards[visibleIndex]?.querySelector('h3')?.textContent || '');
  }

  function setState(index: number, progress: number): void {
    activeIndex = clamp(index, 0, cards.length - 1);
    activeProgress = clamp(progress, 0, 1);
    render(activeIndex, activeProgress);
  }

  function renderFromScrollProgress(progress: number): void {
    const transitionCount = Math.max(1, cards.length - 1);
    const scaled = clamp(progress, 0, 1) * transitionCount;
    const isLast = scaled >= transitionCount;
    const base = isLast ? cards.length - 1 : Math.floor(scaled);
    const local = isLast ? 0 : scaled - base;
    setState(base, local);
  }

  setState(0, 0);

  // A secao fica presa enquanto os cards fazem as transicoes principais.

  const scrollDistance = (): number => {
    const w = window.innerWidth;
    const factor = w <= 480 ? 0.60 : w <= 900 ? 0.70 : 0.90;
    return Math.round(Math.max(1, cards.length - 1) * window.innerHeight * factor);
  };

  const usePinnedStack = !mobileMotionQuery.matches;
  const scrub = mobileMotionQuery.matches ? 0.35 : window.innerWidth <= 900 ? 0.6 : 0.9;

  ScrollTrigger.create({
    trigger: section,
    start: 'top top',
    end: () => (usePinnedStack ? `+=${scrollDistance()}` : 'bottom bottom'),
    pin: usePinnedStack,
    pinSpacing: usePinnedStack,
    scrub,
    anticipatePin: usePinnedStack ? 1 : 0,
    invalidateOnRefresh: true,
    onRefresh: (self) => { renderFromScrollProgress(self.progress); },
    onUpdate:  (self) => { renderFromScrollProgress(self.progress); },
  });
}
