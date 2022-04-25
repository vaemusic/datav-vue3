import type { App, Plugin } from 'vue'
import BorderBox10 from './src/index.vue'

export const BorderBox10Plugin: Plugin = {
  install(app: App) {
    app.component('DvBorderBox10', BorderBox10)
  },
}

export {
  BorderBox10,
}
