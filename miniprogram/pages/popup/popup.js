// pages/popup/pup.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: {
      text: "Popup 弹出窗口",
      fontWeight: '700',
      fontSize: '38rpx',
      color: '#0052d9'
    },
    popshow_1:false,
    popshow_2:false,
    popshow_3:false,
    popshow_4:false,
    direction: 'bottom'
  },

  pop_1(e) {
    this.setData({
      popshow_1: true,
      direction: e.currentTarget.dataset.d
    })
  },
  pop_2(e) {
    this.setData({
      popshow_2: true,
      direction: e.currentTarget.dataset.d
    })
  },
  pop_3(e) {
    this.setData({
      popshow_3: true,
      direction: e.currentTarget.dataset.d
    })
  },
  pop_4(e) {
    this.setData({
      popshow_4: true,
      direction: e.currentTarget.dataset.d
    })
  },
})