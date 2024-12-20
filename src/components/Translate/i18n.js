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
            teacher:"suggestion",
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
    tudentsNumber: "Number of Students",
    
      course_id: "Course ID",
     paid: "Paid",
      date: "Date",
      number: "Number",
      complete_purchase: "Complete Purchase"
   ,
    lang:"Select the language of the site",
    last:"last",
    home:"home",
    next:"next",
    theme:"Choose a site theme",
    green:"blue green",
    purple:"purple",
    blue:"blue",
    night:"dark mode",
    cancel:"cancel",
    preferences:"Tell us your preferences",
    tosee:"Which area of ​​web development do you like the most?"
,front:"Front-end",
back:"Backend"
,full:"fullstack",
none:"none"


    
  

 

          

          





        }
      },
      fa: {
        translation: {
          home:"صفحه نخست",
            courses:"دوره ها",
            teachers:"اساتید",
            news:"اخبار و مقالات",
            call:"تماس با ما",
            person:"ورود به حساب ",
            student:"دانشجو ",
            teacher:"پیشنهاد ما",
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
            lang:"زبان سایت را انتخاب کنید",
            last:"قبلی",
            home:"صفحه اصلی",
            cancel:"لفو",

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
    studentsNumber: "تعداد دانشجویان",
    course_id: "نام دوره",
  paid: " قیمت دوره",
  date: "تاریخ",
  number: "شماره پیگیری" ,
  complete_purchase: "تکمیل خرید",
  next:"بعدی",
  theme:"تم سایت را انتخاب کنید ",
  green:"سبزآبی",
  purple:"بنفش",
  blue:"آبی",
  night:"مود شب",
  preferences:"علاقه مندی های خود را برای ما مشخص کنید",
  tosee:"کدام حوزه توسعه وب را بیشتر می پسندید؟"
 ,   front:"فرانت اند",
 back:"بک اند",
 full:" فول استک",
 none:"هیچکدام",
 fav2:"چه موضوعاتی را بیشتر می پسندید؟"
  




        }
      },    
      es: {
        translation: {
          home: "Inicio",
          courses: "Cursos",
          teachers: "Profesores",
          news: "Noticias y Artículos",
          call: "Contáctanos",
          person: "Cuenta",
          student: "Estudiante",
          teacher: "Nuestra sugerencia",
          herotext: "La plataforma líder en cursos interactivos y en vivo de desarrollo web con acceso a más de siete mil videos educativos en español.",
          title: "Título",
          academy: "Academia",
          search1: "... ¿Qué estás buscando?",
          category: "Categorías Más Populares",
          categorytext: "Una amplia gama de los cursos más populares",
          Network: "Seguridad de Red",
          game: "Desarrollo de Juegos",
          data: "Análisis de Datos",
          web: "Diseño Web",
          learning: "Cursos Educativos",
          learning1: "Los cursos más recientes que puedes encontrar",
          allcourse: "Todos los Cursos",
          BestTeachers: "Mejores Profesores",
          findteacher: "¡Encuéntralos aquí!",
          teach1: "Los profesores más destacados de la red de programación más grande",
          teach2: "Conozcamos mejor la provincia de Mazandarán",
          service: "Nuestros Servicios",
          textservice: "Una colección de todo lo que necesitas",
          Counseling: "Asesoramiento",
          Counselingtext: "Texto de marcador de posición utilizado en la industria del diseño gráfico.",
          certificate: "Certificado",
          jobs: "Oportunidades de Empleo",
          news2: "¡Mantente actualizado!",
          Podcasts: "Podcasts",
          Podcasttext: "Una colección de todo lo que necesitas",
          vorod: "Iniciar sesión",
          showmore: "Ver más",
          new1: "El Mundo Online: Un Camino para Aumentar las Ventas",
          new2: "Marketing Sensorial: Una Forma Sencilla y Económica de Aumentar las Ventas",
          new3: "Conocer las Necesidades del Cliente para Aumentar tus Ingresos",
          new4: "Entrar al Mundo Online: Un Camino Seguro para Aumentar las Ventas",
          new5: "Atraer Clientes con Publicidad de Boca a Boca",
          footer1: "Todos los derechos reservados para este sitio web.",
          footer2: "Nuestra plataforma educativa comenzó en 2011 y ahora se ha convertido en la red de programación más grande del norte de Irán.",
          footer3: "Sari, Plaza Khazar, Camino Farahabad, junto a Donyaye Arezo",
          read: "Leer artículo",
          catfooter: "Categorías",
      
          // curso
          Courses: "Cursos Educativos",
          Newest: "Más Nuevos",
          Cheapest: "Más Baratos",
          MostPopular: "Más Populares",
          WhatDoYouWantToLearn: "¿Qué quieres aprender?",
          EducationalCourses: "Cursos Educativos",
          UpToDateCourses: "Los Cursos Más Recientes",
          filters: "Filtros",
          technology: "Tecnología",
          status: "Estado",
          level: "Nivel",
      
            // artículo
          newest: "Más Nuevos",
          popular: "Más Populares",
          articles_and_news: "Noticias y Artículos",
          stay_updated: "Mantente Actualizado con Nosotros",
          search_placeholder: "...¿Qué quieres saber?",
          latest_articles: "Últimos Artículos",
          podcasts: "Podcasts",
          listen_best: "Escucha lo Mejor con Nosotros",
          suggested_articles: "Artículos Sugeridos",
          interesting_articles: "Estos Artículos Pueden Interesarte",
          view_articles:"Ver Artículos",
          favorite_courses: "Cursos Favoritos",
          best_things_to_learn: "Las Mejores Cosas que Puedes Aprender",
          readmore: "Leer Más",
          related_courses: "Cursos Relacionados",
          comments: "Comentarios",
          seecourse: "Ver Curso",
          share: "Compartir",
          newcomment: "Enviar Nuevo Comentario",
          rate: "Valoración",
          personrate: "Persona",
          describe: "Descripción",
          HeadLines: "Titulares",
          categories: "Categorías",
          requirements: "Requisitos",
          lang:"Seleccione el idioma del sitio",
          last:"Anterior",
                   home:"hogar",
                   next:"próxima",
                   theme:"Elija un tema para el sitio",
                   tosee:"¿Qué área del desarrollo web te gusta más?",
    green:"azul verde",
    purple:"violeta",
    blue:"azul",
    night:"modo nocturno",
    cancel:"Cancelar",
    preferences:"Cuéntanos tus preferencias",
    front:'Frontal',
    back:"parte trasera",
    full:"bdyd",
    none:"gdtyt",
    fav2:"What topics do you like the most?"
        }
      },
      tr: {
        translation: {
          full:"hjhdqw",
          front:"Ön uç",
          tosee:"Web geliştirmenin en çok hangi alanını beğeniyorsunuz?",
           cancel:"iptal etmek",
            home: "Anasayfa",
            courses: "Kurslar",
            teachers: "Eğitmenler",
            news: "Haberler ve Makaleler",
            call: "Bize Ulaşın",
            person: "Hesap",
            student: "Öğrenci",
            teacher: "Önerimiz",
            herotext: "Yedi binden fazla eğitim videosuna erişim sağlayarak, canlı ve etkileşimli web geliştirme kurslarının öncüsüyüz.",
            title: "Başlık",
            academy: "Akademi",
            search1: "... Ne arıyorsunuz?",
            category: "En Popüler Kategoriler",
            categorytext: "En popüler kurslardan geniş bir yelpaze",
            Network: "Ağ Güvenliği",
            game: "Oyun Geliştirme",
            data: "Veri Analizi",
            web: "Web Tasarımı",
            learning: "Eğitim Kursları",
            learning1: "Bulabileceğiniz en yeni kurslar",
            allcourse: "Tüm Kurslar",
            BestTeachers: "En İyi Eğitmenler",
            findteacher: "Hemen buradan bulabilirsiniz!",
            teach1: "En büyük programlama ağının en önemli eğitmenleri",
            teach2: "Mazandaran ilini daha iyi tanıyalım",
            service: "Hizmetlerimiz",
            textservice: "İhtiyacınız olan her şeyin bir araya geldiği koleksiyon",
            Counseling: "Danışmanlık",
            Counselingtext: "Grafik tasarım endüstrisinde kullanılan yer tutucu metni.",
            certificate: "Sertifikalı",
            jobs: "İş İmkanları",
            news2: "Güncel kal!",
            Podcasts: "Podcast'ler",
            Podcasttext: "İhtiyacınız olan her şeyin bir araya geldiği koleksiyon",
            vorod: "Giriş Yap",
            showmore: "Daha Fazla Göster",
            new1: "Çevrimiçi Dünya: Satışları Arttırmanın Yolu",
            new2: "Duyusal Pazarlama: Satışları Arttırmanın Basit ve Ucuz Yolu",
            new3: "Müşteri İhtiyaçlarını Anlayarak Gelirinizi Artırın",
            new4: "Çevrimiçi Dünyaya Giriş: Satışları Arttırmanın Güvenli Yolu",
            new5: "Ağızdan Ağıza Reklamla Müşteri Kazanmak",
            footer1: "Bu web sitesinin tüm hakları saklıdır.",
            footer2: "Eğitim platformumuz 2011 yılında başladı ve şu anda İran'ın kuzeyindeki en büyük programlama ağı haline gelmiştir.",
            footer3: "Sari, Khazar Meydanı, Farahabad Yolu, Donyaye Arezo'nun yanında",
            read: "Makale Oku",
            catfooter: "Kategoriler",
      
            // course
            Courses: "Eğitim Kursları",
            Newest: "En Yeni",
            Cheapest: "En Ucuz",
            MostPopular: "En Popüler",
            WhatDoYouWantToLearn: "Ne öğrenmek istiyorsunuz?",
            EducationalCourses: "Eğitim Kursları",
            UpToDateCourses: "Bulabileceğiniz En Yeni Kurslar",
            filters: "Filtreler",
            technology: "Teknoloji",
            status: "Durum",
            level: "Seviye",
      
            // article
            newest: "En Yeni",
            popular: "En Popüler",
            articles_and_news: "Haberler ve Makaleler",
            stay_updated: "Bizimle Güncel Kal",
            search_placeholder: "...Ne öğrenmek istiyorsunuz?",
            latest_articles: "Son Makaleler",
            podcasts: "Podcast'ler",
            listen_best: "Bizimle En İyi Olanı Dinleyin",
            suggested_articles: "Önerilen Makaleler",
            interesting_articles: "Bu Makaleler İlginizi Çekebilir",
            view_articles: "Makale Görüntüle",
            favorite_courses: "Favori Kurslar",
            best_things_to_learn: "Öğrenebileceğiniz En İyi Şeyler",
            readmore: "Daha Fazla Oku",
            related_courses: "İlgili Kurslar",
            comments: "Yorumlar",
            seecourse: "Kursu Görüntüle",
            share: "Paylaş",
            newcomment: "Yeni Yorum Gönder",
            rate: "Puan",
            personrate: "Kişi",
            describe: "Açıklama",
            HeadLines: "Başlıklar",
            categories: "Kategoriler",
            requirements: "Gereksinimler",
            trainingType: "Eğitim Türü",
            courseStatus: "Kurs Durumu",
            startDate: "Kurs Başlangıç Tarihi",
            endDate: "Kurs Bitiş Tarihi",
            rating: "Puanlama",
            studentsNumber: "Öğrenci Sayısı",
            course_id: "Kurs Adı",
            paid: "Kurs Fiyatı",
            date: "Tarih",
            number: "Takip Numarası",
            complete_purchase: "Satın Almayı Tamamla",
            lang:"Sitenin dilini seçin",
            last:"Öncesi",
            home:"Ev",
            next:"Sonraki",
            theme:"Bir site teması seçin",
    green:"mavi yeşil",
    purple:"mor",
    blue:"mavi",
    night:"gece modu",
    preferences:"Bize tercihlerinizi söyleyin"
          ,back:"arka uç",
          none:"gyuyt",
          fav2:"What topics do you like the most?"
          }
        }
      
      
    },
    lng: localStorage.getItem('language') ,
    fallbackLng: localStorage.getItem('language') ,

    interpolation: {
      escapeValue: false, 
    }
  });

export default i18n;

