<template>
  <div class="type">
    <div class="text">
      <img v-if="icon" :src="icon" class="tu" alt="icon" />
      {{ title }}
    </div>
    <div class="N">
      <div class="web" v-for="item in links" :key="item.id">
        <a :href="item.link" target="_blank" class="web-a">
          <img v-if="item.icon" :src="item.icon" class="web-icon" :alt="item.title" />
          {{ item.title }}
        </a>
        <span class="tooltip">{{ item.desc }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: { type: String, required: true },
  links: { type: Array, required: true },
  icon: { type: String, default: '' }
})
</script>

<style scoped>
.type {
  height: auto;
  width: 100%;
  background: linear-gradient(180deg, rgba(0, 255, 127, 0.12), rgba(34, 139, 34, 0.08));
  border: 1px solid rgba(0, 200, 100, 0.25);
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 8px;
  backdrop-filter: blur(5px);
}

.tu {
  height: 30px;
  width: auto;
  vertical-align: middle;
  filter: drop-shadow(0 0 5px rgba(0, 200, 100, 0.3));
}

.text {
  font: normal bold 21px 微软雅黑;
  background: linear-gradient(90deg, rgba(0, 200, 100, 0.18), rgba(34, 139, 34, 0.12), rgba(0, 200, 100, 0.18));
  text-indent: 1em;
  text-align: center;
  font-weight: 800;
  color: #ffffff;
  text-shadow: 0 0 10px rgba(0, 200, 100, 0.6);
  border-bottom: 1px solid rgba(0, 200, 100, 0.35);
  padding: 8px 0;
  letter-spacing: 2px;
}

.N {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
}

.web {
  width: 145px;
  height: 50px;
  margin: 10px;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(240, 250, 240, 0.9));
  box-shadow: 0 0 15px rgba(0, 200, 100, 0.15), 0 4px 10px rgba(0, 0, 0, 0.3);
  position: relative;
  transition: all 0.3s ease;
  border-radius: 12px;
  padding: 0 8px;
  overflow: visible;
  border: 1px solid rgba(0, 200, 100, 0.25);
}

.web::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 12px;
  background: linear-gradient(45deg, transparent, rgba(0, 200, 100, 0.12), transparent);
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
}

.web-a {
  text-align: center;
  font-size: 15px;
  font-family: 微软雅黑;
  font-weight: 640;
  width: 100%;
  height: 100%;
  text-decoration: none;
  color: #0a2a0a;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  border-radius: 12px;
  font-weight: bold;
}

.web:hover {
  transform: translateY(-5px);
  box-shadow: 0 0 25px rgba(0, 200, 100, 0.3), 0 6px 15px rgba(0, 0, 0, 0.4);
  border-color: rgba(0, 200, 100, 0.45);
}

.web:hover::before {
  opacity: 1;
}

.tooltip {
  position: absolute;
  top: -20px;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%) translateY(10px);
  padding: 6px 12px;
  background: linear-gradient(135deg, rgba(10, 26, 10, 0.98), rgba(15, 42, 15, 0.98));
  color: #ffffff;
  font-size: 13px;
  border-radius: 10px;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 9999;
  border: 1px solid rgba(0, 200, 100, 0.5);
  box-shadow: 0 8px 32px rgba(0, 200, 100, 0.3), 0 0 0 1px rgba(34, 139, 34, 0.25), 0 0 60px rgba(34, 139, 34, 0.2) inset;
  backdrop-filter: blur(10px);
  font-weight: 500;
  letter-spacing: 0.5px;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1.4;
}

.tooltip::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 10px;
  background: linear-gradient(45deg, transparent, rgba(0, 200, 100, 0.12), transparent);
  pointer-events: none;
}

.web:hover .tooltip {
  opacity: 1;
  visibility: visible;
  top: -52px;
  transform: translateX(-50%) translateY(0);
}

.tooltip::after {
  content: "";
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  border-width: 7px;
  border-style: solid;
  border-color: rgba(15, 42, 15, 0.98) transparent transparent transparent;
  filter: drop-shadow(0 4px 8px rgba(0, 200, 100, 0.25));
  pointer-events: none;
}

.web-a:hover {
  color: #228b22;
}

.web-icon {
  width: 28px;
  height: 28px;
  flex-shrink: 0;
}

@media (max-width: 768px) {
  .text {
    font-size: 18px;
  }

  .web {
    width: 125px;
    height: 45px;
    margin: 8px;
  }

  .web-a {
    font-size: 13px;
    width: 100%;
    height: 100%;
    gap: 4px;
  }

  .web-icon {
    width: 22px;
    height: 22px;
    flex-shrink: 0;
  }

  .tooltip {
    padding: 15px;
    font-size: 11px;
  }
}
</style>
