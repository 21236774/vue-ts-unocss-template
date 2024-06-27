import { defineConfig } from 'vite'
import { resolve } from 'path'
import Pages from 'vite-plugin-pages'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'

export default defineConfig({
  resolve: {
    // 目录别名
    alias: {
      '@': resolve(__dirname, './src')
    },
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
  },
  plugins: [vue(), UnoCSS(), Pages({ dirs: 'src/views' })],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
