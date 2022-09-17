<script setup lang="ts">
import { ref } from 'vue'
import { BorderBox2 as DvBorderBox2 } from '@kjgl77/datav-vue3'
let width = $ref(20)
const borderRef = ref<InstanceType<typeof DvBorderBox2>>()

const handelClick = () => {
  width += 2
  borderRef.value?.initWH()
}
</script>

<template>
  <div :style="`width:${width}rem;height:20rem`">
    <DvBorderBox2 ref="borderRef">
      <div style="padding-top:10rem;color:#fff">
        test
      </div>
    </DvBorderBox2>
  </div>
  <button style="margin-top: 2rem;" @click="handelClick">
    Add
  </button>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
