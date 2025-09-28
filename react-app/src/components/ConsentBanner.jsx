import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCookie, 
  faShield, 
  faCog, 
  faTimes,
  faCheck,
  faExclamationTriangle,
  faInfoCircle
} from '@fortawesome/free-solid-svg-icons';
import { cookieManager } from '../utils/cookieManager';
import './ConsentBanner.css';

function ConsentBanner({ onConsentChange }) {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [consentGiven, setConsentGiven] = useState(false);

  useEffect(() => {
    // Check if consent has been given
    const hasConsent = localStorage.getItem('cookie_consent_given');
    if (!hasConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    const preferences = {
      necessary: true,
      personalization: true,
      analytics: true,
      advertising: true
    };
    
    cookieManager.savePreferences(preferences);
    localStorage.setItem('cookie_consent_given', 'true');
    localStorage.setItem('cookie_consent_timestamp', new Date().toISOString());
    localStorage.setItem('cookie_consent_version', '1.0');
    
    setConsentGiven(true);
    setIsVisible(false);
    
    // Initialize all services
    cookieManager.initializeServices(preferences);
    
    // Notify parent component of consent change
    if (onConsentChange) {
      onConsentChange(preferences);
    }
  };

  const handleRejectAll = () => {
    const preferences = {
      necessary: true,
      personalization: false,
      analytics: false,
      advertising: false
    };
    
    cookieManager.savePreferences(preferences);
    localStorage.setItem('cookie_consent_given', 'true');
    localStorage.setItem('cookie_consent_timestamp', new Date().toISOString());
    localStorage.setItem('cookie_consent_version', '1.0');
    
    setConsentGiven(true);
    setIsVisible(false);
    
    // Clear non-necessary cookies
    cookieManager.clearNonNecessaryCookies();
    
    // Notify parent component of consent change
    if (onConsentChange) {
      onConsentChange(preferences);
    }
  };

  const handleCustomize = () => {
    setShowDetails(true);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Consent Banner */}
      <div className="consent-banner">
        <div className="consent-banner-content">
          <div className="consent-banner-header">
            <div className="consent-icon">
              <FontAwesomeIcon icon={faCookie} />
            </div>
            <div className="consent-text">
              <h3>Cookie Consent</h3>
              <p>
                We use cookies to enhance your browsing experience, serve personalized content, 
                and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
              </p>
            </div>
            <button 
              className="consent-close"
              onClick={handleClose}
              aria-label="Close cookie banner"
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
          
          <div className="consent-banner-actions">
            <button 
              className="consent-btn consent-btn-reject"
              onClick={handleRejectAll}
            >
              <FontAwesomeIcon icon={faTimes} />
              Reject All
            </button>
            <button 
              className="consent-btn consent-btn-customize"
              onClick={handleCustomize}
            >
              <FontAwesomeIcon icon={faCog} />
              Customize
            </button>
            <button 
              className="consent-btn consent-btn-accept"
              onClick={handleAcceptAll}
            >
              <FontAwesomeIcon icon={faCheck} />
              Accept All
            </button>
          </div>
          
          <div className="consent-banner-footer">
            <p>
              <FontAwesomeIcon icon={faInfoCircle} />
              Learn more in our{' '}
              <a href="/privacy" target="_blank" rel="noopener noreferrer">
                Privacy Policy
              </a>
              {' '}and{' '}
              <a href="/terms" target="_blank" rel="noopener noreferrer">
                Terms of Service
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Detailed Consent Modal */}
      {showDetails && (
        <div className="consent-modal-overlay" onClick={() => setShowDetails(false)}>
          <div className="consent-modal" onClick={(e) => e.stopPropagation()}>
            <div className="consent-modal-header">
              <h2>Cookie Preferences</h2>
              <button 
                className="consent-modal-close"
                onClick={() => setShowDetails(false)}
                aria-label="Close cookie preferences"
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>
            
            <div className="consent-modal-content">
              <div className="consent-intro">
                <p>
                  We use different types of cookies to optimize your experience on our website. 
                  You can choose which categories you want to allow. Please note that disabling 
                  certain cookies may affect the functionality of the website.
                </p>
              </div>

              <CookieCategory 
                id="necessary"
                title="Necessary Cookies"
                description="These cookies are essential for the website to function properly. They cannot be disabled."
                icon={faShield}
                required={true}
                enabled={true}
              />

              <CookieCategory 
                id="personalization"
                title="Personalization Cookies"
                description="These cookies remember your preferences and settings to provide a personalized experience."
                icon={faCog}
                required={false}
                enabled={false}
              />

              <CookieCategory 
                id="analytics"
                title="Analytics Cookies"
                description="These cookies help us understand how visitors interact with our website by collecting anonymous information."
                icon={faInfoCircle}
                required={false}
                enabled={false}
              />

              <CookieCategory 
                id="advertising"
                title="Advertising Cookies"
                description="These cookies are used to deliver personalized advertisements and measure ad performance."
                icon={faCookie}
                required={false}
                enabled={false}
              />

              <div className="consent-warning">
                <FontAwesomeIcon icon={faExclamationTriangle} />
                <p>
                  <strong>Important:</strong> Some cookies are essential for the website to function. 
                  Disabling certain cookies may limit your ability to use some features.
                </p>
              </div>
            </div>
            
            <div className="consent-modal-footer">
              <button 
                className="consent-btn consent-btn-reject"
                onClick={handleRejectAll}
              >
                <FontAwesomeIcon icon={faTimes} />
                Reject All
              </button>
              <button 
                className="consent-btn consent-btn-accept"
                onClick={handleAcceptAll}
              >
                <FontAwesomeIcon icon={faCheck} />
                Accept All
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function CookieCategory({ id, title, description, icon, required, enabled }) {
  const [isEnabled, setIsEnabled] = useState(enabled);

  const handleToggle = () => {
    if (required) return;
    setIsEnabled(!isEnabled);
  };

  return (
    <div className={`cookie-category ${required ? 'required' : ''}`}>
      <div className="cookie-category-header">
        <div className="cookie-category-info">
          <div className="cookie-category-icon">
            <FontAwesomeIcon icon={icon} />
          </div>
          <div className="cookie-category-text">
            <h4>{title}</h4>
            <p>{description}</p>
          </div>
        </div>
        <div className="cookie-category-control">
          <button 
            className={`cookie-toggle ${isEnabled ? 'active' : ''} ${required ? 'required' : ''}`}
            onClick={handleToggle}
            disabled={required}
            aria-label={`${isEnabled ? 'Disable' : 'Enable'} ${title}`}
          >
            <span className="toggle-slider"></span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConsentBanner;
