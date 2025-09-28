import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LiquidEther from '../components/LiquidEther';
import ElectricBorder from '../components/ElectricBorder';
import CounterAnimation from '../components/CounterAnimation';
import EnhancedSearch from '../components/EnhancedSearch';
import SkeletonLoader, { FAQSkeleton } from '../components/SkeletonLoader';
import { useRecaptcha } from '../hooks/useRecaptcha';
import { canSubmitForm, recordFormSubmission, getRemainingCooldown, formatRemainingTime, checkRateLimit, recordSubmission } from '../utils/formUtils';
import emailMarketingManager from '../utils/emailMarketing';
import analyticsManager from '../utils/analytics';
// Using WebP format for better performance and optimization
import fusionReactorImg from '../assets/images/fusion-reactor.webp';
import isotopeImg from '../assets/images/isotope.webp';
import medicalIcon from '../assets/images/icon-medical.webp';
import energyIcon from '../assets/images/icon-energy.webp';
import gdtIcon from '../assets/images/icon-gdt.webp';
// Unique placeholders to avoid image reuse
import gdtDeviceIcon from '../assets/images/icon-gdt-device.webp';
import medicalModularIcon from '../assets/images/icon-medical-modular.webp';
import '../styles/Home.css';

function Home() {
  const navigate = useNavigate();
  const [expandedFAQ, setExpandedFAQ] = useState(null);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);
  const [newsletterBlocked, setNewsletterBlocked] = useState(false);
  const [newsletterRemainingTime, setNewsletterRemainingTime] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  
  // reCAPTCHA hook for newsletter
  const { isLoaded: newsletterRecaptchaLoaded, isLoading: newsletterRecaptchaLoading, executeRecaptchaAction: executeNewsletterRecaptcha } = useRecaptcha('newsletter_subscribe');

  const faqs = [
    {
      question: "What makes ASPL Fusion's approach unique?",
      answer: "Our core differentiator is our pragmatic, phased commercialization strategy. Unlike ventures focused solely on the long-term goal of electricity, we are targeting profitable, near-term markets—starting with medical isotope production—to generate revenue and systematically de-risk our technology at every stage. This business-first approach builds a financially robust company while advancing toward the ultimate goal of clean energy."
    },
    {
      question: "What is the timeline for commercial fusion energy?",
      answer: "Our development is structured in four distinct, milestone-driven phases. Phase 1 is focused on achieving commercial sales of medical isotopes within the first few years of operation. This builds the financial and technical foundation for our subsequent phases: industrial heat applications, green hydrogen production, and ultimately, grid-scale electricity. This disciplined progression allows us to deliver value to stakeholders long before the first kilowatt-hour is supplied to the grid."
    },
    {
      question: "How does magnetic mirror technology differ from tokamaks?",
      answer: "Magnetic mirror technology uses a linear, modular geometry, which contrasts with the complex toroidal (donut-shaped) design of a tokamak. This fundamental difference provides significant engineering advantages, including simpler construction, more direct access for maintenance, and greater potential for modular scalability."
    },
    {
      question: "What are the investment opportunities with ASPL Fusion?",
      answer: "An investment in ASPL Fusion supports a deep-tech venture with a clear, de-risked path to near-term revenue. Our phased strategy is designed to create value at each step, from capturing the profitable medical isotope market to serving the industrial heat and hydrogen sectors. This provides a unique opportunity to invest in a company poised for both immediate market impact and transformative long-term growth in the clean energy sector."
    },
    {
      question: "How does ASPL Fusion contribute to India's energy security?",
      answer: "By developing a domestic, commercially viable fusion energy source, ASPL Fusion directly supports India's national vision of 'Aatmanirbhar Bharat' (self-reliant India). Our technology will reduce the nation's heavy dependence on imported fossil fuels, providing a secure, sovereign, and sustainable energy supply to power future economic growth."
    },
    {
      question: "How safe is fusion energy?",
      answer: "Fusion energy is inherently safe. The fundamental physics of the process makes a runaway chain reaction or a fission-type meltdown physically impossible. Any disruption to the precise operating conditions causes the reaction to stop immediately. Furthermore, fusion does not produce high-level, long-lived radioactive waste."
    }
  ];

  const toggleFAQ = (index) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    // Check newsletter form cooldown
    const checkNewsletterCooldown = () => {
      if (!canSubmitForm('newsletter')) {
        setNewsletterBlocked(true);
        const remaining = getRemainingCooldown('newsletter');
        setNewsletterRemainingTime(remaining);
        
        if (remaining > 0) {
          setTimeout(checkNewsletterCooldown, 1000);
        } else {
          setNewsletterBlocked(false);
        }
      }
    };

    checkNewsletterCooldown();

    return () => clearTimeout(timer);
  }, []);

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    
    // Check rate limiting
    const rateLimitCheck = checkRateLimit();
    if (!rateLimitCheck.allowed) {
      alert(rateLimitCheck.message);
      return;
    }

    // Check form cooldown
    if (!canSubmitForm('newsletter')) {
      const remaining = getRemainingCooldown('newsletter');
      alert(`Please wait ${formatRemainingTime(remaining)} before subscribing again.`);
      return;
    }

    if (newsletterEmail) {
      try {
        // Execute reCAPTCHA
        const recaptchaToken = await executeNewsletterRecaptcha();
        
        // Subscribe to email marketing
        const result = await emailMarketingManager.subscribeToNewsletter(
          newsletterEmail,
          ['website', 'homepage'],
          { source: 'homepage', timestamp: new Date().toISOString() }
        );
        
        if (result.success) {
          // Track engagement
          emailMarketingManager.trackEngagement('newsletter_subscribe');
          analyticsManager.trackNewsletterSubscription('homepage');
          
          // Record successful submission
          recordFormSubmission('newsletter');
          recordSubmission();
          
          setNewsletterSubmitted(true);
          setNewsletterEmail('');
          
          // Hide form after success
          setTimeout(() => {
            setNewsletterBlocked(true);
          }, 2000);
          
          setTimeout(() => setNewsletterSubmitted(false), 3000);
        } else {
          throw new Error(result.message || 'Subscription failed');
        }
      } catch (error) {
        console.error('Newsletter submission error:', error);
        alert('There was an error subscribing to our newsletter. Please try again.');
      }
    }
  };

  return (
    <>
      <section className="hero" id="hero-section">
        <LiquidEther
          colors={['#5227FF', '#FF9FFC', '#B19EEF']}
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={1000}
          autoRampDuration={0.6}
        />
        <div className="hero-content container">
          <h1 id="hero-headline">A Pragmatic Path to India's Energy Sovereignty</h1>
          <p className="subtitle">ASPL Fusion is commercializing fusion technology through a disciplined, phased approach that ensures financial viability and systematic de-risking at every stage.</p>
          
          {/* Enhanced Search Bar */}
          <EnhancedSearch 
            placeholder="Search for fusion technology, medical isotopes, team, contact..."
            className="hero-search"
          />
          
          <ElectricBorder>
            <Link to="/roadmap" className="cta-button">
              Discover Our Strategy
            </Link>
          </ElectricBorder>
        </div>
      </section>

      <section className="content-section p-8">
        <div className="container">
          <div className="content-wrapper">
            <div className="content-text">
              <h2>Solving India's Critical National Imperatives</h2>
              <p>India stands at a pivotal moment, facing the triple challenge of securing its energy future, strengthening its healthcare infrastructure, and decarbonizing its industrial base. ASPL Fusion's strategy is uniquely designed to address these imperatives simultaneously, creating a powerful engine for national progress.</p>
              <ElectricBorder>
                <Link to="/applications" className="learn-more-button">
                  Explore Our Applications
                </Link>
              </ElectricBorder>
            </div>
            <div className="content-image">
              <img src={medicalIcon} alt="Medical Isotope Production" />
            </div>
          </div>
        </div>
      </section>

      <section className="content-section alternate p-8">
        <div className="container">
          <div className="content-wrapper">
            <div className="content-image">
              <img src={gdtIcon} alt="Fusion Technology" />
            </div>
            <div className="content-text">
              <h2>A Smarter Path to Commercial Fusion</h2>
              <p>Our strategic choice is the Advanced Magnetic Mirror—a technology matured through decades of international research. By avoiding the immense complexity of mainstream tokamak designs, we are pursuing a path that is potentially simpler to build, easier to maintain, and faster to commercialize.</p>
              <ElectricBorder>
                <Link to="/technology" className="learn-more-button">
                  Learn About Our Technology
                </Link>
              </ElectricBorder>
            </div>
          </div>
        </div>
      </section>

      <section className="faq-section p-8">
        <div className="container">
          <h2 className="text-center mb-12">Frequently Asked Questions</h2>
          {isLoading ? (
            <FAQSkeleton />
          ) : (
            <div className="faq-grid">
              {faqs.map((faq, index) => (
              <div key={index} className="faq-item card-electric">
                <button
                  className="faq-toggle"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={expandedFAQ === index}
                >
                  <h3>{faq.question}</h3>
                  <i className={`fas fa-${expandedFAQ === index ? 'minus' : 'plus'}`}></i>
                </button>
                <div className={`faq-content ${expandedFAQ === index ? '' : 'hidden'}`}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
            </div>
          )}
        </div>
      </section>

      <section className="stats-section">
        <div className="container">
          <h2 className="text-center mb-12">ASPL Fusion by the Numbers</h2>
          <div className="stats-grid">
            <ElectricBorder className="stat-card" as="div">
              <div className="stat-number">
                <CounterAnimation end={2025} duration={2000} />
              </div>
              <div className="stat-label">Founded</div>
            </ElectricBorder>
            <ElectricBorder className="stat-card" as="div">
              <div className="stat-number">
                <CounterAnimation end={4} duration={2000} />
              </div>
              <div className="stat-label">Development Phases</div>
            </ElectricBorder>
            <ElectricBorder className="stat-card" as="div">
              <div className="stat-number">
                <CounterAnimation end={2028} duration={2000} />
              </div>
              <div className="stat-label">First Commercial Product</div>
            </ElectricBorder>
            <ElectricBorder className="stat-card" as="div">
              <div className="stat-number">
                <CounterAnimation end={100} suffix="%" duration={2000} />
              </div>
              <div className="stat-label">Indian Innovation</div>
            </ElectricBorder>
          </div>
        </div>
      </section>

      <section className="case-studies-section p-8">
        <div className="container">
          <h2 className="text-center mb-12">Strategic Focus Areas</h2>
          <div className="case-studies-grid">
            <div 
              className="case-study-card card-electric"
              onClick={() => navigate('/casestudies')}
            >
              <h3>Medical Isotope Production</h3>
              <p>Addressing India's complete dependence on imported medical isotopes while generating immediate revenue through our Phase 1 commercial deployment.</p>
              <span className="read-more">Read Case Study →</span>
            </div>
            <div 
              className="case-study-card card-electric"
              onClick={() => navigate('/casestudies')}
            >
              <h3>Clean Energy Transition</h3>
              <p>Providing a pragmatic pathway to replace fossil fuels with clean, abundant fusion power through systematic technology development and commercialization.</p>
              <span className="read-more">Read Case Study →</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mission-preview-section p-8">
        <div className="container">
          <h2 className="text-center mb-12">Our Phased Approach</h2>
          <div className="mission-phases-grid">
            <div 
              className="mission-phase-card card-electric"
              onClick={() => navigate('/mission')}
            >
              <div className="phase-icon">
                <i className="fas fa-vial"></i>
              </div>
              <h3>Phase 1: Medical Isotopes</h3>
              <p>Establishing commercial viability through critical healthcare applications while validating our core technology.</p>
            </div>
            <div 
              className="mission-phase-card card-electric"
              onClick={() => navigate('/mission')}
            >
              <div className="phase-icon">
                <i className="fas fa-bolt"></i>
              </div>
              <h3>Phase 4: Grid Power</h3>
              <p>Achieving our ultimate goal of providing clean, unlimited electricity to power India's sustainable future.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="technology-preview-section p-8">
        <div className="container">
          <h2 className="text-center mb-12">Core Technology Advantages</h2>
          <div className="tech-features-grid">
            <div 
              className="tech-feature-card card-electric"
              onClick={() => navigate('/technology')}
            >
              <img src={gdtDeviceIcon} alt="GDT Device" />
              <h3>Magnetic Mirror Design</h3>
              <p>Simpler linear geometry enabling easier construction and maintenance</p>
            </div>
            <div 
              className="tech-feature-card card-electric"
              onClick={() => navigate('/technology')}
            >
              <img src={energyIcon} alt="Neutron Source" />
              <h3>Versatile Neutron Source</h3>
              <p>Multiple applications from medical isotopes to transmutation</p>
            </div>
            <div 
              className="tech-feature-card card-electric"
              onClick={() => navigate('/technology')}
            >
              <img src={medicalModularIcon} alt="Modular Design" />
              <h3>Modular Scalability</h3>
              <p>Progressive scaling from pilot plants to commercial facilities</p>
            </div>
          </div>
        </div>
      </section>

      <section className="visual-showcase-section p-8">
        <div className="container">
          <h2 className="text-center mb-12">Visualizing the Future</h2>
          <div className="showcase-grid">
            <div className="showcase-item card-electric">
              <img src={fusionReactorImg} alt="Fusion Reactor Visualization" />
              <h3>Next-Generation Fusion Reactor</h3>
              <p>Our magnetic mirror design represents a breakthrough in fusion engineering</p>
            </div>
            <div className="showcase-item card-electric">
              <img src={isotopeImg} alt="Medical Isotope Production" />
              <h3>Medical Isotope Production</h3>
              <p>Reliable domestic production of critical medical radioisotopes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="newsletter-section p-8">
        <div className="container">
          <div className="newsletter-content">
            <h2>Stay Updated</h2>
            <p>Get the latest news and updates about fusion technology and ASPL Fusion's progress.</p>
            <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
              <div className="newsletter-input-group">
                <input
                  type="email"
                  placeholder="your.email@example.com"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="newsletter-input"
                  required
                />
                <ElectricBorder 
                  as="button" 
                  type="submit" 
                  className="newsletter-button"
                  disabled={!newsletterRecaptchaLoaded || newsletterBlocked || newsletterRecaptchaLoading}
                >
                  {newsletterRecaptchaLoading ? 'Verifying...' : 'Subscribe'}
                </ElectricBorder>
              </div>
              
              {!newsletterRecaptchaLoaded && (
                <div className="recaptcha-loading">
                  <i className="fas fa-spinner fa-spin"></i>
                  <span>Loading security verification...</span>
                </div>
              )}

              {newsletterBlocked && (
                <div className="form-blocked-message">
                  <i className="fas fa-clock"></i>
                  <p>
                    {newsletterRemainingTime > 0 
                      ? `Please wait ${formatRemainingTime(newsletterRemainingTime)} before subscribing again.`
                      : 'Newsletter form is temporarily blocked. Please refresh the page to try again.'
                    }
                  </p>
                </div>
              )}

              {newsletterSubmitted && (
                <div className="newsletter-success">
                  <i className="fas fa-check-circle"></i>
                  <span>Thank you for subscribing!</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      <section className="contact-section p-8">
        <div className="container">
          <h2 className="text-center mb-4">Get in Touch</h2>
          <p className="contact-intro text-center mb-8">
            Join us in building India's energy future. Whether you're an investor, partner, or simply curious about our technology, we'd love to hear from you.
          </p>
          <form id="homepage-contact-form" className="contact-form" onSubmit={(e) => {
            e.preventDefault();
            alert('Thank you for your interest! Please use the Contact page to send us a message.');
          }}>
            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                placeholder="Your full name"
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder="your.email@example.com"
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="organization">Organization</label>
              <input 
                type="text" 
                id="organization" 
                name="organization" 
                placeholder="Your company or institution"
              />
            </div>
            <div className="form-group">
              <label htmlFor="interest">Area of Interest</label>
              <select id="interest" name="interest" required>
                <option value="">Select an area of interest</option>
                <option value="investment">Investment Opportunities</option>
                <option value="partnership">Strategic Partnership</option>
                <option value="careers">Career Opportunities</option>
                <option value="technology">Technology Information</option>
                <option value="media">Media Inquiry</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea 
                id="message" 
                name="message" 
                rows="5" 
                placeholder="Tell us about your interest in fusion technology..."
                required
              ></textarea>
            </div>
            <button type="submit" className="cta-button electric-border">
              <span className="electric-border-content">Send Message</span>
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Home;
