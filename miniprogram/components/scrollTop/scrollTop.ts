Component({

  properties: {
    content: {
      type: String,
      value: ''
    },
    icon: {
      type: String,
      value: 'share'
    },
    bg: {
      type: String,
      value: '#0052d9'
    },
    color: {
      type: String,
      value: 'white'
    }
  },

  data: {

  },

  methods: {
    scrollTop() {
      wx.pageScrollTo({
        duration: 300,
        scrollTop: 0
      })
    },
  }
})
