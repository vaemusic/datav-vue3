import type { App, Plugin } from 'vue'
import BorderBox9 from './src/index.vue'

export const BorderBox9Plugin: Plugin = {
  install(app: App) {
    app.component('DvBorderBox9', BorderBox9)
  },
}

export {
  BorderBox9,
}
