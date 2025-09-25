import ElectricBorder from '../components/ElectricBorder';
import '../styles/About.css';

function About() {
  return (
    <div className="about-page">
      <section className="page-hero">
        <div className="container">
          <h1 className="gradient-text">About ASPL Fusion</h1>
          <p className="hero-subtitle">
            Pioneering India's clean energy future
          </p>
        </div>
      </section>

      <section className="about-content p-8">
        <div className="container">
          <div className="intro-content">
            <h2>Coming Soon</h2>
            <p>Learn more about our company history, values, and vision for the future of fusion energy.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
