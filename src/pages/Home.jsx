import { Suspense, useEffect } from 'react';
import SEOHead from '../components/common/SEOHead';
import LoadingSpinner from '../components/common/LoadingSpinner';
import { LazyHero, LazySkills, LazyProjects, LazyEducation, LazyContact, preloadCriticalComponents } from '../utils/lazyComponents.jsx';
import { pageConfigs } from '../utils/seo';
import performanceMonitor from '../utils/performance';

function Home() {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);

    // Mark home page load for performance monitoring
    performanceMonitor.mark('home-page-start');

    // Preload critical components
    preloadCriticalComponents();

    // Mark home page ready
    setTimeout(() => {
      performanceMonitor.mark('home-page-ready');
      performanceMonitor.measure('home-page-load-time', 'home-page-start', 'home-page-ready');
    }, 100);
  }, []);

  return (
    <>
      <SEOHead {...pageConfigs.home} />

      <Suspense fallback={
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '50vh' }}>
          <LoadingSpinner size="large" text="Loading portfolio..." />
        </div>
      }>
        <LazyHero />
      </Suspense>

      <Suspense fallback={
        <div style={{ display: 'flex', justifyContent: 'center', padding: '2rem' }}>
          <LoadingSpinner text="Loading skills..." />
        </div>
      }>
        <LazySkills />
      </Suspense>

      <Suspense fallback={
        <div style={{ display: 'flex', justifyContent: 'center', padding: '2rem' }}>
          <LoadingSpinner text="Loading projects..." />
        </div>
      }>
        <LazyProjects />
      </Suspense>

      <Suspense fallback={
        <div style={{ display: 'flex', justifyContent: 'center', padding: '2rem' }}>
          <LoadingSpinner text="Loading education..." />
        </div>
      }>
        <LazyEducation />
      </Suspense>

      <Suspense fallback={
        <div style={{ display: 'flex', justifyContent: 'center', padding: '2rem' }}>
          <LoadingSpinner text="Loading contact form..." />
        </div>
      }>
        <LazyContact />
      </Suspense>
    </>
  );
}

export default Home;
