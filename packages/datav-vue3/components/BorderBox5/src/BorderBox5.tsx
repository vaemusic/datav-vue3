import type { ExtractPropTypes } from 'vue'
import { defineComponent, renderSlot } from 'vue'
import { borderBoxProps } from 'packages/datav-vue3/types/BorderProps'
import autoResize from 'packages/datav-vue3/utils/autoResize'
import { deepClone, deepMerge } from 'packages/datav-vue3/utils'
import './index.less'

const borderBox5Props = {
  ...borderBoxProps,
  reverse: {
    type: Boolean,
    default: false,
  },
}

export type BorderBox5Props = ExtractPropTypes<typeof borderBox5Props>

export default defineComponent({
  props: borderBox5Props,
  setup(props: BorderBox5Props) {
    const borderBox5 = ref<HTMLElement | null>(null)

    const state = reactive({
      defaultColor: ['rgba(255, 255, 255, 0.35)', 'rgba(255, 255, 255, 0.20)'],

      mergedColor: [],
    })

    const { width, height, initWH } = autoResize(borderBox5)

    watch(() => props.color, () => {
      mergeColor()
    })

    onMounted(() => {
      mergeColor()
    })

    function mergeColor() {
      state.mergedColor = deepMerge(deepClone(state.defaultColor, true), props.color || [])
    }

    return {
      width,
      height,
      initWH,
      state,
      borderBox5,
    }
  },
  render() {
    const { $slots, width, height, state, backgroundColor, reverse } = this
    return (
      <div ref="borderBox5" class="dv-border-box-5">
        <svg class={`dv-border-svg-container  ${reverse && 'dv-reverse'}`} width={width} height={height}>
          <polygon
            fill={backgroundColor} points={`
            10, 22 ${width - 22}, 22 ${width - 22}, ${height - 86} ${width - 84}, ${height - 24} 10, ${height - 24}
          `}
          />

          <polyline
            class="dv-bb5-line-1"
            stroke={state.mergedColor[0]}
            points={`8, 5 ${width - 5}, 5 ${width - 5}, ${height - 100}
          ${width - 100}, ${height - 5} 8, ${height - 5} 8, 5`}
          />
          <polyline
            class="dv-bb5-line-2"
            stroke={state.mergedColor[1]}
            points={`3, 5 ${width - 20}, 5 ${width - 20}, ${height - 60}
          ${width - 74}, ${height - 5} 3, ${height - 5} 3, 5`}
          />
          <polyline class="dv-bb5-line-3" stroke={state.mergedColor[1]} points={`50, 13 ${width - 35}, 13`} />
          <polyline class="dv-bb5-line-4" stroke={state.mergedColor[1]} points={`15, 20 ${width - 35}, 20`} />
          <polyline class="dv-bb5-line-5" stroke={state.mergedColor[1]} points={`15, ${height - 20} ${width - 110}, ${height - 20}`} />
          <polyline class="dv-bb5-line-6" stroke={state.mergedColor[1]} points={`15, ${height - 13} ${width - 110}, ${height - 13}`} />
        </svg>

        <div class="border-box-content">
          {renderSlot($slots, 'default')}
        </div>
      </div>
    )
  },
})
