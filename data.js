// بيانات الملف الشخصي والترجمة
const translations = {
    // الأزرار والتنقل
    store_btn: { ar: "زيارة متجر الدعم والتسويق", en: "Visit Marketing Store" },
    back_btn: { ar: "العودة للملف الشخصي", en: "Back to Profile" },
    contact_me: { ar: "تواصل معي الآن", en: "Contact Me Now" },
    
    // القسم الرئيسي (Hero)
    hello: { ar: "مرحباً، أنا", en: "Hello, I am" },
    age_location: { ar: "العمر 23 عاماً | بغداد، العراق 🇮🇶", en: "Age 23 | Baghdad, Iraq 🇮🇶" }, // ← تم إضافة العمر والبلد هنا
    tagline: { 
        ar: "أصنع المستقبل بأسطر برمجية، وأحوّل الأفكار المعقدة إلى تجارب رقمية لا تُنسى.", 
        en: "I shape the future with code, turning complex ideas into unforgettable digital experiences." 
    },
    
    // من أنا
    about_title: { ar: "من أنا؟ 💡", en: "Who am I? 💡" },
    about_text: { 
        ar: "أنا <strong>علي يحيى</strong>، مطور برمجيات ومبتكر حلول رقمية. بالنسبة لي، البرمجة ليست مجرد أكواد نكتبها، بل هي فن صناعة التميز وحل المشكلات بذكاء. أكرس وقتي وشغفي لبناء تطبيقات ومواقع إلكترونية تجمع بين <strong>التصميم الساحر، الأداء الجبار، والأمان العالي</strong>. هدفي هو مساعدة الأفراد والشركات على الانطلاق بقوة في العالم الرقمي.", 
        en: "I am <strong>Ali Yahya</strong>, a software developer and digital solutions innovator. To me, programming isn't just about writing code; it's the art of crafting excellence. I build websites and apps that combine <strong>stunning design, raw performance, and high security</strong> to help businesses thrive in the digital world." 
    },

    // الخدمات
    services_title: { ar: "ماذا أقدم لك؟ 🚀", en: "What I Offer? 🚀" },
    
    web_title: { ar: "تطوير الويب المتكامل", en: "Full-Stack Web Dev" },
    web_desc: { 
        ar: "أبني مواقع إلكترونية سريعة كالبرق، متجاوبة مع جميع الشاشات. سواء كنت تحتاج إلى منصة تجارية، موقع تعريفي لشركتك، أو لوحة تحكم معقدة لإدارة أعمالك، سأقوم بتصميمها بأحدث التقنيات البرمجية لتسبق منافسيك.", 
        en: "I build lightning-fast, fully responsive websites. Whether you need an e-commerce platform, a corporate site, or a complex admin dashboard, I use cutting-edge tech to keep you ahead." 
    },

    app_title: { ar: "تطبيقات الهواتف الذكية", en: "Mobile Applications" },
    app_desc: { 
        ar: "أحوّل فكرتك إلى تطبيق واقعي يعشقه المستخدمون. أهتم بأدق تفاصيل واجهة المستخدم (UI/UX) وأضمن تجربة سلسة، مستقرة، وخالية من الأخطاء على أنظمة الهواتف الذكية.", 
        en: "I turn your idea into a mobile app that users love. Focusing on stunning UI/UX, I ensure a smooth, stable, and bug-free experience across all mobile devices." 
    },

    bots_title: { ar: "الذكاء والأتمتة (البوتات)", en: "Smart Automation & Bots" },
    bots_desc: { 
        ar: "وفر وقتك وجهدك! أقوم ببرمجة بوتات تيليجرام وأنظمة رد آلي شديدة الذكاء لإدارة عملائك، تنظيم طلباتك، وإنجاز المهام الروتينية على مدار 24 ساعة دون تدخل بشري.", 
        en: "Save time and effort! I program highly intelligent Telegram bots and auto-reply systems to manage your customers, organize orders, and automate routine tasks 24/7." 
    },

    mkt_title: { ar: "نمو وحضور رقمي قوي", en: "Digital Growth & Marketing" },
    mkt_desc: { 
        ar: "لا يكفي أن تمتلك مشروعاً، بل يجب أن يراه العالم. أقدم استراتيجيات وخدمات تسويقية حقيقية لزيادة المتابعين، رفع معدل التفاعل، وبناء قاعدة جماهيرية تثق بعلامتك التجارية.", 
        en: "It's not enough to have a project; the world needs to see it. I offer real marketing strategies and services to boost followers, increase engagement, and build a loyal audience." 
    },

    // نصوص المتجر
    store_title: { ar: "متجر الدعم والتسويق", en: "Boost & Marketing Store" },
    store_subtitle: { ar: "اختر باقة الإنستجرام المناسبة لك", en: "Choose your Instagram package" },
    buy_btn: { ar: "شراء عبر التيليجرام", en: "Buy via Telegram" },
    note_title: { ar: "خدمات إضافية VIP 💎", en: "Extra VIP Services 💎" },
    note_500k: { ar: "نوفر كميات ضخمة تصل إلى <strong>500K متابع</strong> بأسعار تنافسية.", en: "We provide massive amounts up to <strong>500K followers</strong> at competitive prices." },
    note_real: { ar: "يتوفر لدينا متابعين <strong>حقيقيين متفاعلين</strong>، وندعم جميع منصات التواصل الاجتماعي.", en: "We provide <strong>real active followers</strong>, and we support all social media platforms." }
};

const storePackages = [
    {
        id: "pack_3k", title: { ar: "3,000 متابع", en: "3,000 Followers" }, price: { ar: "5,000 د.ع", en: "5,000 IQD" },
        features: { ar: ["سرعة في التنفيذ", "جودة عالية", "دعم فني مستمر"], en: ["Fast Delivery", "High Quality", "Continuous Support"] },
        icon: "fa-rocket", color: "from-blue-500 to-cyan-400", glow: "rgba(47, 168, 159, 0.35)"
    },
    {
        id: "pack_6_5k", title: { ar: "6,500 متابع", en: "6,500 Followers" }, price: { ar: "10,000 د.ع", en: "10,000 IQD" },
        features: { ar: ["الأكثر طلباً ومبيعاً", "جودة ممتازة وحسابات مرتبة", "تعويض في حال النقصان"], en: ["Most Popular", "Excellent Quality", "Refill Guarantee"] },
        icon: "fa-fire", color: "from-pink-500 to-purple-500", glow: "rgba(201, 124, 75, 0.45)", popular: true 
    },
    {
        id: "pack_9_5k", title: { ar: "9,500 متابع", en: "9,500 Followers" }, price: { ar: "15,000 د.ع", en: "15,000 IQD" },
        features: { ar: ["باقة الـ VIP الخاصة", "أولوية في التنفيذ", "ضمان أمان الحساب 100%"], en: ["Special VIP Package", "Priority Delivery", "100% Account Safety"] },
        icon: "fa-gem", color: "from-amber-400 to-orange-500", glow: "rgba(176, 141, 87, 0.4)"
    }
];