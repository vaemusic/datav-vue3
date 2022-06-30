<template>
  <div w800px h200px flex="~ col" justify-center items-center bg-dark>
    <div>
      <dv-percent-pond :config="config" style="width:200px;height:100px;" />
    </div>
    <div pt5>
      <button btn @click="updateData">
        更新数据
      </button>
    </div>
  </div>
</template>
<script lang="ts" setup>
const config = reactive({
  value: 66,
})

const updateData = () => {
  config.value = Math.floor(Math.random() * (100 - 1)) + 1
}
</script>
