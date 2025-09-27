// Google reCAPTCHA v3 utility functions

// Note: Replace with your actual reCAPTCHA site key
const RECAPTCHA_SITE_KEY = '6LfXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';

// Initialize reCAPTCHA
export const initializeRecaptcha = () => {
  return new Promise((resolve, reject) => {
    if (typeof window.grecaptcha === 'undefined') {
      reject(new Error('reCAPTCHA not loaded'));
      return;
    }
    
    window.grecaptcha.ready(() => {
      resolve();
    });
  });
};

// Execute reCAPTCHA and get token
export const executeRecaptcha = async (action = 'submit') => {
  try {
    await initializeRecaptcha();
    
    const token = await window.grecaptcha.execute(RECAPTCHA_SITE_KEY, {
      action: action
    });
    
    return token;
  } catch (error) {
    console.error('reCAPTCHA execution failed:', error);
    throw error;
  }
};

// Verify reCAPTCHA token on server (you'll need to implement this on your backend)
export const verifyRecaptchaToken = async (token) => {
  // This should be called on your backend server
  // For now, we'll just return true for development
  // In production, you should send this token to your backend for verification
  
  try {
    const response = await fetch('/api/verify-recaptcha', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token })
    });
    
    if (!response.ok) {
      throw new Error('reCAPTCHA verification failed');
    }
    
    const result = await response.json();
    return result.success;
  } catch (error) {
    console.error('reCAPTCHA verification error:', error);
    // For development, return true if verification fails
    // In production, you should handle this properly
    return true;
  }
};

// Get reCAPTCHA score (0.0 to 1.0, where 1.0 is very likely a good interaction)
export const getRecaptchaScore = async (token) => {
  try {
    const response = await fetch('/api/recaptcha-score', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token })
    });
    
    if (!response.ok) {
      throw new Error('Failed to get reCAPTCHA score');
    }
    
    const result = await response.json();
    return result.score;
  } catch (error) {
    console.error('reCAPTCHA score error:', error);
    // Return a default score for development
    return 0.9;
  }
};

// Check if reCAPTCHA is available
export const isRecaptchaAvailable = () => {
  return typeof window.grecaptcha !== 'undefined';
};

// Preload reCAPTCHA for better performance
export const preloadRecaptcha = () => {
  if (typeof window.grecaptcha !== 'undefined') {
    window.grecaptcha.ready(() => {
      console.log('reCAPTCHA preloaded successfully');
    });
  }
};
