import './AboutPage.css';
import headshot from '../assets/ai_headshot_bw_final.png';

const AboutPage = () => {
  return (
    <div className="about-page-container">
      <section id="about" className="about-section">
        <div className="container">
          <div className="about-content">
            <div className="about-image-container">
              <img src={headshot} alt="Reno Warner" className="headshot-img" />
            </div>
            <div className="about-text">
              <p>
                <strong>Stop trading your time for administrative friction.</strong> You started your business to practice your craft, not to manage spreadsheets, chase leads, and troubleshoot software.
              </p>
              <p>
                As a <strong>Virtual CTO</strong> and <strong>AI Operations Architect</strong>, I help high-performing solopreneurs and micro-businesses scale their profitability without adding headcount. I specialize in building "hands-off" technical foundations that allow 1-man shops to compete with established agencies.
              </p>
              <p>
                Since 2014, I’ve operated as a <strong>Systems & Automation Strategist</strong> for industry leaders, refining a "Profit-First" approach to technology. I don't just implement tools; I architect the entire technical lifecycle of your business to ensure your stack is an asset, not a liability.
              </p>
              <p>
                <strong>The Audit &rarr; Build &rarr; Freedom Framework:</strong><br />
                I get micro-businesses profitable as fast as possible by following a proven 3-step process:
              </p>
              <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
                <li><strong>The Audit:</strong> Identifying the manual friction and repetitive tasks eating your margins.</li>
                <li><strong>The Build:</strong> Implementing a custom, lean technical foundation tailored to your workflow.</li>
                <li><strong>The Freedom:</strong> Your systems handle the admin, while you focus exclusively on growing your business.</li>
              </ul>
              <p>
                I act as your dedicated technical partner, providing the high-level strategy of a CTO with the tactical execution of an automation expert.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
