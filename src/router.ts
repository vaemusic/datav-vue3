/* eslint-disable prettier/prettier */

/** 
 * !--------- FBI WARNING ----------!
 * 
 * 根据 /packages 目录下的组件所生成的组件类侧边导航栏配置，请勿手动修改
 */

 import { createRouter, createWebHashHistory, RouterOptions } from 'vue-router'

 const routes = [{
    title: '按钮',
    name: 'Button',
    path: '/components/Button',
    component: () => import('packages/Button/docs/README.md'),
  },{
    title: '测试组件',
    name: 'Foo',
    path: '/components/Foo',
    component: () => import('packages/Foo/docs/README.md'),
  },{
    title: '装饰1',
    name: 'Decoration1',
    path: '/components/Decoration1',
    component: () => import('packages/Decoration1/docs/README.md'),
  },{
    title: '装饰2',
    name: 'Decoration2',
    path: '/components/Decoration2',
    component: () => import('packages/Decoration2/docs/README.md'),
  },{
    title: '边框1',
    name: 'BorderBox1',
    path: '/components/BorderBox1',
    component: () => import('packages/BorderBox1/docs/README.md'),
  },{
    title: '边框2',
    name: 'BorderBox2',
    path: '/components/BorderBox2',
    component: () => import('packages/BorderBox2/docs/README.md'),
  },{
    title: '全屏容器',
    name: 'FullScreenContainer',
    path: '/components/FullScreenContainer',
    component: () => import('packages/FullScreenContainer/docs/README.md'),
  }];
 
 const routerConfig = {
   history: createWebHashHistory(),
   routes,
   scrollBehavior(to: any, from: any) {
     if (to.path !== from.path) {
       return { top: 0 };
     }
   },
 };
 
 const router = createRouter(routerConfig as RouterOptions);
 
 export default router;
