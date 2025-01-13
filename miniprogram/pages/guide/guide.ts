import { getGoods } from '../../store/goods'
Page({

  data: {
    title: {
      text: "Guide 用户引导",
      fontWeight: '700',
      fontSize: '38rpx',
      color: '#0052d9'
    },
    components: [
      {name: 'navbar', title: '跳转栏', content: '此处为自定义跳转栏，您可以在此处输入标题或者插入其他元素', offset: {mtop: '120%', mbottom: '0rpx', mleft: '50%', mright: '0rpx'}},
      {name: 'search', title: '搜索框', content: '这是一个搜索框，在此处您可以搜索想要的商品', offset: {mtop: '120%', mbottom: '0rpx', mleft: '50%', mright: '0rpx'}},
      {name: 'tabs', title: '切换栏', content: '在此处那你可以切换商品的种类', offset: {mtop: '120%', mbottom: '0rpx',mleft: '50%',mright: '0rpx'}},
      {name: 'goods0', title: '商品信息', content: '这里是商品信息，点击进入详情页面', offset: {mtop: '105%', mbottom: '0rpx',mleft: '100%',mright: '0rpx'}},
      {name: 'button', title: '按钮', content: '点击按钮可以重新体验用户引导', offset: {mtop: '-350rpx',mleft: '50%',mright: '0rpx'}},
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
    goodsList: [],
    startGuide: false,
    wxml: `
    <m_guide 
      bindfinish="guideFinish" 
      components="{{ components }}" 
      startGuide="{{ startGuide }}"
      wx:if="{{ startGuide }}" 
     />
     <view id="guide_1" > 目标元素1 </view>
     <view id="guide_2" > 目标元素2 </view>
    `,
    js: `
  // 被指引元素
  components = [
    { name: 'guide_1', others: {...} },
    { name: 'guide_2', others: {...} },
  ],
  // 注意，该变量务必在页面元素全部渲染完成后设置为 true 。
  // 当页面渲染有异步情况时请尤为注意 。
  startGuide = true
  // 引导结束后隐藏该组件
  guideFinish () {
    this.setData({ startGuide: false })
  },
    `
  },

  async onLoad () {
    let res = await getGoods()
    res = res.slice(0, 2)
    this.setData({ goodsList:  res})
    this.setData({ startGuide: true })
  },

  _onPageScroll(e) {
    
  },

  start () {
    this.setData({ startGuide: true })
  },

  guideFinish () {
    this.setData({ startGuide: false })
  },

  onReady() {
  },

  onShow() {

  },

  onHide() {

  },

  onUnload() {

  },

  onPullDownRefresh() {

  },

  onReachBottom() {

  },

  onShareAppMessage() {

  }
})