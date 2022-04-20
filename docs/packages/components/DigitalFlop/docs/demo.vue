<template>
  <div style="width:800px;height:200px;" flex="~ " justify-center items-center bg-dark>
    <dv-digital-flop :config="config1"/>
    <el-button @click="changeConfig">增加数据</el-button>
  </div>
</template>
<script lang="ts" setup>
import { DigitalFlopConfigType } from '../src/type';

let config1: DigitalFlopConfigType = reactive({
  number: [100],
  content: '{nt}个',
})

const changeConfig = () => {
  config1.number[0] += Math.random() * 100
}
</script>
