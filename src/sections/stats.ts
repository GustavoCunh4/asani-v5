import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function initStatsSequence(): void {
  const section = document.getElementById('sobre');
  if (!section) return;

  const items = Array.from(section.querySelectorAll<HTMLElement>('.stat-item'));
  if (!items.length) return;

  const N = items.length;
  const ENTER = 0.20;
  const EXIT  = 0.20;
  const isMobile = () => window.innerWidth <= 768;
  const scrollPerStat = () => Math.round(window.innerHeight * (isMobile() ? 0.55 : 0.75));

  const stage = section.querySelector<HTMLElement>('.stats-stage');
  const getPinnedDistance = () => Math.round(N * scrollPerStat());

  function setStageHeight(): void {
    if (stage) stage.style.height = '100svh';
    section.style.minHeight = `${Math.round(window.innerHeight + getPinnedDistance())}px`;
  }

  setStageHeight();
  window.addEventListener('resize', setStageHeight, { passive: true });

  items.forEach((item) => {
    const left = item.querySelector<HTMLElement>('.stat-left');
    const bgWord = item.querySelector<HTMLElement>('.stat-bg-word');
    gsap.set(item, { opacity: 0 });
    if (left)   gsap.set(left,   { yPercent: 6,  opacity: 0 });
    if (bgWord) gsap.set(bgWord, { xPercent: 5,  opacity: 0 });
  });

  // Mostra a primeira metrica antes do pin para evitar uma area vazia longa.
  const firstItem  = items[0];
  const firstLeft  = firstItem.querySelector<HTMLElement>('.stat-left');
  const firstBg    = firstItem.querySelector<HTMLElement>('.stat-bg-word');

  gsap.set(firstItem, { opacity: 1 });
  if (firstLeft) gsap.set(firstLeft, { yPercent: 0, opacity: 1 });
  if (firstBg) gsap.set(firstBg, { xPercent: 0, opacity: 1 });

  ScrollTrigger.create({
    trigger: section,
    start: 'top 88%',
    once: true,
    onEnter: () => {
      gsap.to(firstItem, { opacity: 1, duration: 0.15, ease: 'none' });
      if (firstLeft) gsap.to(firstLeft, { yPercent: 0, opacity: 1, duration: 0.35, ease: 'power2.out' });
      if (firstBg) gsap.to(firstBg, { xPercent: 0, opacity: 1, duration: 0.4, ease: 'power2.out' });
    },
  });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: stage,
      pin: true,
      pinSpacing: false,
      start: 'top top',
      end: () => `+=${getPinnedDistance()}`,
      scrub: 0.8,
      invalidateOnRefresh: true,
      anticipatePin: 1,
      onToggle: (self) => section.classList.toggle('is-stats-active', self.isActive),
      onRefreshInit: setStageHeight,
    },
  });

  items.forEach((item, i) => {
    const base   = i;
    const left   = item.querySelector<HTMLElement>('.stat-left');
    const bgWord = item.querySelector<HTMLElement>('.stat-bg-word');

    // A primeira metrica ja entrou; as demais animam conforme o scroll.
    if (i > 0) {
      tl.to(item, { opacity: 1, duration: 0.01 }, base);

      if (left) {
        tl.fromTo(
          left,
          { yPercent: 6, opacity: 0 },
          { yPercent: 0, opacity: 1, ease: 'power3.out', duration: ENTER },
          base
        );
      }

      if (bgWord) {
        tl.fromTo(
          bgWord,
          { xPercent: 5, opacity: 0 },
          { xPercent: 0, opacity: 1, ease: 'power2.out', duration: ENTER * 1.2 },
          base + 0.04
        );
      }
    }

    if (i < N - 1) {
      if (left) {
        tl.to(left, { yPercent: -6, opacity: 0, ease: 'power2.in', duration: EXIT }, base + 1 - EXIT);
      }
      if (bgWord) {
        tl.to(bgWord, { xPercent: -4, opacity: 0, ease: 'power2.in', duration: EXIT }, base + 1 - EXIT);
      }
      tl.to(item, { opacity: 0, duration: 0.01 }, base + 1);
    }
  });
}
