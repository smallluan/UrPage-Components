import { _style, _classes } from '../utils/common'

Component({
  options: {
    styleIsolation: 'isolated',
    multipleSlots: true
  },
  
  properties: {
    // 文字内容
    content: {
      type: String,
      value: ''
    },
    // 图标
    icon: {
      type: String,
      value: ''
    },
    // 禁用
    disabled: {
      type: Boolean,
      value: false
    },
    // 加载中
    loading: {
      type: Boolean,
      value: false
    },
    // 尺寸
    size: {
      type: String,
      value: 'normal'
    },
    // 圆角
    shape: {
      type: String,
      value: 'rect' 
    },
    // 文字颜色
    color: {
      type: String,
      value: 'white'
    },
    // 背景颜色
    bg: {
      type: String,
      value: '#0052d9'
    },
    // 风格
    theme: {
      type: String,
      value: 'primary' // success | success-light ... 
    },
  },

  lifetimes: {
    attached() {
      let { content, classes } = this.data
      content === '' && (classes = 'pure-icon ')
      this.setData({
        classes: classes + _classes(this.properties, []),
        styles: _style(this.properties, [])
      })
    }
  },

  data: {
    classes: '',
    styles: ''
  },

  methods: {
    buttonClick(e) {
      const { disabled, loading } = this.data
      if (!disabled && !loading) {
        this.triggerEvent('click', {event: e, componentData: this.data})
      }
    },
    buttonLongPress(e) {
      const { disabled, loading } = this.data
      if (!disabled && !loading) {
        this.triggerEvent('longPress', {event: e, componentData: this.data})
      }
    }
  }
})
