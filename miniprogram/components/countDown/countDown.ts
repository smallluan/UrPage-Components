Component({

  properties: {
    hour: {
      type: Number,
      value: 2,
    },
    minute: {
      type: Number,
      value: 0
    }, 
    second: {
      type: Number,
      value: 5
    },
    theme: {
      type: String,
      value: 'inline', // inline | 
    }
  },

  data: {

  },

  lifetimes: {
    ready () {
      this.countDown()
    }
  },

  methods: {
    countDown() {
      let { hour, minute, second } = this.data
      let timer = setInterval(() => {
        if (second !== 0) {
          second -= 1
        } else {
          if (minute !== 0) {
            minute -= 1
            second = 59
          } else {
            if (hour !== 0) {
              hour -= 1
              minute = 59
              second = 59
            } else {
              clearInterval(timer)
            }
          }
        }
        this.setData({ hour, minute, second })
        this.triggerEvent('countDown', {isFinish: (hour + minute + second) === 0, hour, minute, second})
      }, 1000)
    }
  }
})
