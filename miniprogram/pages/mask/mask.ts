Page({
  data: {
    title: {
      text: "Mask 遮罩层",
      fontWeight: '700',
      fontSize: '38rpx',
      color: '#0052d9'
    },
    showMask: false,
    links: [
      {
        text:'loading 加载',
        url: '/pages/loading/loading'
      },
      {
        text:'Module 模态窗口',
        url: '/pages/module/module'
      },
      {
        text:'Popup 弹出层',
        url: ''
      },
      {
        text:'Actions 动作面板',
        url: ''
      },
    ],
  },
  back () {
    wx.navigateBack()
  },
  onTap () {
    this.setData({ showMask: true })
  }
})