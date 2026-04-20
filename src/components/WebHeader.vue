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
  background: linear-gradient(180deg, rgba(0, 255, 255, 0.2) 0%, rgba(138, 43, 226, 0.15) 50%, rgba(0, 255, 255, 0.08) 100%);
  border-bottom: 2px solid rgba(0, 255, 255, 0.4);
  overflow: hidden;
}

.web-header::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(0, 255, 255, 0.3), transparent);
  animation: scanLine 3s linear infinite;
}

@keyframes scanLine {
  0% {
    left: -100%;
  }
  100% {
    left: 100%;
  }
}

.glow-text {
  position: relative;
  z-index: 1;
  color: #ffffff;
  text-shadow: 
    0 0 10px #00ffff,
    0 0 20px #00ffff,
    0 0 30px #00ffff,
    0 0 40px #00ffff;
  animation: textPulse 2s ease-in-out infinite;
  letter-spacing: 3px;
  font-weight: bold;
}

@keyframes textPulse {
  0%, 100% {
    text-shadow: 
      0 0 10px #00ffff,
      0 0 20px #00ffff,
      0 0 30px #00ffff;
  }
  50% {
    text-shadow: 
      0 0 15px #00ffff,
      0 0 30px #00ffff,
      0 0 45px #00ffff,
      0 0 60px #00ffff;
  }
}

.header-decoration {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #00ffff, #8a2be2, #00ffff, transparent);
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
</style>
