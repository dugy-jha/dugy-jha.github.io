import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LiquidEther from '../components/LiquidEther';
import ElectricBorder from '../components/ElectricBorder';
import CounterAnimation from '../components/CounterAnimation';
import { useRecaptcha } from '../hooks/useRecaptcha';
import { canSubmitForm, recordFormSubmission, getRemainingCooldown, formatRemainingTime, checkRateLimit, recordSubmission } from '../utils/formUtils';
// Using absolute paths from public folder for better Vercel compatibility
const fusionReactorImg = '/placeholder-fusion-reactor.png';
const isotopeImg = '/placeholder-isotope.png';
import medicalIcon from '../assets/images/icon-medical.png';
import energyIcon from '../assets/images/icon-energy.png';
import gdtIcon from '../assets/images/icon-gdt.png';
import '../styles/Home.css';

function Home() {
  const navigate = useNavigate();
  const [expandedFAQ, setExpandedFAQ] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);
  const [newsletterBlocked, setNewsletterBlocked] = useState(false);
  const [newsletterRemainingTime, setNewsletterRemainingTime] = useState(0);
  
  // reCAPTCHA hook for newsletter
  const { isLoaded: newsletterRecaptchaLoaded, isLoading: newsletterRecaptchaLoading, executeRecaptchaAction: executeNewsletterRecaptcha } = useRecaptcha('newsletter_subscribe');

  const faqs = [
    {
      question: "What makes ASPL Fusion's approach unique?",
      answer: "Unlike conventional fusion startups focused solely on electricity generation, we pursue a phased commercialization strategy. Our initial focus on medical isotope production provides immediate revenue while systematically de-risking our path to grid-scale fusion power."
    },
    {
      question: "When will ASPL Fusion achieve commercial fusion energy?",
      answer: "Our roadmap targets medical isotope production by 2028, industrial heat applications by 2032, hydrogen production by 2035, and grid-scale electricity by 2040. Each phase generates revenue and validates our technology progressively."
    },
    {
      question: "How does magnetic mirror technology differ from tokamaks?",
      answer: "Magnetic mirrors offer simpler linear geometry compared to tokamaks' complex toroidal design. This enables easier construction, maintenance, and scalability while achieving fusion conditions suitable for our phased applications."
    },
    {
      question: "What are the investment opportunities with ASPL Fusion?",
      answer: "We offer strategic partnerships across our development phases. Early investors benefit from our near-term revenue streams while positioning for the transformative potential of commercial fusion energy. Contact us to discuss investment opportunities."
    },
    {
      question: "How does ASPL Fusion contribute to India's energy security?",
      answer: "By developing domestic fusion capabilities, we reduce India's dependence on imported fossil fuels and provide a path to energy sovereignty. Our technology will enable India to lead in the global clean energy transition."
    },
    {
      question: "What safety measures are implemented in fusion technology?",
      answer: "Fusion is inherently safe - reactions stop immediately if conditions aren't maintained, producing no long-lived radioactive waste. Our facilities incorporate multiple safety systems exceeding international standards for radiation protection."
    }
  ];

  const toggleFAQ = (index) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    
    const query = searchQuery.toLowerCase().trim();
    
    // Simple keyword-based navigation
    if (query.includes('fusion') || query.includes('reactor') || query.includes('technology')) {
      navigate('/technology');
    } else if (query.includes('mission') || query.includes('strategy') || query.includes('approach')) {
      navigate('/mission');
    } else if (query.includes('roadmap') || query.includes('timeline') || query.includes('phase')) {
      navigate('/roadmap');
    } else if (query.includes('application') || query.includes('isotope') || query.includes('medical')) {
      navigate('/applications');
    } else if (query.includes('team') || query.includes('career') || query.includes('job')) {
      navigate('/team');
    } else if (query.includes('news') || query.includes('update') || query.includes('announcement')) {
      navigate('/news');
    } else if (query.includes('contact') || query.includes('email') || query.includes('phone')) {
      navigate('/contact');
    } else if (query.includes('faq') || query.includes('question') || query.includes('help')) {
      navigate('/faq');
    } else {
      // Default: show a message or navigate to a general page
      alert(`Searching for "${searchQuery}"... Redirecting to our technology page for more information.`);
      navigate('/technology');
    }
  };

  useEffect(() => {
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
          
          {/* Search Bar */}
          <form className="hero-search" onSubmit={handleSearch}>
            <div className="search-input-group">
              <input
                type="text"
                placeholder="Try: 'fusion technology', 'medical isotopes', 'team', 'contact'..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
              <button type="submit" className="search-button">
                <i className="fas fa-search"></i>
              </button>
            </div>
          </form>
          
          <ElectricBorder>
            <Link to="/roadmap" className="cta-button">
              Explore Our Strategy
            </Link>
          </ElectricBorder>
        </div>
      </section>

      <section className="content-section p-8">
        <div className="container">
          <div className="content-wrapper">
            <div className="content-text">
              <h2>Solving Critical National Challenges</h2>
              <p>India faces converging crises in healthcare, energy, and industrial competitiveness. ASPL Fusion's phased approach addresses each systematically, generating value while advancing toward our ultimate goal of clean, abundant fusion power.</p>
              <p>Our technology platform enables multiple revenue streams across medical isotopes, industrial heat, hydrogen production, and eventually grid-scale electricity—each phase funding the next while serving critical national needs.</p>
              <ElectricBorder>
                <Link to="/applications" className="learn-more-button">
                  Explore Applications
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
              <h2>Revolutionary Technology, Practical Execution</h2>
              <p>Our magnetic mirror approach offers distinct advantages over traditional tokamak designs—simpler construction, easier maintenance, and modular scalability. This enables us to start small, prove viability, and scale systematically.</p>
              <p>By focusing on near-term applications that don't require electricity generation, we can validate our technology, generate revenue, and build operational expertise years before our competitors.</p>
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
              <img src={gdtIcon} alt="GDT Device" />
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
              <img src={medicalIcon} alt="Modular Design" />
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
                  placeholder="Enter your email address"
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
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="organization">Organization</label>
              <input type="text" id="organization" name="organization" />
            </div>
            <div className="form-group">
              <label htmlFor="interest">Area of Interest</label>
              <select id="interest" name="interest" required>
                <option value="">Select an area</option>
                <option value="investment">Investment Opportunities</option>
                <option value="partnership">Strategic Partnership</option>
                <option value="careers">Career Opportunities</option>
                <option value="technology">Technology Information</option>
                <option value="media">Media Inquiry</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" required></textarea>
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
