import { _style, _classes } from '../utils/common'

Component({
  options: {
    styleIsolation: 'isolated'
  },

  properties: {
    // 文字
    text: {
      type: String,
      value: "跳转链接"
    },
    // 跳转地址
    url: {
      type: String,
      value: ''
    },
    disabled: {
      type: Boolean,
      value: false,
      discription: '是否禁用'
    },
    // 颜色
    color: {
      type: String,
      value: ''
    },
    //尺寸
    size: {
      type: String,
      value: 'normal'
    },
    // 下划线
    underLine: {
      type: Boolean,
      value: false
    },
    icon: {
      type: Boolean,
      value: true
    },
    // 主题
    theme: {
      type: String,
      value: 'primary'
    }
  },

  data: {
    classes: '',
    styles: ''
  },

  lifetimes: {
    attached(): void {
      this.setData({
        // 因为 underLine 只需要显示在文字上，图标上无需显示
        // 故这里需要先排除掉 underLine 字段
        // 然后在文字 wxml 部分单独加上
        classes: _classes(this.properties, ['underLine', 'disabled']),
        styles: _style(this.properties, ['underLine', 'disabled'])
      })
    }
  },

  methods: {
    // 跳转
    nav(): void {
      const { url, disabled } = this.data
      if (disabled) {
        wx.showToast({ title: '链接被禁用', icon: 'none' })
        return 
      }
      url !== '' && (wx.navigateTo({ url: url }))
    },
  }
})
