import { Link } from 'react-router-dom';
import './HubTemplate.css';
import HoneyBookWidget from './HoneyBookWidget';

const HubTemplate = () => {
  return (
    <div className="hub-container">
      {/* Header / Digital Card Top */}
      <header className="hub-header">
        <h1 className="hub-business-name">Business Name</h1>
        <p className="hub-tagline">Your Trusted Local Service Provider</p>
      </header>

      {/* Action Buttons */}
      <div className="hub-actions">
        <a href="tel:+15555555555" className="hub-btn hub-btn-primary">
          Call Now
        </a>
        <a href="mailto:contact@business.com" className="hub-btn hub-btn-secondary">
          Email Us
        </a>
        <a href="#" className="hub-btn hub-btn-secondary">
          Get Directions
        </a>
      </div>

      {/* About Section */}
      <section className="hub-section">
        <div className="hub-card">
          <h2 className="hub-section-title">About Us</h2>
          <p>
            This is a brief description of the business. It explains what they do, 
            who they serve, and why customers should choose them. This section is 
            designed to build trust and provide essential context quickly.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="hub-section" style={{ paddingTop: 0 }}>
        <div className="hub-card">
          <h2 className="hub-section-title">Our Services</h2>
          <div className="hub-services-grid">
            <div className="hub-service-item">
              <h4>Service One</h4>
              <p>Brief description of service.</p>
            </div>
            <div className="hub-service-item">
              <h4>Service Two</h4>
              <p>Brief description of service.</p>
            </div>
            <div className="hub-service-item">
              <h4>Service Three</h4>
              <p>Brief description of service.</p>
            </div>
            <div className="hub-service-item">
              <h4>Service Four</h4>
              <p>Brief description of service.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="hub-section" style={{ paddingTop: 0 }}>
        <div className="hub-card">
          <h2 className="hub-section-title">Contact Us</h2>
          <div className="honeybook-embed-wrapper">
             {/* Placeholder for Client's HoneyBook Widget */}
             <p style={{textAlign: 'center', color: '#718096', marginBottom: '20px'}}>
               [Client Contact Form Placeholder]
             </p>
             <HoneyBookWidget 
                formId="6993e75040496000079b463b" 
                suffix="hub-template"
                legacy={false}
                leadSource="Hub Template"
                directLink="https://companyname384300.hbportal.co/public/discovery-consult"
                fallbackText="Trouble loading the form? Click here."
              />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="hub-footer">
        <p>&copy; {new Date().getFullYear()} Business Name. All rights reserved.</p>
        
        <Link to="/" className="powered-by">
          Powered by
          <img src="/Logo_Profile_Light.png" alt="OnePoint CTO Logo" />
          OnePoint CTO
        </Link>
      </footer>
    </div>
  );
};

export default HubTemplate;
