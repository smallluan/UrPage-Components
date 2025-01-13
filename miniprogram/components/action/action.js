Component({
  
  options: ({
    multipleSlots: true,
  }),

  properties: {
    show: {
      type: Boolean,
      value: true
    },
    btns: {
      type: Array,
      value: []
    },
    title: {
      type: String,
      value: '标题文字'
    },
    type: {
      type: String,
      value: 'btn' // slot | btn
    },
  },

  lifetimes: {
    ready () {
      // 获取popup
      this.setData({
        popup: this.selectComponent('#popup')
      })
    }
  },

  data: {

  },

  methods: {
    // 点击某个按键
    btnClick (e) {
      const id = e.currentTarget.dataset.id
      console.log(id)
      const target = this.data.btns.find((item, index) => index === id)
      this.triggerEvent('btnTap', {id: id,target: target})
      this.data.popup.hide()
    },

    // 确认事件
    confirm () {
      this.triggerEvent('btnTap', {id: -1, target: {content: '确认'}})
      this.data.popup.hide()
    },

    // 取消事件
    concel () {
      this.triggerEvent('btnTap', {id: -1, target: {content: '取消'}})
      this.data.popup.hide()
    }
  }
})
