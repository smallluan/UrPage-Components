Page({

  data: {
    title: {
      text: "collapse 折叠面板",
      fontWeight: '700',
      fontSize: '32rpx',
      color: '#0052d9'
    },
    text: '君不见,黄河之水天上来,奔流到海不复回;君不见,高堂明镜悲白发,朝如青丝暮成雪。人生得意须尽欢，莫使金樽空对月；天生我才必有用，千金散尽还复来。烹羊宰牛且为乐，会须一饮三百杯。岑夫子、丹丘生，将进酒，杯莫停。',
    cellList: [
      {
        title: '面板一',
        borderBottom: true,
        bg: 'white',
      },
      {
        title: '面板二',
        bg: 'white',
      },
      {
        title: '面板三',
        borderBottom: true,
        bg: 'white',
      },
    ],
    cell_1:  {
      title: '基础面板',
      borderBottom: true,
      bg: 'white',
    },
    cell_2:  {
      title: '向上打开',
      borderBottom: true,
      bg: 'white',
    },
    cell_3:  {
      title: '初始高度',
      borderBottom: true,
      bg: 'white',
    },
    cell_4:  {
      leftIcon:'app',
      title: '图标面板',
      borderBottom: true,
      bg: 'white',
    },
    cell_5:  {
      leftIcon:'app',
      title: '带描述面板',
      borderBottom: true,
      bg: 'white',
      description: '这里是描述信息'
    },
  },
})