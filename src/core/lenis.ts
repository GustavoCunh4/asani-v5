import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// ─── Module state ──────────────────────────────────────────────────────────────

let lenis: Lenis | null = null;
let scrollVelocity = 0;
let resizeTimer = 0;

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
