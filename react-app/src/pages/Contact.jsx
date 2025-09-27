import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faTwitter, faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import ElectricBorder from '../components/ElectricBorder';
import { useRecaptcha } from '../hooks/useRecaptcha';
import { canSubmitForm, recordFormSubmission, getRemainingCooldown, formatRemainingTime, checkRateLimit, recordSubmission } from '../utils/formUtils';
import '../styles/Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formBlocked, setFormBlocked] = useState(false);
  const [remainingTime, setRemainingTime] = useState(0);
  
  // reCAPTCHA hook
  const { isLoaded: recaptchaLoaded, isLoading: recaptchaLoading, executeRecaptchaAction } = useRecaptcha('contact_form');

  useEffect(() => {
    // Check for success query parameter (from form redirect)
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('success') === 'true') {
      setShowSuccess(true);
      // Clean up URL
      window.history.replaceState({}, document.title, window.location.pathname);
    }

    // Check form submission cooldown
    const checkCooldown = () => {
      if (!canSubmitForm('contact')) {
        setFormBlocked(true);
        const remaining = getRemainingCooldown('contact');
        setRemainingTime(remaining);
        
        if (remaining > 0) {
          setTimeout(checkCooldown, 1000);
        } else {
          setFormBlocked(false);
        }
      }
    };

    checkCooldown();
  }, []);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Check rate limiting
    const rateLimitCheck = checkRateLimit();
    if (!rateLimitCheck.allowed) {
      alert(rateLimitCheck.message);
      return;
    }

    // Check form cooldown
    if (!canSubmitForm('contact')) {
      const remaining = getRemainingCooldown('contact');
      alert(`Please wait ${formatRemainingTime(remaining)} before submitting again.`);
      return;
    }

    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Execute reCAPTCHA
      const recaptchaToken = await executeRecaptchaAction();
      
      const response = await fetch('https://formspree.io/f/xldpdbrg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _subject: 'New Contact Form Submission',
          'g-recaptcha-response': recaptchaToken
        })
      });

      if (response.ok) {
        // Record successful submission
        recordFormSubmission('contact');
        recordSubmission();
        
        setShowSuccess(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        
        // Hide form after success
        setTimeout(() => {
          setFormBlocked(true);
        }, 2000);
        
        // Clean up URL
        window.history.replaceState({}, document.title, window.location.pathname);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your message. Please try again or contact us directly at info@asplfusion.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page">
      <section className="page-hero">
        <div className="container">
          <h1 className="gradient-text">Contact Us</h1>
          <p className="hero-subtitle">
            Let's build the future of energy together
          </p>
        </div>
      </section>

      <section className="contact-content p-8">
        <div className="container">
          <div className="contact-intro">
            <h2>Get in Touch</h2>
            <p>We're eager to connect with partners, investors, and talent who share our vision for a sustainable energy future. Reach out to us through the form below or directly via our contact details.</p>
          </div>

          <div className="contact-grid">
            <div className="contact-form-section">
              {showSuccess && (
                <div className="success-message">
                  <i className="fas fa-check-circle"></i>
                  <p>Thank you for your message! We'll get back to you soon.</p>
                </div>
              )}
              
              <form 
                className="contact-form"
                onSubmit={handleSubmit}
              >
                
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={handleChange}
                    className={errors.name ? 'error' : ''}
                    required
                  />
                  {errors.name && <span className="error-message">{errors.name}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? 'error' : ''}
                    required
                  />
                  {errors.email && <span className="error-message">{errors.email}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Brief description of your inquiry"
                    value={formData.subject}
                    onChange={handleChange}
                    className={errors.subject ? 'error' : ''}
                    required
                  />
                  {errors.subject && <span className="error-message">{errors.subject}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="Please provide details about your inquiry, interest, or question..."
                    value={formData.message}
                    onChange={handleChange}
                    className={errors.message ? 'error' : ''}
                    required
                  ></textarea>
                  {errors.message && <span className="error-message">{errors.message}</span>}
                </div>

                {formBlocked && (
                  <div className="form-blocked-message">
                    <i className="fas fa-clock"></i>
                    <p>
                      {remainingTime > 0 
                        ? `Please wait ${formatRemainingTime(remainingTime)} before submitting again.`
                        : 'Form is temporarily blocked. Please refresh the page to try again.'
                      }
                    </p>
                  </div>
                )}

                {!recaptchaLoaded && (
                  <div className="recaptcha-loading">
                    <i className="fas fa-spinner fa-spin"></i>
                    <span>Loading security verification...</span>
                  </div>
                )}

                <ElectricBorder 
                  as="button" 
                  type="submit" 
                  className="submit-button" 
                  disabled={isSubmitting || !recaptchaLoaded || formBlocked || recaptchaLoading}
                >
                  {isSubmitting ? 'Sending...' : recaptchaLoading ? 'Verifying...' : 'Send Message'}
                </ElectricBorder>
              </form>
            </div>

            <div className="contact-info-section">
              <ElectricBorder className="info-card" as="div">
                <FontAwesomeIcon icon={faEnvelope} className="info-icon" />
                <h3>Email</h3>
                <a href="mailto:info@asplfusion.com">info@asplfusion.com</a>
              </ElectricBorder>

              <ElectricBorder className="info-card" as="div">
                <FontAwesomeIcon icon={faPhone} className="info-icon" />
                <h3>Phone</h3>
                <a href="tel:+919876543210">+91 98765 43210</a>
                <small style={{color: '#ff6b6b', display: 'block', marginTop: '5px'}}>⚠️ Replace with actual business phone number</small>
              </ElectricBorder>

              <ElectricBorder className="info-card" as="div">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="info-icon" />
                <h3>Location</h3>
                <p>102 Mercantile House, 15 KG Marg,<br />New Delhi 110001 INDIA</p>
              </ElectricBorder>

              <div className="social-section">
                <h3>Follow Us</h3>
                <div className="social-links">
                  <a href="https://www.linkedin.com/company/aspl-fusion" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                  <a href="https://twitter.com/asplfusion" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                  <a href="https://www.facebook.com/share/1N7RyhjZhC/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                  <a href="https://www.instagram.com/asplfusion" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                  <a href="https://youtube.com/@asplfusion?si=QSXdbbvycjZsuaet" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                    <FontAwesomeIcon icon={faYoutube} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="partner-section p-8">
        <div className="container">
          <h2 className="text-center mb-12">Partnership Opportunities</h2>
          <div className="partner-grid">
            <ElectricBorder className="partner-card" as="div">
              <i className="fas fa-handshake"></i>
              <h3>Strategic Partners</h3>
              <p>Join us in developing fusion technology for specific applications in your industry</p>
            </ElectricBorder>

            <ElectricBorder className="partner-card" as="div">
              <i className="fas fa-chart-line"></i>
              <h3>Investors</h3>
              <p>Be part of the fusion revolution with attractive returns and global impact</p>
            </ElectricBorder>

            <ElectricBorder className="partner-card" as="div">
              <i className="fas fa-university"></i>
              <h3>Research Institutions</h3>
              <p>Collaborate on cutting-edge fusion research and development</p>
            </ElectricBorder>

            <ElectricBorder className="partner-card" as="div">
              <i className="fas fa-briefcase"></i>
              <h3>Talent</h3>
              <p>Join our world-class team building the future of clean energy</p>
            </ElectricBorder>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
