import React from 'react';
import { useTranslation } from 'react-i18next';
import './Footer.css';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-signature">
            <span className="primary-font">Y&J</span>
            <span className="secondary-font">{t('footer.date')}</span>
          </div>
          
          <p className="footer-text">{t('footer.created')}</p>
          
          <div className="footer-hearts">
            <span className="primary-font">♥ ♥ ♥</span>
          </div>
          
          <div className="e3e-signature">
            <a
              href="https://e3etech.com"
              target="_blank"
              rel="noopener noreferrer"
              className="e3e-link"
            >
              <svg 
                className="e3e-icon" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="m9,12 A9,9 0 0,1 15,12 A9,9 0 0,1 9,12"></path>
              </svg>
              <div className="e3e-text">
                <span className="e3e-by">BY</span>
                <span className="e3e-name">E3E Technologies</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;