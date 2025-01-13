import { _style, _classes } from '../utils/common'

Component({

  properties: {
    text: {
      type: String,
      value: ''
    },
    bg: {
      type: String,
      value: '#0052d9'
    },
    color: {
      type: String,
      value: 'white'
    },
    shape: {
      type: String, 
      value: 'bubble', // dot | round | bubble
    },
    size: {
      type: String,
      value: 'normal', // normal | small | large
    }
  },

  data: { 
    styles: '',
    classes: ''
  },

  lifetimes: {
    attached () {
      const { shape, text } = this.data
      if (text === '') {
        this.setData({ shape: 'dot' })
      }
      else if (shape === 'dot') {
        this.setData({ text: '' })
      }
      this.setData({
        styles: _style(this.data, []),
        classes: _classes(this.data, [])
      })
    }
  },

  methods: {

  }
})
