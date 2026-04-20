import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

let lenis: Lenis | null = null;
let scrollVelocity = 0;
let resizeTimer = 0;
let nativeScrollPatched = false;
const coarsePointerQuery = window.matchMedia('(pointer: coarse)');

export function getScrollVelocity(): number {
  return scrollVelocity;
}

export function getLenis(): Lenis | null {
  return lenis;
}

export function initLenis(): void {
  // Evita refreshes caros do ScrollTrigger em scrubs rapidos e no resize do iOS.
  ScrollTrigger.config({
    limitCallbacks: true,
    ignoreMobileResize: true,
  });

  lenis = new Lenis({
    duration: 1.15,
    easing: (t: number) => 1 - Math.pow(1 - t, 4),
    wheelMultiplier: 0.92,
    touchMultiplier: 1.45,
    smoothTouch: false,
  } as any);

  // Mantem o ScrollTrigger sincronizado com a posicao real do Lenis.
  lenis.on('scroll', ScrollTrigger.update);

  // Velocidade usada pelos efeitos WebGL ambientes.
  lenis.on('scroll', (e: any) => {
    scrollVelocity = e.velocity ?? 0;
  });

  patchNativeScroll();

  // Lenis e GSAP compartilham o mesmo ticker para evitar dessincronia visual.
  gsap.ticker.lagSmoothing(0);
  gsap.ticker.add((time: number) => {
    lenis!.raf(time * 1000);
  });

  // Debounce evita recalculos em cascata durante resize/orientacao.
  window.addEventListener('resize', handleResize, { passive: true });

  // No iOS, a orientacao dispara antes das dimensoes finais do viewport.
  window.addEventListener('orientationchange', () => {
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(forceRefresh);
    });
  }, { passive: true });
}

function handleResize(): void {
  if (coarsePointerQuery.matches) return;
  window.clearTimeout(resizeTimer);
  resizeTimer = window.setTimeout(forceRefresh, 180);
}

function forceRefresh(): void {
  // Atualiza limites e pins depois que o layout estabiliza.
  ScrollTrigger.refresh(true);
}

function patchNativeScroll(): void {
  if (nativeScrollPatched) return;
  nativeScrollPatched = true;

  const nativeScrollTo = window.scrollTo.bind(window);
  const nativeScrollBy = window.scrollBy.bind(window);

  function readTarget(args: IArguments, relative: boolean): { top?: number; left?: number; behavior?: ScrollBehavior } {
    const first = args[0] as ScrollToOptions | number | undefined;
    if (typeof first === 'object' && first !== null) {
      return {
        top: typeof first.top === 'number' ? first.top : undefined,
        left: typeof first.left === 'number' ? first.left : undefined,
        behavior: first.behavior,
      };
    }

    return {
      left: typeof args[0] === 'number' ? Number(args[0]) : undefined,
      top: typeof args[1] === 'number' ? Number(args[1]) : undefined,
      behavior: undefined,
    };
  }

  window.scrollTo = function patchedScrollTo(...args: Parameters<typeof window.scrollTo>): void {
    const target = readTarget(arguments, false);
    if (target.behavior === 'instant' || !lenis || typeof target.top !== 'number') {
      nativeScrollTo(...args);
      ScrollTrigger.update();
      return;
    }

    lenis.scrollTo(target.top, {
      immediate: target.behavior === 'auto',
      duration: target.behavior === 'smooth' ? 1 : undefined,
      force: true,
    });
  } as typeof window.scrollTo;

  window.scrollBy = function patchedScrollBy(...args: Parameters<typeof window.scrollBy>): void {
    const delta = readTarget(arguments, true);
    if (delta.behavior === 'instant' || !lenis || typeof delta.top !== 'number') {
      nativeScrollBy(...args);
      ScrollTrigger.update();
      return;
    }

    lenis.scrollTo(lenis.scroll + delta.top, {
      immediate: delta.behavior === 'auto',
      duration: delta.behavior === 'smooth' ? 1 : undefined,
      force: true,
    });
  } as typeof window.scrollBy;
}
