import './AboutPage.css';
import headshot from '../assets/ai_headshot_bw_final.png';

const AboutPage = () => {
  return (
    <div className="about-page-container">
      <section id="about" className="about-section">
        <div className="container">
          <h2 className="section-title">Technical Strategy, Unified.</h2>
          <div className="about-content">
            <div className="about-image-container">
              <img src={headshot} alt="Reno Warner" className="headshot-img" />
            </div>
            <div className="about-text">
              <p>
                <strong>The "Three Expert" Problem:</strong> Most small businesses are told they need a separate web developer, a marketing agency, and an IT specialist to survive.
              </p>
              <p>
                But three separate experts means three separate bills, three disconnected systems, and three times the communication overhead. It's a recipe for technical friction and wasted profit.
              </p>
              <p>
                At <strong>OnePoint</strong>, I provide a singular alternative. As your <strong>Virtual CTO</strong>, I act as your single point of technical leadership, integrating your entire stack—from AI-driven automation and lead generation to core systems management and SEO—into one cohesive, profitable engine.
              </p>
              <p>
                I don't just "manage" your tech; I align it with your business goals to reduce costs, eliminate technical debt, and create a baseline for sustainable growth.
              </p>
              <p>
                <strong>The OnePoint Framework: Audit &rarr; Integrate &rarr; Scale</strong><br />
                I help small businesses achieve technical stability and maximum profitability through a three-step process:
              </p>
              <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
                <li><strong>The Audit:</strong> A uniform deep-dive to identify technical waste, fragmented data, and untapped automation opportunities.</li>
                <li><strong>The Integration:</strong> Synchronizing your marketing, operations, and AI tools into a single, unified workflow.</li>
                <li><strong>The Scale:</strong> Your technical foundation becomes your most efficient employee, handling the admin while you focus on high-level growth.</li>
              </ul>
              <p>
                Whether you need a full systems overhaul or ongoing technical leadership, I provide the strategic oversight and tactical execution required to turn your technology into a competitive advantage.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="track-record" className="track-record-section">
        <div className="container">
          <h2 className="section-title">Proven Technical Leadership</h2>
          <p className="track-record-intro">Over a decade of experience optimizing operations and building robust technical foundations for industry leaders.</p>
          
          <div className="experience-grid top-row">
            <div className="experience-item">
              <h4>Chief Technology Officer</h4>
              <p className="experience-org">Thyrsus Consulting</p>
              <p className="experience-date">2023 - 2025</p>
            </div>
            <div className="experience-item featured-xp">
              <h4>Founder & Principal V-CTO</h4>
              <p className="experience-org">OnePoint CTO</p>
              <p className="experience-date">2025 - Current</p>
            </div>
            <div className="experience-item">
              <h4>Chief Technology Officer</h4>
              <p className="experience-org">Bold Patent Law</p>
              <p className="experience-date">2017 - 2024</p>
            </div>
          </div>

          <div className="experience-grid bottom-row">
            <div className="experience-item">
              <h4>Automation Test Engineer</h4>
              <p className="experience-org">247Waiter</p>
              <p className="experience-date">2016 - 2017</p>
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

export default AboutPage;
