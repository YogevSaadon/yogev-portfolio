import { useEffect, useRef, useState } from 'react';
import { useIntersectionObserver } from './useIntersectionObserver';
import { usePrefersReducedMotion } from './useResponsive';

// Hook for scroll-triggered animations
export const useScrollAnimation = (options = {}) => {
  const {
    threshold = 0.1,
    rootMargin = '0px',
    triggerOnce = true,
    animationClass = 'animate-in'
  } = options;

  const [ref, isIntersecting, hasIntersected] = useIntersectionObserver({
    threshold,
    rootMargin,
    triggerOnce
  });

  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (ref.current) {
      if (hasIntersected && !prefersReducedMotion) {
        ref.current.classList.add(animationClass);
      } else if (prefersReducedMotion) {
        // Skip animation for users who prefer reduced motion
        ref.current.classList.add('no-animation');
      }
    }
  }, [hasIntersected, prefersReducedMotion, animationClass]);

  return [ref, isIntersecting, hasIntersected];
};

// Hook for staggered animations
export const useStaggeredAnimation = (items = [], options = {}) => {
  const { delay = 100, animationClass = 'animate-in' } = options;
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);
  const itemRefs = useRef([]);
  const prefersReducedMotion = usePrefersReducedMotion();

  const [intersectionRef, , hasIntersected] = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    if (hasIntersected && !prefersReducedMotion) {
      setIsVisible(true);
      
      itemRefs.current.forEach((ref, index) => {
        if (ref) {
          setTimeout(() => {
            ref.classList.add(animationClass);
          }, index * delay);
        }
      });
    } else if (prefersReducedMotion && hasIntersected) {
      // Show all items immediately if reduced motion is preferred
      itemRefs.current.forEach((ref) => {
        if (ref) {
          ref.classList.add('no-animation');
        }
      });
    }
  }, [hasIntersected, prefersReducedMotion, delay, animationClass]);

  const setItemRef = (index) => (element) => {
    itemRefs.current[index] = element;
    if (index === 0) {
      intersectionRef.current = element?.parentElement || element;
    }
  };

  return {
    containerRef: intersectionRef,
    setItemRef,
    isVisible
  };
};

// Hook for typing animation
export const useTypingAnimation = (text, options = {}) => {
  const { speed = 50, loop = false, cursor = true } = options;
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showCursor, setShowCursor] = useState(cursor);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      setDisplayedText(text);
      setShowCursor(false);
      return;
    }

    let currentIndex = 0;
    setIsTyping(true);

    const typeInterval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayedText(text.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        setIsTyping(false);
        clearInterval(typeInterval);

        if (loop) {
          setTimeout(() => {
            setDisplayedText('');
            currentIndex = 0;
            setIsTyping(true);
          }, 2000);
        }
      }
    }, speed);

    return () => clearInterval(typeInterval);
  }, [text, speed, loop, prefersReducedMotion]);

  // Cursor blinking effect
  useEffect(() => {
    if (!cursor || prefersReducedMotion) return;

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, [cursor, prefersReducedMotion]);

  return {
    displayedText,
    isTyping,
    showCursor: showCursor && cursor
  };
};

// Hook for parallax scrolling
export const useParallax = (speed = 0.5) => {
  const [offset, setOffset] = useState(0);
  const elementRef = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    const handleScroll = () => {
      if (elementRef.current) {
        const rect = elementRef.current.getBoundingClientRect();
        const scrolled = window.pageYOffset;
        const parallax = scrolled * speed;
        setOffset(parallax);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed, prefersReducedMotion]);

  return {
    elementRef,
    offset: prefersReducedMotion ? 0 : offset,
    transform: prefersReducedMotion ? 'none' : `translateY(${offset}px)`
  };
};

// Hook for hover animations
export const useHoverAnimation = (options = {}) => {
  const { scaleOnHover = true, liftOnHover = true } = options;
  const [isHovered, setIsHovered] = useState(false);
  const elementRef = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const element = elementRef.current;
    if (!element || prefersReducedMotion) return;

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [prefersReducedMotion]);

  const getStyles = () => {
    if (prefersReducedMotion || !isHovered) return {};

    let transform = '';
    if (scaleOnHover) transform += 'scale(1.05) ';
    if (liftOnHover) transform += 'translateY(-4px)';

    return {
      transform: transform.trim(),
      transition: 'transform 0.2s ease',
      boxShadow: liftOnHover ? '0 8px 25px rgba(0, 0, 0, 0.15)' : undefined
    };
  };

  return {
    elementRef,
    isHovered,
    styles: getStyles()
  };
};

// Hook for loading animations
export const useLoadingAnimation = (isLoading) => {
  const [shouldShowSpinner, setShouldShowSpinner] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (isLoading) {
      // Delay showing spinner to avoid flash for quick loads
      timeoutRef.current = setTimeout(() => {
        setShouldShowSpinner(true);
      }, 200);
    } else {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      setShouldShowSpinner(false);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [isLoading]);

  return shouldShowSpinner;
};