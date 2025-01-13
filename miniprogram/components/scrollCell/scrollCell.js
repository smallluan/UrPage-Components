Component({

  properties: {
    leftIcon: {
      type: String,
      value: ''
    },
    title: {
      type: String,
      value: '栏目标题'
    },
    underLine: {
      type: Boolean,
      value: true
    },
    description: {
      type: String,
      value: ''
    },
    color: {
      type: String,
      value: 'black'
    },
    bg: {
      type: String,
      value: 'white'
    }
  },

  data: {
    startX: 0,
    endX: 0,
    offset: 0,
    _offset: 0,
    isEnd: true,
    isFold: true
  },

  lifetimes: {
    attached() {
      const com = this.createSelectorQuery()
      com.select('#options').boundingClientRect((rect) => {
        this.setData({ maxScrollDistance: rect.width * 1.2 })
      }).exec()
    }
  },

  methods: {
    touchstart(e) {
      const { touches } = e
      this.setData({ 
        startX:  touches[0].clientX,
        isEnd: false
      })
    },
    touchmove(e) {
      const { touches } = e
      const { maxScrollDistance,  _offset, startX } = this.data
      let offset = touches[0].clientX - (startX - _offset)
      offset = offset > 0 ? 0 : offset
      offset = offset < -maxScrollDistance ? -maxScrollDistance : offset
      this.setData({ 
        endX:  touches[0].clientX,
        offset: offset
      })
    },
    touchend() {
      const { offset, maxScrollDistance } = this.data
      if (offset <= -maxScrollDistance / 2) {
        this.setData({
          offset: -maxScrollDistance,
          _offset: -maxScrollDistance,
          isEnd: true,
          isFold: false
        })
      } 
      else if (offset >= -maxScrollDistance / 2) {
        this.setData({
          offset: 0,
          _offset: 0,
          isEnd: true,
          isFold: true
        })
      }
    }
  }
})
