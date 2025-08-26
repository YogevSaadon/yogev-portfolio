import { Suspense, useEffect } from 'react';
import ErrorBoundary from './components/common/ErrorBoundary';
import Layout from './components/layout/Layout';
import SEOHead from './components/common/SEOHead';
import NetworkStatus from './components/common/NetworkStatus';
import LoadingSpinner from './components/common/LoadingSpinner';
import { ThemeProvider } from './context/ThemeContext';
import { LazyHero, LazySkills, LazyProjects, LazyEducation, LazyContact, preloadCriticalComponents } from './utils/lazyComponents.jsx';
import { pageConfigs } from './utils/seo';
import performanceMonitor from './utils/performance';
import './styles/variables.css';
import './styles/base.css';
import './styles/components.css';
import './styles/responsive.css';
import './styles/accessibility.css';
import './styles/animations.css';

function App() {
  useEffect(() => {
    // Mark app start for performance monitoring
    performanceMonitor.mark('app-start');
    
    // Preload critical components
    preloadCriticalComponents();
    
    // Mark app ready
    setTimeout(() => {
      performanceMonitor.mark('app-ready');
      performanceMonitor.measure('app-load-time', 'app-start', 'app-ready');
    }, 100);
  }, []);

  return (
    <ThemeProvider>
      <ErrorBoundary>
        <div className="App" data-theme="system">
          <SEOHead {...pageConfigs.home} />
          
          <Layout>
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
          </Layout>

          <NetworkStatus 
            showConnectionInfo={import.meta.env.DEV}
            position="top"
            autoHide={true}
          />
        </div>
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App;
