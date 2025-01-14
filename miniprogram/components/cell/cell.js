import { _style, _classes } from '../utils/common'

Component({

  options: ({
    multipleSlots: true,
  }),

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
      value: false
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
    classes: '',
    styles: '',
  },

  lifetimes: {
    attached() {
      this.setData({
        classes:  _classes(this.properties, []),
        styles: _style(this.properties, [])
      })
    }
  },
})
