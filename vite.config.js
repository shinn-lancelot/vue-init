import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import basicSsl from '@vitejs/plugin-basic-ssl'
import unocss from 'unocss/vite'
import autoImport from 'unplugin-auto-import/vite'
import components from 'unplugin-vue-components/vite'
import path from 'path'

export default defineConfig((config) => {
  let env = loadEnv(config.mode, process.cwd())
  // 选项：https://cn.vitejs.dev/config/shared-options.html
  return {
    plugins: [
      vue(),
      // https://github.com/vitejs/vite-plugin-basic-ssl
      // basicSsl(),
      // https://github.com/unocss/unocss
      unocss(),
      // https://github.com/antfu/unplugin-auto-import
      autoImport({
        imports: [
          'vue',
          'vue-router',
          '@vueuse/head'
        ]
      }),
      // https://github.com/antfu/unplugin-vue-components
      components({
        dirs: ['src/components'],
        extensions: ['vue'],
        include: [/\.vue$/, /\.vue\?vue/]
      })
    ],
    server: {
      host: '0.0.0.0',
      port: 1180,
      open: '/index.html'
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        api: path.resolve(__dirname, 'src/api'),
        assets: path.resolve(__dirname, 'src/assets'),
        common: path.resolve(__dirname, 'src/common'),
        components: path.resolve(__dirname, 'src/components'),
        views: path.resolve(__dirname, 'src/views'),
        router: path.resolve(__dirname, 'src/router'),
        store: path.resolve(__dirname, 'src/store')
      },
      extensions: [
        '.mjs',
        '.js',
        '.ts',
        '.jsx',
        '.tsx',
        '.json',
        '.sass',
        '.scss',
        '.css',
        // '.vue',
      ]
    }
  }
})