<!-- 加载 demo 组件 start -->
<script setup>
import demo1 from './demo1.vue'
import demo2 from './demo2.vue'
import demo3 from './demo3.vue'
</script>
<!-- 加载 demo 组件 end -->

<!-- 正文开始 -->

# 轮播表

轮播表

## 基础用法
<ClientOnly>
  <demo1 />
</ClientOnly>
<details>
<summary>查看代码</summary>

<<< @/Other/ScrollBoard/demo1.vue

</details>

## 往config.data里面push更新数据
使用push更新数据因config watch到更新之后需要重新计算数据，故轮播表会先重置到第一行然后再继续按照刚才的进度轮播，介意的话可以用`updateRows`更新数据。

<ClientOnly>
  <demo2 />
</ClientOnly>
<details>
<summary>查看代码</summary>

<<< @/Other/ScrollBoard/demo2.vue

</details>

## 利用updateRows更新数据
如果想要不断追加行数据，又不想从出现push出现的问题，可以使用此方法更新行数据，不会导致从头轮播，也可以设置下次滚动的起始行。

`updateRows`更新数据需要替换掉整个config里的data数据，详情见下方demo代码

<ClientOnly>
  <demo3 />
</ClientOnly>
<details>
<summary>查看代码</summary>

<<< @/Other/ScrollBoard/demo3.vue

</details>

- 更多示例见<a href="http://datav.jiaminghi.com/guide/scrollBoard.html" target="_blank">DataV ScrollBoard</a>

## 属性
参数 | 说明 | 类型 | 可选值 | 默认值 
:-: | :-: | :-: | :-: | :-: 
header |	表头数据 |	`Array<String>` |	--- |	`[]`
data |	表数据 |	`Array<Array>` |	--- |	`[]`
rowNum |	表行数 |	Number |	--- |	5
headerBGC |	表头背景色 |	String |	--- |	'#00BAFF'
oddRowBGC |	奇数行背景色 |	String |	--- |	'#003B51'
evenRowBGC |	偶数行背景色 |	String |	--- |	#0A2732
waitTime |	`轮播时间间隔(ms)` |	Number |	--- |	2000
headerHeight |	表头高度 |	Number |	--- |	35
columnWidth |	列宽度 |	`Array<Number>` |	`[1]` |	`[]`
align |	列对齐方式 |	`Array<String>` |	`[2]` |	`[]`
index |	显示行号 |	Boolean |	true/false |	false
indexHeader |	行号表头 |	String |	- |	'#'
carousel |	轮播方式 |	String |	`'single'/'page'` |	'single'
hoverPause |	悬浮暂停轮播 |	Boolean |	--- |	true

### config相关注释
- [1] columnWidth可以配置每一列的宽度，默认情况下每一列宽度相等。

- [2] align可以配置每一列的对齐方式，可选值有`'left'|'center'|'right'`，默认值为'left'。

## 事件
事件名 | 说明 | 参数列表 
:-: | :-: | :-: 
`click` | 行或单元格点击事件 | 见下方表
`mouseover` | 鼠标移入事件 | 同`click`
`getFirstRow`<Badge type="tip" text="1.4.2" /> | 轮播表第一条数据 | 见下方表

### 事件参数说明
参数 | 说明 | 类型 | 可选值 | 默认值 
:-: | :-: | :-: | :-: | :-: 
row |	所在行数据 |	`Array<String>` |	--- |	---
ceil |	单元格数据 |	`Array<Array>` |	--- |	`[]`
rowIndex |	行索引 |	Number |	--- |	---
columnIndex |	列索引 |	Number |	--- |	---
