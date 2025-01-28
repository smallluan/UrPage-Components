import { tabbarList } from '../../store/sys'
Page({

  data: {
    title: {
      text: "关于开发者",
      fontWeight: '700',
      fontSize: '38rpx',
      color: '#0052d9'
    },
    tabbarList: tabbarList(),
    basicInfos: [
      {
        key: '昵称',
        value: '小乱乱',
      },
      {
        key: '教育背景',
        value: '北京化工大学'
      },
      {
        key: '专业信息',
        value: '信息学院 / 自动化'
      },
      {
        key: '生日',
        value: '2004 / 01 / 23'
      },
    ],
    progressList: [
      { progress: 70, text: '坚持', activeColor: '#0052d9' }, 
      { progress: 55, text: '抗压', activeColor: '#d54941' }, 
      { progress: 86, text: '幽默', activeColor: '#2ba471' }, 
    ]
  },

  copy (e) {
    const {currentTarget: { dataset: { msg } }} = e
    wx.setClipboardData({
      data: msg,
      success () {
       wx.showToast({
         title: '复制成功！',
         icon: 'none'
       })
      }
    })
  },

  nav (e) {
    const {currentTarget: { dataset: { url } }} = e
    wx.navigateTo({
      url: url,
    })
  }
})
