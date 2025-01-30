import * as store from './store'
import { tabbarList } from '../../store/sys'
import * as tools from '../../components/tools/random'

Page({
  data: {
    tabs: store.tabs(),
    tabbarList: tabbarList(),
    tabsHeightLight: store.tabsHeightLight(),
    showScrollTop: false,
    currTab: 0
  },

  onLoad () {
    this.getListByCurrTab()
  },

  onPageScroll(e) {
    this.setData({ showScrollTop: e.scrollTop >= 100 })
  },

  nav(e) {
    wx.navigateTo({
      url: e.currentTarget.dataset.url,
    })
  },

  tabClick (e) {
    const currTab = e.detail.current
    
    this.setData({
      currTab: e.detail.current
    })

    this.getListByCurrTab()
  },

  /**
   * 根据 currTab 值的不同切换不同的类别列表和单元格列表
   */
  getListByCurrTab () {
    const { currTab } = this.data
    if (currTab === 0) {
      this.setData({
        collapseList: store.getEachBasicList(),
        cellList: store.getBasicCellListCates()
      })
    } else if (currTab === 1) {
      this.setData({
        collapseList: store.getEachCombList(),
        cellList: store.getCombCellListCates()
      })
    } else if (currTab === 2) {
      this.setData({
        collapseList: store.getEachFuncList(),
        cellList: store.getFuncCellListCates()
      })
    }
  }
})
