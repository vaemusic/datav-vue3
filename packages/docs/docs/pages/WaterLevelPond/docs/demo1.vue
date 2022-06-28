<template>
  <div w800px h290px py10 flex="~ col" justify-center items-center bg-dark>
    <div>
      <dv-water-level-pond :config="config" style="width:150px;height:200px" />
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
  data: [66],
})

const updateData = () => {
  config.data = [Math.floor(Math.random() * (100 - 1)) + 1]
}
</script>
