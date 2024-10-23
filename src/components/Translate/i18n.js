import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
            title: "Title",

        }
      },
      fa: {
        translation: {
            title: "آموزشگاه",

        }
      }
    },
    lng: 'fa', // زبان پیش‌فرض
    fallbackLng: 'fa',

    interpolation: {
      escapeValue: false, // برای جلوگیری از مشکلات امنیتی XSS
    }
  });

export default i18n;