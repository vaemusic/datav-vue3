import { defineComponent, renderSlot } from 'vue'
import type { BorderBoxProps } from 'packages/datav-vue3/types/BorderProps'
import { borderBoxProps } from 'packages/datav-vue3/types/BorderProps'
import autoResize from 'packages/datav-vue3/utils/autoResize'
import { deepClone, deepMerge } from 'packages/datav-vue3/utils'
import './index.less'

export default defineComponent({
  props: borderBoxProps,
  setup(props: BorderBoxProps) {
    const borderBox7 = ref<HTMLElement | null>(null)

    const state = reactive({
      defaultColor: ['rgba(128,128,128,0.3)', 'rgba(128,128,128,0.5)'],

      mergedColor: [],
    })

    const { width, height, initWH } = autoResize(borderBox7)

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
      borderBox7,
    }
  },
  render() {
    const { $slots, width, height, state, backgroundColor } = this
    return (
      <div
        ref="borderBox7"
        class="dv-border-box-7"
        style={`box-shadow: inset 0 0 40px ${state.mergedColor[0]}; border: 1px solid ${state.mergedColor[0]}; background-color: ${backgroundColor}`}
      >
        <svg class="dv-border-svg-container" width={width} height={height}>
          <polyline class="dv-bb7-line-width-2" stroke={state.mergedColor[0]} points="0, 25 0, 0 25, 0" />
          <polyline class="dv-bb7-line-width-2" stroke={state.mergedColor[0]} points={`${width - 25}, 0 ${width}, 0 ${width}, 25`} />
          <polyline class="dv-bb7-line-width-2" stroke={state.mergedColor[0]} points={`${width - 25}, ${height} ${width}, ${height} ${width}, ${height - 25}`} />
          <polyline class="dv-bb7-line-width-2" stroke={state.mergedColor[0]} points={`0, ${height - 25} 0, ${height} 25, ${height}`} />

          <polyline class="dv-bb7-line-width-5" stroke={state.mergedColor[1]} points="0, 10 0, 0 10, 0" />
          <polyline class="dv-bb7-line-width-5" stroke={state.mergedColor[1]} points={`${width - 10}, 0 ${width}, 0 ${width}, 10`} />
          <polyline class="dv-bb7-line-width-5" stroke={state.mergedColor[1]} points={`${width - 10}, ${height} ${width}, ${height} ${width}, ${height - 10}`} />
          <polyline class="dv-bb7-line-width-5" stroke={state.mergedColor[1]} points={`0, ${height - 10} 0, ${height} 10, ${height}`} />
        </svg>

        <div class="border-box-content">
          {renderSlot($slots, 'default')}
        </div>
      </div>
    )
  },
})
