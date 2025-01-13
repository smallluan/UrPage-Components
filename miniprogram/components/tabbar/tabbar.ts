Component({

  externalClasses: ['m-tabbar'],

  properties: {
    current: {
      type: Number,
      value: 0
    },
    tabbarList: { 
      type: Array,
      value:[]
    },
    bg: {
      type: String,
      value: '#f2f3ff'
    },
    color: {
      type: String,
      value: '#0052d9'
    },
    shape: {
      type: String,
      value: 'rect'
    },
    mode: {
      type: String,
      value: 'use'  // use | demo
    }
  },

  data: {
    
  },

  methods: {
    switch(e :any) {
      let url = e.currentTarget.dataset.url
      if (this.data.mode === 'use') {
        wx.switchTab({
          url: url,
        })
      } else {
        wx.redirectTo({
          url: url
        })
      }
    }
  }
})
