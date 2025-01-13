Component({

  options: ({
    multipleSlots: true,
  }),

  properties: {
    cellList: {
      type: Array,
      value: []
    },
    direction: {
      type: String,
      value: 'bottom'
    }
  },

  data: {
    objs: []
  },

  lifetimes: {
    ready () {
      for(let i = 0; i < this.data.cellList.length; i ++) {
        const res = this.selectComponent(`#c_${i}`)
        this.data.objs.push(res)
      }
      this.setData({ objs: this.data.objs })
    }
  },

  methods: {
    handal (e) {
      const cur = e.currentTarget.dataset.id
      this.data.objs.forEach((item, index) => {
        if(index === cur) {
          // 因为组件内的数据先变化，所以这块反过来写
          item.data.fold ? item.fold() : item.unfold()
        }
        else item.fold()
      })
    }
  }
})
