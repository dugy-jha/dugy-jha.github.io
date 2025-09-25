import { Link } from 'react-router-dom';
import ElectricBorder from '../components/ElectricBorder';
import '../styles/CaseStudies.css';

function CaseStudies() {
  return (
    <div className="casestudies-page">
      <section className="page-hero">
        <div className="container">
          <h1 className="gradient-text">Case Studies</h1>
          <p className="hero-subtitle">
            Real-world applications of fusion technology
          </p>
        </div>
      </section>

      <section className="casestudies-content p-8">
        <div className="container">
          <div className="intro-content">
            <h2>Coming Soon</h2>
            <p>Our case studies will showcase real-world applications and success stories as we progress through our development phases.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CaseStudies;
