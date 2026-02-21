import { Link } from 'react-router-dom';
import velaLogo from '/vela.png';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <img src={velaLogo} alt="Vela Logo" className="logo-icon" />
              <span className="logo-text">Vela</span>
            </div>
            <p>Build websites with modern DSL syntax</p>
          </div>

          <div className="footer-section">
            <h4>Navigation</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#get-started">Get Started</a></li>
              <li><a href="#docs">Docs</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Resources</h4>
            <ul>
              <li><a href="https://github.com/Ih205R/Vela" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href="https://discord.com" target="_blank" rel="noopener noreferrer">Community</a></li>
              <li><a href="#docs">Documentation</a></li>
              <li><a href="#" >Examples</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Connect</h4>
            <ul>
              <li>
                <a href="https://x.com/velaofficial26" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-x-twitter"></i> X (Twitter)
                </a>
              </li>
              <li><a href="https://github.com/Ih205R/Vela" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href="https://discord.com" target="_blank" rel="noopener noreferrer">Discord</a></li>
              <li><a href="mailto:ihorr30@gmail.com">Email</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 Vela. All rights reserved.</p>
          <div className="footer-links">
            <Link to="/datenschutz">Datenschutz</Link>
            <Link to="/agb">AGB</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
