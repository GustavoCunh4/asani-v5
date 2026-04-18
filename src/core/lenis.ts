import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// ─── Module state ──────────────────────────────────────────────────────────────

let lenis: Lenis | null = null;
let scrollVelocity = 0;
let resizeTimer = 0;
let nativeScrollPatched = false;

// ─── Public getters ────────────────────────────────────────────────────────────

export function getScrollVelocity(): number {
  return scrollVelocity;
}

export function getLenis(): Lenis | null {
  return lenis;
}

// ─── Init ──────────────────────────────────────────────────────────────────────

export function initLenis(): void {
  // Prevent ScrollTrigger from consuming excessive callbacks on fast scrub/pin.
  // ignoreMobileResize stops unnecessary full refreshes on iOS toolbar hide/show.
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

  // Keep ScrollTrigger in sync with Lenis scroll position.
  // Using the scroll event (not the RAF) avoids a one-frame lag on scrubbed pins.
  lenis.on('scroll', ScrollTrigger.update);

  // Track velocity for ambient / cta-ambient WebGL effects.
  lenis.on('scroll', (e: any) => {
    scrollVelocity = e.velocity ?? 0;
  });

  patchNativeScroll();

  // Drive Lenis from GSAP's ticker so both share a single rAF loop.
  // lagSmoothing(0) prevents GSAP from skipping frames during tab blur/focus,
  // which would cause pinned sections to jump.
  gsap.ticker.lagSmoothing(0);
  gsap.ticker.add((time: number) => {
    lenis!.raf(time * 1000);
  });

  // ─── Resize handling ──────────────────────────────────────────────────────
  // Debounce to avoid cascading recalculations during window drag / orientation
  // change. 180 ms feels instant to users but batches most browser resize events.
  window.addEventListener('resize', handleResize, { passive: true });

  // Orientation change fires a resize but the viewport dimensions are not yet
  // updated at that moment on iOS — wait one frame before refreshing.
  window.addEventListener('orientationchange', () => {
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(forceRefresh);
    });
  }, { passive: true });
}

// ─── Resize helpers ────────────────────────────────────────────────────────────

function handleResize(): void {
  window.clearTimeout(resizeTimer);
  resizeTimer = window.setTimeout(forceRefresh, 180);
}

function forceRefresh(): void {
  // ScrollTrigger.refresh() recalculates all trigger bounds and re-pins.
  // Must be called after the layout has settled (hence the debounce).
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
