import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function initProgress(): void {
  const bar = document.getElementById('page-progress');
  if (!bar) return;

  gsap.set(bar, { scaleX: 0, transformOrigin: '0 0' });
  gsap.to(bar, {
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
