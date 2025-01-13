
Component({

  properties: {
    // 提示文字
    tip: {
      type: String,
      value: ''
    },
    // 图标
    icon: {
      type: String,
      value: ''
    },
    // 占位符
    placeholder: {
      type: String,
      value: '请输入文字',
    },
    // 输入框类型
    type: {
      type: String,
      value: 'text'  // text | number | password | idcard | digit
    },
    // 最长长度
    maxlength: {
      type: Number,
      value: -1
    },
    // 描述
    discription: {
      type: String,
      value: ''
    },
    // 禁用
    disabled: {
      type: Boolean,
      value: false
    },
    // 删除图标
    clearable: {
      type: Boolean,
      value: false
    },
    // color
    color: {
      type: String,
      value: 'black'
    },
    //背景颜色
    bg: {
      type: String,
      value: 'white'
    },
    // 内容
    content: {
      type: String,
      value: ''
    }
  },

  data: {

  },

  methods: {
    getContent(e: { data: { value: string }, [key: string]: any }) {
      let text = e.detail.value;
      this.setData({
        content: text
      });
      this.triggerEvent('getContent', this.data.content);
    },

    clear() {
      this.setData({
        content: ''
      })
    }
  }
})
