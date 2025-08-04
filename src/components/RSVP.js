import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './RSVP.css';

const RSVP = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    guests: '1'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');
    
    try {
      // Send data directly to Google Sheets
      await fetch('https://script.google.com/macros/s/AKfycbx7I6ElQxPwRqoeDBbsgn2vT2jyL21seWehMm7snk7GQNKjoQmLUrfMrUg8hus8cwz5/exec', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          guests: formData.guests,
          timestamp: new Date().toLocaleString('he-IL', {
            timeZone: 'Asia/Jerusalem',
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit'
          })
        }),
        mode: 'no-cors'
      });

      setSubmitStatus('success');
      setFormData({
        name: '',
        guests: '1'
      });
    } catch (error) {
      console.error('Error submitting RSVP:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="rsvp" className="section">
      <div className="container">
        <div className="rsvp-content">
          <div className="rsvp-header">
            <div className="heart-icon">💕</div>
            <h2 className="rsvp-title">{t('rsvp.title')}</h2>
            <p className="rsvp-subtitle">{t('rsvp.subtitle')}</p>
          </div>
          
          {submitStatus === 'success' && (
            <div className="alert alert-success">
              <div className="success-icon">✨</div>
              <h3>{t('rsvp.success')}</h3>
              <p>{t('rsvp.successMessage')}</p>
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div className="alert alert-error">
              <div className="error-icon">😔</div>
              <h3>{t('rsvp.error')}</h3>
              <p>{t('rsvp.errorMessage')}</p>
            </div>
          )}
          
          <form className="rsvp-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name" className="elegant-label">{t('rsvp.name')}</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={t('rsvp.namePlaceholder')}
                className="elegant-input"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="guests" className="elegant-label">{t('rsvp.guests')}</label>
              <div className="guest-selector">
                {[1, 2, 3, 4, 5].map(num => (
                  <button
                    key={num}
                    type="button"
                    className={`guest-btn ${formData.guests === num.toString() ? 'active' : ''}`}
                    onClick={() => setFormData({...formData, guests: num.toString()})}
                  >
                    {num}{num === 5 ? '+' : ''}
                  </button>
                ))}
              </div>
            </div>
            
            <button type="submit" className="rsvp-submit-btn" disabled={isSubmitting}>
              <span className="btn-text">
                {isSubmitting ? t('rsvp.sending') : t('rsvp.submit')}
              </span>
              <span className="btn-icon">{isSubmitting ? '⏳' : '💌'}</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RSVP;