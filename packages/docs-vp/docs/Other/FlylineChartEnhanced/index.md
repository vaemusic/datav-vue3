<!-- 加载 demo 组件 start -->
<script setup>
import demo from './demo.vue'
</script>
<!-- 加载 demo 组件 end -->

<!-- 正文开始 -->

# 飞线图增强版

配置若干飞线点后，你可以在任意两点间设置飞线，得到动态飞线图，组件提供的`dev模式`可以帮你快速配置飞线点位置。

```html
<dv-flyline-chart-enhanced :config="config" style="width:100%;height:100%;" />
```

## 基础用法
<ClientOnly>
  <demo />
</ClientOnly>
<details>
<summary>查看代码</summary>

<<< @/Other/FlylineChartEnhanced/demo.vue

</details>

- 更多示例见<a href="http://datav.jiaminghi.com/guide/flylineChartEnhanced.html" target="_blank">DataV FlylineChartEnhanced</a>

## dev模式
组件提供了`dev`模式 (本页展示的Demo均已开启)，可以帮你快速确定飞线点位置，设置组件属性`dev`为`true`即可启用dev模式：
```html
<dv-flyline-chart-enhanced :config="config" :dev="true" style="width:100%;height:100%;" />
```

开启dev模式后，请打开浏览器控制台，然后点击飞线图组件中你想要设置的飞线的起始点位置或中心点位置，控制台会输出该点在组件中的位置信息：
```html
dv-flyline-chart DEV:
Click Position is [100, 100]
Relative Position is [0.10, 0.10]
```
组件默认使用相对坐标，应选用`Relative Position`，关闭相对坐标模式，则需要使用`Click Position`，如何开启和关闭相对坐标模式请查阅`config属性`。

## 属性
参数 | 说明 | 类型 | 可选值 | 默认值
:-: | :-: | :-: | :-: | :-:
points |	飞线点 |	`Point[][1]` |	--- |	`[]Point`
lines |	飞线 |	`Flyline[][2]` |	--- |	`[]Flyline`
halo |	全局光晕配置 |	`Halo` |	--- |	`halo`
text |	全局文本配置 |	`Text` |	--- |	`text`
icon |	全局图标配置 |	`Icon` |	--- |	`icon`
line |	全局飞线配置 |	`Line` |	--- |	`line`
bgImgSrc |	背景图src |	`String` |	--- |	`''`
k |	飞线收束程度`[3]` |	`Number` |	`-1 - 1` |	`-0.5`
curvature |	飞线曲率`[4]` |	`Number` |	`1 - 10` |	`5`
relative |	使用相对坐标`[5]` |	`Boolean` |	`true/false` |	`true`

## Point属性
每个**Point**的`halo`、`text`、`icon`属性都会自动继承该属性的全局配置。

参数 | 说明 | 类型 | 可选值 | 默认值
:-: | :-: | :-: | :-: | :-:
name |	点名称 |	`String` |	--- |	-
coordinate |	点坐标 |	`Number[]` |	--- |	-
halo |	点光晕配置 |	`Halo` |	--- |	`halo`
text |	点文本配置 |	`Text` |	--- |	`text`
icon |	点图标配置 |	`Icon` |	--- |	`icon`

## Flyline属性
每个**Flyline**的`width`、`color`、`orbitColor`、`duration`、`radius`属性都会自动继承`config.line`下相同的属性配置。

参数 | 说明 | 类型 | 可选值 | 默认值
:-: | :-: | :-: | :-: | :-:
source |	飞线起点的点名称 |	`String` |	--- |	-
target |	飞线终点的点名称 |	`String` |	--- |	-
width |	飞线宽度 |	`Number` |	--- |	`inherit`
color |	飞线颜色 |	`String` |	--- |	`inherit`
orbitColor |	飞线轨迹颜色 |	`String` `[6]` |	--- |	`inherit`
duration |	飞线动画时长 |	`Number[]` `[7]` |	--- |	`inherit`
radius |	飞线显示半径 |	`Number` `[8]` |	--- |	`inherit`

## halo属性

参数 | 说明 | 类型 | 可选值 | 默认值
:-: | :-: | :-: | :-: | :-:
show |	是否显示光晕 |	`Boolean` |	--- |	`false`
duration |	光晕动画时长 |	`Number[]` |	--- |	`[20, 30]`
color |	光晕颜色 |	`String` |	--- |	`#fb7293`
radius |	光晕最大半径 |	`Number` |	--- |	`120`

## text属性

参数 | 说明 | 类型 | 可选值 | 默认值
:-: | :-: | :-: | :-: | :-:
show |	是否显示点名称 |	`Boolean` |	--- |	`false`
offset |	名称位置偏移 |	`Number[]` |	--- |	`[0, 15]`
color |	名称颜色 |	`String` |	--- |	`#ffdb5c`
fontSize |	名称文字大小 |	`Number` |	--- |	`12`

## icon属性

参数 | 说明 | 类型 | 可选值 | 默认值
:-: | :-: | :-: | :-: | :-:
show |	是否显示点图标 |	`Boolean` |	--- |	`false`
src |	图标src |	`String` |	--- |	`''`
width |	图标宽度 |	`Number` |	--- |	`15`
height |	图标高度 |	`Number` |	--- |	`15`

## line属性

参数 | 说明 | 类型 | 可选值 | 默认值
:-: | :-: | :-: | :-: | :-:
width |	飞线宽度 |	`Number` |	--- |	`1`
color |	飞线颜色 |	`String` |	--- |	`#ffde93`
orbitColor |	轨迹颜色 |	`String` |	--- |	`rgba(103, 224, 227, .2)`
duration |	飞线动画时长 |	`Number[]` |	--- |	`[20, 30]`
radius |	飞线显示半径 |	`Number` |	--- |	`100`

## 相关注释
- [1] 飞线图的基本点，点的完整配置参见`Point属性`

- [2] 飞线图飞线，飞线完整配置参见`Flyline属性`

- [3] `k`值决定了飞线的收束程度，其取值范围为`-1 - 1`，当为负值时飞线呈凸形聚合，为正值时飞线呈凹形聚合。

- [4] `curvature`决定了飞线的弯曲程度，其取值范围为`1 - 10`，该值越小，飞线曲率越大，该值越大，飞线曲率越小。

- [5] `relative`用于控制是否启用**相对坐标模式**，因为飞线图组件的宽高可能是自适应的，如按百分比计算宽高，使用相对坐标模式可使飞线点的位置同样按飞线图组件宽高的百分比计算。默认启用相对坐标模式，请根据情况，选用Dev模式下输出的点坐标信息。

- [6] 飞线的轨迹线默认颜色为`rgba(103, 224, 227, .2)`，如果想要隐藏轨迹线，可以设置`orbitColor`为`transparent`。

- [7] `duration`用于计算动画时长（10 = 1s），`duration[0]`用于控制动画最短时长，`duration[1]`用于控制动画最长时长，动画时长将在此范围随机。如果想要设置固定的动画时长可以将他们的值设为相同的。

- [8] `radius`控制了飞线的显示区域半径，该值越大，飞线显示范围越大，飞线越长，该值越小，飞线越短。
