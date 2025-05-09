// 选项卡列表
export const tabs = () => {
  
  return [
    {
      text: '基础式',
      icon: '',
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
      text: '组合式',
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

// 基础式单元格类型
export const getBasicCellListCates = () => {
  return [{
      title: '基础组件',
      borderBottom: true,
      color: '#0052d9',
      bg: 'white',
    },
    {
      title: '引导与提示',
      borderBottom: true,
      color: '#0052d9',
      bg: 'white',
    },
    {
      title: '定位与导航',
      borderBottom: true,
      color: '#0052d9',
      bg: 'white',
    },
    {
      title: '操作与交互',
      borderBottom: true,
      color: '#0052d9',
      bg: 'white',
    },
    {
      title: '数据采集',
      borderBottom: true,
      color: '#0052d9',
      bg: 'white',
    },
    {
      title: '数据展示',
      borderBottom: true,
      color: '#0052d9',
      bg: 'white',
    },
  ]
}

// 基础式单元格列表
export const getEachBasicList = () => {
  return [
    [{
        title: 'Button 按钮',
        url: '/pages/button/button',
        label: 'Update'
      },
      {
        title: 'Link 链接',
        url: '/pages/link/link',
        label: 'Update'
      },
      {
        title: 'Color 颜色指引',
        url: '/pages/color/color',
      },
      {
        title: 'Mask 遮罩层',
        url: '/pages/mask/mask',
      },
      {
        title: 'Loading 加载',
        url: '/pages/loading/loading',
      }
    ],
    [{
        title: 'Guide 用户引导',
        url: '/pages/guide/guide',
        label: 'New'
      },
      {
        title: 'Code 代码区域',
        url: '/pages/codes/codes',
        label: 'New'
      },
      {
        title: 'Message 轻提示',
        url: '/pages/message/message',
      },
    ],
    [{
        title: 'Tabs 选项卡',
        url: '/pages/tabs/tabs',
      },
      {
        title: 'TabBar 底部导航栏',
        url: '/pages/tabbar/tabbar',
      },
      {
        title: 'Navbar 顶部导航栏',
        url: '/pages/navbar/navbar'
      },
      {
        title: 'Sticky 吸顶',
        url: '/pages/sticky/sticky',
      },
      {
        title: 'ScollTop 回顶',
        url: '/pages/scrollTop/scrollTop',
      },
      {
        title: 'Fab 悬浮按钮',
        url: '/pages/fab/fab',
      },
    ],
    [{
        title: 'Module 模态窗口',
        url: '/pages/module/module',
      },
      {
        title: 'dropDownMenu 下拉菜单',
        url: '/pages/dropDownMenu/dropDownMenu',
        label: 'New'
      },
      {
        title: 'Cell 单元格',
        url: '/pages/cell/cell',
        label: '滑动单元格'
      },
      {
        title: 'Popup 弹出层',
        url: '/pages/popup/popup',
      },
      {
        title: 'Actions 动作面板',
        url: '/pages/action/action',
      },
    ],
    [{
        title: 'Switch 开关',
        url: '/pages/switch/switch',
      },
      {
        title: 'Stepper 步进器',
        url: '/pages/stepper/stepper',
      },
      {
        title: 'Input 输入框',
        url: '/pages/input/input',
      },
      {
        title: 'TextArea 文本区域',
        url: '/pages/textArea/textArea',
      },
      {
        title: 'Search 搜索框',
        url: '/pages/search/search',
      },
      {
        title: 'Rate 评分',
        url: '/pages/rate/rate',
      },
      {
        title: 'Check 选择框',
        url: '/pages/check/check',
      },
      {
        title: 'Slider 滑动选择器',
        url: '/pages/slider/slider',
      },
    ],
    [{
        title: 'lazyImage 懒加载图片',
        url: '/pages/lazyimage/lazyimage',
        label: 'New'
      },
      {
        title: 'Collaspse 折叠面板',
        url: '/pages/collapse/collapse',
        label: 'update'
      },
      {
        title: 'pda 页面数据解析',
        url: '/pages/pda/pda',
        label: 'New'
      },
      {
        title: 'Progress 进度条',
        url: '/pages/progress/progress',
      },
      {
        title: 'timeLine 时间轴',
        url: '/pages/timeLine/timeLine',
        label: 'New'
      },
      {
        title: 'countDown 倒计时',
        url: '/pages/countDown/countDown',
        label: 'New'
      },
      {
        title: 'Footer 页脚',
        url: '/pages/footer/footer',
      },
      {
        title: 'Badge 徽标',
        url: '/pages/badge/badge',
        label: 'New'
      },
      {
        title: 'Skeleton 骨架屏',
        url: '/pages/skeleton/skeleton',
      },
    ],
  ]
}

// 组合式单元格类型
export const getCombCellListCates = () => {
  return [
    {
      title: '媒体信息',
      borderBottom: true,
      color: '#0052d9',
      bg: 'white',
    },
    {
      title: '表单信息',
      borderBottom: true,
      color: '#0052d9',
      bg: 'white',
    },
  ]
}

// 组合式单元格列表
export const getEachCombList = () => {
  return [
    [{
        title: 'Image 图片选择',
        url: '/pages/combComponents/imageChooser/imageChooser',
        label: 'v 2.0.0'
      },
      {
        title: 'File 文件选择',
        url: '',
        label: 'v 2.0.0'
      },
    ],
    [
    ],
  ]
}

// 获取功能单元格类型
export const getFuncCellListCates = () => {
  return [
    {
      title: '内容类',
      borderBottom: true,
      color: '#0052d9',
      bg: 'white',
    }
  ]
}

export const getEachFuncList = () => {
  return [
    [
      {
        title: '随机生成',
        url: '/pages/funcs/random/random',
        label: 'New'
      }
    ],
  ]
}