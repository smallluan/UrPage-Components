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
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})