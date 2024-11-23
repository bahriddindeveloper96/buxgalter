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
