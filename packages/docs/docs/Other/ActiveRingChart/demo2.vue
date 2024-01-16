<template>
  <div w50rem h34rem flex="~ col" justify-center items-center bg-dark>
    <dv-active-ring-chart :config="conf" style="width:300px;height:300px" :isDigitalFlop="false"/>
    <div flex="~ col" gap2 justify-center items-center>
      <div>
        <span text-white>城市：</span>
        <input v-model="cityName" demo-input />
      </div>
      <div>
        <span text-white>Value：</span>
        <input v-model="cityValue" type="number" demo-input />
      </div>
      <div>
        <button btn @click="addData">
          添加数据
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>

const cityName = ref('测试')
const cityValue = ref(58)

const conf = reactive({
  lineWidth: 24,
  digitalFlopStyle: {
    fill: 'pink',
  },
  data: [
    {
      name: '杭州',
      value: 98,
    },
    {
      name: '金华',
      value: 150,
    },
    {
      name: '宁波',
      value: 62,
    },
    {
      name: '太原',
      value: 54,
    },
  ],
  numToFixed: 2,
})

const addData = () => {
  if (!cityName.value || !cityValue.value)
    return

  conf.data.push({
    name: cityName.value,
    value: parseInt(cityValue.value),
  })
}
</script>
