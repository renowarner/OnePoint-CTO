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
          <Link to="/schedule-consultation" className="btn btn-primary">Schedule a Consultation</Link>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
