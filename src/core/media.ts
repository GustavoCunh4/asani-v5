export const isTouch = window.matchMedia('(pointer: coarse)').matches;
export const isDesktop = (): boolean => window.innerWidth >= 1025;
export const reduceMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
export const isReduced = reduceMotionQuery.matches;

export function bindMediaChange(
  query: MediaQueryList,
  listener: (e: MediaQueryListEvent) => void
): void {
  if (typeof query.addEventListener === 'function') {
    query.addEventListener('change', listener);
  } else if (typeof (query as any).addListener === 'function') {
    (query as any).addListener(listener);
  }
}
