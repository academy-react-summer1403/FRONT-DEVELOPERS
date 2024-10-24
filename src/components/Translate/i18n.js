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
            teachers:"Teachers",
            news:"Articles&News",
            call:"Call to us",
            person:"logIn",
            student:"students",
            teacher:"teacher",
            herotext:"Live training and web programming reference with access to more than seven thousand educational videos in Farsi language",
            title: "Name",
            academy:"academy",
            search1:"search for ...?",
            category:"Most Popular Categories",
            categorytext:"A wide range of the most popular courses",
            Network:"Network security",
            game:"build game",
            data:"data analysis",
            web:"Web page design",
            learning:"Training courses",
            learning1:'The most up-to-date courses you can find',
            allcourse:"All Courses",
            BestTeachers:"Best Teachers",
            findteacher:""

        }
      },
      fa: {
        translation: {
          home:"صفحه نخست",
            courses:"دوره ها",
            teachers:"اساتید",
            news:"اخبار و مقالات",
            call:"تماس با ما",
            person:"حساب کاربری",
            student:"دانشجو",
            teacher:"مدرس",
            herotext:"مرجع اموزش زنده و تعاملی برنامه نویسی حوزه وب با دسترسی به بیش از هفت هزار ویدیوی اموزشی به زبان فارسی",
            title: "عنوان",
            academy:"آموزشگاه",
            search1:'... دنبال چی میگردی ؟',
            category:"محبوب ترین دسته بندی ها",
            categorytext:"گستره وسیعی از محبوب ترین دوره ها",
            Network:"امنیت شبکه",
            game:"بازی سازی",
            data:"تحلیل داده",
            web:"طراحی صفحات وب",
            learning:"دوره های آموزشی",
            learning1:"به روز ترین دوره هایی که میتونید پیدا کنید",
            allcourse:"همه دوره ها",
            BestTeachers:"برترین اساتید",
            findteacher:"!!رو همینجا پیدا می کنید"



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

