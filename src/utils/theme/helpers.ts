import { THEMES, type Theme } from './constants';

export function getSystemTheme(): Theme {
  if (typeof window === 'undefined') return THEMES.DARK;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? THEMES.DARK : THEMES.LIGHT;
}

export function isValidTheme(theme: unknown): theme is Theme {
  return typeof theme === 'string' && Object.values(THEMES).includes(theme as Theme);
}