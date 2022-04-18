import type { App, Plugin } from 'vue'
import BorderBox1 from './src/index.vue'

export const BorderBox1Plugin: Plugin = {
  install(app: App) {
    app.component('DvBorderBox1', BorderBox1)
  },
}

export {
  BorderBox1,
}
