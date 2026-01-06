<script setup lang="ts">
import { useLanguage } from '../composables/useLanguage';

const { currentLanguage, setLanguage } = useLanguage();

const toggle = () => {
  setLanguage(currentLanguage.value === 'en' ? 'es' : 'en');
};
</script>

<template>
  <button @click="toggle" class="lang-btn mono"
    :aria-label="currentLanguage === 'en' ? 'Switch to Spanish' : 'Switch to English'">
    {{ currentLanguage === 'en' ? 'ES' : 'EN' }}
  </button>
</template>

<style scoped>
.lang-btn {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text-muted);
  transition: var(--transition-fast);
  padding: 4px 8px;
  border-radius: 4px;
}

.lang-btn:hover {
  color: var(--primary);
  background: var(--bg-card-hover);
}
</style>
