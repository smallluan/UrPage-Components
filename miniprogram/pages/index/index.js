import * as store from './store'
import { tabbarList } from '../../store/sys'

Page({
  data: {
    tabs: store.tabs(),
    tabbarList: tabbarList(),
    collapseList: store.getEachList(),
    cellList: store.getCellListCates(),
    tabsHeightLight: store.tabsHeightLight(),
    showScrollTop: false,
    title: {
      text: "UrPage 组件库",
      fontWeight: '700',
      fontSize: '38rpx',
      color: '#0052d9'
    },
  },

  onPageScroll(e) {
    this.setData({ showScrollTop: e.scrollTop >= 100 })
  },

  nav(e) {
    wx.navigateTo({
      url: e.currentTarget.dataset.url,
    })
  },
})
