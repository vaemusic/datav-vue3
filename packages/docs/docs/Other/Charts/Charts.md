<!-- 加载 demo 组件 start -->
<script setup>
import demo from './demo.vue'
</script>
<!-- 加载 demo 组件 end -->

<!-- 正文开始 -->

# 图表

图表

图表组件基于<a href="http://charts.jiaminghi.com/" target="_blank">Charts</a>封装，只需要将对应图表option数据传入组件即可。

#### **`当窗口发生resize时，图表组件会重新计算宽高以便于自适应。`**

相关示例请移步<a href="http://charts.jiaminghi.com/example/" target="_blank">Charts实例</a>

相关配置项请移步<a href="http://charts.jiaminghi.com/config/" target="_blank">Charts配置项</a>

## 基础用法
<ClientOnly>
  <demo />
</ClientOnly>
<details>
<summary>查看代码</summary>

<<< @/Other/Charts/demo.vue

</details>
