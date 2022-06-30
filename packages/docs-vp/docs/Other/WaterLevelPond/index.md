<!-- 加载 demo 组件 start -->
<script setup>
import demo1 from './demo1.vue'
import demo2 from './demo2.vue'
import demo3 from './demo3.vue'
</script>
<!-- 加载 demo 组件 end -->

<!-- 正文开始 -->

# 水位图

水位图

## 矩形水位图
<ClientOnly>
  <demo1 />
</ClientOnly>
<details>
<summary>查看代码</summary>

<<< @/Other/WaterLevelPond/demo1.vue

</details>

## 圆角水位图
<ClientOnly>
  <demo2 />
</ClientOnly>
<details>
<summary>查看代码</summary>

<<< @/Other/WaterLevelPond/demo2.vue

</details>

## 圆形水位图
<ClientOnly>
  <demo3 />
</ClientOnly>
<details>
<summary>查看代码</summary>

<<< @/Other/WaterLevelPond/demo3.vue

</details>

## config属性
参数 | 说明 | 类型 | 可选值 | 默认值
:-: | :-: | :-: | :-: | :-:
data |	水位位置 `[1]` |	`Arrya<Number>` |	--- |	`[]`
shape |	水位图形状 |	`String` |	`[2]` |	`'rect'`
colors |	水位图配色 |	`Array<String>` |	`[3]` |	`[4]`
waveNum |	波浪数量 |	`Number` |	--- |	`3`
waveHeight |	波浪高度 |	`Number` |	--- |	`40`
waveOpacity |	波浪透明度 |	`Number` |	--- |	`0.4`
formatter |	信息格式化 |	`String` |	--- |	`'{value}%'` `[5]`

## 注释
- [1] 可以有多个水位，但默认显示值最大的水位信息。

- [2] 有三种形状可供选择：矩形`rect`、圆角矩形`roundRect`、圆形`round`。

- [3] 颜色支持`hex | rgb | rgba `颜色关键字等四种类型。

- [4] 默认配色为`['#00BAFF', '#3DE7C9']`, 自动应用渐变色，若不想使用渐变色，请配置两个相同的颜色。

- [5] 自动使用最大的水位值替换字符串中的`'{value}'`标记。
