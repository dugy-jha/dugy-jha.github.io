import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ElectricBorder from '../components/ElectricBorder';
import CounterAnimation from '../components/CounterAnimation';
import fusionReactorImg from '../assets/images/placeholder-fusion-reactor.png';
import '../styles/Technology.css';

function Technology() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div className="technology-page">
      <section className="page-hero">
        <div className="container">
          <h1 className="gradient-text">Our Technology</h1>
          <p className="hero-subtitle">
            Revolutionary magnetic mirror fusion design optimized for commercial applications
          </p>
        </div>
      </section>

      <section className="tech-overview p-8">
        <div className="container">
          <div className="tech-intro">
            <h2>Breaking Through Complexity</h2>
            <p>ASPL Fusion is pioneering advanced magnetic mirror technology that represents a compelling alternative to traditional tokamak designs. By leveraging recent advances in superconducting magnets, plasma physics, and digital control systems, our approach offers significant advantages in constructability, maintainability, and scalability.</p>
          </div>

          {/* Technology Tabs */}
          <div className="tech-tabs">
            <div className="tab-buttons">
              <button 
                className={`tab-button ${activeTab === 'overview' ? 'active' : ''}`}
                onClick={() => setActiveTab('overview')}
              >
                Overview
              </button>
              <button 
                className={`tab-button ${activeTab === 'components' ? 'active' : ''}`}
                onClick={() => setActiveTab('components')}
              >
                Components
              </button>
              <button 
                className={`tab-button ${activeTab === 'advantages' ? 'active' : ''}`}
                onClick={() => setActiveTab('advantages')}
              >
                Advantages
              </button>
              <button 
                className={`tab-button ${activeTab === 'timeline' ? 'active' : ''}`}
                onClick={() => setActiveTab('timeline')}
              >
                Timeline
              </button>
            </div>

            <div className="tab-content">
              {activeTab === 'overview' && (
                <div className="tab-panel">
                  <h3>Technology Overview</h3>
                  <p>Our magnetic mirror approach leverages decades of fusion research combined with recent breakthroughs in superconducting magnets, plasma physics, and computational modeling.</p>
                  <div className="tech-stats">
                    <div className="tech-stat">
                      <CounterAnimation end={75} suffix="%" duration={2000} />
                      <span>Construction Cost Reduction</span>
                    </div>
                    <div className="tech-stat">
                      <CounterAnimation end={90} suffix="%" duration={2000} />
                      <span>Maintenance Time Reduction</span>
                    </div>
                    <div className="tech-stat">
                      <CounterAnimation end={3} suffix="x" duration={2000} />
                      <span>Faster Deployment</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'components' && (
                <div className="tab-panel">
                  <h3>Core Components</h3>
                  <div className="components-list">
                    <div className="component-item">
                      <i className="fas fa-magnet"></i>
                      <div>
                        <h4>Superconducting Magnets</h4>
                        <p>High-temperature superconducting magnets for efficient plasma confinement</p>
                      </div>
                    </div>
                    <div className="component-item">
                      <i className="fas fa-fire"></i>
                      <div>
                        <h4>Plasma Heating Systems</h4>
                        <p>Advanced neutral beam injection and RF heating systems</p>
                      </div>
                    </div>
                    <div className="component-item">
                      <i className="fas fa-cogs"></i>
                      <div>
                        <h4>Control Systems</h4>
                        <p>AI-powered real-time plasma control and optimization</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'advantages' && (
                <div className="tab-panel">
                  <h3>Key Advantages</h3>
                  <div className="advantages-list">
                    <ElectricBorder className="advantage-item" as="div">
                      <h4>Modular Design</h4>
                      <p>Linear geometry enables straightforward assembly and maintenance</p>
                    </ElectricBorder>
                    <ElectricBorder className="advantage-item" as="div">
                      <h4>Scalable Architecture</h4>
                      <p>Incremental capacity additions through linear extension</p>
                    </ElectricBorder>
                    <ElectricBorder className="advantage-item" as="div">
                      <h4>Multi-Application Platform</h4>
                      <p>Versatile neutron production for diverse commercial applications</p>
                    </ElectricBorder>
                  </div>
                </div>
              )}

              {activeTab === 'timeline' && (
                <div className="tab-panel">
                  <h3>Development Timeline</h3>
                  <div className="timeline">
                    <div className="timeline-item">
                      <div className="timeline-year">2025-2026</div>
                      <div className="timeline-content">
                        <h4>Prototype Development</h4>
                        <p>Complete engineering design and begin construction</p>
                      </div>
                    </div>
                    <div className="timeline-item">
                      <div className="timeline-year">2027-2028</div>
                      <div className="timeline-content">
                        <h4>Technology Validation</h4>
                        <p>Achieve first plasma and demonstrate neutron production</p>
                      </div>
                    </div>
                    <div className="timeline-item">
                      <div className="timeline-year">2029-2032</div>
                      <div className="timeline-content">
                        <h4>Commercial Deployment</h4>
                        <p>Scale up to commercial isotope production</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          <div className="tech-comparison">
            <div className="comparison-item">
              <h3>Traditional Tokamak Approach</h3>
              <ul>
                <li>Complex toroidal (donut-shaped) geometry</li>
                <li>Challenging engineering with limited access to interior components</li>
                <li>High-stress magnet systems with limited redundancy</li>
                <li>Primarily focused on electricity generation</li>
                <li>Typically requires extremely high plasma temperatures</li>
              </ul>
            </div>
            <ElectricBorder className="comparison-item highlight-box" as="div">
              <h3>ASPL Fusion's Magnetic Mirror</h3>
              <ul>
                <li>Linear, modular geometry with simple construction</li>
                <li>Easy access for maintenance and component replacement</li>
                <li>Distributed magnet systems with inherent redundancy</li>
                <li>Versatile platform for multiple applications</li>
                <li>Operates effectively at moderate plasma conditions</li>
              </ul>
            </ElectricBorder>
          </div>
          
          <div className="tech-diagram">
            <img src={fusionReactorImg} alt="Magnetic Mirror System Diagram" className="full-width-image" />
            <p className="image-caption">Conceptual diagram of ASPL Fusion's magnetic mirror system with key components labeled</p>
          </div>
        </div>
      </section>

      <section className="tech-components p-8">
        <div className="container">
          <h2 className="text-center mb-12">Core Technology Components</h2>
          
          <div className="components-grid">
            <div className="tech-component" id="gdt-device">
              <i className="fas fa-magnet"></i>
              <h3>Advanced Magnet System</h3>
              <p>Our design employs high-temperature superconducting (HTS) magnets arranged in a magnetic mirror configuration. These create a strong magnetic bottle that confines and compresses the plasma. The scalable, modular design allows for progressive upgrades and maintenance without full system shutdown.</p>
            </div>
            
            <div className="tech-component" id="neutron-source">
              <i className="fas fa-fire"></i>
              <h3>Plasma Formation & Heating</h3>
              <p>We utilize a combination of neutral beam injection and radio-frequency heating to create and sustain fusion-grade plasma. Our unique approach optimizes plasma stability while minimizing energy input requirements, creating an economically viable fusion system.</p>
            </div>
            
            <div className="tech-component" id="modular-design">
              <i className="fas fa-radiation"></i>
              <h3>Neutron Utilization Systems</h3>
              <p>The fusion reactions in our device produce high-energy neutrons that can be captured and utilized for various applications. In our initial phase, these neutrons are used to transmute target materials into valuable medical isotopes like Molybdenum-99.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="tech-advantages p-8">
        <div className="container">
          <h2 className="text-center mb-12">Technical Advantages</h2>
          
          <div className="advantages-grid">
            <ElectricBorder className="advantage-card" as="div">
              <div className="advantage-icon">
                <i className="fas fa-tools"></i>
              </div>
              <h3>Simplified Construction</h3>
              <p>Linear geometry enables straightforward assembly using standard industrial processes, reducing construction time and cost by up to 70% compared to toroidal designs.</p>
            </ElectricBorder>
            
            <ElectricBorder className="advantage-card" as="div">
              <div className="advantage-icon">
                <i className="fas fa-cogs"></i>
              </div>
              <h3>Modular Scalability</h3>
              <p>Our design allows for incremental capacity additions by extending the linear configuration, enabling phased investment and risk mitigation.</p>
            </ElectricBorder>
            
            <ElectricBorder className="advantage-card" as="div">
              <div className="advantage-icon">
                <i className="fas fa-wrench"></i>
              </div>
              <h3>Maintenance Access</h3>
              <p>Direct access to all critical components reduces maintenance time and cost, ensuring higher operational availability and lower lifecycle costs.</p>
            </ElectricBorder>
            
            <ElectricBorder className="advantage-card" as="div">
              <div className="advantage-icon">
                <i className="fas fa-atom"></i>
              </div>
              <h3>Multi-Application Platform</h3>
              <p>Versatile neutron production enables diverse revenue streams from medical isotopes to industrial applications before electricity generation.</p>
            </ElectricBorder>
          </div>
        </div>
      </section>

      <section className="tech-innovation p-8">
        <div className="container">
          <h2 className="text-center mb-12">Innovation Breakthroughs</h2>
          
          <div className="innovation-content">
            <div className="innovation-item">
              <h3>Advanced Plasma Control</h3>
              <p>Our proprietary control algorithms leverage machine learning to optimize plasma stability in real-time, reducing energy requirements while maintaining fusion conditions. This breakthrough enables economical operation at scales previously thought impossible.</p>
            </div>
            
            <div className="innovation-item">
              <h3>Next-Generation Materials</h3>
              <p>We're developing advanced materials for plasma-facing components that can withstand extreme conditions while maintaining structural integrity. These innovations extend operational life and reduce maintenance requirements.</p>
            </div>
            
            <div className="innovation-item">
              <h3>Digital Twin Technology</h3>
              <p>Every ASPL Fusion reactor will have a complete digital twin, enabling predictive maintenance, performance optimization, and rapid troubleshooting. This Industry 4.0 approach ensures maximum uptime and efficiency.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="tech-roadmap p-8">
        <div className="container">
          <h2 className="text-center mb-12">Technology Development Roadmap</h2>
          
          <div className="roadmap-timeline">
            <div className="timeline-item">
              <div className="timeline-marker">2025-2026</div>
              <div className="timeline-content">
                <h3>Prototype Development</h3>
                <p>Complete engineering design and begin construction of proof-of-concept prototype</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-marker">2027-2028</div>
              <div className="timeline-content">
                <h3>Technology Validation</h3>
                <p>Achieve first plasma and demonstrate neutron production for isotope applications</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-marker">2029-2032</div>
              <div className="timeline-content">
                <h3>Commercial Deployment</h3>
                <p>Scale up to commercial isotope production and industrial heat applications</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-marker">2033-2040</div>
              <div className="timeline-content">
                <h3>Grid-Scale Power</h3>
                <p>Develop and deploy fusion reactors for electricity generation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="tech-cta p-8">
        <div className="container text-center">
          <h2>Partner with Innovation</h2>
          <p className="cta-text">Join us in developing the fusion technology that will power humanity's future</p>
          <ElectricBorder as="a" href="/contact" className="cta-button">
            Learn More About Our Technology
          </ElectricBorder>
        </div>
      </section>
    </div>
  );
}

export default Technology;
