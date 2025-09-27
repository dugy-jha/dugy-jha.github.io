import { Link } from 'react-router-dom';
import ElectricBorder from '../components/ElectricBorder';
import CounterAnimation from '../components/CounterAnimation';
import '../styles/Applications.css';

function Applications() {
  return (
    <div className="applications-page">
      <section className="page-hero">
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
            <p>While most fusion companies focus solely on electricity generation, ASPL Fusion's magnetic mirror technology enables multiple high-value applications. This versatility allows us to generate revenue years before grid-scale power, systematically de-risking our technology while addressing critical national needs.</p>
          </div>
        </div>
      </section>

      <section className="medical-isotopes p-8">
        <div className="container">
          <h2 className="section-title">Medical Isotope Production</h2>
          <div className="application-content">
            <div className="application-text">
              <h3>Securing Healthcare's Critical Infrastructure</h3>
              <p>Medical isotopes are essential for diagnosing and treating cancer, heart disease, and other critical conditions. India imports 100% of these isotopes, creating supply vulnerabilities and higher costs for patients.</p>
              <p>ASPL Fusion's neutron-rich environment is ideal for producing Mo-99, the precursor to Tc-99m used in over 80% of nuclear medicine procedures. Our technology can also produce other critical isotopes like Lu-177 for targeted cancer therapy.</p>
              
              <div className="key-benefits">
                <h4>Key Benefits</h4>
                <ul>
                  <li>Domestic production ensures supply security</li>
                  <li>Lower costs through elimination of import logistics</li>
                  <li>Fresher isotopes with higher specific activity</li>
                  <li>Scalable production to meet growing demand</li>
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
                <div className="stat-description">Annual growth in nuclear medicine</div>
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
              <p>Industries like steel, cement, and chemicals require temperatures exceeding 1000°C—currently achievable only through fossil fuel combustion. These sectors represent over 20% of global carbon emissions.</p>
              <p>ASPL Fusion's technology can provide clean, high-temperature process heat, enabling these industries to eliminate fossil fuel dependence while maintaining competitiveness.</p>
              
              <div className="industry-applications">
                <ElectricBorder className="industry-card" as="div">
                  <i className="fas fa-industry"></i>
                  <h4>Steel Production</h4>
                  <p>Direct reduced iron process using hydrogen from fusion heat</p>
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
              <h3>Enabling the Hydrogen Economy</h3>
              <p>Green hydrogen is essential for decarbonizing transportation, fertilizer production, and steel manufacturing. Current electrolysis methods are energy-intensive and expensive.</p>
              <p>ASPL Fusion's high-temperature reactors enable thermochemical water splitting—a process that's 3x more efficient than electrolysis, producing hydrogen at costs competitive with fossil fuels.</p>
              
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
                    <td>75-80%</td>
                    <td>$2.00-3.00</td>
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
              <p>While electricity generation is our Phase 4 target, it represents the most transformative application of fusion technology. Clean, abundant baseload power that can replace fossil fuels entirely.</p>
              <p>Our phased approach means we'll have proven technology, established supply chains, and operational expertise before entering the electricity market—significantly de-risking the investment.</p>
              
              <div className="electricity-advantages">
                <ElectricBorder className="advantage" as="div">
                  <i className="fas fa-leaf"></i>
                  <h4>Zero Carbon</h4>
                  <p>No greenhouse gas emissions during operation</p>
                </ElectricBorder>
                
                <ElectricBorder className="advantage" as="div">
                  <i className="fas fa-infinity"></i>
                  <h4>Unlimited Fuel</h4>
                  <p>Deuterium from seawater can power civilization for millions of years</p>
                </ElectricBorder>
                
                <ElectricBorder className="advantage" as="div">
                  <i className="fas fa-shield-alt"></i>
                  <h4>Inherently Safe</h4>
                  <p>No risk of meltdown or long-lived radioactive waste</p>
                </ElectricBorder>
                
                <ElectricBorder className="advantage" as="div">
                  <i className="fas fa-chart-line"></i>
                  <h4>Baseload Power</h4>
                  <p>24/7 reliable electricity independent of weather</p>
                </ElectricBorder>
              </div>
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
              <p>Global energy market size</p>
            </ElectricBorder>
            
            <ElectricBorder className="market-stat" as="div">
              <h3>$25-45 Billion</h3>
              <p>Annual industrial heat market</p>
            </ElectricBorder>
            
            <ElectricBorder className="market-stat" as="div">
              <h3>$10 Billion</h3>
              <p>Medical isotope market by 2030</p>
            </ElectricBorder>
            
            <ElectricBorder className="market-stat" as="div">
              <h3>$500 Billion</h3>
              <p>Projected hydrogen economy by 2030</p>
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
