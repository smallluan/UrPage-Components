import { Properties } from './type'

const properties: Properties = {
  icon: {
    type: String,
    value: '',
  },
  disabled: {
    type: Boolean,
    value: false,
  },
  loading: {
    type: Boolean,
    value: false,
  },
  size: {
    type: String,
    value: 'normal',
  },
  shape: {
    type: String,
    value: 'rect'
  },
  color: {
    type: String,
    value: 'white'
  },
  bg: {
    type: String,
    value: '#0052d9'
  },
  theme: {
    type: String,
    value: 'primary'
  },
}

export default properties
