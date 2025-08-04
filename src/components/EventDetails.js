import React from 'react';
import { useTranslation } from 'react-i18next';
import './EventDetails.css';

const EventDetails = () => {
  const { t } = useTranslation();

  return (
    <section id="details" className="section-alt">
      <div className="container">
        <div className="event-content">
          <h2 className="elegant-title" style={{ fontSize: '50px', lineHeight: '50px' }}>
            {t('event.title')}
          </h2>
          
          <div className="event-main-info">
            <h3 className="subtitle" style={{ fontSize: '30px' }}>{t('event.date')}</h3>
            <p className="event-time">{t('event.time')}</p>
            <div className="venue-info">
              <h4>{t('event.venue')}</h4>
              <p>{t('event.address')}</p>
            </div>
            <p className="event-attire">{t('event.attire')}</p>
            <p className="event-description">{t('event.description')}</p>
          </div>
          
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-time">{t('timeline.cocktails')}</div>
              <div className="timeline-content">
                <h4>{t('timeline.cocktails.title')}</h4>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-time">{t('timeline.dinner')}</div>
              <div className="timeline-content">
                <h4>{t('timeline.dinner.title')}</h4>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-time">{t('timeline.dancing')}</div>
              <div className="timeline-content">
                <h4>{t('timeline.dancing.title')}</h4>
                <p>{t('timeline.dancing.desc')}</p>
              </div>
            </div>
          </div>
          
          <div className="date-signature">
            <span className="primary-font">Y&J</span>
            <span className="secondary-font">10.8.2025</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;