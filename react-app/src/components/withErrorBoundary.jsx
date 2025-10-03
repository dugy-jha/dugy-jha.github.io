import React from 'react';
import PageErrorBoundary from './PageErrorBoundary';

/**
 * Higher-order component that wraps a page component with an error boundary
 * @param {React.Component} WrappedComponent - The component to wrap
 * @param {string} pageName - The name of the page for error messages
 * @returns {React.Component} - The wrapped component with error boundary
 */
const withErrorBoundary = (WrappedComponent, pageName) => {
  const WithErrorBoundaryComponent = (props) => {
    return (
      <PageErrorBoundary pageName={pageName}>
        <WrappedComponent {...props} />
      </PageErrorBoundary>
    );
  };

  // Set display name for debugging
  WithErrorBoundaryComponent.displayName = `withErrorBoundary(${WrappedComponent.displayName || WrappedComponent.name})`;

  return WithErrorBoundaryComponent;
};

export default withErrorBoundary;
