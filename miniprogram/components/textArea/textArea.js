Component({

  properties: {
    text: {
      type: String,
      value: '',
      discription: '文字内容'
    },
    placeholder: {
      type: String,
      value: "请输入文字",
      discription: '占位符'
    },
    title: {
      type: String,
      value: '',
      discription: '标题'
    },  
    autoHeight: {
      type: Boolean,
      value: false,
      discription: '自动高度'
    },
    maxlength: {
      type: Number,
      value: -1,
      discription: '字符最大长度'
    },
    clearable: {
      type: Boolean,
      value: false,
      discription: '一键清除浮标'
    },
    theme: {
      type: String,
      value: 'normal',  // normal | card
      discription: '风格'
    },
    border: {
      type: Boolean,
      value: false,
      discription: '输入框边框'
    },
    disabled: {
      type: Boolean,
      value: false
    }
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
