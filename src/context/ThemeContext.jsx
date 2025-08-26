import { createContext, useContext, useState, useEffect } from 'react';
import { THEMES } from './theme.utils.js';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('system');
  const [actualTheme, setActualTheme] = useState('light');
  const [isInitialized, setIsInitialized] = useState(false);

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme && ['light', 'dark', 'system'].includes(savedTheme)) {
      setTheme(savedTheme);
      if (savedTheme === 'system') {
        setActualTheme(systemPrefersDark ? 'dark' : 'light');
      } else {
        setActualTheme(savedTheme);
      }
    } else {
      setTheme('system');
      setActualTheme(systemPrefersDark ? 'dark' : 'light');
    }
    
    setIsInitialized(true);
  }, []);

  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = (e) => {
      if (theme === 'system') {
        setActualTheme(e.matches ? 'dark' : 'light');
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme]);

  // Apply theme to document
  useEffect(() => {
    if (!isInitialized) return;

    const root = document.documentElement;
    
    // Add a transition class to prevent flashing
    root.classList.add('theme-changing');
    
    // Remove existing theme classes
    root.classList.remove('light', 'dark');
    
    // Add current theme class
    root.classList.add(actualTheme);
    
    // Update data attribute for CSS
    root.setAttribute('data-theme', actualTheme);
    
    // Remove transition class after a brief delay
    setTimeout(() => {
      root.classList.remove('theme-changing');
    }, 300);
    
    // Update meta theme-color for mobile browsers
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', actualTheme === 'dark' ? '#1a202c' : '#4A90E2');
    }

    // Save to localStorage
    localStorage.setItem('theme', theme);
  }, [theme, actualTheme, isInitialized]);

  const setThemeMode = (newTheme) => {
    if (!['light', 'dark', 'system'].includes(newTheme)) return;
    
    setTheme(newTheme);
    
    if (newTheme === 'system') {
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setActualTheme(systemPrefersDark ? 'dark' : 'light');
    } else {
      setActualTheme(newTheme);
    }
  };

  const toggleTheme = () => {
    if (theme === 'light' || theme === 'system') {
      setThemeMode('dark');
    } else {
      setThemeMode('light');
    }
  };

  const value = {
    theme, // Current setting: 'light', 'dark', or 'system'
    actualTheme, // Actual theme being used: 'light' or 'dark'
    setTheme: setThemeMode,
    toggleTheme,
    isInitialized,
    isDarkMode: actualTheme === 'dark',
    isLightMode: actualTheme === 'light',
    isSystemMode: theme === 'system'
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};