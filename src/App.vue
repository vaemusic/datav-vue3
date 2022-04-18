<template>
  <div class="dv-kit-doc">
    <aside>
      <!-- <router-link v-for="(link, index) in data.links" :key="index" :to="link.path">
        {{ link.name }}
      </router-link> -->
      <DvMenu :list="ComponentList" active-index="1"/>
    </aside>
    <main>
      <div flex="~" justify-end py1 pr25>
        <Footer />
      </div>
      <router-view />
    </main>
  </div>
</template>

<script lang="ts" setup>
import ComponentList from 'packages/list.json'
import { MenuItem } from '@/types'

// const data = reactive({
//   links: ComponentList.map(item => ({
//     path: `/components/${item.compName}`,
//     name: item.compZhName,
//   })),
// })

const list:Array<MenuItem> = [
  {
    compType: '装饰',
    children: [
      {
        compType: '装饰',
        compZhName: '装饰1',
        compName: 'Decoration1'
      },
      {
        compType: '装饰',
        compZhName: '装饰2',
        compName: 'Decoration2'
      }
    ] 
  },
  {
    compType: '边框',
    children: [
      {
        compType: '边框',
        compZhName: '边框1',
        compName: 'BorderBox1'
      },
      {
        compType: '边框',
        compZhName: '边框2',
        compName: 'BorderBox2'
      }
    ] 
  }
]
</script>

<style lang="less">
html,
body {
  margin: 0;
  padding: 0;
}

.dv-kit-doc {
  display: flex;
  min-height: 100vh;

  aside {
    width: 200px;
    padding: 15px;
    border-right: 1px solid #ccc;
    display: flex;
    flex-direction: column;
  }

  main {
    width: 100%;
    flex: 1;
    padding: 15px;
  }
}
</style>
