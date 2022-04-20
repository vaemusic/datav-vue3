<template>
  <div style="width:800px;height:200px;" flex="~ " justify-center items-center bg-dark>
    <dv-digital-flop :config="config1"/>
    <el-button @click="changeConfig">增加数据</el-button>
  </div>
</template>
<script lang="ts" setup>
import { DigitalFlopConfigType } from '../src/type';

function formatter (number: number) {
  const numbers = number.toString().split('').reverse()
  const segs = []

  while (numbers.length) segs.push(numbers.splice(0, 3).join(''))

  return segs.join(',').split('').reverse().join('')
}

let config1: DigitalFlopConfigType = reactive({
  number: [123456],
  content: '{nt}个',
  formatter
})

const changeConfig = () => {
  config1.number[0] += Math.random() * 100
}
</script>
