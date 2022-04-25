<template>
  <div ref="borderBox4" class="dv-border-box-4">
    <svg :class="`dv-border-svg-container ${reverse && 'dv-reverse'}`" :width="width" :height="height">
      <polygon
        :fill="backgroundColor" :points="`
        ${width - 15}, 22 170, 22 150, 7 40, 7 28, 21 32, 24
        16, 42 16, ${height - 32} 41, ${height - 7} ${width - 15}, ${height - 7}
      `"
      />

      <polyline
        class="dv-bb4-line-1"
        :stroke="state.mergedColor[0]"
        :points="`145, ${height - 5} 40, ${height - 5} 10, ${height - 35}
          10, 40 40, 5 150, 5 170, 20 ${width - 15}, 20`"
      />
      <polyline
        :stroke="state.mergedColor[1]"
        class="dv-bb4-line-2" :points="`245, ${height - 1} 36, ${height - 1} 14, ${height - 23}
          14, ${height - 100}`"
      />

      <polyline class="dv-bb4-line-3" :stroke="state.mergedColor[0]" :points="`7, ${height - 40} 7, ${height - 75}`" />
      <polyline class="dv-bb4-line-4" :stroke="state.mergedColor[0]" :points="`28, 24 13, 41 13, 64`" />
      <polyline class="dv-bb4-line-5" :stroke="state.mergedColor[0]" :points="`5, 45 5, 140`" />
      <polyline class="dv-bb4-line-6" :stroke="state.mergedColor[1]" :points="`14, 75 14, 180`" />
      <polyline class="dv-bb4-line-7" :stroke="state.mergedColor[1]" :points="`55, 11 147, 11 167, 26 250, 26`" />
      <polyline class="dv-bb4-line-8" :stroke="state.mergedColor[1]" :points="`158, 5 173, 16`" />
      <polyline class="dv-bb4-line-9" :stroke="state.mergedColor[0]" :points="`200, 17 ${width - 10}, 17`" />
      <polyline class="dv-bb4-line-10" :stroke="state.mergedColor[1]" :points="`385, 17 ${width - 10}, 17`" />
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
const borderBox4 = ref<HTMLElement | null>(null)

const state = reactive({
  defaultColor: ['red', 'rgba(0,0,255,0.8)'],

  mergedColor: [],
})

const { width, height } = autoResize(borderBox4)

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
.dv-border-box-4 {
  position: relative;
  width: 100%;
  height: 100%;

  .dv-reverse {
    transform: rotate(180deg);
  }

  .dv-border-svg-container {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;

    & > polyline {
      fill: none;
    }
  }

  .sw1 {
    stroke-width: 1;
  }

  .sw3 {
    stroke-width: 3px;
    stroke-linecap: round;
  }

  .dv-bb4-line-1 {
    .sw1;
  }

  .dv-bb4-line-2 {
    .sw1;
  }

  .dv-bb4-line-3 {
    .sw3;
  }

  .dv-bb4-line-4 {
    .sw3;
  }

  .dv-bb4-line-5 {
    .sw1;
  }

  .dv-bb4-line-6 {
    .sw1;
  }

  .dv-bb4-line-7 {
    .sw1;
  }

  .dv-bb4-line-8 {
    .sw3;
  }

  .dv-bb4-line-9 {
    .sw3;
    stroke-dasharray: 100 250;
  }

  .dv-bb4-line-10 {
    .sw1;
    stroke-dasharray: 80 270;
  }

  .border-box-content {
    position: relative;
    width: 100%;
    height: 100%;
  }
}
</style>
