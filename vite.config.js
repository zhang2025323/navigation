import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  base: '/MyWeb/MyNavigating/', // 对应 main 分支的 MyNavigating 目录
  plugins: [vue()]
});