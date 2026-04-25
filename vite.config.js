import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import fs from 'fs'
import iconv from 'iconv-lite'

function lrcEncoderPlugin() {
  return {
    name: 'lrc-encoder',
    enforce: 'pre',
    transform(code, id) {
      if (!id.endsWith('.lrc')) return null
      
      try {
        const buffer = fs.readFileSync(id)
        
        // 尝试 UTF-8
        let content = buffer.toString('utf-8')
        
        // 检测是否乱码（包含替换字符或控制字符）
        const isGarbled = /�/.test(content) || 
                         /[?]{4,}/.test(content) || 
                         /[\x00-\x08\x0B\x0C\x0E-\x1F]/.test(content)
        
        if (isGarbled) {
          console.log(`🔄 检测到 GBK 编码歌词: ${path.basename(id)}`)
          
          // 尝试 GBK 转换
          const gbkContent = iconv.decode(buffer, 'gbk')
          
          // 验证转换结果是否合理（包含中文字符）
          if (/[\u4e00-\u9fa5]/.test(gbkContent)) {
            content = gbkContent
            console.log(`✅ 成功转换为 UTF-8`)
          } else {
            console.warn(`⚠️ GBK 转换失败，使用原始内容`)
          }
        }
        
        return {
          code: `export default ${JSON.stringify(content)}`,
          map: null,
          moduleSideEffects: false
        }
      } catch (error) {
        console.error(`❌ 读取歌词文件失败: ${id}`, error)
        return null
      }
    }
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), lrcEncoderPlugin()],
  base: './',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  build: {
    outDir: 'dist'
  }
})
