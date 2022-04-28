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
}, {
  title: '进度池',
  name: 'PercentPond',
  path: '/components/PercentPond',
  component: () => import('@/src/pages/PercentPond/docs/README.md'),
}, {
  title: '水位图',
  name: 'WaterLevelPond',
  path: '/components/WaterLevelPond',
  component: () => import('@/src/pages/WaterLevelPond/docs/README.md'),
}, {
  title: '加载',
  name: 'Loading',
  path: '/components/Loading',
  component: () => import('@/src/pages/Loading/docs/README.md'),
}, {
  title: '飞线图增强版',
  name: 'FlylineChartEnhanced',
  path: '/components/FlylineChartEnhanced',
  component: () => import('@/src/pages/FlylineChartEnhanced/docs/README.md'),
}, {
  title: '飞线图',
  name: 'FlylineChart',
  path: '/components/FlylineChart',
  component: () => import('@/src/pages/FlylineChart/docs/README.md'),
}, {
  title: '排名轮播表',
  name: 'ScrollRankingBoard',
  path: '/components/ScrollRankingBoard',
  component: () => import('@/src/pages/ScrollRankingBoard/docs/README.md'),
}, {
  title: '轮播表',
  name: 'ScrollBoard',
  path: '/components/ScrollBoard',
  component: () => import('@/src/pages/ScrollBoard/docs/README.md'),
}, {
  title: '图表',
  name: 'Charts',
  path: '/components/Charts',
  component: () => import('@/src/pages/Charts/docs/README.md'),
}, {
  title: '胶囊柱图',
  name: 'CapsuleChart',
  path: '/components/CapsuleChart',
  component: () => import('@/src/pages/CapsuleChart/docs/README.md'),
}, {
  title: '动态环图',
  name: 'ActiveRingChart',
  path: '/components/ActiveRingChart',
  component: () => import('@/src/pages/ActiveRingChart/docs/README.md'),
}, {
  title: '数字翻牌器',
  name: 'DigitalFlop',
  path: '/components/DigitalFlop',
  component: () => import('@/src/pages/DigitalFlop/docs/README.md'),
}, {
  title: '全屏容器',
  name: 'FullScreenContainer',
  path: '/components/FullScreenContainer',
  component: () => import('@/src/pages/FullScreenContainer/docs/README.md'),
}, {
  title: '装饰1',
  name: 'Decoration1',
  path: '/components/Decoration1',
  component: () => import('@/src/pages/Decoration1/docs/README.md'),
}, {
  title: '装饰2',
  name: 'Decoration2',
  path: '/components/Decoration2',
  component: () => import('@/src/pages/Decoration2/docs/README.md'),
}, {
  title: '装饰3',
  name: 'Decoration3',
  path: '/components/Decoration3',
  component: () => import('@/src/pages/Decoration3/docs/README.md'),
}, {
  title: '装饰4',
  name: 'Decoration4',
  path: '/components/Decoration4',
  component: () => import('@/src/pages/Decoration4/docs/README.md'),
}, {
  title: '装饰5',
  name: 'Decoration5',
  path: '/components/Decoration5',
  component: () => import('@/src/pages/Decoration5/docs/README.md'),
}, {
  title: '装饰6',
  name: 'Decoration6',
  path: '/components/Decoration6',
  component: () => import('@/src/pages/Decoration6/docs/README.md'),
}, {
  title: '装饰7',
  name: 'Decoration7',
  path: '/components/Decoration7',
  component: () => import('@/src/pages/Decoration7/docs/README.md'),
}, {
  title: '装饰8',
  name: 'Decoration8',
  path: '/components/Decoration8',
  component: () => import('@/src/pages/Decoration8/docs/README.md'),
}, {
  title: '装饰9',
  name: 'Decoration9',
  path: '/components/Decoration9',
  component: () => import('@/src/pages/Decoration9/docs/README.md'),
}, {
  title: '装饰10',
  name: 'Decoration10',
  path: '/components/Decoration10',
  component: () => import('@/src/pages/Decoration10/docs/README.md'),
}, {
  title: '装饰11',
  name: 'Decoration11',
  path: '/components/Decoration11',
  component: () => import('@/src/pages/Decoration11/docs/README.md'),
}, {
  title: '装饰12',
  name: 'Decoration12',
  path: '/components/Decoration12',
  component: () => import('@/src/pages/Decoration12/docs/README.md'),
}, {
  title: '边框1',
  name: 'BorderBox1',
  path: '/components/BorderBox1',
  component: () => import('@/src/pages/BorderBox1/docs/README.md'),
}, {
  title: '边框2',
  name: 'BorderBox2',
  path: '/components/BorderBox2',
  component: () => import('@/src/pages/BorderBox2/docs/README.md'),
}, {
  title: '边框3',
  name: 'BorderBox3',
  path: '/components/BorderBox3',
  component: () => import('@/src/pages/BorderBox3/docs/README.md'),
}, {
  title: '边框4',
  name: 'BorderBox4',
  path: '/components/BorderBox4',
  component: () => import('@/src/pages/BorderBox4/docs/README.md'),
}, {
  title: '边框5',
  name: 'BorderBox5',
  path: '/components/BorderBox5',
  component: () => import('@/src/pages/BorderBox5/docs/README.md'),
}, {
  title: '边框6',
  name: 'BorderBox6',
  path: '/components/BorderBox6',
  component: () => import('@/src/pages/BorderBox6/docs/README.md'),
}, {
  title: '边框7',
  name: 'BorderBox7',
  path: '/components/BorderBox7',
  component: () => import('@/src/pages/BorderBox7/docs/README.md'),
}, {
  title: '边框8',
  name: 'BorderBox8',
  path: '/components/BorderBox8',
  component: () => import('@/src/pages/BorderBox8/docs/README.md'),
}, {
  title: '边框9',
  name: 'BorderBox9',
  path: '/components/BorderBox9',
  component: () => import('@/src/pages/BorderBox9/docs/README.md'),
}, {
  title: '边框10',
  name: 'BorderBox10',
  path: '/components/BorderBox10',
  component: () => import('@/src/pages/BorderBox10/docs/README.md'),
}, {
  title: '边框11',
  name: 'BorderBox11',
  path: '/components/BorderBox11',
  component: () => import('@/src/pages/BorderBox11/docs/README.md'),
}, {
  title: '边框12',
  name: 'BorderBox12',
  path: '/components/BorderBox12',
  component: () => import('@/src/pages/BorderBox12/docs/README.md'),
}, {
  title: '边框13',
  name: 'BorderBox13',
  path: '/components/BorderBox13',
  component: () => import('@/src/pages/BorderBox13/docs/README.md'),
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
