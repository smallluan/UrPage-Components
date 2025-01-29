import * as tools from '../../../components/tools/random'

Page({

  data: {
    title: {
      text: "Random 随机",
      fontWeight: '700',
      fontSize: '38rpx',
      color: '#0052d9'
    },
    randomInt0_9: 'undefined',
    codeRandomInt0_9: `
// 生成最大值为 10， 最小值为0
// 并且该数字不存在于 [1, 3] 的随机数
import * as tools from '../../../components/tools/random'
tools.randomInt0_9(0, 9, [1, 3])
    `
  },

  randomInt0_9 () {
    this.setData({ randomInt0_9: tools.randomInt0_9(0, 9, [1, 3]) })
  }
})
