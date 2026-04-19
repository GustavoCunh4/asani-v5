const SCRAMBLE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

export function scramble(element: HTMLElement, durationMs: number): void {
  if (!element) return;

  const original = element.textContent ?? '';
  const totalFrames = Math.round((durationMs / 1000) * 40);
  const frameInterval = 1000 / 40;
  let frame = 0;
  let lastTime = 0;

  function update(now: number): void {
    if (now - lastTime < frameInterval) {
      window.requestAnimationFrame(update);
      return;
    }
    lastTime = now;

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
      return;
    }
    window.requestAnimationFrame(update);
  }

  window.requestAnimationFrame(update);
}
