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
  background: var(--bg-card);
  padding: 2rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  border: 1px solid transparent;
  flex: 1 1 300px;
  max-width: 450px;
  width: 100%;
}

.skill-category:hover {
  background: var(--bg-card-hover);
  border-color: var(--border);
  transform: translateY(-5px);
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
  color: var(--text-muted);
  line-height: 1.5;
  transition: color 0.2s ease;
}

.skill-item:hover {
  color: var(--primary);
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
