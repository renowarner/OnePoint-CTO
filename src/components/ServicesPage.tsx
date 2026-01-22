import { Link } from 'react-router-dom';
import './ServicesPage.css';

const ServicesPage = () => {
  return (
    <div className="services-page-container">
      <section className="services-section">
        <div className="container">
          <div className="services-grid">
            <Link to="/managed-ai-chatbots" className="service-card">
              <h3>Managed AI Chatbots</h3>
              <p>Tailored AI solutions for customer engagement and automation.</p>
            </Link>
            <Link to="/no-code-system-design" className="service-card">
              <h3>No-Code System Design</h3>
              <p>Efficient systems built with Zapier, Make.com, and more.</p>
            </Link>
            <Link to="/system-administration" className="service-card">
              <h3>Virtual CTO Service</h3>
              <p>Comprehensive technical leadership, management, and maintenance for your company's tech.</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
