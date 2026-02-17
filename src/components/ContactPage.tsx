import { useState } from 'react';
import './ContactPage.css';
import { Link } from 'react-router-dom';

const ContactPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch('https://formspree.io/f/mbdaypwz', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        const data = await response.json();
        setError(data.error || 'Oops! There was a problem submitting your form');
      }
    } catch (err) {
      setError('Oops! There was a problem submitting your form');
    } finally {
      setIsSubmitting(false);
    }
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
              onSubmit={handleSubmit}
              className="contact-form"
            >
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required placeholder="Your Name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required placeholder="Your Email" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Note</label>
                <textarea id="message" name="message" required placeholder="Your Message" rows={5}></textarea>
              </div>
              
              {error && <p className="text-red-500 mb-4">{error}</p>}

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
