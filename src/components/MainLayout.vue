<template>
  <div 
    class="main-layout"
    @touchstart="handleTouchStart"
    @touchmove="handleTouchMove"
    @touchend="handleTouchEnd"
  >
    <!-- 左侧导航栏 -->
    <aside class="sidebar">
      <div class="sidebar-header">
        <h2>📋 导航分类</h2>
      </div>
      <nav class="nav-list">
        <div
          v-for="cat in categories"
          :key="cat.id"
          class="nav-item"
          :class="{ active: activeCategory === cat.id }"
          @click="switchCategory(cat.id)"
        >
          <span class="nav-icon">{{ cat.icon }}</span>
          <span class="nav-name">{{ cat.name }}</span>
          <span class="nav-count">{{ cat.links.length }}</span>
        </div>
      </nav>
    </aside>

    <!-- 右侧链接内容（可滚动） -->
    <main class="content-area">
      <div class="content-header">
        <h1>{{ currentCategory?.icon }} {{ currentCategory?.name }}</h1>
        <p class="category-desc">共 {{ currentCategory?.links?.length || 0 }} 个链接</p>
      </div>

      <div class="links-grid">
        <a
          v-for="link in currentCategory?.links"
          :key="link.id"
          :href="link.link"
          target="_blank"
          rel="noopener noreferrer"
          class="link-card"
        >
          <img v-if="link.icon" :src="link.icon" :alt="link.title" class="card-icon" />
          <div v-else class="card-icon">🔗</div>
          <div class="card-content">
            <h3 class="card-title">{{ link.title }}</h3>
            <p class="card-desc">{{ link.desc }}</p>
          </div>
          <div class="card-arrow">➜</div>
        </a>
      </div>

      <div v-if="!currentCategory?.links?.length" class="empty-state">
        <div class="empty-icon">📭</div>
        <p>该分类下暂无链接</p>
      </div>
    </main>

    <!-- 滑动指示器 -->
    <div class="swipe-indicator" v-if="isMobile">
      <span class="swipe-hint">← 左右滑动切换分类 →</span>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import categories from '../data/links.js'

const activeCategory = ref(categories[0].id)
const isMobile = ref(false)

// 触摸状态
let touchStartX = 0
let touchEndX = 0

const currentCategory = computed(() => {
  return categories.find(cat => cat.id === activeCategory.value)
})

const switchCategory = (id) => {
  activeCategory.value = id
}

// 切换到上一个分类
const switchToPrevCategory = () => {
  const currentIndex = categories.findIndex(cat => cat.id === activeCategory.value)
  if (currentIndex > 0) {
    activeCategory.value = categories[currentIndex - 1].id
  }
}

// 切换到下一个分类
const switchToNextCategory = () => {
  const currentIndex = categories.findIndex(cat => cat.id === activeCategory.value)
  if (currentIndex < categories.length - 1) {
    activeCategory.value = categories[currentIndex + 1].id
  }
}

// 触摸开始
const handleTouchStart = (e) => {
  touchStartX = e.changedTouches[0].screenX
}

// 触摸移动
const handleTouchMove = (e) => {
  touchEndX = e.changedTouches[0].screenX
}

// 触摸结束，判断滑动方向
const handleTouchEnd = () => {
  const swipeThreshold = 50 // 滑动阈值，避免误触
  const diff = touchStartX - touchEndX

  if (Math.abs(diff) < swipeThreshold) return // 滑动距离太短，不执行

  if (diff > 0) {
    // 向左滑动 -> 下一个分类
    switchToNextCategory()
  } else {
    // 向右滑动 -> 上一个分类
    switchToPrevCategory()
  }
}

// 检测是否为移动端
const checkMobile = () => {
  isMobile.value = window.innerWidth <= 900
}

onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkMobile)
})
</script>

<style scoped>
.main-layout {
  display: flex;
  flex: 1; /* 让它占满剩余空间 */
  min-height: 0; /* 重要：防止Flex子项溢出 */
  background: transparent;
  position: relative;
}

/* 滑动指示器 */
.swipe-indicator {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 200, 100, 0.15);
  padding: 8px 16px;
  border-radius: 20px;
  border: 1px solid rgba(0, 200, 100, 0.3);
  z-index: 50;
  animation: fadeInOut 3s ease-in-out infinite;
}

.swipe-hint {
  color: #00ff7f;
  font-size: 14px;
  font-weight: 500;
}

@keyframes fadeInOut {
  0%, 100% {
    opacity: 0.6;
  }
  50% {
    opacity: 1;
  }
}

/* 左侧导航栏 */
.sidebar {
  width: 260px;
  flex-shrink: 0;
  background: rgba(20, 25, 40, 0.95);
  backdrop-filter: blur(10px);
  border-right: 1px solid rgba(0, 200, 100, 0.2);
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
}

.sidebar-header {
  padding: 20px 20px;
  border-bottom: 1px solid rgba(0, 200, 100, 0.2);
  flex-shrink: 0;
}

.sidebar-header h2 {
  font-size: 18px;
  color: #00ff7f;
  margin: 0;
  font-weight: 600;
}

.nav-list {
  flex: 1;
  padding: 12px 0;
  overflow-y: auto;
  /* iOS平滑滚动 */
  -webkit-overflow-scrolling: touch;
  /* 滚动时显示滚动条提示 */
  position: relative;
}

/* 导航列表滚动条美化 */
.nav-list::-webkit-scrollbar {
  width: 6px;
}

.nav-list::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.1);
}

.nav-list::-webkit-scrollbar-thumb {
  background: rgba(0, 200, 100, 0.3);
  border-radius: 3px;
}

.nav-list::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 200, 100, 0.5);
}

.nav-item {
  display: flex;
  align-items: center;
  padding: 14px 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  border-left: 3px solid transparent;
  gap: 10px;
}

.nav-item:hover {
  background: rgba(0, 200, 100, 0.1);
}

.nav-item.active {
  background: rgba(0, 200, 100, 0.15);
  border-left-color: #00ff7f;
}

.nav-icon {
  font-size: 20px;
  flex-shrink: 0;
}

.nav-name {
  flex: 1;
  color: #e0e0e0;
  font-size: 15px;
}

.nav-count {
  background: rgba(0, 200, 100, 0.2);
  color: #00ff7f;
  padding: 2px 8px;
  border-radius: 10px;
  font-size: 12px;
  font-weight: 600;
}

/* 右侧内容区（可滚动） */
.content-area {
  flex: 1;
  padding: 24px 30px;
  overflow-y: auto;
}

.content-header {
  margin-bottom: 24px;
}

.content-header h1 {
  font-size: 24px;
  color: #fff;
  margin: 0 0 8px 0;
}

.category-desc {
  color: rgba(255, 255, 255, 0.6);
  font-size: 14px;
  margin: 0;
}

/* 链接卡片网格 */
.links-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 16px;
  padding-bottom: 20px;
}

.link-card {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 16px;
  background: rgba(30, 35, 55, 0.8);
  border: 1px solid rgba(0, 200, 100, 0.15);
  border-radius: 12px;
  text-decoration: none;
  transition: all 0.3s ease;
}

.link-card:hover {
  transform: translateY(-3px);
  background: rgba(40, 45, 70, 0.9);
  border-color: rgba(0, 200, 100, 0.4);
  box-shadow: 0 8px 24px rgba(0, 200, 100, 0.15);
}

.card-icon {
  font-size: 24px;
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  border-radius: 10px;
  object-fit: contain;
  padding: 4px;
}

.card-content {
  flex: 1;
  min-width: 0;
}

.card-title {
  font-size: 15px;
  font-weight: 600;
  color: #fff;
  margin: 0 0 4px 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.card-desc {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.5);
  margin: 0;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card-arrow {
  color: rgba(0, 200, 100, 0.4);
  font-size: 20px;
  transition: all 0.3s ease;
  font-weight: bold;
  transform: translateX(0);
  line-height: 1;
}

.link-card:hover .card-arrow {
  color: #00ff7f;
  transform: translateX(6px);
  text-shadow: 0 0 10px rgba(0, 255, 127, 0.5);
}

/* 空状态 */
.empty-state {
  text-align: center;
  padding: 60px 20px;
}

.empty-icon {
  font-size: 64px;
  margin-bottom: 16px;
}

.empty-state p {
  color: rgba(255, 255, 255, 0.5);
  font-size: 16px;
  margin: 0;
}

/* 右侧内容区滚动条 */
.content-area::-webkit-scrollbar {
  width: 6px;
}

.content-area::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.1);
}

.content-area::-webkit-scrollbar-thumb {
  background: rgba(0, 200, 100, 0.3);
  border-radius: 3px;
}

.content-area::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 200, 100, 0.5);
}

/* 响应式调整 */
@media (max-width: 900px) {
  .main-layout {
    flex-direction: column;
  }

  .sidebar {
    width: 100%;
    position: relative;
    border-right: none;
    border-bottom: 1px solid rgba(0, 200, 100, 0.2);
  }

  .nav-list {
    display: flex;
    overflow-x: auto;
    padding: 8px 12px;
    gap: 8px;
    -webkit-overflow-scrolling: touch; /* iOS流畅滚动 */
    scrollbar-width: none; /* Firefox隐藏滚动条 */
  }

  .nav-list::-webkit-scrollbar {
    display: none; /* Chrome/Safari隐藏滚动条 */
  }

  .nav-item {
    flex-shrink: 0;
    padding: 8px 12px;
    border-left: none;
    border-bottom: 2px solid transparent;
    border-radius: 8px;
  }

  .nav-item.active {
    border-left: none;
    border-bottom-color: #00ff7f;
  }

  .nav-icon {
    font-size: 16px;
  }

  .nav-name {
    font-size: 13px;
  }

  .nav-count {
    display: none;
  }

  .content-area {
    padding: 16px 12px;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  }

  .links-grid {
    grid-template-columns: 1fr;
    gap: 12px;
  }

  .link-card {
    padding: 12px;
  }

  .card-icon {
    width: 40px;
    height: 40px;
    font-size: 18px;
  }

  .card-title {
    font-size: 14px;
  }

  .card-desc {
    font-size: 11px;
  }
}
</style>
