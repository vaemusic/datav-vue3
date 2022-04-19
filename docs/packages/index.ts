/**
 * !--------- FBI WARNING ----------!
 *
 * 根据 /packages 目录下的组件所生成的模块导出，请勿手动修改
 */
import type { App, Plugin } from 'vue'

import { DigitalFlopPlugin } from './DigitalFlop'
import { FullScreenContainerPlugin } from './FullScreenContainer'
import { Decoration1Plugin } from './Decoration1'
import { Decoration2Plugin } from './Decoration2'
import { Decoration3Plugin } from './Decoration3'
import { Decoration4Plugin } from './Decoration4'
import { Decoration5Plugin } from './Decoration5'
import { Decoration6Plugin } from './Decoration6'
import { Decoration7Plugin } from './Decoration7'
import { Decoration8Plugin } from './Decoration8'
import { Decoration9Plugin } from './Decoration9'
import { BorderBox1Plugin } from './BorderBox1'
import { BorderBox2Plugin } from './BorderBox2'
import { BorderBox3Plugin } from './BorderBox3'
import { BorderBox4Plugin } from './BorderBox4'
import { BorderBox5Plugin } from './BorderBox5'
import { BorderBox6Plugin } from './BorderBox6'
import { BorderBox7Plugin } from './BorderBox7'
import { BorderBox8Plugin } from './BorderBox8'

const MYKitPlugin: Plugin = {
  install(app: App) {
        DigitalFlopPlugin.install?.(app)
        FullScreenContainerPlugin.install?.(app)
       Decoration1Plugin.install?.(app)
   Decoration2Plugin.install?.(app)
   Decoration3Plugin.install?.(app)
   Decoration4Plugin.install?.(app)
   Decoration5Plugin.install?.(app)
   Decoration6Plugin.install?.(app)
   Decoration7Plugin.install?.(app)
   Decoration8Plugin.install?.(app)
   Decoration9Plugin.install?.(app)
       BorderBox1Plugin.install?.(app)
   BorderBox2Plugin.install?.(app)
   BorderBox3Plugin.install?.(app)
   BorderBox4Plugin.install?.(app)
   BorderBox5Plugin.install?.(app)
   BorderBox6Plugin.install?.(app)
   BorderBox7Plugin.install?.(app)
   BorderBox8Plugin.install?.(app)
  },
}

export default MYKitPlugin

export * from './DigitalFlop'
export * from './FullScreenContainer'
export * from './Decoration1'
export * from './Decoration2'
export * from './Decoration3'
export * from './Decoration4'
export * from './Decoration5'
export * from './Decoration6'
export * from './Decoration7'
export * from './Decoration8'
export * from './Decoration9'
export * from './BorderBox1'
export * from './BorderBox2'
export * from './BorderBox3'
export * from './BorderBox4'
export * from './BorderBox5'
export * from './BorderBox6'
export * from './BorderBox7'
export * from './BorderBox8'
