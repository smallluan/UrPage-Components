export const tabbarList = () => {
  return [
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
    // {
    //   name: '页面',
    //   icon: 'component-layout',
    //   url: '/pages/somePages/somePages',
    // },
    {
      name: '开发者',
      icon: 'personal-information',
      url: '/pages/about/about',
    },
  ]
}