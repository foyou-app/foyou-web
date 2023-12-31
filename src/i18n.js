import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import eng from './lib/languages/en';
import mng from './lib/languages/mn';
import kz from './lib/languages/kz';
import ru from './lib/languages/ru';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // we init with resources
    resources: {
      en: { translations: eng },
      mn: { translations: mng },
      kk: { translations: kz },
      ru: { translations: ru },
    },
    fallbackLng: 'mn',
    lng: 'mn',
    debug: false,
    // have a common namespace used around the full app
    ns: ['translations'],
    defaultNS: 'translations',

    keySeparator: false, // we use content as keys

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
