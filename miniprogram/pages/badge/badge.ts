import { tabs } from '../index/store'

Page({

  data: {
    title: {
      text: "Badge 徽标",
      fontWeight: '700',
      fontSize: '38rpx',
      color: '#0052d9'
    },
    tabs: tabs(),
    tabsHeightLight: {
      show: true,
      color: 'white'
    },
    codejs: `
    badge: {
      bg: '#0052d9',
      color: 'white',
      text: 'New',
      shape: 'bubble',
      size: 'small'
    }
    `,
    codehtml: `
    <m_button 
      content="确认" 
      theme="primary-light"
     >
      <m_badge 
        slot="badge" 
        text="New" 
       />
    </m_button>
    `
  },
})