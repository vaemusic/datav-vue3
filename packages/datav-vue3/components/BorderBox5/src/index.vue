<template>
  <div ref="borderBox5" class="dv-border-box-5">
    <svg :class="`dv-border-svg-container  ${reverse && 'dv-reverse'}`" :width="width" :height="height">
      <polygon
        :fill="backgroundColor" :points="`
        10, 22 ${width - 22}, 22 ${width - 22}, ${height - 86} ${width - 84}, ${height - 24} 10, ${height - 24}
      `"
      />

      <polyline
        class="dv-bb5-line-1"
        :stroke="state.mergedColor[0]"
        :points="`8, 5 ${width - 5}, 5 ${width - 5}, ${height - 100}
          ${width - 100}, ${height - 5} 8, ${height - 5} 8, 5`"
      />
      <polyline
        class="dv-bb5-line-2"
        :stroke="state.mergedColor[1]"
        :points="`3, 5 ${width - 20}, 5 ${width - 20}, ${height - 60}
          ${width - 74}, ${height - 5} 3, ${height - 5} 3, 5`"
      />
      <polyline class="dv-bb5-line-3" :stroke="state.mergedColor[1]" :points="`50, 13 ${width - 35}, 13`" />
      <polyline class="dv-bb5-line-4" :stroke="state.mergedColor[1]" :points="`15, 20 ${width - 35}, 20`" />
      <polyline class="dv-bb5-line-5" :stroke="state.mergedColor[1]" :points="`15, ${height - 20} ${width - 110}, ${height - 20}`" />
      <polyline class="dv-bb5-line-6" :stroke="state.mergedColor[1]" :points="`15, ${height - 13} ${width - 110}, ${height - 13}`" />
    </svg>

    <div class="border-box-content">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
import autoResize from 'packages/datav-vue3/utils/autoResize'
import { deepClone, deepMerge } from 'packages/datav-vue3/utils'

const props = defineProps({
  color: {
    type: Array,
    default: () => ([]),
  },
  reverse: {
    type: Boolean,
    default: false,
  },
  backgroundColor: {
    type: String,
    default: 'transparent',
  },
})
const borderBox5 = ref<HTMLElement | null>(null)

const state = reactive({
  defaultColor: ['rgba(255, 255, 255, 0.35)', 'rgba(255, 255, 255, 0.20)'],

  mergedColor: [],
})

const { width, height } = autoResize(borderBox5)

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
.dv-border-box-5 {
  position: relative;
  width: 100%;
  height: 100%;

  .dv-reverse {
    transform: rotate(180deg);
  }

  .dv-border-svg-container {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;

    & > polyline {
      fill: none;
    }
  }

  .dv-bb5-line-1, .dv-bb5-line-2 {
    stroke-width: 1;
  }

  .dv-bb5-line-3, .dv-bb5-line-6 {
    stroke-width: 5;
  }

  .dv-bb5-line-4, .dv-bb5-line-5 {
    stroke-width: 2;
  }

  .border-box-content {
    position: relative;
    width: 100%;
    height: 100%;
  }
}
</style>
