Component({

  properties: {
    events: {
      type: Array,
      value: [
        {
          title: "已签收",
          time: '2025-01-27 22:42',
          detail: '您已在北京化工大学东校区菜鸟驿站完成取件，感谢使用菜鸟驿站，期待再次为您服务。',
          icon: 'check',
          img: 'https://tse4-mm.cn.bing.net/th/id/OIP-C.X_J8jL0bSPQ_jgOrdIbsgQHaEK?rs=1&pid=ImgDetMain',
          label: '已确认收货'
        },
        {
          title: "待取件",
          time: '2025-01-26 10:05',
          detail: '您的快递已又北京化工大学东校区菜鸟驿站代收，请凭取件码及时取件。查询方式：短信/物流详情页。'
        },
        {
          title: "已揽收",
          time: '2025-01-27 22:42',
          detail: '商品已经揽收'
        },
        {
          title: "已下单",
          time: '2025-01-27 22:42',
          detail: '商品已经下单',
          icon: 'check',
        },
      ]
    }
  },

  data: {

  },

  methods: {

  }
})
