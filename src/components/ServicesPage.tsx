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
                <p className="tier-price"><span className="strikethrough-price">$1500</span> $750 <span>/ Full Engagement</span></p>
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
            
            {/* Foundation Package (Left) */}
            <div className="service-tier-card">
              <div className="tier-tag">Business Launch</div>
              <h3>The Foundation Package</h3>
              <p className="tier-price">Comprehensive <span>Setup</span></p>
              <p className="tier-description">
                The "Business Hub" starter kit. We establish your professional digital presence 
                in one week—ensuring you are indexed, branded, and ready to capture leads 
                from Day 1. Stop being invisible to Google.
              </p>
              <ul className="tier-features">
                <li><strong>Professional Identity:</strong> Domain, Business Email, and Light Branding.</li>
                <li><strong>Business Hub Site:</strong> Mobile-responsive design with lead capture.</li>
                <li><strong>Total Indexing:</strong> Submission to Google Search Console & Bing.</li>
                <li><strong>Active Management:</strong> Hosting, security, and monthly reporting included.</li>
              </ul>
              <Link to="/web-presence-growth" className="btn btn-tier">Get Your Foundation</Link>
            </div>

            {/* V-CTO Retainer (Center) */}
            <div className="service-tier-card featured">
              <div className="tier-tag">Strategic Partnership</div>
              <h3>V-CTO Retainer</h3>
              <p className="tier-price">Monthly <span>Leadership</span></p>
              <p className="tier-description">
                For businesses ready to scale. We act as your dedicated technical partner, providing 
                ongoing strategic direction, automation maintenance, and system stability. 
                Get the leadership of a Chief Technology Officer without the executive salary.
              </p>
              <ul className="tier-features">
                <li><strong>24-Hour Response SLA:</strong> Priority support for critical systems.</li>
                <li><strong>Strategic Roadmap:</strong> Continuous alignment of tech with business goals.</li>
                <li><strong>Vendor Management:</strong> We handle the hosting, SaaS, and third-party disputes.</li>
                <li><strong>Automation Maintenance:</strong> Proactive tuning of your AI and workflow agents.</li>
              </ul>
              <Link to="/system-administration" className="btn btn-tier">Explore V-CTO Services</Link>
            </div>

            {/* Specialized Implementation (Right) */}
            <div className="service-tier-card">
              <div className="tier-tag">Project Based</div>
              <h3>Custom Technical Solutions</h3>
              <p className="tier-price">Tailored <span>Scope</span></p>
              <p className="tier-description">
                Targeted execution for specific technical needs. From deploying complex AI agents 
                to integrating legacy databases, we build the "Implementation Layer" that 
                automates your unique business logic.
              </p>
              <ul className="tier-features">
                <li><strong>Modular Add-Ons:</strong> AI Chatbots, Lead Gen, & Marketing.</li>
                <li><strong>Custom Architecture:</strong> Complex API Integrations & Tools.</li>
                <li><strong>Legacy Migration:</strong> Modernizing old systems.</li>
                <li><strong>Workflow Engineering:</strong> Connecting your disconnected apps.</li>
              </ul>
              <Link to="/system-integration" className="btn btn-tier">View Solutions & Add-Ons</Link>
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
