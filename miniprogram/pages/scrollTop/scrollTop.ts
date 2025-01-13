Page({

  data: {
    title: {
      text: "scrollTop 回顶",
      fontWeight: '700',
      fontSize: '38rpx',
      color: '#0052d9'
    },
    progress: 0
  },
  onReady() {
    wx.pageScrollTo({
      duration: 300,
      scrollTop: 1000
    })
  },

  onPageScroll(e) {
    if(e.scrollTop > 100) {
      this.setData({backtopShow: true});
    }else this.setData({backtopShow: false});
  },
})