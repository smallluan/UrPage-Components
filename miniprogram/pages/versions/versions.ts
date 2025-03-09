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
        title: "v 2.1.1",
        time: '2025-03-09 23:34:20',
        detail: '更新 collapse 折叠面板，新增内容类 -> 单次展开',
      },
      {
        title: "v 2.1.0",
        time: '2025-01-30 19:10:34',
        detail: '搭建 urpage 小程序后端，基于 express 框架。由于本程序为演示性程序，故后端目前只负责静态资源托管',
        icon: 'check',
        label: 'backend'
      },
      {
        title: "v 2.0.0",
        time: '2025-01-29 15:30:10',
        label: 'new version',
        detail: '组件新增分类：组合式组件和功能组件 \n 修改了折叠面板 collapseBox 组件，支持动态获取被折叠部分的高度 \n 由于组件分类被修改，搜索组件页面逻辑更新 \n 功能组件更新，新增 random 随机， 访问路径: 首页 -> 功能 -> 内容类 -> 随机生成 \n 此外: \n 修改了 code 代码组件，添加了 js 代码解析的关键词',
      },
      {
        title: "v 1.1.2",
        time: '2025-01-28 12:513:43',
        detail: '新增版本指引页面：开发者 -> 版本指引 \n “开发者” 页面布局更新',
      },
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
        label: 'update',
        img: 'http://39.105.227.198:3000/assests/images/versions/v1_1_0.png',
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
        img: 'http://39.105.227.198:3000/assests/images/versions/v1_0_0.png',
        label: 'init'
      },
    ],
  },

  // async onLoad () {
  //   request('/version', 'GET')
  //   .then(res => {
  //     this.setData({ 
  //       versions: res.data.versions,
  //       loading: false
  //     })
  //   })
  //   .catch(err => {
  //     console.log(err)
  //     wx.showToast({
  //       title: '服务器错误!',
  //       icon: 'none'
  //     })
  //   })
  // }
})
