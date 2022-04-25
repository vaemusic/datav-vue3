/**
 * !--------- FBI WARNING ----------!
 *
 * 根据 /packages 目录下的组件所生成的模块导出，请勿手动修改
 */
import type { App, Plugin } from 'vue'

{{ importPlugins }}

const DataVVue3Plugin: Plugin = {
  install(app: App) {
    {{ installPlugins }}
  },
}

export default DataVVue3Plugin

{{ exportPlugins }}
