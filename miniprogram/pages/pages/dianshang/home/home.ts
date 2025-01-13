import { getGoods } from '../../../../store/goods'
 
Page({

  data: {
    title: {
      text: "UrPage 电商",
      fontWeight: '700',
      fontSize: '38rpx',
      color: 'white'
    },
    tabbarList: [
      {
        name: '首页',
        icon: 'home',
        url:'/pages/pages/dianshang/home/home',
      },     
      {
        name: '分类',
        icon: 'app',
        url:'/pages/pages/dianshang/cate/cate',
      },
      {
        name: '购物车',
        icon: 'cart',
        url:'/pages/pages/dianshang/cart/cart',
      },
      {
        name: '我的',
        icon: 'user-1',
        url:'/pages/pages/dianshang/my/my',
      },
    ],
    searchBtnProps: {
      color: 'white',
      bg: 'orange'
    },
    topOptions: [
      {
        icon: 'catalog',
        name: '订单'
      },
      {
        icon: 'more',
        name: '更多'
      },
    ],
    tabs: [
      {
        text: '精选',
        disabled: false,
      },
      {
         text: '食品',
        disabled: false,
      },
      {
        text: '生鲜',
        disabled: false,
      },
      {
        text: '百货',
        disabled: false,
      },
      {
        text: '电器',
        disabled: false,
      },
    ],
    tabsHeightLight: {
      show: true,
      color: '#fff1e9'
    },
    goodsList: [],
    searchVisible: true,
    isGettingGoods: true,
  },

  async onLoad() {
    const goods = await getGoods()
    this.setData({
      goodsList: goods,
      isGettingGoods: false,
    })
   
  },

  onReady() {

  },

  onShow() {

  },

  onHide() {

  },

  onUnload() {

  },

  onPageScroll(e) {
    if (e.scrollTop >= 47) {
      this.setData({ searchVisible: false })
    } else {
      this.setData({ searchVisible: true })
    }
  },

  onPullDownRefresh() {

  },

  onReachBottom() {

  },

  onShareAppMessage() {

  }
})