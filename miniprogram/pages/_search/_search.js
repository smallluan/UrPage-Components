import { getEachList } from '../index/store'

Page({

  data: {
    componentsList:(() => {
      let list = []
      getEachList().forEach(item => {
        list = [...list, ...item]
      })
      return list
    })(),
    resList: [],
    showLoading: false
  },

  search (e) {
    this.setData({ showLoading: true })
    const key = e.detail.content
    const { componentsList } = this.data
    let res = componentsList.filter(item => item.title.indexOf(key) !== -1)
    this.setData({ resList: res, showLoading: false })
  },

  nav (e) {
    const { url } = e.currentTarget.dataset
    wx.navigateTo({
      url: url,
    })
  }
})
