<template>
  <div :style="`width: ${width}rem`" h22rem flex="~ col" p3 justify-center items-center bg-dark>
    <dv-border-box1 ref="borderRef" :color="['red','blue']">
      <div :style="`width: ${width}rem`" h18rem color-white flex justify-center items-center>
        dv-border-box1
      </div>
    </dv-border-box1>
    <button btn @click="handelClick">add</button>
  </div>
</template>

<script setup lang="ts">
import { BorderBox1 } from '@kjgl77/datav-vue3'
const borderRef = ref<InstanceType<typeof BorderBox1>>()
const width = ref(20)
const handelClick = ()=>{
  width.value += 2
  borderRef.value?.initWH()
}
</script>
