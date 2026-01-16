import { useState } from 'react'
import './App.css'

function App() {
  const [activeExpertise, setActiveExpertise] = useState(0)
  const [expandedIndustry, setExpandedIndustry] = useState(null)

  const toggleIndustry = (index) => {
    setExpandedIndustry(expandedIndustry === index ? null : index)
  }

  const expertiseItems = [
    {
      title: "Collaborative Delivery",
      tagline: "Cross-Functional Teams • Stakeholder Buy-In • On-Time, Under-Budget Execution",
      description: "Our unique approach starts with deeply understanding different working styles, then finding the core unifier that allows internal and external stakeholders to move as one. This collaboration-first methodology has delivered results like the successful buildout and deployment of an urgent care facility within a comprehensive medical center—completed under budget, ahead of schedule, with seamless adoption across clinical and administrative teams."
    },
    {
      title: "Knowledge & Systems",
      tagline: "Tool Development • AI Integration • Sustainable Knowledge Transfer",
      description: "We've designed and deployed enterprise knowledge management platforms with generative AI capabilities—reducing time spent searching for information, significantly improving response times, and increasing overall team efficiency. Our focus is always on sustainable knowledge transfer: building systems and practices that continue delivering value long after the engagement ends."
    },
    {
      title: "Enterprise Operations",
      tagline: "Stakeholder Alignment • Process Excellence • Strategic Execution",
      description: "With experience spanning healthcare nonprofits, state agencies, and global biopharma companies, we understand the complexity of enterprise-level operations. We help organizations identify solutions to operational gaps using proven project management methodologies—whether building custom tools or optimizing existing systems to work seamlessly across stakeholders."
    }
  ]

  const industries = [
    {
      icon: "🏥",
      name: "Healthcare & Nonprofits",
      clients: [
        { name: "Kaiser Permanente", logo: "/logos/kaiser.jpg" },
        { name: "Mary McLeod Bethune Foundation", logo: "/logos/bethune.jpeg" }
      ]
    },
    {
      icon: "💊",
      name: "Biopharma",
      clients: [
        { name: "UCB Incorporated", logo: "/logos/ucb.webp" }
      ]
    },
    {
      icon: "🏛️",
      name: "Government",
      clients: [
        { name: "Georgia Department of Transportation", logo: "/logos/gdot.jpg" }
      ]
    },
    {
      icon: "💻",
      name: "Technology",
      clients: [
        { name: "AutoTrader", logo: "/logos/autotrader.jpg" }
      ]
    }
  ]

  return (
    <div className="app">
      {/* Hero Section with Centered Logo */}
      <section id="home" className="hero">
        <div className="hero-image-container">
          <img src="/hero-image.png" alt="Business consulting" className="hero-image" />
          <div className="hero-image-overlay"></div>
        </div>
        
        <div className="hero-logo-container">
          <img src="/logo.png" alt="The Pistis Group LLC" className="hero-logo" />
        </div>
        
        <div className="hero-content">
          <h1>Strategic Project Management<br />& Operations Consulting</h1>
          <p className="hero-subtitle">From Vision to Operational Reality</p>
          <a href="#contact" className="cta-button">Get In Touch</a>
        </div>
      </section>

      {/* Navigation - Sticky after scroll */}
      <nav className="navbar">
        <div className="nav-container">
          <a href="#home" className="nav-logo-link">
            <img src="/logo.png" alt="The Pistis Group LLC" className="nav-logo" />
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
      <section id="about" className="about">
        <div className="container">
          <div className="about-grid">
            <div className="about-content">
              <h2>The Pistis Group</h2>
              <p className="about-lead">The name <em>Pistis</em> comes from the Greek word meaning faith—but it carries a deeper significance: belief, trust, faithfulness, and loyalty. It implies commitment in action, not just words.</p>
              <p>This philosophy of steadfast commitment, honesty, and keeping promises is the foundation of how we work. When enterprise organizations face operational complexity, misaligned stakeholders, or ambitious initiatives that need disciplined execution—they need a partner they can trust to deliver.</p>
              <p>With over 15 years of project management experience across healthcare, biopharma, government, and technology, The Pistis Group brings order to complexity and transforms ambitious visions into operational reality.</p>
            </div>
            <div className="about-stats">
              <div className="stat-card">
                <span className="stat-number">50+</span>
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
                  <span className="industry-icon">{industry.icon}</span>
                  <span className="industry-name">{industry.name}</span>
                  <span className="industry-toggle">{expandedIndustry === index ? '−' : '+'}</span>
                </div>
                {expandedIndustry === index && (
                  <div className="industry-clients">
                    <span className="clients-label">Trusted By</span>
                    <div className="client-logos">
                      {industry.clients.map((client, clientIndex) => (
                        <div key={clientIndex} className="client-logo-container">
                          <img 
                            src={client.logo} 
                            alt={client.name} 
                            className="client-logo"
                          />
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

      {/* Experience & Expertise Section */}
      <section id="expertise" className="expertise">
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
      <section id="services" className="services">
        <div className="container">
          <h2>Services</h2>
          <p className="section-intro">Operational excellence for organizations where complexity is the norm.</p>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-number">01</div>
              <h3>Project Management & Execution</h3>
              <p>End-to-end project leadership for complex initiatives. From planning through deployment, ensuring on-time, under-budget delivery with seamless stakeholder adoption.</p>
            </div>
            <div className="service-card">
              <div className="service-number">02</div>
              <h3>Process Optimization</h3>
              <p>Identifying operational gaps and implementing process efficiencies. Building or leveraging tools that help teams operate more seamlessly and in concert with key stakeholders.</p>
            </div>
            <div className="service-card">
              <div className="service-number">03</div>
              <h3>Strategic Operations Consulting</h3>
              <p>Sustainable knowledge transfer and best practices that outlast the engagement. Fostering collaboration, ensuring compliance, and delivering outcomes that stick.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial/CTA Banner */}
      <section className="cta-banner">
        <div className="container">
          <blockquote>"Delivers meaningful impact—fast."</blockquote>
          <p>Ready to transform your vision into operational reality?</p>
          <a href="#contact" className="cta-button-light">Let's Talk</a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Get In Touch</h2>
              <p>Whether you're facing operational complexity, need to align diverse stakeholders, or have an ambitious initiative that requires disciplined execution—let's discuss how The Pistis Group can help.</p>
              <div className="contact-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
                  <input type="text" required />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" required />
                </div>
              </div>
              <div className="form-group">
                <label>Organization</label>
                <input type="text" />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea rows="5" required></textarea>
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
            <div className="footer-brand">
              <img src="/logo.png" alt="The Pistis Group LLC" className="footer-logo" />
            </div>
            <div className="footer-links">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#expertise">Expertise</a>
              <a href="#services">Services</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} The Pistis Group LLC. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
