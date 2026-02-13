import './ManagedAiChatbotsPage.css';
import { Link } from 'react-router-dom';

const ManagedAiChatbotsPage = () => {
  return (
    <div className="vcto-page-container">
      <section className="vcto-hero">
        <div className="container">
          <h2 className="section-title">Managed AI Chatbots</h2>
          <p className="vcto-intro">
            Turn your website into a 24/7 sales and support engine with intelligent 
            agents that capture leads and qualify prospects in real-time.
          </p>
        </div>
      </section>

      <section className="vcto-content">
        <div className="container">
          <div className="vcto-grid">
            <div className="vcto-text">
              <h3>Engagement That Converts</h3>
              <p>
                A chatbot shouldn't just be a static FAQ menu. At OnePoint, I build 
                <strong> proactive AI agents</strong> designed to greet visitors, answer 
                complex questions, and bridge the gap between interest and conversion.
              </p>
              
              <div className="vcto-pillars">
                <div className="pillar">
                  <h4>Automated Lead Qualification</h4>
                  <p>My bots don't just collect emails; they ask the right questions to determine budget, timeline, and fit, ensuring your team only speaks with high-value prospects.</p>
                </div>
                <div className="pillar">
                  <h4>24/7 Intelligent Support</h4>
                  <p>Provide instant responses to technical or service-related queries at any hour, reducing bounce rates and building immediate trust with your audience.</p>
                </div>
                <div className="pillar">
                  <h4>Continuous Performance Tuning</h4>
                  <p>This is a managed service. I monitor conversations to refine the AI's "knowledge," ensuring it becomes more accurate and persuasive over time.</p>
                </div>
              </div>
            </div>

            <div className="vcto-sidebar">
              <div className="sidebar-card">
                <h4>Implementation Features</h4>
                <p className="sidebar-subtitle">Bespoke AI Deployment</p>
                <ul>
                  <li>Custom Knowledge Base Integration</li>
                  <li>Multi-Channel Deployment (Web, SMS)</li>
                  <li>CRM & Lead-Flow Integration</li>
                  <li>Active Weekly Refinement</li>
                  <li>Sentiment & Goal Analysis</li>
                </ul>
                <Link to="/contact" className="btn btn-full">Discuss Your Bot Strategy</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ManagedAiChatbotsPage;
