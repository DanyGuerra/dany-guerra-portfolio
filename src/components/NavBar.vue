<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue';
import ThemeToggle from './ThemeToggle.vue';
import ColorPicker from './ColorPicker.vue';
import LanguageToggle from './LanguageToggle.vue';
import { useLanguage } from '../composables/useLanguage';

const { t } = useLanguage();
const isScrolled = ref(false);
const isMobileMenuOpen = ref(false);

const navLinks = computed(() => [
  { name: t.value.nav.experience, href: '#experience' },
  { name: t.value.nav.projects, href: '#projects' },
  { name: t.value.skills.title, href: '#skills' },
  { name: t.value.nav.contact, href: '#contact' }
]);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

const toggleMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <header class="navbar" :class="{ 'scrolled': isScrolled }">
    <div class="container navbar-content">
      <a href="#" class="logo text-gradient mono">&lt;DanyGuerra /&gt;</a>

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
      <button class="mobile-toggle" @click="toggleMenu" aria-label="Toggle Menu">
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
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
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

.navbar.scrolled {
  height: 70px;
  background: var(--nav-bg-scrolled);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid var(--nav-border-scrolled);
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
  /* Prevent wrapping */
  flex-grow: 1;
  /* Take up available space */
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
}

.nav-link:hover {
  color: var(--primary);
}

.nav-link span {
  color: var(--primary);
  margin-right: 0.25rem;
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
  top: -10px;
  /* More spacing */
}

.hamburger::after {
  bottom: -10px;
  /* More spacing */
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
  background: var(--bg-dark);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: translateX(100%);
  transition: transform var(--transition-smooth);
  z-index: 100;
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

@media (max-width: 960px) {
  .desktop-nav {
    display: none;
  }

  .mobile-toggle {
    display: block;
  }
}
</style>
