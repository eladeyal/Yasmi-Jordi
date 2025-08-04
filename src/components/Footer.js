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
        </div>
      </div>
    </footer>
  );
};

export default Footer;