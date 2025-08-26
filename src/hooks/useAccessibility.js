import { useEffect, useRef, useState } from 'react';

// Hook for managing focus
export const useFocusManagement = () => {
  const focusRef = useRef(null);

  const focusElement = (element) => {
    if (element && typeof element.focus === 'function') {
      element.focus();
    }
  };

  const trapFocus = (containerElement) => {
    if (!containerElement) return;

    const focusableElements = containerElement.querySelectorAll(
      'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])'
    );

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    const handleTabKey = (e) => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement.focus();
          e.preventDefault();
        }
      }
    };

    containerElement.addEventListener('keydown', handleTabKey);
    
    // Focus first element
    firstElement?.focus();

    return () => {
      containerElement.removeEventListener('keydown', handleTabKey);
    };
  };

  return {
    focusRef,
    focusElement,
    trapFocus
  };
};

// Hook for keyboard navigation
export const useKeyboardNavigation = (options = {}) => {
  const {
    onArrowUp,
    onArrowDown,
    onArrowLeft,
    onArrowRight,
    onEnter,
    onEscape,
    onSpace,
    enabled = true
  } = options;

  useEffect(() => {
    if (!enabled) return;

    const handleKeyDown = (e) => {
      switch (e.key) {
        case 'ArrowUp':
          e.preventDefault();
          onArrowUp?.(e);
          break;
        case 'ArrowDown':
          e.preventDefault();
          onArrowDown?.(e);
          break;
        case 'ArrowLeft':
          onArrowLeft?.(e);
          break;
        case 'ArrowRight':
          onArrowRight?.(e);
          break;
        case 'Enter':
          onEnter?.(e);
          break;
        case 'Escape':
          onEscape?.(e);
          break;
        case ' ':
          if (onSpace) {
            e.preventDefault();
            onSpace(e);
          }
          break;
        default:
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [enabled, onArrowUp, onArrowDown, onArrowLeft, onArrowRight, onEnter, onEscape, onSpace]);
};

// Hook for announcing content to screen readers
export const useScreenReader = () => {
  const announce = (message, priority = 'polite') => {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', priority);
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  };

  return { announce };
};

// Hook for skip navigation
export const useSkipNavigation = () => {
  useEffect(() => {
    const skipLink = document.querySelector('.skip-link');
    
    if (!skipLink) {
      const link = document.createElement('a');
      link.href = '#main-content';
      link.textContent = 'Skip to main content';
      link.className = 'skip-link';
      link.setAttribute('aria-label', 'Skip navigation and go to main content');
      
      document.body.insertBefore(link, document.body.firstChild);
    }

    return () => {
      const existingSkipLink = document.querySelector('.skip-link');
      if (existingSkipLink) {
        existingSkipLink.remove();
      }
    };
  }, []);
};

// Hook for managing ARIA attributes
export const useARIA = (initialAttributes = {}) => {
  const elementRef = useRef(null);

  const setARIA = (attributes) => {
    if (!elementRef.current) return;

    Object.entries(attributes).forEach(([key, value]) => {
      const ariaKey = key.startsWith('aria-') ? key : `aria-${key}`;
      
      if (value === null || value === undefined) {
        elementRef.current.removeAttribute(ariaKey);
      } else {
        elementRef.current.setAttribute(ariaKey, value);
      }
    });
  };

  const getARIA = (attribute) => {
    if (!elementRef.current) return null;
    const ariaKey = attribute.startsWith('aria-') ? attribute : `aria-${attribute}`;
    return elementRef.current.getAttribute(ariaKey);
  };

  useEffect(() => {
    if (Object.keys(initialAttributes).length > 0) {
      setARIA(initialAttributes);
    }
  }, [initialAttributes]);

  return {
    elementRef,
    setARIA,
    getARIA
  };
};

// Hook for detecting high contrast mode
export const useHighContrast = () => {
  const [isHighContrast, setIsHighContrast] = useState(false);

  useEffect(() => {
    const checkHighContrast = () => {
      // Check for Windows High Contrast Mode
      const supportsHighContrast = window.matchMedia('(prefers-contrast: high)').matches;
      
      // Alternative check for older browsers
      const testElement = document.createElement('div');
      testElement.style.borderWidth = '1px';
      testElement.style.borderStyle = 'solid';
      testElement.style.borderColor = 'rgb(31, 255, 0)';
      testElement.style.position = 'absolute';
      testElement.style.height = '5px';
      testElement.style.top = '-999px';
      testElement.style.backgroundColor = 'rgb(255, 255, 255)';
      
      document.body.appendChild(testElement);
      
      const computedStyle = window.getComputedStyle(testElement);
      const isHighContrastFallback = computedStyle.borderTopColor === computedStyle.backgroundColor;
      
      document.body.removeChild(testElement);
      
      setIsHighContrast(supportsHighContrast || isHighContrastFallback);
    };

    checkHighContrast();

    const mediaQuery = window.matchMedia('(prefers-contrast: high)');
    mediaQuery.addEventListener('change', checkHighContrast);

    return () => mediaQuery.removeEventListener('change', checkHighContrast);
  }, []);

  return isHighContrast;
};