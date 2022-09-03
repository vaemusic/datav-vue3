import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      // reactivityTransform: path.resolve(__dirname, 'src'),
      reactivityTransform: true,
    }),
  ],
})
