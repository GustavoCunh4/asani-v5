import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type Lenis from 'lenis';
import type { HeroBrand3D } from '../three/hero-brand';

export function initHeroReveal(): void {
  const blocks = Array.from(document.querySelectorAll<HTMLElement>('.h1-block'));
  const subWrap = document.querySelector<HTMLElement>('.hero-sub-wrap');
  const brandId = document.querySelector<HTMLElement>('.hero-brand-id');
  if (!blocks.length) return;

  blocks.forEach((block) => {
    if (block.parentElement?.classList.contains('h1-clip')) return;
    const clip = document.createElement('div');
    clip.className = 'h1-clip';
    block.parentNode!.insertBefore(clip, block);
    clip.appendChild(block);
    gsap.set(block, { y: '110%' });
  });

  if (subWrap) gsap.set(subWrap, { opacity: 0, y: 26 });
  if (brandId) gsap.set(brandId, { opacity: 0, y: -10 });

  window.setTimeout(() => {
    if (brandId) {
      gsap.to(brandId, { opacity: 1, y: 0, duration: 0.44, ease: 'power2.out' });
    }
    gsap.to(blocks, {
      y: '0%',
      stagger: 0.11,
      duration: 1.02,
      ease: 'power4.out',
    });
    if (subWrap) {
      gsap.to(subWrap, {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: 'power3.out',
        delay: blocks.length * 0.11 + 0.12,
        clearProps: 'opacity,transform',
      });
    }
  }, 80);
}

export function initHeroIntro(
  heroBrand3D: HeroBrand3D | null,
  getLenis: () => Lenis | null
): void {
  const hero = document.getElementById('hero');
  const brandCanvas = document.getElementById('heroBrand3D') as HTMLCanvasElement | null;
  const heroBody = document.querySelector<HTMLElement>('.hero-body');
  const blocks = Array.from(document.querySelectorAll<HTMLElement>('.h1-block'));
  const subWrap = document.querySelector<HTMLElement>('.hero-sub-wrap');
  const brandId = document.querySelector<HTMLElement>('.hero-brand-id');

  if (!hero || !brandCanvas || !heroBody || !blocks.length) {
    document.documentElement.classList.remove('hero-booting');
    if (heroBrand3D) heroBrand3D.setAssembly(1);
    initHeroReveal();
    return;
  }

  // Wrap each line in clip container for yPercent reveal
  blocks.forEach((block) => {
    if (block.parentElement?.classList.contains('h1-clip')) return;
    const clip = document.createElement('div');
    clip.className = 'h1-clip';
    block.parentNode!.insertBefore(clip, block);
    clip.appendChild(block);
  });

  const isMobileBoot = window.innerWidth <= 1024;
  const brandInDuration = isMobileBoot ? 0.52 : 1.02;
  const brandInitScale  = isMobileBoot ? 0.88 : 0.62;
  const brandInitBlur   = isMobileBoot ? '4px' : '10px';
  const brandTargetOpacity = window.innerWidth <= 768 ? 0.22 : (isMobileBoot ? 0.18 : 1);

  gsap.set(hero, { opacity: 1, visibility: 'visible', clearProps: 'pointerEvents' });
  gsap.set(brandCanvas, { opacity: 0, scale: brandInitScale, filter: `blur(${brandInitBlur})`, transformOrigin: 'center center', clearProps: 'y,yPercent' });
  gsap.set(heroBody, { opacity: 0 });
  gsap.set(blocks, { y: '110%' });
  if (subWrap) gsap.set(subWrap, { opacity: 0, y: 22 });
  if (brandId) gsap.set(brandId, { opacity: 0, y: -10 });

  if (heroBrand3D) {
    heroBrand3D.setAssembly(0);
    heroBrand3D.setWordmarkOpacity(isMobileBoot ? 0 : 1);
    heroBrand3D.setTriangleOpacity(1);
    heroBrand3D.setBrandScale(1);
  }

  const introTl = gsap.timeline({
    defaults: { overwrite: true },
    onStart: () => {
      document.documentElement.classList.remove('hero-booting');
    },
  });

  introTl.to(brandCanvas, {
    opacity: brandTargetOpacity,
    scale: 1,
    filter: 'blur(0px)',
    duration: brandInDuration,
    ease: 'expo.out',
  }, 0.02);

  if (heroBrand3D) {
    introTl.to(heroBrand3D, {
      dummy: 1,
      duration: brandInDuration + 0.06,
      ease: 'expo.out',
      onUpdate() {
        const progress = (this as gsap.core.Tween).progress();
        heroBrand3D!.setAssembly(progress);
        heroBrand3D!.setBrandScale(0.9 + progress * 0.1);
      },
    } as any, 0.02);
  }

  const spacer = document.getElementById('hero-scroll-space');
  if (!spacer) { initHeroReveal(); return; }

  // Mobile / Tablet (≤1024px)
  if (window.innerWidth <= 1024) {
    spacer.style.height = '120vh';

    if (brandId) {
      introTl.to(brandId, { opacity: 1, y: 0, duration: 0.36, ease: 'power2.out' }, 0.06);
    }
    introTl.to(heroBody, { opacity: 1, duration: 0.26, ease: 'none' }, 0.08);
    introTl.to(blocks, { y: '0%', stagger: 0.06, duration: 0.46, ease: 'power3.out' }, 0.10);
    if (subWrap) {
      introTl.to(subWrap, { opacity: 1, y: 0, duration: 0.38, ease: 'power2.out' }, 0.46);
    }

    gsap.timeline({
      scrollTrigger: {
        trigger: spacer,
        start: 'top top',
        end: 'bottom top',
        scrub: 0.8,
        invalidateOnRefresh: true,
        onLeave: () => {
          hero.style.visibility = 'hidden';
          hero.style.pointerEvents = 'none';
        },
        onEnterBack: () => {
          hero.style.visibility = '';
          hero.style.pointerEvents = '';
        },
      },
    }).to(hero, { opacity: 0, ease: 'power1.in', duration: 1 }, 0);

    return;
  }

  // Desktop (>1024px)
  spacer.style.height = '200vh';

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: spacer,
      start: 'top top',
      end: 'bottom top',
      scrub: 1.2,
      invalidateOnRefresh: true,
      onLeave: () => {
        hero.style.visibility = 'hidden';
        hero.style.pointerEvents = 'none';
      },
      onEnterBack: () => {
        hero.style.visibility = '';
        hero.style.pointerEvents = '';
      },
    },
  });

  tl.to({}, { duration: 0.6 }, 0);

  tl.to(brandCanvas, {
    opacity: 0.12,
    scale: 1,
    ease: 'power2.inOut',
    duration: 0.9,
  }, 0.6);

  if (heroBrand3D) {
    tl.to(heroBrand3D, {
      dummy: 1,
      duration: 0.9,
      ease: 'power2.inOut',
      onUpdate() {
        const progress = (this as gsap.core.Tween).progress();
        heroBrand3D!.setWordmarkOpacity(1 - progress * 0.78);
        heroBrand3D!.setTriangleOpacity(1 - progress * 0.32);
        heroBrand3D!.setBrandScale(1 - progress * 0.08);
      },
    } as any, 0.6);
  }

  tl.to(heroBody, { opacity: 1, duration: 0.22, ease: 'none' }, 1.48);
  tl.to(blocks, { y: '0%', stagger: 0.06, duration: 0.62, ease: 'power3.out' }, 1.48);
  if (subWrap) {
    tl.to(subWrap, { opacity: 1, y: 0, duration: 0.42, ease: 'power2.out' }, 1.62);
  }

  tl.to({}, { duration: 0.5 }, 2.15);
  tl.to(hero, { opacity: 0, ease: 'power2.in', duration: 0.5 }, 2.65);
}
