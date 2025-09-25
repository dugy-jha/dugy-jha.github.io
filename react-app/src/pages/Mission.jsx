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
            <p>ASPL Fusion is committed to pioneering a pragmatic path to commercial fusion energy, focusing first on critical applications that generate near-term value while progressively advancing toward clean, abundant power for India and beyond.</p>
            
            <div className="mission-quote">
              <blockquote>
                "We believe that securing India's energy future requires both technological ambition and commercial realism. Our phased approach ensures that every milestone delivers real value to stakeholders."
              </blockquote>
              <cite>— Dr. A. K. Jha, Founder & CEO</cite>
            </div>
            
            <h3>Energy Independence for India</h3>
            <p>As India's economy grows exponentially, so does our energy demand. Despite ambitious renewable energy targets, our nation will continue to rely heavily on imported fossil fuels for decades without transformative technologies. Fusion energy represents the ultimate solution—clean, safe, and virtually limitless power that can be generated domestically, freeing India from energy dependencies and the volatility of global energy markets.</p>
            
            <div className="mission-stats">
              <div className="stat-box">
                <h4><span className="count-up" data-value="85">85</span>%</h4>
                <p>Of India's oil is imported, creating economic and strategic vulnerabilities</p>
              </div>
              <div className="stat-box">
                <h4><span className="count-up" data-value="3">3</span>×</h4>
                <p>Projected increase in India's energy demand by 2050</p>
              </div>
              <div className="stat-box">
                <h4>₹<span className="count-up" data-value="12">12</span>+ Trillion</h4>
                <p>Annual cost of energy imports to India's economy</p>
              </div>
            </div>
            
            <h3>A Disciplined Approach to Innovation</h3>
            <p>Unlike many fusion startups that focus solely on the long-term goal of electricity production, ASPL Fusion has developed a four-phase strategy that builds value at each stage:</p>
            
            <div className="mission-phases">
              <div className="phase" id="phase1">
                <div className="phase-number">1</div>
                <div className="phase-content">
                  <h4>Medical Isotope Production</h4>
                  <p>Addressing critical shortages in medical diagnostics and treatment while validating our core technology</p>
                </div>
              </div>
              <div className="phase" id="phase2">
                <div className="phase-number">2</div>
                <div className="phase-content">
                  <h4>Industrial Heat Applications</h4>
                  <p>Providing clean process heat for industries like steel, cement, and chemicals</p>
                </div>
              </div>
              <div className="phase" id="phase3">
                <div className="phase-number">3</div>
                <div className="phase-content">
                  <h4>Hydrogen Production</h4>
                  <p>Generating green hydrogen at scale for transportation and industrial applications</p>
                </div>
              </div>
              <div className="phase" id="phase4">
                <div className="phase-number">4</div>
                <div className="phase-content">
                  <h4>Grid-Scale Electricity</h4>
                  <p>Delivering clean, baseload power to accelerate India's transition to sustainable energy</p>
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
