import type { App, Plugin } from 'vue'
import BorderBox11 from './src/index.vue'

export const BorderBox11Plugin: Plugin = {
  install(app: App) {
    app.component('DvBorderBox11', BorderBox11)
  },
}

export {
  BorderBox11,
}
