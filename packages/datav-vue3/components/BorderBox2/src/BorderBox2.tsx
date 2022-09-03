import { defineComponent, renderSlot } from 'vue'
import type { BorderBoxProps } from 'packages/datav-vue3/types/BorderProps'
import { borderBoxProps } from 'packages/datav-vue3/types/BorderProps'
import autoResize from 'packages/datav-vue3/utils/autoResize'
import { deepClone, deepMerge } from 'packages/datav-vue3/utils'
import './index.less'

export default defineComponent({
  props: borderBoxProps,
  setup(props: BorderBoxProps) {
    const borderBox2 = ref<HTMLElement | null>(null)

    const state = reactive({
      defaultColor: ['#fff', 'rgba(255, 255, 255, 0.6)'],
      mergedColor: [],
    })

    const mergeColor = () => {
      state.mergedColor = deepMerge(deepClone(state.defaultColor, true), props.color || [])
    }

    watch(() => props.color, () => {
      mergeColor()
    })

    const { width, height, initWH } = autoResize(borderBox2)

    onMounted(() => {
      mergeColor()
    })

    return {
      width,
      height,
      initWH,
      state,
      borderBox2,
    }
  },
  render() {
    const { $slots, backgroundColor, width, height, state } = this
    return (
      <div ref="borderBox2" class="dv-border-box-2">
        <svg class="dv-border-svg-container" width={width} height={height}>
          <polygon
            fill={backgroundColor} points={`
        7, 7 ${width - 7}, 7 ${width - 7}, ${height - 7} 7, ${height - 7}
      `}
          />

          <polyline
            stroke={state.mergedColor[0]}
            points={`2, 2 ${width - 2} ,2 ${width - 2}, ${height - 2} 2, ${height - 2} 2, 2`}
          />
          <polyline
            stroke={state.mergedColor[1]}
            points={`6, 6 ${width - 6}, 6 ${width - 6}, ${height - 6} 6, ${height - 6} 6, 6`}
          />
          <circle fill={state.mergedColor[0]} cx="11" cy="11" r="1" />
          <circle fill={state.mergedColor[0]} cx={width - 11} cy="11" r="1" />
          <circle fill={state.mergedColor[0]} cx={width - 11} cy={height - 11} r="1" />
          <circle fill={state.mergedColor[0]} cx="11" cy={height - 11} r="1" />
        </svg>

        <div class="border-box-content">
          {renderSlot($slots, 'default')}
        </div>
      </div>
    )
  },
})
