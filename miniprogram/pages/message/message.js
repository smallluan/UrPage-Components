Page({

  data: {
    title: {
      text: "Message 轻提示",
      fontWeight: '700',
      fontSize: '38rpx',
      color: '#0052d9'
    },
    show_1: false,
    show_2: false,
    show_3: false,
    show_4: false,
    show_5: false,
    show_6: false,
  },

  show_1() {
    this.setData({
      show_1: true
    })
  },
  close_1() {
    this.setData({
      show_1: false
    })
  },
  show_2() {
    this.setData({
      show_2: true
    })
  },
  close_2() {
    this.setData({
      show_2: false
    })
  },
  show_3() {
    this.setData({
      show_3: true
    })
  },
  close_3() {
    this.setData({
      show_3: false
    })
  },
  show_4() {
    this.setData({
      show_4: true
    })
  },
  close_4() {
    this.setData({
      show_4: false
    })
  },
  show_5() {
    this.setData({
      show_5: true
    })
  },
  close_5() {
    this.setData({
      show_5: false
    })
  },
  show_6() {
    this.setData({
      show_6: true
    })
  },
  close_6() {
    this.setData({
      show_6: false
    })
  },


})