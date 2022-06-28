<template>
  <div small-bg>
    <dv-percent-pond :config="config" style="width:200px;height:100px;" />
  </div>
</template>
<script lang="ts" setup>
const config = reactive({
  value: 66,
  borderWidth: 5,
  borderRadius: 10,
  borderGap: 5,
})
</script>
