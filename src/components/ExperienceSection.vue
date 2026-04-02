<script setup lang="ts">
import { ref } from 'vue';
import { useLanguage } from '../composables/useLanguage';

const { t } = useLanguage();
const activeTab = ref(0);
</script>

<template>
  <section id="experience" class="experience-section">
    <div class="container">
      <h2 class="section-title"><span class="mono">01.</span> {{ t.experience.title }}</h2>

      <div class="experience-tabs">
        <!-- Tab List -->
        <div class="tab-list" role="tablist" aria-label="Job History">
          <button v-for="(job, index) in t.experience.jobs" :key="index" :id="`tab-${index}`" role="tab"
            :aria-selected="activeTab === index" :aria-controls="`panel-${index}`" class="tab-btn mono"
            :class="{ active: activeTab === index }" @click="activeTab = index">
            {{ job.company }}
          </button>
        </div>

        <!-- Tab Panels -->
        <div class="tab-panels">
          <div v-for="(job, index) in t.experience.jobs" :key="index" :id="`panel-${index}`" role="tabpanel"
            :aria-labelledby="`tab-${index}`" class="tab-panel" v-show="activeTab === index">
            <div class="job-card">
              <div class="job-header">
                <h3 class="job-title">{{ job.role }} <span class="company-highlight">@ {{ job.company }}</span></h3>
                <p class="job-period mono">{{ job.period }}</p>
              </div>

              <ul class="job-description">
                <li v-for="(item, i) in job.description" :key="i">{{ item }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.experience-section {
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

.job-description {
  color: var(--text-dim);
}

.job-card {
  display: flex;
  flex-direction: column;
  gap: 15px;
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

.experience-tabs {
  display: flex;
  gap: 4rem;
  background: var(--glass-card-bg);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  padding: 3rem;
  border-radius: 16px;
  border: 1px solid var(--border);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  transition: transform 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease;
}

.experience-tabs:hover {
  border-color: var(--primary);
  transform: translateY(-8px);
  box-shadow: 0 15px 40px var(--primary-hover-bg);
}

/* Tabs */
.tab-list {
  position: relative;
  width: max-content;
  display: flex;
  flex-direction: column;
  border-left: 2px solid var(--border);
  white-space: nowrap;
}

.tab-btn {
  height: 42px;
  padding: 0 20px;
  color: var(--text-main);
  opacity: 0.7;
  transition: var(--transition-fast);
  text-align: left;
}

.tab-btn:hover,
.tab-btn.active {
  color: var(--primary);
  opacity: 1;
  background: var(--primary-hover-bg);
}

.highlight {
  position: absolute;
  top: 0;
  left: -2px;
  width: 2px;
  height: 42px;
  background: var(--primary);
  transition: transform var(--transition-fast);
}

/* Panel */
.tab-panel {
  flex: 1;
  background: transparent;
  padding: 0;
  border-radius: 8px;
  animation: fadeIn 0.4s ease-out;
  border: 1px solid transparent;
  transition: all 0.3s ease;
}

.tab-panel:hover {
  transform: translateY(-2px);
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(5px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.role-title {
  font-size: 1.5rem;
  color: var(--text-main);
  margin-bottom: 0.5rem;
}

.company {
  color: var(--primary);
}

.period {
  font-size: 0.9rem;
  color: var(--text-muted);
  margin-bottom: 1.5rem;
}

.job-desc li {
  position: relative;
  padding-left: 30px;
  margin-bottom: 15px;
  color: var(--text-dim);
  font-size: 1rem;
}

.job-desc li::before {
  content: "▹";
  position: absolute;
  left: 0;
  color: var(--primary);
}

@media (max-width: 768px) {
  .experience-tabs {
    flex-direction: column;
    gap: 2rem;
    padding: 2rem 1rem;
  }

  .experience-section {
    padding: 60px 0;
    /* Reduced padding */
  }

  .tab-list {
    flex-direction: row;
    overflow-x: auto;
    width: 100%;
    border-left: none;
    border-bottom: 2px solid var(--border);
    margin-bottom: 2rem;
    padding-bottom: 5px;
    gap: 0;

    scrollbar-width: thin;
    scrollbar-color: var(--primary) var(--bg-card);
  }

  .tab-list::-webkit-scrollbar {
    height: 4px;
    /* Visible thin scrollbar */
    display: block;
  }

  .tab-list::-webkit-scrollbar-track {
    background: var(--bg-card);
    border-radius: 2px;
  }

  .tab-list::-webkit-scrollbar-thumb {
    background: var(--primary);
    border-radius: 2px;
  }

  .tab-btn {
    flex: 0 0 auto;
    /* Do not stretch, allow overflow */
    border-left: none;
    margin-bottom: -2px;
    white-space: nowrap;
    padding: 0 20px;
    /* Ensure clickability */
  }

  .tab-btn.active {
    background: transparent;
    color: var(--primary);
    border-bottom: 2px solid var(--primary);
    position: relative;
    /* Ensure it sits on top */
    z-index: 2;
  }

  .highlight {
    display: none;
    /* Hide confusing vertical highlight on mobile */
  }

  .section-title::after {
    width: 100%;
    /* Flexible width */
    display: none;
    /* Often cleaner without line on mobile */
  }
}
</style>
