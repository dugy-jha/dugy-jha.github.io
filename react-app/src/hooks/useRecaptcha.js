import { useState, useEffect, useCallback } from 'react';
import { executeRecaptcha, isRecaptchaAvailable, preloadRecaptcha } from '../utils/recaptcha';

export const useRecaptcha = (action = 'submit') => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const checkRecaptcha = () => {
      if (isRecaptchaAvailable()) {
        setIsLoaded(true);
        preloadRecaptcha();
      } else {
        // Retry after a short delay
        setTimeout(checkRecaptcha, 100);
      }
    };

    checkRecaptcha();
  }, []);

  const executeRecaptchaAction = useCallback(async () => {
    if (!isLoaded) {
      throw new Error('reCAPTCHA not loaded');
    }

    setIsLoading(true);
    setError(null);

    try {
      const token = await executeRecaptcha(action);
      return token;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, [isLoaded, action]);

  return {
    isLoaded,
    isLoading,
    error,
    executeRecaptchaAction
  };
};
