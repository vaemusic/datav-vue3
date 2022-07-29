# 二次开发

## 说明

- 组件库一开始是参考 [MY-Kit](https://github.com/jrainlau/MY-Kit) 进行开发。部分代码说明可见该仓库的 README。

- 后来觉得文档和源码融合在一块，不是很清晰，所以使用了 pnpm 的 `monorepo`，把文档和源码分离。

- 文档的开发使用了 [Vitepress](https://vitepress.vuejs.org/) + [UnoCSS](https://github.com/unocss/unocss) 。

## 预览文档

```sh
pnpm install

pnpm run dev
```

## 打包

```sh
# 打包文档
pnpm run build:docs

# 打包库
pnpm run build:lib
```

## 主要目录

```sh
.
├── build              - vite 配置文件
├── script             - 生成组件基础代码及文档的脚本
├── packages
│   ├── datav-vue3     - 组件源码
│   ├── docs           - 文档
```

## 新增组件

- 执行 `pnpm run gen` 可以生成组件基础代码及文档文件。
  - 选择组件类型（用于后续文档文件目录生成）
    - Other: 代表其他类型的组件。
    - Border: 代表边框组件。
    - Decoration: 代表装饰组件。
  - 输入你要新建的组件英文名（纯英文，大写开头）
    - 组件的英文名：命名方式为大驼峰形式，例如：`BorderBox1`、`ScrollBoard`，后续作为组件注册名使用，**请注意命名规范**。
  - 输入你要新建的组件中文名
    - 组件的中文名：后续作为文档的 sidebar 名称使用。
  - 请输入组件的功能描述： (默认：这是一个新组件)

- 执行完生成代码脚本后，会生成以下目录和文件

```sh
.
├── packages
│   ├── datav-vue3
│   │   ├── components
│   │   │   ├── 组件英文名目录
│   │   │   │   ├── src
│   │   │   │   │   ├── index.vue      - 组件源码
│   │   │   │   ├── index.ts           - 用于注册组件
│   ├── docs
│   │   ├── docs
│   │   │   ├── 组件类型目录
│   │   │   │   ├── 组件英文名目录
│   │   │   │   │   ├── index.md       - 组件文档
│   │   │   │   │   ├── demo.vue       - 组件 Demo 示例
```

## ESLint 配置

组件库的 `ESLint` 配置使用了 antfu 大佬的 [eslint-config](https://github.com/antfu/eslint-config)
 