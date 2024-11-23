import buxgal1 from '../assets/buxgal1.jpg'
import buxgal3 from '../assets/buxgal3.jpg'
import buxgal4 from '../assets/buxgal4.png'

export const homeData = {
  hero: {
    slides: [
      {
        title: "Professional buxgalteriya xizmatlari",
        subtitle: "Biznesingiz uchun ishonchli hamkor",
        ctaText: "Bog'lanish",
        image: buxgal1
      },
      {
        title: "Soliq maslahatlar va audit",
        subtitle: "Biznesingizni yangi bosqichga olib chiqing",
        ctaText: "Xizmatlar",
        image: buxgal3
      },
      {
        title: "15 yillik tajriba",
        subtitle: "Minglab mamnun mijozlar",
        ctaText: "Biz haqimizda",
        image: buxgal4
      }
    ]
  },
  services: {
    title: "Bizning xizmatlar",
    items: [
      {
        icon: "fas fa-calculator",
        title: "Buxgalteriya",
        description: "Professional buxgalteriya hisobi va moliyaviy maslahatlar"
      },
      {
        icon: "fas fa-file-invoice-dollar",
        title: "Soliq maslahatlari",
        description: "Soliq optimizatsiyasi va soliq hisoboti bo'yicha maslahatlar"
      },
      {
        icon: "fas fa-search-dollar",
        title: "Audit",
        description: "To'liq audit tekshiruvi va moliyaviy tahlil"
      }
    ]
  },
  stats: {
    items: [
      {
        value: "500+",
        label: "Mamnun mijozlar"
      },
      {
        value: "15+",
        label: "Yillik tajriba"
      },
      {
        value: "50+",
        label: "Professional xodimlar"
      }
    ]
  },
  partners: {
    title: "Bizning hamkorlar",
    subtitle: "Ishonchli hamkorlarimiz bilan birgalikda",
    items: [
      { 
        name: 'UzAuto Motors', 
        icon: 'fas fa-car', 
        description: 'Avtomobil ishlab chiqarish' 
      },
      { 
        name: 'O\'zbekneftgaz', 
        icon: 'fas fa-gas-pump', 
        description: 'Neft va gaz sanoati' 
      },
      { 
        name: 'Uzbekistan Airways', 
        icon: 'fas fa-plane', 
        description: 'Aviatsiya' 
      },
      { 
        name: 'O\'zbekiston Temir Yo\'llari', 
        icon: 'fas fa-train', 
        description: 'Temir yo\'l transporti' 
      },
      { 
        name: 'Artel', 
        icon: 'fas fa-tv', 
        description: 'Maishiy texnika' 
      },
      { 
        name: 'Korzinka', 
        icon: 'fas fa-shopping-cart', 
        description: 'Chakana savdo' 
      }
    ]
  }
}
