import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
            home:"Home",
            courses:"Courses",
            teacher:"Teacher",
            news:"Articles&News",
            call:"Call to us",
            person:"logIn",
            student:"students",
            herotext:"Live training and web programming reference with access to more than seven thousand educational videos in Farsi language",
            title: "Name",
            academy:"academy",
            search1:"search for ...?"

        }
      },
      fa: {
        translation: {
          home:"صفحه نخست",
            courses:"دوره ها",
            teacher:"اساتید",
            news:"اخبار و مقالات",
            call:"تماس با ما",
            person:"حساب کاربری",
            student:"دانشجو",
            herotext:"مرجع اموزش زنده و تعاملی برنامه نویسی حوزه وب با دسترسی به بیش از هفت هزار ویدیوی اموزشی به زبان فارسی",
            title: "عنوان",
            academy:"آموزشگاه",
            search1:'... دنبال چی میگردی ؟'

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

