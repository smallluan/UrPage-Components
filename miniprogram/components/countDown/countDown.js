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
    msecond: {
      type: Number,
      value: 99
    },
    theme: {
      type: String,
      value: 'inline', // inline | 
    }
  },

  data: {
    timer: null
  },

  lifetimes: {
    ready () {
      this.countDown()
    },
    detached () {
      clearInterval(this.data.timer)
      this.data.timer = null
    }
  },

  methods: {
    countDown() {
      let { hour, minute, second, msecond, timer } = this.data
      timer = setInterval(() => {
        let f1 = false, f2 = false, f3 = false, f4 = false
        if (msecond !== 0) {
          msecond -= 1
          f4 = true
        }
        else {
          if (second !== 0) {
            second -= 1
            msecond = 99
            f3= true
          } else {
            if (minute !== 0) {
              minute -= 1
              second = 59
              msecond = 99
              f2 = true
            } else {
              if (hour !== 0) {
                hour -= 1
                minute = 59
                second = 59
                msecond = 99
                f1 = true
              } else {
                clearInterval(timer)
              }
            }
          }
        }
        if (f1) {
          this.setData({ hour, minute, second, msecond })
        } else if (f2) {
          this.setData({ minute, second, msecond })
        } else if (f3) {
          this.setData({ second, msecond })
        } else {
          this.setData({ msecond })
        }
      }, 10)
    }
  }
})
