import baseConfig from './base.config';
import { defineConfig } from 'vite';

export default defineConfig({
  ...baseConfig,
  base: '/datav-vue3',
  build: {
    outDir: 'docs',
  },
});
