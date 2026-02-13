import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage">
      <section id="hero" className="hero-section">
        <div className="container">
          <h2 className="hero-headline">
            <span className="headline-main">One Partner. One System. Total Control.</span>
            <span className="headline-sub">Strategic V-CTO Services for Small Businesses</span>
          </h2>
          <p className="hero-tagline">
            Managing multiple specialists means separate bills and disconnected systems. OnePoint integrates your automation, AI, and marketing into one cohesive engine—reducing costs and maximizing your baseline income.
          </p>
          <div className="hero-cta">
            <Link to="/schedule-consultation" className="btn btn-primary btn-large">Book Your V-CTO Audit</Link>
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
              <p>We deep-dive into your technical stack to identify fragmented systems, unused SaaS, and manual friction.</p>
            </div>
            <div className="process-item">
              <div className="process-number">2</div>
              <h3>The Integration</h3>
              <p>I build and synchronize custom AI, lead capture, and automation tools into a single, unified technical roadmap.</p>
            </div>
            <div className="process-item">
              <div className="process-number">3</div>
              <h3>The Growth</h3>
              <p>Your systems become your primary employee—handling the admin while you focus on scaling profitability.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="about-preview" className="about-preview-section">
        <div className="container">
          <div className="about-preview-grid">
            <div className="about-preview-content">
              <h2 className="section-title" style={{textAlign: 'left', marginLeft: 0}}>One Voice. One Vision.</h2>
              <p>Managing multiple specialists means separate bills and disconnected systems. At <strong>OnePoint</strong>, I act as your single point of technical leadership.</p>
              <p>I integrate your automation, AI, and marketing into one cohesive engine—reducing costs and maximizing your baseline income.</p>
              <div style={{marginTop: '30px'}}>
                <Link to="/about" className="btn">Learn More About My Approach</Link>
              </div>
            </div>
            <div className="about-preview-stats">
              <div className="stat-card">
                <span className="stat-number">10+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">100%</span>
                <span className="stat-label">System Integration</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="track-record" className="track-record-section">
        <div className="container">
          <h2 className="section-title">Proven Technical Leadership</h2>
          <p className="track-record-intro">Over a decade of experience optimizing operations and building robust technical foundations for industry leaders.</p>
          <div className="experience-grid">
            <div className="experience-item">
              <h4>Virtual CTO</h4>
              <p className="experience-org">OnePoint CTO</p>
              <p className="experience-date">2024 - Current</p>
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
