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
              className="group flex items-center justify-center space-x-3 text-gray-400 hover:text-gray-300 transition-all duration-500 mt-6"
            >
              <svg 
                className="w-4 h-4 opacity-40 group-hover:opacity-100 transition-all duration-500 group-hover:rotate-12" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0 9c-5 0-9-4-9-9m9 9c5 0 9-4 9-9m-9 9v-9m0 9c-4 0-8-4-8-9s4-9 8-9" />
              </svg>
              <div className="flex flex-col items-center">
                <span className="text-xs font-light tracking-[0.3em] uppercase text-gray-500">By</span>
                <span className="text-base font-medium tracking-wider mt-1 relative">
                  E3E Technologies
                  <span className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-400/30 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;