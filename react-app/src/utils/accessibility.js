/**
 * Accessibility utilities for improved user experience
 */

// ARIA labels and roles
export const ARIA_LABELS = {
  // Navigation
  MAIN_NAV: 'Main navigation',
  MOBILE_MENU: 'Mobile navigation menu',
  BREADCRUMB: 'Breadcrumb navigation',
  
  // Content
  MAIN_CONTENT: 'Main content',
  HERO_SECTION: 'Hero section',
  FAQ_SECTION: 'Frequently asked questions',
  CONTACT_FORM: 'Contact form',
  NEWSLETTER_FORM: 'Newsletter subscription form',
  
  // Interactive elements
  SEARCH_BUTTON: 'Search',
  MENU_TOGGLE: 'Toggle navigation menu',
  FAQ_TOGGLE: 'Toggle FAQ answer',
  CLOSE_BUTTON: 'Close',
  SUBMIT_BUTTON: 'Submit form',
  
  // Status messages
  LOADING_MESSAGE: 'Loading content',
  ERROR_MESSAGE: 'Error message',
  SUCCESS_MESSAGE: 'Success message',
  WARNING_MESSAGE: 'Warning message'
};

// Keyboard navigation utilities
export const KEYBOARD_NAVIGATION = {
  // Key codes
  ENTER: 13,
  SPACE: 32,
  ESCAPE: 27,
  TAB: 9,
  ARROW_UP: 38,
  ARROW_DOWN: 40,
  ARROW_LEFT: 37,
  ARROW_RIGHT: 39,
  HOME: 36,
  END: 35,
  
  // Key names for modern browsers
  KEYS: {
    ENTER: 'Enter',
    SPACE: ' ',
    ESCAPE: 'Escape',
    TAB: 'Tab',
    ARROW_UP: 'ArrowUp',
    ARROW_DOWN: 'ArrowDown',
    ARROW_LEFT: 'ArrowLeft',
    ARROW_RIGHT: 'ArrowRight',
    HOME: 'Home',
    END: 'End'
  }
};

// Focus management utilities
export const focusManagement = {
  // Trap focus within an element
  trapFocus: (element) => {
    const focusableElements = element.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    const handleTabKey = (e) => {
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement.focus();
            e.preventDefault();
          }
        }
      }
    };

    element.addEventListener('keydown', handleTabKey);
    
    // Return cleanup function
    return () => {
      element.removeEventListener('keydown', handleTabKey);
    };
  },

  // Focus first focusable element
  focusFirst: (element) => {
    const focusableElement = element.querySelector(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    if (focusableElement) {
      focusableElement.focus();
    }
  },

  // Focus last focusable element
  focusLast: (element) => {
    const focusableElements = element.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const lastElement = focusableElements[focusableElements.length - 1];
    if (lastElement) {
      lastElement.focus();
    }
  },

  // Store and restore focus
  storeFocus: () => {
    return document.activeElement;
  },

  restoreFocus: (element) => {
    if (element && typeof element.focus === 'function') {
      element.focus();
    }
  }
};

// Screen reader utilities
export const screenReader = {
  // Announce message to screen readers
  announce: (message, priority = 'polite') => {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', priority);
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    
    // Remove after announcement
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  },

  // Create visually hidden but screen reader accessible element
  createVisuallyHidden: (text) => {
    const element = document.createElement('span');
    element.className = 'sr-only';
    element.textContent = text;
    return element;
  }
};

// Form accessibility utilities
export const formAccessibility = {
  // Add error message to form field
  addErrorMessage: (field, message) => {
    const errorId = `${field.id}-error`;
    let errorElement = document.getElementById(errorId);
    
    if (!errorElement) {
      errorElement = document.createElement('div');
      errorElement.id = errorId;
      errorElement.className = 'error-message';
      errorElement.setAttribute('role', 'alert');
      field.parentNode.appendChild(errorElement);
    }
    
    errorElement.textContent = message;
    field.setAttribute('aria-invalid', 'true');
    field.setAttribute('aria-describedby', errorId);
  },

  // Remove error message from form field
  removeErrorMessage: (field) => {
    const errorId = `${field.id}-error`;
    const errorElement = document.getElementById(errorId);
    
    if (errorElement) {
      errorElement.remove();
    }
    
    field.removeAttribute('aria-invalid');
    field.removeAttribute('aria-describedby');
  },

  // Validate form field accessibility
  validateField: (field, isValid, message) => {
    if (isValid) {
      formAccessibility.removeErrorMessage(field);
    } else {
      formAccessibility.addErrorMessage(field, message);
    }
  }
};

// Skip link utilities
export const skipLinks = {
  // Create skip link
  create: (href, text) => {
    const skipLink = document.createElement('a');
    skipLink.href = href;
    skipLink.textContent = text;
    skipLink.className = 'skip-link';
    skipLink.setAttribute('tabindex', '1');
    return skipLink;
  },

  // Add skip links to page
  addToPage: (links) => {
    const skipLinksContainer = document.createElement('div');
    skipLinksContainer.className = 'skip-links-container';
    
    links.forEach(link => {
      const skipLink = skipLinks.create(link.href, link.text);
      skipLinksContainer.appendChild(skipLink);
    });
    
    document.body.insertBefore(skipLinksContainer, document.body.firstChild);
  }
};

// Color contrast utilities
export const colorContrast = {
  // Check if color combination meets WCAG standards
  checkContrast: (foreground, background) => {
    // This is a simplified version - in production, use a proper contrast checking library
    const getLuminance = (color) => {
      const rgb = color.match(/\d+/g);
      if (!rgb) return 0;
      
      const [r, g, b] = rgb.map(c => {
        c = parseInt(c) / 255;
        return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
      });
      
      return 0.2126 * r + 0.7152 * g + 0.0722 * b;
    };
    
    const l1 = getLuminance(foreground);
    const l2 = getLuminance(background);
    const contrast = (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
    
    return {
      ratio: contrast,
      meetsAA: contrast >= 4.5,
      meetsAAA: contrast >= 7
    };
  }
};

// Initialize accessibility features
export const initializeAccessibility = () => {
  // Add skip links
  skipLinks.addToPage([
    { href: '#main-content', text: 'Skip to main content' },
    { href: '#main-navigation', text: 'Skip to navigation' }
  ]);

  // Add focus indicators for keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      document.body.classList.add('keyboard-navigation');
    }
  });

  document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-navigation');
  });

  // Announce page load to screen readers
  screenReader.announce('Page loaded successfully');
};

export default {
  ARIA_LABELS,
  KEYBOARD_NAVIGATION,
  focusManagement,
  screenReader,
  formAccessibility,
  skipLinks,
  colorContrast,
  initializeAccessibility
};
