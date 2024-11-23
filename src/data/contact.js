export const contactData = {
  pageHeader: {
    title: "Bog'lanish",
    subtitle: "Biz bilan bog'laning va professional maslahat oling"
  },
  contactInfo: {
    title: "Bog'lanish uchun",
    items: [
      {
        type: "address",
        icon: "fas fa-map-marker-alt",
        title: "Manzil",
        content: "Toshkent shahri, Chilonzor tumani, Bunyodkor ko'chasi, 12-uy"
      },
      {
        type: "phone",
        icon: "fas fa-phone",
        title: "Telefon",
        phones: [
          {
            number: "+998 90 123 45 67",
            link: "tel:+998901234567"
          },
          {
            number: "+998 90 123 45 68",
            link: "tel:+998901234568"
          }
        ]
      },
      {
        type: "email",
        icon: "fas fa-envelope",
        title: "Email",
        emails: [
          {
            address: "info@meral.uz",
            link: "mailto:info@meral.uz"
          },
          {
            address: "support@meral.uz",
            link: "mailto:support@meral.uz"
          }
        ]
      },
      {
        type: "workingHours",
        icon: "fas fa-clock",
        title: "Ish vaqti",
        schedule: {
          weekdays: "Dushanba - Juma: 9:00 - 18:00",
          saturday: "Shanba: 10:00 - 15:00",
          sunday: "Yakshanba: Dam olish kuni"
        }
      }
    ]
  },
  contactForm: {
    title: "Xabar yuborish",
    fields: {
      name: {
        label: "Ismingiz",
        type: "text",
        required: true
      },
      phone: {
        label: "Telefon raqamingiz",
        type: "tel",
        required: true
      },
      email: {
        label: "Email",
        type: "email",
        required: true
      },
      subject: {
        label: "Mavzu",
        type: "text",
        required: true
      },
      message: {
        label: "Xabar matni",
        type: "textarea",
        required: true
      }
    },
    submitButton: {
      text: "Yuborish"
    }
  },
  map: {
    title: "Bizning Manzil",
    embedUrl: "https://www.google.com/maps/embed?pb=your-map-embed-url"
  }
}
