<template>
  <div class="App">
    <WebHeader />
    <MainLayout />
    <WebFooter />
  </div>
</template>

<script setup>
import WebHeader from './components/WebHeader.vue'
import MainLayout from './components/MainLayout.vue'
import WebFooter from './components/WebFooter.vue'
</script>

<style scoped>
.App {
  margin: auto;
  max-width: 100%;
  width: 100%;
  overflow-x: hidden;
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  background: linear-gradient(135deg, #0a0e27 0%, #1a1f3a 50%, #0f172a 100%);
}

.App::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    radial-gradient(circle at 20% 30%, rgba(0, 255, 127, 0.15) 0%, transparent 50%),
    radial-gradient(circle at 80% 70%, rgba(138, 43, 226, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 50% 50%, rgba(0, 128, 255, 0.08) 0%, transparent 70%),
    linear-gradient(90deg, rgba(0, 255, 127, 0.05) 1px, transparent 1px),
    linear-gradient(rgba(0, 255, 127, 0.05) 1px, transparent 1px);
  background-size: 100% 100%, 100% 100%, 100% 100%, 50px 50px, 50px 50px;
  animation: gridMove 25s linear infinite, pulseGlow 10s ease-in-out infinite, colorShift 20s ease-in-out infinite;
  pointer-events: none;
  z-index: 1;
}

@keyframes gridMove {
  0% {
    background-position: 0 0, 0 0, 0 0, 0 0, 0 0;
  }
  100% {
    background-position: 0 0, 0 0, 0 0, 50px 50px, 50px 50px;
  }
}

@keyframes pulseGlow {
  0%, 100% {
    opacity: 0.7;
  }
  50% {
    opacity: 1;
  }
}

@keyframes colorShift {
  0%, 100% {
    filter: hue-rotate(0deg);
  }
  50% {
    filter: hue-rotate(20deg);
  }
}

.App > * {
  position: relative;
  z-index: 10;
}
</style>
