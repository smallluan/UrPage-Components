Component({

  properties: {
    // 开关状态
    status: {
      type: Boolean,
      value: true,
    },
    // 是否禁用
    disabled: {
      type: Boolean,
      value: false,
    },
    // 背景颜色
    background: {
      type: Array,
      value: ['#D3D3D3', '#0052d9'],  // [colse, open]
    },
    // 震动
    vibration: {
      type: String,
      value:'none',  // none | open | colse | both
    },
    // 文字
    text: {
      type: Array,
      value: ['', '']
    },
    // 图标
    icon: {
      type: Array,
      value: ['', '']
    },
    //loading
    loading: {
      type: Boolean,
      value: false
    },
    //尺寸
    size: {
      type: String,
      value: 'normal'
    }
  },

  data: {
    mainStyles: '',
    mainClass: 'switch-box',
    currIcon: '',
    currText: ''
  },

  lifetimes: {
    attached() {
      this.setIconAndFont();
      this.setStyles();
      this.setClass();
    }
  },

  observers: {
    'status, disabled, background': function() {
      this.setClass();
      this.setStyles();
    },
  },

  methods: {
    // 设置style
    setStyles() {
      let {mainStyles, background, status} = this.data;
      mainStyles = '';
      mainStyles += `--closeBg: ${background[0]};`
      mainStyles += `--openBg: ${background[1]};`
      mainStyles += `--innerColor: ${status ? background[1] : background[0]};`
      this.setData({
        mainStyles: mainStyles,
      })
    },

    // 设置class
    setClass() {
      let {disabled, mainClass, loading} = this.data;
      if(disabled || loading) {
        mainClass += ` disabled`;
      }
      this.setData({
        mainClass: mainClass
      })
    },

    // 设置innerIcon和innerText
    setIconAndFont() {
      let {status, icon, text, currIcon, currText} = this.data;
      currIcon = status ? icon[1] : icon[0];
      currText = status ? text[1] : text[0]
      this.setData({
        currIcon: currIcon,
        currText: currText
      });
    },

    // 点击
    tap() {
      if(this.data.disabled || this.data.loading) return;
      this.vibration();
      this.setData({
        status: !this.data.status,
      });
      this.setIconAndFont();
      this.triggerEvent("switchTap", this.data.status);
    },

    // 震动
    vibration() {
      let {vibration, status} = this.data;
      if(vibration == 'open' && !status) {
        wx.vibrateShort({
          type: 'light',
        })
      }else if(vibration == 'close' && status){
        wx.vibrateShort({
          type: 'light',
        })
      }
      else if(vibration == 'both') {
        wx.vibrateShort({
          type: 'light',
        })
      }
    }
  }
})
