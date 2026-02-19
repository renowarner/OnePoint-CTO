import './ContactPage.css';
import { Link } from 'react-router-dom';
import HoneyBookWidget from './HoneyBookWidget';

const ContactPage = () => {
  return (
    <div className="contact-page-container">
      <section id="contact" className="contact-section">
        <div className="container">
          <p>
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          
          <div className="honeybook-form-wrapper" style={{ marginTop: '2rem' }}>
            {/* The widget will attempt to embed the form. If blocked, it shows a fallback button. */}
            <HoneyBookWidget 
              companyId="one_point_cto_297144"
              formId="6993e7506da0cc0033145a07"
            />
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
