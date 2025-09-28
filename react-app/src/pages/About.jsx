import ElectricBorder from '../components/ElectricBorder';
import '../styles/About.css';

function About() {
  return (
    <div className="about-page">
      <section className="page-hero">
        <div className="container">
          <h1 className="gradient-text">About ASPL Fusion</h1>
          <p className="hero-subtitle">
            We are building India's energy future.
          </p>
        </div>
      </section>

      <section className="about-content p-8">
        <div className="container">
          <div className="intro-content">
            <h2>Our Story</h2>
            <p>Agnira Sanlayan Pvt. Ltd. (ASPL Fusion) was founded on a simple but powerful premise: that the path to a clean, secure, and prosperous future for India runs on fusion energy. We are a deep-tech energy startup with a mission to not only solve one of the greatest scientific challenges of our time but to build a commercially viable enterprise that delivers tangible value at every step.</p>
            
            <p>Our vision is to establish India as a global leader in nuclear fusion, achieving energy sovereignty and powering the nation's growth with clean, safe, and abundant power.</p>
            
            <p>We are not just scientists and engineers; we are nation-builders. Our work is deeply aligned with India's most critical strategic goals, including "Make in India" and "Aatmanirbhar Bharat." By developing a domestic fusion industry, we are creating a new high-tech manufacturing ecosystem, fostering innovation, and ensuring that the next energy revolution is built here in India, for India and the world.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
