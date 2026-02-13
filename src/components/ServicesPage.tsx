import { Link } from 'react-router-dom';
import './ServicesPage.css';

const ServicesPage = () => {
  return (
    <div className="services-page-container">
      <section className="services-hero">
        <div className="container">
          <h2 className="section-title">Technical Leadership, Productized.</h2>
          <p className="services-intro">
            Stop managing separate specialists. OnePoint provides a single technical roadmap 
            to reduce costs, eliminate friction, and scale your business with AI and automation.
          </p>
        </div>
      </section>

      <section className="services-grid-section">
        <div className="container">
          
          {/* Featured Top Card: The Audit */}
          <div className="featured-audit-container">
            <div className="service-tier-card featured audit-card">
              <div className="tier-tag">Step One</div>
              <div className="card-header-main">
                <h3>The OnePoint Audit</h3>
                <p className="tier-price">$500 <span>/ Standard</span></p>
              </div>
              <p className="tier-description">
                A comprehensive deep-dive into your technical stack to identify waste and 
                fragmentation. This is the foundation of our strategic partnership.
              </p>
              <div className="card-footer-main">
                <ul className="tier-features">
                  <li>SaaS & Expense Analysis</li>
                  <li>Process Friction Mapping</li>
                  <li>Automation Opportunity Report</li>
                  <li>Custom 90-Day Roadmap</li>
                </ul>
                <Link to="/contact" className="btn btn-tier">Book Your Audit</Link>
              </div>
            </div>
          </div>

          <div className="services-main-grid">
            
            {/* V-CTO Retainer */}
            <div className="service-tier-card">
              <div className="tier-tag">Ongoing</div>
              <h3>Virtual CTO Retainer</h3>
              <p className="tier-price">Monthly <span>Leadership</span></p>
              <p className="tier-description">
                Strategic technical leadership for businesses that need a CTO without the 
                full-time salary.
              </p>
              <ul className="tier-features">
                <li>Ongoing Systems Management</li>
                <li>Strategic Technical Oversight</li>
                <li>Security & Data Architecture</li>
                <li>Vendor & Tech Debt Control</li>
              </ul>
              <Link to="/system-administration" className="btn btn-tier">View Service Details</Link>
            </div>

            {/* Integration & Growth */}
            <div className="service-tier-card">
              <div className="tier-tag">Specialized</div>
              <h3>AI & Growth Integration</h3>
              <p className="tier-price">Custom <span>Solutions</span></p>
              <p className="tier-description">
                Implementation-focused projects to turn your tech stack into a lead-generating 
                engine.
              </p>
              <ul className="tier-features">
                <li>AI Chatbot Deployment</li>
                <li>Lead Capture Automation</li>
                <li>No-Code System Design</li>
                <li>Custom Logic Workflows</li>
              </ul>
              <Link to="/no-code-system-design" className="btn btn-tier">Explore Solutions</Link>
            </div>

            {/* Web Presence & Growth */}
            <div className="service-tier-card">
              <div className="tier-tag">Marketing Tech</div>
              <h3>Web Presence & Growth</h3>
              <p className="tier-price">Digital <span>Presence</span></p>
              <p className="tier-description">
                Dominant digital footprint management focusing on structural SEO and 
                lead nurturing.
              </p>
              <ul className="tier-features">
                <li>Strategic Site Design</li>
                <li>Structural SEO & Content</li>
                <li>Email Lead Nurturing</li>
                <li>Performance Analytics</li>
              </ul>
              <Link to="/web-presence-growth" className="btn btn-tier">View Growth Package</Link>
            </div>

          </div>
        </div>
      </section>

      <section className="final-cta-section">
        <div className="container">
          <div className="final-cta-card">
            <h3>Not sure where to start?</h3>
            <p>Let's talk first. No pressure—just a conversation about your technical roadmap.</p>
            <Link to="/schedule-consultation" className="btn btn-primary">Book a Free Consultation</Link>
          </div>
        </div>
      </section>

      <section className="usp-section">
        <div className="container">
          <div className="usp-grid">
            <div className="usp-item">
              <h4>Three Experts. Three Bills. One Problem.</h4>
              <p>Hiring separate web, IT, and marketing experts creates disconnected systems. OnePoint synchronizes them.</p>
            </div>
            <div className="usp-item">
              <h4>Technical Debt Reduction</h4>
              <p>We don't just add tech; we remove what isn't working to lower your overhead and improve speed.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
