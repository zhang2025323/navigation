<template>
  <div class="web-footer">
    <div class="footer-top">
      <p class="web-footer1">
        <img class="tu1" src="~@/assets/icons/icons8-邮箱与信-100.webp" alt="email icon" />
        联系邮箱：2419771662@qq.com
      </p>
      <button class="reward-btn" @click="showReward = true">请我吃包辣条</button>
    </div>
    <div v-if="showReward" class="reward-modal" @click="hideReward">
      <div class="reward-modal-content" @click.stop>
        <h3>感谢您的支持</h3>
        <img class="Q" src="~@/assets/icons/wxzf.webp" alt="收款码" />
      </div>
    </div>
    <div class="footer-bottom">
      <p class="web-footer2 time">{{ currentTime }}</p>
      <p class="web-footer2">持续更新中...</p>
      <p class="web-footer2">© {{ currentYear }} 所有资源均来源于网络 仅供参考与学习</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const showReward = ref(false)
const currentTime = ref('')
const currentYear = ref(new Date().getFullYear())
let timer = null

const hideReward = () => {
  showReward.value = false
}

const updateTime = () => {
  const now = new Date()
  const year = now.getFullYear()
  const month = String(now.getMonth() + 1).padStart(2, '0')
  const day = String(now.getDate()).padStart(2, '0')
  const hours = String(now.getHours()).padStart(2, '0')
  const minutes = String(now.getMinutes()).padStart(2, '0')
  const seconds = String(now.getSeconds()).padStart(2, '0')
  currentTime.value = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
}

onMounted(() => {
  updateTime()
  timer = setInterval(updateTime, 1000)
})

onUnmounted(() => {
  if (timer) {
    clearInterval(timer)
  }
})
</script>

<style scoped>
.web-footer {
  height: auto;
  padding: 16px 24px;
  background: linear-gradient(180deg, rgba(0, 255, 255, 0.12), rgba(138, 43, 226, 0.1));
  border-top: 2px solid rgba(0, 255, 255, 0.35);
  margin-top: 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.footer-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-bottom {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
}

.tu1 {
  height: 26px;
  width: auto;
  margin-right: 6px;
  filter: drop-shadow(0 0 5px rgba(0, 255, 255, 0.5));
  vertical-align: middle;
}

.web-footer1 {
  font-size: 13px;
  font-family: "微软雅黑";
  color: #ffffff;
  text-shadow: 0 0 8px rgba(0, 255, 255, 0.4);
  margin: 0;
  display: flex;
  align-items: center;
}

.web-footer2 {
  text-align: center;
  font-size: 12px;
  font-family: "微软雅黑";
  color: #ffffff;
  text-shadow: 0 0 5px rgba(0, 255, 255, 0.35);
  margin: 0;
  line-height: 1.4;
}

.web-footer2.time {
  font-size: 13px;
  opacity: 1;
  font-weight: 500;
}

.reward-btn {
  padding: 6px 16px;
  background: linear-gradient(135deg, rgba(0, 255, 255, 0.25), rgba(138, 43, 226, 0.2));
  color: #00ffff;
  border: 1px solid rgba(0, 255, 255, 0.5);
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 0 10px rgba(0, 255, 255, 0.25);
  backdrop-filter: blur(5px);
  font-size: 12px;
}

.reward-btn:hover {
  background: linear-gradient(135deg, rgba(0, 255, 255, 0.35), rgba(138, 43, 226, 0.3));
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.45);
  color: #ffffff;
  transform: translateY(-1px);
}

.reward-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(10, 14, 39, 0.85);
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.reward-modal-content {
  background: linear-gradient(135deg, rgba(26, 31, 58, 0.98), rgba(15, 23, 42, 0.98));
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  border: 1px solid rgba(0, 255, 255, 0.4);
  box-shadow: 0 0 30px rgba(0, 255, 255, 0.3);
}

.reward-modal-content h3 {
  color: #00ffff;
  text-shadow: 0 0 10px rgba(0, 255, 255, 0.6);
  margin-bottom: 15px;
}

.Q {
  width: 180px;
  border-radius: 5px;
  box-shadow: 0 0 15px rgba(0, 255, 255, 0.3);
}

/* 响应式优化 */
@media (max-width: 768px) {
  .web-footer {
    display: none;
  }

  .footer-top {
    flex-direction: column;
    gap: 10px;
  }

  .footer-bottom {
    gap: 6px;
  }

  .tu1 {
    height: 24px;
    margin-right: 6px;
  }

  .web-footer1 {
    font-size: 13px;
  }

  .web-footer2 {
    font-size: 12px;
    line-height: 1.4;
  }

  .web-footer2.time {
    font-size: 12px;
    opacity: 1;
    font-weight: 500;
  }

  .reward-btn {
    padding: 6px 16px;
    font-size: 12px;
  }

  .reward-modal-content {
    margin: 20px;
    padding: 15px;
  }

  .Q {
    width: 160px;
  }
}
</style>
