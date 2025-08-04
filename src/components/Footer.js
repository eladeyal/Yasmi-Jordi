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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0 9c-5 0-9-4-9-9m9 9c5 0 9-4 9-9m-9 9v-9m0 9c-4 0-8-4-8-9s4-9 8-9" />
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