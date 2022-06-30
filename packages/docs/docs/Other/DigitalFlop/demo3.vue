<template>
  <div small-bg>
    <dv-digital-flop :config="config1" />
    <button btn @click="changeConfig">
      增加数据
    </button>
  </div>
</template>
<script lang="ts" setup>
const config1 = reactive({
  number: [10, 100],
  content: '{nt}个{nt}元',
})

const changeConfig = () => {
  config1.number[0] += Math.random() * 100
  config1.number[1] += Math.random() * 100
}
</script>
