Component({

  properties: {
    shape: {
      type: String,
      value: 'circle'
    },

    progress: {
      type: Number,
      value: 50
    },

    activeColor: {
      type: Array | String,
      value: '#0052d9'
    },

    defaultColor: {
      type: String,
      value: 'white'
    },

    pannelColor: {
      type: String,
      value: 'white'
    }
  },

  lifetimes: {
    attached () {
     this.init()
    }
  },

  data: {
    style: ''
  },

  observers: {
    'progress': function () {
      this.changeProgress(this.data.progress)
    }
  },

  methods: {
    init () {
      let style = ``
      let { progress, activeColor, defaultColor, pannelColor } = this.data
      progress = progress > 100 ? 100 : Math.floor(progress)
      if (this.data.shape === 'circle') {
        style += `--deg: ${progress * 3.6}deg;`
        style += `--activeColor: ${activeColor};`
        style +=  `--defaultColor: ${defaultColor};`
        style += `--pannelColor: ${pannelColor};`
      } else {
        style += `--len: ${progress}%;`
        style += `--activeColor: ${activeColor};`
        style +=  `--defaultColor: ${defaultColor};`
        style += `--pannelColor: ${pannelColor};`
      }
      this.setData({ style })
    },
    changeProgress (progress) {
      let { style } = this.data
      let styleList = style.split(';')
      const re1 = /^--deg: [0-9]{1,3}deg$/
      const re2 = /^--len: [0-9]{1,3}%$/
      let newList = styleList.map((item) => {
        if (re1.test(item)) {
          
          return `--deg: ${Math.floor(progress * 3.6)}deg`
        } 
        else if (re2.test(item)) {
          return `--len: ${progress}%`
        } else {
          return item
        }
      })
      this.setData({ style: newList.join(';') })
    }
  }
})
