Component({

  options: {
    styleIsolation: 'isolated'
  },

  properties: {
    type: {
      type: String,
      value: 'module'
    },
    moduleConfig: {
      type: Object,
      value: {
        longText: false
      }
    },
    template: {
      type: Object,
      value: {
        title: '表单标题',
        items: [
          { role: 'input', placeholder: '请输入账号', }, 
          {  },
          {  },
        ]
      }
    }
  },

  data: {

  },

  methods: {

  }
})
