import { Link } from 'react-router-dom';
import './ThankYouPage.css';

const ThankYouPage = () => {
  return (
    <div className="thank-you-container">
      <div className="thank-you-content">
        <h1>Message Received</h1>
        <div className="divider"></div>
        <p className="confirmation-text">
          Thank you for reaching out. I've received your inquiry and will review it shortly. 
          Expect a response within 24-48 business hours. In the meantime, I've gathered a few resources 
          below to help you get started on your journey toward a more efficient tech stack.
        </p>
        
        <div className="next-steps">
          <h3>Continue Your Journey</h3>
          
          <div className="action-grid">
            <Link to="/services" className="action-card">
              <h4>System Optimization</h4>
              <p>
                From audit to implementation, see the specific frameworks I use to help small businesses 
                reclaim 10+ hours a week through automation.
              </p>
            </Link>
            
            <Link to="/blog" className="action-card">
              <h4>Technical Insights</h4>
              <p>
                Read deep-dives on the cost of SaaS sprawl, the reality of AI implementation, and why 
                disconnected systems are the silent profit killer.
              </p>
            </Link>

            <Link to="/about" className="action-card">
              <h4>The OnePoint Approach</h4>
              <p>
                Learn why I started OnePoint CTO and how my background in technical leadership 
                drives my focus on ROI-first business systems.
              </p>
            </Link>
          </div>
        </div>

        <Link to="/" className="btn btn-secondary home-btn">Return to Home</Link>
      </div>
    </div>
  );
};

export default ThankYouPage;
