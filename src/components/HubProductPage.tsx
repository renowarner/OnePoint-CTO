import { Link } from 'react-router-dom';
import './HubProductPage.css';

const HubProductPage = () => {
  return (
    <div className="hub-product-container">
      {/* Hero Section */}
      <section className="hub-hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="section-title">OnePoint <span className="text-cyan">Hub</span></h1>
            <p className="hero-subtitle">Your Professional Micro-Presence.</p>
            <p className="hero-description">
              Stop losing leads because you don't have a website. Get a clean, high-performance 
              digital headquarters that connects your clients directly to you. 
              No fluff, just business.
            </p>
            <div className="hero-cta-group">
              <Link to="/schedule-consultation" className="btn btn-primary">Build My Hub</Link>
              <Link to="/hub/template" className="btn btn-secondary" target="_blank">View Live Demo</Link>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem / Solution */}
      <section className="hub-value-prop">
        <div className="container">
          <div className="value-grid">
            <div className="value-card">
              <h3>The Problem</h3>
              <p>
                Full websites are expensive ($3k+), slow to build, and require constant maintenance. 
                But having <em>no</em> website means you look unprofessional and can't be found.
              </p>
            </div>
            <div className="value-card highlight">
              <h3>The Solution</h3>
              <p>
                A <strong>OnePoint Hub</strong>. A single, powerful page that acts as your digital business card, 
                appointment scheduler, and service menu. Hosted, secure, and SEO-optimized.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="hub-features">
        <div className="container">
          <h2 className="section-title center">What You Get</h2>
          <div className="features-grid">
            <div className="feature-item">
              <h4>Instant Credibility</h4>
              <p>A professional <code>onepointcto.com/hub/yourname</code> link to put on your Instagram, LinkedIn, and email signature.</p>
            </div>
            <div className="feature-item">
              <h4>Integrated Scheduling</h4>
              <p>Embed your Calendly or HoneyBook scheduler directly. Clients book time with you without leaving the page.</p>
            </div>
            <div className="feature-item">
              <h4>Zero Maintenance</h4>
              <p>We host it, secure it, and keep it fast. You just share the link and close deals.</p>
            </div>
            <div className="feature-item">
              <h4>SEO Boost</h4>
              <p>Benefit from our domain authority. Your hub is indexed by Google, helping you rank for your name and service.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing / CTA */}
      <section className="hub-pricing">
        <div className="container">
          <div className="pricing-card">
            <h2>Get Your Hub</h2>
            <div className="price-tag">
              <span className="amount">$250</span>
              <span className="term">One-Time Setup</span>
            </div>
            <ul className="pricing-features">
              <li>Includes Design & Setup</li>
              <li>Hosting & SSL Included</li>
              <li>Mobile Optimized</li>
              <li>Scheduler Integration</li>
            </ul>
            <Link to="/schedule-consultation" className="btn btn-primary btn-large">Start Now</Link>
            <p className="pricing-note">Optional: $50/mo for ongoing updates and priority support.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HubProductPage;
