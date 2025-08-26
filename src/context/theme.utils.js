// Theme constants and utilities
export const THEMES = {
  LIGHT: 'light',
  DARK: 'dark',
  SYSTEM: 'system'
};

export const STORAGE_KEY = 'portfolio-theme';

export const getSystemTheme = () => {
  if (typeof window === 'undefined') return THEMES.LIGHT;
  
  return window.matchMedia('(prefers-color-scheme: dark)').matches 
    ? THEMES.DARK 
    : THEMES.LIGHT;
};

export const getStoredTheme = () => {
  if (typeof window === 'undefined') return THEMES.SYSTEM;
  
  try {
    return localStorage.getItem(STORAGE_KEY) || THEMES.SYSTEM;
  } catch {
    return THEMES.SYSTEM;
  }
};

export const setStoredTheme = (theme) => {
  if (typeof window === 'undefined') return;
  
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    // localStorage not available
  }
};

export const applyThemeToDOM = (theme) => {
  if (typeof document === 'undefined') return;
  
  const resolvedTheme = theme === THEMES.SYSTEM ? getSystemTheme() : theme;
  
  document.documentElement.setAttribute('data-theme', resolvedTheme);
  
  // Update meta theme-color for mobile browsers
  const themeColorMeta = document.querySelector('meta[name="theme-color"]');
  if (themeColorMeta) {
    themeColorMeta.setAttribute('content', 
      resolvedTheme === THEMES.DARK ? '#1a1a1a' : '#ffffff'
    );
  }
};