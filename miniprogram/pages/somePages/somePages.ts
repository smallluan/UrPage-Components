import { tabbarList } from '../../store/sys'

Page({

  data: {
    title: {
      text: "页面",
      fontWeight: '700',
      fontSize: '38rpx',
      color: '#0052d9'
    },
    tabbarList: tabbarList()
  },

  navi () {
    wx.navigateTo({
      url: '/pages/pages/dianshang/home/home'
    })
  }
})
