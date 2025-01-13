Component({

  properties: {
    // 文字
    text: {
      type: String,
      value: '',
    },
    // 占位符
    placeholder: {
      type: String,
      value: "请输入文字",
    },
    // 标题
    title: {
      type: String,
      value: '',
    },  
    // 自动高度
    autoHeight: {
      type: Boolean,
      value: false,
    },
    // 字符最大长度
    maxlength: {
      type: Number,
      value: -1,
    },
    // 一键清除浮标
    clearable: {
      type: Boolean,
      value: false,
    },
    // 风格
    theme: {
      type: String,
      value: 'normal'  // normal | card
    },
    // 输入框边框
    border: {
      type: Boolean,
      value: false,
    }
  },

  data: {
    timer: null
  },

  methods: {
    // 获取文字
    getText(e) {
      this.setData({
        text: e.detail.value
      })
      this.triggerEvent('textareaInput', this.data.text)
    },

    // 清除文字
    clear() {
      this.setData({
        text: ''
      })
    },
  }
})
