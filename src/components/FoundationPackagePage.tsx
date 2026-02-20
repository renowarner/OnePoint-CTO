import { Link } from 'react-router-dom';
import './HubProductPage.css'; // Reusing the premium product layout
import './WebPresenceGrowth.css';

const FoundationPackagePage = () => {
  return (
    <div className="vcto-page-container">
      {/* Hero Section */}
      <section className="vcto-hero">
        <div className="container">
          <h2 className="section-title">The <span className="text-cyan">Foundation</span> Package</h2>
          <p className="vcto-intro">
            Your operational bedrock. A fully integrated system to manage clients, 
            documents, and growth without the chaos.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="vcto-content">
        <div className="container">
          <div className="vcto-grid">
            
            {/* Left Column: Text & Value */}
            <div className="vcto-text">
              <h3>Stop Building on Sand</h3>
              <p>
                You can't scale a business on spreadsheets and scattered emails. 
                Eventually, the cracks show. Leads get lost, onboarding takes forever, 
                and you spend more time looking for files than doing the work.
              </p>
              <p>
                The <strong>Foundation Package</strong> is the fix. We don't just give you a plan; 
                we build and deliver a turnkey operational system. We install the 
                infrastructure you need to run like a mature company from Day 1.
              </p>
              
              <div className="vcto-pillars">
                <div className="pillar">
                  <h4>Centralized CRM</h4>
                  <p>We implement a robust Client Relationship Management system. Track every lead, deal, and conversation in one dashboard. No more "who was I supposed to call?"</p>
                </div>
                <div className="pillar">
                  <h4>Automated Onboarding</h4>
                  <p>Turn "Signed Contract" into "Project Started" instantly. We build automated workflows that send welcomes, collect files, and set up folders without you lifting a finger.</p>
                </div>
                <div className="pillar">
                  <h4>Your Custom AI Assistant</h4>
                  <p>We train a secure AI agent on <em>your</em> business data. It answers questions about your clients, finds documents, and drafts emails in your voice.</p>
                </div>
              </div>

              <div className="vcto-deep-dive mt-8">
                <h3>We Manage The Machine</h3>
                <p>
                  Technology breaks if you don't maintain it. Your monthly management fee 
                  ensures your CRM stays clean, your automations keep running, and your 
                  AI gets smarter. We act as your fractional Systems Administrator.
                </p>
              </div>
            </div>

            {/* Right Column: Pricing Card */}
            <div className="vcto-sidebar">
              <div className="sidebar-card highlight-card">
                <h4>The Foundation Package</h4>
                <p className="sidebar-subtitle">Operational Infrastructure</p>
                
                <div className="hub-price-display">
                  <span className="hub-price">$750</span>
                  <span className="hub-term">One-Time Setup</span>
                </div>
                <div className="hub-recurring">
                  + $250/mo Management
                </div>

                <ul className="hub-features-list">
                  <li><strong>Full CRM Implementation</strong></li>
                  <li>Secure Document Library Setup</li>
                  <li>Automated Client Onboarding Flows</li>
                  <li><strong>Custom Trained AI Assistant</strong></li>
                  <li>Monthly System Audits & Support</li>
                </ul>
                
                <Link to="/schedule-consultation" className="btn btn-full">Build My Foundation</Link>
                
                <p style={{marginTop: '15px', fontSize: '0.9rem', color: '#8892b0', textAlign: 'center'}}>
                  Implementation time: ~1 Week
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default FoundationPackagePage;
