<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container position-relative">
      <router-link class="navbar-brand" to="/">Meral Consulting</router-link>

      <div class="d-flex align-items-center">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>
        
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav me-3">
            <li class="nav-item">
              <router-link class="nav-link" to="/">{{ $t('nav.home') }}</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/services">{{ $t('nav.services') }}</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about">{{ $t('nav.about') }}</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/contact">{{ $t('nav.contact') }}</router-link>
            </li>
          </ul>
        </div>

        <div class="language-selector">
          <div class="dropdown">
            <button class="btn dropdown-toggle" type="button" id="languageDropdown" data-bs-toggle="dropdown">
              <i class="fas fa-globe me-2"></i>
              <span>{{ currentLanguage }}</span>
            </button>
            <ul class="dropdown-menu dropdown-menu-end">
              <li v-for="lang in languages" :key="lang.code">
                <a class="dropdown-item" href="#" @click="changeLanguage(lang.code)">
                  <span>{{ lang.name }}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </nav>

  <router-view />
</template>

<script>
import { onMounted } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import '@fortawesome/fontawesome-free/css/all.min.css'
import { commonData } from './data/common'

export default {
  name: 'App',
  data() {
    return {
      ...commonData,
      languages: [
        { code: 'uz', name: 'O\'zbekcha' },
        { code: 'ru', name: 'Русский' },
        { code: 'en', name: 'English' }
      ]
    }
  },
  computed: {
    currentLanguage() {
      const lang = this.languages.find(l => l.code === this.$i18n.locale)
      return lang ? lang.name : ''
    }
  },
  methods: {
    changeLanguage(code) {
      this.$i18n.locale = code
    },
    loadTawkTo() {
      var Tawk_API = Tawk_API || {};
      var Tawk_LoadStart = new Date();
      (function(){
        var s1 = document.createElement("script"),
            s0 = document.getElementsByTagName("script")[0];
        s1.async = true;
        s1.src = 'https://embed.tawk.to/YOUR_TAWK_TO_ID/default';
        s1.charset = 'UTF-8';
        s1.setAttribute('crossorigin','*');
        s0.parentNode.insertBefore(s1,s0);
      })();
    }
  },
  mounted() {
    this.loadTawkTo();
  }
}
</script>

<style>
:root {
  --primary-gradient: linear-gradient(135deg, #6366f1 0%, #3b82f6 100%);
  --glass-bg: rgba(255, 255, 255, 0.9);
  --glass-border: rgba(99, 102, 241, 0.2);
}

body {
  background: #ffffff;
  color: #1e293b;
  min-height: 100vh;
}

#app {
  font-family: 'Segoe UI', system-ui, sans-serif;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.navbar {
  background: var(--glass-bg) !important;
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--glass-border);
  padding: 1rem 0;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
}

.language-selector {
  position: relative;
  padding-left: 1.5rem;
  margin-left: 1.5rem;
}

.language-selector::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  height: 24px;
  width: 2px;
  background: var(--glass-border);
}

.language-selector .btn {
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  color: #1e293b;
  padding: 0.6rem 1.2rem;
  font-weight: 500;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.language-selector .btn:hover {
  background: var(--primary-gradient);
  color: white;
  border-color: transparent;
  box-shadow: 0 4px 12px rgba(99, 102, 241, 0.2);
}

.language-selector .btn:hover .fa-globe {
  transform: rotate(20deg);
}

.language-selector .fa-globe {
  transition: transform 0.3s ease;
  font-size: 1rem;
  color: #6366f1;
}

.language-selector .btn:hover .fa-globe {
  color: white;
}

.language-selector .dropdown-menu {
  min-width: 160px;
  background: var(--glass-bg);
  backdrop-filter: blur(10px);
  border: 1px solid var(--glass-border);
  margin-top: 0.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  right: 0;
  left: auto;
}

.language-selector .dropdown-item {
  color: #1e293b;
  padding: 0.7rem 1rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  transition: all 0.2s ease;
}

.language-selector .dropdown-item:hover {
  background: var(--primary-gradient);
  color: white;
  transform: translateX(4px);
}

@media (max-width: 991px) {
  .language-selector {
    margin-left: 1rem;
    padding-left: 1rem;
  }

  .language-selector::before {
    height: 20px;
  }

  .language-selector .btn {
    padding: 0.4rem 0.8rem;
    font-size: 0.9rem;
  }
  
  .navbar-brand {
    font-size: 1.2rem;
  }

  .navbar-collapse {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: var(--glass-bg);
    padding: 1rem;
    border-radius: 0 0 1rem 1rem;
    border: 1px solid var(--glass-border);
    border-top: none;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
}

.navbar-brand {
  font-weight: 700;
  font-size: 1.5rem;
  background: var(--primary-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all 0.3s ease;
}

.navbar-brand:hover {
  transform: scale(1.05);
}

.nav-link {
  color: #1e293b !important;
  font-weight: 500;
  position: relative;
  padding: 0.5rem 1rem;
  margin: 0 0.25rem;
  transition: all 0.3s ease;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background: var(--primary-gradient);
  transition: all 0.3s ease;
  transform: translateX(-50%);
}

.nav-link:hover::after,
.nav-link.router-link-active::after {
  width: 100%;
}

.navbar-toggler {
  border: none;
  background: var(--glass-bg);
  padding: 0.5rem;
}

.navbar-toggler-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba(30, 41, 59, 0.8)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
}

.dropdown-menu {
  background: var(--glass-bg);
  backdrop-filter: blur(10px);
  border: 1px solid var(--glass-border);
  padding: 0.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.dropdown-item {
  color: #1e293b;
  transition: all 0.3s ease;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
}

.dropdown-item:hover {
  background: var(--primary-gradient);
  color: #fff;
  transform: translateX(5px);
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.router-view-enter-active {
  animation: fadeIn 0.5s ease-out;
}

/* Add margin-top to router-view to prevent content from hiding under fixed navbar */
#app > :nth-child(2) {
  margin-top: 80px;
}
</style>
