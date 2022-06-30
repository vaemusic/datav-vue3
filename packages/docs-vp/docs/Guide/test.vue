<template>
  <div demo-bg>
    <div text-red>
      init
    </div>
  </div>
</template>
  
<script lang='ts' setup>
import list from '../../../datav-vue3/list.json'

const DecorationList = $computed(() => {
  const list1 = list.filter(item => item.children && item.children.length > 0)
  const link: any[] = []

  list1[0].children?.forEach(item => {
    link.push({
      text: item.compZhName,
      link: `${item.compName}/index`,
    })
  })
  return link
})

const BorderList = $computed(() => {
  const list1 = list.filter(item => item.children && item.children.length > 0)
  const link: any[] = []

  list1[1].children?.forEach(item => {
    link.push({
      text: item.compZhName,
      link: `${item.compName}/index`,
    })
  })
  return link
})

const noneChidrenList = $computed(() => {
  const list1 = list.filter(item => !item.children || item.children.length === 0)
  const link: any[] = []

  list1?.forEach(item => {
    link.push({
      text: item.compZhName,
      link: `${item.compName}/index`,
    })
  })
  return link
})

console.log(DecorationList)
console.log(BorderList)
console.log(noneChidrenList)
</script>
  