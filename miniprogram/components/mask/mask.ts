Component({
  properties: {
    show: {
      type: Boolean,
      value: true
    },
    hideable: {
      type: Boolean,
      value: true
    },
    zIndex: {
      type: Number,
      value: 9999
    }
  },

  observers: {
    'show':function() {
      this.triggerEvent('maskShow', this.data.show)
    }
  },

  methods: {
    hide() {
      if(this.data.hideable) {
        this.setData({show: false})
      }
    }
  }
})
