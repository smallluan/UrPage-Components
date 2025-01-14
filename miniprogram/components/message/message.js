import { getNavBarInfos } from "../utils/sys"
Component({

  properties: {
    // 内容
    content:{
      type: String,
      value: '这是一条普通消息' 
    },
    // 类型
    type: {
      type: String,
      value: 'normal'  // normal | success | warning | error
    },
    // 关闭按钮
    btn: {
      type: Boolean,
      value: false
    },
    // 链接
    link: {
      type: String,
      value: ''
    },
    // 持续时间
    duration: {
      type: Number,
      value: 5000    // otherNumber | -1(不能主动消失)
    }
  },

  data: {
    showMsg: true,
    msgType: 'normal',
    timer: null,
    boxClass: 'box',
    map: {
        'success': 'check-circle-filled',
        'normal': 'info-circle-filled',
        'error': 'error-circle-filled',
        'warning': 'error-circle-filled'
    },
  },

  lifetimes: {
    attached() {
      if(this.data.duration != -1) {
        this.data.timer = setTimeout(()=>{
          this.setData({
            boxClass: 'box-out'
          })
          setTimeout(()=>{
            this.setData({
              showMsg: false
            })
            this.triggerEvent('msgClose')
          }, 500)
        }, this.data.duration)
      }
      let navbarInfo = getNavBarInfos();
      this.setData({
        navBarHeight: navbarInfo.navBarHeight,
        linkClass: this.data.link ? 'block' : 'none',
        icon: this.data.map[this.data.type]
      })
    },
  },

  methods: {
    close() {
      clearInterval(this.data.timer);
      this.setData({
        boxClass: 'box-out'
      })
      this.triggerEvent('msgClose')
      setTimeout(()=>{
        this.setData({
          showMsg: false
        })
      }, 500)
    }
  }
})
