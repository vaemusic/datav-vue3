
import type { Ref } from 'vue'
import { nextTick, onMounted, onUnmounted, ref } from 'vue'
import { debounce, observerDomResize } from './index'
const autoResize = (dom: Ref<HTMLElement | null>, onResize?: () => void, afterAutoResizeMixinInit?: () => void) => {
  const width = ref(0)
  const height = ref(0)

  let debounceInitWHFun: () => void
  let domObserver: MutationObserver | null = null
  let domHtml: HTMLElement | null = null

  const initWH = (resize = true) => {
    return new Promise((resolve) => {
      nextTick(() => {
        console.log('我是dom-----', dom.value)
        domHtml = dom.value
        width.value = dom.value ? dom.value.clientWidth : 0
        height.value = dom.value ? dom.value.clientHeight : 0

        console.log('width and height', height.value, width.value)
        if (!dom.value)
          console.warn('DataV: Failed to get dom node, component rendering may be abnormal!')

        else if (!width.value || !height.value)
          console.warn('DataV: Component width or height is 0px, rendering abnormality may occur!')

        if (typeof onResize === 'function' && resize)
          onResize()
        resolve(true)
      })
    })
  }
  const getDebounceInitWHFun = () => {
    debounceInitWHFun = debounce(100, initWH, this)
  }
  const bindDomResizeCallback = () => {
    domObserver = observerDomResize(domHtml!, debounceInitWHFun)

    window.addEventListener('resize', debounceInitWHFun)
  }
  const unbindDomResizeCallback = () => {
    if (!domObserver)
      return

    domObserver.disconnect()
    domObserver.takeRecords()
    domObserver = null

    window.removeEventListener('resize', debounceInitWHFun)
  }

  const autoResizeMixinInit = async() => {
    await initWH(false)

    getDebounceInitWHFun()

    bindDomResizeCallback()

    if (typeof afterAutoResizeMixinInit === 'function')
      afterAutoResizeMixinInit()
  }

  onMounted(() => {
    autoResizeMixinInit()
  })

  onUnmounted(() => {
    unbindDomResizeCallback()
  })

  return {
    width,
    height,
  }
}

export default autoResize
