import { STORAGE_KEY, DARK_CLASS, THEMES } from './constants';
import { getSystemTheme } from './system';
import type { Theme, ThemeState } from './types';

class ThemeStore {
  private state: ThemeState;

  constructor() {
    this.state = {
      current: this.getSavedTheme() || getSystemTheme(),
      system: getSystemTheme()
    };
  }

  private getSavedTheme(): Theme | null {
    if (typeof window === 'undefined') return null;
    const saved = localStorage.getItem(STORAGE_KEY) as Theme;
    return saved === THEMES.LIGHT || saved === THEMES.DARK ? saved : null;
  }

  public getCurrentTheme(): Theme {
    return this.state.current;
  }

  public setTheme(theme: Theme): void {
    if (typeof window === 'undefined') return;

    this.state.current = theme;
    localStorage.setItem(STORAGE_KEY, theme);
    
    const html = document.documentElement;
    if (theme === THEMES.DARK) {
      html.classList.add(DARK_CLASS);
    } else {
      html.classList.remove(DARK_CLASS);
    }

    window.dispatchEvent(
      new CustomEvent('theme-changed', { detail: { theme } })
    );
  }

  public toggle(): void {
    const newTheme = this.state.current === THEMES.LIGHT 
      ? THEMES.DARK 
      : THEMES.LIGHT;
    this.setTheme(newTheme);
  }

  public reset(): void {
    localStorage.removeItem(STORAGE_KEY);
    this.setTheme(this.state.system);
  }
}

export const themeStore = new ThemeStore();