<script setup lang="ts">
import NavBar from './components/NavBar.vue';
import HeroSection from './components/HeroSection.vue';
import ExperienceSection from './components/ExperienceSection.vue';
import ProjectsSection from './components/ProjectsSection.vue';
import SkillsSection from './components/SkillsSection.vue';
import ContactSection from './components/ContactSection.vue';
import ThreeBackground from './components/ThreeBackground.vue';
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
        <p class="mono text-muted">© {{ new Date().getFullYear() }} Dany Guerra</p>
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

.text-muted {
  color: var(--text-muted);
  font-size: 0.8rem;
}
</style>
