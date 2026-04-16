const SCRAMBLE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

export function scramble(element: HTMLElement, durationMs: number): void {
  if (!element) return;

  const original = element.textContent ?? '';
  const totalFrames = Math.round((durationMs / 1000) * 40);
  let frame = 0;

  const timer = window.setInterval(() => {
    element.textContent = original.split('').map((char, index) => {
      if (char === ' ' || char === '/') return char;
      const progress = frame / totalFrames;
      const charProgress = progress - (index / original.length) * 0.28;
      if (charProgress >= 0.72) return char;
      return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
    }).join('');

    frame += 1;
    if (frame > totalFrames) {
      element.textContent = original;
      window.clearInterval(timer);
    }
  }, 1000 / 40);
}
