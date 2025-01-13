Component({

  properties: {
    pageData: {
      value: ''
    }
  },

  data: {
    type: '',
    cell: {
    }
  },

  lifetimes: {
    attached() {
      this.setData({
        cell: {
          title:  this.data.pageData.name,
          borderBottom: false,
          description: `${this.data.pageData.type}${['array', 'object'].includes(this.data.pageData.type) ? '' : ' -> ' + this.data.pageData.value}`,
          bg: '',
          color: '#CE7F5E'
        }
      })
    }
  },

  methods: {

  }
})
