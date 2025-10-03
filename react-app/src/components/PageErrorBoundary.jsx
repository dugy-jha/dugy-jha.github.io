import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle, faRedo, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import './ErrorBoundary.css';

class PageErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
    
    // Log error to console in development
    if (import.meta.env.DEV) {
      console.error('PageErrorBoundary caught an error:', error, errorInfo);
    }

    // Track error in analytics
    if (window.gtag) {
      window.gtag('event', 'exception', {
        description: error.toString(),
        fatal: false
      });
    }
  }

  render() {
    if (this.state.hasError) {
      return <PageErrorFallback error={this.state.error} errorInfo={this.state.errorInfo} pageName={this.props.pageName} />;
    }

    return this.props.children;
  }
}

function PageErrorFallback({ error, errorInfo, pageName }) {
  const navigate = useNavigate();

  const handleRetry = () => {
    window.location.reload();
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="error-boundary page-error">
      <div className="error-container">
        <div className="error-icon">
          <FontAwesomeIcon icon={faExclamationTriangle} />
        </div>
        
        <h1>Page Error</h1>
        <p className="error-message">
          {pageName ? `There was an error loading the ${pageName} page.` : 'There was an error loading this page.'}
          <br />
          Our team has been notified and is working to fix this issue.
        </p>
        
        <div className="error-actions">
          <button className="error-button primary" onClick={handleRetry}>
            <FontAwesomeIcon icon={faRedo} />
            Try Again
          </button>
          <button className="error-button secondary" onClick={handleGoBack}>
            <FontAwesomeIcon icon={faArrowLeft} />
            Go Back
          </button>
          <button className="error-button secondary" onClick={handleGoHome}>
            Go Home
          </button>
        </div>
        
        {import.meta.env.DEV && (
          <details className="error-details">
            <summary>Error Details (Development Only)</summary>
            <pre className="error-stack">
              {error && error.toString()}
              {errorInfo && errorInfo.componentStack}
            </pre>
          </details>
        )}
      </div>
    </div>
  );
}

export default PageErrorBoundary;
