Page({

  data: {
    title: {
      text: "dropDownMenu 下拉菜单",
      fontWeight: '700',
      fontSize: '30rpx',
      color: '#0052d9'
    },
    list_1: [
      {
        tipText: '选项一',
        options: [
          {isSelect: false, disabled: false, text: '选项1'},
          {isSelect: false, disabled: false, text: '选项2'}
        ],
        asyncGet: false,
        id: 0
      },     
    ],
    list_2: [
      {
        tipText: '选项一',
        options: [
          {isSelect: false, disabled: false, text: '选项1'},
          {isSelect: false, disabled: false, text: '选项2'}
        ],
        asyncGet: false,
        id: 0
      },     
      {
        tipText: '选项二',
        options: [
          {isSelect: false, disabled: false, text: '选项1'},
          {isSelect: false, disabled: false, text: '选项2'}
        ],
        asyncGet: false,
        id: 1
      },         
    ],
    list_3: [
      {
        tipText: '选项一',
        options: [
          {isSelect: false, disabled: false, text: '选项1'},
          {isSelect: false, disabled: false, text: '选项2'}
        ],
        asyncGet: false,
        id: 0
      },     
      {
        tipText: '选项二',
        options: [
          {isSelect: false, disabled: false, text: '选项1'},
          {isSelect: false, disabled: false, text: '选项2'}
        ],
        asyncGet: false,
        id: 1
      },         
      {
        tipText: '选项三',
        options: [
          {isSelect: false, disabled: false, text: '选项1'},
          {isSelect: false, disabled: false, text: '选项2'}
        ],
        asyncGet: false,
        id: 2
      },         
    ]
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