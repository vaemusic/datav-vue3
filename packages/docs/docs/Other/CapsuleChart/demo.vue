<template>
  <div w50rem h25rem flex="~ col" justify-center items-center bg-dark>
    <div>
      <dv-capsule-chart :config="config" style="width:25rem;height:15rem" />
    </div>
    <div pt5>
      <button btn @click="addData">增加数据</button>
    </div>
  </div>
</template>
<script setup lang="ts">

const addData = ()=>{
  config.data.push({
    name: '测试'+Math.floor(Math.random() * 100),
    value: Math.floor(Math.random() * 100)
  })
}

const config = reactive({
  data: [
    {
      name: '南阳',
      value: 167
    },
    {
      name: '周口',
      value: 123
    },
    {
      name: '漯河',
      value: 98
    },
    {
      name: '郑州',
      value: 75
    },
    {
      name: '西峡',
      value: 66
    },
  ],
  colors: ['#e062ae', '#fb7293', '#e690d1', '#32c5e9', '#96bfff'],
  unit: '万元',
  labelNum: 8,
})
</script>
