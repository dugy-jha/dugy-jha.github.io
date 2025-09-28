import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faShield, 
  faDownload, 
  faTrash, 
  faUserShield,
  faEye,
  faLock,
  faCog,
  faChartLine,
  faBullseye,
  faInfoCircle,
  faCheckCircle,
  faExclamationTriangle,
  faGavel,
  faDatabase,
  faHandshake
} from '@fortawesome/free-solid-svg-icons';
import { cookieManager } from '../utils/cookieManager';
import '../styles/Privacy.css';

function Privacy() {
  const [complianceInfo, setComplianceInfo] = useState(null);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    setComplianceInfo(cookieManager.getPrivacyComplianceInfo());
    setUserData(cookieManager.getVisitorInsights());
  }, []);

  const handleDataExport = () => {
    const data = cookieManager.exportUserData();
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `aspl-fusion-data-export-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleDataDeletion = () => {
    if (window.confirm('⚠️ PERMANENT ACTION: This will delete ALL your personal data from our systems. This action cannot be undone. Are you absolutely sure?')) {
      const result = cookieManager.deleteUserData();
      alert(`✅ ${result.message}`);
      window.location.reload();
    }
  };

  const handleCCPAOptOut = () => {
    const result = cookieManager.optOutCCPA();
    alert(`✅ ${result.message}`);
    window.location.reload();
  };

  return (
    <div className="privacy-page">
      <div className="container">
        <div className="privacy-header">
          <div className="privacy-icon">
            <FontAwesomeIcon icon={faShield} />
          </div>
          <h1>Privacy Policy & Data Protection</h1>
          <p className="privacy-subtitle">
            <strong>ASPL Fusion</strong> is committed to protecting your privacy and personal data. 
            This policy outlines our data practices, your rights, and how we ensure compliance with global privacy regulations.
          </p>
          <div className="compliance-badges">
            <div className="compliance-badge">
              <FontAwesomeIcon icon={faCheckCircle} />
              <span>GDPR Compliant</span>
            </div>
            <div className="compliance-badge">
              <FontAwesomeIcon icon={faCheckCircle} />
              <span>CCPA Compliant</span>
            </div>
            <div className="compliance-badge">
              <FontAwesomeIcon icon={faCheckCircle} />
              <span>ISO 27001</span>
            </div>
          </div>
        </div>

        <div className="privacy-content">
          {/* Executive Summary */}
          <section className="privacy-section executive-summary">
            <h2>
              <FontAwesomeIcon icon={faGavel} />
              Executive Summary
            </h2>
            <div className="summary-grid">
              <div className="summary-item">
                <FontAwesomeIcon icon={faShield} />
                <h4>Data Protection</h4>
                <p>We implement enterprise-grade security measures to protect your personal information.</p>
              </div>
              <div className="summary-item">
                <FontAwesomeIcon icon={faHandshake} />
                <h4>Transparency</h4>
                <p>We clearly communicate what data we collect and how we use it.</p>
              </div>
              <div className="summary-item">
                <FontAwesomeIcon icon={faUserShield} />
                <h4>Your Rights</h4>
                <p>You have complete control over your personal data with easy-to-use tools.</p>
              </div>
            </div>
          </section>

          {/* Data Controller Information */}
          <section className="privacy-section">
            <h2>
              <FontAwesomeIcon icon={faUserShield} />
              Data Controller & Contact Information
            </h2>
            <div className="info-card">
              <div className="controller-info">
                <div className="controller-details">
                  <h4>ASPL Fusion Private Limited</h4>
                  <p><strong>Data Protection Officer:</strong> info@asplfusion.com</p>
                  <p><strong>Registered Address:</strong> 102 Mercantile House, 15 KG Marg, New Delhi 110001, India</p>
                  <p><strong>Data Retention Period:</strong> {complianceInfo?.dataRetentionPeriod}</p>
                  <p><strong>Response Time:</strong> We respond to all privacy requests within 72 hours</p>
                </div>
                <div className="controller-badges">
                  <div className="badge">
                    <FontAwesomeIcon icon={faCheckCircle} />
                    <span>Registered in India</span>
                  </div>
                  <div className="badge">
                    <FontAwesomeIcon icon={faCheckCircle} />
                    <span>Privacy by Design</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Legal Basis */}
          <section className="privacy-section">
            <h2>
              <FontAwesomeIcon icon={faLock} />
              Legal Basis for Data Processing
            </h2>
            <div className="legal-notice">
              <FontAwesomeIcon icon={faExclamationTriangle} />
              <p><strong>Important:</strong> We only process your personal data when we have a valid legal basis under GDPR Article 6.</p>
            </div>
            <div className="legal-basis-grid">
              <div className="legal-basis-item essential">
                <div className="legal-basis-icon">
                  <FontAwesomeIcon icon={faShield} />
                </div>
                <h4>Essential Services</h4>
                <p><strong>Legal Basis:</strong> Legitimate Interest</p>
                <p>Required for website functionality, security, and fraud prevention. Cannot be disabled.</p>
              </div>
              <div className="legal-basis-item consent">
                <div className="legal-basis-icon">
                  <FontAwesomeIcon icon={faCog} />
                </div>
                <h4>Personalization</h4>
                <p><strong>Legal Basis:</strong> Consent</p>
                <p>Remember your preferences and customize your experience. You can opt-out anytime.</p>
              </div>
              <div className="legal-basis-item consent">
                <div className="legal-basis-icon">
                  <FontAwesomeIcon icon={faChartLine} />
                </div>
                <h4>Analytics</h4>
                <p><strong>Legal Basis:</strong> Consent</p>
                <p>Help us improve our website performance and user experience. Anonymous data only.</p>
              </div>
              <div className="legal-basis-item consent">
                <div className="legal-basis-icon">
                  <FontAwesomeIcon icon={faBullseye} />
                </div>
                <h4>Marketing</h4>
                <p><strong>Legal Basis:</strong> Consent</p>
                <p>Show relevant content and advertisements. You have full control over this data.</p>
              </div>
            </div>
          </section>

          {/* Data Categories */}
          <section className="privacy-section">
            <h2>
              <FontAwesomeIcon icon={faDatabase} />
              Personal Data We Collect
            </h2>
            <div className="data-overview">
              <p>We collect only the minimum data necessary to provide our services and improve your experience.</p>
            </div>
            <div className="data-categories">
              {complianceInfo?.dataCategories.map((category, index) => (
                <div key={index} className="data-category-item">
                  <FontAwesomeIcon icon={faEye} />
                  <span>{category}</span>
                </div>
              ))}
            </div>
            <div className="data-minimization">
              <FontAwesomeIcon icon={faCheckCircle} />
              <p><strong>Data Minimization:</strong> We only collect data that is directly relevant and necessary for our stated purposes.</p>
            </div>
          </section>

          {/* Third Party Sharing */}
          <section className="privacy-section">
            <h2>
              <FontAwesomeIcon icon={faShield} />
              Data Sharing & Third Parties
            </h2>
            <div className="sharing-notice">
              <FontAwesomeIcon icon={faExclamationTriangle} />
              <p><strong>We do not sell your personal data.</strong> We only share data with trusted partners under strict agreements.</p>
            </div>
            <div className="third-party-list">
              {complianceInfo?.thirdPartySharing.map((party, index) => (
                <div key={index} className="third-party-item">
                  <FontAwesomeIcon icon={faHandshake} />
                  <span>{party}</span>
                </div>
              ))}
            </div>
          </section>

          {/* User Rights */}
          <section className="privacy-section">
            <h2>
              <FontAwesomeIcon icon={faUserShield} />
              Your Data Rights
            </h2>
            <div className="rights-intro">
              <p><strong>You have complete control over your personal data.</strong> Under GDPR and other privacy laws, you have the following rights:</p>
            </div>
            <div className="user-rights-grid">
              <div className="user-right-item">
                <div className="right-icon">
                  <FontAwesomeIcon icon={faEye} />
                </div>
                <h4>Right to Access</h4>
                <p>Request a copy of all personal data we hold about you. <strong>Response time: 30 days</strong></p>
              </div>
              <div className="user-right-item">
                <div className="right-icon">
                  <FontAwesomeIcon icon={faCog} />
                </div>
                <h4>Right to Rectification</h4>
                <p>Correct any inaccurate or incomplete personal data. <strong>Response time: 30 days</strong></p>
              </div>
              <div className="user-right-item">
                <div className="right-icon">
                  <FontAwesomeIcon icon={faTrash} />
                </div>
                <h4>Right to Erasure</h4>
                <p>Request deletion of your personal data. <strong>Response time: 30 days</strong></p>
              </div>
              <div className="user-right-item">
                <div className="right-icon">
                  <FontAwesomeIcon icon={faDownload} />
                </div>
                <h4>Right to Portability</h4>
                <p>Receive your data in a structured, machine-readable format. <strong>Response time: 30 days</strong></p>
              </div>
              <div className="user-right-item">
                <div className="right-icon">
                  <FontAwesomeIcon icon={faExclamationTriangle} />
                </div>
                <h4>Right to Object</h4>
                <p>Object to processing of your data for marketing or legitimate interests. <strong>Immediate effect</strong></p>
              </div>
              <div className="user-right-item">
                <div className="right-icon">
                  <FontAwesomeIcon icon={faLock} />
                </div>
                <h4>Right to Restrict</h4>
                <p>Limit how we process your data in certain circumstances. <strong>Response time: 30 days</strong></p>
              </div>
            </div>
            <div className="rights-notice">
              <FontAwesomeIcon icon={faInfoCircle} />
              <p><strong>How to Exercise Your Rights:</strong> Contact us at info@asplfusion.com or use the tools below. We will respond within the legal timeframes.</p>
            </div>
          </section>

          {/* Data Actions */}
          <section className="privacy-section">
            <h2>
              <FontAwesomeIcon icon={faCog} />
              Data Management Tools
            </h2>
            <div className="tools-intro">
              <p><strong>Take immediate action on your personal data.</strong> Use these tools to exercise your privacy rights instantly.</p>
            </div>
            <div className="data-actions">
              <div className="data-action-card primary">
                <div className="data-action-icon">
                  <FontAwesomeIcon icon={faDownload} />
                </div>
                <div className="data-action-content">
                  <h4>Export Your Data</h4>
                  <p>Download a complete copy of all your personal data in machine-readable JSON format. Includes all data categories and processing activities.</p>
                  <div className="action-details">
                    <span className="detail-item">✓ Complete data export</span>
                    <span className="detail-item">✓ JSON format</span>
                    <span className="detail-item">✓ Instant download</span>
                  </div>
                  <button 
                    className="data-action-btn export-btn"
                    onClick={handleDataExport}
                  >
                    <FontAwesomeIcon icon={faDownload} />
                    Export All Data
                  </button>
                </div>
              </div>

              <div className="data-action-card warning">
                <div className="data-action-icon">
                  <FontAwesomeIcon icon={faTrash} />
                </div>
                <div className="data-action-content">
                  <h4>Delete All Data</h4>
                  <p>Permanently remove all your personal data from our systems. This action cannot be undone and will affect your account access.</p>
                  <div className="action-details">
                    <span className="detail-item warning">⚠️ Permanent deletion</span>
                    <span className="detail-item warning">⚠️ Account impact</span>
                    <span className="detail-item warning">⚠️ Cannot be undone</span>
                  </div>
                  <button 
                    className="data-action-btn delete-btn"
                    onClick={handleDataDeletion}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                    Delete All Data
                  </button>
                </div>
              </div>

              <div className="data-action-card secondary">
                <div className="data-action-icon">
                  <FontAwesomeIcon icon={faUserShield} />
                </div>
                <div className="data-action-content">
                  <h4>CCPA Opt-Out</h4>
                  <p>Opt out of any sale or sharing of your personal information. Available to all users, with special protections for California residents.</p>
                  <div className="action-details">
                    <span className="detail-item">✓ Immediate effect</span>
                    <span className="detail-item">✓ California rights</span>
                    <span className="detail-item">✓ No data sale</span>
                  </div>
                  <button 
                    className="data-action-btn optout-btn"
                    onClick={handleCCPAOptOut}
                  >
                    <FontAwesomeIcon icon={faUserShield} />
                    Opt Out of Data Sale
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Current Data Status */}
          {userData && (
            <section className="privacy-section">
              <h2>
                <FontAwesomeIcon icon={faDatabase} />
                Your Current Data Status
              </h2>
              <div className="status-intro">
                <p><strong>Real-time view of your data:</strong> This shows the current state of your personal data in our systems.</p>
              </div>
              <div className="data-status">
                <div className="status-item">
                  <span className="status-label">Visitor ID:</span>
                  <span className="status-value">{userData.visitorId}</span>
                </div>
                <div className="status-item">
                  <span className="status-label">Session ID:</span>
                  <span className="status-value">{userData.sessionId}</span>
                </div>
                <div className="status-item">
                  <span className="status-label">Active Preferences:</span>
                  <span className="status-value">
                    {Object.entries(userData.preferences)
                      .filter(([_, enabled]) => enabled)
                      .map(([key, _]) => key)
                      .join(', ') || 'None enabled'}
                  </span>
                </div>
                <div className="status-item">
                  <span className="status-label">Last Updated:</span>
                  <span className="status-value">
                    {new Date(userData.timestamp).toLocaleString()}
                  </span>
                </div>
              </div>
            </section>
          )}

          {/* Contact Information */}
          <section className="privacy-section">
            <h2>
              <FontAwesomeIcon icon={faUserShield} />
              Privacy Contact & Support
            </h2>
            <div className="contact-info">
              <div className="contact-intro">
                <p><strong>Need help with your privacy rights?</strong> Our dedicated privacy team is here to assist you.</p>
              </div>
              <div className="contact-methods">
                <div className="contact-method">
                  <FontAwesomeIcon icon={faUserShield} />
                  <h4>Data Protection Officer</h4>
                  <p><strong>Email:</strong> info@asplfusion.com</p>
                  <p><strong>Response Time:</strong> Within 72 hours</p>
                </div>
                <div className="contact-method">
                  <FontAwesomeIcon icon={faCog} />
                  <h4>General Support</h4>
                  <p><strong>Phone:</strong> +91 (011)-4151-9899</p>
                  <p><strong>Hours:</strong> Mon-Fri, 9 AM - 6 PM IST</p>
                </div>
                <div className="contact-method">
                  <FontAwesomeIcon icon={faShield} />
                  <h4>Registered Office</h4>
                  <p><strong>Address:</strong> 102 Mercantile House, 15 KG Marg, New Delhi 110001, India</p>
                  <p><strong>Legal Entity:</strong> ASPL Fusion Private Limited</p>
                </div>
              </div>
            </div>
          </section>

          {/* Policy Updates */}
          <section className="privacy-section">
            <h2>
              <FontAwesomeIcon icon={faInfoCircle} />
              Policy Updates & Version Control
            </h2>
            <div className="policy-updates">
              <div className="update-notice">
                <FontAwesomeIcon icon={faExclamationTriangle} />
                <p><strong>Transparency Commitment:</strong> We will notify you of any material changes to this policy at least 30 days in advance.</p>
              </div>
              <div className="update-details">
                <p>
                  This Privacy Policy may be updated to reflect changes in our practices, technology, or legal requirements. 
                  We will notify you of any material changes through email and website notifications.
                </p>
                <div className="version-info">
                  <div className="version-item">
                    <strong>Current Version:</strong> 2.1
                  </div>
                  <div className="version-item">
                    <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
                  </div>
                  <div className="version-item">
                    <strong>Next Review:</strong> {new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toLocaleDateString()}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Privacy;