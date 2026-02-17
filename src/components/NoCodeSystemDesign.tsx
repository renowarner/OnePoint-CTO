import './NoCodeSystemDesign.css';
import { Link } from 'react-router-dom';

const NoCodeSystemDesign = () => {
  return (
    <div className="vcto-page-container">
      <section className="vcto-hero">
        <div className="container">
          <h2 className="section-title">AI & Operational Automation</h2>
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
                I specialize in building the <strong>connective tissue</strong> between your systems. By leveraging 
                AI and modern automation frameworks, I transform your technology from a collection of 
                isolated apps into a synchronized implementation layer that works while you sleep.
              </p>
              
              <div className="vcto-pillars">
                <div className="pillar">
                  <h4>Intelligent Workflow Engineering</h4>
                  <p>I design custom automations using tools like Zapier, Make.com, and Python to handle complex logic. From lead routing and automated follow-ups to instant document generation, we remove the "human-as-a-bridge" bottleneck.</p>
                </div>
                <div className="pillar">
                  <h4>AI Model Integration</h4>
                  <p>Go beyond basic chatbots. I integrate Large Language Models (LLMs) directly into your internal workflows to automate content summarization, customer sentiment analysis, and intelligent data extraction from emails and files.</p>
                </div>
                <div className="pillar">
                  <h4>The Automated Architecture</h4>
                  <p>Instead of a series of fragile "hacks," you receive a professional, documented system architecture. We build systems that are designed to be maintainable, observable, and ready for future growth.</p>
                </div>
              </div>

              <div className="vcto-deep-dive mt-8">
                <h3>Scalability Without Headcount</h3>
                <p>
                  The true goal of automation is to allow your business to handle double the workload 
                  without doubling your staff. By automating the high-volume, low-context tasks, 
                  your human experts can focus on the relationships and decisions that actually 
                  drive your revenue.
                </p>
              </div>
            </div>

            <div className="vcto-sidebar">
              <div className="sidebar-card">
                <h4>Project Implementation</h4>
                <p className="sidebar-subtitle">Execution Focused</p>
                <ul>
                  <li>Custom API & Webhook Design</li>
                  <li>CRM & Marketing Sync</li>
                  <li>Intelligent Lead Capture</li>
                  <li>Automated Financial Reporting</li>
                  <li>AI Assistant Deployment</li>
                </ul>
                <Link to="/schedule-consultation" className="btn btn-full">See What's Possible</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NoCodeSystemDesign;
