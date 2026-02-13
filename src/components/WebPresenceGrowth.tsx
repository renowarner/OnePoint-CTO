import './WebPresenceGrowth.css';
import { Link } from 'react-router-dom';

const WebPresenceGrowth = () => {
  return (
    <div className="vcto-page-container">
      <section className="vcto-hero">
        <div className="container">
          <h2 className="section-title">Web Presence & Growth</h2>
          <p className="vcto-intro">
            Establish a dominant digital footprint. I design and manage technical marketing 
            systems that capture attention and turn visitors into long-term customers.
          </p>
        </div>
      </section>

      <section className="vcto-content">
        <div className="container">
          <div className="vcto-grid">
            <div className="vcto-text">
              <h3>Technical Marketing Mastery</h3>
              <p>
                Marketing in 2026 isn't just about "content"; it's about the systems that 
                deliver it. I focus on the <strong>technical foundation</strong> of your 
                marketing—ensuring your site is fast, your SEO is structural, and your 
                email systems are automated for maximum retention.
              </p>
              
              <div className="vcto-pillars">
                <div className="pillar">
                  <h4>Strategic Site Design & SEO</h4>
                  <p>Performance-optimized websites built for conversion. I implement deep structural SEO to ensure you aren't just seen, but ranked for the right keywords.</p>
                </div>
                <div className="pillar">
                  <h4>Lead Nurturing & Email Systems</h4>
                  <p>Don't let leads go cold. I build automated email sequences and drip campaigns that educate prospects and keep your brand top-of-mind.</p>
                </div>
                <div className="pillar">
                  <h4>Performance Marketing Systems</h4>
                  <p>Implementation of tracking, analytics, and lead-capture funnels that provide clear data on where your growth is coming from.</p>
                </div>
              </div>
            </div>

            <div className="vcto-sidebar">
              <div className="sidebar-card">
                <h4>Growth Features</h4>
                <p className="sidebar-subtitle">Digital Presence Engine</p>
                <ul>
                  <li>Structural SEO Implementation</li>
                  <li>Conversion Rate Optimization</li>
                  <li>Automated Email Workflows</li>
                  <li>Lead Capture Page Design</li>
                  <li>Analytics & ROI Tracking</li>
                </ul>
                <Link to="/contact" className="btn btn-full">Scale Your Presence</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebPresenceGrowth;
