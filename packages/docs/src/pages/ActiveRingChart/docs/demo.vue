<template>
  <div style="width:50rem;height:34rem;" flex="~ col" justify-center items-center bg-dark>
    <dv-active-ring-chart :config="conf" style="width:300px;height:300px" />
    <div>
      <div>
        城市： <el-input v-model="cityName" />
      </div>
      <div>
        Value： <el-input v-model="cityValue" type="number" />
      </div>
      <div pt5>
        <button btn @click="addData">
          添加数据
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>

const cityName = ref('')
const cityValue = ref(58)

const addData = () => {
  if (!cityName.value || !cityValue.value)
    return

  conf.data.push({
    name: cityName.value,
    value: parseInt(cityValue.value),
  })
}

let conf = reactive({
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
})
</script>
