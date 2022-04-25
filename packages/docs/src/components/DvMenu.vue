<template>
  <div class="menu">
    <el-menu :background-color="`${isDark?'#121212':'#fff'}`" :text-color="`${!isDark?'#121212':'#fff'}`" :unique-opened="true" :default-active="activeIndex" class="el-menu-demo" mode="vertical" @select="handleSelect">
      <el-menu-item key="index" index="Index">
        <span>首页</span>
      </el-menu-item>
      <el-menu-item v-for="item in noneChidrenList" :key="item.compName" :index="item.compName">
        <span>{{ item.compZhName }}</span>
      </el-menu-item>
      <el-sub-menu v-for="item in hasChidrenList" :key="item.compName" :index="item.compType">
        <template #title>
          {{ item.compType }}
        </template>
        <el-menu-item v-for="childrenItem in item.children" :key="childrenItem.compName" :index="childrenItem.compName">
          {{
            childrenItem.compZhName
          }}
        </el-menu-item>
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
import { isDark } from '../composables'
import { useRouter } from 'vue-router'
const router = useRouter()

const props = defineProps<{
  list: Array<any>
  activeIndex: string
}>()

const hasChidrenList = computed(() => {
  return props.list.filter(item => item.children && item.children.length > 0)
})

const noneChidrenList = computed(() => {
  return props.list.filter(item => !item.children || item.children.length === 0)
})

const handleSelect = (e: string) => {
  router.push({
    name: e,
  })
}
</script>

<style scoped>
:deep(.el-menu){
  border-right:none;
}
</style>
