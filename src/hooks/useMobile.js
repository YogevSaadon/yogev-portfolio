import { useState, useEffect } from 'react';

/**
 * Custom hook for mobile detection and responsive utilities
 * Centralizes all mobile-related logic in one place
 */
export const useMobile = () => {
  const [screenSize, setScreenSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  const [deviceInfo, setDeviceInfo] = useState({
    isMobile: false,
    isTablet: false,
    isDesktop: true,
    isTouchDevice: false,
    orientation: 'landscape'
  });

  // Breakpoints - matches mobile.css
  const breakpoints = {
    mobile: 480,
    tablet: 768,
    laptop: 1024,
    desktop: 1200
  };

  useEffect(() => {
    const updateScreenSize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      setScreenSize({ width, height });
      
      // Detect device type based on screen width
      const isMobile = width <= breakpoints.mobile;
      const isTablet = width > breakpoints.mobile && width <= breakpoints.tablet;
      const isDesktop = width > breakpoints.tablet;
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      const orientation = width > height ? 'landscape' : 'portrait';
      
      setDeviceInfo({
        isMobile,
        isTablet,
        isDesktop,
        isTouchDevice,
        orientation
      });
    };

    // Initial check
    updateScreenSize();

    // Listen for resize events
    window.addEventListener('resize', updateScreenSize);
    window.addEventListener('orientationchange', updateScreenSize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', updateScreenSize);
      window.removeEventListener('orientationchange', updateScreenSize);
    };
  }, []);

  // Utility functions
  const isMobileSize = (customBreakpoint = breakpoints.mobile) => {
    return screenSize.width <= customBreakpoint;
  };

  const isTabletSize = (minWidth = breakpoints.mobile, maxWidth = breakpoints.tablet) => {
    return screenSize.width > minWidth && screenSize.width <= maxWidth;
  };

  const isDesktopSize = (customBreakpoint = breakpoints.tablet) => {
    return screenSize.width > customBreakpoint;
  };

  // Get current breakpoint name
  const getCurrentBreakpoint = () => {
    const { width } = screenSize;
    if (width <= breakpoints.mobile) return 'mobile';
    if (width <= breakpoints.tablet) return 'tablet';
    if (width <= breakpoints.laptop) return 'laptop';
    return 'desktop';
  };

  // Mobile-specific styling helpers
  const getMobileStyles = () => ({
    padding: deviceInfo.isMobile ? 'var(--mobile-spacing-md)' : 'var(--spacing-lg)',
    fontSize: deviceInfo.isMobile ? 'var(--mobile-text-md)' : 'var(--text-lg)',
    touchTarget: deviceInfo.isTouchDevice ? 'var(--mobile-touch-target)' : 'auto'
  });

  // Navigation helpers
  const shouldShowMobileNav = () => deviceInfo.isMobile;
  const shouldHideDesktopNav = () => deviceInfo.isMobile;

  return {
    // Screen info
    screenSize,
    deviceInfo,
    breakpoints,
    
    // Utility functions
    isMobileSize,
    isTabletSize,
    isDesktopSize,
    getCurrentBreakpoint,
    
    // Convenience booleans
    isMobile: deviceInfo.isMobile,
    isTablet: deviceInfo.isTablet,
    isDesktop: deviceInfo.isDesktop,
    isTouchDevice: deviceInfo.isTouchDevice,
    isLandscape: deviceInfo.orientation === 'landscape',
    isPortrait: deviceInfo.orientation === 'portrait',
    
    // Component helpers
    getMobileStyles,
    shouldShowMobileNav,
    shouldHideDesktopNav,
  };
};