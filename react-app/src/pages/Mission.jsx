import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/Mission.css';

function Mission() {
  const location = useLocation();

  useEffect(() => {
    // Handle hash navigation for phase sections
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div className="mission-page">
      <section className="page-hero">
        <div className="container">
          <h1 className="gradient-text">Our Mission</h1>
          <p className="hero-subtitle">
            Pioneering a pragmatic path to commercial fusion energy through systematic innovation and disciplined execution
          </p>
        </div>
      </section>

      <section className="mission-content p-8">
        <div className="container">
          <div className="mission-intro">
            <h2>Energy Independence Through Innovation</h2>
            <p>Our mission is to commercialize fusion technology through a pragmatic, phased approach that ensures financial viability and systematic de-risking at every stage. We are building a profitable, high-impact enterprise that solves critical challenges in both healthcare and energy, culminating in a dominant market position in the defining industry of the 21st century.</p>
            
            <div className="mission-quote">
              <blockquote>
                "Fusion energy has long been a grand scientific challenge. At ASPL, our mission is to transform it into a viable commercial reality for India by building a pragmatic, value-driven path from near-term applications to long-term energy sovereignty."
              </blockquote>
              <cite>— Prof. Prabhat Ranjan, Director</cite>
            </div>
            
            <h3>Powering India's Future</h3>
            <p>India's exponential economic growth is fueling an unprecedented rise in energy demand. This growth, coupled with a heavy reliance on imported fossil fuels, creates significant economic and strategic vulnerabilities. Domestic fusion energy offers a definitive path to energy sovereignty, providing the clean, safe, and abundant baseload power needed to secure India's future.</p>
            
            <div className="mission-stats">
              <div className="stat-box">
                <h4>~<span className="count-up" data-value="89">89</span>%</h4>
                <p>Of India's oil is imported, exposing the economy to global price volatility</p>
              </div>
              <div className="stat-box">
                <h4><span className="count-up" data-value="3">3</span>×</h4>
                <p>Projected increase in India's energy demand by 2050, the fastest growth of any major economy</p>
              </div>
              <div className="stat-box">
                <h4>₹<span className="count-up" data-value="13">13</span>+ Trillion</h4>
                <p>Annual cost of energy imports, a significant drain on the national economy</p>
              </div>
            </div>
            
            <h3>Our Four-Phase Strategy</h3>
            <div className="mission-phases">
              <div className="phase" id="phase1">
                <div className="phase-number">1</div>
                <div className="phase-content">
                  <h4>Medical Isotope Production</h4>
                  <p>Achieve near-term profitability and establish a secure domestic supply of critical medical isotopes, funding our core fusion R&D.</p>
                </div>
              </div>
              <div className="phase" id="phase2">
                <div className="phase-number">2</div>
                <div className="phase-content">
                  <h4>Industrial Heat Applications</h4>
                  <p>Validate our fusion technology at scale while providing the clean, high-temperature process heat needed to decarbonize India's 'hard-to-abate' heavy industries.</p>
                </div>
              </div>
              <div className="phase" id="phase3">
                <div className="phase-number">3</div>
                <div className="phase-content">
                  <h4>Hydrogen Production</h4>
                  <p>Leverage our high-efficiency heat source to become a key enabler of India's green hydrogen economy, providing clean fuel for transport and industry.</p>
                </div>
              </div>
              <div className="phase" id="phase4">
                <div className="phase-number">4</div>
                <div className="phase-content">
                  <h4>Grid-Scale Electricity</h4>
                  <p>Deliver on the ultimate promise of fusion: clean, safe, and abundant 24/7 baseload power for the nation.</p>
                </div>
              </div>
            </div>
            
            <h3>Building on Proven Science</h3>
            <p>Our magnetic mirror approach leverages decades of fusion research combined with recent breakthroughs in superconducting magnets, plasma physics, and computational modeling. By focusing on simpler geometry and modular design, we can achieve commercial viability years ahead of more complex approaches.</p>
            
            <div className="key-advantages">
              <h3>Key Strategic Advantages</h3>
              <ul>
                <li><strong>Revenue Generation:</strong> Each phase produces marketable products, ensuring financial sustainability</li>
                <li><strong>Risk Mitigation:</strong> Progressive scaling allows us to validate technology at each stage</li>
                <li><strong>Market Creation:</strong> Building supply chains and customer relationships before grid-scale deployment</li>
                <li><strong>Talent Development:</strong> Growing operational expertise through real-world applications</li>
                <li><strong>Stakeholder Value:</strong> Delivering returns to investors while advancing toward transformative impact</li>
              </ul>
            </div>
            
            <h3>Committed to India's Future</h3>
            <p>ASPL Fusion is more than a technology company—we're nation builders. Our success will be measured not just in financial returns but in our contribution to India's energy security, industrial competitiveness, and global leadership in clean technology.</p>
            
            <p>We invite visionary investors, strategic partners, and exceptional talent to join us in this mission. Together, we can ensure that India leads the global transition to fusion energy, creating prosperity for generations to come.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Mission;
