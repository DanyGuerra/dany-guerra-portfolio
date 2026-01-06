<script setup lang="ts">
// Logo component for the portfolio
</script>

<template>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" class="logo-svg" aria-label="Dany Guerra Logo">
        <defs>
            <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color: var(--primary); stop-opacity: 1" />
                <stop offset="100%" style="stop-color: var(--text-main); stop-opacity: 1" />
            </linearGradient>
        </defs>

        <!-- Outer Hexagon or Shape -->
        <path d="M50 5 L93.3 30 V80 L50 105 L6.7 80 V30 L50 5 Z" fill="none" class="shape" stroke="url(#logo-gradient)"
            stroke-width="5" stroke-linejoin="round" />

        <!-- Stylized DG or < /> -->
        <text x="50" y="68" font-size="40" font-family="'JetBrains Mono', monospace" font-weight="bold"
            fill="currentColor" text-anchor="middle" class="text">DG</text>
    </svg>
</template>

<style scoped>
.logo-svg {
    width: 45px;
    height: 45px;
    cursor: pointer;
    transition: transform 0.3s ease;
}

.logo-svg:hover {
    transform: scale(1.1);
}

.shape {
    transition: all 0.3s ease;
}

.logo-svg:hover .shape {
    stroke: var(--primary);
    fill: rgba(var(--primary-rgb), 0.1);
}

.text {
    fill: var(--text-main);
    transition: fill 0.3s ease;
}

.logo-svg:hover .text {
    fill: var(--primary);
}
</style>
