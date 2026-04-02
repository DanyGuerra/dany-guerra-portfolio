<script setup lang="ts">
import { useLanguage } from '../composables/useLanguage';
import BaseButton from './BaseButton.vue';

const { t } = useLanguage();
</script>

<template>
  <section id="contact" class="contact-section">
    <div class="container contact-container">
      <div class="contact-box">
        <p class="mono number">04. {{ t.contact.number.split('. ')[1] }}</p>
        <h2 class="title">{{ t.contact.title }}</h2>

        <p class="description">
          {{ t.contact.desc }}
        </p>

        <BaseButton href="mailto:ld.ramirezguerra@outlook.com" variant="primary" class="email-btn">
          {{ t.contact.btn }}
        </BaseButton>

        <div class="social-links">
          <a :href="t.contact.socials.github" target="_blank" aria-label="GitHub">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"
              class="feather feather-github">
              <path
                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <a :href="t.contact.socials.linkedin" target="_blank" aria-label="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"
              class="feather feather-linkedin">
              <path
                d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z">
              </path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-section {
  padding: 100px 0;
  margin: 0 auto;
  max-width: 600px;
  text-align: center;
}

.contact-box {
  background: var(--glass-card-bg);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  padding: 4rem 2rem;
  border-radius: 16px;
  border: 1px solid var(--border);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 600px;
  margin: 0 auto;
  transition: transform 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease;
}

.contact-box:hover {
  border-color: var(--primary);
  transform: translateY(-8px);
  box-shadow: 0 15px 40px var(--primary-hover-bg);
}

.number {
  color: var(--primary);
  margin-bottom: 20px;
}

.title {
  font-size: clamp(40px, 5vw, 60px);
  color: var(--text-main);
  font-weight: 700;
  margin-bottom: 20px;
}

.description {
  margin-bottom: 40px;
  color: var(--text-main);
  font-size: 1.1rem;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
}

.social-links {
  margin-top: 40px;
  display: flex;
  justify-content: center;
  gap: 30px;
}

.social-links a {
  color: var(--text-main); /* Brighter initial color */
  transition: all 0.2s ease;
}

.social-links a:hover {
  color: var(--primary);
  transform: translateY(-5px) scale(1.1);
}

@media (max-width: 768px) {
  .contact-section {
    padding: 60px 0;
  }

  .title {
    font-size: 40px;
  }
}
</style>
