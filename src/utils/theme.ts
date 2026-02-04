import { THEME_STORAGE_KEY, THEME_LIGHT, THEME_DARK } from './constants';

export type Theme = typeof THEME_LIGHT | typeof THEME_DARK;

/**
 * Initialize theme from localStorage
 * Call this once during page load
 */
export function initializeTheme(): void {
  if (typeof window === 'undefined') return;

  const root = document.documentElement;
  const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);

  if (savedTheme === THEME_LIGHT) {
    root.classList.add(THEME_LIGHT);
  }
}

/**
 * Get current theme
 */
export function getCurrentTheme(): Theme {
  if (typeof window === 'undefined') return THEME_DARK;

  const root = document.documentElement;
  return root.classList.contains(THEME_LIGHT) ? THEME_LIGHT : THEME_DARK;
}

/**
 * Toggle theme with optional View Transition API animation
 */
export function toggleTheme(x?: number, y?: number): void {
  if (typeof window === 'undefined') return;

  const root = document.documentElement;

  // Set reveal position if coordinates provided
  if (x !== undefined && y !== undefined) {
    root.style.setProperty('--reveal-x', `${x}px`);
    root.style.setProperty('--reveal-y', `${y}px`);
  }

  const isLight = root.classList.contains(THEME_LIGHT);
  const newTheme = isLight ? THEME_DARK : THEME_LIGHT;

  // Check if View Transition API is supported
  const supportsViewTransition = 'startViewTransition' in document;

  if (!supportsViewTransition) {
    root.classList.toggle(THEME_LIGHT);
    localStorage.setItem(THEME_STORAGE_KEY, newTheme);
    return;
  }

  // Use View Transition API
  (document as any).startViewTransition(() => {
    root.classList.toggle(THEME_LIGHT);
    localStorage.setItem(THEME_STORAGE_KEY, newTheme);
  });
}

/**
 * Set specific theme
 */
export function setTheme(theme: Theme): void {
  if (typeof window === 'undefined') return;

  const root = document.documentElement;

  if (theme === THEME_LIGHT) {
    root.classList.add(THEME_LIGHT);
  } else {
    root.classList.remove(THEME_LIGHT);
  }

  localStorage.setItem(THEME_STORAGE_KEY, theme);
}
