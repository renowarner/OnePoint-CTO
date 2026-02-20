import { Link } from 'react-router-dom';
import './HubProductPage.css';
import './WebPresenceGrowth.css'; // Import shared styles for consistency

const HubProductPage = () => {
  return (
    <div className="vcto-page-container">
      {/* Hero Section */}
      <section className="vcto-hero">
        <div className="container">
          <h2 className="section-title">OnePoint <span className="text-cyan">Hub</span></h2>
          <p className="vcto-intro">
            Your essential digital headquarters. A professional, hosted micro-site 
            that connects clients to you instantly.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="vcto-content">
        <div className="container">
          <div className="vcto-grid">
            
            {/* Left Column: Text & Value */}
            <div className="vcto-text">
              <h3>The "Digital Business Card" Evolved</h3>
              <p>
                Not every business needs a complex, multi-page website immediately. 
                But every business needs a professional, secure place to send leads. 
                Social media profiles aren't enough—you don't own them, and they don't 
                rank in search engines.
              </p>
              <p>
                The <strong>OnePoint Hub</strong> is the bridge. It's a single, high-performance 
                landing page hosted on our premium infrastructure. It gives you a 
                clean URL (`onepointcto.com/hub/yourname`), integrated scheduling, 
                and instant credibility without the timeline or cost of a custom build.
              </p>
              
              <div className="vcto-pillars">
                <div className="pillar">
                  <h4>Speed to Market</h4>
                  <p>We can launch your Hub in 48 hours. No lengthy design reviews or content delays. Just a clean, effective presence that works.</p>
                </div>
                <div className="pillar">
                  <h4>Integrated Booking</h4>
                  <p>Stop chasing emails. We embed your Calendly or HoneyBook scheduler directly on the page, converting visitors into appointments instantly.</p>
                </div>
                <div className="pillar">
                  <h4>Built for Growth</h4>
                  <p>Start here. When you're ready for a fully custom brand and multi-page site, we can seamlessly migrate you up. Your Hub grows with you.</p>
                </div>
              </div>

              <div className="vcto-deep-dive mt-8">
                <h3>Why not just a Linktree?</h3>
                <p>
                  Link trees are for influencers. <strong>Hubs are for businesses.</strong> 
                  A Hub includes your branding, your "About" story, your service menu, 
                  and SEO schema data that helps Google understand who you are. It's 
                  an asset, not just a list of links.
                </p>
              </div>
            </div>

            {/* Right Column: Pricing Card */}
            <div className="vcto-sidebar">
              <div className="sidebar-card highlight-card">
                <h4>OnePoint Hub Package</h4>
                <p className="sidebar-subtitle">Launch Your Presence</p>
                
                <div className="hub-price-display">
                  <span className="hub-price">$250</span>
                  <span className="hub-term">One-Time Setup</span>
                </div>
                <div className="hub-recurring">
                  + $50/mo Hosting & Management
                </div>

                <ul className="hub-features-list">
                  <li>Professional Single-Page Design</li>
                  <li><strong>onepointcto.com/hub/yourname</strong> URL</li>
                  <li>Hosting, SSL, & Security Included</li>
                  <li>Scheduler & Contact Form Integration</li>
                  <li>Mobile-First Architecture</li>
                </ul>
                
                <Link to="/schedule-consultation" className="btn btn-full">Start Your Hub</Link>
                
                <div className="demo-link-wrapper">
                  <Link to="/hub/template" target="_blank" className="demo-link">See a Live Example →</Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default HubProductPage;
