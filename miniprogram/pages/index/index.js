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
