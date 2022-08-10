import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig((config) => {
  let env = loadEnv(config.mode, process.cwd())
  // 选项：https://cn.vitejs.dev/config/shared-options.html
  return {
    plugins: [
      vue()
    ],
    server: {
      host: '0.0.0.0',
      port: 1180,
      open: '/index.html'
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '../src'),
        api: path.resolve(__dirname, '../src/api'),
        assets: path.resolve(__dirname, '../src/assets'),
        common: path.resolve(__dirname, '../src/common'),
        components: path.resolve(__dirname, '../src/components'),
        views: path.resolve(__dirname, '../src/views'),
        router: path.resolve(__dirname, '../src/router'),
        store: path.resolve(__dirname, '../src/store')
      }
    }
  }
})