Component({

  options: ({
    multipleSlots: true,
  }),

  properties: {
    show: {
      type: Boolean,
      value: false
    },
    direction: {
      type: String,
      value: 'bottom'  // bottom | top | right | left
    },
    height: {
      type: String,
      value: '50vh'
    },
    width: {
      type: String,
      value: '50%'
    }
  },

  data: {
    directions: ['bottom', 'top', 'right', 'left'],
    classes: [],
  },

  lifetimes: {
    attached() {
      this.set()
    }
  },

  observers: {
    'direction':function() {
      this.set()
    }
  },

  methods: {

    set () {
      let {classes, direction} = this.data;
      [...classes] = [`popup-box-${direction}`, `show-${direction}`, `hide-${direction}`]
      this.setData({classes})
    },

    hide () {
      this.setData({
        show: false,
      })
    },

    observeMask (e) {
      this.setData({
        show: e.detail,
      }) 
    }
  }
})
