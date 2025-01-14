import { __dealJs__ } from './javaScript'
import { __dealHtml__ } from './html'
import { __dealCss__ } from './css'

Component({

  properties: {
    code: {
      type: String,
      value: ``
    },
    lang: {
      type: String,
      value: 'js', // js | css | html
    },
    type: {
      type: String,
      value: 'block', // block | inline
    },
    inlineHighLight: {
      type: Boolean,
      value: false
    }
  },

  data: {
    _code: []
  },

  lifetimes: {
    attached () {
      const { code, type, lang, inlineHighLight } = this.data
      if (code === '') return
      if (type === 'block') {
        if (['js', 'javaScript', 'javascript', 'JavaScript'].includes(lang)) {
          this.setData({ _code: __dealJs__(this.data.code).slice(0, -1)})
        } else if (['html', 'HTML', 'wxml', 'WXML', 'XML', 'xml'].includes(lang)) {
          this.setData({ _code: __dealHtml__(this.data.code).slice(0, -1)})
        } else if (['css', 'Css', 'CSS'].includes(lang)) {
          this.setData({ _code: __dealCss__(this.data.code).slice(0, -1)})
        }
      } else if (type === 'inline' && inlineHighLight) {
        if (['js', 'javaScript', 'javascript', 'JavaScript'].includes(lang)) {
          this.setData({ _code: __dealJs__(this.data.code)})
          console.log(this.data._code)
        } else if (['html', 'HTML', 'wxml', 'WXML', 'XML', 'xml'].includes(lang)) {
          this.setData({ _code: __dealHtml__(this.data.code)})
        } else if (['css', 'Css', 'CSS'].includes(lang)) {
          this.setData({ _code: __dealCss__(this.data.code)})
        }
      }
    }
  },
})
