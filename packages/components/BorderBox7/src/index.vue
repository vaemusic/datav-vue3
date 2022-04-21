<template>
  <div
    ref="borderBox7"
    class="dv-border-box-7"
    :style="`box-shadow: inset 0 0 40px ${state.mergedColor[0]}; border: 1px solid ${state.mergedColor[0]}; background-color: ${backgroundColor}`"
  >
    <svg class="dv-border-svg-container" :width="width" :height="height">
      <polyline class="dv-bb7-line-width-2" :stroke="state.mergedColor[0]" :points="`0, 25 0, 0 25, 0`" />
      <polyline class="dv-bb7-line-width-2" :stroke="state.mergedColor[0]" :points="`${width - 25}, 0 ${width}, 0 ${width}, 25`" />
      <polyline class="dv-bb7-line-width-2" :stroke="state.mergedColor[0]" :points="`${width - 25}, ${height} ${width}, ${height} ${width}, ${height - 25}`" />
      <polyline class="dv-bb7-line-width-2" :stroke="state.mergedColor[0]" :points="`0, ${height - 25} 0, ${height} 25, ${height}`" />

      <polyline class="dv-bb7-line-width-5" :stroke="state.mergedColor[1]" :points="`0, 10 0, 0 10, 0`" />
      <polyline class="dv-bb7-line-width-5" :stroke="state.mergedColor[1]" :points="`${width - 10}, 0 ${width}, 0 ${width}, 10`" />
      <polyline class="dv-bb7-line-width-5" :stroke="state.mergedColor[1]" :points="`${width - 10}, ${height} ${width}, ${height} ${width}, ${height - 10}`" />
      <polyline class="dv-bb7-line-width-5" :stroke="state.mergedColor[1]" :points="`0, ${height - 10} 0, ${height} 10, ${height}`" />
    </svg>

    <div class="border-box-content">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
import autoResize from 'packages/utils/autoResize'
import { deepClone, deepMerge } from 'packages/utils'

const props = defineProps({
  color: {
    type: Array,
    default: () => ([]),
  },
  backgroundColor: {
    type: String,
    default: 'transparent',
  },
})

const borderBox7 = ref<HTMLElement | null>(null)

const state = reactive({
  defaultColor: ['rgba(128,128,128,0.3)', 'rgba(128,128,128,0.5)'],

  mergedColor: [],
})

const { width, height } = autoResize(borderBox7)

watch(() => props.color, () => {
  mergeColor()
})

onMounted(() => {
  mergeColor()
})

function mergeColor() {
  state.mergedColor = deepMerge(deepClone(state.defaultColor, true), props.color || [])
}
</script>

<style lang="less">
.dv-border-box-7 {
  position: relative;
  width: 100%;
  height: 100%;

  .dv-border-svg-container {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;

    & > polyline {
      fill: none;
      stroke-linecap: round;
    }
  }

  .dv-bb7-line-width-2 {
    stroke-width: 2;
  }

  .dv-bb7-line-width-5 {
    stroke-width: 5;
  }

  .border-box-content {
    position: relative;
    width: 100%;
    height: 100%;
  }
}
</style>
