// Email Marketing and Lead Nurturing Utilities
class EmailMarketingManager {
  constructor() {
    this.apiKey = import.meta.env.VITE_MAILCHIMP_API_KEY;
    this.listId = import.meta.env.VITE_MAILCHIMP_LIST_ID;
    this.serverPrefix = import.meta.env.VITE_MAILCHIMP_SERVER_PREFIX;
    this.baseUrl = `https://${this.serverPrefix}.api.mailchimp.com/3.0`;
  }

  // Subscribe user to newsletter
  async subscribeToNewsletter(email, tags = [], mergeFields = {}) {
    if (!this.apiKey || !this.listId) {
      console.warn('Email marketing not configured');
      return { success: false, message: 'Email marketing not configured' };
    }

    try {
      const response = await fetch(`${this.baseUrl}/lists/${this.listId}/members`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email_address: email,
          status: 'subscribed',
          tags: tags,
          merge_fields: mergeFields,
          source: 'website'
        })
      });

      if (response.ok) {
        const data = await response.json();
        this.trackNewsletterSubscription(email, 'success');
        return { success: true, data };
      } else {
        const error = await response.json();
        this.trackNewsletterSubscription(email, 'error', error.title);
        return { success: false, message: error.title };
      }
    } catch (error) {
      this.trackNewsletterSubscription(email, 'error', error.message);
      return { success: false, message: error.message };
    }
  }

  // Update subscriber information
  async updateSubscriber(email, mergeFields = {}, tags = []) {
    if (!this.apiKey || !this.listId) return { success: false };

    try {
      const subscriberHash = this.createSubscriberHash(email);
      const response = await fetch(`${this.baseUrl}/lists/${this.listId}/members/${subscriberHash}`, {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          merge_fields: mergeFields,
          tags: tags
        })
      });

      return { success: response.ok };
    } catch (error) {
      return { success: false, message: error.message };
    }
  }

  // Unsubscribe user
  async unsubscribeFromNewsletter(email) {
    if (!this.apiKey || !this.listId) return { success: false };

    try {
      const subscriberHash = this.createSubscriberHash(email);
      const response = await fetch(`${this.baseUrl}/lists/${this.listId}/members/${subscriberHash}`, {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          status: 'unsubscribed'
        })
      });

      return { success: response.ok };
    } catch (error) {
      return { success: false, message: error.message };
    }
  }

  // Create automated email sequences
  async createEmailSequence(sequenceName, emails) {
    // This would integrate with your email marketing platform
    // For now, we'll store in localStorage for demonstration
    const sequences = JSON.parse(localStorage.getItem('email_sequences') || '{}');
    sequences[sequenceName] = {
      name: sequenceName,
      emails: emails,
      createdAt: new Date().toISOString()
    };
    localStorage.setItem('email_sequences', JSON.stringify(sequences));
  }

  // Trigger email sequence
  async triggerEmailSequence(sequenceName, email, delay = 0) {
    const sequences = JSON.parse(localStorage.getItem('email_sequences') || '{}');
    const sequence = sequences[sequenceName];
    
    if (!sequence) return { success: false, message: 'Sequence not found' };

    // Simulate email sending with delays
    sequence.emails.forEach((emailTemplate, index) => {
      setTimeout(() => {
        this.sendEmail(email, emailTemplate);
      }, delay + (index * 24 * 60 * 60 * 1000)); // 24 hours between emails
    });

    return { success: true };
  }

  // Send individual email
  async sendEmail(to, template) {
    // This would integrate with your email service
    console.log('Sending email:', { to, template });
    
    // Track email sending
    if (window.gtag) {
      window.gtag('event', 'email_sent', {
        email_type: template.type,
        recipient: to,
        category: 'Email Marketing'
      });
    }
  }

  // Lead scoring system
  calculateLeadScore(userData) {
    let score = 0;
    
    // Page visits
    score += (userData.pageVisits || 0) * 5;
    
    // Form submissions
    score += (userData.formSubmissions || 0) * 20;
    
    // Time on site
    score += Math.min((userData.timeOnSite || 0) / 60, 50); // Max 50 points
    
    // Newsletter subscription
    if (userData.newsletterSubscribed) score += 30;
    
    // Contact form completion
    if (userData.contactFormCompleted) score += 40;
    
    // Career page visits
    if (userData.careerPageVisited) score += 25;
    
    // Technology page deep engagement
    if (userData.technologyPageTime > 300) score += 35; // 5+ minutes
    
    return Math.min(score, 100); // Cap at 100
  }

  // Track user engagement
  trackEngagement(action, details = {}) {
    const engagement = JSON.parse(localStorage.getItem('user_engagement') || '{}');
    const userId = this.getUserId();
    
    if (!engagement[userId]) {
      engagement[userId] = {
        pageVisits: 0,
        formSubmissions: 0,
        timeOnSite: 0,
        newsletterSubscribed: false,
        contactFormCompleted: false,
        careerPageVisited: false,
        technologyPageTime: 0,
        lastActivity: new Date().toISOString()
      };
    }

    const userData = engagement[userId];
    
    switch (action) {
      case 'page_visit':
        userData.pageVisits++;
        break;
      case 'form_submission':
        userData.formSubmissions++;
        break;
      case 'newsletter_subscribe':
        userData.newsletterSubscribed = true;
        break;
      case 'contact_form_complete':
        userData.contactFormCompleted = true;
        break;
      case 'career_page_visit':
        userData.careerPageVisited = true;
        break;
      case 'technology_page_time':
        userData.technologyPageTime += details.time || 0;
        break;
    }

    userData.lastActivity = new Date().toISOString();
    userData.leadScore = this.calculateLeadScore(userData);
    
    engagement[userId] = userData;
    localStorage.setItem('user_engagement', JSON.stringify(engagement));

    // Send to analytics
    if (window.gtag) {
      window.gtag('event', 'user_engagement', {
        engagement_action: action,
        lead_score: userData.leadScore,
        ...details
      });
    }
  }

  // Get user ID (simple implementation)
  getUserId() {
    let userId = localStorage.getItem('user_id');
    if (!userId) {
      userId = 'user_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
      localStorage.setItem('user_id', userId);
    }
    return userId;
  }

  // Track newsletter subscription
  trackNewsletterSubscription(email, status, error = null) {
    if (window.gtag) {
      window.gtag('event', 'newsletter_subscription', {
        email: email,
        status: status,
        error: error,
        category: 'Email Marketing'
      });
    }
  }

  // Create subscriber hash for Mailchimp
  createSubscriberHash(email) {
    // Simple MD5-like hash (in production, use crypto-js)
    return btoa(email.toLowerCase()).replace(/[^a-zA-Z0-9]/g, '');
  }

  // Get lead insights
  getLeadInsights() {
    const engagement = JSON.parse(localStorage.getItem('user_engagement') || '{}');
    const totalUsers = Object.keys(engagement).length;
    const highValueLeads = Object.values(engagement).filter(user => user.leadScore > 70).length;
    const newsletterSubscribers = Object.values(engagement).filter(user => user.newsletterSubscribed).length;
    
    return {
      totalUsers,
      highValueLeads,
      newsletterSubscribers,
      averageLeadScore: totalUsers > 0 ? 
        Object.values(engagement).reduce((sum, user) => sum + user.leadScore, 0) / totalUsers : 0
    };
  }
}

// Create singleton instance
const emailMarketingManager = new EmailMarketingManager();

export default emailMarketingManager;
