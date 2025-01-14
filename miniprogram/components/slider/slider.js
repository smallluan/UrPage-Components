const { pxToRpx } = require('../utils/px');
Component({

  properties: {
    progressRight: {
      type: Number,
      value: 70
    },
    progressLeft: {
      type: Number,
      value: 0
    },
    max: {
      type: Number,
      value: 100
    },
    min: {
      type: Number,
      value: 0
    },
    type: {
      type: String,
      value:'leftFixed' // leftFixed | both
    },
    showValue: {
      type: Number,
      value: false
    },
    theme: {
      type: String,
      value: 'line'  // line | capsule
    },
    color: {
      type: String,
      value: '#0052d9'
    },
  },


  data: {
    sliderPosRight: 0,
    sliderPosLeft: 0,
    progressLen: '',
    classes: '',
  },

  lifetimes: {
    attached() {
      let {sliderPosRight, max, min, classes, progressRight , progressLen, sliderPosLeft, progressLeft,theme} = this.data;
      sliderPosRight = 660 / (max - min) * (progressRight-min);
      sliderPosLeft = 660 / (max - min) * (progressLeft-min);
      progressLen = `${(progressRight -  progressLeft)*100/(max-min)}%`
      this.setData({classes,sliderPosRight,progressLen, sliderPosLeft,});
    }
  },

  methods: {
    touchStart(e) {
      let {progressRight, progressLeft, progressLen,max,min,type} = this.data;
      // 获取点击点在横线上的绝对位置
      let absCurrX = Math.max(Math.min(Math.floor(pxToRpx(e.touches[0].clientX)) - 30, 660), 0);
      // 判断移动是左边滑块还是右边滑块
      let distance1 = Math.abs(absCurrX/(660/(max-min)) - progressLeft);
      let distance2 = Math.abs(absCurrX/(660/(max-min)) - progressRight);
      // 离左滑块近
      if(distance1 <= distance2 && type == 'both') {
        progressLeft = parseInt(absCurrX * (max - min) / 660) + min;
        progressLen = `${(progressRight -  progressLeft)*100/(max-min)}%`
        this.setData({
          sliderPosLeft: absCurrX,
          progressLeft,
          progressLen
        }) 
      }
      else{
        progressRight = parseInt(absCurrX * (max - min) / 660) + min;
        progressLen =   `${(progressRight -  progressLeft)*100/(max-min)}%`
        this.setData({
          sliderPosRight: absCurrX,
          progressRight,
          progressLen
        }) 
      }
     
    },
    touchMove(e) {
      let {progressRight, progressLeft, progressLen,max,min,type} = this.data;
      // 获取点击点在横线上的绝对位置
      let absCurrX = Math.max(Math.min(Math.floor(pxToRpx(e.touches[0].clientX)) - 30, 660), 0);
      // 判断移动是左边滑块还是右边滑块
      let distance1 = Math.abs(absCurrX/(660/(max-min)) - progressLeft);
      let distance2 = Math.abs(absCurrX/(660/(max-min)) - progressRight);
      // 离左滑块近
      if(distance1 <= distance2 && type == 'both') {
        progressLeft = parseInt(absCurrX * (max - min) / 660) + min;
        progressLen = `${(progressRight -  progressLeft)*100/(max-min)}%`
        this.setData({
          sliderPosLeft: absCurrX,
          progressLeft,
          progressLen
        }) 
      }
      else{
        progressRight = parseInt(absCurrX * (max - min) / 660) + min;
        progressLen =   `${(progressRight -  progressLeft)*100/(max-min)}%`
        this.setData({
          sliderPosRight: absCurrX,
          progressRight,
          progressLen
        }) 
      }
      this.triggerEvent('sliderMove', this.data)
    },
    click () {
      this.triggerEvent('sliderMove', this.data)
    }
  }
})
