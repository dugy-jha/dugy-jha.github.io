import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ElectricBorder from '../components/ElectricBorder';
import '../styles/Roadmap.css';

function Roadmap() {
  const location = useLocation();

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
          <h1 className="gradient-text">Development Roadmap</h1>
          <p className="hero-subtitle">
            A pragmatic path from proof-of-concept to commercial fusion power
          </p>
        </div>
      </section>

      <section className="roadmap-intro p-8">
        <div className="container">
          <div className="intro-content">
            <h2>Building Value at Every Stage</h2>
            <p>ASPL Fusion has developed a pragmatic roadmap that balances technological ambition with commercial viability. Our four-phase strategy is designed to generate value at each stage while systematically de-risking our path to grid-scale fusion power.</p>
            <p>This approach allows us to build a sustainable business model, establish operational expertise, and develop supply chains while progressively advancing our core technology.</p>
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
                <p>Our initial focus is on developing fusion-based neutron sources for producing critical medical isotopes, particularly Molybdenum-99 (Mo-99), the precursor to Technetium-99m used in over 40 million medical procedures annually worldwide.</p>
                <p>India currently imports 100% of its medical isotopes, creating vulnerabilities in the healthcare system. Our technology will establish domestic production capability, ensuring a stable supply for cancer diagnostics and treatment.</p>
              </div>
              <div className="phase-milestones">
                <h3>Key Milestones</h3>
                <ul className="milestone-list">
                  <li><span className="milestone-date">2025</span> Complete proof-of-concept prototype</li>
                  <li><span className="milestone-date">2026</span> Achieve first neutron production</li>
                  <li><span className="milestone-date">2027</span> Demonstrate Mo-99 production</li>
                  <li><span className="milestone-date">2028</span> Secure regulatory approvals</li>
                  <li><span className="milestone-date">2028</span> Begin commercial isotope sales</li>
                </ul>
              </div>
              <div className="phase-outcomes">
                <ElectricBorder className="outcome" as="div">
                  <i className="fas fa-check-circle"></i>
                  <div>
                    <h4>Technology Validation</h4>
                    <p>Demonstrate our magnetic mirror fusion concept in a commercial application</p>
                  </div>
                </ElectricBorder>
                <ElectricBorder className="outcome" as="div">
                  <i className="fas fa-check-circle"></i>
                  <div>
                    <h4>Initial Revenue</h4>
                    <p>Establish sustainable business model with recurring revenue stream</p>
                  </div>
                </ElectricBorder>
                <ElectricBorder className="outcome" as="div">
                  <i className="fas fa-check-circle"></i>
                  <div>
                    <h4>Strategic Value</h4>
                    <p>Secure India's medical isotope supply chain for critical healthcare needs</p>
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
              <h2>Industrial Heat Applications</h2>
              <div className="phase-timeframe">2029-2032</div>
            </div>
            <div className="phase-content">
              <div className="phase-description">
                <p>Building on our neutron source technology, Phase 2 focuses on providing clean, high-temperature process heat for industrial applications. Industries like steel, cement, and chemicals require temperatures above 1000°C, currently achievable only through fossil fuel combustion.</p>
                <p>Our fusion technology can provide this heat without carbon emissions, helping heavy industries meet their decarbonization goals while maintaining competitiveness.</p>
              </div>
              <div className="phase-milestones">
                <h3>Key Milestones</h3>
                <ul className="milestone-list">
                  <li><span className="milestone-date">2029</span> Scale up fusion reactor design</li>
                  <li><span className="milestone-date">2030</span> Pilot deployment with industrial partner</li>
                  <li><span className="milestone-date">2031</span> Demonstrate economic viability</li>
                  <li><span className="milestone-date">2032</span> Commercial deployments begin</li>
                </ul>
              </div>
              <div className="phase-outcomes">
                <ElectricBorder className="outcome" as="div">
                  <i className="fas fa-industry"></i>
                  <div>
                    <h4>Industrial Decarbonization</h4>
                    <p>Enable heavy industries to eliminate fossil fuel dependence</p>
                  </div>
                </ElectricBorder>
                <ElectricBorder className="outcome" as="div">
                  <i className="fas fa-chart-line"></i>
                  <div>
                    <h4>Market Expansion</h4>
                    <p>Establish presence in multi-billion dollar industrial heat market</p>
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
              <h2>Hydrogen Production</h2>
              <div className="phase-timeframe">2033-2035</div>
            </div>
            <div className="phase-content">
              <div className="phase-description">
                <p>Phase 3 leverages our high-temperature fusion systems to produce green hydrogen through thermochemical water splitting. This process is significantly more efficient than electrolysis and can produce hydrogen at costs competitive with fossil fuel-derived hydrogen.</p>
                <p>Green hydrogen is essential for decarbonizing transportation, fertilizer production, and steel manufacturing—sectors that represent over 20% of global emissions.</p>
              </div>
              <div className="phase-milestones">
                <h3>Key Milestones</h3>
                <ul className="milestone-list">
                  <li><span className="milestone-date">2033</span> Integrate hydrogen production systems</li>
                  <li><span className="milestone-date">2034</span> Achieve target production costs</li>
                  <li><span className="milestone-date">2035</span> Scale to commercial volumes</li>
                </ul>
              </div>
              <div className="phase-outcomes">
                <ElectricBorder className="outcome" as="div">
                  <i className="fas fa-leaf"></i>
                  <div>
                    <h4>Green Fuel Economy</h4>
                    <p>Enable transition to hydrogen-based transportation and industry</p>
                  </div>
                </ElectricBorder>
                <ElectricBorder className="outcome" as="div">
                  <i className="fas fa-globe"></i>
                  <div>
                    <h4>Export Potential</h4>
                    <p>Position India as a global green hydrogen exporter</p>
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
              <h2>Grid-Scale Electricity</h2>
              <div className="phase-timeframe">2036-2040</div>
            </div>
            <div className="phase-content">
              <div className="phase-description">
                <p>Our ultimate goal: clean, abundant electricity generation. By Phase 4, we will have proven our technology across multiple applications, established supply chains, developed operational expertise, and built customer relationships.</p>
                <p>Grid-scale fusion power represents the holy grail of clean energy—providing reliable baseload power without carbon emissions, radioactive waste, or resource constraints.</p>
              </div>
              <div className="phase-milestones">
                <h3>Key Milestones</h3>
                <ul className="milestone-list">
                  <li><span className="milestone-date">2036</span> Complete demonstration plant</li>
                  <li><span className="milestone-date">2037</span> Grid connection and testing</li>
                  <li><span className="milestone-date">2038</span> Achieve competitive LCOE</li>
                  <li><span className="milestone-date">2039</span> First commercial plant operational</li>
                  <li><span className="milestone-date">2040</span> Multiple deployments underway</li>
                </ul>
              </div>
              <div className="phase-outcomes">
                <ElectricBorder className="outcome" as="div">
                  <i className="fas fa-bolt"></i>
                  <div>
                    <h4>Energy Independence</h4>
                    <p>Provide India with unlimited clean baseload power</p>
                  </div>
                </ElectricBorder>
                <ElectricBorder className="outcome" as="div">
                  <i className="fas fa-trophy"></i>
                  <div>
                    <h4>Global Leadership</h4>
                    <p>Establish India as a fusion technology leader</p>
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
          <ElectricBorder as="a" href="/contact" className="cta-button">
            Explore Partnership Opportunities
          </ElectricBorder>
        </div>
      </section>
    </div>
  );
}

export default Roadmap;
