import type { Ref } from 'vue'

/**
 * @description https://github.com/DataV-Team/DataV-Vue3/blob/main/src/hooks/useMergedColor.ts
 */
export function useMergedColor(defaultColors: string[], colors: Ref<string[]>) {
  return computed(() => colors.value.length === 0 ? defaultColors : colors.value)
}
