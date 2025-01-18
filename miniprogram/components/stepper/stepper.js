Component({

  properties: {
    val: {
      type: Number,
      value: 0
    },

    min: {
      type: Number,
      value: 0
    },

    disabled: {
      type: Boolean,
      value: false
    },

    size: {
      type: String,
      value: 'normal'
    },

    step: {
      type: Number,
      value: 1
    }

  },

  data: {
    max: 999,
    mainClass: 'box',
  },

  lifetimes: {
    attached() {
      this.setClass()
    }
  },

  methods: {

    setClass() {
      let {size, disabled, mainClass} = this.data;
      mainClass += ` ${size}`;
      if(disabled) mainClass += ` disabled`;
      this.setData({mainClass});
    },

    minus() {
      const { disabled, step, min, val } = this.data
      if(disabled) return ;
      this.setData({
        val: Math.max(min, val - step)
      })
    },

    add() {
      const { disabled, step, val } = this.data
      if(disabled) return ;
      this.setData({
        val: Math.min(999, val + step)
      })
    },

    getNumber(e) {
      let val = e.detail.value;
      val = Math.min(this.data.max, val);
      this.setData({
        val: val
      });
      this.triggerEvent('valChange', this.data.val);
    } 
  }
})
