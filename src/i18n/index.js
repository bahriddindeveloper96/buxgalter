import { createI18n } from 'vue-i18n'

const messages = {
  uz: {
    nav: {
      home: 'Bosh sahifa',
      services: 'Xizmatlar',
      about: 'Biz haqimizda',
      contact: 'Aloqa'
    },
    hero: {
      title: 'Professional buxgalteriya va konsalting xizmatlari',
      subtitle: 'Biznesingiz rivojlanishi uchun ishonchli hamkor',
      cta: 'Bepul konsultatsiya'
    },
    home: {
      services: {
        title: 'Bizning xizmatlar',
        business: {
          title: 'Biznes konsalting',
          description: 'Biznesingizni rivojlantirish va optimallashtirishda professional yordamimizni taklif etamiz'
        },
        consulting: {
          title: 'Moliyaviy maslahat',
          description: 'Moliyaviy rejalashtirish, byudjetlashtirish va investitsiya masalalarida malakali maslahatlar'
        },
        international: {
          title: 'Xalqaro savdo',
          description: 'Xalqaro bozorga chiqish va chet el hamkorlar bilan ishlashda ko\'maklashamiz'
        }
      },
      pricing: {
        title: 'Narxlar',
        monthly: 'oylik',
        getStarted: 'Boshlash',
        basic: {
          name: 'Oddiy',
          feature1: 'Asosiy konsultatsiya',
          feature2: 'Oylik hisobotlar',
          feature3: 'Email yordami',
          feature4: '5 soatlik konsultatsiya'
        },
        pro: {
          name: 'Professional',
          feature1: 'Barcha oddiy xizmatlar',
          feature2: 'Shoshilinch yordam',
          feature3: '24/7 qo\'llab-quvvatlash',
          feature4: '15 soatlik konsultatsiya',
          feature5: 'Shaxsiy menejer'
        },
        enterprise: {
          name: 'Korporativ',
          feature1: 'Barcha pro xizmatlar',
          feature2: 'Cheksiz konsultatsiya',
          feature3: 'Xalqaro konsalting',
          feature4: 'Maxsus narxlar',
          feature5: 'Shaxsiy jamoa',
          feature6: 'Strategik hamkorlik'
        }
      }
    },
    services: {
      title: 'Bizning xizmatlar',
      accounting: 'Buxgalteriya hisobi',
      tax: 'Soliq maslahati',
      audit: 'Audit xizmatlari',
      consulting: 'Biznes konsalting',
      registration: 'Kompaniya ro\'yxatdan o\'tkazish',
      reporting: 'Moliyaviy hisobotlar'
    },
    partners: {
      title: 'Bizning hamkorlar',
      subtitle: 'Ishonchli hamkorlarimiz bilan birgalikda'
    }
  },
  ru: {
    nav: {
      home: 'Главная',
      services: 'Услуги',
      about: 'О нас',
      contact: 'Контакты'
    },
    hero: {
      title: 'Профессиональные бухгалтерские и консалтинговые услуги',
      subtitle: 'Надежный партнер для развития вашего бизнеса',
      cta: 'Бесплатная консультация'
    },
    home: {
      services: {
        title: 'Наши услуги',
        business: {
          title: 'Бизнес консалтинг',
          description: 'Предлагаем профессиональную помощь в развитии и оптимизации вашего бизнеса'
        },
        consulting: {
          title: 'Финансовый консалтинг',
          description: 'Квалифицированные консультации по финансовому планированию, бюджетированию и инвестициям'
        },
        international: {
          title: 'Международная торговля',
          description: 'Помощь в выходе на международный рынок и работе с зарубежными партнерами'
        }
      },
      pricing: {
        title: 'Цены',
        monthly: 'в месяц',
        getStarted: 'Начать',
        basic: {
          name: 'Базовый',
          feature1: 'Базовые консультации',
          feature2: 'Ежемесячные отчеты',
          feature3: 'Email поддержка',
          feature4: '5 часов консультаций'
        },
        pro: {
          name: 'Профессиональный',
          feature1: 'Все базовые услуги',
          feature2: 'Срочная помощь',
          feature3: '24/7 поддержка',
          feature4: '15 часов консультаций',
          feature5: 'Персональный менеджер'
        },
        enterprise: {
          name: 'Корпоративный',
          feature1: 'Все про услуги',
          feature2: 'Безлимитные консультации',
          feature3: 'Международный консалтинг',
          feature4: 'Специальные цены',
          feature5: 'Персональная команда',
          feature6: 'Стратегическое партнерство'
        }
      }
    },
    services: {
      title: 'Наши услуги',
      accounting: 'Бухгалтерский учет',
      tax: 'Налоговое консультирование',
      audit: 'Аудиторские услуги',
      consulting: 'Бизнес консалтинг',
      registration: 'Регистрация компании',
      reporting: 'Финансовая отчетность'
    },
    partners: {
      title: 'Наши партнеры',
      subtitle: 'Вместе с нашими надежными партнерами'
    }
  },
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      about: 'About',
      contact: 'Contact'
    },
    hero: {
      title: 'Professional Accounting and Consulting Services',
      subtitle: 'Reliable partner for your business growth',
      cta: 'Free Consultation'
    },
    home: {
      services: {
        title: 'Our Services',
        business: {
          title: 'Business Consulting',
          description: 'We offer professional assistance in developing and optimizing your business'
        },
        consulting: {
          title: 'Financial Advisory',
          description: 'Qualified advice on financial planning, budgeting and investment matters'
        },
        international: {
          title: 'International Trade',
          description: 'Assistance in entering international markets and working with foreign partners'
        }
      },
      pricing: {
        title: 'Pricing',
        monthly: 'monthly',
        getStarted: 'Get Started',
        basic: {
          name: 'Basic',
          feature1: 'Basic consultations',
          feature2: 'Monthly reports',
          feature3: 'Email support',
          feature4: '5 hours consultation'
        },
        pro: {
          name: 'Professional',
          feature1: 'All basic features',
          feature2: 'Urgent assistance',
          feature3: '24/7 support',
          feature4: '15 hours consultation',
          feature5: 'Personal manager'
        },
        enterprise: {
          name: 'Enterprise',
          feature1: 'All pro features',
          feature2: 'Unlimited consultations',
          feature3: 'International consulting',
          feature4: 'Special pricing',
          feature5: 'Dedicated team',
          feature6: 'Strategic partnership'
        }
      }
    },
    services: {
      title: 'Our Services',
      accounting: 'Accounting',
      tax: 'Tax Advisory',
      audit: 'Audit Services',
      consulting: 'Business Consulting',
      registration: 'Company Registration',
      reporting: 'Financial Reporting'
    },
    partners: {
      title: 'Our Partners',
      subtitle: 'Together with our trusted partners'
    }
  }
}

export const i18n = createI18n({
  legacy: false,
  locale: 'uz',
  fallbackLocale: 'uz',
  messages
})
