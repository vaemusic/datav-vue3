<template>
  <div demo-bg>
    <dv-border-box4>
      <div dv-bg>
        dv-border-box4
      </div>
    </dv-border-box4>
  </div>
  <div text-2xl pt10>
    dv-border-box4(reverse)
  </div>
  <div demo-bg>
    <dv-border-box4 :reverse="true">
      <div dv-bg>
        dv-border-box4
      </div>
    </dv-border-box4>
  </div>
</template>

<script setup lang="ts">
import { BorderBox4 as DvBorderBox4 } from '@kjgl77/datav-vue3'
</script>
