import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './CookieConsent.css';

function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consentGiven = localStorage.getItem('cookieConsent');
    if (!consentGiven) {
      // Show popup after a short delay for better UX
      setTimeout(() => {
        setShowConsent(true);
      }, 1000);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowConsent(false);
    // You can add analytics or tracking code here
    console.log('Cookies accepted');
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setShowConsent(false);
    // Disable any tracking or analytics
    console.log('Cookies declined');
  };

  if (!showConsent) {
    return null;
  }

  return (
    <div className="cookie-consent-overlay">
      <div className="cookie-consent">
        <div className="cookie-content">
          <div className="cookie-icon">
            <i className="fa-solid fa-cookie-bite"></i>
          </div>
          <div className="cookie-text">
            <h3>Cookie-Einstellungen</h3>
            <p>
              Wir verwenden Cookies, um Ihre Erfahrung auf unserer Website zu verbessern. 
              Durch die Nutzung unserer Website stimmen Sie der Verwendung von Cookies gemäß 
              unserer Cookie-Richtlinie zu.
            </p>
          </div>
        </div>

        <div className="cookie-actions">
          <Link to="/datenschutz" className="cookie-policy-link">
            <i className="fa-solid fa-file-lines"></i>
            Cookie-Richtlinie lesen
          </Link>
          
          <div className="cookie-buttons">
            <button 
              className="btn-decline" 
              onClick={handleDecline}
              aria-label="Cookies ablehnen"
            >
              <i className="fa-solid fa-xmark"></i>
              Ich lehne ab
            </button>
            <button 
              className="btn-accept" 
              onClick={handleAccept}
              aria-label="Cookies akzeptieren"
            >
              <i className="fa-solid fa-check"></i>
              Ich akzeptiere
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CookieConsent;
