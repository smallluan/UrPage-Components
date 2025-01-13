Component({

  options: ({
    multipleSlots: true,
  }),

  properties: {
    show: {
      type: Boolean,
      value: true
    },
    content: {
      type: String,
      value: '这是一个模态窗口，您可以通过该窗口实现与用户的交互。'
    },
    btn: {
      type: String,
      value: 'readOnly' 
    },
    closeable: {
      type: Boolean,
      value: true
    },
    title: {
      type: String,
      value: ''
    },
    longText: {
      type: Boolean,
      value: false
    },
    input: {
      type:Object,
      value: {
        show: false,
        placeholder:'请输入',
        maxlength: 10,
        clearable: true
      }
    }
  },

  data: {
    inputValue: ''
  },

  observers: {
    'show': function() {
      this.triggerEvent('moduleChange', {module :this.data.show})
    },
  },

  methods: {
    confirm (e: unknown) {
      this.close(e ,'confirm')
    },
    cancle (e: unknown) {
      this.close(e ,'cancle')
    },
    getInputContent (e: any) {
      this.setData({ inputValue: e.detail })
    }, 
    close(e: unknown, from: string = 'topClose') {
      this.setData({
        show: false
      })
      this.triggerEvent('moduleColse', {'event': e, from: from ,'inputValue': this.data.inputValue})
    }
  }
})
