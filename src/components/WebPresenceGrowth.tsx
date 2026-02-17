import './WebPresenceGrowth.css';
import { Link } from 'react-router-dom';

const WebPresenceGrowth = () => {
  return (
    <div className="vcto-page-container">
      <section className="vcto-hero">
        <div className="container">
          <h2 className="section-title">Digital Foundation & SEO</h2>
          <p className="vcto-intro">
            Beyond just a website. We build the technical infrastructure that ensures 
            your business is discovered, indexed, and chosen by your target market.
          </p>
        </div>
      </section>

      <section className="vcto-content">
        <div className="container">
          <div className="vcto-grid">
            <div className="vcto-text">
              <h3>Structural Dominance</h3>
              <p>
                In 2026, a "pretty website" is no longer enough. The digital landscape is 
                highly technical—if your site isn't structured correctly for search 
                engines, it effectively doesn't exist. I focus on the <strong>technical foundation</strong> 
                that drives organic visibility and ensures your site is fast, responsive, 
                and fully indexed.
              </p>
              <p>
                We move beyond surface-level marketing to solve the "Invisible 87%" problem—small 
                business sites that are online but cannot be found via search. We bridge 
                the gap between your brand and the algorithms that govern discovery.
              </p>
              
              <div className="vcto-pillars">
                <div className="pillar">
                  <h4>Technical & Structural SEO</h4>
                  <p>I implement deep structural SEO, including schema markup, sitemap optimization, and high-performance site architecture. We don't just add keywords; we make your business technically superior to your competitors in the eyes of Google.</p>
                </div>
                <div className="pillar">
                  <h4>Automated Lead Nurturing</h4>
                  <p>Traffic is useless if it doesn't convert. I build automated "nurture loops" that capture lead information and trigger intelligent email sequences, keeping your brand top-of-mind until the prospect is ready to buy.</p>
                </div>
                <div className="pillar">
                  <h4>Search Console & Analytics Integration</h4>
                  <p>Get clear data on where your leads are coming from. I set up professional-grade tracking and performance dashboards so you can see the direct ROI of your digital foundation.</p>
                </div>
              </div>

              <div className="vcto-deep-dive mt-8">
                <h3>The "Invisible" Advantage</h3>
                <p>
                  Most marketing agencies focus on the visual. I focus on the technical. 
                  By ensuring your site is technically flawless, mobile-optimized, and 
                  lightning-fast, we provide a user experience that naturally leads to 
                  higher rankings and better conversion rates.
                </p>
              </div>
            </div>

            <div className="vcto-sidebar">
              <div className="sidebar-card">
                <h4>Visibility Growth</h4>
                <p className="sidebar-subtitle">Search & Lead Engine</p>
                <ul>
                  <li>Full Google Indexing & Connectivity</li>
                  <li>Structural SEO & JSON-LD Schema</li>
                  <li>Lead Capture & Nurture Workflows</li>
                  <li>Performance-First Site Design</li>
                  <li>Conversion Analytics & Reporting</li>
                </ul>
                <Link to="/schedule-consultation" className="btn btn-full">Talk About Your Visibility</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebPresenceGrowth;
