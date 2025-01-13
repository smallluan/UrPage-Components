const goodsList = [
  {
    imgUrl: 'https://img1.360buyimg.com/n6/jfs/t1/108053/1/52527/54477/66f28f3bFd5d98198/42914b4179acbc40.jpg',
    butie: '秒杀',
    pinpai: '品牌',
    zhijiang: '30',
    detail: 'OlarHike按摩兜dow抱枕女朋友元旦跨年新年礼物送女生生日礼物女实用高级',
    newPrice: 87.5,
    oldPrice: 40.6,
    saled: 2819
  },
  {
    imgUrl: 'https://img1.360buyimg.com/n6/jfs/t1/264373/39/3398/138023/676cbca3Fa4acb191/c1c20f8abf5f30d5.jpg',
    butie: '官方补贴',
    zhijiang: '10',
    detail: '马克图布小王子书本灯礼盒送女生生日礼物男女友闺蜜氛围感夜灯摆件圣诞节',
    newPrice: 10.4,
    oldPrice: 20.6,
    saled: 4821
  },
  {
    imgUrl: 'https://img1.360buyimg.com/n6/jfs/t1/258241/12/7519/214962/6777d927Fed130797/cc3d71596e0aa510.jpg',
    butie: '官方补贴',
    pinpai: '品牌',
    zhijiang: '30',
    detail: '海蓝之谜（LA MER）精萃水乳套装(精萃水+精萃乳)护肤品化妆品礼盒新年生日',
    newPrice: 10.4,
    oldPrice: 20.6,
    saled: 2819
  },
  {
    imgUrl: 'https://img1.360buyimg.com/n6/jfs/t1/264810/34/6947/188742/67764515Fe1ae71f2/8cf48d5a0a300cfb.jpg',
    detail: '玫瑰花礼盒心动项链套装',
    newPrice: 99.9,
    saled: 103
  },
  {
    imgUrl: 'https://img1.360buyimg.com/n6/jfs/t1/257823/2/3981/116769/676e0b78F23430e92/7354f4468503eb59.jpg',
    butie: '秒杀',
    pinpai: '品牌',
    zhijiang: '30',
    detail: 'MITHAOL KUSC100%澳洲羊毛围巾女2024秋冬',
    newPrice: 10.4,
    oldPrice: 20.6,
    saled: 2819
  },
  {
    imgUrl: 'https://img1.360buyimg.com/n6/jfs/t1/206668/19/39293/144007/65fa940cFba161e90/ff6b9f7f830a7fa1.jpg',
    butie: '官方补贴',
    pinpai: '品牌',
    zhijiang: '30',
    detail: '夕风生日礼物女生新年送女朋友精致高级感小众闺蜜老婆结婚纪念日实用',
    newPrice: 10.4,
    oldPrice: 20.6,
    saled: 2819
  },
]

export const getGoods = () => {
  return new Promise((resolve, reject) => {
    const timeOut = (Math.random() + 0.5) * 1000
    setTimeout(() => {
     resolve(goodsList)
    }, timeOut)
  })
}
