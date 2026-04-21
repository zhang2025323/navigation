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
  // 打包配置（优化打包结果）
  build: {
    outDir: 'dist', // 打包输出目录，默认就是dist，可省略
    assetsDir: 'assets', // 静态资源目录
    // 启用压缩
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // 移除 console
        drop_debugger: true // 移除 debugger
      }
    },
    // 代码分割配置
    rollupOptions: {
      output: {
        manualChunks: {
          'vue-vendor': ['vue'] // 将 vue 单独打包
        },
        // 资源文件名优化
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      }
    },
    // 小于 10kb 的资源内联
    assetsInlineLimit: 10240,
    // 启用报告
    reportCompressedSize: true,
    // 目标浏览器兼容性
    target: 'es2015'
  }
})
