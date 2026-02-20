import { Link } from 'react-router-dom';
import './HubProductPage.css'; // Reusing premium styling
import './WebPresenceGrowth.css';

const AuditPage = () => {
  return (
    <div className="vcto-page-container">
      <section className="vcto-hero">
        <div className="container">
          <h2 className="section-title">The OnePoint <span className="text-cyan">Audit</span></h2>
          <p className="vcto-intro">
            A comprehensive, deep-dive analysis of your business's technology, processes, 
            and spending. We uncover waste and build your roadmap to efficiency.
          </p>
        </div>
      </section>

      <section className="vcto-content">
        <div className="container">
          <div className="vcto-grid">
            
            <div className="vcto-text">
              <h3>Stop Guessing. Start optimizing.</h3>
              <p>
                Most small businesses are bleeding profit through unused software subscriptions, 
                inefficient manual data entry, and "technical debt" (systems that don't talk to each other). 
                You know there's a better way to operate, but you don't know where to start.
              </p>
              <p>
                The <strong>OnePoint Audit</strong> is your diagnostic. We pop the hood of your business, 
                trace every dollar you spend on tech, and map every minute you spend on manual tasks. 
                Then, we give you a concrete plan to fix it.
              </p>
              
              <div className="vcto-pillars">
                <div className="pillar">
                  <h4>The SaaS Scrub</h4>
                  <p>We review every software subscription on your books. We find duplicates, identify unused seats, and recommend cheaper, better integrated alternatives. This step alone often pays for the audit.</p>
                </div>
                <div className="pillar">
                  <h4>Friction Mapping</h4>
                  <p>We interview your key team members to find the "time sucks." Where are you copy-pasting data? Where do leads fall through the cracks? We find the bottlenecks ripe for automation.</p>
                </div>
                <div className="pillar">
                  <h4>AI Opportunity Report</h4>
                  <p>We identify the specific, high-impact tasks in your business that can be safely offloaded to AI agents, potentially saving you 10+ hours a week immediately.</p>
                </div>
              </div>

              <div className="vcto-deep-dive mt-8">
                <h3>The Deliverable: Your 90-Day Roadmap</h3>
                <p>
                  You don't just get a list of problems; you get a <strong>Strategic Execution Plan</strong>. 
                  We provide a prioritized, week-by-week roadmap for implementing the changes, 
                  whether you hire us to do it or handle it in-house.
                </p>
              </div>
            </div>

            <div className="vcto-sidebar">
              <div className="sidebar-card highlight-card">
                <h4>The Strategic Audit</h4>
                <p className="sidebar-subtitle">Deep-Dive Analysis</p>
                
                <div className="hub-price-display">
                  <span className="hub-price">$750</span>
                  <span className="hub-term">One-Time Engagement</span>
                </div>
                <div className="hub-recurring">
                  Typically completed in 7 Days
                </div>

                <ul className="hub-features-list">
                  <li><strong>Full SaaS & Expense Review</strong></li>
                  <li>Workflow & Friction Mapping</li>
                  <li>Security & Access Check</li>
                  <li><strong>AI Automation Opportunity Report</strong></li>
                  <li>Strategic 90-Day Execution Roadmap</li>
                </ul>
                
                <Link to="/schedule-consultation" className="btn btn-full">Book Your Audit</Link>
                
                <p style={{marginTop: '15px', fontSize: '0.9rem', color: '#8892b0', textAlign: 'center'}}>
                  ROI: Often covers its own cost in SaaS savings within 60 days.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default AuditPage;
