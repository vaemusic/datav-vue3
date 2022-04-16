/* eslint-disable */

/** 
 * !--------- FBI WARNING ----------!
 * 
 * 根据 /packages 目录下的组件所生成的模块导出，请勿手动修改
 */
import { App, Plugin } from 'vue';

import 'uno.css'

import { ButtonPlugin } from './Button';
import { FooPlugin } from './Foo';
import { Decoration1Plugin } from './Decoration1';
import { Decoration2Plugin } from './Decoration2';
import { BorderBox1Plugin } from './BorderBox1';
import { BorderBox2Plugin } from './BorderBox2';
import { FullScreenContainerPlugin } from './FullScreenContainer';

const MYKitPlugin: Plugin = {
  install(app: App) {
    ButtonPlugin.install?.(app);
    FooPlugin.install?.(app);
    Decoration1Plugin.install?.(app);
    Decoration2Plugin.install?.(app);
    BorderBox1Plugin.install?.(app);
    BorderBox2Plugin.install?.(app);
    FullScreenContainerPlugin.install?.(app);
  },
};

export default MYKitPlugin;

export * from './Button'
export * from './Foo'
export * from './Decoration1'
export * from './Decoration2'
export * from './BorderBox1'
export * from './BorderBox2'
export * from './FullScreenContainer'