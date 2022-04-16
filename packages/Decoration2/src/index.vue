<template>
  <div class="dv-decoration-2" ref="decoration2">
    <svg :width="`${width}px`" :height="`${height}px`">
      <rect :x="state.x" :y="state.y" :width="state.w" :height="state.h" :fill="state.mergedColor[0]">
        <animate :attributeName="reverse ? 'height' : 'width'" from="0" :to="reverse ? height : width"
          :dur="`${dur}s`" calcMode="spline" keyTimes="0;1" keySplines=".42,0,.58,1" repeatCount="indefinite" />
      </rect>

      <rect :x="state.x" :y="state.y" width="1" height="1" :fill="state.mergedColor[1]">
        <animate :attributeName="reverse ? 'y' : 'x'" from="0" :to="reverse ? height : width"
          :dur="`${dur}s`" calcMode="spline" keyTimes="0;1" keySplines="0.42,0,0.58,1" repeatCount="indefinite" />
      </rect>
    </svg>
  </div>
</template>

<script lang="ts" setup>
import autoResize from 'packages/utils/autoResize'
import { deepMerge } from 'packages/utils'
import { deepClone } from 'packages/utils'

const props = defineProps({
  color: {
    type: Array,
    default: () => ([])
  },
  reverse: {
    type: Boolean,
    default: false
  },
  dur: {
    type: Number,
    default: 6
  }
})

const decoration2 = ref<HTMLElement | null>(null)
const state = reactive({
  x: 0,
  y: 0,
  w: 0,
  h: 0,
  defaultColor: ['#3faacb', '#fff'],
  mergedColor: [],
})
watch(() => props.color, () => {
  mergeColor()
})

watch(() => props.reverse, () => {
  calcSVGData()
})

const afterAutoResizeMixinInit = () => {
  calcSVGData()
}

const calcSVGData = () => {
  if (props.reverse) {
    state.w = 1
    state.h = height.value
    state.x = width.value / 2
    state.y = 0
  } else {
    state.w = width.value
    state.h = 1
    state.x = 0
    state.y = height.value / 2
  }
}

const onResize = () => {
  calcSVGData()
}

const { width, height } = autoResize(decoration2,onResize,afterAutoResizeMixinInit)

const mergeColor = () => {
  state.mergedColor = deepMerge(deepClone(state.defaultColor, true), props.color || [])
}

onMounted(() => {
  mergeColor()
})

</script>

<style lang="less">
.dv-decoration-2 {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
}
</style>
