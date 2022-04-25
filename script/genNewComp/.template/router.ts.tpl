/**
 * !--------- FBI WARNING ----------!
 *
 * 根据 /packages 目录下的组件所生成的组件类侧边导航栏配置，请勿手动修改
 */

import type { RouterOptions } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [{
  title: '首页',
  path: '/',
  name: 'Index',
  component: () => import('./pages/README.md'),
},{{ routes }}]

const routerConfig = {
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to: any, from: any) {
    if (to.path !== from.path)
      return { top: 0 }
  },
}

const router = createRouter(routerConfig as RouterOptions)

export default router
