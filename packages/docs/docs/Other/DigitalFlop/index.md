<!-- 加载 demo 组件 start -->
<script setup>
import demo from './demo.vue'
import demo2 from './demo2.vue'
import demo3 from './demo3.vue'
import demo4 from './demo4.vue'
</script>
<!-- 加载 demo 组件 end -->

<!-- 正文开始 -->

# 数字翻牌器

数字翻牌器

## 基础用法
<ClientOnly>
  <demo />
</ClientOnly>
<details>
<summary>查看代码</summary>

<<< @/Other/DigitalFlop/demo.vue

</details>

## 浮点数
<ClientOnly>
  <demo2 />
</ClientOnly>
<details>
<summary>查看代码</summary>

<<< @/Other/DigitalFlop/demo2.vue

</details>

## 多数值
<ClientOnly>
  <demo3 />
</ClientOnly>
<details>
<summary>查看代码</summary>

<<< @/Other/DigitalFlop/demo3.vue

</details>

## 千分位分隔符
<ClientOnly>
  <demo4 />
</ClientOnly>
<details>
<summary>查看代码</summary>

<<< @/Other/DigitalFlop/demo4.vue

</details>

## 属性
参数 | 说明 | 类型 | 可选值 | 默认值 | 是否必填
:-: | :-: | :-: | :-: | :-: | :-:
`number` | 数字数值[1] | `number[]` | - | `[]` | 是 
`content` | 内容模版[1] | `string` | `'{nt}个'` | `''` | 否
`toFixed` | 小数位数 | `number` | - | `0` | 否
`textAlign` | 水平对齐方式	 | `string` | `'center'/'left'/'right'[2]` | `center` | 否
`rowGap` | 行间距 | `number` | [3] | `0` | 否
`style` | 样式配置 | `Object` | <a href="http://crender.jiaminghi.com/guide/style.html" target="_blank">CRender Style</a>| `[4]` | 否
`formatter` | 格式化数字	 | `Function` | [5] | undefined | 否
`animationCurve` | 动效曲线	 | `string` | <a href="http://transition.jiaminghi.com/curveTable/" target="_blank">Transition</a> | `'easeOutCubic'` | 否
`animationFrame` | 动效帧数 | `number` | [6] | `50` | 否


---
### 注释
[1] number中的元素将被用于替换content内容模版中的{nt}标记，其替换顺序与模版标记的顺序一一对应：
```js
const number = [1, 2, 3, 4]
const content = '数字{nt},数字{nt},数字{nt},数字{nt}'
// 实际显示效果：'数字1,数字2,数字3,数字4'
```

[2] textAlign用于设置文字的水平对齐方式，可选值为'center'|'left'|'right'，该值将覆盖style属性中的textAlign属性。

[3] 当使用\n进行换行的时候，rowGap可以控制行间距。

[4] style是CRender中用于配置样式的类，可使用fill属性设置字体颜色、stroke属性设置字体描边颜色、fontSize属性设置文字大小，更多配置请查阅CRender Style。

style的默认值是： 
```css
style: {
  fontSize: 30,
  fill: '#3de7c9'
}
```

[5] 当需要格式化数字时，例如数字千分位插入逗号分隔符，可以使用formatter来达到效果，number属性中的每一个数值元素都将被传递给formatter，返回值将代替原有数值，可参见示例。

[6] animationFrame用于配置动画过程的帧数即动画时长。
