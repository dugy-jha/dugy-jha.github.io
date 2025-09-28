import { Link } from 'react-router-dom';
import ElectricBorder from '../components/ElectricBorder';
import CounterAnimation from '../components/CounterAnimation';
import '../styles/Applications.css';

function Applications() {
  return (
    <div className="applications-page">
      <section className="page-hero hero-bg-applications">
        <div className="container">
          <h1 className="gradient-text">Applications</h1>
          <p className="hero-subtitle">
            Transforming industries with versatile fusion technology
          </p>
        </div>
      </section>

      <section className="applications-intro p-8">
        <div className="container">
          <div className="intro-content">
            <h2>Beyond Electricity: The Power of Versatility</h2>
            <p>Our technology is a versatile neutron source with multiple high-value applications. Our strategy is to generate revenue years before producing grid-scale power by addressing critical national needs in healthcare, heavy industry, and clean fuels.</p>
          </div>
        </div>
      </section>

      <section className="medical-isotopes p-8">
        <div className="container">
          <h2 className="section-title">Medical Isotope Production</h2>
          <div className="application-content">
            <div className="application-text">
              <h3>Securing India's Healthcare Infrastructure</h3>
              <p>India is largely import-dependent for critical medical isotopes like Molybdenum-99 (Mo-99), creating a significant vulnerability in the nation's healthcare supply chain.</p>
              <p>Our technology enables reliable, domestic production of Mo-99, the parent isotope for Technetium-99m, which is used in over 80% of all nuclear medicine procedures.</p>
              
              <div className="key-benefits">
                <h4>Key Benefits</h4>
                <ul>
                  <li>Ensures a secure domestic supply for hospitals and patients</li>
                  <li>Reduces costs by eliminating complex import logistics</li>
                  <li>Provides fresher, higher-quality isotopes to clinicians</li>
                </ul>
              </div>
            </div>
            
            <div className="application-stats">
              <ElectricBorder className="stat-box" as="div">
                <div className="stat-value">
                  <CounterAnimation end={40} suffix="M+" duration={2000} />
                </div>
                <div className="stat-description">Annual procedures globally using Mo-99</div>
              </ElectricBorder>
              
              <ElectricBorder className="stat-box" as="div">
                <div className="stat-value">
                  <CounterAnimation end={85} suffix="%" duration={2000} />
                </div>
                <div className="stat-description">Import dependence for medical isotopes in India</div>
              </ElectricBorder>
              
              <ElectricBorder className="stat-box" as="div">
                <div className="stat-value">
                  <CounterAnimation end={12} suffix="%" duration={2000} />
                </div>
                <div className="stat-description">Projected annual growth in the nuclear medicine market</div>
              </ElectricBorder>
            </div>
          </div>
        </div>
      </section>

      <section className="industrial-heat p-8">
        <div className="container">
          <h2 className="section-title">Industrial Heat Applications</h2>
          <div className="application-content reverse">
            <div className="application-text">
              <h3>Decarbonizing Heavy Industry</h3>
              <p>Foundational industries like steel, cement, and chemicals require ultra-high-temperature process heat (above 1000°C), which is currently generated almost exclusively by burning fossil fuels.</p>
              <p>Fusion provides a source of clean, continuous, high-grade heat, enabling these "hard-to-abate" sectors to decarbonize without compromising production.</p>
              
              <div className="industry-applications">
                <ElectricBorder className="industry-card" as="div">
                  <i className="fas fa-industry"></i>
                  <h4>Steel Production</h4>
                  <p>Direct reduced iron process using hydrogen</p>
                </ElectricBorder>
                
                <ElectricBorder className="industry-card" as="div">
                  <i className="fas fa-cube"></i>
                  <h4>Cement Manufacturing</h4>
                  <p>High-temperature kilns without coal combustion</p>
                </ElectricBorder>
                
                <ElectricBorder className="industry-card" as="div">
                  <i className="fas fa-flask"></i>
                  <h4>Chemical Processing</h4>
                  <p>Clean heat for ammonia, methanol, and other chemicals</p>
                </ElectricBorder>
              </div>
            </div>
            
            <div className="temperature-chart">
              <h4>Temperature Requirements by Industry</h4>
              <div className="temp-bars">
                <div className="temp-bar">
                  <span className="industry">Steel</span>
                  <div className="bar-container">
                    <div className="bar" style={{width: '90%'}}>
                      <span className="temp">1600°C</span>
                    </div>
                  </div>
                </div>
                <div className="temp-bar">
                  <span className="industry">Cement</span>
                  <div className="bar-container">
                    <div className="bar" style={{width: '80%'}}>
                      <span className="temp">1450°C</span>
                    </div>
                  </div>
                </div>
                <div className="temp-bar">
                  <span className="industry">Glass</span>
                  <div className="bar-container">
                    <div className="bar" style={{width: '85%'}}>
                      <span className="temp">1500°C</span>
                    </div>
                  </div>
                </div>
                <div className="temp-bar">
                  <span className="industry">Chemicals</span>
                  <div className="bar-container">
                    <div className="bar" style={{width: '60%'}}>
                      <span className="temp">1000°C</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="hydrogen-production p-8">
        <div className="container">
          <h2 className="section-title">Hydrogen Production</h2>
          <div className="application-content">
            <div className="application-text">
              <h3>Enabling the Green Hydrogen Economy</h3>
              <p>Current green hydrogen production via electrolysis is energy-intensive and expensive.</p>
              <p>Fusion can power high-efficiency thermochemical water-splitting cycles, which have the potential to be significantly more efficient than electrolysis, producing green hydrogen at a competitive cost.</p>
              
              <div className="hydrogen-uses">
                <h4>Key Applications</h4>
                <div className="uses-grid">
                  <div className="use-case">
                    <i className="fas fa-truck"></i>
                    <h5>Transportation</h5>
                    <p>Fuel for trucks, ships, and aircraft</p>
                  </div>
                  <div className="use-case">
                    <i className="fas fa-seedling"></i>
                    <h5>Agriculture</h5>
                    <p>Green ammonia for fertilizers</p>
                  </div>
                  <div className="use-case">
                    <i className="fas fa-cogs"></i>
                    <h5>Industry</h5>
                    <p>Clean reducing agent for steel</p>
                  </div>
                  <div className="use-case">
                    <i className="fas fa-battery-full"></i>
                    <h5>Energy Storage</h5>
                    <p>Long-term renewable energy storage</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="hydrogen-comparison">
              <h4>Production Method Comparison</h4>
              <table className="comparison-table">
                <thead>
                  <tr>
                    <th>Method</th>
                    <th>Efficiency</th>
                    <th>Cost ($/kg)</th>
                    <th>Carbon Footprint</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="highlight">
                    <td>Fusion Thermochemical</td>
                    <td>75-80% (Target)</td>
                    <td>$2.00-3.00 (Projected)</td>
                    <td>Zero</td>
                  </tr>
                  <tr>
                    <td>Electrolysis (Renewable)</td>
                    <td>65-70%</td>
                    <td>$3.00-6.00</td>
                    <td>Zero</td>
                  </tr>
                  <tr>
                    <td>Steam Methane Reforming</td>
                    <td>65-75%</td>
                    <td>$1.00-2.00</td>
                    <td>High</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="grid-electricity p-8">
        <div className="container">
          <h2 className="section-title">Grid-Scale Electricity</h2>
          <div className="application-content reverse">
            <div className="application-text">
              <h3>The Ultimate Goal: Unlimited Clean Power</h3>
              <p>Advantages:</p>
              <ul>
                <li><strong>Zero Carbon:</strong> No greenhouse gas emissions during operation</li>
                <li><strong>Abundant Fuel:</strong> Deuterium from seawater and lithium from the earth's crust provide a fuel supply for millennia</li>
                <li><strong>Inherently Safe:</strong> A runaway reaction is physically impossible, and no long-lived radioactive waste is produced</li>
                <li><strong>Baseload Power:</strong> Provides 24/7 reliable electricity, independent of weather, to stabilize a grid with high shares of renewables</li>
              </ul>
              
            </div>
            
            <div className="power-comparison">
              <h4>Energy Density Comparison</h4>
              <div className="density-chart">
                <div className="density-item fusion">
                  <span className="source">Fusion (1kg fuel)</span>
                  <div className="energy-bar">
                    <span className="value">90,000,000 kWh</span>
                  </div>
                </div>
                <div className="density-item coal">
                  <span className="source">Coal (1kg)</span>
                  <div className="energy-bar">
                    <span className="value">8 kWh</span>
                  </div>
                </div>
                <div className="density-item natural-gas">
                  <span className="source">Natural Gas (1kg)</span>
                  <div className="energy-bar">
                    <span className="value">14 kWh</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="market-opportunity p-8">
        <div className="container">
          <h2 className="text-center mb-12">Market Opportunity</h2>
          <div className="market-stats">
            <ElectricBorder className="market-stat" as="div">
              <h3>&gt;$3 Trillion</h3>
              <p>Global Energy Market</p>
            </ElectricBorder>
            
            <ElectricBorder className="market-stat" as="div">
              <h3>$25-45 Billion</h3>
              <p>Annual Industrial Heat Market (Equipment)</p>
            </ElectricBorder>
            
            <ElectricBorder className="market-stat" as="div">
              <h3>~$10 Billion</h3>
              <p>Medical Isotope Market by 2030</p>
            </ElectricBorder>
            
            <ElectricBorder className="market-stat" as="div">
              <h3>~$500 Billion</h3>
              <p>Projected Hydrogen Economy by 2030 (High-End Estimate)</p>
            </ElectricBorder>
          </div>
        </div>
      </section>

      <section className="applications-cta p-8">
        <div className="container text-center">
          <h2>Ready to Transform Your Industry?</h2>
          <p className="cta-text">Discover how ASPL Fusion's technology can revolutionize your operations</p>
          <div className="cta-buttons">
            <ElectricBorder as={Link} to="/contact" className="cta-button">
              Explore Partnership Opportunities
            </ElectricBorder>
            <Link to="/technology" className="learn-more-button">
              Learn About Our Technology
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Applications;
