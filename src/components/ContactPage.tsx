import './ContactPage.css';
import { Link } from 'react-router-dom';
import HoneyBookWidget from './HoneyBookWidget';

const ContactPage = () => {
  // Render the embedded contact form
  return (
    <div className="contact-page-container">
      <section id="contact" className="contact-section">
        <div className="container">
          <p>
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          
          <div className="honeybook-embed-container" style={{ marginTop: '3rem' }}>
            <HoneyBookWidget 
              formId="6993e75040496000079b463b"
              directLink="mailto:reno@onepointcto.com"
              fallbackText="Trouble with the form? Email us directly."
            >
              <div className="consultation-section" style={{ marginTop: 0, paddingBottom: 0 }}>
                <span className="consultation-label">Or skip the form: </span>
                <Link to="/schedule-consultation" className="consultation-btn-link">Schedule a Consultation</Link>
              </div>
            </HoneyBookWidget>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
