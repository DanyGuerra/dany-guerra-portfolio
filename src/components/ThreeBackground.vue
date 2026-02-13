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
  dark: {
    fog: 0x0f1115,
    green: 0x00dc82,
    blue: 0x3b82f6,
    purple: 0xa855f7,
    orange: 0xf97316,
    red: 0xef4444,
    yellow: 0xeab308,
    teal: 0x14b8a6,
    cyan: 0x06b6d4,
    indigo: 0x6366f1,
    pink: 0xec4899
  },
  // Light Mode Palettes
  light: {
    fog: 0xe2e8f0,
    green: 0x047857,
    blue: 0x1e40af,
    purple: 0x7e22ce,
    orange: 0xc2410c,
    red: 0xb91c1c,
    yellow: 0xa16207,
    teal: 0x0f766e,
    cyan: 0x0e7490,
    indigo: 0x4338ca,
    pink: 0xbe185d
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

const createRockTexture = () => {
  const size = 64;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;

  const context = canvas.getContext('2d');
  if (context) {
    const items = 8;
    const center = size / 2;
    const radius = size / 3;

    context.beginPath();
    for (let i = 0; i < items; i++) {
      const angle = (i / items) * Math.PI * 2;
      const r = radius * (0.7 + Math.random() * 0.6);
      const x = center + Math.cos(angle) * r;
      const y = center + Math.sin(angle) * r;

      if (i === 0) context.moveTo(x, y);
      else context.lineTo(x, y);
    }
    context.closePath();
    context.fillStyle = '#ffffff';
    context.fill();
  }

  const texture = new THREE.CanvasTexture(canvas);
  return texture;
};


let initialX: Float32Array;
let initialY: Float32Array;
let initialZ: Float32Array;

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
  const particlesCount = 500000;
  const posArray = new Float32Array(particlesCount * 3);
  initialX = new Float32Array(particlesCount);
  initialY = new Float32Array(particlesCount);
  initialZ = new Float32Array(particlesCount);

  for (let i = 0; i < particlesCount * 3; i += 3) {
    posArray[i] = (Math.random() - 0.5) * 10;
    posArray[i + 1] = (Math.random() - 0.5) * 10;
    posArray[i + 2] = (Math.random() - 0.5) * 10;
    initialX[i / 3] = posArray[i];
    initialY[i / 3] = posArray[i + 1];
    initialZ[i / 3] = posArray[i + 2];
  }

  particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

  const material = new THREE.PointsMaterial({
    size: 0.007,
    color: 0x00dc82,
    transparent: true,
    opacity: 1,
    map: createRockTexture(),
    alphaTest: 0.5
  });

  stars = new THREE.Points(particlesGeometry, material);
  scene.add(stars);

  updateThemeColors();

  observer = new MutationObserver(updateThemeColors);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['data-theme', 'data-color']
  });

  window.addEventListener('mousemove', onMouseMove);
  animate();
  window.addEventListener('resize', onWindowResize);
};

let mouseX = 0;
let mouseY = 0;
let targetX = 0;
let targetY = 0;

const onMouseMove = (event: MouseEvent) => {
  mouseX = (event.clientX / window.innerWidth) * 2 - 1;
  mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
};

const animate = () => {
  animationFrameId = requestAnimationFrame(animate);

  if (stars && stars.geometry && stars.geometry.attributes.position) {
    stars.rotation.z += 0.0001;

    const positions = stars.geometry.attributes.position.array as Float32Array;
    const scrollY = window.scrollY;

    const vector = new THREE.Vector3(mouseX, mouseY, 0.5);
    vector.unproject(camera);
    const dir = vector.sub(camera.position).normalize();
    const distance = -camera.position.z / dir.z;
    const pos = camera.position.clone().add(dir.multiplyScalar(distance));

    targetX += (pos.x - targetX) * 0.02;
    targetY += (pos.y - targetY) * 0.02;

    for (let i = 0; i < initialZ.length; i++) {
      let z = initialZ[i] + (scrollY * 0.0005);
      const depth = 10;
      const zRelative = (z + 5) % depth;
      positions[i * 3 + 2] = zRelative - 5;

      const ix = initialX[i];
      const iy = initialY[i];

      const dx = targetX - ix;
      const dy = targetY - iy;
      const distSq = dx * dx + dy * dy;

      const force = Math.max(0, (4 - Math.sqrt(distSq)) * 0.08);

      positions[i * 3] = ix + dx * force;
      positions[i * 3 + 1] = iy + dy * force;
    }

    stars.geometry.attributes.position.needsUpdate = true;
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
  window.removeEventListener('mousemove', onMouseMove);
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
