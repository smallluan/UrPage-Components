Component({

  options: ({
    multipleSlots: true,
  }),

  properties: {
    fold: {
      type: Boolean,
      value: true
    },
    origHeight: {
      type: String,
      value: '0rpx'
    },
    // cell's
    cell: {
      type: Object,
      value: {
        leftIcon: 'app',
        title:  '栏目标题',
        borderBottom: true,
        description: '',
        bg: '',
        color: ''
      }
    },
    direction: {
      type: String,
      value: 'bottom'
    },
    mode: {
      type: String,
      value: 'cell'  // cell | fade
    }
  },

  data: {
    collapseTableClass: '',
    arrowClass: '',
    cellClass: '',
    styles: ''
  },

  lifetimes: {
    attached() {
      this.setClass();
    },
    ready() {
      this.getFoldedHeight()
    }
  },

  observers: {
    'cell' : function () {
      this.getFoldedHeight()
    }
  },

  methods: {

    setClass() {
      let {fold, collapseTableClass, arrowClass, cellClass, origHeight, mode} = this.data;
      if(fold) {
        collapseTableClass = 'table-fold';
        arrowClass = 'arrow';
        cellClass = 'cell'
      } else {
        collapseTableClass = 'table-unfold';
        arrowClass = 'arrow-unfold';
        cellClass = 'cell-unfold'
      }
      if (mode === 'fade') {
        origHeight = '200rpx'
      }
      this.setData({
        collapseTableClass: collapseTableClass,
        arrowClass: arrowClass,
        cellClass: cellClass,
        origHeight: origHeight
      })
    },

    // 切换折叠状态
    switchFold() {
      this.setData({
        fold: !this.data.fold
      })
      this.setClass();
    },

    // 受控属性
    fold () {
      this.setData({ fold: true })
      this.setClass()
    },

    // 受控属性
    unfold () {
      this.setData({ fold: false })
      this.setClass()
    },

    // 获取被折叠部分的高度
    getFoldedHeight () {
      const query = this.createSelectorQuery();
      query.select('#slot').boundingClientRect().exec(res=>{
        this.setData({
          height: res[0].height
        })
      });
    }
  }
})
