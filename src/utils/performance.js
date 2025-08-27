// Performance monitoring utilities for the portfolio

class PerformanceMonitor {
  constructor() {
    this.metrics = new Map();
    this.observers = new Map();
    this.isSupported = this.checkSupport();
    
    if (this.isSupported) {
      this.initializeObservers();
    }
  }

  checkSupport() {
    return (
      typeof window !== 'undefined' &&
      'performance' in window &&
      'PerformanceObserver' in window &&
      'requestIdleCallback' in window
    );
  }

  initializeObservers() {
    // Core Web Vitals observer
    if ('PerformanceObserver' in window) {
      this.observeCoreWebVitals();
      this.observeNavigationTiming();
      this.observeResourceTiming();
    }

    // Page Visibility API for accurate timing
    document.addEventListener('visibilitychange', this.handleVisibilityChange.bind(this));
  }

  observeCoreWebVitals() {
    try {
      // Largest Contentful Paint (LCP)
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        this.recordMetric('LCP', lastEntry.startTime);
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      this.observers.set('LCP', lcpObserver);

      // First Input Delay (FID)
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          this.recordMetric('FID', entry.processingStart - entry.startTime);
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });
      this.observers.set('FID', fidObserver);

      // Cumulative Layout Shift (CLS)
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        });
        this.recordMetric('CLS', clsValue);
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
      this.observers.set('CLS', clsObserver);

      // First Contentful Paint (FCP)
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.name === 'first-contentful-paint') {
            this.recordMetric('FCP', entry.startTime);
          }
        });
      });
      fcpObserver.observe({ entryTypes: ['paint'] });
      this.observers.set('FCP', fcpObserver);

    } catch (error) {
      console.warn('Performance monitoring setup failed:', error);
    }
  }

  observeNavigationTiming() {
    try {
      const navigationObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          const metrics = {
            'DNS': entry.domainLookupEnd - entry.domainLookupStart,
            'TCP': entry.connectEnd - entry.connectStart,
            'SSL': entry.secureConnectionStart > 0 ? entry.connectEnd - entry.secureConnectionStart : 0,
            'TTFB': entry.responseStart - entry.requestStart,
            'Download': entry.responseEnd - entry.responseStart,
            'DOM': entry.domComplete - entry.domLoading,
            'Load': entry.loadEventEnd - entry.loadEventStart
          };
          
          Object.entries(metrics).forEach(([key, value]) => {
            this.recordMetric(key, value);
          });
        });
      });
      navigationObserver.observe({ entryTypes: ['navigation'] });
      this.observers.set('navigation', navigationObserver);
    } catch (error) {
      console.warn('Navigation timing setup failed:', error);
    }
  }

  observeResourceTiming() {
    try {
      const resourceObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const resourceMetrics = this.analyzeResourceTiming(entries);
        
        Object.entries(resourceMetrics).forEach(([key, value]) => {
          this.recordMetric(key, value);
        });
      });
      resourceObserver.observe({ entryTypes: ['resource'] });
      this.observers.set('resource', resourceObserver);
    } catch (error) {
      console.warn('Resource timing setup failed:', error);
    }
  }

  analyzeResourceTiming(entries) {
    const resources = {
      images: [],
      scripts: [],
      stylesheets: [],
      fonts: [],
      other: []
    };

    entries.forEach((entry) => {
      const duration = entry.responseEnd - entry.startTime;
      const size = entry.transferSize || entry.encodedBodySize || 0;
      
      const resourceData = {
        name: entry.name,
        duration,
        size,
        type: this.getResourceType(entry)
      };

      if (entry.name.match(/\.(jpg|jpeg|png|gif|webp|svg)$/i)) {
        resources.images.push(resourceData);
      } else if (entry.name.match(/\.js$/i)) {
        resources.scripts.push(resourceData);
      } else if (entry.name.match(/\.css$/i)) {
        resources.stylesheets.push(resourceData);
      } else if (entry.name.match(/\.(woff|woff2|ttf|eot)$/i)) {
        resources.fonts.push(resourceData);
      } else {
        resources.other.push(resourceData);
      }
    });

    return {
      'Total Images': resources.images.length,
      'Total Scripts': resources.scripts.length,
      'Total Stylesheets': resources.stylesheets.length,
      'Total Fonts': resources.fonts.length,
      'Largest Image': Math.max(...resources.images.map(r => r.size), 0),
      'Slowest Script': Math.max(...resources.scripts.map(r => r.duration), 0),
      'Total Transfer Size': entries.reduce((sum, entry) => sum + (entry.transferSize || 0), 0)
    };
  }

  getResourceType(entry) {
    if (entry.initiatorType) {
      return entry.initiatorType;
    }
    
    const name = entry.name.toLowerCase();
    if (name.includes('.js')) return 'script';
    if (name.includes('.css')) return 'stylesheet';
    if (name.match(/\.(jpg|jpeg|png|gif|webp|svg)$/)) return 'img';
    if (name.match(/\.(woff|woff2|ttf|eot)$/)) return 'font';
    return 'other';
  }

  recordMetric(name, value, metadata = {}) {
    const timestamp = performance.now();
    const metric = {
      name,
      value,
      timestamp,
      metadata,
      url: window.location.href
    };

    this.metrics.set(`${name}_${timestamp}`, metric);
    
    // Reduced logging in development to avoid console spam
    if (import.meta.env.DEV && name === 'LCP') {
      console.log(`[Performance] ${name}: ${value.toFixed(2)}ms`, metadata);
    }

    // Send to analytics service (if configured)
    this.sendToAnalytics(metric);
  }

  sendToAnalytics(metric) {
    // Analytics completely disabled to prevent 429 errors
    return;
  }

  sendToCustomAnalytics() {
    // Disable analytics completely to avoid spam
    return;
  }

  getConnectionInfo() {
    if ('connection' in navigator) {
      const connection = navigator.connection;
      return {
        effectiveType: connection.effectiveType,
        downlink: connection.downlink,
        rtt: connection.rtt,
        saveData: connection.saveData
      };
    }
    return null;
  }

  handleVisibilityChange() {
    if (document.visibilityState === 'hidden') {
      // Page is being hidden, flush metrics
      this.flushMetrics();
    }
  }

  flushMetrics() {
    // Send all collected metrics when page is hidden
    const metricsArray = Array.from(this.metrics.values());
    if (metricsArray.length > 0) {
      const summary = this.generateMetricsSummary(metricsArray);
      this.sendToAnalytics(summary);
    }
  }

  generateMetricsSummary(metrics) {
    const summary = {
      name: 'session_summary',
      timestamp: performance.now(),
      value: metrics.length,
      metadata: {
        totalMetrics: metrics.length,
        sessionDuration: performance.now(),
        url: window.location.href
      }
    };

    // Add core web vitals summary
    const coreVitals = ['LCP', 'FID', 'CLS', 'FCP'];
    coreVitals.forEach(vital => {
      const vitalMetrics = metrics.filter(m => m.name === vital);
      if (vitalMetrics.length > 0) {
        const latest = vitalMetrics[vitalMetrics.length - 1];
        summary.metadata[vital] = latest.value;
      }
    });

    return summary;
  }

  // Public API methods
  mark(name) {
    if (this.isSupported) {
      performance.mark(name);
    }
  }

  measure(name, startMark, endMark) {
    if (this.isSupported) {
      try {
        performance.measure(name, startMark, endMark);
        const measure = performance.getEntriesByName(name, 'measure')[0];
        if (measure) {
          this.recordMetric(name, measure.duration);
        }
      } catch (error) {
        console.warn('Performance measure failed:', error);
      }
    }
  }

  getMetrics() {
    return Array.from(this.metrics.values());
  }

  getCoreWebVitals() {
    const metrics = this.getMetrics();
    const coreVitals = {};
    
    ['LCP', 'FID', 'CLS', 'FCP'].forEach(vital => {
      const vitalMetrics = metrics.filter(m => m.name === vital);
      if (vitalMetrics.length > 0) {
        coreVitals[vital] = vitalMetrics[vitalMetrics.length - 1].value;
      }
    });
    
    return coreVitals;
  }

  getPerformanceScore() {
    const vitals = this.getCoreWebVitals();
    let score = 100;
    
    // LCP scoring (good: <2.5s, needs improvement: 2.5-4s, poor: >4s)
    if (vitals.LCP) {
      if (vitals.LCP > 4000) score -= 30;
      else if (vitals.LCP > 2500) score -= 15;
    }
    
    // FID scoring (good: <100ms, needs improvement: 100-300ms, poor: >300ms)
    if (vitals.FID) {
      if (vitals.FID > 300) score -= 25;
      else if (vitals.FID > 100) score -= 10;
    }
    
    // CLS scoring (good: <0.1, needs improvement: 0.1-0.25, poor: >0.25)
    if (vitals.CLS) {
      if (vitals.CLS > 0.25) score -= 25;
      else if (vitals.CLS > 0.1) score -= 10;
    }
    
    // FCP scoring (good: <1.8s, needs improvement: 1.8-3s, poor: >3s)
    if (vitals.FCP) {
      if (vitals.FCP > 3000) score -= 20;
      else if (vitals.FCP > 1800) score -= 10;
    }
    
    return Math.max(0, score);
  }

  destroy() {
    // Clean up observers
    this.observers.forEach((observer) => {
      observer.disconnect();
    });
    this.observers.clear();
    
    // Remove event listeners
    document.removeEventListener('visibilitychange', this.handleVisibilityChange);
    
    // Clear metrics
    this.metrics.clear();
  }
}

// Create global instance
const performanceMonitor = new PerformanceMonitor();

// Export utilities
export default performanceMonitor;

export const markPerformance = (name) => performanceMonitor.mark(name);
export const measurePerformance = (name, start, end) => performanceMonitor.measure(name, start, end);
export const getMetrics = () => performanceMonitor.getMetrics();
export const getCoreWebVitals = () => performanceMonitor.getCoreWebVitals();
export const getPerformanceScore = () => performanceMonitor.getPerformanceScore();

// React hooks for performance monitoring
export const usePerformance = () => {
  return {
    mark: markPerformance,
    measure: measurePerformance,
    getMetrics,
    getCoreWebVitals,
    getScore: getPerformanceScore
  };
};