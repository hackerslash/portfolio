import { THEME_STORAGE_KEY, THEME_LIGHT, THEME_DARK } from './constants';

/**
 * Flip the theme, revealing the new one from (x, y) via the View Transition
 * API where it exists. The reveal itself is styled in Layout.astro.
 */
export function toggleTheme(x?: number, y?: number): void {
  const root = document.documentElement;

  const hasCoords = x !== undefined && y !== undefined;
  let revealRadius: number | undefined;
  if (hasCoords) {
    root.style.setProperty('--reveal-x', `${x}px`);
    root.style.setProperty('--reveal-y', `${y}px`);
    revealRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );
    root.style.setProperty('--reveal-r', `${revealRadius}px`);
  }

  const next = root.classList.contains(THEME_LIGHT) ? THEME_DARK : THEME_LIGHT;

  const apply = () => {
    root.classList.toggle(THEME_LIGHT);
    localStorage.setItem(THEME_STORAGE_KEY, next);
  };

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if ('startViewTransition' in document && !reduceMotion) {
    const transition = (document as any).startViewTransition(apply);
    // Progressive enhancement: drive the reveal with WAAPI for pixel-perfect
    // origin at the toggle button and exact end-radius. Falls back to the
    // CSS keyframe in Layout.astro if WAAPI pseudoElement is unsupported.
    if (hasCoords && transition?.ready) {
      transition.ready
        .then(() => {
          const endR = revealRadius!;
          try {
            document.documentElement.animate(
              {
                clipPath: [
                  `circle(0px at ${x}px ${y}px)`,
                  `circle(${endR}px at ${x}px ${y}px)`,
                ],
              },
              {
                duration: 650,
                easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
                pseudoElement: '::view-transition-new(root)',
              }
            );
          } catch {
            // WAAPI pseudoElement not supported — CSS keyframe covers it
          }
        })
        .catch(() => {});
    }
  } else {
    apply();
  }
}
