
export function randomExtend(minNum: number, maxNum: number) {
  if (arguments.length === 1) {
    return parseInt((Math.random() * minNum + 1).toString(), 10)
  } else {
    return parseInt((Math.random() * (maxNum - minNum + 1) + minNum).toString(), 10)
  }
}

export function debounce<T>(delay: number, callback: (...args: T[]) => void, vm: T) {
  let lastTime: NodeJS.Timeout
  return function () {
    clearTimeout(lastTime)
    lastTime = setTimeout(() => {
      callback.call(vm, ...arguments)
    }, delay)
  }
}
export function observerDomResize(dom: HTMLElement, callback: () => void) {
  const MutationObserver = window.MutationObserver

  const observer = new MutationObserver(callback)

  observer.observe(dom, { attributes: true, attributeFilter: ['style'], attributeOldValue: true })

  return observer
}

export function getPointDistance(pointOne: number[], pointTwo: number[]) {
  const minusX = Math.abs(pointOne[0] - pointTwo[0])

  const minusY = Math.abs(pointOne[1] - pointTwo[1])

  return Math.sqrt(minusX * minusX + minusY * minusY)
}

export function uuid(hasHyphen?: boolean) {
  return (hasHyphen ? 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx' : 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx').replace(/[xy]/g, function (c) {
    const r = Math.random() * 16 | 0
    const v = c == 'x' ? r : (r & 0x3 | 0x8)
    return v.toString(16)
  })
}

export function deepMerge (target:any, merged:any) {
  for (const key in merged) {
    if (target[key] && typeof target[key] === 'object') {
      deepMerge(target[key], merged[key])

      continue
    }

    if (typeof merged[key] === 'object') {
      target[key] = deepClone(merged[key], true)

      continue
    }

    target[key] = merged[key]
  }

  return target
}

/**
 * @description Clone an object or array
 * @param {Object|Array} object Cloned object
 * @param {Boolean} recursion   Whether to use recursive cloning
 * @return {Object|Array} Clone object
 */
export function deepClone(object:any, recursion:boolean) {
  if (!object) return object;
  const {parse,stringify} = JSON
  if (!recursion) return parse(stringify(object));
  let clonedObj: { [x: string]: any } = object instanceof Array ? [] : {};

  if (object && typeof object === 'object') {
    for (const key in object) {
      if (object.hasOwnProperty(key)) {
        if (object[key] && typeof object[key] === 'object') {
          clonedObj[key] = deepClone(object[key], true);
        } else {
          clonedObj[key] = object[key];
        }
      }
    }
  }

  return clonedObj;
}
