import gsap from 'gsap';
import { isTouch } from '../core/media';

export function initHeroDepth(): void {
  if (isTouch) return;

  const hero = document.getElementById('hero');
  const blocks = Array.from(document.querySelectorAll<HTMLElement>('.h1-block'));
  const ambient = document.getElementById('heroAmbient') as HTMLCanvasElement | null;
  if (!hero || !blocks.length) return;

  let mx = 0;
  let my = 0;
  let hovering = false;

  hero.addEventListener('mousemove', (event: MouseEvent) => {
    const rect = hero.getBoundingClientRect();
    mx = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
    my = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
    hovering = true;
  });

  hero.addEventListener('mouseleave', () => {
    hovering = false;
    blocks.forEach((block) => {
      gsap.to(block, {
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
      gsap.to(ambient, {
        x: 0,
        y: 0,
        duration: 1.1,
        ease: 'power3.out',
        overwrite: true,
      });
    }
  });

  gsap.ticker.add(() => {
    if (!hovering) return;

    blocks.forEach((block) => {
      const depth = parseFloat(block.dataset.depth ?? '0');
      const factor = 6 + depth * 4;
      gsap.to(block, {
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
      gsap.to(ambient, {
        x: mx * -18,
        y: my * -12,
        duration: 1,
        ease: 'power2.out',
        overwrite: true,
      });
    }
  });
}
