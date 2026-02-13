import './SystemAdministration.css';
import { Link } from 'react-router-dom';

const SystemAdministration = () => {
  return (
    <div className="vcto-page-container">
      <section className="vcto-hero">
        <div className="container">
          <h2 className="section-title">Virtual CTO Retainer</h2>
          <p className="vcto-intro">
            Ongoing technical leadership for small businesses that need a CTO's vision 
            without the executive overhead.
          </p>
        </div>
      </section>

      <section className="vcto-content">
        <div className="container">
          <div className="vcto-grid">
            <div className="vcto-text">
              <h3>Strategic Leadership, On-Demand</h3>
              <p>
                Managing a growing business's technology is more than just fixing broken servers. 
                It's about ensuring your technical roadmap aligns with your financial goals. 
                As your Virtual CTO, I provide the oversight necessary to prevent technical debt 
                and maximize efficiency.
              </p>
              
              <div className="vcto-pillars">
                <div className="pillar">
                  <h4>Systems Integrity</h4>
                  <p>Continuous monitoring and management of your core business applications, security, and data architecture.</p>
                </div>
                <div className="pillar">
                  <h4>Vendor Management</h4>
                  <p>I act as your primary technical contact, managing third-party developers, SaaS providers, and IT vendors.</p>
                </div>
                <div className="pillar">
                  <h4>Cost Control</h4>
                  <p>Regular audits to eliminate unused software and consolidate fragmented systems, directly impacting your bottom line.</p>
                </div>
              </div>
            </div>

            <div className="vcto-sidebar">
              <div className="sidebar-card">
                <h4>Standard Retainer</h4>
                <p className="sidebar-subtitle">Strategic Partnership</p>
                <ul>
                  <li>Direct access to V-CTO</li>
                  <li>Monthly Strategy Review</li>
                  <li>Unlimited System Maintenance</li>
                  <li>Security & Backup Oversight</li>
                  <li>Vendor Liaison Services</li>
                </ul>
                <Link to="/contact" className="btn btn-full">Inquire About Retainer</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SystemAdministration;
