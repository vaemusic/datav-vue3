<template>
  <div ref="borderBox6" class="dv-border-box-6">
    <svg class="dv-border-svg-container" :width="width" :height="height">
      <polygon
        :fill="backgroundColor" :points="`
        9, 7 ${width - 9}, 7 ${width - 9}, ${height - 7} 9, ${height - 7}
      `"
      />

      <circle :fill="state.mergedColor[1]" cx="5" cy="5" r="2" />
      <circle :fill="state.mergedColor[1]" :cx="width - 5" cy="5" r="2" />
      <circle :fill="state.mergedColor[1]" :cx="width - 5" :cy="height - 5" r="2" />
      <circle :fill="state.mergedColor[1]" cx="5" :cy="height - 5" r="2" />
      <polyline :stroke="state.mergedColor[0]" :points="`10, 4 ${width - 10}, 4`" />
      <polyline :stroke="state.mergedColor[0]" :points="`10, ${height - 4} ${width - 10}, ${height - 4}`" />
      <polyline :stroke="state.mergedColor[0]" :points="`5, 70 5, ${height - 70}`" />
      <polyline :stroke="state.mergedColor[0]" :points="`${width - 5}, 70 ${width - 5}, ${height - 70}`" />
      <polyline :stroke="state.mergedColor[0]" :points="`3, 10, 3, 50`" />
      <polyline :stroke="state.mergedColor[0]" :points="`7, 30 7, 80`" />
      <polyline :stroke="state.mergedColor[0]" :points="`${width - 3}, 10 ${width - 3}, 50`" />
      <polyline :stroke="state.mergedColor[0]" :points="`${width - 7}, 30 ${width - 7}, 80`" />
      <polyline :stroke="state.mergedColor[0]" :points="`3, ${height - 10} 3, ${height - 50}`" />
      <polyline :stroke="state.mergedColor[0]" :points="`7, ${height - 30} 7, ${height - 80}`" />
      <polyline :stroke="state.mergedColor[0]" :points="`${width - 3}, ${height - 10} ${width - 3}, ${height - 50}`" />
      <polyline :stroke="state.mergedColor[0]" :points="`${width - 7}, ${height - 30} ${width - 7}, ${height - 80}`" />
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
const borderBox6 = ref<HTMLElement | null>(null)

const state = reactive({
  defaultColor: ['rgba(255, 255, 255, 0.35)', 'gray'],

  mergedColor: [],
})

const { width, height } = autoResize(borderBox6)

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
.dv-border-box-6 {
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
      stroke-width: 1;
    }
  }

  .border-box-content {
    position: relative;
    width: 100%;
    height: 100%;
  }
}
</style>
