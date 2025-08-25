import { useState, useEffect } from 'react';

const breakpoints = {
  xs: 480,
  sm: 768,
  md: 1024,
  lg: 1280,
  xl: 1536
};

export const useResponsive = () => {
  const [screenSize, setScreenSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1024,
    height: typeof window !== 'undefined' ? window.innerHeight : 768
  });

  const [device, setDevice] = useState('desktop');

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      setScreenSize({ width, height });
      
      // Determine device type
      if (width < breakpoints.sm) {
        setDevice('mobile');
      } else if (width < breakpoints.lg) {
        setDevice('tablet');
      } else {
        setDevice('desktop');
      }
    };

    // Set initial values
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = screenSize.width < breakpoints.sm;
  const isTablet = screenSize.width >= breakpoints.sm && screenSize.width < breakpoints.lg;
  const isDesktop = screenSize.width >= breakpoints.lg;
  
  const isXs = screenSize.width < breakpoints.xs;
  const isSm = screenSize.width >= breakpoints.xs && screenSize.width < breakpoints.sm;
  const isMd = screenSize.width >= breakpoints.sm && screenSize.width < breakpoints.md;
  const isLg = screenSize.width >= breakpoints.md && screenSize.width < breakpoints.lg;
  const isXl = screenSize.width >= breakpoints.lg && screenSize.width < breakpoints.xl;
  const is2Xl = screenSize.width >= breakpoints.xl;

  return {
    screenSize,
    device,
    isMobile,
    isTablet,
    isDesktop,
    isXs,
    isSm,
    isMd,
    isLg,
    isXl,
    is2Xl,
    breakpoints
  };
};

// Hook for detecting touch devices
export const useTouchDevice = () => {
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const checkTouch = () => {
      setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };

    checkTouch();
    
    // Re-check on device orientation change
    window.addEventListener('orientationchange', checkTouch);
    return () => window.removeEventListener('orientationchange', checkTouch);
  }, []);

  return isTouchDevice;
};

// Hook for detecting dark mode preference
export const usePrefersDarkMode = () => {
  const [prefersDark, setPrefersDark] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setPrefersDark(mediaQuery.matches);

    const handleChange = (e) => setPrefersDark(e.matches);
    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return prefersDark;
};

// Hook for detecting reduced motion preference
export const usePrefersReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return prefersReducedMotion;
};