<!-- 加载 demo 组件 start -->
<script setup>
import demo from './demo.vue'
</script>
<!-- 加载 demo 组件 end -->

<!-- 正文开始 -->

# 胶囊柱图

胶囊柱图

## 基础用法

<ClientOnly>
  <demo />
</ClientOnly>
<details>
<summary>查看代码</summary>

<<< @/Other/CapsuleChart/demo.vue

</details>

## 属性

属性 | 说明 | 类型 | 可选值 | 默认值
:-: | :-: | :-: | :-: | :-:
data  | 柱数据  | `Array<Object>`  | data属性  | `[]`
unit  | 单位  | String  | --- | `''`
colors  | 环颜色  | `Array<String>`  | `[1]`  | `[2]`
showValue  | 显示数值  | Boolean  | ---  | false
textColor<Badge type="tip" text="1.4.0" />  | 文字颜色  | String  | ---  | '#fff'
fontSize<Badge type="tip" text="1.4.0" />   | 文字大小  | Number  | ---  | 12
labelNum<Badge type="tip" text="1.7.2" />   | 标签显示数量  | Number  | ---  | 6

## config注释

- [1] 颜色支持` hex | rgb | rgba `颜色关键字等四种类型。

- [2] 默认配色为`['#37a2da', '#32c5e9', '#67e0e3', '#9fe6b8', '#ffdb5c', '#ff9f7f', '#fb7293']`。

## data属性

属性 | 说明 | 类型 | 可选值 | 默认值
:-: | :-: | :-: | :-: | :-:
name | 柱名称 | String | --- | ---
value | 柱对应值 | Number | --- | ---
