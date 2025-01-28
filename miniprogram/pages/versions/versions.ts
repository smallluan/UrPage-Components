Page({

  data: {
    title: {
      text: "版本指引",
      fontWeight: '700',
      fontSize: '34rpx',
      color: '#0052d9'
    },
    versions: [
      {
        title: "v 1.1.1",
        time: '2025-01-27 23:55:02',
        detail: '进行了一些修改',
      },
      {
        title: "v 1.1.0",
        time: '2025-01-27 23:46:33',
        detail: '新增 Timeline 时间轴组件',
        icon: 'check',
        label: 'update'
      },
      {
        title: "v 1.0.6",
        time: '2025-01-18 11:40:25',
        detail: 'countdown 倒计时组件新增毫秒显示 \n stepper 步进器组件新增步进大小配置物流详情页。'
      },
      {
        title: "v 1.0.5",
        time: '2025-01-16 22:39:13',
        detail: '首页新增跳转至搜素页面入口，新增搜索组件页面'
      },
      {
        title: "v 1.0.4",
        time: '2025-01-15 14:11:52',
        detail: 'code 组件更新， 新增代码语言右上角显示',
      },
      {
        title: "v 1.0.3",
        time: '2025-01-15 00:36:49',
        detail: 'code 组件更新，新增 css 代码高亮显示',
      },
      {
        title: "v 1.0.2",
        time: '2025-01-14 10:07:04',
        detail: '快速开发了 “开发者” 页面，方便查看该项目',
      },
      {
        title: "v 1.0.1",
        time: '2025-01-14 08:41:07',
        detail: '更新了组件之间的引用关系，以便按需引入',
      },
      {
        title: "v 1.0.0",
        time: '2025-01-13 21:23:56',
        detail: '首次上传组件库',
        icon: 'check',
        label: 'init'
      },
    ]
  },

})