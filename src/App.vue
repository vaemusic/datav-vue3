<template>
  <div class="dv-kit-doc">
    <aside>
      <router-link v-for="(link, index) in data.links" :key="index" :to="link.path">
        {{ link.name }}
      </router-link>
    </aside>
    <main>
      <div flex="~" justify-end py1 pr25>
        <Footer />
      </div>
      <router-view />
    </main>
  </div>
</template>

<script setup>
import ComponentList from 'packages/list.json'

const data = reactive({
  links: ComponentList.map(item => ({
    path: `/components/${item.compName}`,
    name: item.compZhName,
  })),
})
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
