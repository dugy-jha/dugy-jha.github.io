import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faRocket, 
  faCogs, 
  faRoute, 
  faIndustry, 
  faFileAlt, 
  faUsers, 
  faNewspaper, 
  faQuestionCircle, 
  faEnvelope,
  faBars,
  faTimes
} from '@fortawesome/free-solid-svg-icons';
import './CardNav.css';

function CardNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('');
  const location = useLocation();

  const navItems = [
    { 
      label: "Mission", 
      href: "/mission", 
      icon: faRocket,
      description: "Our vision for fusion energy"
    },
    { 
      label: "Technology", 
      href: "/technology", 
      icon: faCogs,
      description: "Magnetic mirror fusion"
    },
    { 
      label: "Roadmap", 
      href: "/roadmap", 
      icon: faRoute,
      description: "Development phases"
    },
    { 
      label: "Applications", 
      href: "/applications", 
      icon: faIndustry,
      description: "Commercial uses"
    },
    { 
      label: "Case Studies", 
      href: "/casestudies", 
      icon: faFileAlt,
      description: "Success stories"
    },
    { 
      label: "Team", 
      href: "/team", 
      icon: faUsers,
      description: "Meet our experts"
    },
    { 
      label: "News", 
      href: "/news", 
      icon: faNewspaper,
      description: "Latest updates"
    },
    { 
      label: "FAQ", 
      href: "/faq", 
      icon: faQuestionCircle,
      description: "Common questions"
    }
  ];

  useEffect(() => {
    setActiveItem(location.pathname);
  }, [location.pathname]);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const closeNav = () => {
    setIsOpen(false);
  };

  return (
    <div className="card-nav-container">
      {/* Mobile Toggle Button */}
      <button 
        className="card-nav-toggle"
        onClick={toggleNav}
        aria-label="Toggle navigation"
        aria-expanded={isOpen}
      >
        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
      </button>

      {/* Navigation Overlay */}
      <div className={`card-nav-overlay ${isOpen ? 'open' : ''}`} onClick={closeNav}>
        <div className="card-nav-content" onClick={(e) => e.stopPropagation()}>
          <div className="card-nav-header">
            <h2>Navigate</h2>
            <p>Explore ASPL Fusion</p>
          </div>
          
          <div className="card-nav-grid">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                to={item.href}
                className={`card-nav-item ${activeItem === item.href ? 'active' : ''}`}
                onClick={closeNav}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="card-nav-icon">
                  <FontAwesomeIcon icon={item.icon} />
                </div>
                <div className="card-nav-text">
                  <h3>{item.label}</h3>
                  <p>{item.description}</p>
                </div>
                <div className="card-nav-arrow">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </Link>
            ))}
          </div>

          <div className="card-nav-footer">
            <Link to="/contact" className="card-nav-cta" onClick={closeNav}>
              <FontAwesomeIcon icon={faEnvelope} />
              <span>Get in Touch</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardNav;
