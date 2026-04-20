import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { isReduced, reduceMotionQuery, bindMediaChange } from './core/media';
import { initLenis, getLenis } from './core/lenis';
import { initNav, initDrawer, initHeroTypewriter } from './core/nav';
import { initSmoothAnchors } from './core/anchors';
import { initNavActiveLinks } from './core/nav-active';

import { initMagnetic } from './effects/magnetic';
import { initProgress } from './effects/progress';
import { initRevealClasses, initScrollAnimations, initParallax } from './effects/reveal';
import { initHeroDepth } from './effects/hero-depth';

import { initHeroBrand3D } from './three/hero-brand';
import { initHeroGlobe } from './three/hero-globe';
import { initHeroAmbient } from './three/hero-ambient';
import { initTechField } from './three/tech-field';
import { initTechTriangle } from './three/tech-triangle';
import { initCtaAmbient } from './three/cta-ambient';

import { initHeroIntro } from './sections/hero';
import { initManifestoLineReveal, initManifestoTakeover } from './sections/manifesto';
import { initStatsSequence } from './sections/stats';
import { initSolutionsOrbit } from './sections/solutions';

const root = document.documentElement;
root.classList.add('hero-booting');
const shouldUseMobilePerformanceMode = window.matchMedia('(max-width: 1024px), (pointer: coarse)').matches;

if ('scrollRestoration' in history) {
  (history as History).scrollRestoration = 'manual';
}

function resetScrollPosition(): void {
  window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
}

resetScrollPosition();

initNav();
initDrawer();
initHeroTypewriter();

if (isReduced) {
  root.classList.remove('hero-booting');
  root.classList.add('js-ready');
} else {
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.config({
    limitCallbacks: true,
    ignoreMobileResize: true,
  });

  if (!shouldUseMobilePerformanceMode) {
    initLenis();
  }

  const heroBrand3D = initHeroBrand3D();
  if (!shouldUseMobilePerformanceMode) {
    initHeroGlobe();
  }
  initHeroAmbient();

  initHeroIntro(heroBrand3D, getLenis);
  initHeroDepth();

  initManifestoLineReveal();
  initRevealClasses();
  initScrollAnimations();
  initManifestoTakeover();
  initParallax();
  initNavActiveLinks();
  initMagnetic();
  initProgress();
  initSmoothAnchors(getLenis);
  initCtaAmbient();
  initSolutionsOrbit();
  initStatsSequence();
  initTechField();
  initTechTriangle();

  // Interrompe o smooth scroll se o usuario ativar reducao de movimento.
  bindMediaChange(reduceMotionQuery, (e) => {
    if (!e.matches) return;
    getLenis()?.stop();
  });

  ScrollTrigger.refresh();

  root.classList.add('js-ready');
}
