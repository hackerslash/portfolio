/**
 * Application-wide constants
 */

// Reading time calculation
export const WORDS_PER_MINUTE = 200;

// Responsive design breakpoints
export const MOBILE_BREAKPOINT = '700px';
export const MOBILE_BREAKPOINT_PX = 700;

// Pagination
export const BLOG_POSTS_PER_PAGE_HOME = 2;
export const BLOG_POSTS_PER_PAGE_TAG = 3;

// Theme
export const THEME_STORAGE_KEY = 'theme';
export const THEME_LIGHT = 'light';
export const THEME_DARK = 'dark';

// Timeouts and delays
export const COPY_BUTTON_FEEDBACK_DURATION = 2000; // ms
export const VISITOR_COUNT_RETRY_DELAY = 3000; // ms
export const VISITOR_COUNT_MAX_RETRIES = 2;

// Touch device detection
export const IS_TOUCH_DEVICE = typeof window !== 'undefined' &&
  ('ontouchstart' in window || navigator.maxTouchPoints > 0);
