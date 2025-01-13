Component({

  externalClasses: ['lazy-image'],

  properties: {
    scrollTop: {
      type: Number,
      value: 0
    },
    src: {
      type: String,
      value: ''
    },
    lazy: {
      type: Boolean,
      value: true
    }, 
    bottom: {
      type: Number,
      value: 300
    }
  },

  data: {
    _src: '',
    show: false
  },

  observers: {
    "scrollTop" : function () {
      if (!this.data.lazy || this.data.show) return 
      if (this.data.scrollTop + this.data.sreenHeight + this.data.bottom>= this.data.top) {
        this.showImage()
      }
    }
  },

  lifetimes: {
    // 使用发布-订阅模式实现图片懒加载
    attached() {
      if (this.data.lazy) {
        let parent = this.selectOwnerComponent()
        while (!parent.onLoad && !parent.onReady && !parent.onShow) {
          parent = parent.selectOwnerComponent()
        }
        this.setData({ parent: parent })
        let that = this
        // 定义时使用箭头函数会丢失 this 
        parent.__initLazyImage__ = function() {
          if (!this.data.__thatList__) {
            this.setData({ __thatList__: [] })
          } else {
            let flag = false
            this.data.__thatList__.forEach((item) => {
              if (item.__wxExparserNodeId__ === that.__wxExparserNodeId__ && !that.data.show) {
                flag = true
              }
            })
            if (!flag) {
              this.data.__thatList__.push(that)
              this.setData({ __thatList__: this.data.__thatList__})
            }
          }
        }
        parent.__initLazyImage__()
        // 注意，原页面必须定义 onPageScroll 和 _onPageScroll 函数
        parent.onPageScroll = (e) => {
          parent.data.__thatList__.forEach(item => item.setData({ scrollTop:  e.scrollTop }))
          // 在原页面需要用 _onPageScroll 代替原来的 onPageScroll
          parent._onPageScroll(e)
        }
        const img = this.createSelectorQuery()
        img.select('#img').boundingClientRect(rect => {
          const sreenHeight = wx.getSystemInfoSync().screenHeight
          // 如果图片本来就在可视区域，直接显示图片
          if (sreenHeight + this.data.bottom >= rect.top) {
            this.showImage()
          } else {
            this.setData({
              top: rect.top,
              sreenHeight: sreenHeight
            })
          }
        }).exec()
      } else {
        this.setData({ _src: this.data.src })
      }
    },
  },

  methods: {
    showImage() {
      this.triggerEvent('imgShow', { src: this.data.src })
      this.setData({ 
        _src: this.data.src,
        lazy: false
      })
      let that = this
      this.data.parent.__removeLazyImageObserver__ = function() {
        let { __thatList__ } = this.data
        __thatList__ = __thatList__.filter(item => item.__wxExparserNodeId__ !== that.__wxExparserNodeId__)
        this.setData({ __thatList__ })
      }
      this.data.parent.__removeLazyImageObserver__()
      this.setData({ show: false, parent: null })
    }
  }
})