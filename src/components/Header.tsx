import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import './Header.css';
import logo from '../assets/logo_icon.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo-container">
            <h1 className="seo-h1">OnePoint CTO - Strategic V-CTO Services</h1>
            <Link to="/" className="logo-link" onClick={closeMenu}>
              <img src={logo} alt="OnePoint CTO Logo Icon" className="header-logo" />
              <span className="logo-text">OnePoint <span className="logo-text-accent">CTO</span></span>
            </Link>
          </div>

          <button className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu} aria-label="Toggle Navigation">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>

          <nav className={`main-nav ${isMenuOpen ? 'open' : ''}`}>
            <ul>
              <li><NavLink to="/about" onClick={closeMenu}>About</NavLink></li>
              <li className="dropdown">
                <NavLink to="/services" className="dropdown-trigger" onClick={(e) => {
                  if (window.innerWidth <= 768) {
                    e.preventDefault();
                  }
                }}>Services & Solutions</NavLink>
                <ul className="dropdown-menu">
                  <li><NavLink to="/system-administration" onClick={closeMenu}>Virtual CTO Retainer</NavLink></li>
                  <li><NavLink to="/no-code-system-design" onClick={closeMenu}>AI & Automation Integration</NavLink></li>
                  <li><NavLink to="/managed-ai-chatbots" onClick={closeMenu}>Managed AI Chatbots</NavLink></li>
                  <li><NavLink to="/web-presence-growth" onClick={closeMenu}>Web Presence & Growth</NavLink></li>
                </ul>
              </li>
              <li><NavLink to="/blog" onClick={closeMenu}>Blog</NavLink></li>
              <li><NavLink to="/contact" onClick={closeMenu}>Contact</NavLink></li>
              <li>
                <NavLink to="/schedule-consultation" className="cta-nav" onClick={closeMenu}>Schedule Consultation</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
