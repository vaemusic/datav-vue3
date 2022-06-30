<template>
  <div small-bg>
    <dv-percent-pond :config="config" style="width:200px;height:50px;" />
  </div>
</template>
<script lang="ts" setup>
const fullWidth = 300
const borderGap = 3
const borderWidth = 3
const usefulWidth = fullWidth - (borderGap + borderWidth) * 2

const pieceLength = [0.25, 0.5, 0.25]
const pieceGap = 3

const lineDash = pieceLength
  .map(l => [usefulWidth * l, pieceGap])
  .reduce((all, current) => [...all, ...current], [])

const config = reactive({
  value: 100,
  colors: ['#01c4f9', '#c135ff'],
  lineDash,
})
</script>
<style scoped>
:deep(.dv-percent-pond text){
  display: none;
}
</style>
