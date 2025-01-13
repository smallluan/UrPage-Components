Component({

  properties: {

  },

  data: {
    show: false
  },

  lifetimes: {
    attached() {
      const parent = this.selectOwnerComponent()
      this.setData({
        pageData: this.analyes(parent.data)
      })
      this.setData({
        show: true
      })
    }
  },

  methods: {
    analyes(data) {
      const res = []
      for (let key in data) {
        if (typeof data[key] === 'number') {
          res.push({ name: key, type: 'number', value: data[key], children: [] })
        } else if (typeof data[key] === 'string') {
          res.push({ name: key, type: 'string', value: data[key], children: [] })
        } else if (typeof data[key] === 'boolean') {
          res.push({ name: key, type: 'boolean', value: data[key], children: [] })
        } else if (data[key] instanceof Function) {
          res.push({ name: key, type: 'function', value: data[key], children: [] })
        } else if (data[key] instanceof Array ) {
          res.push({ name: key, type: 'array', value: data[key], children: this.analyes(data[key]) })
        } else if (typeof data[key] === 'object') {
          res.push({ name: key, type: 'object', value: data[key], children: this.analyes(data[key]) })
        } else {
          console.log(key, data[key], '其他')
        }
      }
      return res
    }
  }
})
