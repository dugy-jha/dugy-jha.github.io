import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCog, 
  faTimes, 
  faSun, 
  faMoon, 
  faCookie, 
  faChartLine, 
  faBullseye, 
  faUser,
  faShield,
  faCheck,
  faTimes as faX
} from '@fortawesome/free-solid-svg-icons';
import { cookieManager } from '../utils/cookieManager';
import './Settings.css';

function Settings({ onConsentChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
  });
  
  // Cookie preferences state
  const [cookiePreferences, setCookiePreferences] = useState(() => {
    return cookieManager.loadPreferences();
  });

  const [showCookieDetails, setShowCookieDetails] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');

  // Initialize theme on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.body.classList.remove('light');
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
      document.body.classList.add('light');
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.remove('light');
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark');
      document.body.classList.add('light');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  // Save cookie preferences
  useEffect(() => {
    cookieManager.savePreferences(cookiePreferences);
  }, [cookiePreferences]);

  // Sync with external consent changes
  useEffect(() => {
    const handleStorageChange = () => {
      const newPreferences = cookieManager.loadPreferences();
      setCookiePreferences(newPreferences);
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const toggleSettings = () => {
    setIsOpen(!isOpen);
  };

  const handleThemeToggle = () => {
    setDarkMode(!darkMode);
  };

  const showNotificationMessage = (message) => {
    setNotificationMessage(message);
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };

  const handleCookieToggle = (type) => {
    if (type === 'necessary') return; // Can't disable necessary cookies
    
    const newPreferences = {
      ...cookiePreferences,
      [type]: !cookiePreferences[type]
    };
    
    setCookiePreferences(newPreferences);
    
    // Show notification
    const action = newPreferences[type] ? 'enabled' : 'disabled';
    showNotificationMessage(`${type} cookies ${action}`);
    
    // Notify parent component of consent change
    if (onConsentChange) {
      onConsentChange(newPreferences);
    }
  };

  const acceptAllCookies = () => {
    const newPreferences = {
      necessary: true,
      personalization: true,
      analytics: true,
      advertising: true
    };
    setCookiePreferences(newPreferences);
    cookieManager.savePreferences(newPreferences);
    
    // Show notification
    showNotificationMessage('All cookies accepted');
    
    // Notify parent component of consent change
    if (onConsentChange) {
      onConsentChange(newPreferences);
    }
  };

  const rejectAllCookies = () => {
    const newPreferences = {
      necessary: true,
      personalization: false,
      analytics: false,
      advertising: false
    };
    setCookiePreferences(newPreferences);
    cookieManager.savePreferences(newPreferences);
    cookieManager.clearNonNecessaryCookies();
    
    // Show notification
    showNotificationMessage('Non-necessary cookies rejected');
    
    // Notify parent component of consent change
    if (onConsentChange) {
      onConsentChange(newPreferences);
    }
  };

  const cookieTypes = [
    {
      id: 'necessary',
      name: 'Necessary Cookies',
      description: 'Essential for website functionality and security',
      icon: faShield,
      required: true,
      details: 'These cookies are essential for the website to function properly. They include session management, security features, and basic functionality.'
    },
    {
      id: 'personalization',
      name: 'Personalization',
      description: 'Remember your preferences and settings',
      icon: faUser,
      required: false,
      details: 'These cookies help us remember your preferences, such as language settings, theme choices, and personalized content recommendations.'
    },
    {
      id: 'analytics',
      name: 'Analytics',
      description: 'Help us understand how you use our website',
      icon: faChartLine,
      required: false,
      details: 'These cookies collect anonymous information about how visitors use our website, helping us improve performance and user experience.'
    },
    {
      id: 'advertising',
      name: 'Targeted Advertising',
      description: 'Show you relevant ads and measure ad performance',
      icon: faBullseye,
      required: false,
      details: 'These cookies are used to deliver personalized advertisements and measure the effectiveness of our advertising campaigns.'
    }
  ];

  return (
    <>
      <button 
        className="settings-toggle"
        onClick={toggleSettings}
        aria-label="Open settings"
      >
        <FontAwesomeIcon icon={faCog} />
      </button>

      {isOpen && (
        <div className="settings-overlay" onClick={toggleSettings}>
          <div className="settings-panel" onClick={(e) => e.stopPropagation()}>
            <div className="settings-header">
              <h3>Site Settings & Privacy</h3>
              <button 
                className="settings-close"
                onClick={toggleSettings}
                aria-label="Close settings"
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>

            <div className="settings-content">
              {/* Theme Setting */}
              <div className="settings-section">
                <h4 className="section-title">Appearance</h4>
                <div className="setting-item">
                  <div className="setting-info">
                    <div className="setting-icon theme-icon">
                      <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
                    </div>
                    <div className="setting-details">
                      <h5>Theme</h5>
                      <p>Choose your preferred color scheme</p>
                    </div>
                  </div>
                  <div className="setting-control">
                    <button 
                      className={`theme-toggle ${darkMode ? 'active' : ''}`}
                      onClick={handleThemeToggle}
                      aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
                    >
                      <span className="toggle-slider"></span>
                    </button>
                  </div>
                </div>
              </div>

                    {/* Cookie Settings */}
                    <div className="settings-section">
                      <div className="section-header">
                        <h4 className="section-title">Cookie Preferences</h4>
                        <div className="consent-status">
                          <span className={`status-indicator ${Object.values(cookiePreferences).filter(Boolean).length > 1 ? 'active' : 'inactive'}`}>
                            {Object.values(cookiePreferences).filter(Boolean).length > 1 ? 'Active' : 'Minimal'}
                          </span>
                          <button 
                            className="details-toggle"
                            onClick={() => setShowCookieDetails(!showCookieDetails)}
                          >
                            {showCookieDetails ? 'Hide Details' : 'Show Details'}
                          </button>
                        </div>
                      </div>

                <div className="cookie-summary">
                  <div className="cookie-stats">
                    <div className="stat-item">
                      <span className="stat-number">
                        {Object.values(cookiePreferences).filter(Boolean).length}
                      </span>
                      <span className="stat-label">Enabled</span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-number">
                        {Object.values(cookiePreferences).filter(v => !v).length}
                      </span>
                      <span className="stat-label">Disabled</span>
                    </div>
                  </div>
                  
                  <div className="cookie-actions">
                    <button className="accept-all-btn" onClick={acceptAllCookies}>
                      <FontAwesomeIcon icon={faCheck} />
                      Accept All
                    </button>
                    <button className="reject-all-btn" onClick={rejectAllCookies}>
                      <FontAwesomeIcon icon={faX} />
                      Reject All
                    </button>
                  </div>
                </div>

                {showCookieDetails && (
                  <div className="cookie-details">
                    {cookieTypes.map((cookie) => (
                      <div key={cookie.id} className="cookie-item">
                        <div className="cookie-header">
                          <div className="cookie-info">
                            <div className="cookie-icon">
                              <FontAwesomeIcon icon={cookie.icon} />
                            </div>
                            <div className="cookie-details-text">
                              <h6>{cookie.name}</h6>
                              <p>{cookie.description}</p>
                            </div>
                          </div>
                          <div className="cookie-control">
                            <button 
                              className={`cookie-toggle ${cookiePreferences[cookie.id] ? 'active' : ''} ${cookie.required ? 'required' : ''}`}
                              onClick={() => handleCookieToggle(cookie.id)}
                              disabled={cookie.required}
                              aria-label={`${cookiePreferences[cookie.id] ? 'Disable' : 'Enable'} ${cookie.name}`}
                            >
                              <span className="toggle-slider"></span>
                            </button>
                          </div>
                        </div>
                        <div className="cookie-description">
                          <p>{cookie.details}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="settings-footer">
                <p className="settings-note">
                  <FontAwesomeIcon icon={faShield} />
                  Your preferences are saved locally and will persist across sessions. 
                  You can change these settings at any time.
                </p>
              </div>
            </div>
          </div>
        </div>
            )}

            {/* Notification */}
            {showNotification && (
              <div className="settings-notification">
                <FontAwesomeIcon icon={faCheck} />
                <span>{notificationMessage}</span>
              </div>
            )}
          </>
        );
      }

      export default Settings;
