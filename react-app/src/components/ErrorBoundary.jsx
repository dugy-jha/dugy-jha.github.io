import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle, faRedo, faHome } from '@fortawesome/free-solid-svg-icons';
import './ErrorBoundary.css';

class ErrorBoundary extends React.Component {
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
    if (process.env.NODE_ENV === 'development') {
      console.error('ErrorBoundary caught an error:', error, errorInfo);
    }
  }

  render() {
    if (this.state.hasError) {
      return <ErrorFallback error={this.state.error} errorInfo={this.state.errorInfo} />;
    }

    return this.props.children;
  }
}

function ErrorFallback({ error, errorInfo }) {
  const handleRetry = () => {
    window.location.reload();
  };

  const handleGoHome = () => {
    window.location.href = '/';
  };

  return (
    <div className="error-boundary">
      <div className="error-container">
        <div className="error-icon">
          <FontAwesomeIcon icon={faExclamationTriangle} />
        </div>
        
        <h1>Something went wrong</h1>
        <p className="error-message">
          We're sorry, but something unexpected happened. Our team has been notified and is working to fix this issue.
        </p>
        
        <div className="error-actions">
          <button className="error-button primary" onClick={handleRetry}>
            <FontAwesomeIcon icon={faRedo} />
            Try Again
          </button>
          <button className="error-button secondary" onClick={handleGoHome}>
            <FontAwesomeIcon icon={faHome} />
            Go Home
          </button>
        </div>
        
        {process.env.NODE_ENV === 'development' && (
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

export default ErrorBoundary;
