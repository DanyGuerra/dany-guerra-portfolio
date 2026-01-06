<script setup lang="ts">
import { useLanguage } from '../composables/useLanguage';
import { onMounted, ref } from 'vue';
import BaseButton from './BaseButton.vue';

const { t } = useLanguage();
const typeValue = ref('');
const typeStatus = ref(false);
const typingSpeed = 100;
const erasingSpeed = 50;
const newTextDelay = 2000;
let phrasesIndex = 0;
let charIndex = 0;

const typeText = () => {
  const currentPhrases = t.value.hero.phrases;
  if (charIndex < currentPhrases[phrasesIndex].length) {
    if (!typeStatus.value) typeStatus.value = true;
    typeValue.value += currentPhrases[phrasesIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeText, typingSpeed);
  } else {
    typeStatus.value = false;
    setTimeout(eraseText, newTextDelay);
  }
};

const eraseText = () => {
  const currentPhrases = t.value.hero.phrases;
  if (charIndex > 0) {
    if (!typeStatus.value) typeStatus.value = true;
    typeValue.value = currentPhrases[phrasesIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseText, erasingSpeed);
  } else {
    typeStatus.value = false;
    phrasesIndex++;
    if (phrasesIndex >= currentPhrases.length) phrasesIndex = 0;
    setTimeout(typeText, typingSpeed + 1000);
  }
};

onMounted(() => {
  setTimeout(typeText, newTextDelay + 200);
});
</script>

<template>
  <section id="hero" class="hero-section">
    <div class="container">
      <p class="intro-text mono">{{ t.hero.intro }},</p>
      <p class="intro-text mono call-me-text">{{ t.hero.butCallMe }}</p>
      <h1 class="name-text">Dany Guerra.</h1>

      <div class="typewriter-container">
        <h2 class="role-text">
          <span class="static-prefix">{{ t.hero.rolePrefix }}</span>
          <span class="typed-text">{{ typeValue }}</span>
          <span class="cursor" :class="{ 'typing': typeStatus }">&nbsp;</span>
        </h2>
      </div>

      <p class="description">
        {{ t.hero.desc }}
      </p>

      <div class="cta-buttons">
        <BaseButton href="#projects" variant="primary">{{ t.hero.ctaWork }}</BaseButton>
        <BaseButton href="#contact" variant="outline">{{ t.hero.ctaContact }}</BaseButton>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding-top: var(--header-height);
}

.hero-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}

.intro-text {
  color: var(--primary);
  margin-bottom: var(--spacing-sm);
  font-size: clamp(1.1rem, 3vw, 1.4rem);
}

.call-me-text {
  color: var(--text-muted);
  font-weight: 300;

}

.name-text {
  font-size: clamp(50px, 10vw, 100px);
  font-weight: 800;
  color: var(--text-main);
  line-height: 1.1;
  margin-bottom: var(--spacing-xs);
}

.role-text {
  font-size: clamp(40px, 4vw, 50px);
  font-weight: 700;
  color: var(--text-muted);
  line-height: 1.1;
  margin-bottom: var(--spacing-md);
}

.typing {
  color: var(--text-muted);
}

.cursor {
  animation: blink 1s step-end infinite;
  color: var(--primary);
}

@keyframes blink {

  0%,
  100% {
    opacity: 1;
  }

  50% {
    opacity: 0;
  }
}

.description {
  max-width: 540px;
  font-size: 1.1rem;
  margin-bottom: 2.5rem;
}

.cta-buttons {
  display: flex;
  gap: var(--spacing-md);
}

@media (max-width: 768px) {
  .hero-section {
    padding-top: 120px;
    align-items: flex-start;
  }
}
</style>
