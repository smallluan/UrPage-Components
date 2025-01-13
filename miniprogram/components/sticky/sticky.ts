import { getNavBarInfos } from "../utils/sys"

Component({
  options: ({
    multipleSlots: true,
  }),
  properties: {
    top: {
      type: Number,
      value: 0
    }
  },

  lifetimes: {
    attached() {
      this.setData({
        top: this.data.top + getNavBarInfos().navBarHeight,
      })
    }
  },

  data: {

  },

  methods: {

  }
})
