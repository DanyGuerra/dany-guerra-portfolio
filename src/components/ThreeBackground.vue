<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import * as THREE from 'three';

const container = ref<HTMLElement | null>(null);

let scene: THREE.Scene;
let camera: THREE.PerspectiveCamera;
let renderer: THREE.WebGLRenderer;
let stars: THREE.Points;
let animationFrameId: number;
let observer: MutationObserver;

const themes = {
  // Dark Mode Palettes
  dark: {
    fog: 0x0f1115,
    green: 0x00dc82,
    blue: 0x3b82f6,
    purple: 0xa855f7,
    orange: 0xf97316
  },
  // Light Mode Palettes
  light: {
    fog: 0xe2e8f0,
    green: 0x047857,
    blue: 0x1e40af,
    purple: 0x7e22ce,
    orange: 0xc2410c
  }
};

const updateThemeColors = () => {
  const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
  const colorMode = document.documentElement.getAttribute('data-color') || 'green';
  const theme = isDark ? themes.dark : themes.light;

  if (scene && scene.fog) {
    // @ts-ignore
    scene.fog.color.setHex(theme.fog);
  }

  if (stars && stars.material instanceof THREE.PointsMaterial) {
    // @ts-ignore
    const starColor = theme[colorMode] || theme.green;
    stars.material.color.setHex(starColor);
  }
};

const init = () => {
  if (!container.value) return;

  scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x0f1115, 0.0005);

  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 1;

  renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  container.value.appendChild(renderer.domElement);

  const particlesGeometry = new THREE.BufferGeometry();
  const particlesCount = 5000;
  const posArray = new Float32Array(particlesCount * 3);

  for (let i = 0; i < particlesCount * 3; i++) {
    posArray[i] = (Math.random() - 0.5) * 5;
  }

  particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

  const material = new THREE.PointsMaterial({
    size: 0.008,
    color: 0x00dc82,
    transparent: true,
    opacity: 0.8,
  });

  stars = new THREE.Points(particlesGeometry, material);
  scene.add(stars);

  updateThemeColors();

  observer = new MutationObserver(updateThemeColors);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['data-theme', 'data-color']
  });

  animate();
  window.addEventListener('resize', onWindowResize);
};

const animate = () => {
  animationFrameId = requestAnimationFrame(animate);

  if (stars) {
    stars.rotation.y += 0.0005;
    stars.rotation.x += 0.0002;
  }

  renderer.render(scene, camera);
};

const onWindowResize = () => {
  if (!camera || !renderer) return;
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
};

onMounted(() => {
  init();
});

onUnmounted(() => {
  if (animationFrameId) cancelAnimationFrame(animationFrameId);
  if (observer) observer.disconnect();
  window.removeEventListener('resize', onWindowResize);
  if (renderer) renderer.dispose();
});
</script>

<template>
  <div ref="container" class="three-bg"></div>
</template>

<style scoped>
.three-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  pointer-events: none;
  background: var(--bg-gradient);
}
</style>
