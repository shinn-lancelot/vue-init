import path from 'path'
import { defineConfig, loadEnv } from 'vite'
import Vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import ViteImages from 'vite-plugin-vue-images'
import Markdown from 'vite-plugin-vue-markdown'
import Pages from 'vite-plugin-pages'
import Unocss from 'unocss/vite'
import ViteCompression from 'vite-plugin-compression'
// import BasicSsl from '@vitejs/plugin-basic-ssl'
import Progress from 'vite-plugin-progress'
import { viteVConsole } from 'vite-plugin-vconsole'
import { qrcode } from 'vite-plugin-qrcode'
import colors from 'picocolors'

export default defineConfig((config) => {
  // 获取环境供配置需要 const env = loadEnv(config.mode, process.cwd())
  loadEnv(config.mode, process.cwd())
  const { command, mode } = config

  // 选项：https://cn.vitejs.dev/config/shared-options.html
  return {
    plugins: [
      // https://github.com/vitejs/vite/tree/main/packages/plugin-vue
      Vue({
        include: [/\.vue$/, /\.md$/],
      }),

      // https://github.com/antfu/unplugin-auto-import
      AutoImport({
        imports: [
          'vue',
          'vue-router',
          'pinia',
          '@vueuse/core',
          '@vueuse/head',
        ],
        dts: 'src/auto-imports.d.ts',
        dirs: [
          'src/api',
          'src/common/js',
          'src/store',
        ],
      }),

      // https://github.com/antfu/unplugin-vue-components
      Components({
        dirs: ['src/components'],
        extensions: ['vue', 'md'],
        dts: 'src/components.d.ts',
        include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      }),

      // https://github.com/sampullman/vite-plugin-vue-images
      ViteImages({
        dirs: [
          'src/assets/images',
        ],
      }),

      // https://github.com/antfu/vite-plugin-vue-markdown
      Markdown(),

      // https://github.com/hannoeru/vite-plugin-pages
      Pages({
        dirs: [
          { dir: 'src/pages', baseRoute: '' },
        ],
        extensions: ['vue', 'md'],
      }),

      // https://github.com/unocss/unocss
      // 此处不配置，直接在unocss.config.js中配置
      Unocss(),

      // https://github.com/vbenjs/vite-plugin-compression
      ViteCompression({
        filter: /\.(js|mjs|json|css|html)$/i,
      }),

      // https://github.com/vitejs/vite-plugin-basic-ssl
      // BasicSsl(),

      // https://github.com/jeddygong/vite-plugin-progress
      Progress({
        format: `${colors.green(colors.bold('Bouilding'))} ${colors.cyan('[:bar]')} :percent`,
      }),

      // https://github.com/vadxq/vite-plugin-vconsole
      viteVConsole({
        entry: [
          path.resolve(__dirname, 'src/main.js'),
        ],
        localEnabled: command === 'serve',
        enabled: command !== 'serve' || mode === 'test',
        config: {
          maxLogNumber: 1000,
          theme: 'dark',
        },
      }),

      // https://github.com/svitejs/vite-plugin-qrcode
      qrcode(),
    ],

    server: {
      host: '0.0.0.0',
      port: 1180,
      open: '/index.html',
    },

    resolve: {
      alias: {
        '~': path.resolve(__dirname, 'src'),
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

    build: {
      minify: 'terser',

      // https://terser.org/docs/api-reference#minify-options
      terserOptions: {
        compress: {
          drop_console: true,
        },
        format: {
          comments: false,
        },
      },

      // https://rollupjs.org/guide/en/#big-list-of-options
      rollupOptions: {
        output: {
          assetFileNames: 'assets/[ext]/[name].[hash].[ext]',
          chunkFileNames: 'assets/js/[name].[hash].js',
          entryFileNames: 'assets/js/[name].[hash].js',
        },
      },
    },

    // https://cn.vitest.dev/config/
    test: {
      include: [
        'test/**/*.test.{js,ts}',
      ],
    },
  }
})
