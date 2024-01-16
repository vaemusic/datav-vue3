<!-- 加载 demo 组件 start -->
<script setup>
import demo from './demo.vue'
import demo2 from './demo2.vue'
</script>
<!-- 加载 demo 组件 end -->

<!-- 正文开始 -->

# 动态环图

动态环图

## 基础用法

<ClientOnly>
  <demo />
</ClientOnly>
<details>
<summary>查看代码</summary>

<<< @/Other/ActiveRingChart/demo.vue

</details>

## 数字不使用DigitalFlop

<ClientOnly>
  <demo2 />
</ClientOnly>
<details>
<summary>查看代码</summary>

<<< @/Other/ActiveRingChart/demo2.vue

</details>

## 属性

参数 | 说明 | 类型 | 可选值 | 默认值
:-: | :-: | :-: | :-: | :-:
config | 配置 | Object | | 见下方
isDigitalFlop<Badge type="tip" text="1.7.2" /> | 数字是否使用DigitalFlop显示 | Boolean | --- | true

## config属性

参数 | 说明 | 类型 | 可选值 | 默认值
:-: | :-: | :-: | :-: | :-:
radius | 环半径 | String/Number | `'50%'/ 100` | `'50%'`
activeRadius | 环半径（动态）| String/Number | `'55%'/110` | `'55%'`
data | 环数据 | `Array<Object>` | `data属性见下方表格` | `[]`
lineWidth | 环线条宽度 | Number | --- | 20
activeTimeGap | `切换间隔(ms)` | Number | --- | 3000
color | 环颜色 | `Array<String>` | `[1]` | `[]`
textColor<Badge type="tip" text="1.4.1" /> | 文字颜色 | `String` | --- | `'#fff'`
digitalFlopStyle | 数字翻牌器样式 | Object | --- | `[2]`
digitalFlopToFixed | 数字翻牌器小数位数 | Number | --- | 0
numToFixed<Badge type="tip" text="1.7.2" /> | 数字小数位数 | Number | --- | 0
digitalFlopUnit | 数字翻牌器单位 | String | --- | `''`
animationCurve | 动效曲线 | String | Transition | 'easeOutCubic'
animationFrame | 动效帧数 | Number | `[3]` | 50
showOriginValue | 显示原始值 | Boolean | --- | false

## config注释

- [1] 颜色支持 `hex` | `rgb` | `rgba` 颜色关键字等四种类型。

- [2] digitalFlopStyle用于配置内置的数字翻牌器样式，详情可查阅数字翻牌器，你可以配置该项来设置数字翻牌器的文字颜色和大小。默认值如下：

```css
digitalFlopStyle: {
  fontSize: 25,
  fill: '#fff'
}
```

- [3] `animationFrame`用于配置动画过程的帧数即动画时长

## data属性

参数 | 说明 | 类型 | 可选值 | 默认值
:-: | :-: | :-: | :-: | :-:
name | 环对应名称 | String | --- | ---
value | 环对应值 | Number | --- | ---
