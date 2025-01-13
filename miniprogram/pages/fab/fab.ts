Page({

  data: {
    show_1: true,
    show_2: false,
    show_3: false,
    title: {
      text: "Fab 悬浮按钮",
      fontWeight: '700',
      fontSize: '38rpx',
      color: '#0052d9'
    },
  },
  back(){
    wx.navigateBack()
  },

  show_1() {
    this.setData({
      show_1: true,
      show_2: false,
      show_3: false
    })
  },

  show_2() {
    this.setData({
      show_1: false,
      show_2: true,
      show_3: false
    })
  },

  show_3() {
    this.setData({
      show_1: false,
      show_2: false,
      show_3: true
    })
  },

})