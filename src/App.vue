<script setup lang="ts">
import { onMounted } from 'vue';
import NavBar from './components/NavBar.vue';
import HeroSection from './components/HeroSection.vue';
import ExperienceSection from './components/ExperienceSection.vue';
import ProjectsSection from './components/ProjectsSection.vue';
import SkillsSection from './components/SkillsSection.vue';
import ContactSection from './components/ContactSection.vue';
import ThreeBackground from './components/ThreeBackground.vue';

// Scroll reveal global
onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
  );

  document.querySelectorAll('section, .project-card, .skill-category, .contact-box').forEach((el) => {
    el.classList.add('reveal');
    observer.observe(el);
  });
});
</script>

<template>
  <div class="app-wrapper">
    <ThreeBackground />
    <!-- Navigation -->
    <NavBar />

    <main>
      <HeroSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </main>

    <footer class="footer">
      <div class="container">
        <div class="footer-pill">
          <p class="mono text-enhanced">© {{ new Date().getFullYear() }} Dany Guerra</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.app-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}

.footer {
  padding: var(--spacing-lg) 0;
  text-align: center;
  margin-top: auto;
  margin-bottom: 20px;
}

.footer-pill {
  display: inline-block;
  background: var(--nav-bg-scrolled);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  padding: 10px 24px;
  border-radius: 50px;
  border: 1px solid var(--border);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, border-color 0.3s ease;
}

.footer-pill:hover {
  transform: translateY(-2px);
  border-color: var(--primary);
}

.text-enhanced {
  color: var(--text-main);
  font-size: 0.85rem;
  margin: 0;
}
</style>
