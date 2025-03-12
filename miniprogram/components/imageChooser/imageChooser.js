Component({
  options: {
    styleIsolation: 'isolated'
  },

  properties: {
    list: {
      type: Array,
      value: [
        {
          id: 0,
          url: 'https://n.sinaimg.cn/sinakd10111/325/w1242h1483/20201118/8b70-kcysmrw5280926.jpg',
          marginLeft: '0px',
          marginTop: '0px',
        },
        {
          id: 1,
          url: 'https://img-baofun.zhhainiao.com/pcwallpaper_ugc/static/dcf2ba9b17ef9b09020a67e42fa6cf28.jpg?x-oss-process=image%2fresize%2cm_lfit%2cw_1920%2ch_1080',
          marginLeft: '0px',
          marginTop: '0px',
        },
        {
          id: 2,
          url: 'https://c-ssl.dtstatic.com/uploads/blog/202208/09/20220809202326_880a3.thumb.1000_0.jpg',
          marginLeft: '0px',
          marginTop: '0px',
        },
        {
          id: 3,
          url: 'https://n.sinaimg.cn/sinakd20116/413/w1080h1733/20221027/332f-c02d7fba33287a3a5b709730caa05971.jpg',
          marginLeft: '0px',
          marginTop: '0px',
        },
      ]
    }
  },

  data: {
    elems: [],
    startX: 0,
    startY: 0,
    offsetX: 0,
    offsetY: 0,
    currentEle: -1,
    isMoving: false
  },

  lifetimes: {
    // 获取元素
    ready () {
      this.getElems()
    }
  },

  methods: {
    touchStart (e) {
      // e.stopPropagation();
      const { clientX, clientY } = e.changedTouches[0]
      this.setData({
        startX: clientX,
        startY: clientY,
      })
    },
    touchEnd () {
      this.setData({
        currentEle: -1,
        startX: 0,
        startY: 0,
        offsetX: 0,
        offsetY: 0,
      })
    },
    longPress (e) {
      // 防止多点长按
      if (this.data.currentEle !== -1) return
      // 短震动
      wx.vibrateShort()
      // 获取到需要改变位置的元素 id
      const id = e.currentTarget.dataset.id
      this.setData({ currentEle: id })
    },
    move (e) {
      // e.stopPropagation();
      e.preventDefault();
      if (this.data.isMoving) return
      this.setData({ isMoving: true })
      const { startX, startY, currentEle, elems, list } = this.data
      const { clientX, clientY } = e.changedTouches[0]
      const offsetX = clientX - startX
      const offsetY = clientY - startY
      for (let i = 0; i < elems.length; i ++) {
        if (i === currentEle) continue  // 不用和自己比较
        const { left, top, right, bottom, width, height} = elems[i]
        const borderRow = width / 4
        const borderCol = height / 4
        const condition_1 = clientX > left + borderRow && clientX < right - borderRow
        const condition_2 = clientY > top + borderCol && clientY < bottom - borderCol
        if (condition_1 && condition_2) {
          let temp = list[currentEle]
          list[currentEle] = list[i]
          list[i] = temp
          console.log(elems[currentEle])
          temp = {...elems[currentEle]}
          elems[currentEle] = { ...elems[i], id: elems[currentEle].id, dataset: elems[currentEle].dataset }
          elems[i] = {...temp, id: elems[i].id, dataset: elems[i].dataset}
          console.log(elems[currentEle])
          break  // 一旦匹配立刻结束循环，防止性能浪费
        }
      }
      this.setData({
        offsetX: offsetX,
        offsetY: offsetY,
        list: list,
        elems: elems,
        isMoving: false
      })
    },

    getElems () {
      const len = this.data.list.length
      const { elems } = this.data
      for (let i = 0; i < len; i ++) {
        let targetEle = this.createSelectorQuery().select(`#image-${i}`)
        targetEle.boundingClientRect(rect => {
          elems.push(rect)
        }).exec()
      }
      this.setData({ elems })
    }
  }
})
