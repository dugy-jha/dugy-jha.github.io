import ElectricBorder from '../components/ElectricBorder';
import personImg from '../assets/images/placeholder-person.svg';
import '../styles/Team.css';

function Team() {
  const teamMembers = [
    {
      id: 1,
      name: "Dr. Prabhat Ranjan",
      position: "Director",
      bio: "Visionary leader with 20+ years in fusion research and commercialization. Previously led fusion programs at leading national laboratories.",
      image: personImg,
      linkedin: "https://www.linkedin.com/company/aspl-fusion"
    },
    {
      id: 2,
      name: "Abhay Kumar Jha",
      position: "Director",
      bio: "Expert in magnetic confinement fusion with pioneering work in mirror configurations. PhD from IIT Delhi, postdoc at MIT.",
      image: personImg,
      linkedin: "https://www.linkedin.com/company/aspl-fusion"
    },
    {
      id: 3,
      name: "Abhinav Jha",
      position: "Director",
      bio: "15+ years experience in advanced manufacturing and superconducting magnet systems. Led engineering teams at major aerospace companies.",
      image: personImg,
      linkedin: "https://www.linkedin.com/company/aspl-fusion"
    },
    /*{
      id: 4,
      name: "Dr. Meera Gupta",
      position: "Head of Plasma Physics",
      bio: "Leading researcher in plasma stability and control. Published 50+ papers on fusion plasma physics. Former BARC scientist.",
      image: personImg,
      linkedin: "https://www.linkedin.com/company/aspl-fusion"
    },
    {
      id: 5,
      name: "Vikram Singh",
      position: "CFO",
      bio: "Seasoned financial executive with expertise in deep tech ventures. Previously CFO at renewable energy unicorn.",
      image: personImg,
      linkedin: "https://www.linkedin.com/company/aspl-fusion"
    },
    {
      id: 6,
      name: "Dr. Anjali Reddy",
      position: "Head of Applications",
      bio: "Expert in nuclear medicine and isotope production. Leading our medical isotope commercialization strategy.",
      image: personImg,
      linkedin: "https://www.linkedin.com/company/aspl-fusion"
    }
  ];

  const advisors = [
   /* {
      id: 1,
      name: "Prof. S. Chandrasekhar",
      position: "Scientific Advisor",
      bio: "Former Director of Institute for Plasma Research. Pioneer in Indian fusion research.",
      image: personImg
    },
    {
      id: 2,
      name: "Dr. Rachel Chen",
      position: "International Advisor",
      bio: "Former fusion program lead at ITER. Expert in international collaborations.",
      image: personImg
    },
    {
      id: 3,
      name: "Arjun Malhotra",
      position: "Business Advisor",
      bio: "Serial entrepreneur and investor in deep tech. Co-founder of multiple unicorns.",
      image: personImg
    } */
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
              <div key={advisor.id} className="advisor-card">
                <img src={advisor.image} alt={advisor.name} className="advisor-photo" />
                <div className="advisor-info">
                  <h3>{advisor.name}</h3>
                  <p className="position">{advisor.position}</p>
                  <p className="bio">{advisor.bio}</p>
                </div>
              </div>
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
          <ElectricBorder as="a" href="/careers" className="cta-button">
            View Open Positions
          </ElectricBorder>
        </div>
      </section>
    </div>
  );
}

export default Team;
