import DefaultTheme from 'vitepress/theme'
import './style/code.css'
import './style/overrides.css'
import 'uno.css'
import { Theme } from 'vitepress'
import DataVVue3Plugin from '@kjgl77/datav-vue3'

const theme: Theme = {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(DataVVue3Plugin)
  }
}

export default theme
