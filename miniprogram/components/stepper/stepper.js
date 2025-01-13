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
      if(this.data.disabled) return ;
      this.setData({
        val: Math.max(this.data.min, this.data.val - 1)
      })
    },

    add() {
      if(this.data.disabled) return ;
      this.setData({
        val: Math.min(999, this.data.val + 1)
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
