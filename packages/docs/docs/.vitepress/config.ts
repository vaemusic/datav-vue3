// @ts-expect-error missing type
import base from '@vue/theme/config'
import { defineConfig } from 'vitepress'
import highlight from './plugins/highlight'
import Unocss from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import list from '../../../datav-vue3/list.json'

const BorderDecorationList = list.filter(item => item.children && item.children.length > 0)
const OtherList = list.filter(item => !item.children || item.children.length === 0)

const getDecorationLinkList = ()=>{
  const links: any[] = []

  BorderDecorationList[0].children?.forEach(item => {
    links.push({
      text: item.compZhName,
      link: `/Decoration/${item.compName}/index`,
    })
  })
  return links
}

const getBorderLinkList = ()=>{
  const links: any[] = []

  BorderDecorationList[1].children?.forEach(item => {
    links.push({
      text: item.compZhName,
      link: `/Border/${item.compName}/index`,
    })
  })
  return links
}

const getOtherLinkList = ()=>{
  const links: any[] = []  
  OtherList?.forEach(item => {
    links.push({
      text: item.compZhName,
      link: `/Other/${item.compName}/index`,
    })
  })
  return links
}

const themeConfig = async() => {
  const config = await base()
  config.markdown.highlight = await highlight()
  return config
}

export default defineConfig({
  extends: themeConfig,
  title: 'DataV - Vue3',
  themeConfig: {
    siteTitle: 'DataV - Vue3',
    outlineTitle: '目录',
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/vaemusic/datav-vue3',
      },
    ],
    nav: [
      { text: '指引', link: '/Guide/index' },
      { text: 'Demo', link: '/Demo/index' },
    ],
    sidebar:[
      {
        text: '介绍',
        items: [
          {
            text: '快速开始',
            link: '/Guide/index',
          }
        ],
      },
      {
        text: '图表',
        collapsible: true,
        items: getOtherLinkList(),
      },
      {
        text: '边框',
        collapsible: true,
        items: getBorderLinkList(),
      },
      {
        text: '装饰',
        collapsible: true,
        items: getDecorationLinkList(),
      },
    ]
  },
  vite: {
    plugins: [
      Unocss(),
      AutoImport({
        imports: [
          'vue',
        ],
        dts: true,
      }),
    ]
  },
  vue: {
    reactivityTransform: true,
  }
})
