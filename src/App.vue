<template>
  <div class="App">
    <audio ref="audioPlayer1" loop :src="audioSrc1" type="audio/mpeg"></audio>
    <audio ref="audioPlayer2" loop :src="audioSrc2" type="audio/mpeg"></audio>

    <button @click="toggleMusic(1)" class="music-control music-control-right">
      {{ isPlaying[1] ? '停止播放' : '纯音乐' }}
    </button>
    <button @click="toggleMusic(2)" class="music-control music-control-left">
      {{ isPlaying[2] ? '停止播放' : '纯音乐' }}
    </button>

    <WebHeader />
    <MainLayout />
    <WebFooter />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import WebHeader from './components/WebHeader.vue'
import MainLayout from './components/MainLayout.vue'
import WebFooter from './components/WebFooter.vue'

const audioSrc1 = new URL('@/assets/wasted.mp3', import.meta.url).href
const audioSrc2 = new URL('@/assets/Timeisbroken.mp3', import.meta.url).href

const audioPlayer1 = ref(null)
const audioPlayer2 = ref(null)
const isPlaying = ref({ 1: false, 2: false })

const toggleMusic = (playerNum) => {
  if (isPlaying.value[playerNum]) {
    const player = playerNum === 1 ? audioPlayer1.value : audioPlayer2.value
    player.pause()
    isPlaying.value[playerNum] = false
  } else {
    const otherPlayerNum = playerNum === 1 ? 2 : 1
    const otherPlayer = otherPlayerNum === 1 ? audioPlayer1.value : audioPlayer2.value
    otherPlayer.pause()
    isPlaying.value[otherPlayerNum] = false
    
    const currentPlayer = playerNum === 1 ? audioPlayer1.value : audioPlayer2.value
    currentPlayer.play()
    isPlaying.value[playerNum] = true
  }
}
</script>

<style scoped>
.App {
  margin: auto;
  max-width: 100%;
  width: 100%;
  overflow-x: hidden;
  height: 100vh; /* 固定高度 */
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

.music-control {
  position: fixed;
  top: 65px;
  padding: 10px 20px;
  background: linear-gradient(135deg, rgba(0, 255, 127, 0.25), rgba(138, 43, 226, 0.2));
  color: #00ff7f;
  border: 1px solid rgba(0, 255, 127, 0.6);
  border-radius: 5px;
  cursor: pointer;
  z-index: 11;
  box-shadow: 0 0 15px rgba(0, 255, 127, 0.4), 0 2px 5px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  backdrop-filter: blur(5px);
}

.music-control:hover {
  background: linear-gradient(135deg, rgba(0, 255, 127, 0.35), rgba(138, 43, 226, 0.3));
  transform: translateY(-2px);
  box-shadow: 0 0 25px rgba(0, 255, 127, 0.6), 0 4px 8px rgba(0, 0, 0, 0.4);
  color: #ffffff;
}

.music-control-right {
  right: 20px;
}

.music-control-left {
  left: 20px;
}

@media (max-width: 768px) {
  .music-control {
    padding: 8px 12px;
    font-size: 14px;
    top: 55px;
  }
  
  .music-control-right {
    right: 10px;
  }
  
  .music-control-left {
    left: 10px;
  }
}
</style>