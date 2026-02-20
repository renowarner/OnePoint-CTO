import { Link } from 'react-router-dom';
import './HubTemplate.css';

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

      {/* Main Content Grid */}
      <div className="hub-main-content">
        
        {/* Left Column: About & Services */}
        <div className="hub-column">
          {/* About Section */}
          <div className="hub-card">
            <h2 className="hub-section-title">About Us</h2>
            <p>
              This is a brief description of the business. It explains what they do, 
              who they serve, and why customers should choose them. This section is 
              designed to build trust and provide essential context quickly.
            </p>
          </div>

          {/* Services Section */}
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
        </div>

        {/* Right Column: Appointment Scheduler */}
        <div className="hub-column hub-column-right">
          <div className="hub-card" style={{ padding: '0', overflow: 'hidden' }}>
            {/* Calendly Inline Widget */}
            <div 
              className="calendly-inline-widget" 
              data-url="https://calendly.com/onepointcto/initial-consult?hide_landing_page_details=1&hide_gdpr_banner=1" 
              style={{ minWidth: '320px', height: '100%', flexGrow: 1 }} 
            />
            <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async />
          </div>
        </div>
        
      </div>

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
