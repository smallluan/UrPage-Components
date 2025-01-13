import { _style, _classes } from '../utils/common'

Component({

  properties: {
    components: {
      type: Array,
      value: []
    },
    startGuide: {
      type: Boolean,
      value: false
    },
  },

  data: {
    nodes: [],
    current: -1,
    styles: ''
  },

  lifetimes: {
    ready() {
      let that = this
      wx.getSystemInfo({
        success: function (res) {
          that.setData({
            viewWindowHeight: res.windowHeight
          });
        }
    })
      this.getNode()
    }
  },

  methods: {
    async getNode() {
      // 向使用该组件的实例中写入方法
      const parent = this.selectOwnerComponent()
      parent.m_getNode = () => {
        return new Promise((resolve, reject) => {
          const nodes = []
          const { components } = this.data
          components.forEach((item, index) => {
            const node = wx.createSelectorQuery()
            .select(`#${item.name}`)
            node.boundingClientRect((rect) => {
              if (rect) {
                nodes.push({ item: item, rect: rect })
              } else {
                console.error(`未找到匹配的元素:${item}`)
              }
              if (index === components.length - 1) {
                resolve(nodes)
              }
            }).exec()
          })
        })
      }
      // 调用该方法，获取所有元素的位置
      const res = await parent.m_getNode()
      res.forEach(item => {
        for(let key in item.rect) {
          if (typeof item.rect[key] === 'number') {
            item.rect[key] += 'px'
          }
        }
      })
      this.setData({ nodes: res })
      this.next()
    },

    next() {
      let { current, nodes, currentNode, styles, viewWindowHeight } = this.data
      current = Math.min(current + 1, nodes.length - 1)
      currentNode = {
        rect: nodes[current].rect,
        item: nodes[current].item
      }
      const { item, rect } = currentNode


      // if (Number((rect.top).split('px')[0]) >= viewWindowHeight) {
      //   console.log('元素超出视口')
      //   while (Number((rect.top).split('px')[0]) >= viewWindowHeight) {
      //     rect.top = (Number((rect.top).split('px')[0]) - viewWindowHeight) +'px'
      //   }
      //   // wx.pageScrollTo({
      //   //   scrollTop: Number((rect.top).split('px')[0])  - Number((rect.height).split('px')[0]),
      //   //   duration: 1000 
      //   // })
      // }

      // wx.pageScrollTo({
      //   scrollTop: Number((rect.top).split('px')[0])  - Number((rect.height).split('px')[0]),
      //   duration: 1000 
      // })


      const { offset } = item
      styles = _style({ ...rect, ...offset }, [])
      this.setData({ styles, current, currentNode })
    },

    back() {
      let { current, nodes, currentNode, styles } = this.data
      current = Math.max(current - 1, 0)
      currentNode = {
        rect: nodes[current].rect,
        item: nodes[current].item
      }
      const { item, rect } = currentNode
      const { offset } = item
      styles = _style({ ...rect, ...offset }, [])
      this.setData({ styles, current, currentNode })
    },

    finish() {
      this.setData({
        startGuide: false
      })
      this.triggerEvent('finish')
    }
  }
})