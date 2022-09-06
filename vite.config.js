import path from 'path'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
// import basicSsl from '@vitejs/plugin-basic-ssl'
import unocss from 'unocss/vite'
import autoImport from 'unplugin-auto-import/vite'
import components from 'unplugin-vue-components/vite'
import markdown from 'vite-plugin-vue-markdown'
import pages from 'vite-plugin-pages'

export default defineConfig((config) => {
  // 获取环境供配置需要 const env = loadEnv(config.mode, process.cwd())
  loadEnv(config.mode, process.cwd())
  // 选项：https://cn.vitejs.dev/config/shared-options.html
  return {
    plugins: [
      vue({
        include: [/\.vue$/, /\.md$/],
      }),
      // https://github.com/vitejs/vite-plugin-basic-ssl
      // basicSsl(),
      // https://github.com/unocss/unocss
      unocss(),
      // https://github.com/antfu/unplugin-auto-import
      autoImport({
        imports: [
          'vue',
          'vue-router',
          '@vueuse/core',
          '@vueuse/head',
        ],
        dts: 'src/auto-imports.d.ts',
      }),
      // https://github.com/antfu/unplugin-vue-components
      components({
        dirs: ['src/components'],
        extensions: ['vue', 'md'],
        dts: 'src/components.d.ts',
        include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      }),
      // https://github.com/antfu/vite-plugin-vue-markdown
      markdown(),
      // https://github.com/hannoeru/vite-plugin-pages
      pages({
        dirs: [
          { dir: 'src/pages', baseRoute: '' },
        ],
        extensions: ['vue', 'md'],
      }),
    ],
    server: {
      host: '0.0.0.0',
      port: 1180,
      open: '/index.html',
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        'api': path.resolve(__dirname, 'src/api'),
        'assets': path.resolve(__dirname, 'src/assets'),
        'common': path.resolve(__dirname, 'src/common'),
        'components': path.resolve(__dirname, 'src/components'),
        'pages': path.resolve(__dirname, 'src/pages'),
        'router': path.resolve(__dirname, 'src/router'),
        'store': path.resolve(__dirname, 'src/store'),
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
      ],
    },
  }
})
