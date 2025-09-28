// Performance Monitoring and Optimization Utilities
class PerformanceManager {
  constructor() {
    this.metrics = {};
    this.observers = new Map();
    this.isSupported = 'PerformanceObserver' in window;
  }

  // Initialize performance monitoring
  initialize() {
    if (!this.isSupported) return;

    this.observeWebVitals();
    this.observeResourceTiming();
    this.observeNavigationTiming();
    this.observeLongTasks();
  }

  // Monitor Core Web Vitals
  observeWebVitals() {
    // Largest Contentful Paint (LCP)
    if ('PerformanceObserver' in window) {
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        this.metrics.lcp = lastEntry.startTime;
        this.reportMetric('LCP', lastEntry.startTime);
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      this.observers.set('lcp', lcpObserver);
    }

    // First Input Delay (FID)
    if ('PerformanceObserver' in window) {
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          this.metrics.fid = entry.processingStart - entry.startTime;
          this.reportMetric('FID', this.metrics.fid);
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });
      this.observers.set('fid', fidObserver);
    }

    // Cumulative Layout Shift (CLS)
    if ('PerformanceObserver' in window) {
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        });
        this.metrics.cls = clsValue;
        this.reportMetric('CLS', clsValue);
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
      this.observers.set('cls', clsObserver);
    }
  }

  // Monitor resource loading times
  observeResourceTiming() {
    if ('PerformanceObserver' in window) {
      const resourceObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.duration > 1000) { // Log slow resources
            console.warn('Slow resource detected:', {
              name: entry.name,
              duration: entry.duration,
              size: entry.transferSize
            });
          }
        });
      });
      resourceObserver.observe({ entryTypes: ['resource'] });
      this.observers.set('resource', resourceObserver);
    }
  }

  // Monitor navigation timing
  observeNavigationTiming() {
    if ('PerformanceObserver' in window) {
      const navObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          this.metrics.navigation = {
            domContentLoaded: entry.domContentLoadedEventEnd - entry.domContentLoadedEventStart,
            loadComplete: entry.loadEventEnd - entry.loadEventStart,
            domInteractive: entry.domInteractive - entry.navigationStart,
            totalTime: entry.loadEventEnd - entry.navigationStart
          };
        });
      });
      navObserver.observe({ entryTypes: ['navigation'] });
      this.observers.set('navigation', navObserver);
    }
  }

  // Monitor long tasks
  observeLongTasks() {
    if ('PerformanceObserver' in window) {
      const longTaskObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          console.warn('Long task detected:', {
            duration: entry.duration,
            startTime: entry.startTime
          });
        });
      });
      longTaskObserver.observe({ entryTypes: ['longtask'] });
      this.observers.set('longtask', longTaskObserver);
    }
  }

  // Report performance metrics
  reportMetric(name, value) {
    // Send to analytics if available
    if (window.gtag) {
      window.gtag('event', 'performance_metric', {
        metric_name: name,
        metric_value: Math.round(value),
        custom_parameter_1: 'web_vitals'
      });
    }

    // Store locally
    this.metrics[name.toLowerCase()] = value;
  }

  // Get performance summary
  getPerformanceSummary() {
    const navigation = performance.getEntriesByType('navigation')[0];
    const resources = performance.getEntriesByType('resource');
    
    return {
      ...this.metrics,
      pageLoad: navigation ? navigation.loadEventEnd - navigation.navigationStart : 0,
      domReady: navigation ? navigation.domContentLoadedEventEnd - navigation.navigationStart : 0,
      resourceCount: resources.length,
      totalResourceSize: resources.reduce((total, resource) => total + (resource.transferSize || 0), 0),
      timestamp: Date.now()
    };
  }

  // Measure custom performance
  measureCustom(name, fn) {
    const start = performance.now();
    const result = fn();
    const end = performance.now();
    
    this.reportMetric(name, end - start);
    return result;
  }

  // Preload critical resources
  preloadResource(href, as = 'script', crossorigin = false) {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = href;
    link.as = as;
    if (crossorigin) link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  }

  // Prefetch next page resources
  prefetchResource(href) {
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = href;
    document.head.appendChild(link);
  }

  // Optimize images with intersection observer
  optimizeImages() {
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
              imageObserver.unobserve(img);
            }
          }
        });
      });

      // Observe all images with data-src
      document.querySelectorAll('img[data-src]').forEach((img) => {
        imageObserver.observe(img);
      });
    }
  }

  // Cleanup observers
  cleanup() {
    this.observers.forEach((observer) => {
      observer.disconnect();
    });
    this.observers.clear();
  }
}

// Create singleton instance
const performanceManager = new PerformanceManager();

// Auto-initialize
if (typeof window !== 'undefined') {
  window.addEventListener('load', () => {
    performanceManager.initialize();
    performanceManager.optimizeImages();
  });
}

export default performanceManager;
