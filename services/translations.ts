import { Language } from '../types';

type Translations = {
  [key in Language]: {
    [key: string]: string;
  };
};

export const translations: Translations = {
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.academics': 'Academics',
    'nav.admissions': 'Admissions',
    'nav.staff': 'Staff',
    'nav.news': 'News',
    'nav.gallery': 'Gallery',
    'nav.contact': 'Contact',
    'nav.clubs': 'Student Life',
    'nav.login': 'Log In',
    'nav.logout': 'Logout',
    'nav.portals': 'Portals',
    
    'footer.desc': 'Empowering the next generation through Faith, Knowledge, and Service. Established 1998.',
    'footer.quickLinks': 'Quick Links',
    'footer.contact': 'Contact Us',
    'footer.newsletter': 'Newsletter',
    'footer.rights': 'All rights reserved.',

    'hero.title': 'Faith. Knowledge. Service.',
    'hero.subtitle': 'Abba Pascal Catholic School provides world-class education rooted in strong moral values in the heart of Ethiopia.',
    'hero.apply': 'Apply Now',
    'hero.learn': 'Learn More',

    'section.academics': 'Academics',
    'section.academics.desc': 'Explore our curriculum.',
    'section.admissions': 'Admissions',
    'section.admissions.desc': 'Join our family.',
    'section.portals': 'Portals',
    'section.portals.desc': 'Login for parents & students.',

    'stats.students': 'Students',
    'stats.teachers': 'Teachers',
    'stats.years': 'Years of Excellence',
    'stats.graduates': 'Graduates',

    'contact.title': 'Contact Us',
    'contact.subtitle': 'Have questions? We are here to help.',
    'contact.name': 'Your Name',
    'contact.email': 'Your Email',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
    'contact.success': 'Message Sent',
  },
  am: {
    'nav.home': 'ዋና ገጽ',
    'nav.about': 'ስለ እኛ',
    'nav.academics': 'ትምህርት',
    'nav.admissions': 'ምዝገባ',
    'nav.staff': 'ሰራተኞች',
    'nav.news': 'ዜናዎች',
    'nav.gallery': 'ፎቶዎች',
    'nav.contact': 'ያግኙን',
    'nav.clubs': 'የተማሪዎች ሕይወት',
    'nav.login': 'ግባ',
    'nav.logout': 'ውጣ',
    'nav.portals': 'ፖርታል',

    'footer.desc': 'በእምነት፣ በእውቀት እና በአገልግሎት ቀጣዩን ትውልድ ማብቃት። በ1991 ዓ.ም ተመሰረተ።',
    'footer.quickLinks': 'ፈጣን ሊንኮች',
    'footer.contact': 'አድራሻ',
    'footer.newsletter': 'ጋዜጣ',
    'footer.rights': 'መብቱ በህግ የተጠበቀ ነው።',

    'hero.title': 'እምነት። እውቀት። አገልግሎት።',
    'hero.subtitle': 'አባ ፓስካል ካቶሊክ ትምህርት ቤት በኢትዮጵያ እምብርት ላይ በጠንካራ ስነ-ምግባር የታነፀ አለም አቀፍ ደረጃውን የጠበቀ ትምህርት ይሰጣል።',
    'hero.apply': 'አሁን ይመዝገቡ',
    'hero.learn': 'ተጨማሪ ያንብቡ',

    'section.academics': 'ትምህርት',
    'section.academics.desc': 'ስርዓተ ትምህርታችንን ያስሱ።',
    'section.admissions': 'ምዝገባ',
    'section.admissions.desc': 'ቤተሰባችንን ይቀላቀሉ።',
    'section.portals': 'ፖርታል',
    'section.portals.desc': 'ለወላጆች እና ተማሪዎች።',

    'stats.students': 'ተማሪዎች',
    'stats.teachers': 'መምህራን',
    'stats.years': 'የላቀ አገልግሎት ዓመታት',
    'stats.graduates': 'ተመራቂዎች',

    'contact.title': 'ያግኙን',
    'contact.subtitle': 'ጥያቄ አለዎት? እኛ ለመርዳት እዚህ ነን።',
    'contact.name': 'ስምዎ',
    'contact.email': 'ኢሜይልዎ',
    'contact.message': 'መልእክት',
    'contact.send': 'መልእክት ይላኩ',
    'contact.success': 'መልእክት ተልኳል',
  }
};