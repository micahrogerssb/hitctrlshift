// Theme types and constants
export type Theme = 'light' | 'dark';

const THEME_KEY = 'theme';
const HTML_DARK_CLASS = 'dark';

// Get system preference
export function getSystemTheme(): Theme {
  if (typeof window === 'undefined') return 'dark';
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

// Get current theme
export function getCurrentTheme(): Theme {
  if (typeof window === 'undefined') return 'dark';
  return localStorage.getItem(THEME_KEY) as Theme || getSystemTheme();
}

// Set theme
export function setTheme(theme: Theme): void {
  if (typeof window === 'undefined') return;
  
  const html = document.documentElement;
  localStorage.setItem(THEME_KEY, theme);
  
  if (theme === 'dark') {
    html.classList.add(HTML_DARK_CLASS);
  } else {
    html.classList.remove(HTML_DARK_CLASS);
  }
}

// Toggle theme
export function toggleTheme(): void {
  const currentTheme = getCurrentTheme();
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  setTheme(newTheme);
}

// Initialize theme
export function initTheme(): void {
  if (typeof window === 'undefined') return;
  setTheme(getCurrentTheme());
}