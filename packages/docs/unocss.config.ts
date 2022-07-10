import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  presetWebFonts,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    ['btn', 'px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    ['demo-bg', 'w50rem h18rem p3 flex justify-center items-center bg-dark'],
    ['dv-bg', 'w50rem h18rem color-white flex justify-center items-center'],
    ['demo-input','bg-white dark:bg-dark border rounded px2 py1'],
    ['small-bg', 'w800px h200px flex justify-center items-center bg-dark'],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
    presetWebFonts({
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
  ],
})
