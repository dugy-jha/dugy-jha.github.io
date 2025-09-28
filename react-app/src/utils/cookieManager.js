// Cookie Management Utility with GDPR/CCPA Compliance
export class CookieManager {
  constructor() {
    this.preferences = this.loadPreferences();
    this.consentVersion = '1.0';
    this.dataRetentionDays = 365; // 1 year
    this.consentRefreshDays = 90; // 3 months
  }

  // Load cookie preferences from localStorage
  loadPreferences() {
    const saved = localStorage.getItem('cookiePreferences');
    if (saved) {
      return JSON.parse(saved);
    }
    return {
      necessary: true,
      personalization: false,
      analytics: false,
      advertising: false
    };
  }

  // Save cookie preferences to localStorage with compliance tracking
  savePreferences(preferences) {
    localStorage.setItem('cookiePreferences', JSON.stringify(preferences));
    localStorage.setItem('cookie_consent_version', this.consentVersion);
    localStorage.setItem('cookie_consent_timestamp', new Date().toISOString());
    localStorage.setItem('cookie_consent_given', 'true');
    
    this.preferences = preferences;
    this.initializeServices();
    
    // Log consent for compliance
    this.logConsentEvent(preferences);
  }

  // Initialize services based on preferences
  initializeServices() {
    if (this.preferences.analytics) {
      this.initializeAnalytics();
    }
    if (this.preferences.advertising) {
      this.initializeAdvertising();
    }
    if (this.preferences.personalization) {
      this.initializePersonalization();
    }
  }

  // Initialize Analytics (Google Analytics, etc.)
  initializeAnalytics() {
    console.log('Initializing Analytics...');
    
    // Google Analytics 4
    if (typeof gtag !== 'undefined') {
      gtag('consent', 'update', {
        'analytics_storage': 'granted'
      });
    }

    // Initialize comprehensive tracking
    this.initializeVisitorTracking();
    this.trackPageView();
    this.trackUserInteractions();
    this.trackEngagementMetrics();
    this.initializeHeatmapTracking();
  }

  // Initialize comprehensive visitor tracking
  initializeVisitorTracking() {
    // Create visitor profile
    const visitorId = this.getOrCreateVisitorId();
    const sessionId = this.getOrCreateSessionId();
    
    // Track visitor characteristics
    this.trackVisitorCharacteristics();
    
    // Track device and browser info
    this.trackDeviceInfo();
    
    // Track geographic location (if permitted)
    this.trackGeographicLocation();
    
    // Store visitor data
    this.storeVisitorData({
      visitorId,
      sessionId,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      referrer: document.referrer,
      landingPage: window.location.href
    });
  }

  // Get or create unique visitor ID
  getOrCreateVisitorId() {
    let visitorId = this.getCookie('visitor_id');
    if (!visitorId) {
      visitorId = 'visitor_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
      this.setCookie('visitor_id', visitorId, 365); // 1 year
    }
    return visitorId;
  }

  // Get or create session ID
  getOrCreateSessionId() {
    let sessionId = sessionStorage.getItem('session_id');
    if (!sessionId) {
      sessionId = 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
      sessionStorage.setItem('session_id', sessionId);
    }
    return sessionId;
  }

  // Track visitor characteristics
  trackVisitorCharacteristics() {
    const characteristics = {
      screenResolution: `${screen.width}x${screen.height}`,
      colorDepth: screen.colorDepth,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      language: navigator.language,
      platform: navigator.platform,
      cookieEnabled: navigator.cookieEnabled,
      doNotTrack: navigator.doNotTrack,
      connectionType: navigator.connection ? navigator.connection.effectiveType : 'unknown'
    };

    this.storeAnalyticsData('visitor_characteristics', characteristics);
  }

  // Track device information
  trackDeviceInfo() {
    const deviceInfo = {
      userAgent: navigator.userAgent,
      deviceType: this.detectDeviceType(),
      browserInfo: this.detectBrowser(),
      osInfo: this.detectOperatingSystem(),
      isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
      isTablet: /iPad|Android(?=.*\bMobile\b)/i.test(navigator.userAgent)
    };

    this.storeAnalyticsData('device_info', deviceInfo);
  }

  // Detect device type
  detectDeviceType() {
    const ua = navigator.userAgent;
    if (/tablet|ipad|playbook|silk/i.test(ua)) return 'tablet';
    if (/mobile|iphone|ipod|android|blackberry|opera|mini|windows\sce|palm|smartphone|iemobile/i.test(ua)) return 'mobile';
    return 'desktop';
  }

  // Detect browser
  detectBrowser() {
    const ua = navigator.userAgent;
    if (ua.includes('Chrome')) return 'Chrome';
    if (ua.includes('Firefox')) return 'Firefox';
    if (ua.includes('Safari')) return 'Safari';
    if (ua.includes('Edge')) return 'Edge';
    if (ua.includes('Opera')) return 'Opera';
    return 'Unknown';
  }

  // Detect operating system
  detectOperatingSystem() {
    const ua = navigator.userAgent;
    if (ua.includes('Windows')) return 'Windows';
    if (ua.includes('Mac')) return 'macOS';
    if (ua.includes('Linux')) return 'Linux';
    if (ua.includes('Android')) return 'Android';
    if (ua.includes('iOS')) return 'iOS';
    return 'Unknown';
  }

  // Track geographic location (with permission)
  trackGeographicLocation() {
    if (navigator.geolocation && this.preferences.analytics) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const location = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            accuracy: position.coords.accuracy,
            timestamp: new Date().toISOString()
          };
          this.storeAnalyticsData('geographic_location', location);
        },
        (error) => {
          console.log('Geolocation not available:', error.message);
        },
        { timeout: 5000, enableHighAccuracy: false }
      );
    }
  }

  // Initialize Advertising (Google Ads, Facebook Pixel, etc.)
  initializeAdvertising() {
    console.log('Initializing Advertising...');
    
    // Google Ads
    if (typeof gtag !== 'undefined') {
      gtag('consent', 'update', {
        'ad_storage': 'granted',
        'ad_user_data': 'granted',
        'ad_personalization': 'granted'
      });
    }

    // Facebook Pixel
    if (typeof fbq !== 'undefined') {
      fbq('consent', 'grant');
    }

    // Initialize monetization tracking
    this.initializeMonetizationTracking();
    this.trackUserValue();
    this.initializeAffiliateTracking();
  }

  // Initialize monetization tracking
  initializeMonetizationTracking() {
    // Track user engagement value
    this.trackEngagementValue();
    
    // Track conversion events
    this.trackConversionEvents();
    
    // Track revenue potential
    this.trackRevenuePotential();
  }

  // Track user engagement value
  trackEngagementValue() {
    const engagementMetrics = {
      timeOnSite: 0,
      pageViews: 1,
      interactions: 0,
      scrollDepth: 0,
      formSubmissions: 0,
      downloads: 0,
      videoViews: 0,
      lastActivity: new Date().toISOString()
    };

    this.storeAnalyticsData('engagement_metrics', engagementMetrics);
    
    // Update engagement in real-time
    this.startEngagementTracking();
  }

  // Start real-time engagement tracking
  startEngagementTracking() {
    let startTime = Date.now();
    let lastActivity = Date.now();
    let isActive = true;

    // Track time on site
    setInterval(() => {
      if (isActive) {
        const timeOnSite = Math.floor((Date.now() - startTime) / 1000);
        this.updateEngagementMetric('timeOnSite', timeOnSite);
      }
    }, 1000);

    // Track user activity
    const activityEvents = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart'];
    activityEvents.forEach(event => {
      document.addEventListener(event, () => {
        lastActivity = Date.now();
        isActive = true;
        this.updateEngagementMetric('lastActivity', new Date().toISOString());
      });
    });

    // Check for inactivity
    setInterval(() => {
      if (Date.now() - lastActivity > 30000) { // 30 seconds
        isActive = false;
      }
    }, 5000);
  }

  // Track engagement metrics
  trackEngagementMetrics() {
    // Track scroll depth
    let maxScrollDepth = 0;
    window.addEventListener('scroll', () => {
      const scrollDepth = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
      if (scrollDepth > maxScrollDepth) {
        maxScrollDepth = scrollDepth;
        this.updateEngagementMetric('scrollDepth', maxScrollDepth);
      }
    });

    // Track form interactions
    document.addEventListener('submit', (e) => {
      this.updateEngagementMetric('formSubmissions', 1, true);
      this.trackConversionEvent('form_submission', {
        formId: e.target.id || 'unknown',
        formAction: e.target.action || 'unknown'
      });
    });

    // Track downloads
    document.addEventListener('click', (e) => {
      if (e.target.tagName === 'A' && e.target.download) {
        this.updateEngagementMetric('downloads', 1, true);
        this.trackConversionEvent('file_download', {
          fileName: e.target.download,
          fileUrl: e.target.href
        });
      }
    });
  }

  // Initialize heatmap tracking
  initializeHeatmapTracking() {
    if (this.preferences.analytics) {
      // Track click heatmap
      document.addEventListener('click', (e) => {
        const clickData = {
          x: e.clientX,
          y: e.clientY,
          element: e.target.tagName,
          elementId: e.target.id,
          elementClass: e.target.className,
          timestamp: new Date().toISOString(),
          page: window.location.pathname
        };
        this.storeAnalyticsData('click_heatmap', clickData);
      });

      // Track mouse movement patterns
      let mouseMovements = [];
      document.addEventListener('mousemove', (e) => {
        mouseMovements.push({
          x: e.clientX,
          y: e.clientY,
          timestamp: Date.now()
        });

        // Store every 100 movements
        if (mouseMovements.length >= 100) {
          this.storeAnalyticsData('mouse_movements', mouseMovements);
          mouseMovements = [];
        }
      });
    }
  }

  // Track user value for monetization
  trackUserValue() {
    const userValue = {
      engagementScore: 0,
      conversionProbability: 0,
      lifetimeValue: 0,
      segment: 'unknown',
      interests: [],
      demographics: {},
      behaviorPattern: 'unknown'
    };

    this.storeAnalyticsData('user_value', userValue);
    this.calculateUserValue();
  }

  // Calculate user value based on behavior
  calculateUserValue() {
    const engagement = this.getAnalyticsData('engagement_metrics') || {};
    const characteristics = this.getAnalyticsData('visitor_characteristics') || {};
    
    // Calculate engagement score (0-100)
    let engagementScore = 0;
    engagementScore += Math.min(engagement.timeOnSite / 60, 20); // Max 20 points for time
    engagementScore += Math.min(engagement.pageViews * 5, 25); // Max 25 points for pages
    engagementScore += Math.min(engagement.interactions * 2, 20); // Max 20 points for interactions
    engagementScore += Math.min(engagement.scrollDepth / 4, 15); // Max 15 points for scroll
    engagementScore += Math.min(engagement.formSubmissions * 10, 20); // Max 20 points for forms

    // Determine user segment
    let segment = 'casual';
    if (engagementScore > 70) segment = 'high_value';
    else if (engagementScore > 40) segment = 'engaged';
    else if (engagementScore > 20) segment = 'interested';

    // Calculate conversion probability
    let conversionProbability = Math.min(engagementScore / 2, 50);

    // Estimate lifetime value based on segment
    let lifetimeValue = 0;
    switch (segment) {
      case 'high_value': lifetimeValue = 100; break;
      case 'engaged': lifetimeValue = 50; break;
      case 'interested': lifetimeValue = 25; break;
      default: lifetimeValue = 10;
    }

    const userValue = {
      engagementScore: Math.round(engagementScore),
      conversionProbability: Math.round(conversionProbability),
      lifetimeValue,
      segment,
      interests: this.inferUserInterests(),
      demographics: this.inferDemographics(characteristics),
      behaviorPattern: this.analyzeBehaviorPattern()
    };

    this.storeAnalyticsData('user_value', userValue);
  }

  // Infer user interests based on behavior
  inferUserInterests() {
    const interests = [];
    const page = window.location.pathname;
    
    if (page.includes('/technology')) interests.push('technology');
    if (page.includes('/careers')) interests.push('careers');
    if (page.includes('/news')) interests.push('news');
    if (page.includes('/contact')) interests.push('contact');
    if (page.includes('/mission')) interests.push('mission');
    
    return interests;
  }

  // Infer demographics based on characteristics
  inferDemographics(characteristics) {
    const demographics = {};
    
    // Infer age group based on device and behavior
    if (characteristics.deviceType === 'mobile') {
      demographics.likelyAgeGroup = '18-34';
    } else if (characteristics.deviceType === 'desktop') {
      demographics.likelyAgeGroup = '25-54';
    }
    
    // Infer income level based on device and location
    if (characteristics.platform === 'Mac') {
      demographics.likelyIncomeLevel = 'high';
    }
    
    return demographics;
  }

  // Analyze behavior pattern
  analyzeBehaviorPattern() {
    const engagement = this.getAnalyticsData('engagement_metrics') || {};
    
    if (engagement.timeOnSite > 300) return 'deep_reader';
    if (engagement.pageViews > 5) return 'explorer';
    if (engagement.formSubmissions > 0) return 'converter';
    if (engagement.scrollDepth > 80) return 'engaged';
    
    return 'browser';
  }

  // Initialize Personalization
  initializePersonalization() {
    console.log('Initializing Personalization...');
    
    // Load user preferences
    this.loadUserPreferences();
    
    // Set up personalized content
    this.setupPersonalizedContent();
  }

  // Track page views
  trackPageView(page = window.location.pathname) {
    if (this.preferences.analytics) {
      console.log(`Analytics: Page view - ${page}`);
      
      // Google Analytics
      if (typeof gtag !== 'undefined') {
        gtag('config', 'GA_MEASUREMENT_ID', {
          page_path: page
        });
      }
    }
  }

  // Track user interactions
  trackUserInteractions() {
    if (this.preferences.analytics) {
      // Track button clicks
      document.addEventListener('click', (e) => {
        if (e.target.matches('button, a')) {
          console.log(`Analytics: Button click - ${e.target.textContent || e.target.href}`);
          
          if (typeof gtag !== 'undefined') {
            gtag('event', 'click', {
              event_category: 'engagement',
              event_label: e.target.textContent || e.target.href
            });
          }
        }
      });

      // Track form submissions
      document.addEventListener('submit', (e) => {
        console.log(`Analytics: Form submission - ${e.target.action || 'unknown'}`);
        
        if (typeof gtag !== 'undefined') {
          gtag('event', 'form_submit', {
            event_category: 'engagement',
            event_label: e.target.action || 'unknown'
          });
        }
      });
    }
  }

  // Load user preferences for personalization
  loadUserPreferences() {
    const preferences = {
      theme: localStorage.getItem('theme') || 'light',
      language: localStorage.getItem('language') || 'en',
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      // Add more preferences as needed
    };
    
    console.log('Personalization: User preferences loaded', preferences);
    return preferences;
  }

  // Setup personalized content
  setupPersonalizedContent() {
    // Example: Show personalized recommendations
    this.showPersonalizedRecommendations();
    
    // Example: Customize UI based on preferences
    this.customizeUI();
  }

  // Show personalized recommendations
  showPersonalizedRecommendations() {
    // This would typically fetch from an API
    const recommendations = [
      'Fusion Energy Research',
      'Nuclear Safety Protocols',
      'Clean Energy Solutions'
    ];
    
    console.log('Personalization: Recommendations', recommendations);
  }

  // Customize UI based on preferences
  customizeUI() {
    const preferences = this.loadUserPreferences();
    
    // Apply theme
    if (preferences.theme === 'dark') {
      document.body.classList.add('dark');
      document.body.classList.remove('light');
    } else {
      document.body.classList.add('light');
      document.body.classList.remove('dark');
    }
    
    console.log('Personalization: UI customized');
  }

  // Set a cookie
  setCookie(name, value, days = 365) {
    if (!this.preferences.necessary && name !== 'necessary') {
      return; // Don't set non-necessary cookies if not consented
    }
    
    const expires = new Date();
    expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
    
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Lax`;
  }

  // Get a cookie
  getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    
    return null;
  }

  // Delete a cookie
  deleteCookie(name) {
    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`;
  }

  // Clear all non-necessary cookies
  clearNonNecessaryCookies() {
    const cookies = document.cookie.split(';');
    
    cookies.forEach(cookie => {
      const name = cookie.split('=')[0].trim();
      if (name !== 'necessary' && name !== 'cookiePreferences') {
        this.deleteCookie(name);
      }
    });
    
    console.log('Cookies: Non-necessary cookies cleared');
  }

  // Store analytics data
  storeAnalyticsData(key, data) {
    const analyticsData = JSON.parse(localStorage.getItem('analytics_data') || '{}');
    analyticsData[key] = data;
    localStorage.setItem('analytics_data', JSON.stringify(analyticsData));
  }

  // Get analytics data
  getAnalyticsData(key) {
    const analyticsData = JSON.parse(localStorage.getItem('analytics_data') || '{}');
    return analyticsData[key];
  }

  // Store visitor data
  storeVisitorData(data) {
    const visitorData = JSON.parse(localStorage.getItem('visitor_data') || '{}');
    Object.assign(visitorData, data);
    localStorage.setItem('visitor_data', JSON.stringify(visitorData));
  }

  // Update engagement metric
  updateEngagementMetric(metric, value, increment = false) {
    const engagement = this.getAnalyticsData('engagement_metrics') || {};
    if (increment) {
      engagement[metric] = (engagement[metric] || 0) + value;
    } else {
      engagement[metric] = value;
    }
    this.storeAnalyticsData('engagement_metrics', engagement);
  }

  // Track conversion events
  trackConversionEvents() {
    // Track newsletter signups
    document.addEventListener('submit', (e) => {
      if (e.target.querySelector('input[type="email"]')) {
        this.trackConversionEvent('newsletter_signup', {
          email: e.target.querySelector('input[type="email"]').value,
          source: 'website'
        });
      }
    });

    // Track contact form submissions
    document.addEventListener('submit', (e) => {
      if (e.target.action && e.target.action.includes('contact')) {
        this.trackConversionEvent('contact_form', {
          formId: e.target.id || 'contact_form',
          timestamp: new Date().toISOString()
        });
      }
    });
  }

  // Track conversion event
  trackConversionEvent(eventType, eventData) {
    const conversionEvent = {
      eventType,
      eventData,
      timestamp: new Date().toISOString(),
      visitorId: this.getOrCreateVisitorId(),
      sessionId: this.getOrCreateSessionId(),
      page: window.location.pathname
    };

    // Store locally
    const conversions = JSON.parse(localStorage.getItem('conversions') || '[]');
    conversions.push(conversionEvent);
    localStorage.setItem('conversions', JSON.stringify(conversions));

    // Send to analytics platforms
    if (typeof gtag !== 'undefined') {
      gtag('event', eventType, eventData);
    }

    if (typeof fbq !== 'undefined') {
      fbq('track', eventType, eventData);
    }

    console.log('Conversion tracked:', conversionEvent);
  }

  // Track revenue potential
  trackRevenuePotential() {
    const revenueMetrics = {
      estimatedMonthlyRevenue: 0,
      conversionRate: 0,
      averageOrderValue: 0,
      customerLifetimeValue: 0,
      revenuePerVisitor: 0
    };

    this.storeAnalyticsData('revenue_metrics', revenueMetrics);
    this.calculateRevenueMetrics();
  }

  // Calculate revenue metrics
  calculateRevenueMetrics() {
    const userValue = this.getAnalyticsData('user_value') || {};
    const engagement = this.getAnalyticsData('engagement_metrics') || {};
    
    // Calculate conversion rate based on engagement
    const conversionRate = Math.min(userValue.conversionProbability / 100, 0.1); // Max 10%
    
    // Estimate average order value based on user segment
    let averageOrderValue = 50; // Default
    switch (userValue.segment) {
      case 'high_value': averageOrderValue = 200; break;
      case 'engaged': averageOrderValue = 100; break;
      case 'interested': averageOrderValue = 75; break;
    }

    // Calculate customer lifetime value
    const customerLifetimeValue = userValue.lifetimeValue || 0;
    
    // Calculate revenue per visitor
    const revenuePerVisitor = conversionRate * averageOrderValue;

    const revenueMetrics = {
      estimatedMonthlyRevenue: revenuePerVisitor * 1000, // Assuming 1000 visitors/month
      conversionRate: Math.round(conversionRate * 10000) / 100, // Percentage
      averageOrderValue,
      customerLifetimeValue,
      revenuePerVisitor: Math.round(revenuePerVisitor * 100) / 100
    };

    this.storeAnalyticsData('revenue_metrics', revenueMetrics);
  }

  // Initialize affiliate tracking
  initializeAffiliateTracking() {
    // Track affiliate links
    document.addEventListener('click', (e) => {
      if (e.target.tagName === 'A' && e.target.href) {
        const url = new URL(e.target.href);
        if (url.hostname !== window.location.hostname) {
          this.trackAffiliateClick({
            url: e.target.href,
            text: e.target.textContent,
            timestamp: new Date().toISOString()
          });
        }
      }
    });
  }

  // Track affiliate click
  trackAffiliateClick(clickData) {
    const affiliateClicks = JSON.parse(localStorage.getItem('affiliate_clicks') || '[]');
    affiliateClicks.push(clickData);
    localStorage.setItem('affiliate_clicks', JSON.stringify(affiliateClicks));
  }

  // Get comprehensive visitor insights
  getVisitorInsights() {
    return {
      visitorId: this.getOrCreateVisitorId(),
      sessionId: this.getOrCreateSessionId(),
      preferences: this.preferences,
      characteristics: this.getAnalyticsData('visitor_characteristics'),
      deviceInfo: this.getAnalyticsData('device_info'),
      engagement: this.getAnalyticsData('engagement_metrics'),
      userValue: this.getAnalyticsData('user_value'),
      revenueMetrics: this.getAnalyticsData('revenue_metrics'),
      conversions: JSON.parse(localStorage.getItem('conversions') || '[]'),
      affiliateClicks: JSON.parse(localStorage.getItem('affiliate_clicks') || '[]'),
      timestamp: new Date().toISOString()
    };
  }

  // Export data for monetization
  exportMonetizationData() {
    const insights = this.getVisitorInsights();
    
    // Format for different monetization platforms
    const monetizationData = {
      // Google Analytics format
      gaData: {
        client_id: insights.visitorId,
        user_properties: {
          user_segment: insights.userValue?.segment,
          engagement_score: insights.userValue?.engagementScore,
          conversion_probability: insights.userValue?.conversionProbability
        },
        custom_parameters: {
          device_type: insights.deviceInfo?.deviceType,
          behavior_pattern: insights.userValue?.behaviorPattern,
          interests: insights.userValue?.interests
        }
      },
      
      // Facebook Pixel format
      fbData: {
        external_id: insights.visitorId,
        em: null, // Email hash if available
        ph: null, // Phone hash if available
        client_user_agent: insights.characteristics?.userAgent,
        fbc: this.getCookie('_fbc'),
        fbp: this.getCookie('_fbp'),
        custom_data: {
          content_category: 'fusion_energy',
          content_ids: insights.userValue?.interests,
          value: insights.revenueMetrics?.revenuePerVisitor,
          currency: 'USD'
        }
      },
      
      // Custom analytics format
      customData: insights
    };

    return monetizationData;
  }

  // Get cookie statistics
  getCookieStats() {
    const cookies = document.cookie.split(';').filter(c => c.trim() !== '');
    const preferences = this.preferences;
    
    return {
      totalCookies: cookies.length,
      enabledCategories: Object.values(preferences).filter(Boolean).length,
      disabledCategories: Object.values(preferences).filter(v => !v).length,
      preferences: preferences,
      visitorInsights: this.getVisitorInsights(),
      monetizationData: this.exportMonetizationData(),
      compliance: this.getComplianceStatus()
    };
  }

  // GDPR/CCPA Compliance Methods

  // Log consent event for compliance tracking
  logConsentEvent(preferences) {
    const consentEvent = {
      timestamp: new Date().toISOString(),
      version: this.consentVersion,
      preferences: preferences,
      userAgent: navigator.userAgent,
      ipAddress: 'anonymized', // In production, this would be server-side
      consentMethod: 'explicit',
      legalBasis: {
        necessary: 'legitimate_interest',
        personalization: 'consent',
        analytics: 'consent',
        advertising: 'consent'
      }
    };

    // Store consent log
    const consentLog = JSON.parse(localStorage.getItem('consent_log') || '[]');
    consentLog.push(consentEvent);
    localStorage.setItem('consent_log', JSON.stringify(consentLog));

    console.log('Consent logged for compliance:', consentEvent);
  }

  // Check if consent needs refresh
  needsConsentRefresh() {
    const consentTimestamp = localStorage.getItem('cookie_consent_timestamp');
    if (!consentTimestamp) return true;

    const consentDate = new Date(consentTimestamp);
    const now = new Date();
    const daysSinceConsent = (now - consentDate) / (1000 * 60 * 60 * 24);

    return daysSinceConsent > this.consentRefreshDays;
  }

  // Get compliance status
  getComplianceStatus() {
    const consentGiven = localStorage.getItem('cookie_consent_given') === 'true';
    const consentVersion = localStorage.getItem('cookie_consent_version');
    const consentTimestamp = localStorage.getItem('cookie_consent_timestamp');
    const needsRefresh = this.needsConsentRefresh();

    return {
      consentGiven,
      consentVersion,
      consentTimestamp,
      needsRefresh,
      dataRetentionDays: this.dataRetentionDays,
      consentRefreshDays: this.consentRefreshDays,
      gdprCompliant: consentGiven && consentVersion === this.consentVersion,
      ccpaCompliant: consentGiven && this.hasCCPACompliance()
    };
  }

  // Check CCPA compliance
  hasCCPACompliance() {
    // CCPA requires opt-out mechanism and clear disclosure
    const hasOptOut = localStorage.getItem('ccpa_opt_out') !== null;
    const hasDisclosure = localStorage.getItem('privacy_disclosure_shown') === 'true';
    
    return hasOptOut || hasDisclosure;
  }

  // GDPR Data Export (Right to Data Portability)
  exportUserData() {
    const userData = {
      personalData: {
        visitorId: this.getOrCreateVisitorId(),
        preferences: this.preferences,
        consentHistory: JSON.parse(localStorage.getItem('consent_log') || '[]'),
        lastUpdated: new Date().toISOString()
      },
      analyticsData: this.getAnalyticsData('visitor_characteristics'),
      deviceData: this.getAnalyticsData('device_info'),
      engagementData: this.getAnalyticsData('engagement_metrics'),
      userValueData: this.getAnalyticsData('user_value'),
      conversionData: JSON.parse(localStorage.getItem('conversions') || '[]'),
      affiliateData: JSON.parse(localStorage.getItem('affiliate_clicks') || '[]')
    };

    // Create downloadable JSON file
    const dataStr = JSON.stringify(userData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = `aspl-fusion-user-data-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    // Log data export request
    this.logDataRequest('export', userData.personalData.visitorId);

    return userData;
  }

  // GDPR Data Deletion (Right to be Forgotten)
  deleteUserData() {
    const visitorId = this.getOrCreateVisitorId();
    
    // Clear all user data
    const keysToRemove = [
      'cookiePreferences',
      'analytics_data',
      'visitor_data',
      'conversions',
      'affiliate_clicks',
      'consent_log',
      'visitor_id',
      'session_id',
      'cookie_consent_given',
      'cookie_consent_timestamp',
      'cookie_consent_version'
    ];

    keysToRemove.forEach(key => {
      localStorage.removeItem(key);
    });

    // Clear session storage
    sessionStorage.clear();

    // Clear all cookies except necessary ones
    this.clearAllCookies();

    // Log deletion request
    this.logDataRequest('deletion', visitorId);

    // Reset preferences to default
    this.preferences = {
      necessary: true,
      personalization: false,
      analytics: false,
      advertising: false
    };

    console.log('User data deleted successfully');
    return { success: true, message: 'All user data has been deleted' };
  }

  // Clear all cookies
  clearAllCookies() {
    const cookies = document.cookie.split(';');
    cookies.forEach(cookie => {
      const eqPos = cookie.indexOf('=');
      const name = eqPos > -1 ? cookie.substr(0, eqPos).trim() : cookie.trim();
      
      // Don't clear necessary cookies
      if (!this.isNecessaryCookie(name)) {
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${window.location.hostname};`;
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.${window.location.hostname};`;
      }
    });
  }

  // Check if cookie is necessary
  isNecessaryCookie(name) {
    const necessaryCookies = [
      'cookie_consent_given',
      'cookie_consent_version',
      'cookie_consent_timestamp',
      'visitor_id'
    ];
    return necessaryCookies.includes(name);
  }

  // Log data requests for compliance
  logDataRequest(type, visitorId) {
    const request = {
      type: type, // 'export' or 'deletion'
      visitorId: visitorId,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      ipAddress: 'anonymized'
    };

    const requests = JSON.parse(localStorage.getItem('data_requests') || '[]');
    requests.push(request);
    localStorage.setItem('data_requests', JSON.stringify(requests));

    console.log(`Data ${type} request logged:`, request);
  }

  // CCPA Opt-Out
  optOutCCPA() {
    const preferences = {
      necessary: true,
      personalization: false,
      analytics: false,
      advertising: false
    };

    this.savePreferences(preferences);
    localStorage.setItem('ccpa_opt_out', 'true');
    localStorage.setItem('ccpa_opt_out_timestamp', new Date().toISOString());

    // Clear non-necessary cookies
    this.clearNonNecessaryCookies();

    console.log('CCPA opt-out processed');
    return { success: true, message: 'Opt-out request processed' };
  }

  // Update consent (for consent refresh)
  updateConsent(newPreferences) {
    const oldPreferences = { ...this.preferences };
    
    this.savePreferences(newPreferences);
    
    // Log consent update
    const updateEvent = {
      timestamp: new Date().toISOString(),
      oldPreferences: oldPreferences,
      newPreferences: newPreferences,
      updateReason: 'consent_refresh'
    };

    const consentLog = JSON.parse(localStorage.getItem('consent_log') || '[]');
    consentLog.push(updateEvent);
    localStorage.setItem('consent_log', JSON.stringify(consentLog));

    return { success: true, message: 'Consent updated successfully' };
  }

  // Get privacy policy compliance info
  getPrivacyComplianceInfo() {
    return {
      dataController: 'ASPL Fusion',
      contactEmail: 'info@asplfusion.com',
      dataRetentionPeriod: `${this.dataRetentionDays} days`,
      legalBasis: {
        necessary: 'Legitimate interest for website functionality',
        personalization: 'Consent for enhanced user experience',
        analytics: 'Consent for website improvement',
        advertising: 'Consent for personalized advertising'
      },
      userRights: {
        access: 'Right to access personal data',
        rectification: 'Right to correct inaccurate data',
        erasure: 'Right to delete personal data',
        portability: 'Right to data portability',
        objection: 'Right to object to processing',
        restriction: 'Right to restrict processing'
      },
      dataCategories: [
        'Device information',
        'Usage analytics',
        'Preference settings',
        'Interaction data',
        'Location data (if permitted)'
      ],
      thirdPartySharing: [
        'Google Analytics (if enabled)',
        'Facebook Pixel (if enabled)',
        'LinkedIn Insight Tag (if enabled)'
      ]
    };
  }
}

// Create a singleton instance
export const cookieManager = new CookieManager();

// Initialize on page load
if (typeof window !== 'undefined') {
  window.cookieManager = cookieManager;
  cookieManager.initializeServices();
}
