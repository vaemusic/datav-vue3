/**
 * !--------- FBI WARNING ----------!
 *
 * 根据 /packages 目录下的组件所生成的组件类侧边导航栏配置，请勿手动修改
 */

import type { RouterOptions } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [ {
  title: '按钮',
  name: 'Button',
  path: '/components/Button',
  component: () => import('packages/Button/docs/README.md'),
}, {
  title: '测试组件',
  name: 'Foo',
  path: '/components/Foo',
  component: () => import('packages/Foo/docs/README.md'),
}, {
  title: '装饰1',
  name: 'Decoration1',
  path: '/components/Decoration1',
  component: () => import('packages/Decoration1/docs/README.md'),
}, {
  title: '装饰2',
  name: 'Decoration2',
  path: '/components/Decoration2',
  component: () => import('packages/Decoration2/docs/README.md'),
}, {
  title: '装饰3',
  name: 'Decoration3',
  path: '/components/Decoration3',
  component: () => import('packages/Decoration3/docs/README.md'),
}, {
  title: '装饰4',
  name: 'Decoration4',
  path: '/components/Decoration4',
  component: () => import('packages/Decoration4/docs/README.md'),
}, {
  title: '装饰5',
  name: 'Decoration5',
  path: '/components/Decoration5',
  component: () => import('packages/Decoration5/docs/README.md'),
}, {
  title: '边框1',
  name: 'BorderBox1',
  path: '/components/BorderBox1',
  component: () => import('packages/BorderBox1/docs/README.md'),
}, {
  title: '边框3',
  name: 'BorderBox3',
  path: '/components/BorderBox3',
  component: () => import('packages/BorderBox3/docs/README.md'),
}, {
  title: '边框4',
  name: 'BorderBox4',
  path: '/components/BorderBox4',
  component: () => import('packages/BorderBox4/docs/README.md'),
}, {
  title: '边框2',
  name: 'BorderBox2',
  path: '/components/BorderBox2',
  component: () => import('packages/BorderBox2/docs/README.md'),
}, {
  title: '全屏容器',
  name: 'FullScreenContainer',
  path: '/components/FullScreenContainer',
  component: () => import('packages/FullScreenContainer/docs/README.md'),
}]

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
