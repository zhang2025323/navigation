<template>
  <div class="web-footer">
    <p class="web-footer1"><img class="tu1" src="~@/assets/icons/icons8-邮箱与信-100.webp"/>联系邮箱：2419771662@qq.com</p>
    <!-- 打赏按钮 -->
    <button class="reward-btn" @click="showReward = true">请我吃包辣条</button>
    <!-- 收款码弹窗 -->
    <div v-if="showReward" class="reward-modal" @click="hideReward">
      <div class="reward-modal-content" @click.stop>
        <h3>感谢您的支持</h3>
        <img class="Q" src="~@/assets/icons/wxzf.webp" alt="收款码">
      </div>
    </div>
    <p class="web-footer2">持续更新中......</p>
    <p class="web-footer2"><span id="currentTime"></span></p>
    <p class="web-footer2"> © <span id="currentYear"></span> 所有资源均来源与网络 仅供参考与学习</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const showReward = ref(false);

const hideReward = () => {
    showReward.value = false;
};

onMounted(() => {
    const updateTime = () => {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        const timeString = `${hours}:${minutes}:${seconds}`;
        const timeElement = document.getElementById('currentTime');
        if (timeElement) {
            timeElement.textContent = timeString;
        }
    };
    updateTime();
    setInterval(updateTime, 1000);

    const updateYear = () => {
        const now = new Date();
        const year = now.getFullYear();
        const yearElement = document.getElementById('currentYear');
        if (yearElement) {
            yearElement.textContent = year;
        }
    };
    updateYear();
});
</script>