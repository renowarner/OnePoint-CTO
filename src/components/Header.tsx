import { Link, NavLink } from 'react-router-dom';
import './Header.css';
import logo from '../assets/logo_icon.png';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <h1 className="logo">
            <Link to="/" className="logo-link">
              <img src={logo} alt="OnePoint CTO Logo Icon" className="header-logo" />
              <span className="logo-text">OnePoint <span className="logo-text-accent">CTO</span></span>
            </Link>
          </h1>
          <nav className="main-nav">
            <ul>
              <li><NavLink to="/about">About</NavLink></li>
              <li className="dropdown">
                <NavLink to="/services" className="dropdown-trigger">Services & Solutions</NavLink>
                <ul className="dropdown-menu">
                  <li><NavLink to="/managed-ai-chatbots">Managed AI Chatbots</NavLink></li>
                  <li><NavLink to="/no-code-system-design">No-Code System Design</NavLink></li>
                  <li><NavLink to="/system-administration">Virtual CTO Service</NavLink></li>
                </ul>
              </li>
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
