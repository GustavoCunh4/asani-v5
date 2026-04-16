import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function initNavActiveLinks(): void {
  const sectionLinkMap: [string, string][] = [
    ['sobre', '#sobre'],
    ['soluções', '#soluções'],
    ['processo', '#processo'],
    ['cases', '#cases'],
    ['fundadores', '#fundadores'],
  ];

  const navLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>('.nav-links a'));
  const drawerNavLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>('.drawer-link'));

  function setActive(href: string): void {
    navLinks.forEach((link) => {
      link.classList.toggle('nav-active', link.getAttribute('href') === href);
    });
    drawerNavLinks.forEach((link) => {
      link.classList.toggle('drawer-link-active', link.getAttribute('href') === href);
    });
  }

  sectionLinkMap.forEach(([sectionId, href]) => {
    const section = document.getElementById(sectionId);
    if (!section) return;

    ScrollTrigger.create({
      trigger: section,
      start: 'top 42%',
      end: 'bottom 42%',
      onEnter: () => setActive(href),
      onEnterBack: () => setActive(href),
    });
  });
}
