import { resolve } from 'node:path'
import { input, select } from '@inquirer/prompts'
import fs from 'fs-extra'
import { getCurrnetDir } from './util.js'

const listFilePath = '../../packages/datav-vue3/list.json'

const RegxMap = {
  IS_COMP_NAME: /^[A-Z]/,
  IS_COMP_ZH_NAME: /^(?:[\u3400-\u4DB5\u4E00-\u9FEA\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|[0-9])+$/,
}

function checkDuplicateCompName(data, compName) {
  // 如果当前节点就是叶子节点，直接比较属性值是否相等
  if (!data.children || data.children.length === 0)
    return data.compName === compName

  // 递归检查子节点是否包含重复的 compName
  return data.children.some(child => checkDuplicateCompName(child, compName))
}

function kebabCase(string) {
  return string
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase()
}

export async function infoCollector() {
  const meta = {
    compType: await select({
      message: '请选择组件类型(Other代表没有分组组件):',
      choices: [
        { value: 'Other' },
        { value: 'Border' },
        { value: 'Decoration' },
      ],
    }),
    compName: await input({
      message: '请输入你要新建的组件名（纯英文，大写开头）：',
      validate(answer) {
        const validateRes = RegxMap.IS_COMP_NAME.test(answer)
        if (!validateRes)
          return '请按要求输入正确的组件名！'

        const listData = fs.readJSONSync(resolve(getCurrnetDir(), listFilePath))

        if (listData.some(node => checkDuplicateCompName(node, answer)))
          return '已存在同名组件，请确认后更换名字再重试。'

        return true
      },
    }),
    compZhName: await input({
      message: '请输入你要新建的组件名（中文）：',
      validate(answer) {
        const validateRes = RegxMap.IS_COMP_ZH_NAME.test(answer)
        if (!validateRes)
          return '请按要求输入正确的组件名！'

        return true
      },
    }),
    compDesc: await input({
      message: '请输入组件的功能描述：',
      default: '默认：这是一个新组件',
    }),
  }
  const { compName } = meta
  meta.compClassName = kebabCase(compName)
  return meta
}
