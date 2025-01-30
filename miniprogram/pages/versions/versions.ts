import { request } from '../../request/request'

Page({

  data: {
    title: {
      text: "版本指引",
      fontWeight: '700',
      fontSize: '34rpx',
      color: '#0052d9'
    },
    versions: [],
    loading: true
  },

  async onLoad () {
    request('/version', 'GET')
    .then(res => {
      this.setData({ 
        versions: res.data.versions,
        loading: false
      })
    })
    .catch(err => {
      console.log(err)
      wx.showToast({
        title: '服务器错误!',
        icon: 'none'
      })
    })
  }
})
