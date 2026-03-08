<template>
  <div class="App">
    <!-- 头部组件 -->
    <WebHeader></WebHeader>
    <!-- 主体组件 -->
    <WebMain></WebMain>
    <!-- 底部组件 -->
    <WebFooter></WebFooter>
  </div>
</template>

<script>
import WebHeader from "./components/WebHeader.vue";
import WebMain from "./components/WebMain.vue";
import WebFooter from "./components/WebFooter.vue";

export default {
  components: {
    // '组件名'：组件对象（组件对象可以省略不写，组件名的规范，最好大驼峰）
    WebHeader,
    WebMain,
    WebFooter,
  },
};
</script>

<style>
.App {
  width: 100%;
  height: 1080px;
  background-color: rgb(239, 238, 238);
}
</style>