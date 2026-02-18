import './SystemAdministration.css';
import { Link } from 'react-router-dom';

const SystemAdministration = () => {
  return (
    <div className="vcto-page-container">
      <section className="vcto-hero">
        <div className="container">
          <h2 className="section-title">Virtual CTO</h2>
          <p className="vcto-intro">
            High-level technical strategy and systems oversight for businesses that need 
            executive-level vision without the full-time salary.
          </p>
        </div>
      </section>

      <section className="vcto-content">
        <div className="container">
          <div className="vcto-grid">
            <div className="vcto-text">
              <h3>Your Partner in Technical Growth</h3>
              <p>
                In today's landscape, technology is the backbone of every profitable business. 
                However, most small to mid-sized companies are forced to choose between hiring 
                expensive full-time executives or managing a fragmented team of disparate specialists. 
                OnePoint bridges that gap.
              </p>
              <p>
                As your Virtual CTO, we don't just "fix things." We provide the <strong>strategic roadmap</strong> 
                necessary to ensure your technical decisions are driving your financial goals. We focus on 
                long-term stability, technical debt reduction, and ensuring your systems are ready to 
                scale whenever you are.
              </p>
              
              <div className="vcto-pillars">
                <div className="pillar">
                  <h4>Systems Integrity & Stability</h4>
                  <p>We ensure your core business applications, security protocols, and data architectures are robust and reliable. By proactively managing your stack, we prevent the "firefighting" mode that drains productivity.</p>
                </div>
                <div className="pillar">
                  <h4>Vendor & Team Liaison</h4>
                  <p>We act as your primary technical voice, translating your business needs into actionable requirements for third-party developers, SaaS providers, and IT vendors. No more getting lost in technical jargon.</p>
                </div>
                <div className="pillar">
                  <h4>Strategic Cost Control</h4>
                  <p>Growth shouldn't mean a linear increase in software costs. We perform regular audits to consolidate fragmented systems, eliminate redundant subscriptions, and optimize your overall technical ROI.</p>
                </div>
              </div>

              <div className="vcto-deep-dive mt-8">
                <h3>The Value of Fractional Leadership</h3>
                <p>
                  Having a Virtual CTO means having someone in your corner who understands the entire 
                  interconnected ecosystem of your business—from how your CRM feeds your marketing 
                  engine to how your internal data is secured. We provide the "OnePoint" of contact 
                  that brings total synchronization to your technical operations.
                </p>
              </div>
            </div>

            <div className="vcto-sidebar">
              <div className="sidebar-card">
                <h4>Monthly Partnership</h4>
                <p className="sidebar-subtitle">Strategic Oversight</p>
                <ul>
                  <li>Direct Access to Technical Strategy</li>
                  <li>Monthly Performance & Roadmap Reviews</li>
                  <li>Security & Infrastructure Governance</li>
                  <li>Vendor Management & Selection</li>
                  <li>Technology Debt Mitigation</li>
                </ul>
                <Link to="/schedule-consultation" className="btn btn-full">Let's Discuss Your Roadmap</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SystemAdministration;
