// Google Analytics 4 Integration
class AnalyticsManager {
  constructor() {
    this.measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID || 'G-9YB22RMX5Y';
    this.isInitialized = false;
    this.isEnabled = false;
  }

  // Initialize Google Analytics
  async initialize() {
    if (this.isInitialized || !this.measurementId || this.measurementId === 'G-XXXXXXXXXX') {
      return false;
    }

    try {
      // Load Google Analytics script
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${this.measurementId}`;
      document.head.appendChild(script);

      // Initialize gtag
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      window.gtag = gtag;

      gtag('js', new Date());
      gtag('config', this.measurementId, {
        page_title: document.title,
        page_location: window.location.href,
        send_page_view: false // We'll send page views manually
      });

      this.isInitialized = true;
      this.isEnabled = true;
      
      console.log('Google Analytics initialized successfully');
      return true;
    } catch (error) {
      console.error('Failed to initialize Google Analytics:', error);
      return false;
    }
  }

  // Track page view
  trackPageView(pagePath, pageTitle) {
    if (!this.isEnabled || !window.gtag) return;

    window.gtag('config', this.measurementId, {
      page_path: pagePath,
      page_title: pageTitle,
      page_location: window.location.href
    });

    console.log('Page view tracked:', { pagePath, pageTitle });
  }

  // Track custom events
  trackEvent(eventName, parameters = {}) {
    if (!this.isEnabled || !window.gtag) return;

    window.gtag('event', eventName, {
      event_category: parameters.category || 'General',
      event_label: parameters.label || '',
      value: parameters.value || 0,
      ...parameters
    });

    console.log('Event tracked:', { eventName, parameters });
  }

  // Track search queries
  trackSearch(searchTerm, resultsCount = 0) {
    this.trackEvent('search', {
      search_term: searchTerm,
      results_count: resultsCount,
      category: 'Search'
    });
  }

  // Track form submissions
  trackFormSubmission(formName, formType = 'contact') {
    this.trackEvent('form_submit', {
      form_name: formName,
      form_type: formType,
      category: 'Form'
    });
  }

  // Track button clicks
  trackButtonClick(buttonName, buttonLocation) {
    this.trackEvent('button_click', {
      button_name: buttonName,
      button_location: buttonLocation,
      category: 'Interaction'
    });
  }

  // Track file downloads
  trackDownload(fileName, fileType) {
    this.trackEvent('file_download', {
      file_name: fileName,
      file_type: fileType,
      category: 'Download'
    });
  }

  // Track external link clicks
  trackExternalLink(url, linkText) {
    this.trackEvent('external_link_click', {
      link_url: url,
      link_text: linkText,
      category: 'External Link'
    });
  }

  // Track newsletter subscriptions
  trackNewsletterSubscription(source = 'website') {
    this.trackEvent('newsletter_subscribe', {
      subscription_source: source,
      category: 'Newsletter'
    });
  }

  // Track user engagement
  trackEngagement(action, details = {}) {
    this.trackEvent('user_engagement', {
      engagement_action: action,
      ...details,
      category: 'Engagement'
    });
  }

  // Track errors
  trackError(errorMessage, errorLocation, errorSeverity = 'error') {
    this.trackEvent('error', {
      error_message: errorMessage,
      error_location: errorLocation,
      error_severity: errorSeverity,
      category: 'Error'
    });
  }

  // Track performance metrics
  trackPerformance(metricName, value, unit = 'ms') {
    this.trackEvent('performance_metric', {
      metric_name: metricName,
      metric_value: value,
      metric_unit: unit,
      category: 'Performance'
    });
  }

  // Set user properties
  setUserProperties(properties) {
    if (!this.isEnabled || !window.gtag) return;

    window.gtag('config', this.measurementId, {
      user_properties: properties
    });
  }

  // Set custom dimensions
  setCustomDimension(index, value) {
    if (!this.isEnabled || !window.gtag) return;

    window.gtag('config', this.measurementId, {
      [`custom_map.dimension${index}`]: value
    });
  }

  // Enable/disable analytics
  setEnabled(enabled) {
    this.isEnabled = enabled;
    if (window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: enabled ? 'granted' : 'denied'
      });
    }
  }

  // Get analytics status
  getStatus() {
    return {
      isInitialized: this.isInitialized,
      isEnabled: this.isEnabled,
      measurementId: this.measurementId
    };
  }
}

// Create singleton instance
const analyticsManager = new AnalyticsManager();

// Auto-initialize if measurement ID is available
if (typeof window !== 'undefined' && import.meta.env.VITE_GA_MEASUREMENT_ID) {
  analyticsManager.initialize();
}

export default analyticsManager;
