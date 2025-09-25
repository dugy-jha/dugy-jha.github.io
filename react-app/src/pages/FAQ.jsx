import { useState } from 'react';
import ElectricBorder from '../components/ElectricBorder';
import '../styles/FAQ.css';

function FAQ() {
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "What is fusion energy and how does ASPL Fusion plan to achieve it?",
      answer: "Fusion energy is the power source of the sun and stars, created by combining light atomic nuclei to release immense energy. ASPL Fusion is developing a magnetic mirror confinement device, a linear approach that offers advantages in modularity and maintenance compared to traditional toroidal (donut-shaped) tokamaks. We aim to achieve net energy gain through a phased strategy, starting with commercial applications like medical isotope production to build revenue and validate our technology."
    },
    {
      id: 2,
      question: "How is ASPL Fusion's approach different from other fusion companies?",
      answer: "Many fusion companies focus solely on grid-scale electricity generation, which is a long-term goal. ASPL Fusion adopts a pragmatic, phased approach. Our initial phases focus on near-term, high-value commercial applications such as medical isotope production and industrial heat. This strategy allows us to generate revenue, de-risk our technology, and build operational expertise while progressively advancing towards clean electricity generation."
    },
    {
      id: 3,
      question: "What are the immediate applications of ASPL Fusion's technology?",
      answer: "Our first commercial application is the production of critical medical isotopes, particularly Molybdenum-99 (Mo-99), which is essential for millions of diagnostic procedures worldwide. India currently imports 100% of its medical isotopes, making this a strategic national priority. Subsequent phases will target industrial heat applications (e.g., for steel, cement, chemicals) and green hydrogen production, all before large-scale electricity generation."
    },
    {
      id: 4,
      question: "What is the timeline for ASPL Fusion's development?",
      answer: "Our roadmap is divided into four phases. Phase 1 (2025-2028) focuses on medical isotope production, aiming for commercial sales by 2028. Phase 2 (2028-2032) targets industrial heat applications. Phase 3 (2032-2038) involves green hydrogen production. Finally, Phase 4 (2038 onwards) aims for grid-scale electricity generation. Each phase builds upon the technological and commercial successes of the previous one."
    },
    {
      id: 5,
      question: "How will ASPL Fusion contribute to India's energy independence?",
      answer: "India's rapidly growing economy faces significant energy security challenges due to heavy reliance on imported fossil fuels. Fusion energy offers a clean, safe, and virtually limitless domestic power source. By developing and deploying fusion technology, ASPL Fusion aims to drastically reduce India's energy import dependence, stabilize energy costs, and provide a sustainable foundation for long-term economic growth and environmental protection."
    },
    {
      id: 6,
      question: "What kind of talent is ASPL Fusion looking for?",
      answer: "We are building a world-class team of scientists, engineers, and business professionals passionate about fusion energy. We seek individuals with expertise in plasma physics, superconducting magnets, nuclear engineering, materials science, advanced manufacturing, and project management. We value innovation, scientific rigor, commercial pragmatism, and a collaborative spirit. Visit our Careers page for current openings."
    }
  ];

  const toggleFAQ = (id) => {
    setExpandedFAQ(expandedFAQ === id ? null : id);
  };

  return (
    <div className="faq-page">
      <section className="page-hero">
        <div className="container">
          <h1 className="gradient-text">Frequently Asked Questions</h1>
          <p className="hero-subtitle">
            Everything you need to know about fusion energy and ASPL Fusion
          </p>
        </div>
      </section>

      <section className="faq-content p-8">
        <div className="container">
          <div className="faq-grid">
            {faqs.map(faq => (
              <ElectricBorder key={faq.id} className="faq-item" as="div">
                <button 
                  className="faq-toggle"
                  onClick={() => toggleFAQ(faq.id)}
                  aria-expanded={expandedFAQ === faq.id}
                >
                  <h3>{faq.question}</h3>
                  <i className={`fas fa-${expandedFAQ === faq.id ? 'minus' : 'plus'}`}></i>
                </button>
                <div className={`faq-answer ${expandedFAQ === faq.id ? 'expanded' : ''}`}>
                  <p>{faq.answer}</p>
                </div>
              </ElectricBorder>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default FAQ;
