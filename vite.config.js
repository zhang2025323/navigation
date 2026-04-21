import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // 关键配置：设置基础路径
  // 格式：/你的仓库名称/
  base: '/navigation/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  // 打包配置（可选，优化打包结果）
  build: {
    outDir: 'dist', // 打包输出目录，默认就是dist，可省略
    assetsDir: 'assets' // 静态资源目录
  }
})
