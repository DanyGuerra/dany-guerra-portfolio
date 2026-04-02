<script setup lang="ts">
import { ref, computed } from 'vue';
import ThemeToggle from './ThemeToggle.vue';
import ColorPicker from './ColorPicker.vue';
import LanguageToggle from './LanguageToggle.vue';
import Logo from './Logo.vue';
import { useLanguage } from '../composables/useLanguage';

const { t } = useLanguage();
const isMobileMenuOpen = ref(false);

const navLinks = computed(() => [
  { name: t.value.nav.experience, href: '#experience' },
  { name: t.value.nav.projects, href: '#projects' },
  { name: t.value.skills.title, href: '#skills' },
  { name: t.value.nav.contact, href: '#contact' }
]);

const toggleMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

</script>

<template>
  <header class="navbar">
    <div class="container navbar-content">
      <a href="#" class="logo-link" aria-label="Home">
        <Logo />
      </a>

      <!-- Desktop Menu -->
      <nav class="desktop-nav">
        <div class="nav-links">
          <a v-for="(link, index) in navLinks" :key="link.name" :href="link.href" class="nav-link">
            <span class="mono">0{{ index + 1 }}.</span> {{ link.name }}
          </a>
        </div>
        <div class="nav-buttons">
          <ColorPicker />
          <ThemeToggle />
          <LanguageToggle />
        </div>
      </nav>

      <!-- Mobile Toggle -->
      <button class="mobile-toggle" :class="{ 'open': isMobileMenuOpen }" @click="toggleMenu" aria-label="Toggle Menu">
        <span class="hamburger" :class="{ 'active': isMobileMenuOpen }"></span>
      </button>

      <!-- Mobile Menu -->
      <div class="mobile-menu" :class="{ 'open': isMobileMenuOpen }">
        <nav class="mobile-nav">
          <a v-for="(link, index) in navLinks" :key="link.name" :href="link.href" class="mobile-link"
            @click="isMobileMenuOpen = false">
            <span class="mono">0{{ index + 1 }}.</span> {{ link.name }}
          </a>
          <div class="mobile-toggle-wrapper">
            <ColorPicker />
            <ThemeToggle />
            <LanguageToggle />
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--header-height);
  z-index: 100;
  transition: all var(--transition-smooth);
  background: transparent;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
}

.mobile-nav {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

}

.nav-links {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.nav-buttons {
  display: flex;
  align-items: center;
}

.navbar-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}

.logo {
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: -0.5px;
  white-space: nowrap;
  flex-grow: 1;
}

.desktop-nav {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav-link {
  font-size: 0.9rem;
  color: var(--text-muted);
  transition: var(--transition-fast);
  position: relative;
  padding: 0.5rem 0;
  font-weight: 500;
}

.nav-link::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: var(--primary);
  transition: width 0.3s ease;
}

.nav-link:hover {
  color: var(--text-main);
}

.nav-link:hover::after {
  width: 100%;
}

.nav-link span {
  color: var(--primary);
  margin-right: 0.25rem;
  font-weight: 600;
}

.btn-outline {
  padding: 0.5rem 1rem;
  border: 1px solid var(--primary);
  color: var(--primary);
  border-radius: 4px;
  font-size: 0.9rem;
  transition: var(--transition-fast);
}

.btn-outline:hover {
  background: var(--primary-hover-bg);
}

.mobile-toggle {
  display: none;
  z-index: 101;
  padding: 12px;
}

.mobile-toggle.open {
  display: block;
}

.hamburger {
  display: block;
  width: 30px;
  height: 2px;
  background: var(--text-main);
  position: relative;
  transition: var(--transition-fast);
}

.hamburger::before,
.hamburger::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  background: var(--text-main);
  transition: var(--transition-fast);
}

.hamburger::before {
  top: -8px;
}

.hamburger::after {
  bottom: -8px;
}

.hamburger.active {
  background: transparent;
}

.hamburger.active::before {
  transform: rotate(45deg);
  top: 0;
}

.hamburger.active::after {
  transform: rotate(-45deg);
  bottom: 0;
}

/* Mobile Menu */
.mobile-menu {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  background: var(--nav-bg-scrolled);
  /* Semi-transparent for glass effect */
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: translateX(100%);
  transition: transform var(--transition-smooth);
  z-index: 99; /* Lower than toggle */
}

.mobile-menu.open {
  transform: translateX(0);
}

.mobile-link {
  display: block;
  font-size: 1.5rem;
  margin: 1.5rem 0;
  color: var(--text-main);
  text-align: center;
  font-weight: 600;
}

.mobile-link:hover {
  color: var(--primary);
}

.mobile-toggle-wrapper {
  display: flex;
  justify-content: center;
  gap: 2rem;
  align-items: center;
}

.mobile-btn {
  margin-top: 2rem;
  width: auto;
}

@media (max-width: 768px) {
  .desktop-nav {
    display: none;
  }

  .mobile-toggle {
    display: block;
  }
}
</style>
