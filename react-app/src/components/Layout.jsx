import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import CardNav from './CardNav';
import DarkModeToggle from './DarkModeToggle';
import HistoryTest from './HistoryTest';
import logoImg from '../assets/images/Logo-t-removebg-preview.png';
import '../styles/Layout.css';

function Layout({ children }) {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.pageYOffset > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      
      <header>
        <nav className="navbar">
          <div className="container">
            <Link to="/" className="logo">
              <img src={logoImg} alt="ASPL Fusion Logo" className="logo-img" />
              <span>ASPL<span className="highlight">Fusion</span></span>
            </Link>
          </div>
        </nav>
      </header>

      <main id="main-content">
        {children}
      </main>

      <footer>
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>About ASPL Fusion</h3>
              <p>ASPL Fusion is commercializing fusion energy through a disciplined, phased strategy to solve critical national challenges in healthcare, industry, and energy security.</p>
              <div className="social-links">
                <a href="https://www.linkedin.com/company/aspl-fusion" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://twitter.com/asplfusion" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://www.facebook.com/asplfusion" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="https://www.instagram.com/asplfusion" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
            
            <div className="footer-section">
              <h3>Quick Links</h3>
              <ul>
                <li><Link to="/mission">Our Mission</Link></li>
                <li><Link to="/technology">Technology</Link></li>
                <li><Link to="/roadmap">Roadmap</Link></li>
                <li><Link to="/applications">Applications</Link></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h3>Resources</h3>
              <ul>
                <li><Link to="/news">News & Updates</Link></li>
                <li><Link to="/faq">FAQ</Link></li>
                <li><Link to="/careers">Careers</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h3>Contact</h3>
              <p>E-309, Road No.16 V.K.I. Area,<br />Jaipur Rajasthan 302013</p>
              <p>Email: <a href="mailto:info@asplfusion.com">info@asplfusion.com</a></p>
              <p>Phone: <a href="tel:+9101141519899">+91 (011)-4151-9899</a></p>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; 2025 ASPL Fusion. All rights reserved.</p>
            <div className="footer-links">
              <Link to="/privacy">Privacy Policy</Link>
              <Link to="/terms">Terms of Service</Link>
              <Link to="/about">About Us</Link>
            </div>
          </div>
        </div>
      </footer>

      <button 
        className={`scroll-to-top ${showScrollTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <FontAwesomeIcon icon={faArrowUp} />
      </button>

              <DarkModeToggle />
              <CardNav />
              <HistoryTest />
            </>
          );
        }

export default Layout;
