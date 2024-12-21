import type { Theme } from './types';
import { THEMES } from './constants';

export function getSystemTheme(): Theme {
  if (typeof window === 'undefined') return THEMES.DARK;
  return window.matchMedia('(prefers-color-scheme: dark)').matches 
    ? THEMES.DARK 
    : THEMES.LIGHT;
}

export function watchSystemTheme(callback: (theme: Theme) => void): () => void {
  const query = window.matchMedia('(prefers-color-scheme: dark)');
  
  const handler = (e: MediaQueryListEvent) => {
    callback(e.matches ? THEMES.DARK : THEMES.LIGHT);
  };
  
  query.addEventListener('change', handler);
  return () => query.removeEventListener('change', handler);
}