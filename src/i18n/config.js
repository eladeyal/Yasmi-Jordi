import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      // Navigation
      "nav.home": "Home",
      "nav.story": "Our Story",
      "nav.photos": "Photos",
      "nav.rsvp": "RSVP",
      
      // Photos
      "photos.title": "Our Journey",
      "photos.subtitle": "Memories from our adventures together",
      
      // Hero Section
      "hero.names": "Yasmin & Jordi",
      "hero.date": "August 21, 2025",
      "hero.location": "Israel",
      "hero.rsvp": "RSVP",
      
      // Our Story
      "story.title": "Our Story",
      "story.content": "We first met at a Friday night dinner in Herzliya back in July 2017 — hosted by Yasmin's childhood best friend, who also happened to be the sister of my roommate at the time. At some point, the dishes needed washing. I like to say I volunteered first, but Yasmin insists she did. Either way, we ended up side by side at the sink — and we've been together ever since.\n\nSince then, we've shared countless nights curled up watching our favorite sitcoms, laughing until our stomachs hurt. We've traveled together, earned our degrees in Be'er Sheva, and adopted our dog Milo, who's been part of the family for nearly three years. We've celebrated with friends at their weddings and mourned the loss of loved ones — growing stronger and closer through every chapter along the way.\n\nBoth of us came to Israel without our immediate families, but along the way, we found home in each other. Now, we can't wait to celebrate this next chapter with the people we love most.",
      
      // Event Details
      "event.title": "The Celebration",
      "event.date": "Thursday, August 21, 2025",
      "event.time": "19:30 - till the music writes its last note",
      "event.venue": "Gaya Gardens",
      "event.address": "Gaya Gardens, Hadera",
      "event.attire": "Attire: Israeli formal - no swimsuits or flip flops",
      "event.description": "We will celebrate our love with family and friends. Join us for an evening of dining, dancing, and unforgettable memories.",
      
      // Timeline
      "timeline.cocktails": "19:30",
      "timeline.cocktails.title": "Reception and cocktails",
      "timeline.dinner": "20:30", 
      "timeline.dinner.title": "Huppa ceremony",
      "timeline.dancing": "21:30",
      "timeline.dancing.title": "Dining and dancing",
      
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
      "footer.date": "August 21, 2025"
    }
  },
  he: {
    translation: {
      // Navigation
      "nav.home": "בית",
      "nav.story": "הסיפור שלנו",
      "nav.photos": "תמונות",
      "nav.rsvp": "אישור",
      
      // Photos
      "photos.title": "המסע שלנו",
      "photos.subtitle": "זכרונות מההרפתקאות שלנו יחד",
      
      // Hero Section
      "hero.names": "יסמין וג'ורדי",
      "hero.date": "21 באוגוסט, 2025",
      "hero.location": "ישראל",
      "hero.rsvp": "אישור הגעה",
      
      // Our Story
      "story.title": "הסיפור שלנו",
      "story.content": "נפגשנו לראשונה בסעודת שבת בהרצליה ביולי 2017 — אצל החברה הכי טובה של יסמין מהילדות, שבמקרה הייתה גם אחותו של השותף שלי לדירה באותה תקופה. בשלב מסוים היה צריך לשטוף כלים. אני אוהב לומר שהתנדבתי ראשון, אבל יסמין מתעקשת שהיא הייתה ראשונה. בכל מקרה, מצאנו את עצמנו אחד ליד השני ליד הכיור — ומאז אנחנו ביחד.\n\nמאז, חלקנו אין ספור לילות כשאנחנו מכורבלים וצופים בסיטקומים המועדפים עלינו, צוחקים עד שכואב לנו הבטן. נסענו יחד, סיימנו את התואר בבאר שבע, ואימצנו את מילו הכלב שלנו, שהוא חלק מהמשפחה כבר כמעט שלוש שנים. חגגנו עם חברים בחתונות שלהם ואבלנו על אובדן יקירים — התחזקנו והתקרבנו דרך כל פרק בדרך.\n\nשנינו הגענו לישראל בלי המשפחות הקרובות שלנו, אבל לאורך הדרך מצאנו בית אחד בשני. עכשיו, אנחנו לא יכולים לחכות לחגוג את הפרק הבא הזה עם האנשים שאנחנו הכי אוהבים.",
      
      // Event Details
      "event.title": "החגיגה",
      "event.date": "יום חמישי, 21 באוגוסט, 2025",
      "event.time": "19:30 - עד שהמוזיקה תכתוב את הנוטה האחרונה שלה",
      "event.venue": "Gaya Gardens",
      "event.address": "חדרה, ישראל",
      "event.attire": "לבוש: חגיגי ישראלי - ללא בגדי ים או כפכפים",
      "event.description": "נחגג את האהבה שלנו עם המשפחה והחברים. הצטרפו אלינו לערב של אוכל, ריקודים וזכרונות בלתי נשכחים.",
      
      // Timeline
      "timeline.cocktails": "19:30",
      "timeline.cocktails.title": "קבלת פנים",
      "timeline.dinner": "20:30",
      "timeline.dinner.title": "חופה וקידושין",
      "timeline.dancing": "21:30",
      "timeline.dancing.title": "סעודה וריקודים",
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
      "footer.date": "21 באוגוסט, 2025"
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