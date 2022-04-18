import { createApp } from 'vue'
// import { createRouter, createWebHistory } from 'vue-router'
// import routes from 'virtual:generated-pages'
import MyKit from '../packages'
import router from './router'
import App from './App.vue'

import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'

import './assets/markdown.css'

import Preview from './components/Preview.vue'

const app = createApp(App)
// const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
//   routes,
// })
app.component('Preview', Preview)
app.use(router)
app.use(MyKit)
app.mount('#app')
