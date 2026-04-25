<template>
  <div class="music-player">
    <div class="main-area">
      <div class="cover-section">
        <div class="cover-container" :class="{ spinning: isPlaying }">
          <img :src="currentMusic.cover" alt="封面" />
        </div>
        <div class="song-info">
          <h2>{{ currentMusic.title }}</h2>
          <p>{{ currentMusic.artist }}</p>
        </div>
      </div>

      <div class="lyrics-section">
        <div class="lyrics-container" ref="lyricsContainer">
          <div 
            v-for="(line, index) in parsedLyrics" 
            :key="index"
            class="lyric-line"
            :class="{ active: currentLyricIndex === index }"
          >
            {{ line.text }}
          </div>
        </div>
      </div>
    </div>

    <div class="controls-section">
      <div class="progress-container">
        <span class="time">{{ formatTime(currentTime) }}</span>
        <div class="progress-bar-wrapper">
          <div class="progress-bar">
            <div class="progress-fill" :style="{ width: `${progressPercent}%` }"></div>
          </div>
          <input 
            type="range" 
            :value="currentTime" 
            :max="duration" 
            @input="seekTo"
            class="progress-slider"
          />
        </div>
        <span class="time">{{ formatTime(duration) }}</span>
      </div>
      
      <div class="bottom-controls">
        <div class="control-buttons">
          <button @click="togglePlayMode" class="control-btn mode-btn" :class="{ active: playMode !== 'normal' }" :title="playMode === 'loop' ? '单曲循环' : playMode === 'shuffle' ? '随机播放' : '顺序播放'">
            <svg v-if="playMode === 'loop'" viewBox="0 0 24 24" fill="currentColor">
              <path d="M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z"/>
              <path d="M12 10l-2 1.5V15h4v-3.5L12 10z"/>
            </svg>
            <svg v-else-if="playMode === 'shuffle'" viewBox="0 0 24 24" fill="currentColor">
              <path d="M10.59 9.17L5.41 4 4 5.41l5.17 5.17 1.42-1.41zM14.5 4l2.04 2.04L4 18.59 5.41 20 17.96 7.46 20 9.5V4h-5.5zm.33 9.41l-1.41 1.41 3.13 3.13L14.5 20H20v-5.5l-2.04 2.04-3.13-3.13z"/>
            </svg>
            <svg v-else viewBox="0 0 24 24" fill="currentColor">
              <path d="M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z"/>
            </svg>
          </button>
          <button @click="prevSong" class="control-btn">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/>
            </svg>
          </button>
          <button @click="togglePlay" class="control-btn play-btn">
            <svg v-if="!isPlaying" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z"/>
            </svg>
            <svg v-else viewBox="0 0 24 24" fill="currentColor">
              <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
            </svg>
          </button>
          <button @click="nextSong" class="control-btn">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"/>
            </svg>
          </button>
        </div>

        <button @click="showSongList = !showSongList" class="song-list-toggle">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"/>
          </svg>
          歌曲列表
        </button>
      </div>
    </div>

    <div v-if="showSongList" class="song-list-modal" @click.self="showSongList = false">
      <div class="song-list-content">
        <div class="modal-header">
          <h3>歌曲列表</h3>
          <button @click="showSongList = false" class="close-btn">✕</button>
        </div>
        <div class="song-list">
          <div 
            v-for="(song, index) in musicList" 
            :key="song.id"
            class="song-item"
            :class="{ active: currentIndex === index }"
            @click="playSong(index)"
          >
            <div class="song-number">{{ index + 1 }}</div>
            <div class="song-detail">
              <div class="song-title">{{ song.title }}</div>
              <div class="song-artist">{{ song.artist }}</div>
            </div>
            <div v-if="currentIndex === index && isPlaying" class="playing-indicator">
              <span class="bar"></span>
              <span class="bar"></span>
              <span class="bar"></span>
              <span class="bar"></span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <audio 
      ref="audioRef"
      :src="currentMusic.audio"
      @timeupdate="updateTime"
      @loadedmetadata="updateDuration"
      @ended="playNext"
      @play="handlePlay"
      @pause="handlePause"
    />
  </div>
</template>

<script setup>
import { ref, computed, nextTick, watch } from 'vue'
import { musicList } from '../data/music'

const audioRef = ref(null)
const lyricsContainer = ref(null)
const currentIndex = ref(0)
const isPlaying = ref(false)
const currentTime = ref(0)
const duration = ref(0)
const showSongList = ref(false)
const currentLyricIndex = ref(0)
const playMode = ref('normal') // normal: 顺序播放, loop: 单曲循环, shuffle: 随机播放

const currentMusic = computed(() => musicList[currentIndex.value])

const progressPercent = computed(() => {
  if (!duration.value) return 0
  return (currentTime.value / duration.value) * 100
})

// 解析 LRC 歌词
const parsedLyrics = computed(() => {
  if (!currentMusic.value.lyrics) return []
  
  const lines = currentMusic.value.lyrics.split('\n')
  const result = []
  
  for (const line of lines) {
    const match = line.match(/\[(\d{2}):(\d{2})\.(\d{2,3})\](.*)/)
    if (match) {
      const minutes = parseInt(match[1])
      const seconds = parseInt(match[2])
      const milliseconds = parseInt(match[3])
      const time = minutes * 60 + seconds + milliseconds / 1000
      const text = match[4].trim()
      if (text) {
        result.push({ time, text })
      }
    }
  }
  
  return result
})

// 格式化时间
const formatTime = (time) => {
  if (!time) return '0:00'
  const minutes = Math.floor(time / 60)
  const seconds = Math.floor(time % 60).toString().padStart(2, '0')
  return `${minutes}:${seconds}`
}

// 重置歌词位置
const resetLyricPosition = () => {
  currentLyricIndex.value = 0
  currentTime.value = 0
  if (lyricsContainer.value) {
    lyricsContainer.value.scrollTop = 0
  }
}

// 监听歌曲切换，重置歌词位置
watch(currentMusic, () => {
  nextTick(() => {
    resetLyricPosition()
  })
})

// 更新播放时间和歌词
const updateTime = () => {
  if (audioRef.value) {
    currentTime.value = audioRef.value.currentTime
    
    // 只有在播放时才更新歌词
    if (isPlaying.value && parsedLyrics.value.length > 0) {
      let index = 0
      for (let i = 0; i < parsedLyrics.value.length; i++) {
        if (parsedLyrics.value[i].time <= currentTime.value) {
          index = i
        }
      }
      currentLyricIndex.value = index
      
      // 滚动歌词到当前行
      scrollToLyric(index)
    }
  }
}

// 滚动歌词
const scrollToLyric = (index) => {
  if (lyricsContainer.value) {
    const lyricLine = lyricsContainer.value.children[index]
    if (lyricLine) {
      const containerHeight = lyricsContainer.value.clientHeight
      const lineTop = lyricLine.offsetTop
      const lineHeight = lyricLine.clientHeight
      const scrollTop = lineTop - containerHeight / 2 + lineHeight / 2
      
      // 使用 requestAnimationFrame 优化滚动
      requestAnimationFrame(() => {
        lyricsContainer.value.scrollTo({
          top: scrollTop,
          behavior: 'smooth'
        })
      })
    }
  }
}

// 更新总时长
const updateDuration = () => {
  if (audioRef.value) {
    duration.value = audioRef.value.duration
  }
}

// 播放/暂停
const togglePlay = () => {
  if (!audioRef.value) return
  if (isPlaying.value) {
    audioRef.value.pause()
    isPlaying.value = false
  } else {
    audioRef.value.play()
      .then(() => {
        isPlaying.value = true
      })
      .catch((err) => {
        console.error('播放失败:', err)
        isPlaying.value = false
      })
  }
}

// 音频播放事件 - 确保状态正确
const handlePlay = () => {
  isPlaying.value = true
}

const handlePause = () => {
  isPlaying.value = false
}

// 播放某首歌
const playSong = (index) => {
  currentIndex.value = index
  showSongList.value = false
  
  nextTick(() => {
    if (audioRef.value) {
      // 先重置歌词位置
      resetLyricPosition()
      // 设置播放位置和播放
      audioRef.value.currentTime = 0
      audioRef.value.play()
        .then(() => {
          isPlaying.value = true
        })
        .catch((err) => {
          console.error('播放失败:', err)
          isPlaying.value = false
        })
    }
  })
}

// 切换播放模式
const togglePlayMode = () => {
  if (playMode.value === 'normal') {
    playMode.value = 'loop'
  } else if (playMode.value === 'loop') {
    playMode.value = 'shuffle'
  } else {
    playMode.value = 'normal'
  }
}

// 播放下一首
const playNext = () => {
  if (playMode.value === 'loop') {
    // 单曲循环：重置播放时间到开始
    if (audioRef.value) {
      audioRef.value.currentTime = 0
      audioRef.value.play()
    }
  } else if (playMode.value === 'shuffle') {
    // 随机播放
    let randomIndex
    do {
      randomIndex = Math.floor(Math.random() * musicList.length)
    } while (randomIndex === currentIndex.value && musicList.length > 1)
    playSong(randomIndex)
  } else {
    // 顺序播放
    if (currentIndex.value < musicList.length - 1) {
      playSong(currentIndex.value + 1)
    } else {
      playSong(0)
    }
  }
}

const nextSong = () => {
  if (playMode.value === 'shuffle') {
    // 随机播放一首新歌
    let randomIndex
    do {
      randomIndex = Math.floor(Math.random() * musicList.length)
    } while (randomIndex === currentIndex.value && musicList.length > 1)
    playSong(randomIndex)
  } else {
    playNext()
  }
}

// 播放上一首
const prevSong = () => {
  if (playMode.value === 'shuffle') {
    // 随机播放一首新歌
    let randomIndex
    do {
      randomIndex = Math.floor(Math.random() * musicList.length)
    } while (randomIndex === currentIndex.value && musicList.length > 1)
    playSong(randomIndex)
  } else {
    if (currentIndex.value > 0) {
      playSong(currentIndex.value - 1)
    } else {
      playSong(musicList.length - 1)
    }
  }
}

// 拖动进度条
const seekTo = (e) => {
  const time = e.target.value
  if (audioRef.value) {
    audioRef.value.currentTime = time
    currentTime.value = time
  }
}
</script>

<style scoped>
.music-player {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #1a1f3a 0%, #0f172a 50%, #1e1b4b 100%);
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-sizing: border-box;
  overflow: hidden;
}

/* 主区域：封面和歌词并排 */
.main-area {
  flex: 1;
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
  min-height: 0;
}

/* 封面区域 */
.cover-section {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 25px;
  min-width: 0;
}

.cover-container {
  width: 220px;
  height: 220px;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 
    0 15px 50px rgba(0, 255, 255, 0.2),
    0 0 0 6px rgba(0, 255, 255, 0.1),
    inset 0 0 0 4px rgba(255, 255, 255, 0.05);
  transition: all 0.5s ease;
  flex-shrink: 0;
}

.cover-container.spinning {
  animation: spin 20s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.cover-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.song-info {
  text-align: center;
}

.song-info h2 {
  color: #ffffff;
  font-size: 24px;
  margin: 0 0 8px 0;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
}

.song-info p {
  color: rgba(255, 255, 255, 0.6);
  font-size: 16px;
  margin: 0;
}

/* 歌词区域 */
.lyrics-section {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 0;
}

.lyrics-container {
  width: 100%;
  height: 100%;
  max-height: 400px;
  overflow-y: auto;
  padding: 40px 20px;
  box-sizing: border-box;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
}

.lyrics-container::-webkit-scrollbar {
  width: 4px;
}

.lyrics-container::-webkit-scrollbar-track {
  background: transparent;
}

.lyrics-container::-webkit-scrollbar-thumb {
  background: rgba(0, 255, 255, 0.3);
  border-radius: 2px;
}

.lyric-line {
  text-align: center;
  color: rgba(255, 255, 255, 0.4);
  font-size: 17px;
  line-height: 2.6;
  padding: 8px 0;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  letter-spacing: 0.3px;
  will-change: color, font-size, transform, text-shadow;
}

.lyric-line.active {
  color: #00ffff;
  font-size: 22px;
  font-weight: 600;
  text-shadow: 
    0 0 20px rgba(0, 255, 255, 0.8),
    0 0 40px rgba(0, 255, 255, 0.4);
  transform: scale(1.02);
}

/* 控制区域 */
.controls-section {
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px 30px;
  background: rgba(255, 255, 255, 0.04);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  margin-top: auto;
}

.progress-container {
  display: flex;
  align-items: center;
  gap: 15px;
}

.time {
  color: rgba(255, 255, 255, 0.8);
  font-size: 13px;
  min-width: 50px;
  font-variant-numeric: tabular-nums;
}

.progress-bar-wrapper {
  flex: 1;
  position: relative;
  height: 6px;
}

.progress-bar {
  width: 100%;
  height: 6px;
  background: rgba(255, 255, 255, 0.12);
  border-radius: 3px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #00ffff, #8b5cf6);
  border-radius: 3px;
  transition: width 0.1s linear;
}

.progress-slider {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 6px;
  -webkit-appearance: none;
  background: transparent;
  cursor: pointer;
  margin: 0;
  z-index: 10;
}

.progress-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 14px;
  height: 14px;
  background: #00ffff;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 0 12px rgba(0, 255, 255, 0.6);
  margin-top: -4px;
  transition: all 0.2s ease;
}

.progress-slider::-webkit-slider-thumb:hover {
  transform: scale(1.25);
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.9);
}

.bottom-controls {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}

.control-buttons {
  display: flex;
  gap: 25px;
  align-items: center;
  justify-content: center;
  flex: 1;
}

.control-btn {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 2px solid rgba(0, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.05);
  color: #ffffff;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  flex-shrink: 0;
}

.control-btn:hover {
  background: rgba(0, 255, 255, 0.1);
  border-color: rgba(0, 255, 255, 0.5);
  transform: scale(1.05);
  color: #00ffff;
}

.control-btn svg {
  width: 100%;
  height: 100%;
}

.mode-btn.active {
  color: #00ffff;
  border-color: rgba(0, 255, 255, 0.7);
  background: rgba(0, 255, 255, 0.1);
  box-shadow: 0 0 15px rgba(0, 255, 255, 0.3);
}

.play-btn {
  width: 58px;
  height: 58px;
  border: none;
  background: linear-gradient(135deg, #00ffff 0%, #8b5cf6 100%);
  color: #000;
  padding: 14px;
  box-shadow: 0 10px 30px rgba(0, 255, 255, 0.4);
}

.play-btn:hover {
  transform: scale(1.1);
  box-shadow: 0 15px 40px rgba(0, 255, 255, 0.6);
  background: linear-gradient(135deg, #00ffff 0%, #8b5cf6 100%);
  color: #000;
}

.song-list-toggle {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 24px;
  border: 1px solid rgba(0, 255, 255, 0.35);
  background: rgba(255, 255, 255, 0.03);
  color: rgba(255, 255, 255, 0.85);
  border-radius: 25px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.3s ease;
  flex-shrink: 0;
}

.song-list-toggle svg {
  width: 18px;
  height: 18px;
}

.song-list-toggle:hover {
  background: rgba(0, 255, 255, 0.12);
  border-color: rgba(0, 255, 255, 0.6);
  color: #00ffff;
  transform: translateY(-1px);
}

/* 歌曲列表弹窗 */
.song-list-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  backdrop-filter: blur(5px);
}

.song-list-content {
  background: linear-gradient(135deg, #1e1b4b 0%, #1a1f3a 100%);
  border-radius: 16px;
  width: 90%;
  max-width: 480px;
  max-height: 80vh;
  overflow: hidden;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 22px 28px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.modal-header h3 {
  color: #ffffff;
  font-size: 19px;
  margin: 0;
}

.close-btn {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: none;
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.75);
  cursor: pointer;
  font-size: 17px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.close-btn:hover {
  background: rgba(255, 100, 100, 0.2);
  color: #ff6b6b;
  transform: rotate(90deg);
}

.song-list {
  max-height: 60vh;
  overflow-y: auto;
  padding: 8px 0;
}

.song-list::-webkit-scrollbar {
  width: 4px;
}

.song-list::-webkit-scrollbar-track {
  background: transparent;
}

.song-list::-webkit-scrollbar-thumb {
  background: rgba(0, 255, 255, 0.25);
  border-radius: 2px;
}

.song-item {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 14px 28px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.song-item:hover {
  background: rgba(255, 255, 255, 0.05);
}

.song-item.active {
  background: rgba(0, 255, 255, 0.12);
}

.song-number {
  width: 28px;
  color: rgba(255, 255, 255, 0.45);
  font-size: 14px;
}

.song-detail {
  flex: 1;
}

.song-title {
  color: #ffffff;
  font-size: 15px;
  margin-bottom: 3px;
}

.song-artist {
  color: rgba(255, 255, 255, 0.5);
  font-size: 13px;
}

.song-item.active .song-title {
  color: #00ffff;
}

.playing-indicator {
  display: flex;
  align-items: flex-end;
  gap: 3px;
  height: 16px;
}

.playing-indicator .bar {
  width: 3px;
  background: #00ffff;
  border-radius: 2px;
  animation: playing 0.5s ease-in-out infinite alternate;
}

.playing-indicator .bar:nth-child(1) { animation-delay: 0s; }
.playing-indicator .bar:nth-child(2) { animation-delay: 0.1s; }
.playing-indicator .bar:nth-child(3) { animation-delay: 0.2s; }
.playing-indicator .bar:nth-child(4) { animation-delay: 0.3s; }

@keyframes playing {
  from { height: 4px; }
  to { height: 16px; }
}

/* 响应式优化 */
@media (max-width: 900px) {
  .music-player {
    padding: 16px;
  }

  .main-area {
    flex-direction: column;
    gap: 18px;
  }

  .cover-section {
    gap: 18px;
    flex: none;
  }

  .cover-container {
    width: 180px;
    height: 180px;
  }

  .song-info h2 {
    font-size: 20px;
  }

  .song-info p {
    font-size: 14px;
  }

  .lyrics-section {
    flex: 1;
    min-height: 0;
  }

  .lyrics-container {
    max-height: 220px;
    padding: 20px 10px;
  }

  .lyric-line {
    font-size: 14px;
    line-height: 2.2;
    padding: 6px 0;
  }

  .lyric-line.active {
    font-size: 17px;
  }

  .controls-section {
    padding: 16px;
    gap: 16px;
  }

  .bottom-controls {
    flex-direction: column;
    gap: 14px;
  }

  .control-buttons {
    gap: 18px;
  }

  .control-btn {
    width: 46px;
    height: 46px;
    padding: 12px;
  }

  .play-btn {
    width: 64px;
    height: 64px;
    padding: 16px;
  }

  .song-list-toggle {
    padding: 12px 28px;
    font-size: 15px;
  }

  /* 歌曲列表弹窗 - 移动端优化 */
  .song-list-content {
    width: 95%;
    max-width: none;
    border-radius: 20px 20px 0 0;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    max-height: 70vh;
    border-radius: 20px 20px 0 0;
  }

  .song-list {
    max-height: 55vh;
  }
}

@media (max-width: 520px) {
  .music-player {
    padding: 14px;
  }

  .cover-container {
    width: 150px;
    height: 150px;
    box-shadow: 
      0 10px 35px rgba(0, 255, 255, 0.18),
      0 0 0 5px rgba(0, 255, 255, 0.08),
      inset 0 0 0 3px rgba(255, 255, 255, 0.04);
  }

  .song-info h2 {
    font-size: 18px;
  }

  .song-info p {
    font-size: 13px;
  }

  .lyrics-container {
    max-height: 180px;
    padding: 15px 8px;
  }

  .lyric-line {
    font-size: 13px;
    line-height: 2.1;
  }

  .lyric-line.active {
    font-size: 16px;
  }

  .controls-section {
    padding: 14px 12px;
    gap: 14px;
  }

  .progress-container {
    gap: 10px;
  }

  .time {
    font-size: 12px;
    min-width: 40px;
  }

  .bottom-controls {
    flex-direction: column;
    gap: 12px;
  }

  .control-buttons {
    gap: 16px;
  }

  .control-btn {
    width: 48px;
    height: 48px;
    padding: 10px;
    border-width: 2px;
  }

  .play-btn {
    width: 68px;
    height: 68px;
    padding: 16px;
  }

  .song-list-toggle {
    padding: 10px 24px;
    font-size: 14px;
  }

  /* 进度条在移动端更容易拖动 */
  .progress-bar-wrapper {
    height: 8px;
  }

  .progress-bar {
    height: 8px;
  }

  .progress-slider {
    height: 8px;
  }

  .progress-slider::-webkit-slider-thumb {
    width: 18px;
    height: 18px;
    margin-top: -5px;
  }
}
</style>
