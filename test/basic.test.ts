import { describe, expect, it } from 'vitest'

const RegxMap = {
  IS_COMP_NAME: /^[A-Z]/,
  IS_COMP_ZH_NAME: /^(?:[\u3400-\u4DB5\u4E00-\u9FEA\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|[0-9])+$/,
}

describe('Hi', () => {
  it('should works', () => {
    expect(RegxMap.IS_COMP_NAME.test('DvBorder1')).toMatchInlineSnapshot('true')
  })
})
