import { bindMediaChange } from './media';

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

export function initNav(): void {
  const nav = document.getElementById('nav');
  if (!nav) return;

  function updateNavState(): void {
    const firstChapter = document.querySelector('.chapter');
    const threshold = firstChapter
      ? firstChapter.getBoundingClientRect().top + window.scrollY - Math.round(window.innerHeight * 0.15)
      : window.innerHeight;
    nav!.classList.toggle('nav-solid', window.scrollY >= threshold);
    nav!.classList.remove('nav-hidden');
  }

  updateNavState();
  window.addEventListener('scroll', updateNavState, { passive: true });
  window.addEventListener('resize', updateNavState, { passive: true });
}

export function initDrawer(): void {
  const body = document.body;
  const nav = document.getElementById('nav');
  const navToggle = document.getElementById('navToggle');
  const drawer = document.getElementById('drawer');
  const drawerBackdrop = document.getElementById('drawerBackdrop');
  const drawerClose = document.getElementById('drawerClose');
  const drawerLinks = Array.from(document.querySelectorAll<HTMLElement>('.drawer-link'));

  if (!drawer || !navToggle || !drawerClose || !drawerBackdrop) return;

  const FOCUSABLE_SELECTOR = [
    'a[href]',
    'button:not([disabled])',
    'input:not([disabled])',
    'select:not([disabled])',
    'textarea:not([disabled])',
    '[tabindex]:not([tabindex="-1"])',
  ].join(',');

  let lastFocusedElement: HTMLElement | null = null;
  let backdropHideTimer = 0;

  function getDrawerFocusables(): HTMLElement[] {
    return Array.from(drawer!.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR))
      .filter((el) => !el.hasAttribute('hidden') && el.getAttribute('aria-hidden') !== 'true');
  }

  function trapDrawerFocus(event: KeyboardEvent): void {
    if (!drawer!.classList.contains('open') || event.key !== 'Tab') return;

    const focusables = getDrawerFocusables();
    if (!focusables.length) {
      event.preventDefault();
      drawer!.focus();
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

  function setDrawerOpenState(isOpen: boolean): void {
    drawer!.classList.toggle('open', isOpen);
    drawer!.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
    navToggle!.classList.toggle('open', isOpen);
    navToggle!.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    body.classList.toggle('drawer-open', isOpen);

    window.clearTimeout(backdropHideTimer);

    if (isOpen) {
      drawerBackdrop!.hidden = false;
      window.requestAnimationFrame(() => {
        drawerBackdrop!.classList.add('is-visible');
      });
    } else {
      drawerBackdrop!.classList.remove('is-visible');
      backdropHideTimer = window.setTimeout(() => {
        drawerBackdrop!.hidden = true;
      }, 320);
    }

    if (isOpen) {
      lastFocusedElement = document.activeElement instanceof HTMLElement ? document.activeElement : navToggle;
      const focusables = getDrawerFocusables();
      window.setTimeout(() => {
        (focusables[0] || drawerClose || drawer!).focus();
      }, 40);
      return;
    }

    if (lastFocusedElement instanceof HTMLElement) {
      lastFocusedElement.focus();
    } else {
      navToggle!.focus();
    }
  }

  navToggle.addEventListener('click', () => {
    setDrawerOpenState(!drawer!.classList.contains('open'));
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

  document.addEventListener('keydown', (event: KeyboardEvent) => {
    if (event.key === 'Escape' && drawer!.classList.contains('open')) {
      setDrawerOpenState(false);
    }
    trapDrawerFocus(event);
  });

  bindMediaChange(prefersReducedMotion, (e) => {
    if (!e.matches) return;
    if (drawer!.classList.contains('open')) setDrawerOpenState(false);
  });
}

export function initHeroTypewriter(): void {
  const h1 = document.querySelector<HTMLElement>('.hero-h1');
  if (!h1 || prefersReducedMotion.matches) return;

  const blocks = Array.from(h1.querySelectorAll<HTMLElement>('.h1-block'));
  const accentGroups = Array.from(h1.querySelectorAll<HTMLElement>('.hero-accent'));
  const CHAR_MS = 26;
  const LINE_MS = 90;
  const START_MS = 160;
  let timeline = START_MS;

  h1.classList.add('is-typewriting');
  accentGroups.forEach((accent) => {
    accent.style.opacity = '0';
  });

  function wrapBlock(block: HTMLElement): HTMLElement[] {
    const chars: HTMLElement[] = [];

    (function walk(node: Node) {
      if (node.nodeType === Node.TEXT_NODE) {
        const fragment = document.createDocumentFragment();
        const text = node.textContent ?? '';

        for (const char of text) {
          const span = document.createElement('span');
          span.className = 'hero-char';
          span.textContent = char;
          fragment.appendChild(span);
          chars.push(span);
        }

        node.parentNode!.replaceChild(fragment, node);
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
        const accent = char.closest<HTMLElement>('.hero-accent');
        if (accent) accent.style.opacity = '1';
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
    accentGroups.forEach((accent) => {
      accent.style.opacity = '';
    });
    h1.classList.remove('is-typewriting');
    cursor.classList.add('hero-cursor--done');
  }, timeline + 320);
}
