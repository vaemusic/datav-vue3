/// <reference types="vitest" />

import path from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
  resolve: {
    alias: {
      '@': `${path.resolve(__dirname, '../packages/docs')}/`,
      'packages': `${path.resolve(__dirname, '../packages')}/`,
    },
  },
  plugins: [
    Vue({
      reactivityTransform: true,
      include: [/\.vue$/, /\.md$/],
    }),

    AutoImport({
      imports: [
        'vue',
        'vue/macros',
      ],
      dts: true,
    }),
  ],

  // https://github.com/vitest-dev/vitest
  test: {
    environment: 'jsdom',
  },
})
