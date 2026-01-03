import { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ErrorBoundary from './components/common/ErrorBoundary';
import Layout from './components/layout/Layout';
import NetworkStatus from './components/common/NetworkStatus';
import { ThemeProvider } from './context/ThemeContext';
import Home from './pages/Home';
import About from './pages/About';
import Academic from './pages/Academic';
import Blog from './pages/Blog';
import performanceMonitor from './utils/performance';
import { preloadImagesOnIdle } from './utils/imagePreload';
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

    // Preload all images after initial render
    preloadImagesOnIdle();

    // Mark app ready
    setTimeout(() => {
      performanceMonitor.mark('app-ready');
      performanceMonitor.measure('app-load-time', 'app-start', 'app-ready');
    }, 100);
  }, []);

  return (
    <ThemeProvider>
      <Router>
        <ErrorBoundary>
          <div className="App" data-theme="system">
            <Routes>
              <Route path="/" element={<Layout><Home /></Layout>} />
              <Route path="/about" element={<Layout><About /></Layout>} />
              <Route path="/academic" element={<Layout><Academic /></Layout>} />
              <Route path="/blog" element={<Layout><Blog /></Layout>} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>

            <NetworkStatus
              showConnectionInfo={import.meta.env.DEV}
              position="top"
              autoHide={true}
            />
          </div>
        </ErrorBoundary>
      </Router>
    </ThemeProvider>
  );
}

export default App;
