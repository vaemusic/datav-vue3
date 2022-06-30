<!-- 加载 demo 组件 start -->
<script setup>
import demo from './demo.vue'
</script>
<!-- 加载 demo 组件 end -->

<!-- 正文开始 -->

# 飞线图

飞线图

## 基础用法
<ClientOnly>
  <demo />
</ClientOnly>
<details>
<summary>查看代码</summary>

<<< @/Other/FlylineChart/demo.vue

</details>

- 更多示例见<a href="http://datav.jiaminghi.com/guide/flylineChart.html" target="_blank">DataV FlylineChart</a>

## dev模式
组件提供了`dev`模式 (本页展示的Demo均已开启)，可以帮你快速确定飞线点位置，设置组件属性`dev`为`true`即可启用dev模式：
```html
<dv-flyline-chart :config="config" :dev="true" style="width:100%;height:100%;" />
```

开启dev模式后，请打开浏览器控制台，然后点击飞线图组件中你想要设置的飞线的起始点位置或中心点位置，控制台会输出该点在组件中的位置信息：
```html
dv-flyline-chart DEV:
Click Position is [100, 100]
Relative Position is [0.10, 0.10]
```
组件默认使用相对坐标，应选用`Relative Position`，关闭相对坐标模式，则需要使用`Click Position`，如何开启和关闭相对坐标模式请查阅`config属性`。

## config属性
参数 | 说明 | 类型 | 可选值 | 默认值
:-: | :-: | :-: | :-: | :-:
centerPoint |	中心点坐标 |	`Array<Number>` |	--- |	`[0, 0]`
points |	飞线起始点数据 |	`Array[1]` |	--- |	`[]`
lineWidth |	飞线宽度 |	`Number` |	--- |	`1`
orbitColor |	轨迹颜色 |	`String` |	--- |	`[2]`
flylineColor |	飞线颜色 |	`String` |	--- |	`#ffde93`
k |	`飞线收束程度[3]` |	`Number` |	`-1 - 1` |	`-0.5`
curvature |	`飞线曲率[4]` |	`Number` |	`1 - 10` |	`5`
flylineRadius |	`飞线显示半径[5]` |	`Number` |	--- |	`100`
duration |	飞线动画时长 |	`Array<Number>` |	--- |	`[20, 30] [6]`
relative |	`使用相对坐标[7]` |	`Boolean` |	true/false |	`true`
bgImgUrl |	背景图url |	`String` |	--- |	`''`
text |	文本配置项 |	`Object` |	--- |	`见下方text属性`
halo |	光晕环配置项 |	`Object` |	--- |	`见下方halo属性`
centerPointImg |	中心点图片配置 |	`Object` |	--- |	`见下方centerPointImg属性`
pointsImg |	飞线点图片配置 |	`Object` |	--- |	`见下方pointsImg属性`
## config相关注释
- [1] 飞线起始点数据的子元素可以为数组或对象，当为数组时，即点坐标数据；当为对象时，该对象包涵点坐标位置和文本信息。两种示例如下：
```js
// 子元素为数组
points = [
  // 飞线起始点的坐标
  [10, 10],
  [100, 100],
]

// 子元素为对象
points = [
  {
    position: [0.33, 0.52],
    // 飞线图自动显示该点文本信息
    text: '飞线点A',
  },
]
```
- [2] 飞线的轨迹线默认颜色为`rgba(103, 224, 227, .2)`，如果想要隐藏轨迹线，可以设置`orbitColor`为`transparent`。

- [3] `k`值决定了飞线的收束程度，其取值范围为`-1 - 1`，当为负值时飞线呈凸形聚合，为正值时飞线呈凹形聚合。

- [4] `curvature`决定了飞线的弯曲程度，其取值范围为`1 - 10`，该值越小，飞线曲率越大，该值越大，飞线曲率越小。

- [5] `flylineRadius`控制了飞线的显示区域半径，该值越大，飞线显示范围越大，飞线越长，该值越小，飞线越短。

- [6] `duration`用于计算每一条飞线的动画时长（10 = 1s），`duration[0]`用于控制动画最短时长，`duration[1]`用于控制动画最长时长，飞线的动画时长将在此范围随机。如果想要每一条飞线的动画时长都相等可以将他们的值设为相同的。

- [7] `relative`用于控制是否启用**相对坐标模式**，因为飞线图组件的宽高可能是自适应的，如按百分比计算宽高，使用相对坐标模式可使飞线点的位置同样按飞线图组件宽高的百分比计算。默认启用相对坐标模式，请根据情况，选用Dev模式下输出的点坐标信息。

## text属性
参数 | 说明 | 类型 | 可选值 | 默认值
:-: | :-: | :-: | :-: | :-:
offset |	文本位置偏移 |	`Array<Number>` |	--- |	`[0, 15]`
color |	文本颜色 |	`String` |	--- |	`#ffdb5c`
fontSize |	文本文字大小 |	`Number` |	--- |	`12`

## halo属性
参数 | 说明 | 类型 | 可选值 | 默认值
:-: | :-: | :-: | :-: | :-:
show |	是否显示光晕环 |	`Boolean` |	--- |	`true`
duration |	动画时长 |	`Number` |	--- |	`30`
color |	光晕颜色 |	`String` |	--- |	`#fb7293`
radius |	光晕最大半径 |	`Number` |	--- |	`120`

## centerPointImg属性
参数 | 说明 | 类型 | 可选值 | 默认值
:-: | :-: | :-: | :-: | :-:
width |	图片宽度 |	`Number` |	--- |	`40`
height |	图片高度 |	`Number` |	--- |	`40`
url |	图片url |	`String` |	--- |	`''`

## pointsImg属性
参数 | 说明 | 类型 | 可选值 | 默认值
:-: | :-: | :-: | :-: | :-:
width |	图片宽度 |	`Number` |	--- |	`15`
height |	图片高度 |	`Number` |	--- |	`15`
url |	图片url |	`String` |	--- |	`''`

