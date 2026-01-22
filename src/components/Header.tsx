import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <h1 className="logo">
            <Link to="/">RENO WARNER</Link>
          </h1>
          <nav className="main-nav">
            <ul>
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="/skills-tooling">Skills & Tooling</NavLink></li>
              <li><NavLink to="/managed-ai-chatbots">Managed AI Chatbots</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
              <li>
                <NavLink to="/schedule-consultation">Schedule Consultation</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
