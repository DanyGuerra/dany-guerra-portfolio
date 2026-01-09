<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { useThemeColor } from '../composables/useThemeColor';

const { currentColor, setColor, initColor } = useThemeColor();

const colors = [
  { name: 'red', value: '#ef4444' },
  { name: 'orange', value: '#f97316' },
  { name: 'yellow', value: '#eab308' },
  { name: 'green', value: '#10b981' },
  { name: 'teal', value: '#14b8a6' },
  { name: 'cyan', value: '#06b6d4' },
  { name: 'blue', value: '#3b82f6' },
  { name: 'indigo', value: '#6366f1' },
  { name: 'purple', value: '#a855f7' },
  { name: 'pink', value: '#ec4899' },
];

const isOpen = ref(false);

const handleSetColor = (color: string) => {
  setColor(color);
  isOpen.value = false;
};

const togglePicker = () => {
  isOpen.value = !isOpen.value;
};

const closeOnOutsideClick = (e: MouseEvent) => {
  const target = e.target as HTMLElement;
  if (!target.closest('.color-picker-wrapper')) {
    isOpen.value = false;
  }
};

onMounted(() => {
  initColor();
  document.addEventListener('click', closeOnOutsideClick);
});

onUnmounted(() => {
  document.removeEventListener('click', closeOnOutsideClick);
});
</script>

<template>
  <div class="color-picker-wrapper">
    <button class="palette-btn" @click.stop="togglePicker" aria-label="Choose Color">
      <div class="swatch current" :style="{ backgroundColor: colors.find(c => c.name === currentColor)?.value }"></div>
    </button>

    <div class="options-popover" :class="{ open: isOpen }">
      <button v-for="color in colors" :key="color.name" class="option-btn" @click="handleSetColor(color.name)"
        :aria-label="`Set color to ${color.name}`">
        <div class="swatch" :style="{ backgroundColor: color.value }"></div>
      </button>
    </div>
  </div>
</template>

<style scoped>
.color-picker-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.palette-btn {
  padding: 8px;
  border-radius: 50%;
  transition: var(--transition-fast);
  display: flex;
  justify-content: center;
  align-items: center;
}

.palette-btn:hover {
  background: var(--bg-card-hover);
}

.swatch {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 2px solid transparent;
}

.swatch.current {
  border: 1px solid var(--text-muted);
}

.options-popover {
  position: absolute;
  top: 120%;
  right: 0;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 12px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 8px;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: all var(--transition-fast);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  z-index: 102;
}

.options-popover.open {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.option-btn {
  padding: 6px;
  border-radius: 6px;
  transition: all 0.2s ease;
  display: flex;
  justify-content: center;
  align-items: center;
}

.option-btn:hover {
  background: var(--bg-card-hover);
  transform: scale(1.1);
}

@media (max-width: 768px) {
  .options-popover {
    right: auto;
    left: 50%;
    transform: translateX(-50%) translateY(10px);
  }

  .options-popover.open {
    transform: translateX(-50%) translateY(0);
  }
}
</style>
