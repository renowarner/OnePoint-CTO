import './SystemIntegration.css';
import { Link } from 'react-router-dom';

const SystemIntegration = () => {
  return (
    <div className="vcto-page-container">
      <section className="vcto-hero">
        <div className="container">
          <h2 className="section-title">Custom Technical Solutions</h2>
          <p className="vcto-intro">
            Turning disparate tools into a unified, intelligent business engine. 
            Automate the repetitive, scale your operations, and let your team focus on high-value work.
          </p>
        </div>
      </section>

      <section className="vcto-content">
        <div className="container">
          <div className="vcto-grid">
            <div className="vcto-text">
              <h3>Bridges, Not Just Tools</h3>
              <p>
                Most modern businesses are drowning in "SaaS Sprawl"—using an average of 20-50 different 
                software platforms that don't effectively talk to each other. This results in manual data 
                entry, missed leads, and massive operational friction. 
              </p>
              <p>
                We specialize in building the <strong>connective tissue</strong> between your systems. By leveraging 
                AI and modern automation frameworks, we transform your technology from a collection of 
                isolated apps into a synchronized implementation layer that works while you sleep.
              </p>
              
              <div className="vcto-pillars">
                <div className="pillar">
                  <h4>Intelligent Workflow Engineering</h4>
                  <p>
                    We design robust automations using tools like Zapier, Make.com, and Python to handle complex logic. 
                    From synchronizing your CRM with your project management tools to automating financial reporting, 
                    we remove the "human-as-a-bridge" bottleneck.
                  </p>
                </div>
                <div className="pillar">
                  <h4>AI Chatbots & Agents</h4>
                  <p>
                    Go beyond basic FAQs. We deploy custom AI agents that can qualify leads 24/7, book meetings, 
                    and even answer complex support tickets by training on your specific business data. 
                    These agents act as always-on employees that scale infinitely.
                  </p>
                </div>
                <div className="pillar">
                  <h4>Marketing & Lead Gen Engines</h4>
                  <p>
                    Build systems that fill your pipeline automatically. We implement end-to-end campaigns 
                    that scrape targeted leads, enrich them with contact info, and nurture them through 
                    personalized multi-channel sequences (Email & SMS) until they are ready to buy.
                  </p>
                </div>
              </div>

              <div className="vcto-deep-dive mt-8">
                <h3>Scalability Without Headcount</h3>
                <p>
                  The true goal of automation is to allow your business to handle double the workload 
                  without doubling your staff. By automating high-volume, low-context tasks like 
                  scheduling, data entry, and initial outreach, your human experts can focus on 
                  the relationships and decisions that actually drive your revenue.
                </p>
              </div>
            </div>

            <div className="vcto-sidebar">
              <div className="sidebar-card">
                <h4>Strategic Solutions</h4>
                <p className="sidebar-subtitle">Execution Focused</p>
                <ul>
                  <li><strong>AI Chatbots:</strong> Support & Sales Agents</li>
                  <li><strong>Lead Gen:</strong> Scraping & Enrichment</li>
                  <li><strong>Marketing:</strong> Automated Drip Campaigns</li>
                  <li><strong>Workflows:</strong> CRM & Project Sync</li>
                  <li><strong>Legacy:</strong> System Modernization</li>
                </ul>
                <Link to="/schedule-consultation" className="btn btn-full">Discuss Your Build</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SystemIntegration;
