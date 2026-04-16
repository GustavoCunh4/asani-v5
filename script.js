'use strict';

(function asaniSite() {
  const body = document.body;
  const root = document.documentElement;

  root.classList.add('hero-booting');

  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual';
  }

  function resetScrollPosition() {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }

  resetScrollPosition();
  window.addEventListener('beforeunload', resetScrollPosition);
  window.addEventListener('load', resetScrollPosition);

  const nav = document.getElementById('nav');
  const navToggle = document.getElementById('navToggle');
  const drawer = document.getElementById('drawer');
  const drawerBackdrop = document.getElementById('drawerBackdrop');
  const drawerClose = document.getElementById('drawerClose');
  const drawerLinks = Array.from(document.querySelectorAll('.drawer-link'));
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  const NAV_SOLID_OFFSET = 24;
  const NAV_HIDE_OFFSET = 140;
  const NAV_DELTA = 8;
  const FOCUSABLE_SELECTOR = [
    'a[href]',
    'button:not([disabled])',
    'input:not([disabled])',
    'select:not([disabled])',
    'textarea:not([disabled])',
    '[tabindex]:not([tabindex="-1"])',
  ].join(',');

  let lastScrollY = window.scrollY;
  let lastFocusedElement = null;
  let backdropHideTimer = 0;

  function bindMediaChange(query, listener) {
    if (typeof query.addEventListener === 'function') {
      query.addEventListener('change', listener);
      return;
    }
    if (typeof query.addListener === 'function') {
      query.addListener(listener);
    }
  }

  function getDrawerFocusables() {
    if (!drawer) return [];
    return Array.from(drawer.querySelectorAll(FOCUSABLE_SELECTOR))
      .filter((element) => !element.hasAttribute('hidden') && element.getAttribute('aria-hidden') !== 'true');
  }

  function trapDrawerFocus(event) {
    if (!drawer || !drawer.classList.contains('open') || event.key !== 'Tab') return;

    const focusables = getDrawerFocusables();
    if (!focusables.length) {
      event.preventDefault();
      drawer.focus();
      return;
    }

    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    const active = document.activeElement;

    if (event.shiftKey && active === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && active === last) {
      event.preventDefault();
      first.focus();
    }
  }

  function setDrawerOpenState(isOpen) {
    if (!drawer || !navToggle || !drawerBackdrop) return;

    drawer.classList.toggle('open', isOpen);
    drawer.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
    navToggle.classList.toggle('open', isOpen);
    navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    body.classList.toggle('drawer-open', isOpen);

    window.clearTimeout(backdropHideTimer);

    if (isOpen) {
      drawerBackdrop.hidden = false;
      window.requestAnimationFrame(() => {
        drawerBackdrop.classList.add('is-visible');
      });
    } else {
      drawerBackdrop.classList.remove('is-visible');
      backdropHideTimer = window.setTimeout(() => {
        drawerBackdrop.hidden = true;
      }, 320);
    }

    if (isOpen) {
      lastFocusedElement = document.activeElement instanceof HTMLElement ? document.activeElement : navToggle;
      const focusables = getDrawerFocusables();
      window.setTimeout(() => {
        (focusables[0] || drawerClose || drawer).focus();
      }, 40);
      return;
    }

    if (lastFocusedElement instanceof HTMLElement) {
      lastFocusedElement.focus();
    } else {
      navToggle.focus();
    }
  }

  function initDrawer() {
    if (!drawer || !navToggle || !drawerClose || !drawerBackdrop) return;

    navToggle.addEventListener('click', () => {
      const isOpen = !drawer.classList.contains('open');
      setDrawerOpenState(isOpen);
    });

    drawerClose.addEventListener('click', () => {
      setDrawerOpenState(false);
    });

    drawerBackdrop.addEventListener('click', () => {
      setDrawerOpenState(false);
    });

    drawerLinks.forEach((link) => {
      link.addEventListener('click', () => {
        setDrawerOpenState(false);
      });
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && drawer.classList.contains('open')) {
        setDrawerOpenState(false);
      }
      trapDrawerFocus(event);
    });
  }

  function updateNavState() {
    if (!nav) return;
    // Nav aparece quando a primeira seção .chapter entra na viewport (segunda seção do site)
    const firstChapter = document.querySelector('.chapter');
    const threshold = firstChapter
      ? firstChapter.offsetTop - Math.round(window.innerHeight * 0.15)
      : window.innerHeight;
    nav.classList.toggle('nav-solid', window.scrollY >= threshold);
    nav.classList.remove('nav-hidden');
    lastScrollY = window.scrollY;
  }

  function initNav() {
    updateNavState();
    window.addEventListener('scroll', updateNavState, { passive: true });
    window.addEventListener('resize', updateNavState, { passive: true });
  }

  function initHeroTypewriter() {
    const h1 = document.querySelector('.hero-h1');
    if (!h1 || prefersReducedMotion.matches) return;

    const blocks = Array.from(h1.querySelectorAll('.h1-block'));
    const CHAR_MS = 26;
    const LINE_MS = 90;
    const START_MS = 160;
    let timeline = START_MS;

    function wrapBlock(block) {
      const chars = [];

      (function walk(node) {
        if (node.nodeType === Node.TEXT_NODE) {
          const fragment = document.createDocumentFragment();

          for (const char of node.textContent) {
            const span = document.createElement('span');
            span.className = 'hero-char';
            span.textContent = char;
            fragment.appendChild(span);
            chars.push(span);
          }

          node.parentNode.replaceChild(fragment, node);
          return;
        }

        if (node.nodeType === Node.ELEMENT_NODE) {
          Array.from(node.childNodes).forEach(walk);
        }
      }(block));

      return chars;
    }

    const cursor = document.createElement('span');
    cursor.className = 'hero-cursor';
    cursor.setAttribute('aria-hidden', 'true');
    blocks[0].prepend(cursor);

    blocks.forEach((block, index) => {
      const chars = wrapBlock(block);

      chars.forEach((char) => {
        const delay = timeline;
        window.setTimeout(() => {
          char.style.opacity = '1';
          char.after(cursor);
        }, delay);
        timeline += CHAR_MS;
      });

      if (index < blocks.length - 1) {
        timeline += LINE_MS;
      }
    });

    window.setTimeout(() => {
      cursor.classList.add('hero-cursor--done');
    }, timeline + 320);
  }

  function initReducedMotionWatcher() {
    bindMediaChange(prefersReducedMotion, (event) => {
      if (!event.matches) return;
      if (drawer && drawer.classList.contains('open')) {
        setDrawerOpenState(false);
      }
    });
  }

  initDrawer();
  initNav();
  initHeroTypewriter();
  initReducedMotionWatcher();
  window.requestAnimationFrame(resetScrollPosition);
  window.setTimeout(resetScrollPosition, 0);
  window.setTimeout(resetScrollPosition, 120);

  root.classList.add('js-ready');
}());
