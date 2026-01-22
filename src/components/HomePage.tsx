import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage">
      <section id="hero" className="hero-section">
        <div className="container">
          <h2 className="hero-headline">
            <span className="headline-main">Stop Trading Time for Admin</span>
            <span className="headline-sub">I Build Systems That Run Your Business For You</span>
          </h2>
          <p className="hero-tagline">
            Specializing in 1-man shops and micro-businesses. I implement AI and no-code automation to buy back your time and increase your profit margins—without adding headcount.
          </p>
          <div className="hero-cta">
            <Link to="/schedule-consultation" className="btn btn-primary btn-large">Book Your Systems Audit</Link>
          </div>
        </div>
      </section>

      <section id="process" className="process-section">
        <div className="container">
          <h2 className="section-title">The Path to Efficiency</h2>
          <div className="process-grid">
            <div className="process-item">
              <div className="process-number">1</div>
              <h3>The Audit</h3>
              <p>We identify the manual friction and repetitive tasks slowing you down and eating your margins.</p>
            </div>
            <div className="process-item">
              <div className="process-number">2</div>
              <h3>The Build</h3>
              <p>I implement custom AI and No-Code systems (Zapier, Keap, etc.) tailored to your specific workflow.</p>
            </div>
            <div className="process-item">
              <div className="process-number">3</div>
              <h3>The Freedom</h3>
              <p>Your systems handle the admin, lead capture, and follow-ups while you focus on your core craft.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="track-record" className="track-record-section">
        <div className="container">
          <h2 className="section-title">Proven Track Record</h2>
          <p className="track-record-intro">Since 2014, I've been optimizing operations and building robust technical foundations for industry leaders.</p>
          <div className="experience-grid">
            <div className="experience-item">
              <h4>Owner and Principal Consultant</h4>
              <p className="experience-org">Reno Warner Consulting</p>
              <p className="experience-date">2022 - Current</p>
            </div>
            <div className="experience-item">
              <h4>Lead Tech, Automation Engineer, Systems Support</h4>
              <p className="experience-org">Bold Patent Law</p>
              <p className="experience-date">2017 - Current</p>
            </div>
            <div className="experience-item">
              <h4>Automation Test Engineer</h4>
              <p className="experience-org">247Waiter</p>
              <p className="experience-date">2016-2017</p>
            </div>
            <div className="experience-item">
              <h4>Quality Assurance Automation Engineer</h4>
              <p className="experience-org">Search For Yeti</p>
              <p className="experience-date">2014 - 2016</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
