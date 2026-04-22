import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // 关键配置：设置基础路径
  // 使用自定义域名时设为 /
  base: '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  // 打包配置（优化打包结果）
  build: {
    outDir: 'dist', // 打包输出目录，默认就是dist，可省略
    assetsDir: 'assets', // 静态资源目录
    // 使用默认的 esbuild 压缩（更快，不需要额外依赖）
    minify: 'esbuild',
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
