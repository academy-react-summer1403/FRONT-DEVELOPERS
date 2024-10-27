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
            findteacher:"find here!!",
            service:"Our services",
            textservice:"A collection of all you need",
            Counseling:"Counseling",
            Counselingtext:"Design and printing industry dummy text for use by graphic designers.",
            certificate:"Valid certificate",
            certificatetext:"The construction of the text design and printing industry is for the use of graphic designers.",
            jobs:"Job opportunities",
            jobtext:"Design and printing industry dummy text for use by graphic designers",
            news2:"Inform yourself",
            Podcasts:"Podcasts",
            Podcasttext:"A collection of all you need",
            vorod:"Login to account",
            showmore:"View more",
            new1:"online world; A way to increase sales",
            new2:"Sensory marketing is a simple and inexpensive way to increase sales",
            new3:"Know the needs of the customer to increase your income",
            new4:"entering the online world; A sure way to increase sales",
            new5:"Attracting customers through word of mouth advertising",
            footer1:"All rights of this website belong to the academy",
            footer2:"The educational complex started its activity in 2013 and today it has become the largest programming colony in the north of the country.",
            footer3:"Sari, Khazar Square, Farah Abad Road, next to Dunya Arzoo Complex",
            teach1:"! Let's get to know Mazandaran province better",
            teach2:"The most prominent professors of the largest programming collection",
            read:"read",
            catfooter:"category",

            // course page
            Courses: "Courses",
    Newest: "Newest",
    Cheapest: "Cheapest",
    MostPopular: "Most Popular",
    WhatDoYouWantToLearn: "What do you want to learn?",
    EducationalCourses: "Educational Courses",
    UpToDateCourses: "The most up-to-date courses you can find",
    filters: "Filters",
          technology: "Technology",
          status: "Status",
          level: "Level",
          // article
          
          newest: "Newest",
          popular: "Most Popular",
          articles_and_news: "Articles & News",
          stay_updated: "Stay updated with us",
            search_placeholder: "What do you want to learn?",
            latest_articles: "Latest Articles",
            podcasts: "Podcasts",
  listen_best: "Listen to the best with us",
 suggested_articles:"Suggested Articles",
  interesting_articles: "These articles might also interest you",
  
  view_articles: "View Articles",
  favorite_courses: "Favorite Courses",
  best_things_to_learn: "Best Things You Can Learn",
  readmore:"Read more",
   related_courses: "related courses",
  comments: "comments",
  seecourse:"see course",
  share:"share",
  newcomment:"Add a new comment",
  rate:"rate",
  personrate:"person",
  describe:"describe",
  HeadLines:'headlines',
  categories: "Categories",
    requirements: "Requirements",
    trainingType: "Training Type",
    courseStatus: "Course Status",
    startDate: "Course Start Date",
    endDate: "Course End Date",
    rating: "Satisfaction",
    tudentsNumber: "Number of Students"
  

 

          

          





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
            student:"دانشجو ",
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
            findteacher:"!!رو همینجا پیدا می کنید",
            teach1:"برجسته ترین اساتید بزرگترین مجموعه برنامه نویسی",
            teach2:" ! استان مازندران رو بهتر بشناسیم ",
            service:"خدمات ما",
            textservice:"مجموعه ای از تمام آنچه شما نیاز دارید",
            Counseling:"مشاوره",
            Counselingtext:"متن ساختگی صنعت طراحی و چاپ برای استفاده طراحان گرافیک است.",
            certificate:"مدرک معتبر",
            jobs:"فرصت های شغلی",
            news2:"خـــودت رو با خـــبر کن! ",
            Podcasts:"پادکست ها",
            Podcasttext:"مجموعه ای از تمام آنچه شما نیاز دارید",
            vorod:"ورود به حساب ",
            showmore:" مشاهده بیشتر",
            new1:"دنیای آنلاین؛ راهی برای افزایش فروش",
            new2:"بازاریابی حسی راهی ساده و کم هزینه برای افزایش فروش",
            new3:"نیازهای مشتری را بشناسید تا درآمدتان بیشتر شود",
            new4:"ورود به دنیای آنلاین؛ راهی مطمئن برای افزایش فروش",
            new5:"جذب مشتری با تبلیغات دهان به دهان",
            footer1:"کلیه حقوق این وبسایت مطعلق به آموزشگاه فلان میباشد",
            footer2:"مجموعه آموزشی فلان فعالیت خود را از سال 1390 آغاز کرده است و امروز به بزرگترین کلونی برنامه نویسی شمال کشور تبدیل شده است",
            footer3:"ساری، میدان خزر ، جاده فرح آباد ، جنب مجتمع دنیای آرزو",
            read:"مطالعه مطلب",
            catfooter:"دسته بندی ها",

            // course

            Courses: "دوره های آموزشی",
    Newest: "جدید ترین",
    Cheapest: "ارزان ترین",
    MostPopular: "محبوب ترین",
    WhatDoYouWantToLearn: "چی میخوای یاد بگیری؟",
    EducationalCourses: "دوره های آموزشی",
    UpToDateCourses: "به روز ترین دوره هایی که میتونید پیدا کنید",
    filters: "فیلتر ها",
    technology: "تکنولوژی",
    status: "وضعیت",
    level: "سطح",

    // article
   newest: "جدید ترین",
    popular: "محبوب ترین",
    articles_and_news: "اخبار و مقالات",
    stay_updated: "با ما خودت رو به روز کن",
    search_placeholder: "...چی میخوای یاد بدونی؟",
    latest_articles: "جدید ترین اخبار و مقالات",
    podcasts: "پادکست ها",
  listen_best: "با ما از بهترین ها بشنوید",
suggested_articles: "مطالب پیشنهادی",
  interesting_articles: "این مطالب هم میتونه براتون جالب باشه",
  view_articles: "مشاهده مطالب",
  favorite_courses: "محبوب ترین دوره ها",
  best_things_to_learn: "بهترین چیز هایی که میتونید یاد بگیرید",
  readmore:"مطالعه بیشتر",
  related_courses: "دوره های مرتبط",
  comments: "نظرات",
  seecourse:"مشاهده دوره",
  share:"اشتراک گزاری",
  newcomment:" ارسال دیدگاه جدید",
  rate:"امتیاز",
  personrate:"نفر",
  describe:"توضیحات",
  HeadLines:"سرفصل ها",
  categories: "دسته بندی",
   requirements: "پیش نیاز ها",
    trainingType: "نوع آموزش",
    courseStatus: "وضعیت دوره",
    startDate: "تاریخ شروع دوره",
    endDate: "تاریخ پایان دوره",
    rating: "رضایت",
    studentsNumber: "تعداد دانشجویان"
 
  




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

