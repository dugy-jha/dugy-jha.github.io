import { useState, useEffect } from 'react';
import ElectricBorder from '../components/ElectricBorder';
import { useRecaptcha } from '../hooks/useRecaptcha';
import { canSubmitForm, recordFormSubmission, getRemainingCooldown, formatRemainingTime, checkRateLimit, recordSubmission } from '../utils/formUtils';
import '../styles/News.css';

function News() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);
  const [newsletterBlocked, setNewsletterBlocked] = useState(false);
  const [newsletterRemainingTime, setNewsletterRemainingTime] = useState(0);
  
  // reCAPTCHA hook for newsletter
  const { isLoaded: newsletterRecaptchaLoaded, isLoading: newsletterRecaptchaLoading, executeRecaptchaAction: executeNewsletterRecaptcha } = useRecaptcha('newsletter_subscribe');

  useEffect(() => {
    // Simulate loading news data
    setTimeout(() => {
      setNews([
        {
          id: 1,
          title: "ASPL Fusion Achieves First Plasma Milestone",
          date: "2025-09-22",
          excerpt: "Our prototype reactor successfully achieved first plasma, marking a critical milestone in our development roadmap.",
          content: "In a historic achievement for Indian fusion research, ASPL Fusion's prototype magnetic mirror reactor successfully achieved first plasma on September 20, 2025. This milestone validates our core technology approach and marks the beginning of our journey toward commercial fusion energy. The plasma was sustained for 30 seconds at temperatures exceeding 10 million degrees Celsius, demonstrating the effectiveness of our magnetic confinement system.",
          category: "Technology"
        },
        {
          id: 2,
          title: "ASPL Fusion Secures Series A Funding of ₹400 Crore",
          date: "2025-08-15",
          excerpt: "Led by leading venture capital firms, this funding will accelerate our prototype development and team expansion.",
          content: "ASPL Fusion has successfully closed its Series A funding round, raising ₹400 crore (approximately $50 million) from a consortium of leading venture capital firms and strategic investors. The round was led by XYZ Ventures with participation from ABC Capital and several prominent angel investors. This funding will enable us to complete our prototype reactor, expand our team, and accelerate our path to commercial medical isotope production.",
          category: "Business"
        },
        {
          id: 3,
          title: "Partnership with BARC for Medical Isotope Development",
          date: "2025-07-10",
          excerpt: "Strategic collaboration with Bhabha Atomic Research Centre to develop domestic medical isotope production capabilities.",
          content: "ASPL Fusion has signed a memorandum of understanding with the Bhabha Atomic Research Centre (BARC) to collaborate on developing domestic production capabilities for critical medical isotopes. This partnership combines ASPL's innovative fusion technology with BARC's expertise in nuclear medicine and isotope applications. Together, we aim to eliminate India's dependence on imported medical isotopes by 2028.",
          category: "Partnership"
        },
        {
          id: 4,
          title: "Dr. Priya Sharma Joins as Chief Technology Officer",
          date: "2025-06-05",
          excerpt: "Renowned fusion physicist brings decades of experience to lead ASPL Fusion's technology development.",
          content: "ASPL Fusion is pleased to announce the appointment of Dr. Priya Sharma as Chief Technology Officer. Dr. Sharma brings over 20 years of experience in magnetic confinement fusion, having previously led research teams at the Institute for Plasma Research. Her pioneering work on magnetic mirror configurations has been published in over 50 peer-reviewed papers. At ASPL, she will lead our technology development and oversee the construction of our prototype reactor.",
          category: "Team"
        },
        {
          id: 5,
          title: "ASPL Fusion Presents at International Fusion Conference",
          date: "2025-05-20",
          excerpt: "Our magnetic mirror approach receives recognition at the prestigious IAEA Fusion Energy Conference.",
          content: "ASPL Fusion's innovative approach to fusion energy was featured at the 29th IAEA Fusion Energy Conference in Vienna. Our presentation on 'Commercializing Fusion Through Phased Applications' was well-received by the international fusion community. The conference provided valuable opportunities to connect with potential collaborators and showcase India's growing capabilities in fusion technology.",
          category: "Conference"
        }
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  const categories = ["All", "Technology", "Business", "Partnership", "Team", "Conference"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredNews = selectedCategory === "All" 
    ? news 
    : news.filter(article => article.category === selectedCategory);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
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
    <div className="news-page">
      <section className="page-hero">
        <div className="container">
          <h1 className="gradient-text">News & Updates</h1>
          <p className="hero-subtitle">
            Latest developments in fusion technology and ASPL Fusion
          </p>
        </div>
      </section>

      <section className="news-content p-8">
        <div className="container">
          {loading ? (
            <div className="loading-state">
              <div className="loading-spinner"></div>
              <p>Loading latest news...</p>
            </div>
          ) : (
            <>
              <div className="news-filters">
                {categories.map(category => (
                  <button
                    key={category}
                    className={`filter-button ${selectedCategory === category ? 'active' : ''}`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>

              <div className="news-grid">
                {filteredNews.map(article => (
                  <ElectricBorder key={article.id} className="news-card" as="article">
                    <div className="news-header">
                      <span className="news-category">{article.category}</span>
                      <span className="news-date">{formatDate(article.date)}</span>
                    </div>
                    <h3>{article.title}</h3>
                    <p className="news-excerpt">{article.excerpt}</p>
                    <button 
                      className="read-more"
                      onClick={() => setSelectedArticle(article)}
                    >
                      Read More →
                    </button>
                  </ElectricBorder>
                ))}
              </div>

              {selectedArticle && (
                <div className="article-modal" onClick={() => setSelectedArticle(null)}>
                  <div className="article-content" onClick={(e) => e.stopPropagation()}>
                    <button className="close-button" onClick={() => setSelectedArticle(null)}>
                      <i className="fas fa-times"></i>
                    </button>
                    <div className="article-header">
                      <span className="article-category">{selectedArticle.category}</span>
                      <span className="article-date">{formatDate(selectedArticle.date)}</span>
                    </div>
                    <h2>{selectedArticle.title}</h2>
                    <p className="article-body">{selectedArticle.content}</p>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      <section className="newsletter-section p-8">
        <div className="container text-center">
          <h2>Stay Updated</h2>
          <p>Subscribe to our newsletter for the latest fusion energy news and updates.</p>
          <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
            <input 
              type="email" 
              placeholder="your.email@example.com" 
              className="newsletter-input"
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
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
          </form>
          
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
        </div>
      </section>
    </div>
  );
}

export default News;
