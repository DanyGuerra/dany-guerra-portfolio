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

      <!-- Scroll Indicator -->
      <div class="scroll-indicator">
        <div class="mouse">
          <div class="wheel"></div>
        </div>
        <div class="arrows">
          <span class="arrow"></span>
          <span class="arrow"></span>
        </div>
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
  position: relative; /* For the scroll indicator */
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
  position: relative;
  display: inline-block;
}

.name-text::before {
  content: "Dany Guerra.";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: transparent;
  text-shadow: 0 0 40px var(--primary-glow);
  pointer-events: none;
  z-index: -1;
  animation: pulse 4s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 0.5;
  }
  50% {
    opacity: 1;
  }
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
  margin-bottom: 80px; /* Make room for scroll indicator */
}

/* Scroll Indicator Styles */
.scroll-indicator {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  opacity: 0.7;
  transition: opacity 0.3s ease;
}

.scroll-indicator:hover {
  opacity: 1;
}

.mouse {
  width: 26px;
  height: 42px;
  border-radius: 15px;
  border: 2px solid var(--text-muted);
  display: flex;
  justify-content: center;
  padding-top: 6px;
}

.wheel {
  width: 4px;
  height: 8px;
  border-radius: 2px;
  background-color: var(--primary);
  animation: scroll 2s cubic-bezier(0.15, 0.41, 0.69, 0.94) infinite;
}

@keyframes scroll {
  0% { transform: translateY(0); opacity: 1; }
  100% { transform: translateY(15px); opacity: 0; }
}

.arrows {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.arrow {
  display: block;
  width: 10px;
  height: 10px;
  border-right: 2px solid var(--primary);
  border-bottom: 2px solid var(--primary);
  transform: rotate(45deg);
  margin: -3px 0;
  animation: arrow-scroll 2s infinite;
}

.arrow:nth-child(2) {
  animation-delay: -0.2s;
}

@keyframes arrow-scroll {
  0% { opacity: 0; transform: rotate(45deg) translate(-5px, -5px); }
  50% { opacity: 1; }
  100% { opacity: 0; transform: rotate(45deg) translate(5px, 5px); }
}

@media (max-width: 768px) {
  .hero-section {
    padding-top: 120px;
    align-items: flex-start;
  }
}
</style>
