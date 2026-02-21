import { Link } from 'react-router-dom';
import './HubProductPage.css'; // Reusing premium styling
import './WebPresenceGrowth.css';

const VirtualCTOPage = () => {
  return (
    <div className="vcto-page-container">
      <section className="vcto-hero">
        <div className="container">
          <h2 className="section-title">Virtual <span className="text-cyan">CTO</span></h2>
          <p className="vcto-intro">
            High-level technical strategy and systems oversight. Get the vision and 
            leadership of a Chief Technology Officer without the executive salary.
          </p>
        </div>
      </section>

      <section className="vcto-content">
        <div className="container">
          <div className="vcto-grid">
            
            <div className="vcto-text">
              <h3>Leadership, Not Just Support</h3>
              <p>
                As your business grows, technology becomes complex. You have vendors to manage, 
                security to monitor, and expensive decisions to make. You don't need another 
                IT guy to fix your printer; you need a strategic partner to guide your growth.
              </p>
              <p>
                As your <strong>Virtual CTO</strong>, I sit on your side of the table. I manage your 
                entire technical ecosystem, ensuring your systems are talking to each other, 
                your data is secure, and your technology investment is driving actual profit.
              </p>
              
              <div className="vcto-pillars">
                <div className="pillar">
                  <h4>Strategic Roadmap</h4>
                  <p>We don't just react to problems; we plan for growth. We maintain a rolling technical roadmap aligning your software stack with your business goals.</p>
                </div>
                <div className="pillar">
                  <h4>Vendor Management</h4>
                  <p>Stop playing telephone with support desks. We act as your primary liaison for all 3rd-party vendors (hosting, SaaS, agencies), translating tech-speak into business results.</p>
                </div>
                <div className="pillar">
                  <h4>Automation Maintenance</h4>
                  <p>Automations break. APIs change. We proactively monitor and tune your workflow automations and AI agents to ensure your business keeps running on autopilot.</p>
                </div>
              </div>

              <div className="vcto-deep-dive mt-8">
                <h3>The "OnePoint" Advantage</h3>
                <p>
                  Most businesses have a "web guy," an "IT guy," and a "marketing guy." 
                  That's three bills and three disconnected systems. We integrate them all. 
                </p>
                <p>
                  From initial audit to long-term retainer, we take full ownership of your technology. 
                  We don't just patch holes; we rebuild your system stacks from the ground up to ensure 
                  security, scalability, and total accountability. One point of contact. One cohesive strategy.
                </p>
              </div>
            </div>

            <div className="vcto-sidebar">
              <div className="sidebar-card highlight-card">
                <h4>V-CTO Retainer</h4>
                <p className="sidebar-subtitle">Strategic Partnership</p>
                
                <div className="hub-price-display">
                  <span className="hub-price">$1,250</span>
                  <span className="hub-term">Per Month</span>
                </div>
                <div className="hub-recurring">
                  Long-term strategic partnership
                </div>

                <ul className="hub-features-list">
                  <li><strong>Priority Strategic Access</strong></li>
                  <li>Vendor & SaaS Management</li>
                  <li>Automation Monitoring & Repair</li>
                  <li><strong>Monthly Strategy Review Calls</strong></li>
                  <li>24-Hour Response SLA</li>
                </ul>
                
                <Link to="/schedule-consultation" className="btn btn-full">Apply for Retainer</Link>
                
                <p style={{marginTop: '15px', fontSize: '0.9rem', color: '#8892b0', textAlign: 'center'}}>
                  Ideal for businesses with $300k+ annual revenue.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default VirtualCTOPage;
