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
      // 获取被折叠部分的高度
      const query = this.createSelectorQuery();
      query.select('#slot').boundingClientRect().exec(res=>{
        this.setData({
          height: res[0].height
        })
      });
    }
  },

  methods: {

    setClass() {
      let {fold, collapseTableClass, arrowClass, cellClass} = this.data;
      if(fold) {
        collapseTableClass = 'table-fold';
        arrowClass = 'arrow';
        cellClass = 'cell'
      }
      else {
        collapseTableClass = 'table-unfold';
        arrowClass = 'arrow-unfold';
        cellClass = 'cell-unfold'
      }
      this.setData({
        collapseTableClass: collapseTableClass,
        arrowClass: arrowClass,
        cellClass: cellClass
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
    }
  }
})
