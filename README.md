# DataV Vue3+TS+Vite版

[![Author](https://img.shields.io/badge/Author-kjgl77-red.svg "Author")](https://github.com/vaemusic "Author")       [![LICENSE](https://img.shields.io/github/license/vaemusic/datav-vue3 "LICENSE")](https://github.com/vaemusic/datav-vue3/blob/master/LICENSE "LICENSE")

[![NPM](https://nodei.co/npm/@kjgl77/datav-vue3.png?mini=true)](https://www.npmjs.com/package/@kjgl77/datav-vue3)

本库来源自 [DataV-Team/DataV](https://github.com/DataV-Team/DataV)，另外，大佬的 [DataV-Vue3](https://github.com/DataV-Team/DataV-Vue3) 项目也已经在开发中了，地址：https://github.com/DataV-Team/DataV-Vue3


由于之前大佬写的 [DataV](http://datav.jiaminghi.com/) 不支持Vue3 Vite2.x，现部分代码用Vue3+TS重构。

- [文档地址](https://datav-vue3.netlify.app)：https://datav-vue3.netlify.app

- [Gitee地址](https://gitee.com/kjgl77/datav-vue3)：https://gitee.com/kjgl77/datav-vue3

- [Github地址](https://github.com/vaemusic/datav-vue3)：https://github.com/vaemusic/datav-vue3

- [Demo预览地址](https://datav-vue3-demo.netlify.app/)：https://datav-vue3-demo.netlify.app/

- [Demo Gitee地址](https://gitee.com/kjgl77/electronic-file)：https://gitee.com/kjgl77/electronic-file

- [Demo Github地址](https://github.com/vaemusic/electronic-file)：https://github.com/vaemusic/electronic-file

## 使用方法
- 安装，此处使用pnpm工具，也可以yarn,npm等
```shell
pnpm install @kjgl77/datav-vue3
```
### 全局引入

```ts
// main.ts中全局引入
import DataVVue3 from '@kjgl77/datav-vue3'
Vue.use(DataVVue3)
```
引入后在.vue文件中可以直接使用
```html
<dv-decoration-1 :color="['pink','yellow']" style="width:200px;height:50px;" />
```

### 局部引入
```html
<!-- 在.vue文件的script中import部分组件 -->
<script lang="ts" setup>
import { Decoration1, Decoration2 } from '@kjgl77/datav-vue3'
</script>
<template>
  <!-- 引入之后就可以在vue的template中直接使用 -->
  <decoration-1 :color="['pink','yellow']" style="width:200px;height:50px;" />
  <decoration-2 :reverse="true" style="width:5px;height:150px;" />
</template>
```

## 二次开发

二次开发可见文档中[二次开发部分](https://datav-vue3.netlify.app/Guide/contribute.html)或[contribute](./packages/docs/docs/Guide/contribute.md)
