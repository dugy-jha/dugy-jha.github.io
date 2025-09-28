import { Link } from 'react-router-dom';
import ElectricBorder from '../components/ElectricBorder';
// Using WebP format for better performance and optimization
import prabhatImg from '../assets/images/Dr-Prabhat-Ranjan.webp';
import abhayImg from '../assets/images/Abhay-K-Jha.webp';
import abhinavImg from '../assets/images/Abhinav-Jha.webp';
import saxenaImg from '../assets/images/Yogesh-Saxena.webp';
import '../styles/Team.css';

function Team() {
  const teamMembers = [
    {
      id: 1,
      name: "Prof. Prabhat Ranjan",
      position: "Nuclear Fusion Scientist",
      bio: "A distinguished nuclear fusion scientist who provides the deep technical vision for ASPL. After receiving his PhD from UC Berkeley, he was key in improving India's nuclear fusion reactors. He was Project leader of ADITYA Tokamak and SST-1 Tokamak Operation and Control Group.",
      image: prabhatImg,
      linkedin: "https://www.linkedin.com/in/profprabhatranjan/"
    },
    {
      id: 2,
      name: "Mr. Abhay K. Jha",
      position: "Strategic Leader",
      bio: "A successful entrepreneur with a proven track record, providing strategic and corporate leadership for ASPL. Founder of ESSI Security and Defence, he has executed complex projects for critical national infrastructure including Parliament House and the Reserve Bank of India.",
      image: abhayImg,
      linkedin: "https://www.linkedin.com/in/abhay-jha-61ab9a159/"
    },
    {
      id: 3,
      name: "Mr. Abhinav Jha",
      position: "Operations Director",
      bio: "A dynamic entrepreneur who drives the operational execution of ASPL's ambitious roadmap. His background combines hands-on project management at ESSI with experience at cutting-edge research centers like Stanford Intelligent Systems Lab and UCLA's Condensed Matter Physics lab.",
      image: abhinavImg,
      linkedin: "https://www.linkedin.com/in/acejack/"
    }
  ];

  const advisors = [
    {
      id: 1,
      name: "Prof. Y.C. Saxena",
      position: "Scientific Advisor",
      bio: "Retired Senior Professor of Institute for Plasma Research (IPR), Gandhinagar. One of the founder members of IPR. As a faculty member at Physical Research Laboratory (PRL), Ahmedabad, he was instrumental in starting Experimental Plasma Physics research at PRL. He did his Ph.D. in cosmic rays under the supervision of Dr. Bibha Chowdhuri. He is a member, past President and Secretary of Plasma Science Society of India, Fellow of Gujarat Science Academy, and past General Secretary of Asian Plasma & Fusion Association.",
      image: saxenaImg,
      linkedin: "https://www.linkedin.com/in/yogesh-chandra-saxena-23815a57/"
    }
    // TODO: Add more advisors when available
    // {
    //   id: 2,
    //   name: "Dr. Rachel Chen",
    //   position: "International Advisor",
    //   bio: "Former fusion program lead at ITER. Expert in international collaborations.",
    //   image: personImg,
    //   linkedin: "https://www.linkedin.com/company/aspl-fusion"
    // },
    // {
    //   id: 3,
    //   name: "Arjun Malhotra",
    //   position: "Business Advisor",
    //   bio: "Serial entrepreneur and investor in deep tech. Co-founder of multiple unicorns.",
    //   image: personImg,
    //   linkedin: "https://www.linkedin.com/company/aspl-fusion"
    // }
  ];

  return (
    <div className="team-page">
      <section className="page-hero">
        <div className="container">
          <h1 className="gradient-text">Our Team</h1>
          <p className="hero-subtitle">
            World-class talent building the future of fusion energy
          </p>
        </div>
      </section>

      <section className="leadership-section p-8">
        <div className="container">
          <h2 className="text-center mb-12">Leadership Team</h2>
          <div className="team-grid">
            {teamMembers.map(member => (
              <ElectricBorder key={member.id} className="team-card" as="div">
                <img src={member.image} alt={member.name} className="team-photo" />
                <h3>{member.name}</h3>
                <p className="position">{member.position}</p>
                <p className="bio">{member.bio}</p>
                <a 
                  href={member.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="linkedin-link"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
              </ElectricBorder>
            ))}
          </div>
        </div>
      </section>

      <section className="advisors-section p-8">
        <div className="container">
          <h2 className="text-center mb-12">Advisory Board</h2>
          <div className="advisors-grid">
            {advisors.map(advisor => (
              <ElectricBorder key={advisor.id} className="advisor-card" as="div">
                <img src={advisor.image} alt={advisor.name} className="advisor-photo" />
                <div className="advisor-info">
                  <h3>{advisor.name}</h3>
                  <p className="position">{advisor.position}</p>
                  <p className="bio">{advisor.bio}</p>
                  <a 
                    href={advisor.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="linkedin-link"
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
              </ElectricBorder>
            ))}
          </div>
        </div>
      </section>

      <section className="join-team-section p-8">
        <div className="container text-center">
          <h2>Join Our Mission</h2>
          <p className="join-text">
            We're always looking for exceptional talent to join our team. If you're passionate about fusion energy 
            and want to make a real impact, we'd love to hear from you.
          </p>
          <ElectricBorder as={Link} to="/careers" className="cta-button">
            View Open Positions
          </ElectricBorder>
        </div>
      </section>
    </div>
  );
}

export default Team;
