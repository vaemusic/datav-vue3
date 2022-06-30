<template>
  <div small-bg>
    <dv-digital-flop :config="config1" />
    <button btn @click="changeConfig">
      增加数据
    </button>
  </div>
</template>
<script lang="ts" setup>
function formatter(number: number) {
  const numbers = number.toString().split('').reverse()
  const segs = []

  while (numbers.length) segs.push(numbers.splice(0, 3).join(''))

  return segs.join(',').split('').reverse().join('')
}

const config1 = reactive({
  number: [123456],
  content: '{nt}个',
  formatter,
})

const changeConfig = () => {
  config1.number[0] += Math.random() * 100
}
</script>
