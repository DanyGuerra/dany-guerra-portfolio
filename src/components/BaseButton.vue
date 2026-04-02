<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  variant?: 'primary' | 'outline';
  href?: string;
  target?: string;
}>();

const isLink = computed(() => !!props.href);
</script>

<template>
  <component
    :is="isLink ? 'a' : 'button'"
    :href="href"
    :target="target"
    class="base-btn"
    :class="[`btn-${variant}`]"
  >
    <slot></slot>
  </component>
</template>

<style scoped>
.base-btn {
  padding: 0.75rem 1.5rem; /* Adjusted for consistency */
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 600;
  transition: var(--transition-fast);
  display: inline-block;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
}

.btn-primary {
  border: 1px solid var(--primary);
  color: var(--primary);
  background: var(--nav-bg-scrolled);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}

.btn-primary:hover {
  background: var(--primary-hover-bg);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px var(--primary-glow);
}

.btn-outline {
  border: 1px solid var(--text-muted);
  color: var(--text-main);
  background: var(--nav-bg-scrolled);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}

.btn-outline:hover {
  border-color: var(--text-main);
  transform: translateY(-2px);
  background: var(--bg-card-hover);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}
</style>
