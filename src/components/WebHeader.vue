<template>
  <div class="web-header">
    <span class="glow-text">导航百宝箱</span>
    <div class="header-decoration"></div>
  </div>
</template>
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
}
</style>
