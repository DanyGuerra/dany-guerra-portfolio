<script setup lang="ts">
import { useLanguage } from '../composables/useLanguage';

const { t } = useLanguage();

</script>

<template>
  <section id="projects" class="projects-section">
    <div class="container">
      <h2 class="section-title"><span class="mono number">02.</span> {{ t.projects.title }}</h2>

      <div class="projects-grid">
        <div v-for="(project, index) in t.projects.list" :key="index" class="project-card">
          <div class="card-header">
            <div class="folder-icon">
              <!-- SVG Folder Icon -->
              <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-folder">
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
            </div>
            <div class="project-links">
              <a :href="project.githubLink" target="_blank" aria-label="GitHub Link">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  class="feather feather-github">
                  <path
                    d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22">
                  </path>
                </svg>
              </a>
              <a :href="project.projectLink" target="_blank" aria-label="External Link">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  class="feather feather-external-link">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            </div>
          </div>

          <h3 class="project-title">{{ project.title }}</h3>
          <p class="project-description">{{ project.description }}</p>

          <div class="project-tech mono">
            <span v-for="tech in project.tech" :key="tech" class="tech-tag">{{ tech }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects-section {
  padding: 100px 0;
}

.project-links {
  display: flex;
  justify-content: flex-start;
  gap: 10px;
}

.section-title {
  display: flex;
  align-items: center;
  font-size: clamp(26px, 5vw, 32px);
  margin-bottom: 40px;
  color: var(--text-main);
  max-width: 900px;
  margin: 0 auto 50px auto;
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

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  max-width: 1000px;
  margin: 0 auto;
}

.project-card {
  background: var(--bg-card);
  padding: 2rem 1.75rem;
  border-radius: 4px;
  transition: var(--transition-fast);
  display: flex;
  flex-direction: column;
}

.project-card:hover {
  background: var(--bg-card-hover);
  border: 1px solid var(--primary);
  transform: translateY(-2px);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
}

.folder-icon svg {
  width: 40px;
  height: 40px;
  color: var(--primary);
}

.project-links a svg {
  width: 20px;
  height: 20px;
  color: var(--primary);
  transition: var(--transition-fast);
}

.project-links a:hover svg {
  color: var(--text-main);
}

.project-title {
  font-size: 1.4rem;
  color: var(--text-main);
  margin-bottom: 10px;
}

.project-description {
  color: var(--text-dim);
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 20px;
  padding-right: 3px;
  flex: 1;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  font-size: 0.8rem;
  color: var(--text-muted);
}

.tech-tag {
  font-size: 0.8rem;
  color: var(--text-muted);
  transition: var(--transition-fast);
  cursor: default;
  border-bottom: 1px solid transparent;
  line-height: 1.4;
}

.tech-tag:hover {
  color: var(--primary);
  border-bottom-color: var(--primary);
}

@media (max-width: 768px) {
  .section-title::after {
    display: none;
  }

  .projects-section {
    padding: 60px 0;
  }

  .projects-grid {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
}
</style>
