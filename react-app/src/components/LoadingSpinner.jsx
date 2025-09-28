import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import './LoadingSpinner.css';

function LoadingSpinner({ size = 'medium', text = 'Loading...' }) {
  return (
    <div className={`loading-spinner-container ${size}`}>
      <div className="loading-spinner">
        <FontAwesomeIcon icon={faSpinner} className="spinning" />
      </div>
      {text && <p className="loading-text">{text}</p>}
    </div>
  );
}

export default LoadingSpinner;
