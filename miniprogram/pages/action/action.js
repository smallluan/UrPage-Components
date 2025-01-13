Page({

  data: {
    show_1: false,
    show_2: false,
    showModule: false,
    content: '',
    title: {
      text: "Actions 动作面板",
      fontWeight: '700',
      fontSize: '38rpx',
      color: '#0052d9'
    },
    list: [
      {
        color: 'white',
        theme: 'primary',
        content: '选项一',
      },
      {
        color: 'white',
        theme: 'success',
        content: '选项二',
      },
      {
        color: 'black',
        theme: 'error',
        content: '选项三',
      },
    ]
  },

  change_1 () {
    this.setData({
      show_1: true
    })
  },

  change_2 () {
    this.setData({
      show_2: true
    })
  },

  actionBtnTap (e) {
    this.setData({
      showModule: true,
      content: `您点击了${e.detail.target.content}`
    })
  },

  back() {wx.navigateBack()}
})