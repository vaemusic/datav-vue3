<!-- 加载 demo 组件 start -->
<script setup>
import demo from './demo.vue'
</script>
<!-- 加载 demo 组件 end -->

<!-- 正文开始 -->

# 边框11

边框11

## 基础用法
<ClientOnly>
  <demo />
</ClientOnly>
<details>
<summary>查看代码</summary>

<<< @/Border/BorderBox11/demo.vue

</details>

## 属性
`color`, `backgroundColor` 同上
参数 | 说明 | 类型 | 可选值 | 默认值 | 是否必填
:-: | :-: | :-: | :-: | :-: | :-:
title |	边框标题 |	String |	- |	'' | 否
titleWidth |	标题宽度 |	Number |	- |	250 | 否
animate<Badge type="tip" text="1.5.0" /> |	边框动画 |	Boolean |	- |	true | 否

:::danger 提示
如果使用 `边框11` 时遇到 CPU 或 GPU 占用率过高情况，可以尝试将 `animate` 属性设置为 `false` 关闭边框动画来解决该问题(版本需在 `1.5.0` 以上)。
:::
