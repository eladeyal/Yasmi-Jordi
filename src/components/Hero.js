import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Hero.css';

const Hero = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const scrollToRSVP = () => {
    scrollToSection('rsvp');
  };

  return (
    <section id="home" className="hero">
      {/* Mobile hamburger menu only */}
      <div className="mobile-nav">
        <div className="container">
          <div className="mobile-nav-content">
            <button 
              className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
            
            <div className="logo">
              <span className="primary-font">Y&J</span>
            </div>
            
            <ul className={`mobile-nav-menu ${isMenuOpen ? 'active' : ''}`}>
              <li><a href="#home" onClick={() => scrollToSection('home')}>{t('nav.home')}</a></li>
              <li><a href="#story" onClick={() => scrollToSection('story')}>{t('nav.story')}</a></li>
              <li><a href="#photos" onClick={() => scrollToSection('photos')}>{t('nav.photos')}</a></li>
              <li><a href="#faqs" onClick={() => scrollToSection('faqs')}>{t('nav.faqs')}</a></li>
              <li><a href="#rsvp" onClick={() => scrollToSection('rsvp')}>{t('nav.rsvp')}</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="hero-overlay">
        <div className="container">
          <div className="hero-content">
            {/* Toast icon */}
            <div className="toast-icon">
              <img src="/toast.png" alt="Toast Icon" />
            </div>
            
            <h1 className="elegant-title">{t('hero.names')}</h1>
            <p className="subtitle">{t('hero.date')}</p>
            <p className="hero-location">{t('hero.location')}</p>
            
            {/* Desktop navigation inside hero content */}
            <nav className="desktop-nav">
              <ul className="desktop-nav-menu">
                <li><a href="#home" onClick={() => scrollToSection('home')}>{t('nav.home')}</a></li>
                <li><a href="#story" onClick={() => scrollToSection('story')}>{t('nav.story')}</a></li>
                <li><a href="#photos" onClick={() => scrollToSection('photos')}>{t('nav.photos')}</a></li>
                <li><a href="#faqs" onClick={() => scrollToSection('faqs')}>{t('nav.faqs')}</a></li>
                <li><a href="#rsvp" onClick={() => scrollToSection('rsvp')}>{t('nav.rsvp')}</a></li>
              </ul>
            </nav>
            
            <div className="hero-actions">
              <button className="btn hero-btn primary" onClick={scrollToRSVP}>
                {t('hero.rsvp')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;