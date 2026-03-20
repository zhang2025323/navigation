<template>
  <div class="App">
    <!-- 添加第一个音频元素 autoplay属性是自动播放 -->
    <audio ref="audioPlayer1" loop> 
      <source src="@/assets/zhengf.mp3" type="audio/mpeg">
    </audio>
        <!-- 第二个音频元素 -->
    <audio ref="audioPlayer2" loop>
      <source src="@/assets/Timeisbroken.mp3" type="audio/mpeg">
    </audio>

    <!-- 添加音乐控制按钮 -->
    <button @click="toggleMusic1" class="music-control">
      {{ isPlaying1 ? '停止播放' : 'music2' }}
    </button>
    <!-- 第二个音乐控制按钮 -->
    <button @click="toggleMusic2" class="music-contro2">
      {{ isPlaying2 ? 'Time is broken' : 'music1' }}
    </button>

    <!-- 头部组件 -->
    <WebHeader></WebHeader>
    <!-- 主体组件 -->
    <WebMain></WebMain>
    <!-- 主体组件2 -->
    <WebMainTwo></WebMainTwo>
    <!-- 底部组件 -->
    <WebFooter></WebFooter>
  </div>
</template>

<script>
import WebHeader from "./components/WebHeader.vue";
import WebMain from "./components/WebMain.vue";
import WebMainTwo from "./components/WebMainTwo.vue";
import WebFooter from "./components/WebFooter.vue";

export default {
  components: {
    // '组件名'：组件对象（组件对象可以省略不写，组件名的规范，最好大驼峰）
    WebHeader,
    WebMain,
    WebFooter,
    WebMainTwo,
  },

  data() {
    return {
      isPlaying1: false,
      isPlaying2: false
    }
  },
  // mounted() {
  //   // 尝试自动播放
  //   this.$refs.audioPlayer1.play().then(() => {
  //     this.isPlaying1 = true;
  //   }).catch(error => {
  //     console.log("自动播放被阻止，需要用户交互:", error);
  //   });
  // },
  methods: {
    toggleMusic1() {
      if (this.isPlaying1) {
        this.$refs.audioPlayer1.pause();
      } else {
        this.$refs.audioPlayer1.play();
      }
      this.isPlaying1 = !this.isPlaying1;
    },
    toggleMusic2() {
      if (this.isPlaying2) {
        this.$refs.audioPlayer2.pause();
      } else {
        this.$refs.audioPlayer2.play();
      }
      this.isPlaying2 = !this.isPlaying2;
    }
  }
};
</script>