Component({

  properties: {
    placeholder: {
      type: String,
      value: '请输入搜索内容'
    },
    icon: {
      type: String,
      value: ''
    },
    shape: {
      type: String,
      value: 'rect'  // rect | round
    },
    content: {
      type: String,
      value: ''
    },
    btn: {
      type: Boolean,
      value: false
    },
    clearable: {
      type: Boolean,
      value: false
    },
    maxLength: {
      type: Number,
      value: 10
    },
    disabled: {
      type: Boolean,
      value: false
    },
  },

  data: {

  },

  methods: {
    getContent(e) {
      this.setData({
        content: e.detail.value
      })
    },
    clear() {
      this.setData({
        content: ''
      })
    }
  }
})
