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
    this.observeMemoryUsage();
    this.observeNetworkInformation();
    this.setupErrorTracking();
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

  // Monitor memory usage
  observeMemoryUsage() {
    if ('memory' in performance) {
      const checkMemory = () => {
        const memory = performance.memory;
        this.metrics.memory = {
          used: memory.usedJSHeapSize,
          total: memory.totalJSHeapSize,
          limit: memory.jsHeapSizeLimit,
          usage: (memory.usedJSHeapSize / memory.jsHeapSizeLimit) * 100
        };
        
        // Report high memory usage
        if (this.metrics.memory.usage > 80) {
          console.warn('High memory usage detected:', this.metrics.memory);
          this.reportMetric('high_memory_usage', this.metrics.memory.usage);
        }
      };
      
      // Check memory every 30 seconds
      setInterval(checkMemory, 30000);
      checkMemory(); // Initial check
    }
  }

  // Monitor network information
  observeNetworkInformation() {
    if ('connection' in navigator) {
      const connection = navigator.connection;
      this.metrics.network = {
        effectiveType: connection.effectiveType,
        downlink: connection.downlink,
        rtt: connection.rtt,
        saveData: connection.saveData
      };
      
      // Report network changes
      connection.addEventListener('change', () => {
        this.metrics.network = {
          effectiveType: connection.effectiveType,
          downlink: connection.downlink,
          rtt: connection.rtt,
          saveData: connection.saveData
        };
        this.reportMetric('network_change', connection.effectiveType);
      });
    }
  }

  // Setup error tracking
  setupErrorTracking() {
    // JavaScript errors
    window.addEventListener('error', (event) => {
      this.reportError('javascript_error', {
        message: event.message,
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno,
        stack: event.error?.stack
      });
    });

    // Unhandled promise rejections
    window.addEventListener('unhandledrejection', (event) => {
      this.reportError('unhandled_promise_rejection', {
        reason: event.reason,
        stack: event.reason?.stack
      });
    });

    // Resource loading errors
    window.addEventListener('error', (event) => {
      if (event.target !== window) {
        this.reportError('resource_error', {
          type: event.target.tagName,
          src: event.target.src || event.target.href,
          message: event.message
        });
      }
    }, true);
  }

  // Report errors
  reportError(type, details) {
    const errorData = {
      type,
      details,
      timestamp: Date.now(),
      url: window.location.href,
      userAgent: navigator.userAgent
    };

    // Send to analytics
    if (window.gtag) {
      window.gtag('event', 'exception', {
        description: `${type}: ${details.message || 'Unknown error'}`,
        fatal: false,
        custom_parameter_1: type
      });
    }

    // Log to console in development
    if (import.meta.env.DEV) {
      console.error('Performance Error:', errorData);
    }

    // Store locally
    if (!this.metrics.errors) {
      this.metrics.errors = [];
    }
    this.metrics.errors.push(errorData);
  }

  // Monitor user interactions
  observeUserInteractions() {
    const interactions = ['click', 'scroll', 'keydown', 'touchstart'];
    
    interactions.forEach(eventType => {
      let interactionCount = 0;
      let lastInteraction = 0;
      
      document.addEventListener(eventType, () => {
        interactionCount++;
        lastInteraction = Date.now();
        
        // Report interaction metrics every 10 interactions
        if (interactionCount % 10 === 0) {
          this.reportMetric(`${eventType}_count`, interactionCount);
        }
      }, { passive: true });
    });
  }

  // Monitor page visibility
  observePageVisibility() {
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        this.metrics.pageHidden = Date.now();
      } else {
        this.metrics.pageVisible = Date.now();
        
        // Report time away from page
        if (this.metrics.pageHidden) {
          const timeAway = Date.now() - this.metrics.pageHidden;
          this.reportMetric('time_away_from_page', timeAway);
        }
      }
    });
  }

  // Get comprehensive performance report
  getComprehensiveReport() {
    const report = {
      ...this.getPerformanceSummary(),
      userAgent: navigator.userAgent,
      viewport: {
        width: window.innerWidth,
        height: window.innerHeight
      },
      timestamp: Date.now(),
      url: window.location.href
    };

    // Add memory info if available
    if ('memory' in performance) {
      report.memory = this.metrics.memory;
    }

    // Add network info if available
    if ('connection' in navigator) {
      report.network = this.metrics.network;
    }

    // Add error count
    if (this.metrics.errors) {
      report.errorCount = this.metrics.errors.length;
    }

    return report;
  }

  // Send performance report to server
  async sendPerformanceReport() {
    const report = this.getComprehensiveReport();
    
    try {
      await fetch('/api/performance', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(report)
      });
    } catch (error) {
      console.warn('Failed to send performance report:', error);
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
    performanceManager.observeUserInteractions();
    performanceManager.observePageVisibility();
    
    // Send performance report after 5 seconds
    setTimeout(() => {
      performanceManager.sendPerformanceReport();
    }, 5000);
  });
}

export default performanceManager;
