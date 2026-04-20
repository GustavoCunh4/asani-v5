import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { isDesktop } from '../core/media';
import { scramble } from './scramble';

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

  const heroSpacer = document.getElementById('hero-scroll-space');
  const heroStars = document.querySelector<HTMLElement>('.hero-stars');
  const heroAmbient = document.getElementById('heroAmbient');

  if (heroSpacer && heroStars) {
    gsap.to(heroStars, {
      y: -18,
      scale: 1.015,
      ease: 'none',
      scrollTrigger: {
        trigger: heroSpacer,
        start: 'top top',
        end: 'bottom top',
        scrub: 0.6,
      },
    });
  }

  if (heroSpacer && heroAmbient) {
    gsap.to(heroAmbient, {
      y: -10,
      ease: 'none',
      scrollTrigger: {
        trigger: heroSpacer,
        start: 'top top',
        end: 'bottom top',
        scrub: 0.7,
      },
    });
  }

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

  document.querySelectorAll<HTMLElement>('.proc-body').forEach((body, index) => {
    const item = body.closest<HTMLElement>('.proc-item');
    if (!item) return;

    gsap.fromTo(
      body,
      { y: 10 + index * 2 },
      {
        y: -10 - index * 2,
        ease: 'none',
        immediateRender: false,
        scrollTrigger: {
          trigger: item,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.55,
        },
      }
    );
  });

  document.querySelectorAll<HTMLElement>('.founder-info').forEach((info, index) => {
    const founder = info.closest<HTMLElement>('.founder');
    if (!founder) return;

    gsap.fromTo(
      info,
      { y: 12 + index * 4 },
      {
        y: -12 - index * 4,
        ease: 'none',
        immediateRender: false,
        scrollTrigger: {
          trigger: founder,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.6,
        },
      }
    );
  });
}
