/* ==========================================================================
   Translations. Edit the "en" / "ar" strings below to change any text
   on the site. Keys are referenced in HTML via data-i18n="a.b.c".
   ========================================================================== */

const I18N = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      contact: "Contact",
      cta: "Let's Talk"
    },
    footer: {
      rights: "© 2026 Mostafa Reda Abdelaziz. Built with care."
    },
    home: {
      heroEyebrow: "SELECT name, title FROM analyst;",
      heroTitleLine1: "Mostafa Reda",
      heroTitleLine2: "Abdelaziz",
      heroRole: "Data Analyst · Business Information Systems",
      heroBio: "I'm Mostafa — a junior data analyst passionately learning new things, and always looking to genuinely give back to the people who've helped me along the way. Take a look around, feel free to reach out, and let's work together. Cheers!",
      ctaProjects: "View Projects",
      ctaContact: "Get In Touch",
      metaLocation: "Location",
      metaLocationVal: "Egypt",
      metaSchool: "University",
      metaSchoolVal: "Helwan University · Expected 2027",
      metaFocus: "Focus",
      metaFocusVal: "Data & Business Analytics",
      toolkitEyebrow: "SELECT * FROM toolkit;",
      toolkitTitle: "What I work with",
      featuredEyebrow: "SELECT TOP 3 * FROM projects;",
      featuredTitle: "Featured work",
      featuredSub: "A mix of dashboard, data analysis, and real business experience.",
      viewAll: "View all projects",
      ctaBandEyebrow: "INSERT INTO conversations VALUES (you, me);",
      ctaBandTitle: "Have a project in mind?",
      ctaBandSub: "I'm always happy to talk data, analytics, or just say hi.",
      ctaBandBtn: "Say hello"
    },
    about: {
      eyebrow: "SELECT * FROM about_me;",
      title: "About me",
      bio: "I'm Mostafa Reda Abdelaziz, a fourth-year Business Information Systems student at Helwan University, expected to graduate in 2027, and a junior data analyst. My path started on the sales floor — reading people and numbers at the same time — and grew into a genuine passion for turning raw data into decisions people can act on. I'm still learning every day, and I try to give back generously to the people who help me along the way.",
      skillsEyebrow: "SELECT * FROM skills;",
      skillsTitle: "Skills",
      cat_data: "Data & Analytics",
      cat_biz: "Business & Marketing",
      educationEyebrow: "SELECT * FROM education;",
      educationTitle: "Education",
      eduSchool: "Helwan University",
      eduDegree: "B.Sc. in Business Information Systems",
      eduStatus: "4th Year — Expected graduation: 2027",
      eduDesc: "Coursework spanning databases, information systems, and applied data analytics — the backbone for everything I build.",
      experienceEyebrow: "SELECT * FROM experience;",
      experienceTitle: "Experience",
      exp1Title: "Sales Associate → Store Management Responsibilities",
      exp1Place: "AlREDA",
      exp1Period: "Previous experience",
      exp1Desc: "Worked in sales at AlREDA and took on store-management responsibilities, supporting daily operations, customers, and the team.",
      exp2Title: "Founder & Manager",
      exp2Place: "Carry-On — Instagram",
      exp2Period: "Ongoing",
      exp2Desc: "Run a travel-bag e-commerce page end-to-end: product sourcing, Arabic marketing content, and direct customer outreach."
    },
    projects: {
      eyebrow: "SELECT * FROM projects;",
      title: "Projects",
      sub: "A running log of applied data work — from coursework exercises to real business projects. More being added as I build.",
      filterAll: "All",
      filterMl: "Machine Learning",
      filterViz: "Visualization & BI",
      filterBusiness: "Business"
    },
    contact: {
      eyebrow: "SELECT * FROM contact;",
      title: "Let's work together",
      sub: "Whether it's a data project, a question, or just to say hi — my inbox is open. I usually reply within a day or two.",
      emailLabel: "Email me directly",
      copyLabel: "Copy",
      copiedLabel: "Copied!",
      linksTitle: "Find me elsewhere",
      githubLabel: "GitHub",
      githubSub: "github.com/mreda5336-cmd",
      carryonLabel: "Carry-On Instagram",
      carryonSub: "Travel bags Instagram page",
      locationLabel: "Based in",
      locationVal: "Egypt"
    }
  },

  ar: {
    nav: {
      home: "الرئيسية",
      about: "نبذة عني",
      projects: "المشاريع",
      contact: "تواصل معي",
      cta: "لنتحدث"
    },
    footer: {
      rights: "© 2026 مصطفى رضا عبدالعزيز. صُمّم بعناية."
    },
    home: {
      heroEyebrow: "SELECT name, title FROM analyst;",
      heroTitleLine1: "مصطفى رضا",
      heroTitleLine2: "عبدالعزيز",
      heroRole: "محلل بيانات · نظم معلومات إدارية",
      heroBio: "أنا مصطفى، محلل بيانات مبتدئ شغوف بتعلّم كل جديد، وأسعى دائمًا للمساهمة الحقيقية مع كل من ساعدني في طريقي نحو النجاح. اتفرّج في الموقع، ولو حابب نشتغل مع بعض، تواصل معايا في أي وقت. تحياتي!",
      ctaProjects: "استعرض المشاريع",
      ctaContact: "تواصل معي",
      metaLocation: "الموقع",
      metaLocationVal: "مصر",
      metaSchool: "الجامعة",
      metaSchoolVal: "جامعة حلوان · التخرج المتوقع 2027",
      metaFocus: "التخصص",
      metaFocusVal: "تحليل البيانات والأعمال",
      toolkitEyebrow: "SELECT * FROM toolkit;",
      toolkitTitle: "الأدوات التي أعمل بها",
      featuredEyebrow: "SELECT TOP 3 * FROM projects;",
      featuredTitle: "أبرز الأعمال",
      featuredSub: "مزيج من لوحات البيانات والتحليل وخبرة حقيقية في مجال الأعمال.",
      viewAll: "عرض جميع المشاريع",
      ctaBandEyebrow: "INSERT INTO conversations VALUES (you, me);",
      ctaBandTitle: "عندك مشروع في بالك؟",
      ctaBandSub: "دايمًا سعيد بالكلام عن البيانات والتحليل، أو حتى مجرد إلقاء التحية.",
      ctaBandBtn: "قول أهلاً"
    },
    about: {
      eyebrow: "SELECT * FROM about_me;",
      title: "نبذة عني",
      bio: "أنا مصطفى رضا عبدالعزيز، طالب في السنة الرابعة بكلية نظم المعلومات الإدارية بجامعة حلوان، والتخرج المتوقع في 2027، ومحلل بيانات مبتدئ. بدأت رحلتي في المبيعات — بأتعامل مع الناس والأرقام في نفس الوقت — وتطورت لشغف حقيقي بتحويل البيانات الخام إلى قرارات يقدر الناس يتصرفوا بناءً عليها. لسه بتعلم كل يوم، وبحاول أرد الجميل لكل من ساعدني في الطريق.",
      skillsEyebrow: "SELECT * FROM skills;",
      skillsTitle: "المهارات",
      cat_data: "البيانات والتحليل",
      cat_biz: "الأعمال والتسويق",
      educationEyebrow: "SELECT * FROM education;",
      educationTitle: "التعليم",
      eduSchool: "جامعة حلوان",
      eduDegree: "بكالوريوس نظم المعلومات الإدارية",
      eduStatus: "السنة الرابعة — التخرج المتوقع 2027",
      eduDesc: "مقررات دراسية تشمل قواعد البيانات، نظم المعلومات، وتحليل البيانات التطبيقي — الأساس الذي أبني عليه كل مشروع.",
      experienceEyebrow: "SELECT * FROM experience;",
      experienceTitle: "الخبرات",
      exp1Title: "موظف مبيعات ← مسؤوليات إدارة المتجر",
      exp1Place: "AlREDA",
      exp1Period: "خبرة سابقة",
      exp1Desc: "عملت في المبيعات في AlREDA وتوليت مسؤوليات مرتبطة بإدارة المتجر، مع دعم العمليات اليومية والعملاء والفريق.",
      exp2Title: "مؤسس ومدير",
      exp2Place: "Carry-On — إنستجرام",
      exp2Period: "مستمر",
      exp2Desc: "أدير حضورًا للتجارة الإلكترونية لشنط السفر عبر إنستجرام: توفير المنتجات، وكتابة المحتوى التسويقي بالعربية، والتواصل المباشر مع العملاء."
    },
    projects: {
      eyebrow: "SELECT * FROM projects;",
      title: "المشاريع",
      sub: "سجل مستمر لأعمالي التطبيقية في البيانات — من تمارين دراسية إلى مشاريع أعمال حقيقية. بيتزاد أول بأول.",
      filterAll: "الكل",
      filterMl: "تعلم الآلة",
      filterViz: "تصور البيانات وذكاء الأعمال",
      filterBusiness: "الأعمال"
    },
    contact: {
      eyebrow: "SELECT * FROM contact;",
      title: "لنعمل مع بعض",
      sub: "سواء كان مشروع بيانات، سؤال، أو مجرد إلقاء تحية — صندوق بريدي مفتوح دايمًا. بارد عادةً خلال يوم أو يومين.",
      emailLabel: "راسلني مباشرة",
      copyLabel: "نسخ",
      copiedLabel: "تم النسخ",
      linksTitle: "تواصل معي في أماكن تانية",
      githubLabel: "GitHub",
      githubSub: "github.com/mreda5336-cmd",
      carryonLabel: "Carry-On Instagram",
      carryonSub: "صفحة شنط سفر على إنستجرام",
      locationLabel: "مقيم في",
      locationVal: "مصر"
    }
  }
};

const SKILLS = [
  { name: "Python", cat: "data" },
  { name: "NumPy", cat: "data" },
  { name: "Pandas", cat: "data" },
  { name: "SQL", cat: "data" },
  { name: "Excel", cat: "data" },
  { name: "Tableau", cat: "data" },
  { name: { en: "E-commerce", ar: "تجارة إلكترونية" }, cat: "biz" },
  { name: { en: "Marketing", ar: "تسويق" }, cat: "biz" },
  { name: { en: "Sales", ar: "مبيعات" }, cat: "biz" },
  { name: { en: "Store Management", ar: "إدارة المتاجر" }, cat: "biz" }
];
