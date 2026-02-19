import { Link } from 'react-router-dom';
import './ThankYouPage.css'; // Reusing the same styles

const ConsultationThankYouPage = () => {
  return (
    <div className="thank-you-container">
      <div className="thank-you-content">
        <h1>Consultation Scheduled</h1>
        <div className="divider"></div>
        <p className="confirmation-text">
          Your request has been received! Please check your email for a confirmation and calendar invite.
          I look forward to discussing your technical roadmap.
        </p>
        
        <div className="next-steps">
          <h3>While You Wait</h3>
          
          <div className="action-grid">
            <Link to="/services" className="action-card">
              <h4>Review Services</h4>
              <p>
                Refresh your memory on the specific packages and audits we'll be discussing.
              </p>
            </Link>
            
            <Link to="/blog" className="action-card">
              <h4>Read Case Studies</h4>
              <p>
                See how other businesses have saved 10+ hours a week with similar automations.
              </p>
            </Link>

            <Link to="/about" className="action-card">
              <h4>About Reno</h4>
              <p>
                Learn more about my background and the philosophy behind OnePoint CTO.
              </p>
            </Link>
          </div>
        </div>

        <Link to="/" className="btn btn-secondary home-btn">Return to Home</Link>
      </div>
    </div>
  );
};

export default ConsultationThankYouPage;
