import { lazy } from 'react';

// Lazy load components with error boundaries
const createLazyComponent = (importFunction, fallback = null) => {
  const LazyComponent = lazy(importFunction);
  
  return (props) => (
    <LazyComponent {...props} />
  );
};

// Lazy loaded components
export const LazyHero = createLazyComponent(() => import('../components/Hero/Hero'));
export const LazySkills = createLazyComponent(() => import('../components/Skills/Skills'));
export const LazyProjects = createLazyComponent(() => import('../components/Projects/Projects'));
export const LazyEducation = createLazyComponent(() => import('../components/Education/Education'));
export const LazyContact = createLazyComponent(() => import('../components/Contact/Contact'));

// Component loading priorities
export const COMPONENT_PRIORITIES = {
  HIGH: ['Hero', 'Header'], // Above the fold
  MEDIUM: ['Skills', 'Projects'], // Primary content
  LOW: ['Education', 'Contact', 'Footer'] // Below the fold
};

// Preload components based on priority
export const preloadComponent = (componentName) => {
  switch (componentName) {
    case 'Hero':
      return import('../components/Hero/Hero');
    case 'Skills':
      return import('../components/Skills/Skills');
    case 'Projects':
      return import('../components/Projects/Projects');
    case 'Education':
      return import('../components/Education/Education');
    case 'Contact':
      return import('../components/Contact/Contact');
    default:
      return Promise.resolve();
  }
};

// Preload critical components
export const preloadCriticalComponents = () => {
  // Preload above-the-fold components immediately
  COMPONENT_PRIORITIES.HIGH.forEach(component => {
    if (component !== 'Header') { // Header is not lazy loaded
      preloadComponent(component);
    }
  });
  
  // Preload medium priority components after a short delay
  setTimeout(() => {
    COMPONENT_PRIORITIES.MEDIUM.forEach(component => {
      preloadComponent(component);
    });
  }, 100);
  
  // Preload low priority components when idle
  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(() => {
      COMPONENT_PRIORITIES.LOW.forEach(component => {
        if (component !== 'Footer') { // Footer is not lazy loaded
          preloadComponent(component);
        }
      });
    });
  } else {
    // Fallback for browsers without requestIdleCallback
    setTimeout(() => {
      COMPONENT_PRIORITIES.LOW.forEach(component => {
        if (component !== 'Footer') {
          preloadComponent(component);
        }
      });
    }, 2000);
  }
};