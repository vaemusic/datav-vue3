import { defineConfig } from 'vite'
import baseConfig from './base.config'

export default defineConfig({
  ...baseConfig,
  base: '/datav-vue3/',
  build: {
    outDir: 'docs',
  },
})
