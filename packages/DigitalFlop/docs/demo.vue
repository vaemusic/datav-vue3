<template>
  <div style="width:800px;height:200px;" flex="~ " justify-center items-center bg-dark>
    <dv-digital-flop :config="config1"/>
    <el-button @click="changeConfig">切换数据</el-button>
  </div>
</template>
<script setup>
let config1 = {
  number: [100],
  content: '{nt}个'
}

const config2 = {
  number: [999],
  content: '{nt}个'
}

const changeConfig = () => {
  config1 = { ...config2 }
  console.log(config1)
}
</script>
