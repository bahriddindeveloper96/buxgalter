<template>
  <div class="services-page">
    <!-- Page Header -->
    <section class="page-header bg-primary text-white py-5">
      <div class="container">
        <h1 class="display-4">{{ $t('services.title') }}</h1>
        <p class="lead">Professional xizmatlarimiz orqali biznesingizni yangi bosqichga olib chiqing</p>
      </div>
    </section>

    <!-- Detailed Services -->
    <section class="services-detail py-5">
      <div class="container">
        <!-- Buxgalteriya -->
        <div class="service-item row align-items-center mb-5">
          <div class="col-lg-6">
            <div class="service-content">
              <div class="service-icon mb-4">
                <i class="fas fa-calculator fa-3x text-primary"></i>
              </div>
              <h2 class="h3 mb-4">{{ $t('services.accounting') }}</h2>
              <ul class="list-unstyled">
                <li class="mb-3">
                  <i class="fas fa-check text-primary me-2"></i>
                  Kunlik buxgalteriya hisobi
                </li>
                <li class="mb-3">
                  <i class="fas fa-check text-primary me-2"></i>
                  Moliyaviy hisobotlarni tayyorlash
                </li>
                <li class="mb-3">
                  <i class="fas fa-check text-primary me-2"></i>
                  Xodimlar bo'yicha hisob-kitoblar
                </li>
                <li class="mb-3">
                  <i class="fas fa-check text-primary me-2"></i>
                  Bank operatsiyalari hisobi
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-6">
            <img src="../assets/buxgal4.png" alt="Accounting" class="img-fluid rounded shadow">
          </div>
        </div>

        <!-- Soliq -->
        <div class="service-item row align-items-center mb-5 flex-row-reverse">
          <div class="col-lg-6">
            <div class="service-content">
              <div class="service-icon mb-4">
                <i class="fas fa-file-invoice-dollar fa-3x text-primary"></i>
              </div>
              <h2 class="h3 mb-4">{{ $t('services.tax') }}</h2>
              <ul class="list-unstyled">
                <li class="mb-3">
                  <i class="fas fa-check text-primary me-2"></i>
                  Soliq maslahatlar
                </li>
                <li class="mb-3">
                  <i class="fas fa-check text-primary me-2"></i>
                  Soliq hisobotlarini tayyorlash
                </li>
                <li class="mb-3">
                  <i class="fas fa-check text-primary me-2"></i>
                  Soliq tekshiruvlariga tayyorgarlik
                </li>
                <li class="mb-3">
                  <i class="fas fa-check text-primary me-2"></i>
                  Soliq optimizatsiyasi
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-6">
            <img src="../assets/buxgal1.jpg" alt="Tax Advisory" class="img-fluid rounded shadow">
          </div>
        </div>

        <!-- Audit -->
        <div class="service-item row align-items-center mb-5">
          <div class="col-lg-6">
            <div class="service-content">
              <div class="service-icon mb-4">
                <i class="fas fa-search-dollar fa-3x text-primary"></i>
              </div>
              <h2 class="h3 mb-4">{{ $t('services.audit') }}</h2>
              <ul class="list-unstyled">
                <li class="mb-3">
                  <i class="fas fa-check text-primary me-2"></i>
                  Ichki audit tekshiruvi
                </li>
                <li class="mb-3">
                  <i class="fas fa-check text-primary me-2"></i>
                  Moliyaviy audit
                </li>
                <li class="mb-3">
                  <i class="fas fa-check text-primary me-2"></i>
                  Soliq auditi
                </li>
                <li class="mb-3">
                  <i class="fas fa-check text-primary me-2"></i>
                  Maxsus audit tekshiruvlari
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-6">
            <img src="../assets/buxgal2.jpg" alt="Audit Services" class="img-fluid rounded shadow">
          </div>
        </div>

        <!-- Konsalting -->
        <div class="service-item row align-items-center mb-5 flex-row-reverse">
          <div class="col-lg-6">
            <div class="service-content">
              <div class="service-icon mb-4">
                <i class="fas fa-handshake fa-3x text-primary"></i>
              </div>
              <h2 class="h3 mb-4">{{ $t('services.consulting') }}</h2>
              <ul class="list-unstyled">
                <li class="mb-3">
                  <i class="fas fa-check text-primary me-2"></i>
                  Biznes rejalashtirish
                </li>
                <li class="mb-3">
                  <i class="fas fa-check text-primary me-2"></i>
                  Moliyaviy tahlil
                </li>
                <li class="mb-3">
                  <i class="fas fa-check text-primary me-2"></i>
                  Biznes jarayonlarini optimizatsiya qilish
                </li>
                <li class="mb-3">
                  <i class="fas fa-check text-primary me-2"></i>
                  Strategik rivojlanish maslahatlar
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-6">
            <img src="../assets/buxgal3.jpg" alt="Business Consulting" class="img-fluid rounded shadow">
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="cta bg-light py-5">
      <div class="container text-center">
        <h2 class="mb-4">Biznes maslahatiga muhtojmisiz?</h2>
        <p class="lead mb-4">Professional jamoamiz sizning biznesingizga yordam berishga tayyor</p>
        <div class="text-center mt-4">
          <button class="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#consultationModal">Bepul konsultatsiya olish</button>
        </div>
      </div>
    </section>
  </div>
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
                <option v-for="service in services.items" :key="service.title" :value="service.title">
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
import { servicesData } from '../data/services'

export default {
  name: 'ServicesView',
  data() {
    return {
      services: servicesData,
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
.page-header {
  background: linear-gradient(135deg, #42b983 0%, #2c3e50 100%);
}

.service-item {
  padding: 2rem 0;
  border-bottom: 1px solid #eee;
}

.service-item:last-child {
  border-bottom: none;
}

.service-icon {
  color: #42b983;
}

.service-content {
  padding: 2rem;
}

.btn-primary {
  background-color: #42b983;
  border-color: #42b983;
}

.btn-primary:hover {
  background-color: #2c3e50;
  border-color: #2c3e50;
}

.text-primary {
  color: #42b983 !important;
}

img {
  max-width: 100%;
  height: auto;
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
</style>
