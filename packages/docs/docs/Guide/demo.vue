<template>
  <div flex="~ col" bg-dark>
    <div demo-bg :style="`width: ${width}rem`">
      <dv-border-box11 ref="dvBorder11" title="dv-border-box-11" :title-width="400">
        <div dv-bg>
          dv-border-box-11
        </div>
      </dv-border-box11>
    </div>
    <div self-center py5>
      <button @click="addWith" btn>增加边框组件父容器宽度</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { BorderBox11 as DvBorderBox11 } from '@kjgl77/datav-vue3'
const dvBorder11 = ref<InstanceType<typeof DvBorderBox11> | null>(null)

const width = ref(40)

// 每点击一次，边框组件父容器宽度加2rem
const addWith = () => {
  width.value += 2
  dvBorder11.value?.initWH()
}
</script>
