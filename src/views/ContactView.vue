<template>
  <div class="contact-page">
    <!-- Page Header -->
    <section class="page-header bg-primary text-white py-5">
      <div class="container">
        <h1 class="display-4">{{ $t('nav.contact') }}</h1>
        <p class="lead">Biz bilan bog'laning va professional maslahat oling</p>
      </div>
    </section>

    <!-- Contact Info & Form -->
    <section class="contact-section py-5">
      <div class="container">
        <div class="row g-5">
          <!-- Contact Information -->
          <div class="col-lg-4">
            <div class="contact-info">
              <h2 class="h3 mb-4">Bog'lanish uchun</h2>
              
              <div class="contact-item mb-4">
                <div class="d-flex align-items-center mb-3">
                  <i class="fas fa-map-marker-alt fa-2x text-primary me-3"></i>
                  <h3 class="h5 mb-0">Manzil</h3>
                </div>
                <p class="ms-5">Toshkent shahri, Chilonzor tumani, Bunyodkor ko'chasi, 12-uy</p>
              </div>

              <div class="contact-item mb-4">
                <div class="d-flex align-items-center mb-3">
                  <i class="fas fa-phone fa-2x text-primary me-3"></i>
                  <h3 class="h5 mb-0">Telefon</h3>
                </div>
                <p class="ms-5">
                  <a href="tel:+998901234567" class="text-decoration-none">+998 90 123 45 67</a><br>
                  <a href="tel:+998901234568" class="text-decoration-none">+998 90 123 45 68</a>
                </p>
              </div>

              <div class="contact-item mb-4">
                <div class="d-flex align-items-center mb-3">
                  <i class="fas fa-envelope fa-2x text-primary me-3"></i>
                  <h3 class="h5 mb-0">Email</h3>
                </div>
                <p class="ms-5">
                  <a href="mailto:info@meral.uz" class="text-decoration-none">info@meral.uz</a><br>
                  <a href="mailto:support@meral.uz" class="text-decoration-none">support@meral.uz</a>
                </p>
              </div>

              <div class="contact-item">
                <div class="d-flex align-items-center mb-3">
                  <i class="fas fa-clock fa-2x text-primary me-3"></i>
                  <h3 class="h5 mb-0">Ish vaqti</h3>
                </div>
                <p class="ms-5">
                  Dushanba - Juma: 9:00 - 18:00<br>
                  Shanba: 10:00 - 15:00<br>
                  Yakshanba: Dam olish kuni
                </p>
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="col-lg-8">
            <div class="contact-form bg-light p-4 p-md-5 rounded shadow-sm">
              <h2 class="h3 mb-4">Xabar yuborish</h2>
              <form @submit.prevent="handleSubmit">
                <div class="row g-4">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="name" class="form-label">Ismingiz</label>
                      <input type="text" class="form-control" id="name" v-model="form.name" required>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="phone" class="form-label">Telefon raqamingiz</label>
                      <input type="tel" class="form-control" id="phone" v-model="form.phone" required>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-group">
                      <label for="email" class="form-label">Email</label>
                      <input type="email" class="form-control" id="email" v-model="form.email" required>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-group">
                      <label for="subject" class="form-label">Mavzu</label>
                      <input type="text" class="form-control" id="subject" v-model="form.subject" required>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-group">
                      <label for="message" class="form-label">Xabar matni</label>
                      <textarea class="form-control" id="message" rows="5" v-model="form.message" required></textarea>
                    </div>
                  </div>
                  <div class="col-12">
                    <button type="submit" class="btn btn-primary btn-lg">Yuborish</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Map Section -->
    <section class="map-section py-5">
      <div class="container">
        <h2 class="h3 text-center mb-4">Bizning Manzil</h2>
        <div class="map-container rounded shadow-sm overflow-hidden">
          <iframe 
            src="https://yandex.com/map-widget/v1/?ll=69.204509%2C41.285121&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1MzAwMDE0MhJK0KPQt9Cx0LXQutC40YHRgtC%2B0L0sINCi0L7RiNC60LXQvdGCLCDQp9C40LvQvtC90LfQvtGAINC00LjRgdGC0YDQuNC60YLQuCIKDfBQR0IV4ltCQg%3D%3D&z=13" 
            width="100%" 
            height="400" 
            frameborder="0"
            style="border: 1px solid #e9ecef;"
            allowfullscreen>
          </iframe>
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
</template>

<script>
import { contactData } from '../data/contact'

export default {
  name: 'ContactView',
  data() {
    return {
      ...contactData,
      form: {
        name: '',
        phone: '',
        email: '',
        subject: '',
        message: ''
      }
    }
  },
  methods: {
    handleSubmit() {
      // Form submission logic here
      console.log('Form submitted:', this.form)
    }
  }
}
</script>

<style scoped>
.page-header {
  background: linear-gradient(135deg, #42b983 0%, #2c3e50 100%);
}

.contact-item a {
  color: #2c3e50;
}

.contact-item a:hover {
  color: #42b983;
}

.form-control:focus {
  border-color: #42b983;
  box-shadow: 0 0 0 0.2rem rgba(66, 185, 131, 0.25);
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

.map-container {
  position: relative;
  width: 100%;
  height: 400px;
  background-color: #f8f9fa;
}

.map-container iframe {
  position: relative;
  width: 100%;
  height: 100%;
  border: none;
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
