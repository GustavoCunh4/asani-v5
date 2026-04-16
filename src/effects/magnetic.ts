import gsap from 'gsap';
import { isTouch } from '../core/media';

export function initMagnetic(): void {
  if (isTouch) return;

  document.querySelectorAll<HTMLElement>('.btn-primary, .btn-ghost, .nav-btn').forEach((element) => {
    element.addEventListener('mousemove', (event: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const x = (event.clientX - rect.left - rect.width * 0.5) * 0.18;
      const y = (event.clientY - rect.top - rect.height * 0.5) * 0.18;
      gsap.to(element, {
        x,
        y,
        duration: 0.24,
        ease: 'power2.out',
        overwrite: true,
      });
    });

    element.addEventListener('mouseleave', () => {
      gsap.to(element, {
        x: 0,
        y: 0,
        duration: 0.6,
        ease: 'elastic.out(1,0.55)',
        overwrite: true,
      });
    });
  });
}
