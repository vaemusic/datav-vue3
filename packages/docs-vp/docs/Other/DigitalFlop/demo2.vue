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
  number: [100.28],
  content: '{nt}个',
  toFixed: 2,
})

const changeConfig = () => {
  config1.number[0] += Math.random() * 10
}
</script>
