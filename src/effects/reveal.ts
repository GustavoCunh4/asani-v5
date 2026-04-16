import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { isDesktop } from '../core/media';
import { scramble } from './scramble';

// Fallback observer for data-reveal elements when GSAP is not the driver
const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('is-visible');
    observer.unobserve(entry.target);
  });
}, { threshold: 0.12, rootMargin: '0px 0px -10% 0px' });

export function initRevealClasses(): void {
  const nodes = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
  if (!nodes.length) return;

  nodes.forEach((node) => {
    ScrollTrigger.create({
      trigger: node,
      start: 'top 88%',
      once: true,
      onEnter: () => node.classList.add('is-visible'),
    });
  });
}

export function initScrollAnimations(): void {
  document.querySelectorAll<HTMLElement>('.sec-kicker').forEach((kicker) => {
    ScrollTrigger.create({
      trigger: kicker,
      start: 'top 90%',
      once: true,
      onEnter: () => scramble(kicker, 700),
    });

    gsap.from(kicker, {
      x: -18,
      opacity: 0,
      duration: 0.62,
      ease: 'power3.out',
      immediateRender: false,
      scrollTrigger: {
        trigger: kicker,
        start: 'top 90%',
        toggleActions: 'play none none none',
      },
    });
  });

  document.querySelectorAll<HTMLElement>('.sec-title').forEach((title) => {
    gsap.from(title, {
      y: 44,
      opacity: 0,
      duration: 1,
      ease: 'power4.out',
      immediateRender: false,
      scrollTrigger: {
        trigger: title,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    });
  });

  const groupedAnimations: Array<{
    selector: string;
    trigger: string;
    y?: number;
    x?: number;
    stagger: number;
  }> = [
    { selector: '.mstep', y: 26, stagger: 0.08, trigger: '.manifesto-steps' },
    { selector: '.proc-item', y: 36, stagger: 0.11, trigger: '.process-track' },
    { selector: '.case-card', y: 48, stagger: 0.1, trigger: '.cases-grid' },
    { selector: '.tech-pillar', x: -26, stagger: 0.1, trigger: '.tech-pillars' },
    { selector: '.cm-item', y: 18, stagger: 0.03, trigger: '.clients-marquee' },
  ];

  groupedAnimations.forEach(({ selector, trigger, y = 0, x = 0, stagger }) => {
    const elements = document.querySelectorAll(selector);
    const triggerNode = document.querySelector(trigger);
    if (!elements.length || !triggerNode) return;

    gsap.from(elements, {
      x,
      y,
      opacity: 0,
      stagger,
      duration: 0.85,
      ease: 'power3.out',
      immediateRender: false,
      scrollTrigger: {
        trigger: triggerNode,
        start: 'top 84%',
        toggleActions: 'play none none none',
      },
    });
  });

  const processLine = document.querySelector<SVGElement>('.process-line');
  if (processLine) {
    const svgLine = processLine.querySelector('line');
    if (svgLine) {
      gsap.to(svgLine, {
        strokeDashoffset: 0,
        ease: 'none',
        immediateRender: false,
        scrollTrigger: {
          trigger: '.process-track',
          start: 'top 80%',
          end: 'bottom 55%',
          scrub: 0.5,
        },
      });
    } else {
      gsap.from(processLine, {
        scaleX: 0,
        transformOrigin: 'left center',
        duration: 1,
        ease: 'power2.inOut',
        immediateRender: false,
        scrollTrigger: {
          trigger: '.process-track',
          start: 'top 82%',
          toggleActions: 'play none none none',
        },
      });
    }
  }

  document.querySelectorAll<HTMLElement>('.founder').forEach((founder) => {
    ScrollTrigger.create({
      trigger: founder,
      start: 'top 86%',
      once: true,
      onEnter: () => founder.classList.add('is-visible'),
    });
  });
}

export function initParallax(): void {
  if (!isDesktop()) return;

  document.querySelectorAll<HTMLElement>('.sec-head').forEach((head) => {
    const section = head.closest('section');
    if (!section) return;

    gsap.to(head, {
      y: -24,
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 0.4,
      },
    });
  });
}
