import type { App, Plugin } from 'vue'
import BorderBox13 from './src/index.vue'

export const BorderBox13Plugin: Plugin = {
  install(app: App) {
    app.component('DvBorderBox13', BorderBox13)
  },
}

export {
  BorderBox13,
}
