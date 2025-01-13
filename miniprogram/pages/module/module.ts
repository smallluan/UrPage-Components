Page({
  data: {
    types: ['基础窗口', '标题窗口', '可确认窗口', '选择窗口', '输入窗口', '长文本窗口', '插槽'],
    title: {
      text: "Module 模态窗口",
      fontWeight: '700',
      fontSize: '38rpx',
      color: '#0052d9'
    },
    moduleInput: {
      show: true,
      placeholder:'最多5字',
      maxlength: 5,
      clearable: true
    },
    longText: '这是一个模态窗口，您可以通过该窗口实现与用户的交互。这是一个模态窗口，您可以通过该窗口实现与用户的交互。这是一个模态窗口，您可以通过该窗口实现与用户的交互。这是一个模态窗口，您可以通过该窗口实现与用户的交互。这是一个模态窗口，您可以通过该窗口实现与用户的交互。这是一个模态窗口，您可以通过该窗口实现与用户的交互。这是一个模态窗口，您可以通过该窗口实现与用户的交互。这是一个模态窗口，您可以通过该窗口实现与用户的交互。这是一个模态窗口，您可以通过该窗口实现与用户的交互。这是一个模态窗口，您可以通过该窗口实现与用户的交互。这是一个模态窗口，您可以通过该窗口实现与用户的交互。这是一个模态窗口，您可以通过该窗口实现与用户的交互。这是一个模态窗口，您可以通过该窗口实现与用户的交互。',
    show_1: false,
    show_2: false,
    show_3: false,
    show_4: false,
    show_5: false,
    show_6: false,
    show_7: false,
  },
  
  show_1() {
    this.setData({
      show_1: true
    })
  },
  show_2() {
    this.setData({
      show_2: true
    })
  },
  show_3() {
    this.setData({
      show_3: true
    })
  },
  show_4() {
    this.setData({
      show_4: true
    })
  },
  show_5() {
    this.setData({
      show_5: true
    })
  },
  show_6() {
    this.setData({
      show_6: true
    })
  },
  show_7() {
    this.setData({
      show_7: true
    })
  },
  inputMouleClose (e: any) {
   wx.showToast({
     title: `您输入了：${e.detail.inputValue}`,
     icon: 'none',
     duration: 2000
   })
  }
})