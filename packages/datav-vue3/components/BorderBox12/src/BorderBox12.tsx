import { defineComponent, renderSlot } from 'vue'
import type { BorderBoxProps } from 'packages/datav-vue3/types/BorderProps'
import { borderBoxProps } from 'packages/datav-vue3/types/BorderProps'
import autoResize from 'packages/datav-vue3/utils/autoResize'
import { deepClone, deepMerge, uuid } from 'packages/datav-vue3/utils'
// @ts-expect-error: not ts version lib
import { fade } from '@jiaminghi/color'
import './index.less'

export default defineComponent({
  props: borderBoxProps,
  setup(props: BorderBoxProps) {
    const id = uuid()
    const borderBox12 = ref(null)

    const { width, height, initWH } = autoResize(borderBox12)

    const state = reactive({
      filterId: `borderr-box-12-filterId-${id}`,

      defaultColor: ['#2e6099', '#7ce7fd'],

      mergedColor: [],
    })

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
      state,
      initWH,
      borderBox12,
    }
  },
  render() {
    const { $slots, width, height, state, backgroundColor } = this
    return (
      <div ref="borderBox12" class="dv-border-box-12">
        <svg class="dv-border-svg-container" width={width} height={height}>
          <defs>
            <filter id={state.filterId} height="150%" width="150%" x="-25%" y="-25%">
              <feMorphology operator="dilate" radius="1" in="SourceAlpha" result="thicken" />
              <feGaussianBlur in="thicken" stdDeviation="2" result="blurred" />
              <feFlood flood-color={fade(state.mergedColor[1] || state.defaultColor[1], 70)} result="glowColor">
                <animate
                  attributeName="flood-color"
                  values={`
                ${fade(state.mergedColor[1] || state.defaultColor[1], 70)};
                ${fade(state.mergedColor[1] || state.defaultColor[1], 30)};
                ${fade(state.mergedColor[1] || state.defaultColor[1], 70)};
              `}
                  dur="3s"
                  begin="0s"
                  repeatCount="indefinite"
                />
              </feFlood>
              <feComposite in="glowColor" in2="blurred" operator="in" result="softGlowColored" />
              <feMerge>
                <feMergeNode in="softGlowColored" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          {
            width && height
            && <path
              fill={backgroundColor}
              stroke-width="2"
              stroke={state.mergedColor[0]}
              d={`
          M15 5 L ${width - 15} 5 Q ${width - 5} 5, ${width - 5} 15
          L ${width - 5} ${height - 15} Q ${width - 5} ${height - 5}, ${width - 15} ${height - 5}
          L 15, ${height - 5} Q 5 ${height - 5} 5 ${height - 15} L 5 15
          Q 5 5 15 5
        `}
            />
          }

          <path
            stroke-width="2"
            fill="transparent"
            stroke-linecap="round"
            filter={`url(#${state.filterId})`}
            stroke={state.mergedColor[1]}
            d={'M 20 5 L 15 5 Q 5 5 5 15 L 5 20'}
          />

          <path
            stroke-width="2"
            fill="transparent"
            stroke-linecap="round"
            filter={`url(#${state.filterId})`}
            stroke={state.mergedColor[1]}
            d={`M ${width - 20} 5 L ${width - 15} 5 Q ${width - 5} 5 ${width - 5} 15 L ${width - 5} 20`}
          />

          <path
            stroke-width="2"
            fill="transparent"
            stroke-linecap="round"
            filter={`url(#${state.filterId})`}
            stroke={state.mergedColor[1]}
            d={`
          M ${width - 20} ${height - 5} L ${width - 15} ${height - 5}
          Q ${width - 5} ${height - 5} ${width - 5} ${height - 15}
          L ${width - 5} ${height - 20}
          `}
          />

          <path
            stroke-width="2"
            fill="transparent"
            stroke-linecap="round"
            filter={`url(#${state.filterId})`}
            stroke={state.mergedColor[1]}
            d={`
          M 20 ${height - 5} L 15 ${height - 5}
          Q 5 ${height - 5} 5 ${height - 15}
          L 5 ${height - 20}
          `}
          />
        </svg>

        <div class="border-box-content">
          {renderSlot($slots, 'default')}
        </div>
      </div>
    )
  },
})
