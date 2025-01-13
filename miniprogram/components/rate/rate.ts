Component({

  properties: {

    current: {
      type: Number,
      value: 0
    },
    number: {
      type: Number,
      value: 5
    },
    activeColor: {
      type: String,
      value: '#f5ba18'
    },
    defaultColor: {
      type: String,
      value: '#dddddd'
    },
    icon: {
      type: String,
      value: 'star-filled'
    },
    reviews: {
      type: Array,
      value: []
    },
    emoji: {
      type: Array,
      value: []
    },
    starSize: {
      type: Number, 
      value: 24 // px
    }
  },

  data: {
    styles: '',
    eachStarClass: ['default','default','default','default','default'],
    startpos: 0,
    _startpos: 0,
    currentpos: 0,
  },

  lifetimes: {
    attached() {
      this.setClass();
      this.setStyles();
    },
    ready() {
      const query = this.createSelectorQuery();
      query.select('#star').boundingClientRect().exec(res=>{
        console.log(res)
        this.setData({
          left: res[0].left
        })
      });
    }
  },

  methods: {

    setClass() {
      let {eachStarClass, current} = this.data;
      let new_eachStarClass = eachStarClass.map((item, id)=>{
        if(current >= id + 1) {
          item = 'active';
        }else {
          item = 'default';
        }
        return item;
      });
      this.setData({
        eachStarClass: new_eachStarClass
      })
    },

    setStyles() {
      let {styles, activeColor, defaultColor,starSize} = this.data;
      styles += `--activeColor: ${activeColor};`;
      styles += `--defaultColor: ${defaultColor};`;
      styles +=`--starSize: ${starSize}px;`
      this.setData({styles});
    },
    
    // 点击星星
    click(e) {
      const clickedIndex = e.currentTarget.dataset.id;
      this.setData({
        current: clickedIndex + 1
      });
      this.setClass();
    }
  }
})
