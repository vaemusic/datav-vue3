import { defineConfig, DefaultTheme } from 'vitepress'
import VueJsx from '@vitejs/plugin-vue-jsx'
import Unocss from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import list from '../../../datav-vue3/list.json'
import path from 'path'

const BorderDecorationList = list.filter(item => item.children && item.children.length > 0)
const OtherList = list.filter(item => !item.children || item.children.length === 0)

const Guide = [
  {
    text: '快速开始',
    link: '/Guide/Guide',
  },
  {
    text: '边框组件注意事项',
    link: '/Guide/BorderTip',
  },
  {
    text: '二次开发',
    link: '/Guide/contribute',
  },
]

const getDecorationLinkList = ()=>{
  const links: any[] = []

  BorderDecorationList[0].children?.forEach(item => {
    links.push({
      text: item.compZhName,
      link: `/Decoration/${item.compName}/${item.compName}`,
    })
  })
  return links
}

const getBorderLinkList = ()=>{
  const links: DefaultTheme.SidebarItem[] = []

  BorderDecorationList[1].children?.forEach(item => {
    links.push({
      text: item.compZhName,
      link: `/Border/${item.compName}/${item.compName}`,
    })
  })
  return links
}

const getOtherLinkList = ()=>{
  const links: DefaultTheme.SidebarItem[] = []  
  OtherList?.forEach(item => {
    links.push({
      text: item.compZhName,
      link: `/Other/${item.compName}/${item.compName}`,
    })
  })
  return links
}

const SideBar: DefaultTheme.SidebarItem[] = [
  { text: '介绍', items: Guide },
  { text: '边框', items: getBorderLinkList() },
  { text: '装饰', items: getDecorationLinkList() },
  { text: '其他', items: getOtherLinkList() },
] 

export default defineConfig({
  title: 'DataV - Vue3',
  markdown:{
    theme: {
      light: 'vitesse-light',
      dark: 'vitesse-dark',
    }
  },
  themeConfig: {
    siteTitle: 'DataV - Vue3',
    outlineTitle: '目录',
    search:{
      provider: 'local',
    },
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/vaemusic/datav-vue3',
      },
    ],
    nav: [
      { text: '指引', link: '/Guide/Guide' },
      { text: 'Demo', link: '/Demo/Demo' },
    ],
    sidebar: SideBar,
  },
  vite: {
    resolve: {
      alias: {
        'packages': `${path.resolve(__dirname, '../../../')}/`,
      },
    },
    plugins: [
      Unocss(),
      VueJsx(),
      AutoImport({
        imports: [
          'vue',
        ],
        dts: true,
      }),
    ],
    server:{
      fs:{
        allow: ['..'],
      }
    },
    esbuild: {
      jsxFactory: 'h',
      jsxFragment: 'Fragment',
      jsxInject: 'import { h } from "vue"',
    }
  },
})
