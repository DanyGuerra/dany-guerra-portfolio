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
  background: var(--glass-card-bg);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  padding: 2.5rem 2rem;
  border-radius: 16px;
  border: 1px solid var(--border);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  transition: transform 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease;
  display: flex;
  flex-direction: column;
}

.project-card:hover {
  border-color: var(--primary);
  transform: translateY(-8px) scale(1.01);
  box-shadow: 0 20px 50px var(--primary-hover-bg);
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
  transition: transform 0.4s ease, color 0.3s ease;
}

.project-card:hover .folder-icon svg {
  transform: translateY(-4px) scale(1.1);
  filter: drop-shadow(0 0 8px var(--primary-glow));
}

.project-links {
  display: flex;
  gap: 14px;
}

.project-links a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 8px;
  border: 1px solid var(--border);
  background: var(--primary-hover-bg);
  color: var(--primary);
  transition: all 0.3s ease;
}

.project-links a svg {
  width: 16px;
  height: 16px;
  transition: transform 0.3s ease;
}

.project-links a:hover {
  border-color: var(--primary);
  background: var(--primary);
  color: var(--bg-dark);
  transform: translateY(-3px);
  box-shadow: 0 4px 12px var(--primary-glow);
}

.project-links a:hover svg {
  transform: rotate(-8deg);
}

.project-title {
  font-size: 1.4rem;
  color: var(--text-main);
  margin-bottom: 10px;
  transition: color 0.3s ease;
}

.project-card:hover .project-title {
  color: var(--primary);
}

.project-description {
  color: var(--text-muted);
  font-size: 0.95rem;
  line-height: 1.7;
  margin-bottom: 20px;
  padding-right: 3px;
  flex: 1;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: auto;
  padding-top: 1rem;
  border-top: 1px solid var(--border);
}

.tech-tag {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--primary);
  background: var(--primary-hover-bg);
  padding: 5px 14px;
  border-radius: 20px;
  transition: color 0.2s ease, background 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
  cursor: pointer;
  border: 1px solid var(--border);
  user-select: none;
}

.tech-tag:hover {
  color: var(--bg-dark);
  background: var(--primary);
  border-color: var(--primary);
  transform: translateY(-3px);
  box-shadow: 0 6px 16px var(--primary-glow);
  text-shadow: none;
}

.tech-tag:active {
  transform: translateY(-1px);
  box-shadow: 0 2px 8px var(--primary-glow);
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
