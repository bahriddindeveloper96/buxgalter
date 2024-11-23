<template>
  <!-- Hero Section -->
  <section class="hero bg-primary text-white py-5">
    <div class="container">
      <swiper
        :modules="modules"
        :slides-per-view="swiperOptions.slidesPerView"
        :autoplay="swiperOptions.autoplay"
        :pagination="swiperOptions.pagination"
        class="hero-swiper"
      >
        <swiper-slide v-for="(slide, index) in hero.slides" :key="index">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <h1 class="display-4 fw-bold mb-4">{{ slide.title }}</h1>
              <p class="lead mb-4">{{ slide.subtitle }}</p>
              <button class="btn btn-light btn-lg" data-bs-toggle="modal" data-bs-target="#consultationModal">{{ slide.ctaText }}</button>
            </div>
            <div class="col-lg-6">
              <img :src="slide.image" :alt="slide.title" class="img-fluid rounded">
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </section>

  <!-- Services Section -->
  <section class="services py-5">
    <div class="container">
      <h2 class="text-center mb-5">{{ $t('home.services.title') }}</h2>
      <div class="row g-4">
        <div v-for="(service, index) in services" :key="index" class="col-md-4">
          <div class="card service-card h-100">            
            <div class="card-body text-center">
              <div class="icon-wrapper mb-4">
                <i :class="[service.icon, 'fa-3x']"></i>
              </div>
              <h3 class="card-title h5 mb-3">{{ $t(`home.services.${service.key}.title`) }}</h3>
              <p class="card-text">{{ $t(`home.services.${service.key}.description`) }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Pricing Section -->
  <section class="pricing py-5 bg-light">
    <div class="container">
      <h2 class="text-center mb-5">{{ $t('home.pricing.title') }}</h2>
      <div class="row g-4">
        <div v-for="(plan, index) in pricingPlans" :key="index" class="col-md-4">
          <div class="card pricing-card h-100" :class="{ 'popular': plan.isPopular }">
            <div class="card-header text-center py-4">
              <h3 class="mb-0">{{ $t(`home.pricing.${plan.key}.name`) }}</h3>
              <div class="price mt-3">
                <span class="currency">$</span>
                <span class="amount">{{ plan.price }}</span>
                <span class="period">/{{ $t('home.pricing.monthly') }}</span>
              </div>
            </div>
            <div class="card-body">
              <ul class="list-unstyled mb-4">
                <li v-for="(feature, fIndex) in plan.features" :key="fIndex" class="mb-3">
                  <i class="fas fa-check text-success me-2"></i>
                  {{ $t(`home.pricing.${plan.key}.feature${fIndex + 1}`) }}
                </li>
              </ul>
              <button class="btn btn-primary w-100">{{ $t('home.pricing.getStarted') }}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Partners Section -->
  <section class="partners py-5">
    <div class="container">
      <h2 class="text-center mb-3">{{ partners.title }}</h2>
      <p class="text-center text-muted mb-5">{{ partners.subtitle }}</p>
      <swiper
        :modules="modules"
        :slides-per-view="1"
        :breakpoints="{
          '640': {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          '768': {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          '1024': {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }"
        :autoplay="{
          delay: 3000,
          disableOnInteraction: false,
        }"
        class="partners-swiper"
      >
        <swiper-slide v-for="(partner, index) in partners.items" :key="index">
          <div class="partner-card text-center p-4">
            <div class="partner-icon mb-3">
              <i :class="[partner.icon, 'fa-3x', 'text-primary']"></i>
            </div>
            <h5 class="partner-name mb-2">{{ partner.name }}</h5>
            <!-- <p class="partner-description text-muted small mb-0">{{ partner.description }}</p> -->
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </section>

  <!-- Statistics Section -->
  <section class="stats bg-light py-5">
    <div class="container">
      <div class="row text-center">
        <div v-for="(stat, index) in stats.items" :key="index" class="col-md-4">
          <h3 class="display-4 fw-bold text-primary">{{ stat.value }}</h3>
          <p class="text-muted">{{ stat.label }}</p>
        </div>
      </div>
    </div>
  </section>
  <!-- Footer -->
  <footer class="footer bg-dark text-light py-5 mt-5">
    <div class="container">
      <div class="row g-4">
        <!-- Company Info -->
        <div class="col-lg-4 mb-4 mb-lg-0">
          <h5 class="mb-4 text-primary">Meral Consulting</h5>
          <p class="mb-4">Professional moliyaviy va biznes maslahatlar. Sizning muvaffaqiyatingiz - bizning maqsadimiz.</p>
          <div class="social-links">
            <a href="#" class="text-light me-3"><i class="fab fa-facebook-f"></i></a>
            <a href="#" class="text-light me-3"><i class="fab fa-telegram"></i></a>
            <a href="#" class="text-light me-3"><i class="fab fa-instagram"></i></a>
            <a href="#" class="text-light"><i class="fab fa-linkedin-in"></i></a>
          </div>
        </div>

        <!-- Quick Links -->
        <div class="col-lg-4 mb-4 mb-lg-0">
          <h5 class="mb-4 text-primary">Tezkor Havolalar</h5>
          <ul class="list-unstyled footer-links">
            <li class="mb-2">
              <a href="/" class="text-light text-decoration-none">Bosh Sahifa</a>
            </li>
            <li class="mb-2">
              <a href="/about" class="text-light text-decoration-none">Biz Haqimizda</a>
            </li>
            <li class="mb-2">
              <a href="/services" class="text-light text-decoration-none">Xizmatlar</a>
            </li>
            <li class="mb-2">
              <a href="/contact" class="text-light text-decoration-none">Bog'lanish</a>
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div class="col-lg-4">
          <h5 class="mb-4 text-primary">Bog'lanish</h5>
          <ul class="list-unstyled footer-contact">
            <li class="mb-3">
              <i class="fas fa-map-marker-alt me-2 text-primary"></i>
              Toshkent shahri, Chilonzor tumani
            </li>
            <li class="mb-3">
              <i class="fas fa-phone me-2 text-primary"></i>
              +998 90 123 45 67
            </li>
            <li class="mb-3">
              <i class="fas fa-envelope me-2 text-primary"></i>
              info@meralconsulting.uz
            </li>
            <li>
              <i class="fas fa-clock me-2 text-primary"></i>
              Dush-Shan: 9:00 - 18:00
            </li>
          </ul>
        </div>
      </div>
    </div>
 
    <div class="container">
      <p class="mb-0">&copy; {{ new Date().getFullYear() }} Meral Consulting. Barcha huquqlar himoyalangan.</p>
    </div>
 
  </footer>

  <!-- Modal -->
  <div class="modal fade" id="consultationModal" tabindex="-1" aria-labelledby="consultationModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header bg-primary text-white">
          <h5 class="modal-title" id="consultationModalLabel">Bepul konsultatsiya</h5>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="handleConsultationSubmit">
            <div class="mb-3">
              <label for="name" class="form-label">Ismingiz</label>
              <input type="text" class="form-control" id="name" v-model="consultationForm.name" required>
            </div>
            <div class="mb-3">
              <label for="phone" class="form-label">Telefon raqamingiz</label>
              <input type="tel" class="form-control" id="phone" v-model="consultationForm.phone" required>
            </div>
            <div class="mb-3">
              <label for="service" class="form-label">Xizmat turi</label>
              <select class="form-select" id="service" v-model="consultationForm.service" required>
                <option value="">Tanlang...</option>
                <option v-for="service in services" :key="service.title" :value="service.title">
                  {{ service.title }}
                </option>
              </select>
            </div>
            <div class="mb-3">
              <label for="message" class="form-label">Qo'shimcha ma'lumot</label>
              <textarea class="form-control" id="message" rows="3" v-model="consultationForm.message"></textarea>
            </div>
            <div class="text-end">
              <button type="button" class="btn btn-secondary me-2" data-bs-dismiss="modal">Bekor qilish</button>
              <button type="submit" class="btn btn-primary">Yuborish</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { homeData } from '../data/home'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

export default {
  name: 'HomeView',
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      ...homeData,
      modules: [Autoplay, Pagination],
      swiperOptions: {
        slidesPerView: 1,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        },
        pagination: {
          clickable: true
        }
      },
      services: [
        {
          key: 'business',
          icon: 'fas fa-chart-line'
        },
        {
          key: 'consulting',
          icon: 'fas fa-handshake'
        },
        {
          key: 'international',
          icon: 'fas fa-globe'
        }
      ],
      pricingPlans: [
        {
          key: 'basic',
          price: '299',
          features: ['feature1', 'feature2', 'feature3', 'feature4'],
          isPopular: false
        },
        {
          key: 'pro',
          price: '599',
          features: ['feature1', 'feature2', 'feature3', 'feature4', 'feature5'],
          isPopular: true
        },
        {
          key: 'enterprise',
          price: '999',
          features: ['feature1', 'feature2', 'feature3', 'feature4', 'feature5', 'feature6'],
          isPopular: false
        }
      ],
      consultationForm: {
        name: '',
        phone: '',
        service: '',
        message: ''
      }
    }
  },
  methods: {
    handleConsultationSubmit() {
      // Form submission logic here
      console.log('Consultation form submitted:', this.consultationForm)
      // Reset form
      this.consultationForm = {
        name: '',
        phone: '',
        service: '',
        message: ''
      }
      // Close modal
      const modal = document.getElementById('consultationModal')
      const modalInstance = bootstrap.Modal.getInstance(modal)
      modalInstance.hide()
    }
  }
}
</script>

<style scoped>
.hero {
  background: linear-gradient(135deg, #42b983 0%, #2c3e50 100%);
}

.card {
  transition: transform 0.3s ease;
  border: none;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.card:hover {
  transform: translateY(-5px);
}

.partner-card {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  text-align: center;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem 0;
}

.partner-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
}

.partner-logo {
  color: #42b983;
}

.partner-logo h5 {
  color: #2c3e50;
  font-weight: 600;
  margin-top: 1rem;
}

.mySwiper {
  padding-bottom: 50px;
}

:deep(.swiper-pagination-bullet) {
  background: #42b983;
}

:deep(.swiper-pagination-bullet-active) {
  background: #2c3e50;
}

.stats {
  background-color: #f8f9fa;
}

.text-primary {
  color: #42b983 !important;
}

.bg-primary {
  background-color: #42b983 !important;
}

.btn-light:hover {
  background-color: #2c3e50;
  color: white;
}

.service-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: none;
  border-radius: 15px;
  overflow: hidden;
  background-color: #fff;
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.service-image {
  height: 200px;
  object-fit: cover;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
}

.icon-wrapper {
  width: 80px;
  height: 80px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(var(--bs-primary-rgb), 0.1);
  border-radius: 50%;
  margin-bottom: 1.5rem;
}

.icon-wrapper i {
  color: var(--bs-primary);
}

.card-title {
  color: var(--bs-primary);
  font-weight: 600;
}

.card-text {
  color: #6c757d;
  line-height: 1.6;
}

.footer {
  position: relative;
}

.footer-links a {
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: var(--bs-primary) !important;
}

.social-links a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.social-links a:hover {
  background-color: var(--bs-primary);
  transform: translateY(-3px);
}

.footer-contact li {
  display: flex;
  align-items: center;
}

.footer-contact i {
  font-size: 1.1rem;
  width: 24px;
}

.bottom-footer {
  background-color: rgba(0, 0, 0, 0.2);
}

.service-card {
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  transition: all 0.3s ease;
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

.icon-wrapper {
  width: 80px;
  height: 80px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: var(--primary-gradient);
  color: white;
}

.pricing-card {
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  transition: all 0.3s ease;
}

.pricing-card.popular {
  transform: scale(1.05);
  border: 2px solid var(--primary-gradient);
  position: relative;
}

.pricing-card.popular::before {
  content: '★ Popular';
  position: absolute;
  top: -12px;
  right: 20px;
  background: var(--primary-gradient);
  color: white;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
}

.pricing-card:hover:not(.popular) {
  transform: translateY(-5px);
}

.pricing-card .card-header {
  background: transparent;
  border-bottom: 1px solid var(--glass-border);
}

.price {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--primary);
}

.price .currency {
  font-size: 1.5rem;
  font-weight: 500;
  vertical-align: super;
}

.price .period {
  font-size: 1rem;
  color: #64748b;
  font-weight: normal;
}

.pricing-card ul li {
  display: flex;
  align-items: center;
}

@media (max-width: 991px) {
  .pricing-card.popular {
    transform: scale(1);
    margin: 1rem 0;
  }
}
</style>
