import { lazy } from 'react';

// Lazy load components with error boundaries
const createLazyComponent = (importFunction) => {
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

export { preloadCriticalComponents } from './lazy.utils.js';
