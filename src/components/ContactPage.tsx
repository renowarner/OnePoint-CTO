import { useState } from 'react';
import './ContactPage.css';
import { Link } from 'react-router-dom';

const ContactPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setIsSubmitting(true);
    // The browser handles the actual POST to Formspree.
    // We just set a timeout to re-enable the button after 60 seconds 
    // to prevent rapid-fire spamming from the UI.
    setTimeout(() => {
      setIsSubmitting(false);
    }, 60000); 
    setSubmitted(true);
  };

  return (
    <div className="contact-page-container">
      <section id="contact" className="contact-section">
        <div className="container">
          <p>
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          
          {submitted ? (
            <div className="submission-success">
              <h3>Thank you!</h3>
              <p>Your message has been sent. I'll get back to you as soon as possible.</p>
              <button onClick={() => setSubmitted(false)} className="btn btn-secondary">Send another message</button>
            </div>
          ) : (
            <form 
              action="https://formspree.io/f/contact@renowarner.com" 
              method="POST" 
              className="contact-form"
              onSubmit={handleSubmit}
            >
              {/* Honeypot field to catch bots */}
              <input type="text" name="_gotcha" style={{ display: 'none' }} />

              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required placeholder="Your Name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required placeholder="Your Email" />
              </div>
              <div className="form-group">
                <label htmlFor="note">Note</label>
                <textarea id="note" name="note" required placeholder="Your Message" rows={5}></textarea>
              </div>
              <button 
                type="submit" 
                className="btn btn-primary" 
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}

          <div className="consultation-link">
            <span>Or </span>
            <Link to="/schedule-consultation">Schedule a Consultation</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
