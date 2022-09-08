import {
  defineConfig,
  presetIcons,
  presetUno,
  // presetWebFonts,
} from 'unocss'

export default defineConfig({
  presets: [
    // https://github.com/unocss/unocss
    presetUno(),
    // https://github.com/unocss/unocss/tree/main/packages/preset-icons
    presetIcons({
      scale: 1.2,
    }),
    // https://github.com/unocss/unocss/tree/main/packages/preset-web-fonts
    // presetWebFonts(),
  ],
})
