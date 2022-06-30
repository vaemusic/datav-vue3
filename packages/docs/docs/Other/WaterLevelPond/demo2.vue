<template>
  <div w800px h250px py10 flex justify-center items-center bg-dark>
    <dv-water-level-pond :config="config" style="width:150px;height:200px" />
  </div>
</template>
<script lang="ts" setup>
const config = reactive({
  data: [66, 45],
  shape: 'roundRect',
})
</script>
