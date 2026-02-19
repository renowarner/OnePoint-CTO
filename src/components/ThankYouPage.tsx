import { Link } from 'react-router-dom';
import './ThankYouPage.css';

const ThankYouPage = () => {
  return (
    <div className="thank-you-container">
      <div className="thank-you-content">
        <h1>Message Received</h1>
        <div className="divider"></div>
        <p className="confirmation-text">
          Thank you for reaching out. I've received your message and will get back to you shortly.
        </p>
        
        <div className="next-steps">
          <h3>While you wait...</h3>
          <p>Explore how I help businesses reclaim their time and sanity.</p>
          
          <div className="action-grid">
            <Link to="/services" className="action-card">
              <div className="icon">🚀</div>
              <h4>Explore Services</h4>
              <p>See how OnePoint CTO can optimize your tech stack.</p>
            </Link>
            
            <Link to="/blog" className="action-card">
              <div className="icon">💡</div>
              <h4>Read the Blog</h4>
              <p>Insights on automation, AI, and system efficiency.</p>
            </Link>

            <Link to="/about" className="action-card">
              <div className="icon">👋</div>
              <h4>About Me</h4>
              <p>Learn more about my background and approach.</p>
            </Link>
          </div>
        </div>

        <Link to="/" className="btn btn-secondary home-btn">Return to Home</Link>
      </div>
    </div>
  );
};

export default ThankYouPage;
