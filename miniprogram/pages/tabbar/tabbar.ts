import { tabbarList } from '../../store/sys'
Page({

  data: {
    title: {
      text: "Tabbar 底部导航",
      fontWeight: '700',
      fontSize: '34rpx',
      color: '#0052d9'
    },
    tabbarList_1: [
      {
        name: '组件',
        icon: 'home',
        url: '/pages/index/index',
      },
      {
        name: '页面',
        icon: 'component-layout',
        url: '',
      },
      {
        name: '开发者',
        icon: 'personal-information',
        url: '',
      },
    ],
    tabbarList_2: [
      {
        name: '组件',
        icon: 'home',
        url: '/pages/index/index',
        badge: {
          bg: '#0052d9',
          color: 'white',
          text: 'New',
          shape: 'bubble',
          size: 'small'
        }
      },
      {
        name: '页面',
        icon: 'component-layout',
        url: '',
        badge: {
          bg: '#0052d9',
          color: 'white',
          text: 'New',
          shape: 'round',
          size: 'small'
        }
      },
      {
        name: '开发者',
        icon: 'personal-information',
        url: '',
        badge: {
          bg: '#0052d9',
          color: 'white',
          text: 'New',
          shape: 'dot',
          size: 'small'
        }
      },
    ],
    tabbarList_3: [
      {
        name: '组件',
        icon: 'home',
        url: '/pages/index/index',
        badge: {
          bg: '#2ba471',
          color: 'white',
          text: 'New',
          shape: 'bubble',
          size: 'small'
        }
      },
      {
        name: '页面',
        icon: 'component-layout',
        url: '',
      },
      {
        name: '开发者',
        icon: 'personal-information',
        url: '',
      },
    ],
  },

})