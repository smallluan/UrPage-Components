import { getNavBarInfos } from "../utils/sys"
import { _style, _classes } from '../utils/common'

Component({
  options: ({
    multipleSlots: true,
  }),

  externalClasses: ['m-navbar'],

  properties: {
    // defaultData（父页面传递的数据-就是引用组件的页面）
    title: {
      type: Object,
      // value: { 
      //   text: '默认标题',
      //   fontWeight: '700',
      //   color: 'black',
      //   fontSize: '38rpx'
      // }
    },
    back: {
      type: Boolean,
      value: true
    },
    bg: {
      type: String,
      value: 'pink'
    },
    positionHolder: {
      type: Boolean,
      value: true
    }
  },

  data: {
    styles: '',
    classes: '',
  },

  lifetimes: {
    attached () {
      let navbarInfo = getNavBarInfos()
      let { classes } = this.data
      this.setData({
        navBarHeight: navbarInfo.navBarHeight + 'px',
        menuRight: navbarInfo.menuRight + 'px',
        menuTop: navbarInfo.menuTop + 'px',
        menuHeight: navbarInfo.menuHeight + 'px', 
      })
      this.setData({
        classes: classes + _classes(this.data, []),
        styles: _style(this.data, [])
      })
    },
  },

  methods: {
    back () {
      wx.navigateBack()
    }
  }
})