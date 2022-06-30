<template>
  <div w50rem h24rem p3 flex="~ col" justify-center items-center bg-dark>
    <div>
      <dv-scroll-ranking-board :config="config" style="width:500px;height:300px" />
    </div>
    <div pt5>
      <button btn @click="addData">
        增加数据
      </button>
    </div>
  </div>
</template>
<script setup>
const config = reactive({
  data: [
    {
      name: '周口',
      value: 55,
    },
    {
      name: '南阳',
      value: 120,
    },
    {
      name: '西峡',
      value: 78,
    },
    {
      name: '驻马店',
      value: 66,
    },
    {
      name: '新乡',
      value: 80,
    },
    {
      name: '信阳',
      value: 45,
    },
    {
      name: '漯河',
      value: 29,
    },
  ],
  unit: '万元',
})

const addData = () => {
  config.data.push({
    name: `新增城市${Math.floor(Math.random() * 100)}`,
    value: Math.floor(Math.random() * 100),
  })
}
</script>
