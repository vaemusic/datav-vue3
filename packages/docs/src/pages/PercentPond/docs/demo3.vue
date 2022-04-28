<template>
  <div style="width:800px;height:200px;" flex="~ " justify-center items-center bg-dark>
    <dv-percent-pond :config="config" style="width:200px;height:100px;" />
  </div>
</template>
<script lang="ts" setup>
const config = reactive({
  value: 66,
  lineDash: [10, 2],
})
</script>
