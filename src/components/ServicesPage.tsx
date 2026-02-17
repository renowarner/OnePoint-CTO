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
              <div className="tier-tag">The First Step</div>
              <div className="card-header-main">
                <h3>Technical & Operational Audit</h3>
                <p className="tier-price">$750 <span>/ Full Engagement</span></p>
              </div>
              <p className="tier-description">
                A high-impact evaluation of your entire technical landscape. We uncover hidden costs, 
                identify manual friction points, and build the blueprint for your digital transformation. 
                This exhaustive review ensures every dollar spent on technology is driving your business forward.
              </p>
              <div className="card-footer-main">
                <ul className="tier-features">
                  <li><strong>SaaS Scrub:</strong> Identification and removal of redundant or underutilized subscriptions.</li>
                  <li><strong>Process Friction Mapping:</strong> Locating manual data entry and workflow bottlenecks.</li>
                  <li><strong>AI Opportunity Report:</strong> Specific use-cases where Large Language Models can offload work.</li>
                  <li><strong>Strategic 90-Day Roadmap:</strong> A prioritized execution plan for immediate efficiency gains.</li>
                </ul>
                <Link to="/schedule-consultation" className="btn btn-tier">Start Your Audit</Link>
              </div>
            </div>
          </div>

          <div className="services-main-grid">
            
            {/* V-CTO Retainer */}
            <div className="service-tier-card">
              <div className="tier-tag">Continuous</div>
              <h3>Virtual CTO</h3>
              <p className="tier-price">Monthly <span>Partnership</span></p>
              <p className="tier-description">
                Ongoing strategic direction for businesses ready to scale. We act as your primary technical 
                officer, handling high-level decisions and systems management without the overhead of a full-time executive.
              </p>
              <ul className="tier-features">
                <li>Active Systems Management & Stability</li>
                <li>Strategic Architectural Guidance</li>
                <li>Cybersecurity & Data Governance</li>
                <li>Vendor Management & Technical Debt Control</li>
              </ul>
              <Link to="/system-administration" className="btn btn-tier">Learn More About V-CTO</Link>
            </div>

            {/* Integration & Growth */}
            <div className="service-tier-card">
              <div className="tier-tag">Implementation</div>
              <h3>AI & Operational Automation</h3>
              <p className="tier-price">Project <span>Execution</span></p>
              <p className="tier-description">
                Direct deployment of intelligent systems. We build the "Implementation Layer" that turns 
                your technical goals into automated realities, reducing labor hours and increasing lead conversion.
              </p>
              <ul className="tier-features">
                <li>Custom AI Chatbot Architecture</li>
                <li>Automated Lead Capture & Routing</li>
                <li>No-Code Workflow Engineering</li>
                <li>Legacy System Interconnectivity</li>
              </ul>
              <Link to="/no-code-system-design" className="btn btn-tier">See Implementation Examples</Link>
            </div>

            {/* Web Presence & Growth */}
            <div className="service-tier-card">
              <div className="tier-tag">Visibility</div>
              <h3>Digital Foundation & SEO</h3>
              <p className="tier-price">Market <span>Growth</span></p>
              <p className="tier-description">
                Structural dominance in your digital market. We focus on the "invisible" technical SEO and 
                indexing that ensures your business is found by the right people at the right time.
              </p>
              <ul className="tier-features">
                <li>SEO-First Site Architecture</li>
                <li>Search Engine Indexing & Connectivity</li>
                <li>Automated Lead Nurturing Loops</li>
                <li>Conversion & Performance Analytics</li>
              </ul>
              <Link to="/web-presence-growth" className="btn btn-tier">Review Visibility Growth</Link>
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
