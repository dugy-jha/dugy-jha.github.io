import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ElectricBorder from '../components/ElectricBorder';
import CounterAnimation from '../components/CounterAnimation';
// Using real fusion reactor image
import fusionReactorImg from '../assets/images/fusion-reactor.webp';
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
          <h1 className="gradient-text">A Smarter, Simpler Path to Fusion</h1>
          <p className="hero-subtitle">
            Our Advanced Magnetic Mirror technology represents a strategic departure from mainstream approaches, engineered for superior stability, easier maintenance, and a faster path to commercial viability.
          </p>
        </div>
      </section>

      <section className="tech-overview p-8">
        <div className="container">
          <div className="tech-intro">
            <h2>The ASPL Fusion Advantage: Why the Advanced Magnetic Mirror?</h2>
            <p>The global pursuit of fusion has largely focused on complex, toroidal (donut-shaped) devices like the tokamak. At ASPL Fusion, we have made a deliberate and strategic choice to pursue a different path: the Advanced Magnetic Mirror.</p>
            <p>This decision is rooted in a deep understanding of fusion history and cutting-edge technology. While the U.S. deprioritized linear mirror systems in the 1980s, research continued to mature in Russia and Japan, successfully overcoming many of the early challenges related to plasma stability and leakage. Devices like the Gas Dynamic Trap (GDT) in Russia demonstrated stable, high-pressure plasma, proving the fundamental viability of the concept.</p>
            <p>Today, we are supercharging this matured technology with modern breakthroughs, chiefly the use of High-Temperature Superconducting (HTS) magnets. This allows us to achieve powerful magnetic fields (&gt;25 T) that dramatically improve plasma confinement and overall performance, creating a system that is inherently more stable than its predecessors.</p>
            <p>Our approach is not about reviving an old technology, but about capitalizing on a proven one that others overlooked. By combining decades of international progress with 21st-century materials and control systems, we are building a fusion platform that is potentially simpler to construct, more reliable to operate, and faster to commercialize.</p>
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
                  <h3>Engineered for Commercial Reality</h3>
                  <p>Our technology is designed with the end goal in mind: reliable, cost-effective energy production. The linear geometry of our Advanced Magnetic Mirror avoids the immense engineering complexity of toroidal devices, leading to a system that is easier to build, access, and maintain. This focus on practical execution is central to our mission of making fusion a commercial reality for India.</p>
                  
                  <div className="strategic-targets">
                    <h4>Strategic Targets:</h4>
                    <ul>
                      <li><strong>Reduced Complexity:</strong> Targeting a significant reduction in manufacturing and construction complexity compared to toroidal designs.</li>
                      <li><strong>Enhanced Maintainability:</strong> A linear architecture allows for direct access to components, targeting higher plant availability and lower operational costs.</li>
                      <li><strong>Faster Deployment:</strong> A modular, scalable design enables a more rapid and flexible deployment timeline.</li>
                    </ul>
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
                        <h4>High-Temperature Superconducting (HTS) Magnets</h4>
                        <p>We utilize state-of-the-art HTS magnets to generate the powerful fields required for stable plasma confinement. This technology allows for a more compact and efficient magnet system compared to traditional superconductors.</p>
                      </div>
                    </div>
                    <div className="component-item">
                      <i className="fas fa-fire"></i>
                      <div>
                        <h4>Advanced Plasma Heating Systems</h4>
                        <p>Our system employs high-power Neutral Beam Injection (NBI) to heat the plasma to fusion temperatures (&gt;100 million °C) and sustain its high performance.</p>
                      </div>
                    </div>
                    <div className="component-item">
                      <i className="fas fa-cogs"></i>
                      <div>
                        <h4>AI-Powered Control Systems</h4>
                        <p>We are integrating advanced artificial intelligence and machine learning algorithms to provide real-time plasma control, ensuring optimal stability and performance second by second.</p>
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
                      <h4>Inherent Stability</h4>
                      <p>The physics of magnetic mirror confinement provides a high degree of plasma stability, a major challenge for many other fusion approaches.</p>
                    </ElectricBorder>
                    <ElectricBorder className="advantage-item" as="div">
                      <h4>Modular & Scalable</h4>
                      <p>The linear design is inherently modular. Capacity can be scaled incrementally by extending the central core, offering a flexible path from pilot plants to large-scale commercial facilities.</p>
                    </ElectricBorder>
                    <ElectricBorder className="advantage-item" as="div">
                      <h4>Versatile Neutron Source</h4>
                      <p>The high flux of neutrons produced by our device makes it a versatile platform capable of serving multiple high-value applications, from producing medical isotopes to breeding fuel and transmuting waste.</p>
                    </ElectricBorder>
                  </div>
                </div>
              )}

              {activeTab === 'timeline' && (
                <div className="tab-panel">
                  <h3>Our Development Pathway</h3>
                  <p>Our technology development follows our disciplined, four-phase commercialization strategy. Each phase is designed to systematically advance our technology's readiness level (TRL), from proven commercial applications in Phase 1 to a fully operational, grid-scale power plant in Phase 4.</p>
                  
                  <div className="timeline">
                    <div className="timeline-item">
                      <div className="timeline-year">Phase 1</div>
                      <div className="timeline-content">
                        <h4>Commercial Neutron Source</h4>
                        <p>Deploying commercial neutron source technology (TRL 8-9) for medical isotope production</p>
                      </div>
                    </div>
                    <div className="timeline-item">
                      <div className="timeline-year">Phase 2</div>
                      <div className="timeline-content">
                        <h4>Advanced Magnetic Mirror Prototype</h4>
                        <p>Demonstrating our Advanced Magnetic Mirror prototype (TRL 6-7)</p>
                      </div>
                    </div>
                    <div className="timeline-item">
                      <div className="timeline-year">Phase 3</div>
                      <div className="timeline-content">
                        <h4>Complete Power Plant System</h4>
                        <p>Qualifying our complete power plant system (TRL 8)</p>
                      </div>
                    </div>
                    <div className="timeline-item">
                      <div className="timeline-year">Phase 4</div>
                      <div className="timeline-content">
                        <h4>Fleet Operation</h4>
                        <p>Achieving proven fleet operation in a commercial environment (TRL 9)</p>
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
            <p className="image-caption">Artistic rendering of ASPL Fusion's magnetic mirror system</p>
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
