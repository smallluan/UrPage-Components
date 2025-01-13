Page({
  data: {
    title: {
      text: "Progress 进度条",
      fontWeight: '700',
      fontSize: '38rpx',
      color: '#0052d9'
    },
    progress: 0
  },
 
  onLoad() {
    setTimeout(() => {
      let timer = setInterval(() => {
        this.setData({
          progress: this.data.progress + 1
        })
        if (this.data.progress === 75) {
          clearInterval(timer)
        }
      }, 20)
    }, 800)
  }
})