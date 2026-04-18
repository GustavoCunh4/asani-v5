/**
 * Asani v5 — main entry point
 * Orchestrates all init modules in the correct dependency order.
 */
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

// ─── Immediate setup (synchronous, before any DOMContentLoaded) ───────────────

const root = document.documentElement;
root.classList.add('hero-booting');

if ('scrollRestoration' in history) {
  (history as History).scrollRestoration = 'manual';
}

function resetScrollPosition(): void {
  window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
}

resetScrollPosition();

// ─── Nav + drawer run regardless of motion preference ─────────────────────────
initNav();
initDrawer();
initHeroTypewriter(); // internally guards against prefers-reduced-motion

// ─── Reduced motion: just remove booting state and exit ───────────────────────
if (isReduced) {
  root.classList.remove('hero-booting');
  root.classList.add('js-ready');
} else {
  // ─── Full animation boot ─────────────────────────────────────────────────────
  gsap.registerPlugin(ScrollTrigger);

  initLenis();

  // Hero — Three.js scenes must initialize before intro timeline reads their state
  const heroBrand3D = initHeroBrand3D();
  initHeroGlobe();
  initHeroAmbient();

  // Hero intro uses heroBrand3D handle and lenis for anchor scrolling
  initHeroIntro(heroBrand3D, getLenis);
  initHeroDepth();

  // Section animations
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

  // Stop smooth scroll if user enables reduced motion mid-session
  bindMediaChange(reduceMotionQuery, (e) => {
    if (!e.matches) return;
    getLenis()?.stop();
  });

  ScrollTrigger.refresh();

  root.classList.add('js-ready');
}
