<template>
  <div class="web-header">
    <audio ref="audioPlayer1" loop preload="none" :src="audioSrc1" type="audio/mpeg"></audio>
    <audio ref="audioPlayer2" loop preload="none" :src="audioSrc2" type="audio/mpeg"></audio>
    
    <button @click="toggleMusic(1)" class="music-btn music-btn-left">
      {{ isPlaying[1] ? '⏹️' : '🎵' }}
    </button>
    
    <span class="glow-text">导航百宝箱</span>
    
    <button @click="toggleMusic(2)" class="music-btn music-btn-right">
      {{ isPlaying[2] ? '⏹️' : '🎵' }}
    </button>
    
    <div class="header-decoration"></div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// 使用动态导入，按需加载音频
const audioSrc1 = ref('')
const audioSrc2 = ref('')
const audioLoaded = ref({ 1: false, 2: false })

const audioPlayer1 = ref(null)
const audioPlayer2 = ref(null)
const isPlaying = ref({ 1: false, 2: false })

// 懒加载音频函数
const loadAudio = async (playerNum) => {
  if (audioLoaded.value[playerNum]) return
  
  if (playerNum === 1 && !audioSrc1.value) {
    const audioFile = await import('@/assets/wasted.mp3?url')
    audioSrc1.value = audioFile.default
  } else if (playerNum === 2 && !audioSrc2.value) {
    const audioFile = await import('@/assets/Timeisbroken.mp3?url')
    audioSrc2.value = audioFile.default
  }
  
  audioLoaded.value[playerNum] = true
}

const toggleMusic = async (playerNum) => {
  // 先懒加载音频
  await loadAudio(playerNum)
  
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
.web-header {
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: 22px;
  font-family: "微软雅黑";
  position: relative;
  background: linear-gradient(180deg, rgba(0, 255, 127, 0.2) 0%, rgba(34, 139, 34, 0.15) 50%, rgba(0, 200, 100, 0.1) 100%);
  border-bottom: 2px solid rgba(0, 200, 100, 0.5);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.music-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  padding: 6px 12px;
  background: linear-gradient(135deg, rgba(0, 200, 100, 0.25), rgba(34, 139, 34, 0.2));
  color: #00ff7f;
  border: 1px solid rgba(0, 200, 100, 0.6);
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0 0 10px rgba(0, 200, 100, 0.3);
  transition: all 0.3s ease;
  backdrop-filter: blur(5px);
  font-size: 16px;
  z-index: 20;
}

.music-btn:hover {
  background: linear-gradient(135deg, rgba(0, 200, 100, 0.35), rgba(34, 139, 34, 0.3));
  transform: translateY(-50%) scale(1.05);
  box-shadow: 0 0 20px rgba(0, 200, 100, 0.5);
  color: #ffffff;
}

.music-btn-left {
  left: 20px;
}

.music-btn-right {
  right: 20px;
}

.glow-text {
  position: relative;
  z-index: 10;
  color: #ffffff;
  text-shadow: 
    0 0 10px #00ff7f,
    0 0 20px #00ff7f,
    0 0 30px #00ff7f,
    0 0 40px #00ff7f;
  animation: textPulse 2s ease-in-out infinite;
  letter-spacing: 3px;
  font-weight: bold;
}

@keyframes textPulse {
  0%, 100% {
    text-shadow: 
      0 0 10px #00ff7f,
      0 0 20px #00ff7f,
      0 0 30px #00ff7f;
  }
  50% {
    text-shadow: 
      0 0 15px #00ff7f,
      0 0 30px #00ff7f,
      0 0 45px #00ff7f,
      0 0 60px #00ff7f;
  }
}

.header-decoration {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #00ff7f, #228b22, #00ff7f, transparent);
  animation: colorFlow 4s linear infinite;
}

@keyframes colorFlow {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 200% 50%;
  }
}

/* 响应式优化 */
@media (max-width: 768px) {
  .web-header {
    height: 45px;
    line-height: 45px;
    font-size: 18px;
  }
  
  .glow-text {
    letter-spacing: 1.5px;
  }
  
  .music-btn {
    padding: 4px 8px;
    font-size: 14px;
  }
  
  .music-btn-left {
    left: 10px;
  }
  
  .music-btn-right {
    right: 10px;
  }
}
</style>
