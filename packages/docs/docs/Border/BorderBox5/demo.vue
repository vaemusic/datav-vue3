<template>
  <div demo-bg>
    <dv-border-box5>
      <div dv-bg>
        dv-border-box5
      </div>
    </dv-border-box5>
  </div>
  <div text-2xl pt10>
    dv-border-box5(reverse)
  </div>
  <div demo-bg>
    <dv-border-box5 :reverse="true">
      <div dv-bg>
        dv-border-box5
      </div>
    </dv-border-box5>
  </div>
</template>

<script setup lang="ts">
import { BorderBox5 as DvBorderBox5 } from '@kjgl77/datav-vue3'
</script>
