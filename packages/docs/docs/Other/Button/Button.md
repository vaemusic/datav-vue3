<!-- 加载 demo 组件 start -->
<script setup>
import demo from './demo.vue'
</script>
<!-- 加载 demo 组件 end -->

<!-- 正文开始 -->

# 按钮 <Badge type="tip" text="1.6.0" />

按钮组件

## 基础用法
<ClientOnly>
  <demo />
</ClientOnly>
<details>
<summary>查看代码</summary>

<<< @/Other/Button/demo.vue

</details>

## 属性
参数 | 说明 | 类型 | 可选值 | 默认值 | 是否必填
:-: | :-: | :-: | :-: | :-: | :-:
`color` | 主题颜色 | string | - | `#2058c7` | 否 
`fontColor` | 字体颜色 | string | - | `默认和 color 相同` | 否
`fontSize` | 字体大小 | number | - | `14` | 否
`bg` | 是否显示背景 | boolean | `true / false` | `true` | 否
`border` | 边框类型 | string | `Border1 到 Border6` | `Border1` | 否
