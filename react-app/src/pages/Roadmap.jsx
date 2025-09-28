import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ElectricBorder from '../components/ElectricBorder';
import '../styles/Roadmap.css';

function Roadmap() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div className="roadmap-page">
      <section className="page-hero">
        <div className="container">
          <h1 className="gradient-text">Our Development Roadmap</h1>
          <p className="hero-subtitle">
            A Pragmatic, Phase-Driven Path from Near-Term Revenue to Commercial Fusion Power
          </p>
        </div>
      </section>

      <section className="roadmap-intro p-8">
        <div className="container">
          <div className="intro-content">
            <h2>Building Value at Every Stage</h2>
            <p>Our four-phase approach balances technological ambition with commercial viability. This strategy is designed to generate value at each stage while systematically de-risking the path to grid-scale fusion power, building a robust business on a foundation of tangible milestones and market success.</p>
          </div>
        </div>
      </section>

      <div className="roadmap-phases">
        <section className="roadmap-phase" id="phase1">
          <div className="container">
            <div className="phase-header">
              <div className="phase-number">Phase 1</div>
              <h2>Medical Isotope Production</h2>
              <div className="phase-timeframe">2025-2028</div>
            </div>
            <div className="phase-content">
              <div className="phase-description">
                <p>Establish a profitable enterprise by addressing India's critical need for a secure domestic supply of medical isotopes.</p>
                <p><strong>Technology:</strong> Deploy a commercial-grade, accelerator-based neutron source to produce Molybdenum-99 (Mo-99) and other high-value isotopes.</p>
              </div>
              <div className="phase-milestones">
                <h3>Key Milestones</h3>
                <ul className="milestone-list">
                  <li>Complete proof-of-concept prototype</li>
                  <li>Achieve first neutron production</li>
                  <li>Demonstrate consistent Mo-99 production at target purity and yield</li>
                  <li>Secure all necessary regulatory approvals for commercial sales</li>
                </ul>
              </div>
              <div className="phase-outcomes">
                <ElectricBorder className="outcome" as="div">
                  <i className="fas fa-check-circle"></i>
                  <div>
                    <h4>Technology Validation</h4>
                    <p>Validate core neutron source technology and operational protocols</p>
                  </div>
                </ElectricBorder>
                <ElectricBorder className="outcome" as="div">
                  <i className="fas fa-check-circle"></i>
                  <div>
                    <h4>Early Revenue</h4>
                    <p>Establish a sustainable, profitable business model to fund future R&D</p>
                  </div>
                </ElectricBorder>
                <ElectricBorder className="outcome" as="div">
                  <i className="fas fa-check-circle"></i>
                  <div>
                    <h4>National Impact</h4>
                    <p>Create a secure domestic supply chain for India's healthcare system</p>
                  </div>
                </ElectricBorder>
              </div>
            </div>
          </div>
        </section>

        <section className="roadmap-phase" id="phase2">
          <div className="container">
            <div className="phase-header">
              <div className="phase-number">Phase 2</div>
              <h2>Industrial Heat & Strategic Applications</h2>
              <div className="phase-timeframe">2029-2032</div>
            </div>
            <div className="phase-content">
              <div className="phase-description">
                <p>Develop and demonstrate our proprietary Advanced Magnetic Mirror fusion device at a sub-grid scale.</p>
                <p><strong>Technology:</strong> Build a scaled-up fusion device capable of providing clean, high-temperature process heat and serving strategic national applications.</p>
              </div>
              <div className="phase-milestones">
                <h3>Key Milestones</h3>
                <ul className="milestone-list">
                  <li>Finalize the engineering design of the Advanced Magnetic Mirror device</li>
                  <li>Achieve stable, high-performance plasma operation</li>
                  <li>Demonstrate effective tritium breeding in a test blanket module</li>
                  <li>Secure pilot deployment with a major industrial partner for process heat</li>
                </ul>
              </div>
              <div className="phase-outcomes">
                <ElectricBorder className="outcome" as="div">
                  <i className="fas fa-industry"></i>
                  <div>
                    <h4>Industrial Decarbonization</h4>
                    <p>Provide a viable path for heavy industry to eliminate fossil fuels</p>
                  </div>
                </ElectricBorder>
                <ElectricBorder className="outcome" as="div">
                  <i className="fas fa-shield-alt"></i>
                  <div>
                    <h4>Fuel Self-Sufficiency</h4>
                    <p>Prove the technology for tritium breeding, a critical step for energy independence</p>
                  </div>
                </ElectricBorder>
                <ElectricBorder className="outcome" as="div">
                  <i className="fas fa-chart-line"></i>
                  <div>
                    <h4>Market Expansion</h4>
                    <p>Open multi-billion dollar markets in industrial heat and strategic services</p>
                  </div>
                </ElectricBorder>
              </div>
            </div>
          </div>
        </section>

        <section className="roadmap-phase" id="phase3">
          <div className="container">
            <div className="phase-header">
              <div className="phase-number">Phase 3</div>
              <h2>Grid-Scale Prototype Plant</h2>
              <div className="phase-timeframe">2033-2035</div>
            </div>
            <div className="phase-content">
              <div className="phase-description">
                <p>Construct and operate India's first commercial-scale, pure-fusion power plant.</p>
                <p><strong>Technology:</strong> Build a First-of-a-Kind (FOAK) 400 MW power plant based on our validated Advanced Magnetic Mirror technology.</p>
              </div>
              <div className="phase-milestones">
                <h3>Key Milestones</h3>
                <ul className="milestone-list">
                    <li>Complete the design for a net-energy-gain (Q&gt;10) fusion power core</li>
                  <li>Achieve grid connection and successful testing phases</li>
                  <li>Demonstrate a competitive Levelized Cost of Electricity (LCOE)</li>
                  <li>Achieve full commercial operational status</li>
                </ul>
              </div>
              <div className="phase-outcomes">
                <ElectricBorder className="outcome" as="div">
                  <i className="fas fa-bolt"></i>
                  <div>
                    <h4>Energy Independence</h4>
                    <p>Provide clean, abundant, 24/7 baseload power to India's grid</p>
                  </div>
                </ElectricBorder>
                <ElectricBorder className="outcome" as="div">
                  <i className="fas fa-trophy"></i>
                  <div>
                    <h4>Global Leadership</h4>
                    <p>Establish India as a world leader in commercial fusion technology</p>
                  </div>
                </ElectricBorder>
              </div>
            </div>
          </div>
        </section>

        <section className="roadmap-phase" id="phase4">
          <div className="container">
            <div className="phase-header">
              <div className="phase-number">Phase 4</div>
              <h2>National Fleet Deployment</h2>
              <div className="phase-timeframe">2036-2040</div>
            </div>
            <div className="phase-content">
              <div className="phase-description">
                <p>Achieve national-scale impact through the standardized deployment of multiple power plants.</p>
                <p><strong>Technology:</strong> Implement a "factory model" for manufacturing Nth-of-a-Kind (NOAK) 400 MW plants, driving down costs through economies of scale and supply chain optimization.</p>
              </div>
              <div className="phase-milestones">
                <h3>Key Milestones</h3>
                <ul className="milestone-list">
                  <li>Establish a domestic manufacturing ecosystem with Indian heavy engineering partners</li>
                  <li>Achieve significant cost reductions on subsequent plant deployments</li>
                  <li>Deploy a fleet of power plants to become a cornerstone of India's clean energy infrastructure</li>
                </ul>
              </div>
              <div className="phase-outcomes">
                <ElectricBorder className="outcome" as="div">
                  <i className="fas fa-leaf"></i>
                  <div>
                    <h4>Massive Decarbonization</h4>
                    <p>Make a substantial contribution to India's net-zero goals</p>
                  </div>
                </ElectricBorder>
                <ElectricBorder className="outcome" as="div">
                  <i className="fas fa-industry"></i>
                  <div>
                    <h4>Economic Growth</h4>
                    <p>Create a new, high-tech manufacturing industry in India</p>
                  </div>
                </ElectricBorder>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="roadmap-cta p-8">
        <div className="container text-center">
          <h2>Join Our Journey</h2>
          <p className="cta-text">Partner with us as we build the future of clean energy, one milestone at a time</p>
          <ElectricBorder as="button" onClick={() => navigate('/contact')} className="cta-button">
            Explore Partnership Opportunities
          </ElectricBorder>
        </div>
      </section>
    </div>
  );
}

export default Roadmap;
