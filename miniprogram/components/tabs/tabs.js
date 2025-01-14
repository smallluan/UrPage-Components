import { getNavBarInfos } from "../utils/sys"

Component({

  properties: {
    tabsList: {
      type: Array,
      value: [],
      discription: '列表'
    },
    currTab: {
      type: Number,
      value: 0,
      disacription: '当前被选择的tab'
    },
    selectedHigthLight: {
      type: Object,
      value: {
        show: false,
        color: '#f2f3ff'
      },
      discription: '被选中后的高光'
    },
    bg: {
      type: String,
      value: 'white',
      discription: '默认背景颜色'
    },
    color: {
      type: String,
      value: '#0052d9',
      discription: '被选中后，文字 | icon颜色'
    },
    animation: {
      type: Object,
      value: {
        open: true,
        duration: 300
      },
      discription: '动画配置'
    },
    cursor: {
      type: Boolean,
      value: true,
      discription: '是否显示光标'
    },
    sticky: {
      type: Object,
      value: {
        isStick: false,
        top: 0,
      },
      discription: '粘性布局配置'  // TODO
    },
    longLen: {
      type: Boolean,
      value: false,
      discription: '长 tab 需要滚动'  // TODO
    }
  },

  data: {
    cursorPos: '0%',
    cursorClass: 'cursor',
    bghlClass: 'bgHightLight'
  },

  lifetimes: {
    attached() {
      let {tabsList} = this.data;
      // 找到第一个未被禁用的tab
      let i = 0;
      while(tabsList[i].disabled) i ++;
      this.setData({
        tabbarInfos: getNavBarInfos(),
        currTab: i
      })
      this.setStyles();
      this.setClass();
    }
  },

  methods: {
    // 设置styles
    setStyles() {
      let mainBox = "";
      let {bg, tabsList, cursor, currTab, color, selectedHigthLight} = this.data;
      // 每个tab的宽度，根据列表长度变化
      mainBox += `--bg: ${bg};`;
      mainBox += `--color: ${color};`;
      mainBox += `--ewd: ${100 / tabsList.length.toString()}%;`;
      mainBox += `--bghl: ${selectedHigthLight.color == '' ? '#f2f3ff' : selectedHigthLight.color};`
      this.setData({
        mainBox: mainBox,
      })
      if(cursor || selectedHigthLight.show) {
        this.getCursor(currTab);
      }
    },

    // 设置class
    setClass() {
      let {cursor, animation, cursorClass, tabsList, currTab, selectedHigthLight, bghlClass} = this.data;
      if(cursor && animation.open) {
        cursorClass += ' animation';
      }
      if(selectedHigthLight.show) {
        bghlClass += ' animation';
      }

      let tabClass = [];
      tabsList.forEach((value, index)=>{
        if(value.disabled) {
          tabClass.push('tab-disabled');
        }
        else if(index === currTab) {
          tabClass.push('tab-selected');
        }
        else {
          tabClass.push('tab');
        }
      })

      this.setData({
        cursorClass: cursorClass,
        bghlClass: bghlClass,
        tabClass: tabClass
      })
    },
    
    // 点击tab
    tabClick(e) {
      let id = e.currentTarget.dataset.id;
      let {tabsList, cursor, selectedHigthLight} = this.data;
      // 当前tab没有被禁止
      if(!tabsList[id].disabled) {
        // 如果展示光标，才计算它的运动
        if(cursor || selectedHigthLight.show) {
          this.getCursor(id);
        }
        this.setData({
          currTab: id
        })
        this.setClass();
      }
      this.triggerEvent('tabClick', {status: !tabsList[id].disabled, current: this.data.currTab});
    },

    // 计算cursor的位置
    getCursor(id) {
      let {tabsList} = this.data;
      let precentage = 2 + (48 * (2 * id + 1) / tabsList.length);
      this.setData({
        cursorPos: `${precentage.toString()}%`,
        bghlPos: `${((precentage - 2)/ 0.96).toString()}%`
      })
    }
  }
})
