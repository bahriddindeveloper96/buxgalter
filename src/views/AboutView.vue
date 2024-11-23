<template>
  <div class="about-page">
    <!-- Page Header -->
    <section class="page-header bg-primary text-white py-5">
      <div class="container">
        <h1 class="display-4">{{ $t('nav.about') }}</h1>
        <p class="lead">Professional jamoamiz bilan tanishing</p>
      </div>
    </section>

    <!-- Company Info -->
    <section class="company-info py-5">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <h2 class="mb-4">Bizning tariximiz</h2>
            <p class="lead mb-4">15 yildan ortiq tajribaga ega professional buxgalteriya va konsalting kompaniyasi</p>
            <p class="mb-4">
              Bizning kompaniyamiz 2008 yilda tashkil etilgan bo'lib, o'tgan yillar davomida minglab mijozlarga 
              professional xizmat ko'rsatib kelmoqda. Bizning asosiy maqsadimiz - mijozlarimizning moliyaviy 
              muvaffaqiyatiga ko'maklashish va ularning biznesini yangi bosqichga olib chiqishdir.
            </p>
            <div class="row g-4 mt-4">
              <div class="col-sm-6">
                <div class="d-flex align-items-center">
                  <i class="fas fa-check-circle text-primary fa-2x me-3"></i>
                  <div>
                    <h4 class="h5">Professional jamoa</h4>
                    <p class="mb-0">Tajribali mutaxassislar</p>
                  </div>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="d-flex align-items-center">
                  <i class="fas fa-clock text-primary fa-2x me-3"></i>
                  <div>
                    <h4 class="h5">Tezkor xizmat</h4>
                    <p class="mb-0">24/7 qo'llab-quvvatlash</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <img src="../assets/about-image.svg" alt="About Us" class="img-fluid rounded shadow">
          </div>
        </div>
      </div>
    </section>

    <!-- Our Values -->
    <section class="our-values bg-light py-5">
      <div class="container">
        <h2 class="text-center mb-5">Bizning qadriyatlarimiz</h2>
        <div class="row g-4">
          <div class="col-md-4">
            <div class="card h-100 border-0 shadow-sm">
              <div class="card-body text-center">
                <i class="fas fa-heart fa-3x text-primary mb-3"></i>
                <h3 class="card-title h4">Mijozga e'tibor</h3>
                <p class="card-text">
                  Har bir mijozning muvaffaqiyati bizning muvaffaqiyatimizdir
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card h-100 border-0 shadow-sm">
              <div class="card-body text-center">
                <i class="fas fa-shield-alt fa-3x text-primary mb-3"></i>
                <h3 class="card-title h4">Ishonchlilik</h3>
                <p class="card-text">
                  Mijozlar ma'lumotlarini maxfiy saqlash va himoya qilish
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card h-100 border-0 shadow-sm">
              <div class="card-body text-center">
                <i class="fas fa-chart-line fa-3x text-primary mb-3"></i>
                <h3 class="card-title h4">Rivojlanish</h3>
                <p class="card-text">
                  Doimiy o'sish va yangi bilimlarni o'zlashtirish
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="team py-5">
      <div class="container">
        <h2 class="text-center mb-5">Bizning jamoa</h2>
        <div class="row g-4">
          <div class="col-md-3">
            <div class="card team-member h-100 border-0 shadow-sm">
              <img src="../assets/team/member1.svg" class="card-img-top" alt="Team Member">
              <div class="card-body text-center">
                <h5 class="card-title">Aziz Karimov</h5>
                <p class="card-text text-muted">Bosh direktor</p>
                <div class="social-links">
                  <a href="#" class="text-primary me-2"><i class="fab fa-linkedin"></i></a>
                  <a href="#" class="text-primary"><i class="fab fa-telegram"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card team-member h-100 border-0 shadow-sm">
              <img src="../assets/team/member2.svg" class="card-img-top" alt="Team Member">
              <div class="card-body text-center">
                <h5 class="card-title">Malika Rahimova</h5>
                <p class="card-text text-muted">Bosh buxgalter</p>
                <div class="social-links">
                  <a href="#" class="text-primary me-2"><i class="fab fa-linkedin"></i></a>
                  <a href="#" class="text-primary"><i class="fab fa-telegram"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card team-member h-100 border-0 shadow-sm">
              <img src="../assets/team/member3.svg" class="card-img-top" alt="Team Member">
              <div class="card-body text-center">
                <h5 class="card-title">Jamshid Aliyev</h5>
                <p class="card-text text-muted">Soliq maslahatchisi</p>
                <div class="social-links">
                  <a href="#" class="text-primary me-2"><i class="fab fa-linkedin"></i></a>
                  <a href="#" class="text-primary"><i class="fab fa-telegram"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card team-member h-100 border-0 shadow-sm">
              <img src="../assets/team/member4.svg" class="card-img-top" alt="Team Member">
              <div class="card-body text-center">
                <h5 class="card-title">Nilufar Umarova</h5>
                <p class="card-text text-muted">Audit bo'limi boshlig'i</p>
                <div class="social-links">
                  <a href="#" class="text-primary me-2"><i class="fab fa-linkedin"></i></a>
                  <a href="#" class="text-primary"><i class="fab fa-telegram"></i></a>
                </div>
              </div>
            </div>
          </div>
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
import { aboutData } from '../data/about'

export default {
  name: 'AboutView',
  data() {
    return {
      ...aboutData
    }
  }
}
</script>

<style scoped>
.page-header {
  background: linear-gradient(135deg, #42b983 0%, #2c3e50 100%);
}

.card {
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
}

.team-member img {
  height: 200px;
  object-fit: cover;
}

.social-links a {
  text-decoration: none;
  font-size: 1.2rem;
}

.text-primary {
  color: #42b983 !important;
}

.bg-primary {
  background-color: #42b983 !important;
}

.btn-primary {
  background-color: #42b983;
  border-color: #42b983;
}

.btn-primary:hover {
  background-color: #2c3e50;
  border-color: #2c3e50;
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
