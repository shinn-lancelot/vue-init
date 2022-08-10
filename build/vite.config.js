import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

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
    }
  }
})