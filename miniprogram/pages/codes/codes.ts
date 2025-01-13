Page({

  data: {
    title: {
      text: "Code 代码区域",
      fontWeight: '700',
      fontSize: '38rpx',
      color: '#0052d9'
    },
    codeJs: `
   // 异步两数相加
    function add (a, b) {
      return new Promise (resolve => {
        const c = a + b
        resolve (c)
      })
    }
   // 调用
    const fun = async () => {
      const res = await add(10, 20)
      console.log(res)
   } 
   fun ()
    `,
    codeHtml: `
    <view wx:key="index" wx:for="{{ item }}" >
      <m_tabs 
        selectedHigthLight="{{ tabsHeightLight }}"
        tabsList="{{ tabs }}" 
        />
    </view>
    `
  },
})