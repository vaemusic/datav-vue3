<!-- 加载 demo 组件 start -->
<script setup>
import demo1 from './demo1.vue'
import demo2 from './demo2.vue'
import demo3 from './demo3.vue'
import demo4 from './demo4.vue'
import demo5 from './demo5.vue'
</script>
<!-- 加载 demo 组件 end -->

<!-- 正文开始 -->

# 进度池

进度池

## 基础用法
<ClientOnly>
  <demo1 />
</ClientOnly>
<details>
<summary>查看代码</summary>

<<< @/Other/PercentPond/demo1.vue

</details>

## 调节边框
<ClientOnly>
  <demo2 />
</ClientOnly>
<details>
<summary>查看代码</summary>

<<< @/Other/PercentPond/demo2.vue

</details>

## 线条间隙
<ClientOnly>
  <demo3 />
</ClientOnly>
<details>
<summary>查看代码</summary>

<<< @/Other/PercentPond/demo3.vue

</details>

## 局部渐变
<ClientOnly>
  <demo4 />
</ClientOnly>
<details>
<summary>查看代码</summary>

<<< @/Other/PercentPond/demo4.vue

</details>

## 定制块隙长度
<ClientOnly>
  <demo5 />
</ClientOnly>
<details>
<summary>查看代码</summary>

<<< @/Other/PercentPond/demo5.vue

</details>

**百分比标签已通过CSS`display:none`隐藏。**

## config属性
参数 | 说明 | 类型 | 可选值 | 默认值
:-: | :-: | :-: | :-: | :-:
value |	进度池数值 |	`Number` |	`0-100` |	`0`
colors |	进度池配色 |	`Array<String>` |	`[1]` |	`[2]`
borderWidth |	边框宽度 |	`Number` |	--- |	`3`
borderGap |	边框间隙 |	`Number` |	--- |	`3`
lineDash |	线条间隙 |	`Array<Number>` |	--- |	`[5, 1]`
textColor |	文字颜色 |	`String` |	`[1]` |	`#fff`
borderRadius |	边框半径 |	`Number`|	--- |	`5`
localGradient |	局部渐变 |	`Boolean` |	--- |	`false`
formatter |	信息格式化 |	`String` |	--- |	`'{value}%'` `[3]`

## 注释
- [1] 颜色支持`hex | rgb | rgba`颜色关键字等四种类型。

- [2] 默认配色为`['#3DE7C9', '#00BAFF']`, 自动应用渐变色，若不想使用渐变色，请配置两个相同的颜色。

- [3] 自动使用value的值替换字符串中的`'{value}'`标记。
