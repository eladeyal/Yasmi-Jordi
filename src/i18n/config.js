import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      // Navigation
      "nav.home": "Home",
      "nav.story": "Our Story",
      "nav.photos": "Photos",
      "nav.faqs": "FAQs",
      "nav.rsvp": "RSVP",
      
      // Hero Section
      "hero.names": "Yasmin & Jordi",
      "hero.date": "August 10, 2025",
      "hero.location": "Israel",
      "hero.rsvp": "RSVP",
      
      // Our Story
      "story.title": "Our Story",
      "story.content": "We are excited to share our special day with you. Join us as we celebrate love, laughter, and the beginning of our journey together.",
      
      // Event Details
      "event.title": "The Celebration",
      "event.date": "Sunday, August 10, 2025",
      "event.time": "18:00–24:00",
      "event.venue": "Wedding Venue",
      "event.address": "Address TBD, Israel",
      "event.attire": "Attire: Formal - Please wear bright colors and elegant attire",
      "event.description": "We will celebrate our love with family and friends. Join us for an evening of dining, dancing, and unforgettable memories.",
      
      // Timeline
      "timeline.cocktails": "18:00–19:00",
      "timeline.cocktails.title": "Cocktail Hour",
      "timeline.dinner": "19:15–22:00", 
      "timeline.dinner.title": "Dinner & Speeches",
      "timeline.dancing": "22:00–24:00",
      "timeline.dancing.title": "Dancing & Celebration",
      "timeline.dancing.desc": "Join us on the dance floor for an unforgettable night!",
      
      // RSVP
      "rsvp.title": "Join Our Celebration",
      "rsvp.subtitle": "We can't wait to celebrate with you!",
      "rsvp.name": "Your Name",
      "rsvp.namePlaceholder": "Enter your full name",
      "rsvp.guests": "How many will be coming?",
      "rsvp.submit": "Send RSVP",
      "rsvp.sending": "Sending...",
      "rsvp.success": "Thank You!",
      "rsvp.successMessage": "Your RSVP has been received. We can't wait to celebrate with you!",
      "rsvp.error": "Oops!",
      "rsvp.errorMessage": "Something went wrong. Please try again or contact us directly.",
      
      // Footer
      "footer.created": "Created with love for Yasmin & Jordi",
      "footer.date": "August 10, 2025"
    }
  },
  he: {
    translation: {
      // Navigation
      "nav.home": "בית",
      "nav.story": "הסיפור",
      "nav.photos": "תמונות",
      "nav.faqs": "שאלות",
      "nav.rsvp": "אישור",
      
      // Hero Section
      "hero.names": "יסמין וג'ורדי",
      "hero.date": "10 באוגוסט, 2025",
      "hero.location": "ישראל",
      "hero.rsvp": "אישור הגעה",
      
      // Our Story
      "story.title": "הסיפור שלנו",
      "story.content": "אנחנו מתרגשים לחלוק איתכם את היום המיוחד שלנו. הצטרפו אלינו לחגוג אהבה, צחוק ותחילת המסע שלנו יחד.",
      
      // Event Details
      "event.title": "החגיגה",
      "event.date": "יום ראשון, 10 באוגוסט, 2025",
      "event.time": "18:00–24:00",
      "event.venue": "אולם חתונות",
      "event.address": "כתובת תיקבע, ישראל",
      "event.attire": "לבוש: חגיגי - אנא לבשו צבעים בהירים ולבוש אלגנטי",
      "event.description": "נחגג את האהבה שלנו עם המשפחה והחברים. הצטרפו אלינו לערב של אוכל, ריקודים וזכרונות בלתי נשכחים.",
      
      // Timeline
      "timeline.cocktails": "18:00–19:00",
      "timeline.cocktails.title": "קוקטיילים",
      "timeline.dinner": "19:15–22:00",
      "timeline.dinner.title": "ארוחת ערב ונאומים",
      "timeline.dancing": "22:00–24:00",
      "timeline.dancing.title": "ריקודים וחגיגה",
      "timeline.dancing.desc": "הצטרפו אלינו לרחבת הריקודים לליל בלתי נשכח!",
      
      // RSVP
      "rsvp.title": "הצטרפו לחגיגה שלנו",
      "rsvp.subtitle": "אנחנו לא יכולים לחכות לחגוג איתכם!",
      "rsvp.name": "השם שלכם",
      "rsvp.namePlaceholder": "הכניסו את השם המלא",
      "rsvp.guests": "כמה אנשים יגיעו?",
      "rsvp.submit": "שלחו אישור",
      "rsvp.sending": "שולח...",
      "rsvp.success": "תודה רבה!",
      "rsvp.successMessage": "אישור ההגעה שלכם התקבל. אנחנו לא יכולים לחכות לחגוג איתכם!",
      "rsvp.error": "אופס!",
      "rsvp.errorMessage": "משהו השתבש. אנא נסו שוב או צרו איתנו קשר ישירות.",
      
      // Footer
      "footer.created": "נוצר באהבה עבור יסמין וג'ורדי",
      "footer.date": "10 באוגוסט, 2025"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // default language
    fallbackLng: 'he',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;