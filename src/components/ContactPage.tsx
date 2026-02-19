import './ContactPage.css';
import { Link } from 'react-router-dom';

const ContactPage = () => {
  return (
    <div className="contact-page-container">
      <section id="contact" className="contact-section">
        <div className="container">
          <p>
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          
          <div className="honeybook-embed-container" style={{ marginTop: '3rem' }}>
            <HoneyBookWidget formId="6993e75040496000079b463b" />
          </div>

          <div className="consultation-link" style={{ marginTop: '4rem' }}>
            <span>Or </span>
            <Link to="/schedule-consultation">Schedule a Consultation</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
