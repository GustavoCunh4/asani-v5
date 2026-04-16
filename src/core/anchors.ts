import type Lenis from 'lenis';

export function initSmoothAnchors(getLenis: () => Lenis | null): void {
  document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((anchor) => {
    const href = anchor.getAttribute('href');
    if (!href || href === '#') return;

    const target = document.querySelector<HTMLElement>(href);
    if (!target) return;

    anchor.addEventListener('click', (event: MouseEvent) => {
      event.preventDefault();

      const lenis = getLenis();
      if (lenis) {
        lenis.scrollTo(target, { offset: -80, duration: 1.35 });
      } else {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}
