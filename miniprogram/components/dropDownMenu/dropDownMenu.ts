import { _style } from '../utils/common'

Component({

  properties: {
    list: {
      type: Array,
    },
    currentId: {
      type: Number,
      value: -1
    },
    currentOpt: {
      type: String,
      value: '-1_-1'
    },
    hightLight: {
      type: String,
      value: '#f2f3ff'
    },
    activeColor: {
      type: String,
      value: '#0052d9'
    }
  },

  data: {
    styles: ''
  },

  lifetimes: {
    attached () {
      this.setData({
        styles: _style(this.properties, [])
      })
      const opt = this.data.currentOpt.split('_')[this.data.currentOpt.split('_').length - 1]
      if (Number(opt) !== -1) {
        console.log(opt)
        this.onOpt(Number(opt))
      }
    }
  },

  methods: {
    onChange (e: any) {
      let id = e.currentTarget.dataset.id
      if (id === this.data.currentId) {
        id = -1
      }
      this.setData({ currentId: id })
      this.triggerEvent('onChange', {currentId: this.data.currentId})
    },
    onOpt (e:any) {
      let id
      if (typeof e === 'object') {
        id = e.currentTarget.dataset.id
      } else {
        id = e
      }
      let { list, currentId, currentOpt } = this.data
      const a = Number((currentOpt.split('_'))[0])
      const b = Number((currentOpt.split('_'))[1])
      if (a !== -1 && b !== -1) {
        list[a].options[b].isSelect = false
      }
      list[currentId].options[id].isSelect = true
      this.setData({
        currentOpt: `${currentId}_${id}`,
        list: this.data.list
      })
      this.triggerEvent('onOpt', {currentOpt: this.data.currentOpt})
    }
  }
})
