<template>
  <div class="dv-kit-doc">
    <aside>
      <!-- <router-link v-for="(link, index) in data.links" :key="index" :to="link.path">
        {{ link.name }}
      </router-link> -->
      <DvMenu :list="ComponentList" active-index="1" />
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
import ComponentList from 'packages/datav-vue3/list.json'

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
