import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { isDesktop } from '../core/media';

export function initManifestoLineReveal(): void {
  const titles = Array.from(document.querySelectorAll<HTMLElement>('.manifesto-title'));
  if (!titles.length) return;

  titles.forEach((title) => {
    const raw = title.innerHTML;
    if (!/<br\s*\/?>/i.test(raw) || title.querySelector('.ln-inner')) return;

    const parts = raw.split(/<br\s*\/?>/i).map((part) => part.trim());
    title.innerHTML = parts.map((part) =>
      `<span class="ln-clip"><span class="ln-inner">${part}</span></span>`
    ).join('');

    const inners = title.querySelectorAll<HTMLElement>('.ln-inner');

    gsap.set(inners, { yPercent: 112 });
    ScrollTrigger.create({
      trigger: title,
      start: 'top 82%',
      once: true,
      onEnter: () => {
        gsap.to(inners, {
          yPercent: 0,
          stagger: 0.14,
          duration: 1.08,
          ease: 'power4.out',
        });
      },
    });
  });
}

export function initManifestoTakeover(): void {
  if (!isDesktop()) return;

  const manifesto = document.getElementById('manifesto');
  if (!manifesto) return;

  const setInitialState = () => {
    gsap.set(manifesto, {
      y: Math.round(window.innerHeight * 0.5),
      zIndex: 10,
      scale: 0.985,
      transformOrigin: '50% 0%',
      willChange: 'transform',
    });
  };

  setInitialState();
  ScrollTrigger.addEventListener('refreshInit', setInitialState);

  gsap.timeline({
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
