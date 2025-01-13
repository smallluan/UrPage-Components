Component({

  properties: {
    // 类型
    type: {
      type: String,
      value: "interduce" // avatar | image | paragraph | cell | grid | interduce
    },
    // 背景动画
    bgAnimation: {
      type: String,
      value: 'none' // none | blink | move
    }
  },
})
