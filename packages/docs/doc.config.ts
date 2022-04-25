import { defineConfig } from 'vite'
import Markdown from 'vite-plugin-md'
import Unocss from 'unocss/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

import baseConfig from '../../build/base.config'

export default defineConfig({
  ...baseConfig,
  base: '/',
  plugins: [
    ...(baseConfig as any).plugins,
     // https://github.com/antfu/unplugin-auto-import
     AutoImport({
      imports: [
        'vue-router',
        '@vueuse/core',
      ],
      resolvers: [ElementPlusResolver()],
      dts: true,
    }),

    // https://github.com/antfu/vite-plugin-components
    Components({
      resolvers: [ElementPlusResolver()],
      dts: true,
    }),

    // https://github.com/antfu/unocss
    // see unocss.config.ts for config
    Unocss(),
    Markdown({
      markdownItSetup(md) {
        // add code syntax highlighting with Prism
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        md.use(require('markdown-it-prism'))
      },
    }),
  ],
  build: {
    outDir: 'docs',
  },
})
