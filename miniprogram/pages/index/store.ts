// 选项卡列表
export const tabs = () => {
  return [
    {
      text: '组件',
      icon: 'app',
      disabled: false,
      badge: {
        bg: '#0052d9',
        color: 'white',
        text: 'New',
        shape: 'bubble',
        size: 'small'
      }
    },
    {
      text: '功能',
      icon: 'setting',
      disabled: false,
    },
    {
      text: '动画',
      icon: 'transform-2',
      disabled: false,
    },
    {
      text: '其他',
      icon: 'more',
      disabled: false,
    },
  ]
}

// 选项卡高亮配置
export const tabsHeightLight = () => {
  return {
    show: true,
    color: '#f2f3ff'
  }
}
