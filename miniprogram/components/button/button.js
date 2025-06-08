import { _style, _classes } from '../utils/common'
import properties from './props'
import MyComponent from '../_basic/comp'

class Button extends MyComponent {
  constructor() {
    super()
    this.options =  {
      multipleSlots: true,
      styleIsolation: "isolated" 
    }
    this.properties = properties
    this.data = {
      classes: '',
      styles: ''
    }
    this.lifetimes = {
      attached() {
        let { text, classes } = this.data
        text === '' && (classes = 'pure-icon ')
        this.setData({
          classes: classes + _classes(this.properties, []),
          styles: _style(this.properties, [])
        })
      },
      created() {}
    } 
    this.methods = {
      buttonClick(e) {
        const { disabled, loading } = this.data
        if (!disabled && !loading) {
          this.triggerEvent('click', {event: e, componentData: this.data})
        }
      },
      buttonLongPress(e) {
        const { disabled, loading } = this.data
        if (!disabled && !loading) {
          this.triggerEvent('longPress', {event: e, componentData: this.data})
        }
      }
    }
  } 
}


Component(new Button())

export default Button
