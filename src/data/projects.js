import { ShoppingBag, Leaf, Shirt, Flame, Sparkles, Globe2 } from 'lucide-react';

// Filter buckets used on the Projects page. `label` powers the pill UI,
// `slug` is what gets matched against each project's `filterCategories`.
export const projectCategories = [
  { slug: 'all', label: { en: 'All', ar: 'الكل' } },
  { slug: 'shopify', label: { en: 'Shopify', ar: 'Shopify' } },
  { slug: 'wordpress', label: { en: 'WordPress', ar: 'WordPress' } },
  { slug: 'ecommerce', label: { en: 'E-commerce', ar: 'التجارة الإلكترونية' } },
  { slug: 'web-development', label: { en: 'Web Development', ar: 'تطوير الويب' } },
];

// Central project data model. To add a new project, append an object here —
// the grid, filters, and detail page all read from this single source.
//
// `filterCategories` should include the project's platform slug ('shopify' /
// 'wordpress') plus its project-type slug ('ecommerce' / 'web-development')
// so it surfaces correctly under every relevant filter pill.
//
// `image` points at a local screenshot in /public/projects. When a project
// has no image yet (e.g. a password-protected, pre-launch store), leave it
// unset — ProjectVisual falls back to the icon/gradient placeholder system.
export const projects = [
  {
    slug: 'leopard',
    featured: true,
    platform: 'Shopify',
    icon: Shirt,
    gradient: 'from-neutral-500 via-neutral-400 to-amber-300',
    image: '/projects/leopard.jpg',
    category: { en: 'E-commerce', ar: 'التجارة الإلكترونية' },
    filterCategories: ['shopify', 'ecommerce'],
    title: { en: 'Leopard', ar: 'Leopard' },
    description: {
      en: 'A premium men’s fashion storefront built on Shopify, with custom theme development and a fully organized collection experience.',
      ar: 'متجر أزياء رجالية فاخر مبني على Shopify، بتخصيص كامل للقالب وتجربة تصفح منظمة عبر كل التشكيلات.',
    },
    overview: {
      en: 'Leopard is a men’s fashion brand built around the philosophy "Wear less. Wear better." AspireTechEg developed and customized the brand’s Shopify storefront, building a fast, organized shopping experience across a wide product range — from everyday essentials to formalwear and accessories.',
      ar: 'Leopard علامة أزياء رجالية تقوم على فلسفة "اقتنِ أقل، اقتنِ أفضل". طوّرت AspireTechEg وخصّصت متجر العلامة على Shopify، وبنت تجربة تسوق سريعة ومنظمة عبر تشكيلة واسعة من المنتجات — من القطع اليومية إلى الأزياء الرسمية والإكسسوارات.',
    },
    servicesDelivered: [
      {
        en: 'Custom Shopify theme customization tailored to the Leopard brand',
        ar: 'تخصيص قالب Shopify بالكامل ليعكس هوية علامة Leopard',
      },
      {
        en: 'Custom Liquid development for storefront sections and templates',
        ar: 'تطوير مخصص بلغة Liquid لأقسام وقوالب المتجر',
      },
      {
        en: 'Mega menu navigation with nested collection structure (Tops, Bottoms, Outerwear, Formal Wear, Swimwear, Accessories)',
        ar: 'قائمة تنقل موسعة (Mega Menu) بتصنيفات متداخلة (قمصان، سراويل، معاطف، ملابس رسمية، ملابس سباحة، إكسسوارات)',
      },
      { en: 'Product and collection organization for easy browsing', ar: 'تنظيم المنتجات والتشكيلات لتسهيل التصفح' },
      { en: 'Custom collection page experiences', ar: 'تصميم تجارب مخصصة لصفحات التشكيلات' },
      { en: 'Responsive e-commerce UI across devices', ar: 'واجهة تجارة إلكترونية متجاوبة على جميع الأجهزة' },
      { en: 'Product presentation and layout improvements', ar: 'تحسين عرض المنتجات وتنسيق الصفحات' },
      { en: 'Overall e-commerce user experience optimization', ar: 'تحسين شامل لتجربة المستخدم داخل المتجر' },
    ],
    technologies: ['Shopify', 'Liquid', 'JavaScript', 'HTML', 'CSS'],
    websiteUrl: 'https://leopardegy.net/',
  },
  {
    slug: 'wellness-vs',
    featured: true,
    platform: 'WordPress',
    icon: Leaf,
    gradient: 'from-lime-400 via-emerald-400 to-teal-400',
    image: '/projects/wellness-vs.jpg',
    category: { en: 'Web Development', ar: 'تطوير الويب' },
    filterCategories: ['wordpress', 'web-development'],
    title: { en: 'Wellness VS', ar: 'Wellness VS' },
    description: {
      en: 'A WordPress website for a vitamins and supplements retailer, presenting an extensive, well-organized product catalog.',
      ar: 'موقع WordPress لمتجر فيتامينات ومكملات غذائية، يعرض كتالوج منتجات واسع ومنظم بعناية.',
    },
    overview: {
      en: 'Wellness VS is a vitamins, supplements, and herbal-products retailer built around the promise "Feel Better – Live Stronger." AspireTechEg built the site on WordPress, organizing an extensive catalog spanning categories such as immune support, sleep, energy, and men’s and women’s health into a clear, browsable structure for health-conscious shoppers.',
      ar: 'Wellness VS متجر متخصص في الفيتامينات والمكملات الغذائية والأعشاب، يقوم على شعار "اشعر بتحسن، عش بقوة أكبر". بنت AspireTechEg الموقع على WordPress، ونظّمت كتالوجًا واسعًا يغطي فئات مثل دعم المناعة والنوم والطاقة وصحة الرجل والمرأة ضمن بنية واضحة وسهلة التصفح لعملاء مهتمين بصحتهم.',
    },
    servicesDelivered: [
      { en: 'WordPress website development and configuration', ar: 'تطوير وإعداد موقع WordPress بالكامل' },
      {
        en: 'Structured, browsable product category architecture',
        ar: 'بنية تصنيفات منتجات منظمة وسهلة التصفح',
      },
      { en: 'Responsive layout across desktop, tablet, and mobile', ar: 'تصميم متجاوب على أجهزة الحاسوب والأجهزة اللوحية والهواتف' },
      { en: 'Clean presentation of featured products and brand listings', ar: 'عرض واضح للمنتجات المميزة وقوائم العلامات التجارية' },
      { en: 'Content organization for a large, multi-category catalog', ar: 'تنظيم محتوى كتالوج كبير ومتعدد الفئات' },
    ],
    technologies: ['WordPress', 'PHP', 'JavaScript', 'HTML', 'CSS'],
    websiteUrl: 'https://wellness-vs.com/',
  },
  {
    slug: 'ion-wear',
    featured: true,
    platform: 'WordPress',
    icon: ShoppingBag,
    gradient: 'from-neutral-600 via-neutral-500 to-neutral-300',
    image: '/projects/ion-wear.jpg',
    category: { en: 'E-commerce', ar: 'التجارة الإلكترونية' },
    filterCategories: ['wordpress', 'ecommerce'],
    title: { en: 'Ion Wear', ar: 'Ion Wear' },
    description: {
      en: 'A WooCommerce-powered streetwear store for the Egyptian market, with an organized shopping experience across tees, denim, and bundles.',
      ar: 'متجر أزياء عصرية (Streetwear) يعمل بواجهة WooCommerce للسوق المصري، بتجربة تسوق منظمة عبر التيشرتات والجينز والباقات.',
    },
    overview: {
      en: 'IonWear is an Egyptian streetwear label built around the idea of "minimal design, maximum impact." AspireTechEg developed the brand’s WooCommerce store on WordPress, covering the full shopping journey — from browsing t-shirts, graphic tees, and denim to wishlisting, variant selection, and checkout — with pricing in Egyptian Pounds and a clean, mobile-friendly storefront.',
      ar: 'IonWear علامة أزياء عصرية مصرية تقوم على فكرة "تصميم بسيط، تأثير كبير". طوّرت AspireTechEg متجر العلامة على WordPress باستخدام WooCommerce، وغطت رحلة التسوق كاملة — من تصفح التيشرتات والجينز إلى قائمة الرغبات واختيار المقاسات والدفع — بالجنيه المصري وواجهة نظيفة متوافقة مع الهواتف.',
    },
    servicesDelivered: [
      { en: 'WordPress and WooCommerce store development', ar: 'تطوير متجر إلكتروني على WordPress باستخدام WooCommerce' },
      { en: 'Product catalog setup with size and color variants', ar: 'إعداد كتالوج المنتجات مع خيارات المقاس واللون' },
      { en: 'Wishlist and product comparison functionality', ar: 'إضافة قائمة رغبات وميزة مقارنة المنتجات' },
      { en: 'Responsive storefront optimized for mobile shopping', ar: 'واجهة متجر متجاوبة ومحسّنة للتسوق عبر الهاتف' },
      { en: 'Store navigation and category structure (Shop, About, Contact)', ar: 'بنية تنقل وتصنيفات واضحة (المتجر، من نحن، تواصل معنا)' },
    ],
    technologies: ['WordPress', 'WooCommerce', 'PHP', 'JavaScript', 'HTML', 'CSS'],
    websiteUrl: 'https://ionwear.store/',
  },
  {
    slug: 'nozo',
    featured: false,
    platform: 'Shopify',
    icon: Sparkles,
    gradient: 'from-emerald-400 via-lime-300 to-emerald-500',
    image: '/projects/nozo.jpg',
    category: { en: 'E-commerce', ar: 'التجارة الإلكترونية' },
    filterCategories: ['shopify', 'ecommerce'],
    title: { en: 'Nozo', ar: 'Nozo' },
    description: {
      en: 'A Shopify storefront for a UAE-based natural deodorant brand, presenting the product story and a streamlined checkout experience.',
      ar: 'متجر Shopify لعلامة مزيل عرق طبيعي مقرها الإمارات، يعرض قصة المنتج وتجربة شراء مبسطة.',
    },
    overview: {
      en: 'Nozo is a UAE-based natural deodorant brand built around the promise of "Natural, Zero Discomfort." AspireTechEg built the brand’s Shopify storefront, presenting the product’s natural, aluminum-free formula alongside comparison content and customer testimonials, with a simple path from browsing to checkout and support for bulk/B2B ordering.',
      ar: 'Nozo علامة مزيل عرق طبيعي مقرها الإمارات، تقوم على شعار "طبيعي، بلا إزعاج". بنت AspireTechEg متجر العلامة على Shopify، وعرضت تركيبته الطبيعية الخالية من الألومنيوم إلى جانب محتوى مقارنة وآراء عملاء، مع مسار شراء بسيط ودعم للطلبات بالجملة (B2B).',
    },
    servicesDelivered: [
      { en: 'Shopify storefront setup and customization', ar: 'إعداد وتخصيص متجر Shopify' },
      { en: 'Product and pricing presentation (single packs and bulk pricing)', ar: 'عرض المنتجات والأسعار (عبوات مفردة وأسعار الجملة)' },
      { en: 'Comparison and educational content sections', ar: 'أقسام محتوى تعليمي ومقارنة مع المنتجات التقليدية' },
      { en: 'Responsive design for mobile-first UAE shoppers', ar: 'تصميم متجاوب يراعي تسوق العملاء عبر الهاتف أولًا' },
      { en: 'B2B inquiry pathway for wholesale customers', ar: 'مسار استفسار مخصص لعملاء الجملة (B2B)' },
    ],
    technologies: ['Shopify', 'Liquid', 'JavaScript', 'HTML', 'CSS'],
    websiteUrl: 'https://nozo.ae/',
  },
  {
    slug: 'igrill',
    featured: false,
    platform: 'Shopify',
    icon: Flame,
    gradient: 'from-orange-500 via-red-400 to-amber-400',
    category: { en: 'E-commerce', ar: 'التجارة الإلكترونية' },
    filterCategories: ['shopify', 'ecommerce'],
    title: { en: 'iGrill', ar: 'iGrill' },
    description: {
      en: 'A Shopify storefront currently running in a password-protected, pre-launch state.',
      ar: 'متجر Shopify يعمل حاليًا في وضع خاص محمي بكلمة مرور تمهيدًا لإطلاقه.',
    },
    overview: {
      en: 'iGrill is a Shopify e-commerce project currently running in a password-protected, pre-launch state. AspireTechEg handled the Shopify store setup and storefront build, with the site kept private ahead of its public launch.',
      ar: 'iGrill مشروع متجر إلكتروني على Shopify، يعمل حاليًا في وضع خاص محمي بكلمة مرور تمهيدًا لإطلاقه للعامة. تولّت AspireTechEg إعداد المتجر وبناء واجهته، مع إبقاء الموقع خاصًا لحين إطلاقه رسميًا.',
    },
    servicesDelivered: [
      { en: 'Shopify store setup and configuration', ar: 'إعداد وتهيئة متجر Shopify' },
      { en: 'Storefront theme implementation', ar: 'تنفيذ قالب واجهة المتجر' },
      {
        en: 'Store access controls for a pre-launch, invite-only rollout',
        ar: 'إعداد ضوابط وصول للمتجر خلال مرحلة ما قبل الإطلاق',
      },
    ],
    technologies: ['Shopify', 'Liquid', 'JavaScript', 'HTML', 'CSS'],
    websiteUrl: 'https://igrill.ae/',
  },
  {
    slug: 'lux-treatment',
    featured: false,
    platform: 'Shopify',
    icon: Sparkles,
    gradient: 'from-pink-300 via-rose-300 to-pink-400',
    image: '/projects/lux-treatment.jpg',
    category: { en: 'E-commerce', ar: 'التجارة الإلكترونية' },
    filterCategories: ['shopify', 'ecommerce'],
    title: { en: 'Lux Treatment', ar: 'Lux Treatment' },
    description: {
      en: 'A Shopify storefront for a Swedish beauty brand’s flagship hair-care device, combining product education and a direct-to-consumer checkout flow.',
      ar: 'متجر Shopify لعلامة تجميل سويدية ومنتجها الرئيسي للعناية بالشعر، يجمع بين شرح المنتج وتجربة شراء مباشرة للمستهلك.',
    },
    overview: {
      en: 'Lux Treatment is a Swedish beauty brand built around SplitFix™, a precision trimmer designed to remove split ends at home. AspireTechEg built the Shopify storefront around a direct-to-consumer model, combining product explanation, customer reviews, and tiered bundle pricing into a single, conversion-focused shopping experience.',
      ar: 'Lux Treatment علامة تجميل سويدية تقوم على منتج SplitFix™، وهو جهاز دقيق لتقليم أطراف الشعر التالفة من المنزل. بنت AspireTechEg متجر العلامة على Shopify وفق نموذج البيع المباشر للمستهلك، جامعة بين شرح المنتج وآراء العملاء وباقات أسعار متدرجة ضمن تجربة تسوق واحدة مركزة على التحويل.',
    },
    servicesDelivered: [
      { en: 'Shopify storefront development for a direct-to-consumer product launch', ar: 'تطوير متجر Shopify لإطلاق منتج بنموذج البيع المباشر للمستهلك' },
      { en: 'Tiered bundle pricing presentation (single and multi-pack offers)', ar: 'عرض باقات أسعار متدرجة (عبوة مفردة وعروض متعددة)' },
      { en: 'Customer review and social-proof sections', ar: 'أقسام لعرض تقييمات وآراء العملاء' },
      { en: 'Responsive, conversion-focused product page design', ar: 'تصميم صفحة منتج متجاوبة ومركزة على زيادة التحويل' },
    ],
    technologies: ['Shopify', 'Liquid', 'JavaScript', 'HTML', 'CSS'],
    websiteUrl: 'https://lux-treatment.com/',
  },
  {
    slug: 'aspiretecheg',
    featured: false,
    platform: 'Custom',
    icon: Globe2,
    gradient: 'from-violet-500 via-indigo-500 to-cyan-400',
    category: { en: 'Web Development', ar: 'تطوير الويب' },
    filterCategories: ['web-development'],
    title: { en: 'AspireTechEg', ar: 'AspireTechEg' },
    description: {
      en: 'The official AspireTechEg platform, presenting our engineering capabilities, services, and portfolio in a fully bilingual experience.',
      ar: 'المنصة الرسمية لشركة AspireTechEg، تعرض قدراتنا الهندسية وخدماتنا وأعمالنا في تجربة ثنائية اللغة بالكامل.',
    },
    overview: {
      en: 'This website is itself an AspireTechEg product: a fully bilingual, statically-hosted platform built to present our services, technical expertise, and project portfolio the same way we would build it for a client — with craft, structure, and no shortcuts.',
      ar: 'هذا الموقع بحد ذاته أحد منتجات AspireTechEg: منصة ثنائية اللغة بالكامل، مستضافة بشكل ساكن، مبنية لعرض خدماتنا وخبرتنا التقنية ومحفظة أعمالنا بنفس الجودة التي نبنيها لعملائنا — بلا اختصارات.',
    },
    servicesDelivered: [
      { en: 'Fully bilingual EN/AR experience with true RTL support', ar: 'تجربة ثنائية اللغة بالكامل مع دعم حقيقي للاتجاه من اليمين لليسار' },
      { en: 'Centralized, structured data model for services and projects', ar: 'نموذج بيانات مركزي ومنظم للخدمات والمشاريع' },
      { en: 'Premium dark visual identity with careful motion design', ar: 'هوية بصرية داكنة فاخرة مع حركة مدروسة بعناية' },
      { en: 'Fully static architecture, deployable to GitHub Pages with no backend', ar: 'معمارية ساكنة بالكامل، قابلة للنشر على GitHub Pages دون أي خلفية برمجية' },
    ],
    technologies: ['React', 'JavaScript', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    websiteUrl: '',
  },
];

export const getProjectBySlug = (slug) => projects.find((p) => p.slug === slug);
export const featuredProjects = projects.filter((p) => p.featured);
