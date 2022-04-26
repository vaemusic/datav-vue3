<!-- 加载 demo 组件 start -->
<!-- <script setup>
import demo from './demo.vue'
</script> -->
<!-- 加载 demo 组件 end -->

<!-- 正文开始 -->

# 全屏容器

全屏容器

## 基础用法
<!-- <Preview comp-name="FullScreenContainer" demo-name="demo">
  <demo />
  /Preview>
-->

数据可视化页面一般在浏览器中进行全屏展示，全屏容器将根据屏幕比例及当前浏览器窗口大小，自动进行缩放处理。浏览器全屏后，全屏容器将充满屏幕。

建议在全屏容器内使用百分比搭配flex进行布局，以便于在不同的分辨率下得到较为一致的展示效果。

使用前请注意将`body`的`margin`设为0，否则会引起计算误差，全屏后不能完全充满屏幕。

```html

  <dv-full-screen-container>content</dv-full-screen-container>

```