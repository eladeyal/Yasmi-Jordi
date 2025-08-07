import React from 'react';
import { useTranslation } from 'react-i18next';
import './OurStory.css';

const OurStory = () => {
  const { t } = useTranslation();

  return (
    <section id="story" className="section">
      <div className="container">
        <div className="story-content">
          <h2 className="elegant-title" style={{ fontSize: '50px', lineHeight: '50px' }}>
            {t('story.title')}
          </h2>
          <div className="story-text">
            <p>{t('story.content')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;