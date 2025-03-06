Component({

  properties: {
    pageSize: {
      type: 'number',
      value: 50,
    },
    eachPageSize: {
      type: 'number',
      value: 10,
    },
    currPage: {
      type: 'number',
      value: 1
    },
    maxPage: {
      type: 'number',
      value: 5, // >= 5
    }
  },

  data: {
    pageNum: 0
  },

  lifetimes: {
   attached () {
     const { pageNum, pageSize, eachPageSize } = this.data 
     this.setData({
       pageNum: parseInt(pageSize / eachPageSize)
     })
   }
  },

  methods: {
    toNext () {
      let { currPage, pageNum } = this.data
      currPage + 1 <= pageNum && currPage ++
      this.setData({
        currPage
      })
    },
    toPrev () {
      let { currPage, pageNum } = this.data
      currPage - 1 >= 1 && currPage --
      this.setData({
        currPage
      })
    }
  }
})
