import { useState } from 'react'
import './App.css'

function App() {
  const [activeExpertise, setActiveExpertise] = useState(0);
  const [expandedIndustry, setExpandedIndustry] = useState(null);

  const toggleIndustry = (index) => {
    setExpandedIndustry(expandedIndustry === index ? null : index);
  };

  const expertiseItems = [
    {
      title: "Collaborative Delivery",
      tagline: "Cross-Functional Teams • Stakeholder Buy-In • On-Time Execution",
      description: "Our unique approach starts with deeply understanding different working styles, then finding the core unifier that allows internal and external stakeholders to move as one. This collaboration-first methodology has delivered results like the successful buildout of an urgent care facility—completed under budget, ahead of schedule, with seamless adoption."
    },
    {
      title: "Knowledge & Systems",
      tagline: "Tool Development • AI Integration • Sustainable Knowledge Transfer",
      description: "We've designed and deployed enterprise knowledge management platforms with generative AI capabilities—reducing time spent searching for information, significantly improving response times, and increasing overall team efficiency. Our focus is always on sustainable knowledge transfer."
    },
    {
      title: "Enterprise Operations",
      tagline: "Stakeholder Alignment • Process Excellence • Strategic Execution",
      description: "With experience spanning healthcare nonprofits, state agencies, and global biopharma companies, we understand the complexity of enterprise-level operations. We help organizations identify solutions to operational gaps using proven project management methodologies."
    }
  ];

  const industries = [
    { 
      icon: "/icons/healthcare.png", 
      name: "Healthcare", 
      clients: [
        { name: "Kaiser Permanente", logo: "/logos/kaiser.jpg" },
        { name: "Mary McLeod Bethune Foundation", logo: "/logos/bethune.jpeg" }
      ]
    },
    { 
      icon: "/icons/biopharma.png", 
      name: "Biopharma", 
      clients: [
        { name: "UCB Incorporated", logo: "/logos/ucb.webp" }
      ]
    },
    { 
      icon: "/icons/government.png", 
      name: "Government", 
      clients: [
        { name: "Georgia DOT", logo: "/logos/gdot.jpg" }
      ]
    },
    { 
      icon: "/icons/technology.png", 
      name: "Technology", 
      clients: [
        { name: "AutoTrader", logo: "/logos/autotrader.jpg" }
      ]
    }
  ];

  return (
    <div className="app">
      {/* Hero - Option A Layout */}
      <section className="hero" id="home">
        <div className="hero-top">
          <div className="hero-logo-container">
            <img src="/logo.png" alt="The Pistis Group" className="hero-logo" />
          </div>
          <div className="hero-content">
            <h1>Strategic Project Management<br />& Operations Consulting</h1>
            <p className="hero-subtitle">From Vision to Operational Reality</p>
            <a href="#contact" className="cta-button">Get In Touch</a>
          </div>
        </div>
        <div className="hero-image-section">
          <div className="hero-image-wrapper">
            <img src="/hero-desk.png" alt="Professional workspace" className="hero-image" />
          </div>
        </div>
      </section>

      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <a href="#home" className="nav-logo-link">
            <img src="/logo.png" alt="The Pistis Group" className="nav-logo" />
          </a>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#expertise">Expertise</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* About Section */}
      <section className="about" id="about">
        <div className="container">
          <div className="about-grid">
            <div className="about-content">
              <h2>The <span className="script-text">Pistis</span> Group</h2>
              <p className="about-lead">The name <em>Pistis</em> comes from the Greek word meaning faith—but it carries a deeper significance: belief, trust, faithfulness, and loyalty.</p>
              <p>This philosophy of steadfast commitment, honesty, and keeping promises is the foundation of how we work. When enterprise organizations face operational complexity, misaligned stakeholders, or ambitious initiatives—they need a partner they can trust.</p>
              <p>With over 15 years of project management experience across healthcare, biopharma, government, and technology, The Pistis Group brings order to complexity and transforms ambitious visions into operational reality.</p>
            </div>
            <div className="about-stats">
              <div className="stat-card">
                <span className="stat-number">600+</span>
                <span className="stat-label">Projects Delivered</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">10+</span>
                <span className="stat-label">Industries Served</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">100%</span>
                <span className="stat-label">Stakeholder Alignment</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="industries">
        <div className="container">
          <h2>Industries Served</h2>
          <div className="industries-grid">
            {industries.map((industry, index) => (
              <div 
                key={index}
                className={`industry-item ${expandedIndustry === index ? 'expanded' : ''}`}
                onClick={() => toggleIndustry(index)}
              >
                <div className="industry-header">
                  <span className="industry-icon"><img src={industry.icon} alt={industry.name} className="industry-icon-img" /></span>
                  <span className="industry-name">{industry.name}</span>
                  <span className="industry-toggle">{expandedIndustry === index ? '−' : '+'}</span>
                </div>
                {expandedIndustry === index && (
                  <div className="industry-clients">
                    <span className="clients-label">Trusted By</span>
                    <div className="client-logos">
                      {industry.clients.map((client, i) => (
                        <div key={i} className="client-logo-container">
                          <img src={client.logo} alt={client.name} className="client-logo" />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="expertise" id="expertise">
        <div className="container">
          <h2>Experience & Expertise</h2>
          <p className="section-intro">Helping senior leaders turn operational friction into momentum.</p>
          <div className="expertise-tabs">
            {expertiseItems.map((item, index) => (
              <button
                key={index}
                className={`expertise-tab ${activeExpertise === index ? 'active' : ''}`}
                onClick={() => setActiveExpertise(index)}
              >
                {item.title}
              </button>
            ))}
          </div>
          <div className="expertise-content">
            <div className="expertise-card">
              <p className="expertise-tagline">{expertiseItems[activeExpertise].tagline}</p>
              <h3>{expertiseItems[activeExpertise].title}</h3>
              <p>{expertiseItems[activeExpertise].description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services" id="services">
        <div className="container">
          <h2>Services</h2>
          <p className="section-intro">Operational excellence for organizations where complexity is the norm.</p>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-number">01</div>
              <h3>Project Management & Execution</h3>
              <p>End-to-end project leadership for complex initiatives. From planning through deployment, ensuring on-time, under-budget delivery.</p>
            </div>
            <div className="service-card">
              <div className="service-number">02</div>
              <h3>Process Optimization</h3>
              <p>Identifying operational gaps and implementing process efficiencies. Building tools that help teams operate seamlessly.</p>
            </div>
            <div className="service-card">
              <div className="service-number">03</div>
              <h3>Strategic Operations Consulting</h3>
              <p>Sustainable knowledge transfer and best practices that outlast the engagement. Delivering outcomes that stick.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner">
        <div className="container">
          <blockquote>"Delivers meaningful impact—fast."</blockquote>
          <p>Ready to transform your vision into operational reality?</p>
          <a href="#contact" className="cta-button-light">Let's Talk</a>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Get In Touch</h2>
              <p>Whether you're facing operational complexity, need to align diverse stakeholders, or have an ambitious initiative—let's discuss how The Pistis Group can help.</p>
              <div className="contact-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                <a href="mailto:zalika.collins@pistisgroup.com">zalika.collins@pistisgroup.com</a>
              </div>
            </div>
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-row">
                <div className="form-group">
                  <label>Name</label>
                  <input type="text" name="name" required />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" name="email" required />
                </div>
              </div>
              <div className="form-group">
                <label>Organization</label>
                <input type="text" name="organization" />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea name="message" rows="4" required></textarea>
              </div>
              <button type="submit" className="submit-button">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <img src="/logo.png" alt="The Pistis Group" className="footer-logo" />
            <div className="footer-links">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#expertise">Expertise</a>
              <a href="#services">Services</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2026 The Pistis Group LLC. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
