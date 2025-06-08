import Button from '../button/button'

class Fab extends Button {
  constructor() {
    super()
    this.properties = {
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
      },
      isScrollTop: {
        type: Boolean,
        value: false
      }
    }
    this.methods = {
      buttonClick(e) {
        if (this.data.isScrollTop) {
          wx.pageScrollTo({
            duration: 300,
            scrollTop: 0
          })
        }
      }
    }
  }
}

Component(new Fab())

// Component({

//   data: {

//   },

//   methods: {

//   }
// })
