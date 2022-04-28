import type { App, Plugin } from 'vue'
import BorderBox12 from './src/index.vue'

export const BorderBox12Plugin: Plugin = {
  install(app: App) {
    app.component('DvBorderBox12', BorderBox12)
  },
}

export {
  BorderBox12,
}
