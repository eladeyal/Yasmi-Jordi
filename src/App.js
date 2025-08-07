import React from 'react';
import { useTranslation } from 'react-i18next';
import Hero from './components/Hero';
import OurStory from './components/OurStory';
import Photos from './components/Photos';
import EventDetails from './components/EventDetails';
import RSVP from './components/RSVP';
import Footer from './components/Footer';
import LanguageToggle from './components/LanguageToggle';
import './App.css';

function App() {
  const { i18n } = useTranslation();

  return (
    <div className="App" dir={i18n.language === 'he' ? 'rtl' : 'ltr'}>
      <LanguageToggle />
      <Hero />
      <OurStory />
      <Photos />
      <EventDetails />
      <RSVP />
      <Footer />
    </div>
  );
}

export default App;