/**
 * Hindam Space (مؤسسة هندام سبيس)
 * Main Interactive Script & Bilingual Engine (Arabic / English)
 */

document.addEventListener('DOMContentLoaded', () => {
  // Current Year in Footer
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Mobile Menu Toggle
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      navToggle.classList.toggle('active');
    });

    // Close menu when clicking any nav link
    const navLinks = document.querySelectorAll('.nav-link, .nav-cta a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        navToggle.classList.remove('active');
      });
    });
  }

  // Active Link on Scroll
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      const navLink = document.querySelector(`.nav-links a[href*="${sectionId}"]`);
      if (navLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navLink.classList.add('active');
        } else {
          navLink.classList.remove('active');
        }
      }
    });
  });

  // Bilingual Dictionary & Engine
  initLanguageEngine();
});

// Bilingual Translations Dictionary
const translations = {
  ar: {
    pageTitle: "مؤسسة هندام سبيس | Hindam Space - Excellence in Event & Retail Production",
    location: "المملكة العربية السعودية | حي الحمدانية",
    langSwitchLabel: "English",
    langBadge: "EN",
    navAbout: "من نحن",
    navServices: "خدماتنا",
    navWhyUs: "لماذا نحن",
    navProjects: "مشاريعنا",
    navContact: "تواصل معنا",
    getQuote: "طلب عرض سعر",
    heroBadge: "شريككم المعتمد لحلول المعارض والتجهيزات",
    heroTitleGrad: "التميز في حلول المعارض",
    heroTitleSub: "والتجهيزات المتكاملة بالمملكة",
    heroDesc: "مؤسسة هندام سبيس رائدة سعودية متخصصة في تصنيع وتنفيذ المعارض والحلول الداخلية المتكاملة بأعلى معايير الجودة والإتقان من الفكرة وحتى التسليم النهائي.",
    heroCtaPrimary: "ابدأ مشروعك معنا",
    heroCtaSecondary: "استكشف خدماتنا",
    stat1: "تصنيع داخلي متكامل",
    stat2: "تغطية شاملة لجميع المناطق",
    stat3: "تركيب سريع ومطابق للاشتراطات",
    featuredTag: "تنفيذ جناح AstraZeneca الطبي",
    heroCardTitle: "تصميم وتنفيذ أجنحة المعارض",
    heroCardSub: "مطابقة لمعايير واجهة الرياض وجدة سوبر دوم",
    aboutTag: "من نحن | About Us",
    aboutTitle: "مؤسسة هندام سبيس للإنتاج والتجهيزات",
    aboutLead: "مؤسسة هندام سبيس هي شركة سعودية رائدة متخصصة في تصنيع وتنفيذ المعارض والحلول الداخلية المتكاملة في جميع أنحاء المملكة.",
    aboutBody: "نحن نقدم حلولاً متكاملة تبدأ من دراسة الفكرة والمفهوم التصميمي وحتى التصنيع الدقيق والتنفيذ في الموقع والتسليم النهائي، مع الالتزام التام بأرقى المعايير الإنشائية والجمالية لمختلف الفعاليات والمراكز التجارية.",
    badgeExp: "معايير تنفيذ محلية",
    badgeExpSub: "عالية الدقة والموثوقية",
    feat1Title: "التصنيع المتكامل من الفكرة حتى التسليم",
    feat1Desc: "Turnkey fabrication from concept to handover",
    feat2Title: "معايير تنفيذ محلية رصينة",
    feat2Desc: "Local execution standards with deep market expertise",
    feat3Title: "تنفيذ عالي الجودة في جميع أنحاء المملكة",
    feat3Desc: "High-spec delivery across all regions of KSA",
    servicesTag: "خدماتنا | Core Services",
    servicesTitle: "حلولنا الشاملة للمعارض والمساحات التجارية",
    servicesSub: "نقدم باقة واسعة من الخدمات الاحترافية المصممة لتلبي تطلعات العلامات التجارية الرائدة",
    service1Desc: "تصميم وتصنيع متكامل لأجنحة المعارض والمنصات الترويجية بمواصفات مطابقة لكبرى مراكز الفعاليات الدولية والمحلية، مع توفير عناصر الإضاءة والمجسمات وشاشات العرض التفاعلية.",
    service2Desc: "حلول متكاملة للتصميم المعماري الداخلي للمكاتب والمقرات التنفيذية ومناطق الاستقبال، تشمل القواطع الخشبية الديكورية والأسقف المستعارة والأرضيات والأثاث المخصص.",
    service3Desc: "تجهيز المعارض التجارية ونقاط البيع بأحدث نظم العرض والرفوف، وطاولات الاستقبال، والتجهيزات المتوافقة مع الهوية البصرية للعلامة التجارية لتعزيز تجربة التسوق.",
    service4Desc: "تصنيع وتركيب اللوحات الإرشادية والتجارية المضيئة وثلاثية الأبعاد (3D)، ولافتات الأبراج، وشاشات الـ LED الداخلية والخارجية بجودة رؤية فائقة ومتانة عالية.",
    service5Desc: "تجليد احترافي لسيارات وشاحنات الشركات باستخدام خامات فينيل مقاومة للعوامل الجوية تضمن بقاء الألوان الزاهية وحماية طلاء المركبات مع إبراز هوية الشركة أينما تحركت.",
    whyUsTag: "لماذا نحن | Why Choose Us",
    whyUsTitle: "مزايا تجعلنا خياركم الأمثل للتنفيذ",
    whyUsSub: "نلتزم بأعلى معايير الإتقان والدقة والمطابقة الكاملة لكافة اشتراطات المنظمين",
    reason1Desc: "ورش ومصانع متكاملة تضم أحدث ماكينات النجارة والحدادة والطباعة والدهانات تضمن السيطرة التامة على الجودة ومواعيد التنفيذ.",
    reason2Desc: "فرق فنية متمرسة ومدربة على العمل السريع والمنظم تحت ضغط الجداول الزمنية الضيقة قبل انطلاق المعارض والفعاليات.",
    reason3Desc: "امتثال تام لاشتراطات السلامة والكهرباء والإنشاءات المعتمدة لدى مراكز المعارض الكبرى مثل واجهة الرياض (Riyadh Front) وجدة سوبر دوم (Jeddah Superdome).",
    reason4Desc: "اختيار أدق المواد الخام من أخشاب ومعادن وأقمشة وأكريليك وأنظمة إضاءة احترافية تعكس فخامة جناحك ومكانة علامتك.",
    projectsTag: "أعمالنا | Portfolio",
    projectsTitle: "نماذج من أعمالنا ومشاريعنا المنفذة",
    projectsSub: "نعتز بتنفيذ أجنحة رائدة لشركات عالمية ومحلية في أرقى المعارض السعودية",
    projCat1: "أجنحة معارض طبية",
    proj1Title: "جناح شركة أسترازينيكا (AstraZeneca)",
    proj1Desc: "تنفيذ جناح طبي متطور مزود بشاشات تفاعلية، إضاءة غير مباشرة، ومنصة استقبال مخصصة (Medical Information Desk).",
    projCat2: "أجنحة معارض الشركات",
    proj2Title: "جناح شركة سلامة للتأمين (سلامة تهتم)",
    proj2Desc: "بناء وتجهيز جناح تفاعلي شامل ذو أقواس خضراء مميزة، منطقة ضيافة لكبار الشخصيات، وشاشات تفاعلية ذكية.",
    projCat3: "تشطيبات ومقرات إدارية",
    proj3Title: "تصميم وتنفيذ مقرات ومناطق الاستقبال",
    proj3Desc: "تشطيبات معمارية خشبية وتنسيق جداري حديث (Wood Slats Wall) لمناطق الاستقبال والمكاتب الراقية.",
    bannerGold: "لنصنع مساحتك القادمة",
    bannerSub: "Let's build your next space",
    bannerDesc: "سواء كان لديك معرض قادم، مشروع تصميم داخلي، أو تجهيز متجر كامل، فريقنا جاهز لتحويل فكرتك إلى واقع يبهر عملاءك.",
    bannerCta: "تواصل مع مستشارينا الآن",
    contactTag: "تواصل معنا | Contact Us",
    contactTitle: "نحن هنا لمساعدتكم في كل خطوة",
    contactSub: "تواصل مع فريق إدارة المشاريع وتطوير الأعمال لمناقشة متطلباتكم والحصول على أفضل عروض الأسعار",
    gmTitle: "بندر حسن عطا المحمد",
    gmRole: "المدير العام | General Manager",
    bdTitle: "سراج منير | Siraj Muneer",
    bdRole: "مدير تطوير الأعمال | BD Manager",
    hqTitle: "المقر الرئيسي",
    hqAddress: "المملكة العربية السعودية | حي الحمدانية",
    formHeading: "طلب عرض سعر / استفسار",
    formSub: "املأ النموذج وسيقوم مستشارنا بالتواصل معكم خلال 24 ساعة",
    formName: "الاسم الكامل *",
    formCompany: "اسم الشركة أو المؤسسة",
    formPhone: "رقم الجوال *",
    formEmail: "البريد الإلكتروني *",
    formService: "الخدمة المطلوبة *",
    formSelectPrompt: "اختر الخدمة...",
    opt1: "تصميم وتصنيع أجنحة المعارض (Exhibition Booths)",
    opt2: "التصميم الداخلي والتشطيبات (Turnkey Fit-Outs)",
    opt3: "تجهيز المحلات والمتاجر (Retail & Shop Fitting)",
    opt4: "حلول اللوحات الإعلانية والشاشات (Signage Solutions)",
    opt5: "تجليد وتجهيز أساطيل المركبات (Vehicle Branding)",
    formMsg: "تفاصيل المشروع / ملاحظات",
    formSubmit: "إرسال الطلب الآن",
    formSuccessMsg: "شكراً لتواصلكم! تم استلام طلبكم بنجاح وسيتصل بكم فريقنا قريباً.",
    footerDesc: "مؤسسة هندام سبيس - التميز في حلول المعارض والتجهيزات الداخلية والتجارية في جميع أنحاء المملكة العربية السعودية.",
    quickLinks: "روابط سريعة",
    servicesTitleShort: "خدماتنا",
    footS1: "تصميم وتصنيع أجنحة المعارض",
    footS2: "التصميم الداخلي والتشطيبات",
    footS3: "تجهيز المحلات والمتاجر",
    footS4: "حلول اللوحات والشاشات",
    footS5: "تجليد وتجهيز أساطيل المركبات",
    contactDirect: "اتصل بنا مباشرة",
    lblPhone: "هاتف:",
    lblEmail: "إيميل:",
    lblLoc: "الموقع:",
    rights: "جميع الحقوق محفوظة لمؤسسة هندام سبيس (Hindam Space)",
    floatWaText: "محادثة واتساب"
  },
  en: {
    pageTitle: "Hindam Space | Excellence in Event & Retail Production - Turnkey Fit-Outs KSA",
    location: "Kingdom of Saudi Arabia | Al Hamdaniyah Dist",
    langSwitchLabel: "العربية",
    langBadge: "AR",
    navAbout: "About Us",
    navServices: "Services",
    navWhyUs: "Why Us",
    navProjects: "Projects",
    navContact: "Contact Us",
    getQuote: "Request a Quote",
    heroBadge: "Your Trusted Partner for Turnkey Exhibitions & Fit-Outs",
    heroTitleGrad: "Excellence in Event",
    heroTitleSub: "& Retail Production Across KSA",
    heroDesc: "Hindam Space is a premier Saudi production and fit-out company delivering turnkey exhibition fabrication and interior solutions across the Kingdom from initial concept to handover.",
    heroCtaPrimary: "Start Your Project",
    heroCtaSecondary: "Explore Services",
    stat1: "100% In-House Manufacturing",
    stat2: "Kingdom-Wide Delivery (KSA)",
    stat3: "Rapid Venue-Compliant Build",
    featuredTag: "AstraZeneca Medical Pavilion",
    heroCardTitle: "Exhibition Fabrication & Fit-Out",
    heroCardSub: "Fully compliant with Riyadh Front & Jeddah Superdome",
    aboutTag: "About Us",
    aboutTitle: "Hindam Space Production & Fit-Outs",
    aboutLead: "Hindam Space is a Saudi production and fit-out company delivering turnkey exhibition fabrication and interior solutions across the Kingdom.",
    aboutBody: "We provide end-to-end solutions starting from 3D conceptualization through precision manufacturing, swift on-site installation, and final handover, upholding the highest aesthetic and structural standards across Saudi Arabia.",
    badgeExp: "Local Execution Standards",
    badgeExpSub: "High precision & turnkey reliability",
    feat1Title: "Turnkey fabrication from concept to handover",
    feat1Desc: "Comprehensive project management from blueprint to delivery",
    feat2Title: "Local execution standards",
    feat2Desc: "Deep market expertise and established venue relationships",
    feat3Title: "High-spec delivery across KSA",
    feat3Desc: "Flawless nationwide execution for leading global brands",
    servicesTag: "Our Core Services",
    servicesTitle: "Complete Solutions for Exhibitions & Commercial Spaces",
    servicesSub: "We offer an extensive suite of production capabilities designed to meet the highest brand ambitions",
    service1Desc: "Turnkey design and fabrication of custom exhibition booths and pavilions, engineered to meet international standards and fully compliant with major Saudi convention centers.",
    service2Desc: "Comprehensive interior design and architectural fit-out solutions for executive offices, reception areas, acoustic wall cladding, decorative wood slats, and bespoke furniture.",
    service3Desc: "Equipping commercial retail stores and point-of-sale environments with modular display fixtures, cash counters, feature walls, and brand-consistent architectural elements.",
    service4Desc: "Fabrication and installation of illuminated 3D channel letters, monument signage, wayfinding totems, and high-resolution indoor/outdoor LED screens.",
    service5Desc: "High-grade vehicle wrapping and fleet graphics using premium weather-resistant vinyl, transforming your commercial fleet into dynamic mobile brand ambassadors.",
    whyUsTag: "Why Choose Us",
    whyUsTitle: "Why Leading Brands Partner with Hindam Space",
    whyUsSub: "We combine precision craftsmanship with agile execution and complete venue compliance",
    reason1Desc: "Fully equipped in-house manufacturing facilities with advanced carpentry, metalwork, acrylic fabrication, and paint booths ensuring total control over quality and timelines.",
    reason2Desc: "Experienced, rapid on-site installation teams adept at working under tight turnaround times without compromising safety or finish quality.",
    reason3Desc: "Strict adherence and pre-clearance with safety, electrical, and structural codes at major exhibition venues including Riyadh Front and Jeddah Superdome.",
    reason4Desc: "Carefully curated, premium materials—from treated timbers to aerospace-grade metals and luxury finishes that make your brand stand out.",
    projectsTag: "Our Portfolio",
    projectsTitle: "Featured Executions & Completed Projects",
    projectsSub: "Proudly crafting signature pavilions and spaces for world-class global and local organizations",
    projCat1: "Healthcare & Pharma Booths",
    proj1Title: "AstraZeneca Exhibition Pavilion",
    proj1Desc: "Turnkey execution of a high-tech medical booth featuring bespoke curved counters, recessed LED lighting, and an interactive Medical Information Desk.",
    projCat2: "Corporate Pavilions",
    proj2Title: "Salama Cooperative Insurance Pavilion",
    proj2Desc: "Full construction of a corporate exhibition pavilion with iconic brand arches, a VIP lounge, and digital touchpoints.",
    projCat3: "Executive Interiors",
    proj3Title: "Corporate Reception & Architectural Fit-Out",
    proj3Desc: "Modern wood slat feature walls, integrated backlighting, and custom reception desks for high-end executive spaces.",
    bannerGold: "Let's build your next space",
    bannerSub: "From Concept to Turnkey Delivery",
    bannerDesc: "Whether you have an upcoming exhibition, a corporate fit-out, or a new retail location, our expert team is ready to bring your vision to life.",
    bannerCta: "Speak with Our Consultants",
    contactTag: "Contact Us",
    contactTitle: "We're Ready to Bring Your Vision to Life",
    contactSub: "Reach out to our project managers and business development team for consultations and competitive quotations",
    gmTitle: "Bandr Hassan Ata Almohamad",
    gmRole: "General Manager",
    bdTitle: "Siraj Muneer",
    bdRole: "Business Development Manager",
    hqTitle: "Headquarters",
    hqAddress: "Kingdom of Saudi Arabia | Al Hamdaniyah Dist",
    formHeading: "Request a Proposal / Inquiry",
    formSub: "Fill out the form below and our team will get in touch within 24 hours",
    formName: "Full Name *",
    formCompany: "Company / Organization",
    formPhone: "Mobile Number *",
    formEmail: "Email Address *",
    formService: "Required Service *",
    formSelectPrompt: "Select a service...",
    opt1: "Exhibition Booths & Pavilions",
    opt2: "Interior Design & Turnkey Fit-Outs",
    opt3: "Retail & Shop Fitting",
    opt4: "Signage Solutions (Indoor & Outdoor)",
    opt5: "Commercial Vehicle Branding & Fleet Graphics",
    formMsg: "Project Details / Timeline / Specifications",
    formSubmit: "Submit Request Now",
    formSuccessMsg: "Thank you for reaching out! We have received your inquiry and our team will contact you shortly.",
    footerDesc: "Hindam Space - Excellence in Event & Retail Production, turnkey exhibition fabrication and interior solutions across Saudi Arabia.",
    quickLinks: "Quick Links",
    servicesTitleShort: "Core Services",
    footS1: "Exhibition Booths & Pavilions",
    footS2: "Interior Design & Fit-Outs",
    footS3: "Retail & Shop Fitting",
    footS4: "Signage & Digital Displays",
    footS5: "Fleet Graphics & Branding",
    contactDirect: "Direct Contact",
    lblPhone: "Phone:",
    lblEmail: "Email:",
    lblLoc: "Location:",
    rights: "All rights reserved to Hindam Space Establishment.",
    floatWaText: "Chat on WhatsApp"
  }
};

function initLanguageEngine() {
  const langToggle = document.getElementById('langToggle');
  let currentLang = localStorage.getItem('hindam_lang') || 'ar';

  applyLanguage(currentLang);

  if (langToggle) {
    langToggle.addEventListener('click', () => {
      currentLang = currentLang === 'ar' ? 'en' : 'ar';
      localStorage.setItem('hindam_lang', currentLang);
      applyLanguage(currentLang);
    });
  }
}

function applyLanguage(lang) {
  const html = document.documentElement;
  const isEn = lang === 'en';

  html.setAttribute('lang', lang);
  html.setAttribute('dir', isEn ? 'ltr' : 'rtl');

  const dict = translations[lang];
  if (!dict) return;

  // Update Page Title
  if (dict.pageTitle) {
    document.title = dict.pageTitle;
  }

  // Update elements with data-i18n attribute
  const translatableElements = document.querySelectorAll('[data-i18n]');
  translatableElements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  // Update Language switch button label
  const langBtnText = document.querySelector('.lang-switch-btn .lang-text');
  const langBtnBadge = document.querySelector('.lang-switch-btn .lang-badge');
  if (langBtnText && dict.langSwitchLabel) {
    langBtnText.textContent = dict.langSwitchLabel;
  }
  if (langBtnBadge && dict.langBadge) {
    langBtnBadge.textContent = dict.langBadge;
  }
}

// Contact Form Handler
function handleFormSubmit(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const company = document.getElementById('company').value;
  const phone = document.getElementById('phone').value;
  const email = document.getElementById('email').value;
  const service = document.getElementById('serviceType').value;
  const message = document.getElementById('message').value;

  const submitBtn = document.getElementById('submitBtn');
  const successBox = document.getElementById('formSuccessMessage');

  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.style.opacity = '0.7';
    submitBtn.textContent = '...';
  }

  // Simulate smooth submission
  setTimeout(() => {
    if (successBox) {
      successBox.style.display = 'flex';
      successBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.style.opacity = '1';
      const isEn = document.documentElement.getAttribute('lang') === 'en';
      submitBtn.textContent = isEn ? 'Submit Request Now' : 'إرسال الطلب الآن';
    }

    // Reset Form fields
    document.getElementById('quoteForm').reset();
  }, 600);
}
