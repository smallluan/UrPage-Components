import { tabbarList } from '../../store/sys'
Page({

  data: {
    title: {
      text: "关于开发者",
      fontWeight: '700',
      fontSize: '38rpx',
      color: '#0052d9'
    },
    tabbarList: tabbarList(),
  },
})
