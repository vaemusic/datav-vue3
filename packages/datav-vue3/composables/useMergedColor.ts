import { merge } from 'lodash-es'
import type { Ref } from 'vue'
import { onUnmounted, watchEffect } from 'vue'

/**
 * @description https://github.com/DataV-Team/DataV-Vue3/blob/main/src/hooks/useMergedColor.ts
 */
export function useMergedColor(defaultColors: string[], colors: Ref<string[]>) {
  let mergedColor = merge(defaultColors, colors.value)

  const stop = watchEffect(() => {
    mergedColor = merge(defaultColors, colors.value)
  })

  onUnmounted(() => {
    stop()
    console.log('stop')
  })

  return mergedColor
}
