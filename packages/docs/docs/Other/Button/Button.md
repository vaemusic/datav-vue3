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
`border` | 边框类型 | string / Component | `Border1 到 Border6, 也可以传入自己的 svg 组件或 datav 的边框组件` | `Border1` | 否

:::tip
`border` 属性可以传入自己自定义的 svg 边框组件或者 datav 组件库的边框组件。

自定义 svg 边框组件的实现可以参考 button 源码中 BorderBox1 ~ BorderBox6 的代码，

svg 边框组件源码文件位置：https://github.com/vaemusic/datav-vue3/blob/master/packages/datav-vue3/components/Button/src/BorderBox1.vue

示例代码文件地址：https://github.com/vaemusic/datav-vue3/blob/master/packages/example/src/topHeader.vue#L23
:::
