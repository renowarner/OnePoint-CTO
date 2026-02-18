import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage">
      <section id="hero" className="hero-section">
        <div className="container">
          <h2 className="hero-headline">
            <span className="headline-main">One Partner. One System. Total Control.</span>
            <span className="headline-sub">Strategic V-CTO Services for Small Businesses</span>
          </h2>
          <p className="hero-tagline">
            Managing multiple specialists means separate bills and disconnected systems. OnePoint integrates your automation, AI, and marketing into one cohesive engine—reducing costs and maximizing your baseline income.
          </p>
          <div className="hero-cta">
            <Link to="/schedule-consultation" className="btn btn-primary btn-large">Book Your V-CTO Audit</Link>
          </div>
        </div>
      </section>

      <section id="process" className="process-section">
        <div className="container">
          <h2 className="section-title">The Path to Efficiency</h2>
          <div className="process-grid">
            <div className="process-item">
              <div className="process-number">1</div>
              <h3>The Audit</h3>
              <p>We deep-dive into your technical stack to identify fragmented systems, unused SaaS, and manual friction.</p>
            </div>
            <div className="process-item">
              <div className="process-number">2</div>
              <h3>The Integration</h3>
              <p>We build and synchronize custom AI, lead capture, and automation tools into a single, unified technical roadmap.</p>
            </div>
            <div className="process-item">
              <div className="process-number">3</div>
              <h3>The Growth</h3>
              <p>Your systems become your primary employee—handling the admin while you focus on scaling profitability.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="about-preview" className="about-preview-section">
        <div className="container">
          <div className="about-preview-grid">
            <div className="about-preview-content">
              <h2 className="section-title" style={{textAlign: 'left', marginLeft: 0}}>One Voice. One Vision.</h2>
              <p>Managing multiple specialists means separate bills and disconnected systems. At <strong>OnePoint</strong>, we act as your single point of technical leadership.</p>
              <p>We integrate your automation, AI, and marketing into one cohesive engine—reducing costs and maximizing your baseline income.</p>
              <div style={{marginTop: '30px'}}>
                <Link to="/about" className="btn">Learn More About Our Approach</Link>
              </div>
            </div>
            <div className="about-preview-stats">
              <div className="stat-card">
                <span className="stat-number">10+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">$478k+</span>
                <span className="stat-label">Client Savings Identified</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">50+</span>
                <span className="stat-label">Business Hubs Indexed</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services-snapshot" className="services-snapshot-section">
        <div className="container">
          <div className="snapshot-content">
            <h2 className="section-title">Comprehensive Technical Solutions</h2>
            <p className="snapshot-intro">
              From one-time audits to full-scale virtual CTO partnerships, we provide the 
              leadership and execution you need to scale.
            </p>
            <div className="snapshot-actions">
              <Link to="/services" className="btn btn-secondary btn-lively">Explore All Services</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
