import {
  Code2,
  Globe,
  Atom,
  ShoppingBag,
  LayoutTemplate,
  Workflow,
  Wrench,
} from 'lucide-react';

// Centralized, bilingual service catalogue. Add a new service by appending
// an object here — Home and Services pages both render straight from this
// file, so nothing else needs to change.
export const services = [
  {
    id: 'custom-software',
    icon: Code2,
    title: {
      en: 'Custom Software Development',
      ar: 'تطوير برمجيات مخصصة',
    },
    description: {
      en: 'Tailored software built around how your business actually operates, not the other way around.',
      ar: 'برمجيات مصممة خصيصًا حول طريقة عمل نشاطك التجاري فعليًا، وليس العكس.',
    },
    longDescription: {
      en: 'We design and develop tailored software solutions built around your specific processes, constraints, and goals — from internal tools to full platforms, engineered to scale with your business.',
      ar: 'نصمم ونطوّر حلولًا برمجية مخصصة تُبنى حول عملياتك ومتطلباتك وأهدافك الفعلية — من الأدوات الداخلية إلى المنصات الكاملة، بهندسة تتوسع مع نمو نشاطك.',
    },
  },
  {
    id: 'web-development',
    icon: Globe,
    title: {
      en: 'Web Development',
      ar: 'تطوير الويب',
    },
    description: {
      en: 'Modern, fast, and scalable websites and web applications built on solid foundations.',
      ar: 'مواقع وتطبيقات ويب حديثة وسريعة وقابلة للتوسع، مبنية على أسس تقنية متينة.',
    },
    longDescription: {
      en: 'From marketing sites to complex web applications, we build fast, accessible, and maintainable products using modern web standards and performance best practices.',
      ar: 'من المواقع التسويقية إلى تطبيقات الويب المعقدة، نبني منتجات سريعة وسهلة الصيانة باستخدام أحدث معايير الويب وأفضل ممارسات الأداء.',
    },
  },
  {
    id: 'react-development',
    icon: Atom,
    title: {
      en: 'React Development',
      ar: 'تطوير باستخدام React',
    },
    description: {
      en: 'Modern, component-driven frontend experiences built with React and the modern web ecosystem.',
      ar: 'واجهات أمامية حديثة قائمة على المكوّنات، مبنية باستخدام React وأحدث تقنيات الويب.',
    },
    longDescription: {
      en: 'We build interactive, high-performance interfaces with React — from design systems and dashboards to full single-page applications with smooth, app-like interactions.',
      ar: 'نبني واجهات تفاعلية عالية الأداء باستخدام React — من أنظمة التصميم ولوحات التحكم إلى تطبيقات صفحة واحدة كاملة بتجربة استخدام سلسة أشبه بالتطبيقات الأصلية.',
    },
  },
  {
    id: 'shopify-development',
    icon: ShoppingBag,
    title: {
      en: 'Shopify Development',
      ar: 'تطوير متاجر Shopify',
    },
    description: {
      en: 'Custom Shopify stores, theme development, Liquid customization, and end-to-end e-commerce builds.',
      ar: 'متاجر Shopify مخصصة، تطوير القوالب، تخصيص Liquid، وحلول تجارة إلكترونية متكاملة.',
    },
    longDescription: {
      en: 'We build and customize Shopify storefronts that convert — bespoke themes, Liquid customization, app integrations, and checkout experiences tailored to your brand.',
      ar: 'نبني ونخصص متاجر Shopify بطريقة ترفع من معدلات التحويل — قوالب مخصصة، تخصيص Liquid، دمج التطبيقات، وتجربة شراء متوافقة مع هوية علامتك التجارية.',
    },
  },
  {
    id: 'wordpress-development',
    icon: LayoutTemplate,
    title: {
      en: 'WordPress Development',
      ar: 'تطوير مواقع WordPress',
    },
    description: {
      en: 'Custom WordPress and WooCommerce websites with flexible content and commerce experiences.',
      ar: 'مواقع WordPress وWooCommerce مخصصة بتجارب محتوى وتجارة إلكترونية مرنة.',
    },
    longDescription: {
      en: 'We design custom WordPress themes and WooCommerce stores that give you real editorial flexibility without sacrificing performance, security, or design quality.',
      ar: 'نصمم قوالب WordPress ومتاجر WooCommerce مخصصة تمنحك مرونة حقيقية في إدارة المحتوى دون التضحية بالأداء أو الأمان أو جودة التصميم.',
    },
  },
  {
    id: 'automation-integrations',
    icon: Workflow,
    title: {
      en: 'Automation & Integrations',
      ar: 'الأتمتة والتكامل بين الأنظمة',
    },
    description: {
      en: 'Automate repetitive workflows and connect your systems through custom integrations.',
      ar: 'أتمتة المهام المتكررة وربط أنظمتك المختلفة من خلال تكاملات مخصصة.',
    },
    longDescription: {
      en: 'We identify the manual work costing you time and replace it with reliable automation — bots, schedulers, and integrations that connect the tools you already use.',
      ar: 'نحدد المهام اليدوية التي تستهلك وقتك ونستبدلها بأتمتة موثوقة — بوتات، مجدولات مهام، وتكاملات تربط الأدوات التي تستخدمها بالفعل.',
    },
  },
  {
    id: 'technical-solutions',
    icon: Wrench,
    title: {
      en: 'Technical Solutions',
      ar: 'حلول تقنية متخصصة',
    },
    description: {
      en: 'Solving complex technical challenges through focused engineering, not off-the-shelf guesses.',
      ar: 'حل التحديات التقنية المعقدة عبر هندسة برمجية دقيقة، لا حلول جاهزة تخمينية.',
    },
    longDescription: {
      en: 'When a problem does not fit a standard product, we engineer a solution for it — system design, data modeling, performance troubleshooting, and technical consulting.',
      ar: 'حين لا تناسب مشكلتك أي منتج جاهز، نصمم لها حلًا هندسيًا مخصصًا — من تصميم الأنظمة ونمذجة البيانات إلى حل مشكلات الأداء والاستشارات التقنية.',
    },
  },
];

export const getServiceById = (id) => services.find((s) => s.id === id);
