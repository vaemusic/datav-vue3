<template>
  <div style="width:800px;height:200px;" flex="~ col" gap8 justify-center items-center bg-dark>
    <div flex gap8>
      <dv-button :bg="false" @click="console.log('click')">智慧城市</dv-button>
      <dv-button @click="console.log('click')" border="Border2" color="#4c8045">智慧政务</dv-button>
      <dv-button @click="console.log('click')" border="Border3" color="#c8161d" font-color="#e18a3b">智慧水利</dv-button>
    </div>
    <div flex gap8>
      <dv-button @click="console.log('click')" border="Border4" color="#a6559d">智慧交通</dv-button>
      <dv-button @click="console.log('click')" border="Border5" color="#e18a3b">智慧医疗</dv-button>
      <dv-button @click="console.log('click')" border="Border6" color="#615ea8">智慧农业</dv-button>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>
