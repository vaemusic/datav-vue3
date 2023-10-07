<script setup lang="ts">
import topHeader from './topHeader.vue'
import { reactive } from 'vue'

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
  textColor: 'red',
})
</script>

<template>
  <topHeader />
  <div flex>
    <div h100 w80>
      <dv-border-box4 :color="['red', 'purple']">
        11
      </dv-border-box4>
    </div>
    <div h100 w80>
      <dv-border-box4 :color="['blue', 'yellow']">
        11
      </dv-border-box4>
    </div>
    <div h100 w80>
      <dv-border-box4>11</dv-border-box4>
    </div>
  </div>
  <div flex>
    <div h100 w80>
      <dv-border-box12 :color="['green', 'red']">
        11
      </dv-border-box12>
    </div>
    <div h100 w80>
      <dv-border-box12 :color="['red', 'yellow']">
        11
      </dv-border-box12>
    </div>
    <div h100 w80>
      <dv-border-box11 title="测试标题">11</dv-border-box11>
    </div>
    <div>
      <dv-capsule-chart :config="config" style="width:25rem;height:15rem" />
    </div>
  </div>
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
