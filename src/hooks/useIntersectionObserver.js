import { useState, useEffect, useRef, useMemo } from 'react';

export const useIntersectionObserver = (options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);
  const elementRef = useRef(null);

  const defaultOptions = useMemo(() => ({
    threshold: 0.1,
    rootMargin: '0px',
    triggerOnce: true,
    ...options
  }), [options]);

  useEffect(() => {
    const element = elementRef.current;
    
    if (!element || !window.IntersectionObserver) {
      setIsIntersecting(true);
      setHasIntersected(true);
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      const isElementIntersecting = entry.isIntersecting;
      
      setIsIntersecting(isElementIntersecting);
      
      if (isElementIntersecting && !hasIntersected) {
        setHasIntersected(true);
        
        if (defaultOptions.triggerOnce) {
          observer.unobserve(element);
        }
      }
    }, defaultOptions);

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [hasIntersected, defaultOptions]);

  return [elementRef, isIntersecting, hasIntersected];
};