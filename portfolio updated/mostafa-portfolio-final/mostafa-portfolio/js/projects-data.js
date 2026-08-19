/* ==========================================================================
   Project data — single source of truth for Home (featured) & Projects pages.
   ========================================================================== */

const PROJECTS = [
  {
    id: "employees-dashboard",
    category: "viz",
    image: "assets/img/employees-dashboard.png",
    icon: "chart",
    link: "",
    tag: { en: "Dashboard · Power BI", ar: "لوحة تحكم · Power BI" },
    title: { en: "Employee Analytics Dashboard", ar: "لوحة تحليل بيانات الموظفين" },
    desc: {
      en: "Interactive dashboard showing employee count, average age, total salary, maximum and minimum salary, department distribution, and gender breakdown.",
      ar: "لوحة تفاعلية تعرض عدد الموظفين، متوسط العمر، إجمالي الرواتب، أعلى وأقل راتب، توزيع الموظفين حسب القسم والنوع."
    },
    tools: ["Power BI", "Data Visualization", "Dashboard"],
    result: {
      en: "Turned employee data into a compact management view with KPIs, department analysis, and gender distribution.",
      ar: "حوّلت بيانات الموظفين إلى لوحة مختصرة للإدارة تشمل مؤشرات الأداء وتحليل الأقسام وتوزيع النوع."
    },
    featured: true
  },
  {
    id: "sales-dashboard-2015",
    category: "viz",
    image: "assets/img/sales-dashboard-2015.png",
    icon: "table",
    link: "",
    tag: { en: "Dashboard · Sales", ar: "لوحة تحكم · مبيعات" },
    title: { en: "Sales Dashboard — 2015", ar: "لوحة المبيعات — 2015" },
    desc: {
      en: "Sales dashboard tracking quantity, amount, and customers, with breakdowns by pizza category and size and interactive filters.",
      ar: "لوحة مبيعات تتابع الكمية والقيمة وعدد العملاء، مع تحليل حسب فئة وحجم المنتج وفلاتر تفاعلية."
    },
    tools: ["Excel", "Pivot Tables", "Dashboard"],
    result: {
      en: "Created a clear sales overview that makes category and size performance easy to compare.",
      ar: "أنشأت ملخصًا واضحًا للمبيعات يسهّل مقارنة أداء الفئات والأحجام المختلفة."
    },
    featured: true
  },

  // ---- Coursework / applied data work ------------------------------------
  {
    id: "clustering",
    category: "ml",
    image: null,
    icon: "cluster",
    link: "",
    tag: { en: "Coursework · Unsupervised", ar: "مشروع دراسي · تعلّم غير موجّه" },
    title: { en: "Customer Segmentation with K-Means", ar: "تقسيم العملاء باستخدام K-Means" },
    desc: {
      en: "Grouped data into clusters with K-Means, used the elbow method to pick the right number of clusters, and validated results against known groups.",
      ar: "قسّمت البيانات إلى مجموعات باستخدام K-Means، واستخدمت طريقة الكوع لاختيار العدد الأمثل للمجموعات."
    },
    tools: ["Python", "scikit-learn", "Seaborn"],
    result: {
      en: "Compared predicted clusters to ground-truth groups with crosstabs and heatmaps.",
      ar: "قارنت المجموعات المتوقعة بالمجموعات الحقيقية باستخدام جداول تقاطع وخرائط حرارية."
    },
    featured: false
  },
  {
    id: "sales-dashboard",
    category: "viz",
    image: null,
    icon: "table",
    link: "",
    tag: { en: "Coursework · BI", ar: "مشروع دراسي · ذكاء أعمال" },
    title: { en: "Sales Dashboard: Tableau & Excel", ar: "لوحة مبيعات: Tableau و Excel" },
    desc: {
      en: "Built pivot tables and dashboards from a raw sales CSV in Excel, then rebuilt the analysis as an interactive Tableau workbook.",
      ar: "بنيت جداول محورية ولوحات تحكم من ملف مبيعات خام في Excel، ثم أعدت البناء كملف Tableau تفاعلي."
    },
    tools: ["Tableau", "Excel", "Pivot Tables"],
    result: {
      en: "Delivered a chart-by-chart, stakeholder-ready summary of the dashboard's key insights.",
      ar: "قدمت ملخصًا جاهزًا لأصحاب القرار يشرح أهم النتائج المستخلصة من اللوحة."
    },
    featured: false
  },

  // ---- Business / personal venture ----------------------------------------
  {
    id: "carry-on",
    category: "business",
    image: null,
    icon: "bag",
    link: "https://www.instagram.com/carryon_bag_/?hl=en",
    tag: { en: "Personal Venture · E-commerce", ar: "مشروع شخصي · تجارة إلكترونية" },
    title: { en: "Carry-On — Travel Bags Instagram", ar: "Carry-On — إنستجرام شنط سفر" },
    desc: {
      en: "Managed a travel-bag e-commerce presence through Instagram, including product sourcing, Arabic marketing content, and customer outreach.",
      ar: "أدير حضورًا للتجارة الإلكترونية لشنط السفر عبر إنستجرام، بما يشمل توفير المنتجات، وكتابة المحتوى التسويقي بالعربية، والتواصل مع العملاء."
    },
    tools: ["Marketing", "E-commerce", "Instagram"],
    result: {
      en: "Applied real marketing and customer-facing skills that now inform how I read business data.",
      ar: "طبّقت مهارات تسويقية وتعامل مباشر مع العملاء تنعكس الآن في طريقة تحليلي للبيانات."
    },
    featured: false
  }
];

const PROJECT_ICONS = {
  plus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 5v14M5 12h14" stroke-linecap="round"/></svg>',
  trend: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 17l6-6 4 4 8-9" stroke-linecap="round" stroke-linejoin="round"/><path d="M15 6h6v6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  layers: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 3l9 5-9 5-9-5 9-5z" stroke-linejoin="round"/><path d="M3 13l9 5 9-5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  scatter: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="6" cy="17" r="1.6"/><circle cx="11" cy="10" r="1.6"/><circle cx="16" cy="13" r="1.6"/><circle cx="19" cy="6" r="1.6"/><path d="M4 20L20 4" stroke-dasharray="2 3" stroke-linecap="round"/></svg>',
  cluster: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="7" cy="7" r="2.4"/><circle cx="17" cy="7" r="2.4"/><circle cx="7" cy="17" r="2.4"/><circle cx="17" cy="17" r="2.4"/><circle cx="12" cy="12" r="1.6" fill="currentColor" stroke="none"/></svg>',
  chart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 20V10M11 20V4M18 20v-7" stroke-linecap="round"/></svg>',
  table: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3.5" y="4.5" width="17" height="15" rx="1.5"/><path d="M3.5 9.5h17M9 4.5v15" /></svg>',
  bag: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M6 8h12l1 12H5L6 8z" stroke-linejoin="round"/><path d="M9 8V6a3 3 0 016 0v2" stroke-linecap="round"/></svg>'
};
