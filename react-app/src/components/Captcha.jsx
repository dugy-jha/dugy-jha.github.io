import { useState, useEffect } from 'react';
import '../styles/Captcha.css';

function Captcha({ onVerify, onError }) {
  const [captchaText, setCaptchaText] = useState('');
  const [userInput, setUserInput] = useState('');
  const [isVerified, setIsVerified] = useState(false);
  const [error, setError] = useState('');

  // Generate random captcha text
  const generateCaptcha = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < 5; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptchaText(result);
    setUserInput('');
    setIsVerified(false);
    setError('');
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setUserInput(value);
    setError('');

    if (value.toLowerCase() === captchaText.toLowerCase()) {
      setIsVerified(true);
      onVerify && onVerify(true);
    } else if (value.length === captchaText.length) {
      setIsVerified(false);
      setError('Captcha does not match');
      onError && onError('Captcha does not match');
    }
  };

  const handleRefresh = () => {
    generateCaptcha();
    onVerify && onVerify(false);
  };

  return (
    <div className="captcha-container">
      <div className="captcha-header">
        <label htmlFor="captcha-input">Security Verification *</label>
        <button 
          type="button" 
          className="captcha-refresh" 
          onClick={handleRefresh}
          title="Refresh captcha"
        >
          <i className="fas fa-sync-alt"></i>
        </button>
      </div>
      
      <div className="captcha-display">
        <div className="captcha-text">
          {captchaText.split('').map((char, index) => (
            <span 
              key={index} 
              style={{
                transform: `rotate(${(Math.random() - 0.5) * 30}deg)`,
                color: `hsl(${Math.random() * 360}, 70%, 50%)`,
                fontSize: `${18 + Math.random() * 8}px`,
                fontWeight: Math.random() > 0.5 ? 'bold' : 'normal'
              }}
            >
              {char}
            </span>
          ))}
        </div>
      </div>
      
      <input
        type="text"
        id="captcha-input"
        value={userInput}
        onChange={handleInputChange}
        placeholder="Enter the text above"
        className={`captcha-input ${error ? 'error' : ''} ${isVerified ? 'verified' : ''}`}
        maxLength={5}
      />
      
      {error && <div className="captcha-error">{error}</div>}
      {isVerified && <div className="captcha-success">✓ Verified</div>}
    </div>
  );
}

export default Captcha;
