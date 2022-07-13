<!-- 加载 demo 组件 start -->
<script setup>
import demo from './demo.vue'
</script>
<!-- 加载 demo 组件 end -->

<!-- 正文开始 -->

# 边框组件注意事项

:::tip 边框内布局
边框组件默认宽高均为100%，边框内部的节点将被 `slot` 插槽分发至边框组件下 class 为`border-box-content`的容器内，如有布局需要，请针对该容器布局，以免产生样式冲突，导致边框显示异常。
:::

:::danger 边框内布局
建议把边框内的节点封装成**组件，以组件的形式置入边框**。这是因为 slot 的渲染机制较为特殊，如果你要在组件 mounted 后对边框内置入的节点进行页面渲染状态敏感的操作（获取 DOM 宽高，实例化 echarts 图表等），可能会发生非预期的结果。比如获取的DOM宽高为0，封装成组件后可避免这种情况。
:::

:::tip 重置宽高
如果边框组件的父容器宽高发生了变化，而边框组件没有侦知这一变化，边框就无法自适应父容器宽高。针对这种情况，你可以给边框绑定 key 值，在父容器宽高发生变化且完成渲染后更改 key 值，强制销毁边框组件实例并重新渲染，重新获取宽高。但这会造成边框内的组件同样被销毁重新渲染，这会带来额外的性能消耗，并导致组件状态丢失。

此时我们可以调用组件内置的 `initWH` 方法去重置边框组件的宽高以避免销毁实例重新渲染带来的非预期副作用。
:::

## initWH 方法用法示例

<ClientOnly>
  <demo />
</ClientOnly>
<details>
<summary>查看代码</summary>

<<< @/Guide/demo.vue

</details>

## 自定义颜色

所有边框均支持自定义颜色及背景色，配置项及示例如下。

```html
<dv-border-box-1 :color="['red', 'green']" backgroundColor="blue" >
  dv-border-box-1
</dv-border-box-1>
```

参数 | 说明 | 类型 | 可选值 | 默认值
:-: | :-: | :-: | :-: | :-:
color |	自定义颜色	 |	`string[]` |	--- |	---
backgroundColor |	背景色 |	`string` |	---	| ---

:::tip TIP
`color` 属性支持配置两个颜色，一主一副。

颜色类型可以为颜色关键字、十六进制色、RGB 及 RGBA。
:::
