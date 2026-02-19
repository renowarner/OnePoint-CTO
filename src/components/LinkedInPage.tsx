import { Link } from 'react-router-dom';
import './LinkedInPage.css';
import HoneyBookWidget from './HoneyBookWidget';

const LinkedInPage = () => {
  return (
    <div className="audit-page-container">
      <section className="services-hero">
        <div className="container">
          <h2 className="section-title">Transform Your Tech Stack. Unlock Growth.</h2>
          <p className="services-intro">
            You're here because you know your business can be more efficient. This strategic audit is the first step.
          </p>
        </div>
      </section>

      <div className="audit-content-grid container">
        <div className="audit-info-card">
          <div className="service-tier-card featured audit-card-inline">
            <div className="tier-tag">Your Strategic Blueprint</div>
            <div className="card-header-main">
              <h3>The OnePoint Strategic Audit</h3>
              <p className="tier-price"><span className="strikethrough-price">$1500</span> $750 <span>/ Full Engagement</span></p>
            </div>
            <p className="tier-description">
              This is a comprehensive, top-to-bottom analysis of your business's technology, processes, 
              and systems. We go beyond surface-level advice to deliver a tangible, step-by-step plan 
              for making your business more efficient, cost-effective, and future-ready.
            </p>
            <div className="card-footer-main">
              <div className="deliverables-section">
                  <h4 className="deliverables-title">What You'll Get: Your Blueprint for Optimization</h4>
                  <ul className="tier-features">
                      <li><strong>Pinpoint Wasted Spend:</strong> A "SaaS Scrub" to eliminate redundant software subscriptions and hidden costs.</li>
                      <li><strong>Automate Tedious Tasks:</strong> Our Friction Audit maps manual workflows to reveal prime automation opportunities.</li>
                      <li><strong>Fortify Your Defenses:</strong> A critical Security & Access Review to safeguard your invaluable business data.</li>
                      <li><strong>Unlock Your AI Advantage:</strong> A tailored report on the top 3-5 high-impact tasks you can offload to custom AI agents.</li>
                      <li><strong>Clear 90-Day Strategic Roadmap:</strong> A tangible, step-by-step execution plan for immediate ROI.</li>
                  </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="scheduler-card">
          <h3 className="scheduler-title">Book Your Audit Consultation</h3>
          <p className="scheduler-intro">Select a time below to schedule your initial consultation. This is the first step toward your strategic audit.</p>
          <div className="honeybook-embed-wrapper">
             <HoneyBookWidget 
                formId="6993e75040496000079b463b" 
                suffix="2"
                legacy={false}
                leadSource="Linked In Profile"
                directLink="https://companyname384300.hbportal.co/public/discovery-consult"
                fallbackText="Trouble loading the scheduler? Click here to book directly."
              />
          </div>
        </div>
      </div>

      <section className="usp-section">
        <div className="container">
          <h3 className="usp-title">Why OnePoint CTO is Different</h3>
          <div className="usp-grid">
            <div className="usp-item">
              <h4>We Build, Not Just Advise</h4>
              <p>Our roadmaps are execution plans, not just suggestions. We provide the "how" for every "what" to ensure real change happens.</p>
            </div>
            <div className="usp-item">
              <h4>Three Experts. Three Bills. One Problem.</h4>
              <p>We eliminate the chaos of managing separate web, IT, and marketing experts by creating a single, synchronized system that reduces cost and complexity.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LinkedInPage;
