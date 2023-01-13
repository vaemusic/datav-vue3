<!-- 加载 demo 组件 start -->
<script setup>
import demo from './demo.vue'
</script>
<!-- 加载 demo 组件 end -->

<!-- 正文开始 -->

# 排名轮播表

排名轮播表

## 基础用法
<ClientOnly>
  <demo />
</ClientOnly>
<details>
<summary>查看代码</summary>

<<< @/Other/ScrollRankingBoard/demo.vue

</details>

- 更多示例见<a href="http://datav.jiaminghi.com/guide/scrollRankingBoard.html" target="_blank">DataV ScrollRankingBoard</a>

## config属性
参数 | 说明 | 类型 | 可选值 | 默认值
:-: | :-: | :-: | :-: | :-:
data |	表数据 |	`Array<Object>` |	data属性 |	`[]`
rowNum |	表行数 |	`Number` |	--- |	`5`
waitTime |	轮播时间间隔(ms) |	`Number` |	--- |	`2000`
carousel |	轮播方式 |	`String` |	`'single'/'page'` |	`'single'`
unit |	数值单位 |	`String` |	--- |	`''`
sort |	自动排序 |	`Boolean` |	--- |	`true`
valueFormatter |	数值格式化 |	`Function` |	--- |	`undefined`
textColor<Badge type="tip" text="1.4.2" /> |	文字颜色 |	`String` |	--- |	`#fff`
color<Badge type="tip" text="1.4.2" /> |	主要颜色，包括柱颜色和排名颜色 |	`String` |	--- |	`#1370fb`
fontSize<Badge type="tip" text="1.4.2" /> |	字体大小 |	`Number` |	--- |	`13`

## data属性
参数 | 说明 | 类型 | 可选值 | 默认值
:-: | :-: | :-: | :-: | :-:
name |	名称 |	`String` |	--- |	---
value |	数值 |	`Number` |	--- |	---

## valueFormatter属性
参数 | 说明 | 类型 | 可选值 | 默认值
:-: | :-: | :-: | :-: | :-:
name |	名称 |	`String` |	--- |	---
value |	数值 |	`Number` |	--- |	---
percent |	百分比 |	`Number` |	--- |	---
ranking | 排名 |	`Number` |	--- |	---

:::tip TIP
`name`属性使用`v-html`进行渲染，因此你可以使用`html标签`来定制个性化的name展示效果。
:::
