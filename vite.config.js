import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  plugins: [vue()],
  // 配置前端服务地址和端口
  server: {
    host: '0.0.0.0',
    port: 3000,
    // 是否開 https
    https: false,
  },
  // 设置反向代理，跨域
  proxy: {
    '/api1': {
      // 后台地址
      target: 'http://127.0.0.1:8080/',
      changeOrigin: true,
      rewrite: path => path.replace(/^\/api1/, '')
    },
    '/api2': {
      // 后台地址
      target: 'http://127.0.0.1:8080/',
      changeOrigin: true,
      rewrite: path => path.replace(/^\/api2/, '')
    }
  }
})
