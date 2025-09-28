import React from 'react';
import './SkeletonLoader.css';

function SkeletonLoader({ type = 'text', lines = 3, width = '100%', height = '1rem' }) {
  const renderSkeleton = () => {
    switch (type) {
      case 'text':
        return (
          <div className="skeleton-text">
            {Array.from({ length: lines }).map((_, index) => (
              <div
                key={index}
                className="skeleton-line"
                style={{
                  width: index === lines - 1 ? '75%' : '100%',
                  height: height
                }}
              />
            ))}
          </div>
        );
      
      case 'card':
        return (
          <div className="skeleton-card">
            <div className="skeleton-image" style={{ height: '200px' }} />
            <div className="skeleton-content">
              <div className="skeleton-line" style={{ width: '80%', height: '1.5rem', marginBottom: '0.5rem' }} />
              <div className="skeleton-line" style={{ width: '100%', height: '1rem', marginBottom: '0.5rem' }} />
              <div className="skeleton-line" style={{ width: '60%', height: '1rem' }} />
            </div>
          </div>
        );
      
      case 'avatar':
        return (
          <div className="skeleton-avatar" style={{ width: width, height: height }} />
        );
      
      case 'button':
        return (
          <div className="skeleton-button" style={{ width: width, height: height }} />
        );
      
      case 'image':
        return (
          <div className="skeleton-image" style={{ width: width, height: height }} />
        );
      
      default:
        return (
          <div className="skeleton-line" style={{ width: width, height: height }} />
        );
    }
  };

  return (
    <div className="skeleton-loader">
      {renderSkeleton()}
    </div>
  );
}

// Specific skeleton components for common use cases
export function NewsSkeleton() {
  return (
    <div className="news-skeleton">
      {Array.from({ length: 3 }).map((_, index) => (
        <SkeletonLoader key={index} type="card" />
      ))}
    </div>
  );
}

export function TeamSkeleton() {
  return (
    <div className="team-skeleton">
      {Array.from({ length: 4 }).map((_, index) => (
        <div key={index} className="team-member-skeleton">
          <SkeletonLoader type="avatar" width="120px" height="120px" />
          <div className="member-info-skeleton">
            <SkeletonLoader type="text" lines={2} />
          </div>
        </div>
      ))}
    </div>
  );
}

export function FAQSkeleton() {
  return (
    <div className="faq-skeleton">
      {Array.from({ length: 6 }).map((_, index) => (
        <div key={index} className="faq-item-skeleton">
          <SkeletonLoader type="text" lines={1} height="1.2rem" />
          <SkeletonLoader type="text" lines={2} height="0.9rem" />
        </div>
      ))}
    </div>
  );
}

export default SkeletonLoader;
