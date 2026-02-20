import { Link } from 'react-router-dom';
import './HubTemplate.css';

const HubTemplate = () => {
  return (
    <div className="hub-container">
      {/* Header / Digital Card Top */}
      <header className="hub-header">
        <h1 className="hub-business-name">GreenLeaf Landscaping</h1>
        <p className="hub-tagline">Premium Lawn Care & Hardscaping in Seattle</p>
      </header>

      {/* Action Buttons */}
      <div className="hub-actions">
        <a href="tel:+15555555555" className="hub-btn hub-btn-primary">
          Call for Quote
        </a>
        <a href="mailto:contact@greenleaf.com" className="hub-btn hub-btn-secondary">
          Email Us
        </a>
        <a href="#" className="hub-btn hub-btn-secondary">
          Service Area
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
              GreenLeaf Landscaping has been serving homeowners in the Greater Seattle area 
              since 2015. We are a family-owned business dedicated to reliability, 
              eco-friendly practices, and attention to detail. Whether you need weekly 
              mowing or a complete backyard renovation, our team treats your property 
              like our own.
            </p>
          </div>

          {/* Services Section */}
          <div className="hub-card">
            <h2 className="hub-section-title">Our Services</h2>
            <div className="hub-services-grid">
              <div className="hub-service-item">
                <h4>Lawn Maintenance</h4>
                <p>Weekly mowing, edging, and fertilization programs.</p>
              </div>
              <div className="hub-service-item">
                <h4>Hardscaping</h4>
                <p>Patios, retaining walls, and walkway installation.</p>
              </div>
              <div className="hub-service-item">
                <h4>Irrigation</h4>
                <p>Sprinkler system installation, repair, and winterization.</p>
              </div>
              <div className="hub-service-item">
                <h4>Seasonal Cleanup</h4>
                <p>Leaf removal, pruning, and mulch application.</p>
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
        <p>&copy; {new Date().getFullYear()} GreenLeaf Landscaping. Licensed, Bonded & Insured.</p>
        
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
