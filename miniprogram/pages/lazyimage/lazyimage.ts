import { getGoods } from '../../store/goods'
Page({
  data: {
    title: {
      text: "lazyImage 懒加载图片",
      fontWeight: '700',
      fontSize: '34rpx',
      color: '#0052d9'
    },
  },

  async onLoad() {
    let res = await getGoods()
    this.setData({ goodsList:  res})
  },
  
  _onPageScroll(e) {
  },

  onPageScroll(e) {
  },
  __removeLazyImageObserver__() {
    
  }
})