import ElectricBorder from '../components/ElectricBorder';
import '../styles/Careers.css';

function Careers() {
  return (
    <div className="careers-page">
      <section className="page-hero">
        <div className="container">
          <h1 className="gradient-text">Careers at ASPL Fusion</h1>
          <p className="hero-subtitle">
            Join us in building India's clean energy future
          </p>
        </div>
      </section>

      <section className="careers-content p-8">
        <div className="container">
          <div className="careers-intro text-center">
            <h2>Be Part of Something Revolutionary</h2>
            <p>At ASPL Fusion, we're not just building a company – we're pioneering a new industry that will transform India's energy landscape. We're looking for exceptional individuals who share our passion for solving complex challenges and creating lasting impact.</p>
          </div>
          
          <div className="why-aspl">
            <h2>Why Join ASPL Fusion?</h2>
            <div className="benefits-grid">
              <ElectricBorder className="benefit-item" as="div">
                <i className="fas fa-rocket"></i>
                <h3>Mission-Driven Work</h3>
                <p>Contribute directly to solving India's energy crisis and reducing carbon emissions while advancing cutting-edge fusion technology.</p>
              </ElectricBorder>
              <ElectricBorder className="benefit-item" as="div">
                <i className="fas fa-users"></i>
                <h3>World-Class Team</h3>
                <p>Work alongside leading experts in plasma physics, nuclear engineering, and business from top institutions globally.</p>
              </ElectricBorder>
              <ElectricBorder className="benefit-item" as="div">
                <i className="fas fa-chart-line"></i>
                <h3>Growth Opportunities</h3>
                <p>Join an early-stage company with immense growth potential. Shape your career while building a transformative industry.</p>
              </ElectricBorder>
              <ElectricBorder className="benefit-item" as="div">
                <i className="fas fa-graduation-cap"></i>
                <h3>Continuous Learning</h3>
                <p>Access to conferences, training programs, and collaboration with leading research institutions worldwide.</p>
              </ElectricBorder>
              <ElectricBorder className="benefit-item" as="div">
                <i className="fas fa-balance-scale"></i>
                <h3>Work-Life Balance</h3>
                <p>Flexible work arrangements, comprehensive health benefits, and a culture that values personal well-being.</p>
              </ElectricBorder>
              <ElectricBorder className="benefit-item" as="div">
                <i className="fas fa-award"></i>
                <h3>Competitive Compensation</h3>
                <p>Industry-leading salaries, equity participation, and performance-based incentives that reward excellence.</p>
              </ElectricBorder>
            </div>
          </div>
          
          <div className="open-positions">
            <h2 className="text-center">Open Positions</h2>
            
            <div className="department-section">
              <h3><i className="fas fa-atom"></i> Physics & Engineering</h3>
              <div className="job-listings">
                <ElectricBorder className="job-card" as="div">
                  <div className="job-header">
                    <h4>Senior Plasma Physicist</h4>
                    <span className="job-location">New Delhi</span>
                  </div>
                  <p>Lead plasma confinement research and optimization for our magnetic mirror systems. PhD in Plasma Physics with 5+ years experience required.</p>
                  <ul className="job-requirements">
                    <li>Experience with magnetic confinement fusion</li>
                    <li>Computational modeling expertise (COMSOL, ANSYS)</li>
                    <li>Published research in peer-reviewed journals</li>
                  </ul>
                  <a href="mailto:info@asplfusion.com?subject=Application: Senior Plasma Physicist" className="apply-button">Apply Now</a>
                </ElectricBorder>
                
                <ElectricBorder className="job-card" as="div">
                  <div className="job-header">
                    <h4>Magnet Systems Engineer</h4>
                    <span className="job-location">New Delhi</span>
                  </div>
                  <p>Design and optimize superconducting magnet systems for fusion applications. M.Tech/PhD in relevant field with HTS experience preferred.</p>
                  <ul className="job-requirements">
                    <li>High-temperature superconductor experience</li>
                    <li>Cryogenic systems knowledge</li>
                    <li>FEA and electromagnetic modeling skills</li>
                  </ul>
                  <a href="mailto:info@asplfusion.com?subject=Application: Magnet Systems Engineer" className="apply-button">Apply Now</a>
                </ElectricBorder>
                
                <ElectricBorder className="job-card" as="div">
                  <div className="job-header">
                    <h4>Nuclear Engineer - Isotope Production</h4>
                    <span className="job-location">New Delhi</span>
                  </div>
                  <p>Lead the design and optimization of our medical isotope production systems. Experience with accelerator-based production preferred.</p>
                  <ul className="job-requirements">
                    <li>Nuclear engineering degree with 3+ years experience</li>
                    <li>Radiochemistry and isotope separation knowledge</li>
                    <li>Regulatory compliance experience (AERB)</li>
                  </ul>
                  <a href="mailto:info@asplfusion.com?subject=Application: Nuclear Engineer" className="apply-button">Apply Now</a>
                </ElectricBorder>
              </div>
            </div>
            
            <div className="department-section">
              <h3><i className="fas fa-cogs"></i> Operations & Safety</h3>
              <div className="job-listings">
                <ElectricBorder className="job-card" as="div">
                  <div className="job-header">
                    <h4>Radiation Safety Officer</h4>
                    <span className="job-location">New Delhi</span>
                  </div>
                  <p>Ensure compliance with all radiation safety regulations and develop safety protocols for our facilities.</p>
                  <ul className="job-requirements">
                    <li>RSO certification from AERB</li>
                    <li>5+ years in radiation safety management</li>
                    <li>Experience with accelerator facilities preferred</li>
                  </ul>
                  <a href="mailto:info@asplfusion.com?subject=Application: Radiation Safety Officer" className="apply-button">Apply Now</a>
                </ElectricBorder>
                
                <ElectricBorder className="job-card" as="div">
                  <div className="job-header">
                    <h4>Project Manager - Construction</h4>
                    <span className="job-location">New Delhi</span>
                  </div>
                  <p>Manage construction of our first isotope production facility. Experience with nuclear/pharmaceutical facilities required.</p>
                  <ul className="job-requirements">
                    <li>10+ years project management experience</li>
                    <li>Clean room and radiation facility construction</li>
                    <li>PMP certification preferred</li>
                  </ul>
                  <a href="mailto:info@asplfusion.com?subject=Application: Project Manager" className="apply-button">Apply Now</a>
                </ElectricBorder>
                
                <ElectricBorder className="job-card" as="div">
                  <div className="job-header">
                    <h4>Regulatory & Operations Analyst (Licensing & Imports)</h4>
                    <span className="job-location">Remote</span>
                  </div>
                  <p>Derisk AERB licensing and import execution via a traceable roadmap for accelerators and enriched targets.</p>
                  <ul className="job-requirements">
                    <li>Nuclear Engg., Radiological Safety, Chemical Engg., Regulatory Affairs, Industrial Engg.</li>
                    <li>Exposure to AERB/eLORA, DGFT, customs; comfort with Gantt/Risk tools</li>
                    <li>Experience with regulatory compliance and project management methodologies</li>
                  </ul>
                  <a href="mailto:info@asplfusion.com?subject=Application: Regulatory & Operations Analyst" className="apply-button">Apply Now</a>
                </ElectricBorder>
                
                <ElectricBorder className="job-card" as="div">
                  <div className="job-header">
                    <h4>CDSCO Regulatory Affairs Analyst (Radiopharma Manufacturing)</h4>
                    <span className="job-location">Remote</span>
                  </div>
                  <p>Chart and prosecute the CDSCO approvals pathway for radiopharmaceutical manufacturing, aligned with AERB safety requirements.</p>
                  <ul className="job-requirements">
                    <li>Pharmaceutical Sciences/Pharmacy, Regulatory Affairs, Chemical/Industrial Engg., Biotechnology</li>
                    <li>Familiar with Indian drug regulations (CDSCO/DCGI), GMP/Schedule M, and dossier assembly</li>
                    <li>Knowledge of radiopharmaceutical manufacturing and quality control processes</li>
                  </ul>
                  <a href="mailto:info@asplfusion.com?subject=Application: CDSCO Regulatory Affairs Analyst" className="apply-button">Apply Now</a>
                </ElectricBorder>
              </div>
            </div>
            
            <div className="department-section">
              <h3><i className="fas fa-briefcase"></i> Business & Strategy</h3>
              <div className="job-listings">
                <ElectricBorder className="job-card" as="div">
                  <div className="job-header">
                    <h4>Business Development Manager - Healthcare</h4>
                    <span className="job-location">New Delhi / Mumbai</span>
                  </div>
                  <p>Drive sales of medical isotopes to hospitals and diagnostic centers across India. Healthcare industry experience essential.</p>
                  <ul className="job-requirements">
                    <li>5+ years in healthcare/pharmaceutical sales</li>
                    <li>Strong network in nuclear medicine</li>
                    <li>MBA preferred</li>
                  </ul>
                  <a href="mailto:info@asplfusion.com?subject=Application: Business Development Manager" className="apply-button">Apply Now</a>
                </ElectricBorder>
                
                <ElectricBorder className="job-card" as="div">
                  <div className="job-header">
                    <h4>Strategic Partnerships Lead</h4>
                    <span className="job-location">New Delhi</span>
                  </div>
                  <p>Develop strategic partnerships with government, industry, and research institutions to accelerate our mission.</p>
                  <ul className="job-requirements">
                    <li>7+ years in strategic partnerships/BD</li>
                    <li>Energy or deep-tech sector experience</li>
                    <li>Government relations expertise</li>
                  </ul>
                  <a href="mailto:info@asplfusion.com?subject=Application: Strategic Partnerships Lead" className="apply-button">Apply Now</a>
                </ElectricBorder>
                
                <ElectricBorder className="job-card" as="div">
                  <div className="job-header">
                    <h4>Market & Strategy Analyst (Isotopes)</h4>
                    <span className="job-location">Remote</span>
                  </div>
                  <p>Validate demand and craft a credible GTM strategy to reach 25-30% market share in 3 years for medical isotopes.</p>
                  <ul className="job-requirements">
                    <li>Final-year/recent grad in Pharmacy, Biotech, Chemistry, Economics, MBA (Healthcare/Strategy) or Operations Research</li>
                    <li>Comfort with market sizing, patient-journey modeling, and pricing/reimbursement</li>
                    <li>Can read regulatory/clinical docs; strong with spreadsheets and data sourcing</li>
                    <li>Strong analytical skills and ability to work with complex datasets</li>
                  </ul>
                  <a href="mailto:info@asplfusion.com?subject=Application: Market & Strategy Analyst (Isotopes)" className="apply-button">Apply Now</a>
                </ElectricBorder>
                
                <ElectricBorder className="job-card" as="div">
                  <div className="job-header">
                    <h4>Energy & PPA Analyst (Tariffs & Offtake)</h4>
                    <span className="job-location">Remote</span>
                  </div>
                  <p>Model tariff competitiveness and draft a bankable PPA strategy for future fusion output.</p>
                  <ul className="job-requirements">
                    <li>Energy Economics/Policy, Electrical Engg., Operations Research, MBA (Finance)</li>
                    <li>Exposure to PPAs (thermal, nuclear, renewable, hybrid), DISCOM structures, levelized cost modeling</li>
                    <li>Proficiency in financial modeling and energy market analysis</li>
                  </ul>
                  <a href="mailto:info@asplfusion.com?subject=Application: Energy & PPA Analyst" className="apply-button">Apply Now</a>
                </ElectricBorder>
                
                <ElectricBorder className="job-card" as="div">
                  <div className="job-header">
                    <h4>Strategic Finance & Data Room Analyst</h4>
                    <span className="job-location">Remote</span>
                  </div>
                  <p>Produce investor-grade financials and a diligence-ready virtual data room.</p>
                  <ul className="job-requirements">
                    <li>Finance/Accounting, IB/PE Analyst, Consulting, Quant Econ (strong Excel/Sheets)</li>
                    <li>Comfort with three-statement modeling, scenario analysis, cohort/funnel math, and data rooms</li>
                    <li>Experience with investor relations and due diligence processes</li>
                  </ul>
                  <a href="mailto:info@asplfusion.com?subject=Application: Strategic Finance & Data Room Analyst" className="apply-button">Apply Now</a>
                </ElectricBorder>
              </div>
            </div>
            
            <div className="department-section">
              <h3><i className="fas fa-laptop-code"></i> Software & Data</h3>
              <div className="job-listings">
                <ElectricBorder className="job-card" as="div">
                  <div className="job-header">
                    <h4>AI/ML Engineer - Plasma Control</h4>
                    <span className="job-location">New Delhi</span>
                  </div>
                  <p>Develop machine learning algorithms for real-time plasma control and optimization. Physics background preferred.</p>
                  <ul className="job-requirements">
                    <li>MS/PhD in CS, Physics, or related field</li>
                    <li>Experience with real-time control systems</li>
                    <li>Python, TensorFlow/PyTorch expertise</li>
                  </ul>
                  <a href="mailto:info@asplfusion.com?subject=Application: AI/ML Engineer" className="apply-button">Apply Now</a>
                </ElectricBorder>
                
                <ElectricBorder className="job-card" as="div">
                  <div className="job-header">
                    <h4>Technology Benchmarking & IP Analyst</h4>
                    <span className="job-location">Remote</span>
                  </div>
                  <p>Position ASPL tech vs tokamaks, stellarators, and WHAM-class concepts; craft IP defense strategy.</p>
                  <ul className="job-requirements">
                    <li>Physics/Plasma/EE/ME undergrad/masters; reads academic papers comfortably</li>
                    <li>Familiar with fusion devices (tokamak/stellarator/mirror), RF/heating, superconducting magnets</li>
                    <li>Interest in IP strategy (claims drafting, prior art, trade secrets)</li>
                    <li>Strong research and technical writing capabilities</li>
                  </ul>
                  <a href="mailto:info@asplfusion.com?subject=Application: Technology Benchmarking & IP Analyst" className="apply-button">Apply Now</a>
                </ElectricBorder>
              </div>
            </div>
          </div>
          
          
          <div className="culture-section">
            <h2>Our Culture & Values</h2>
            <div className="values-grid">
              <ElectricBorder className="value-item" as="div">
                <h3>Excellence</h3>
                <p>We pursue the highest standards in everything we do, from scientific rigor to business execution.</p>
              </ElectricBorder>
              <ElectricBorder className="value-item" as="div">
                <h3>Impact</h3>
                <p>Every decision is guided by our mission to create lasting positive impact for India and the world.</p>
              </ElectricBorder>
              <ElectricBorder className="value-item" as="div">
                <h3>Innovation</h3>
                <p>We challenge conventional thinking and embrace creative solutions to complex problems.</p>
              </ElectricBorder>
              <ElectricBorder className="value-item" as="div">
                <h3>Integrity</h3>
                <p>We operate with transparency, honesty, and ethical responsibility in all our interactions.</p>
              </ElectricBorder>
              <ElectricBorder className="value-item" as="div">
                <h3>Collaboration</h3>
                <p>We believe diverse perspectives and teamwork are essential to achieving breakthrough results.</p>
              </ElectricBorder>
              <ElectricBorder className="value-item" as="div">
                <h3>Sustainability</h3>
                <p>We're building for the long term – both in our technology and our organizational culture.</p>
              </ElectricBorder>
            </div>
          </div>
          
          <div className="application-process">
            <h2>Application Process</h2>
            <div className="process-steps">
              <div className="process-step">
                <div className="step-number">1</div>
                <h3>Application Review</h3>
                <p>Submit your application via email. We review every application carefully and respond within 2 weeks.</p>
              </div>
              <div className="process-step">
                <div className="step-number">2</div>
                <h3>Initial Screening</h3>
                <p>Phone or video interview with our HR team to discuss your background and interest in ASPL Fusion.</p>
              </div>
              <div className="process-step">
                <div className="step-number">3</div>
                <h3>Technical Interview</h3>
                <p>In-depth technical discussion with team members and hiring manager. May include case studies or presentations.</p>
              </div>
              <div className="process-step">
                <div className="step-number">4</div>
                <h3>Final Interview</h3>
                <p>Meet with senior leadership to discuss vision alignment and long-term career goals.</p>
              </div>
              <div className="process-step">
                <div className="step-number">5</div>
                <h3>Offer & Onboarding</h3>
                <p>Competitive offer followed by comprehensive onboarding to set you up for success.</p>
              </div>
            </div>
          </div>
          
          <div className="cta-section text-center">
            <h2>Ready to Make History?</h2>
            <p>If you don't see a position that matches your skills but believe you can contribute to our mission, we'd still love to hear from you.</p>
            <ElectricBorder as="a" href="mailto:info@asplfusion.com?subject=General Career Inquiry" className="cta-button">
              Send Your Resume
            </ElectricBorder>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Careers;
