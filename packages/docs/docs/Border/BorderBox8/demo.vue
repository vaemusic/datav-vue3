<template>
  <div demo-bg>
    <dv-border-box8 :dur="5">
      <div dv-bg>
        dv-border-box8
      </div>
    </dv-border-box8>
  </div>
  <div text-2xl pt10>
    dv-border-box8(reverse)
  </div>
  <div demo-bg>
    <dv-border-box8 :reverse="true">
      <div dv-bg>
        dv-border-box8
      </div>
    </dv-border-box8>
  </div>
</template>

<script setup lang="ts">
import { BorderBox8 as DvBorderBox8 } from '@kjgl77/datav-vue3'
</script>