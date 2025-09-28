// Service Worker Registration and Management
class ServiceWorkerManager {
  constructor() {
    this.registration = null;
    this.isSupported = 'serviceWorker' in navigator;
  }

  async register() {
    if (!this.isSupported) {
      console.log('Service Worker not supported');
      return false;
    }

    // Disable service worker in development
    if (import.meta.env.DEV) {
      console.log('Service Worker disabled in development');
      // Unregister any existing service workers
      const registrations = await navigator.serviceWorker.getRegistrations();
      for (let registration of registrations) {
        await registration.unregister();
      }
      return false;
    }

    try {
      this.registration = await navigator.serviceWorker.register('/sw.js', {
        scope: '/'
      });

      console.log('Service Worker registered successfully:', this.registration);

      // Handle updates
      this.registration.addEventListener('updatefound', () => {
        const newWorker = this.registration.installing;
        
        newWorker.addEventListener('statechange', () => {
          if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
            // New content is available, show update notification
            this.showUpdateNotification();
          }
        });
      });

      return true;
    } catch (error) {
      console.error('Service Worker registration failed:', error);
      return false;
    }
  }

  showUpdateNotification() {
    // Create a custom update notification
    const notification = document.createElement('div');
    notification.className = 'update-notification';
    notification.innerHTML = `
      <div class="update-content">
        <div class="update-icon">🔄</div>
        <div class="update-text">
          <h4>New Version Available</h4>
          <p>A new version of the website is available. Refresh to update.</p>
        </div>
        <div class="update-actions">
          <button class="update-button primary" onclick="this.updateApp()">Update Now</button>
          <button class="update-button secondary" onclick="this.dismissUpdate()">Later</button>
        </div>
      </div>
    `;

    // Add styles
    const style = document.createElement('style');
    style.textContent = `
      .update-notification {
        position: fixed;
        top: 20px;
        right: 20px;
        background: rgba(0, 85, 196, 0.95);
        color: white;
        padding: 1rem;
        border-radius: 12px;
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
        z-index: 10000;
        max-width: 400px;
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        animation: slideIn 0.3s ease-out;
      }
      
      .update-content {
        display: flex;
        align-items: center;
        gap: 1rem;
      }
      
      .update-icon {
        font-size: 1.5rem;
        animation: spin 2s linear infinite;
      }
      
      .update-text h4 {
        margin: 0 0 0.25rem 0;
        font-size: 1rem;
        font-weight: 600;
      }
      
      .update-text p {
        margin: 0;
        font-size: 0.85rem;
        opacity: 0.9;
      }
      
      .update-actions {
        display: flex;
        gap: 0.5rem;
        margin-left: auto;
      }
      
      .update-button {
        padding: 0.5rem 1rem;
        border: none;
        border-radius: 6px;
        font-size: 0.8rem;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.2s ease;
      }
      
      .update-button.primary {
        background: white;
        color: #0055c4;
      }
      
      .update-button.primary:hover {
        background: #f0f0f0;
      }
      
      .update-button.secondary {
        background: rgba(255, 255, 255, 0.2);
        color: white;
      }
      
      .update-button.secondary:hover {
        background: rgba(255, 255, 255, 0.3);
      }
      
      @keyframes slideIn {
        from {
          transform: translateX(100%);
          opacity: 0;
        }
        to {
          transform: translateX(0);
          opacity: 1;
        }
      }
      
      @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
      
      @media (max-width: 768px) {
        .update-notification {
          top: 10px;
          right: 10px;
          left: 10px;
          max-width: none;
        }
        
        .update-content {
          flex-direction: column;
          text-align: center;
        }
        
        .update-actions {
          margin-left: 0;
          justify-content: center;
        }
      }
    `;

    document.head.appendChild(style);
    document.body.appendChild(notification);

    // Add event listeners
    notification.querySelector('.update-button.primary').onclick = () => this.updateApp();
    notification.querySelector('.update-button.secondary').onclick = () => this.dismissUpdate(notification);

    // Auto-dismiss after 10 seconds
    setTimeout(() => {
      this.dismissUpdate(notification);
    }, 10000);
  }

  updateApp() {
    if (this.registration && this.registration.waiting) {
      this.registration.waiting.postMessage({ type: 'SKIP_WAITING' });
      window.location.reload();
    }
  }

  dismissUpdate(notification) {
    if (notification) {
      notification.remove();
    }
  }

  async unregister() {
    if (this.registration) {
      await this.registration.unregister();
      console.log('Service Worker unregistered');
    }
  }

  // Check for updates
  async checkForUpdates() {
    if (this.registration) {
      await this.registration.update();
    }
  }

  // Get service worker version
  async getVersion() {
    return new Promise((resolve) => {
      if (navigator.serviceWorker.controller) {
        const messageChannel = new MessageChannel();
        messageChannel.port1.onmessage = (event) => {
          resolve(event.data.version);
        };
        navigator.serviceWorker.controller.postMessage(
          { type: 'GET_VERSION' },
          [messageChannel.port2]
        );
      } else {
        resolve('No service worker');
      }
    });
  }
}

// Create singleton instance
const serviceWorkerManager = new ServiceWorkerManager();

export default serviceWorkerManager;
