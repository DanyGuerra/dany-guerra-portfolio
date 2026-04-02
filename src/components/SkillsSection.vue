<script setup lang="ts">
import { useLanguage } from '../composables/useLanguage';

const { t } = useLanguage();
</script>

<template>
  <section id="skills" class="skills-section">
    <div class="container">
      <h2 class="section-title center"><span class="mono">03.</span> {{ t.skills.title }}</h2>

      <div class="skills-grid">
        <div v-for="(skills, category) in t.skills.categories" :key="category" class="skill-category">
          <h3 class="category-title">{{ category }}</h3>
          <ul class="skill-list">
            <li v-for="skill in skills" :key="skill" class="skill-item mono">
              <span class="bullet">▹</span>
              <span class="skill-text">{{ skill }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills-section {
  padding: 100px 0;
  max-width: 900px;
  margin: 0 auto;
}

.section-title {
  display: flex;
  align-items: center;
  font-size: clamp(26px, 5vw, 32px);
  margin-bottom: 40px;
  color: var(--text-main);
}

.section-title::after {
  content: "";
  display: block;
  width: 300px;
  height: 1px;
  background: var(--border);
  margin-left: 20px;
}

.number {
  color: var(--primary);
  font-size: 1.5rem;
  margin-right: 10px;
  font-weight: 400;
}

.skills-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
}

.skill-category {
  background: var(--glass-card-bg);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  padding: 2.5rem 2rem;
  border-radius: 16px;
  border: 1px solid var(--border);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  transition: transform 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease;
  flex: 1 1 300px;
  max-width: 450px;
  width: 100%;
}

.skill-category:hover {
  border-color: var(--primary);
  transform: translateY(-8px);
  box-shadow: 0 15px 40px var(--primary-hover-bg);
}

.category-title {
  font-size: 1.2rem;
  color: var(--text-main);
  margin-bottom: 1.5rem;
  border-bottom: 1px solid var(--border);
  padding-bottom: 0.5rem;
  display: inline-block;
}

.skill-list {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}

.skill-item {
  display: flex;
  align-items: center;
  font-size: 0.95rem;
  color: var(--text-main);
  opacity: 0.8;
  line-height: 1.5;
  transition: all 0.3s ease;
  padding: 6px 10px;
  border-radius: 8px;
  margin-left: -10px;
}

.skill-item:hover {
  color: var(--primary);
  opacity: 1;
  background: var(--primary-hover-bg);
  transform: translateX(8px);
}

.bullet {
  color: var(--primary);
  margin-right: 12px;
  font-size: 0.8rem;
  line-height: 1;
}

.skill-text {
  position: relative;
  top: 1px;
}

@media (max-width: 768px) {
  .section-title::after {
    display: none;
  }


  .skills-section {
    padding: 60px 0;
  }
}
</style>
