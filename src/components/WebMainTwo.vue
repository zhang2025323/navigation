<template>
  <div class="web-main">
    <canvas ref="particleCanvas" class="particle-canvas"></canvas>
    <div class="content">
      <LinkCategory 
        title="个人笔记" 
        :links="noteLinks" 
        :icon="bookIcon" 
      />
      <LinkCategory 
        title="AI链接" 
        :links="aiLinks" 
        :icon="aiIcon" 
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { noteLinks, aiLinks } from '@/data/links.js'
import LinkCategory from './LinkCategory.vue'

const bookIcon = new URL('@/assets/icons/书.webp', import.meta.url).href
const aiIcon = new URL('@/assets/icons/人工智能.webp', import.meta.url).href

const particleCanvas = ref(null)
let animationId = null
let particles = []
let ctx = null

class Particle {
  constructor(canvasWidth, canvasHeight) {
    this.x = Math.random() * canvasWidth
    this.y = Math.random() * canvasHeight
    this.size = Math.random() * 4 + 1
    this.speedX = (Math.random() - 0.5) * 1.5
    this.speedY = (Math.random() - 0.5) * 1.5
    this.opacity = Math.random() * 0.8 + 0.2
    this.color = this.getRandomColor()
  }

  getRandomColor() {
    const colors = [
      'rgba(0, 255, 127, ',
      'rgba(138, 43, 226, ',
      'rgba(0, 128, 255, ',
      'rgba(64, 224, 208, ',
      'rgba(100, 149, 237, ',
      'rgba(72, 209, 204, '
    ]
    return colors[Math.floor(Math.random() * colors.length)]
  }

  update(canvasWidth, canvasHeight) {
    this.x += this.speedX
    this.y += this.speedY

    if (this.x > canvasWidth || this.x < 0) this.speedX = -this.speedX
    if (this.y > canvasHeight || this.y < 0) this.speedY = -this.speedY
  }

  draw(context) {
    context.beginPath()
    context.arc(this.x, this.y, this.size, 0, Math.PI * 2)
    context.fillStyle = this.color + this.opacity + ')'
    context.shadowBlur = 15
    context.shadowColor = this.color + '0.8)'
    context.fill()
    context.shadowBlur = 0
  }
}

const initParticles = () => {
  particles = []
  const particleCount = 40
  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle(particleCanvas.value.width, particleCanvas.value.height))
  }
}

const connectParticles = () => {
  const maxDistance = 100
  for (let a = 0; a < particles.length; a++) {
    for (let b = a; b < particles.length; b++) {
      const dx = particles[a].x - particles[b].x
      const dy = particles[a].y - particles[b].y
      const distance = Math.sqrt(dx * dx + dy * dy)

      if (distance < maxDistance) {
        const opacity = 1 - distance / maxDistance
        ctx.beginPath()
        ctx.strokeStyle = `rgba(0, 255, 127, ${opacity * 0.3})`
        ctx.lineWidth = 1
        ctx.moveTo(particles[a].x, particles[a].y)
        ctx.lineTo(particles[b].x, particles[b].y)
        ctx.stroke()
      }
    }
  }
}

const animate = () => {
  ctx.clearRect(0, 0, particleCanvas.value.width, particleCanvas.value.height)

  particles.forEach(particle => {
    particle.update(particleCanvas.value.width, particleCanvas.value.height)
    particle.draw(ctx)
  })

  connectParticles()
  animationId = requestAnimationFrame(animate)
}

const resizeCanvas = () => {
  const rect = particleCanvas.value.parentElement.getBoundingClientRect()
  particleCanvas.value.width = rect.width
  particleCanvas.value.height = rect.height
}

onMounted(() => {
  ctx = particleCanvas.value.getContext('2d')
  resizeCanvas()
  initParticles()
  animate()
  window.addEventListener('resize', resizeCanvas)
})

onUnmounted(() => {
  if (animationId) {
    cancelAnimationFrame(animationId)
  }
  window.removeEventListener('resize', resizeCanvas)
})
</script>

<style scoped>
.web-main {
  position: relative;
  width: 100%;
  height: auto;
  padding: 15px 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: transparent;
  border-bottom: 2px solid rgba(0, 200, 100, 0.4);
  overflow: hidden;
}

.web-main::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(0, 200, 100, 0.3), transparent);
  animation: scan 4s linear infinite;
  z-index: 1;
  pointer-events: none;
}

@keyframes scan {
  0% {
    left: -100%;
  }
  100% {
    left: 100%;
  }
}

.particle-canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
}

.content {
  position: relative;
  z-index: 2;
  width: 100%;
  margin-top: -15px;
}
</style>