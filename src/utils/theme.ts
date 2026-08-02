import { THEME_STORAGE_KEY, THEME_LIGHT, THEME_DARK } from './constants';

/**
 * Flip the theme, revealing the new one from (x, y) via the View Transition
 * API where it exists. The reveal itself is styled in Layout.astro.
 */
export function toggleTheme(x?: number, y?: number): void {
  const root = document.documentElement;

  if (x !== undefined && y !== undefined) {
    root.style.setProperty('--reveal-x', `${x}px`);
    root.style.setProperty('--reveal-y', `${y}px`);
  }

  const next = root.classList.contains(THEME_LIGHT) ? THEME_DARK : THEME_LIGHT;

  const apply = () => {
    root.classList.toggle(THEME_LIGHT);
    localStorage.setItem(THEME_STORAGE_KEY, next);
  };

  if ('startViewTransition' in document) {
    (document as any).startViewTransition(apply);
  } else {
    apply();
  }
}
