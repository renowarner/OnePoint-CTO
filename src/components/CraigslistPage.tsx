import { Link } from 'react-router-dom';
import './CraigslistPage.css';
import HoneyBookWidget from './HoneyBookWidget';

const CraigslistPage = () => {
  return (
    <div className="audit-page-container">
      <section className="services-hero">
        <div className="container">
          <h2 className="section-title">Build a Solid Foundation for Your Business Operations</h2>
          <p className="services-intro">
            You're ready to scale, but your systems are holding you back. The Foundation Package is designed to establish the core operational infrastructure every growing business needs.
          </p>
        </div>
      </section>

      <div className="audit-content-grid container">
        <div className="audit-info-card">
          <div className="service-tier-card featured audit-card-inline">
            <div className="tier-tag">Your Operational Bedrock</div>
            <div className="card-header-main">
              <h3>The Foundation Package</h3>
              <p className="tier-price tier-price-main">$750 <span>/ One-Time Setup</span></p>
              <p className="tier-price tier-price-sub">$250 <span>/ Management and Maintenance Fee</span></p>
            </div>
            <p className="tier-description">
              This package delivers a comprehensive, integrated system to manage your clients, documents, and core workflows. We install and configure a centralized CRM and document library, providing the stability and efficiency you need to focus on growth.
            </p>
            <div className="card-footer-main">
              <div className="deliverables-section">
                  <h4 className="deliverables-title">What You'll Get: A Fully Integrated Operational Hub</h4>
                  <ul className="tier-features">
                      <li><strong>Centralized Client Management:</strong> A robust CRM setup to track leads, clients, and projects from a single dashboard.</li>
                      <li><strong>Secure Document Library:</strong> An organized, cloud-based system for all your critical business documents, accessible from anywhere.</li>
                      <li><strong>Automated Client Onboarding:</strong> A streamlined, automated workflow to seamlessly onboard new clients.</li>
                      <li><strong>Custom AI-Powered Assistant:</strong> A trained AI agent to answer questions about your clients and documents instantly.</li>
                      <li><strong>Comprehensive System Training:</strong> Full training for you and your team to ensure you get the most out of your new systems.</li>
                  </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="scheduler-card">
          <h3 className="scheduler-title">Book Your Foundation Consultation</h3>
          <p className="scheduler-intro">Select a time below to discuss how the Foundation Package can transform your business operations.</p>
          <div className="honeybook-embed-wrapper">
             <HoneyBookWidget 
                formId="6993e75040496000079b463b" 
                suffix="2"
                legacy={false}
                leadSource="Craigslist Ad"
                directLink="https://companyname384300.hbportal.co/public/discovery-consult"
                fallbackText="Trouble loading the scheduler? Click here to book directly."
              />
          </div>
        </div>
      </div>

      <section className="usp-section">
        <div className="container">
          <h3 className="usp-title">Why OnePoint CTO for Your Foundation</h3>
          <div className="usp-grid">
            <div className="usp-item">
              <h4>We Implement, Not Just Recommend</h4>
              <p>We don't just give you a plan; we build and deliver a turnkey operational system ready for you to use from day one.</p>
            </div>
            <div className="usp-item">
              <h4>A Unified System, Not Scattered Apps</h4>
              <p>We solve the "SaaS Sprawl" problem by integrating your core functions into a single, cohesive system, saving you time and money.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CraigslistPage;
