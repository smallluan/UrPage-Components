Page({
  data: {
    title: {
      text: "pageDataAnalyes 页面数据分析",
      fontWeight: '700',
      fontSize: '26rpx',
      color: '#0052d9'
    },
    testNumber: 100,
    testString: '测试字符串',
    code: `
    <m_navbar bg="#f2f3ff" title="{{ title }}" />
    <view class="_page" >
      <view class="main-title" > 页面数据分析 </view>
      <view class="disc" > 在本页面定义了以下变量，该组件会自动解析本页面的数据及其关系，并进行如下显示，具体请点击下面的视图。 </view>
      <m_pda />
      <view class="disc" > 您无需向该组件传递任何数据，只需像下面代码中引入到目标页面，页面的数据将被自动解析，以下是该页面的 wxml 代码： </view>
      <m_code code="{{ code }}"  />
      <view class="disc" > 请注意，由于本组件涉及到组件自身的递归调用，如果数据深度过大将导致加载缓慢。 </view>
    </view>
    `
  }
})