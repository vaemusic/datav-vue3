<!-- 加载 demo 组件 start -->
<script setup>
import demo from './demo.vue'
</script>
<!-- 加载 demo 组件 end -->

<!-- 正文开始 -->

# 边框1

边框1

## 基础用法
<ClientOnly>
  <demo />
</ClientOnly>
<details>
<summary>查看代码</summary>

<<< @/Border/BorderBox1/demo.vue

</details>


## 属性
参数 | 说明 | 类型 | 可选值 | 默认值 | 是否必填
:-: | :-: | :-: | :-: | :-: | :-:
`color` | 边框颜色(以下所有组件都有此颜色参数) | Array | - | `['#4fd2dd', '#235fa7']` | 否 
`backgroundColor` | 背景颜色 | String | - | `transparent` | 否 

