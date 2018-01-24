import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .init({
    fallbackLng: 'en',
    resources: {
      en: {
        translations: {
          nav: {
            home: 'Home',
            me: 'My Profile'
          },
          home: {
            title: 'Home Page',
            description: 'This is the Home component.'
          },
          profile: {
            title: 'Name: {{user}}',
            description: 'This is the user profile for a user named {{user}}.'
          }
        }
      }
    },
    react: {},

    // have a common namespace used around the full app
    ns: ['common'],
    defaultNS: 'common',

    // cache: {
    //   enabled: true
    // },
    // debug: true,

    interpolation: {
      escapeValue: false, // not needed for react!!
      formatSeparator: ',',
      format: (value, format) => {
        if (format === 'uppercase') return value.toUpperCase();
        return value;
      }
    }
  });

export default i18n;
