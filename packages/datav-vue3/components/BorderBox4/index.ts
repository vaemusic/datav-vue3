import type { App, Plugin } from 'vue'
import BorderBox4 from './src/index.vue'

export const BorderBox4Plugin: Plugin = {
  install(app: App) {
    app.component('DvBorderBox4', BorderBox4)
  },
}

export {
  BorderBox4,
}
