import { 
    PropertiesType, 
    ComponentInterface 
} from '../_basic/comp'

export type Properties = PropertiesType & {
    text: {
        description?: '文字内容'
        type: StringConstructor,
        value: string | undefined,
    },
    icon: {
        description?: '图标名称',
        type: StringConstructor,
        value: string | undefined,
    },
    disabled: {
        description?: '是否禁用',
        type: BooleanConstructor,
        value: boolean,
    },
    loading: {
        description?: '是否正在加载',
        type: BooleanConstructor,
        value: boolean,
    },
    size: {
        description?: '按钮大小',
        type: StringConstructor,
        value: 'small' | 'normal' | 'large',
    },
    shape: {
        description?: '按钮形状',
        type: StringConstructor,
        value: 'rect' | 'round',
    },
    color: {
        description?: '文字颜色',
        type: StringConstructor,
        value: string | undefined,
    },
    bg: {
        description?: '背景颜色',
        type: StringConstructor,
        value: string | undefined,
    },
    theme: {
        description?: '主题',
        type: StringConstructor,
        value: 'primary' | 'primary-light' | 'success' |'success-light' | 'error' | 'error-light' | 'warning' | 'waring-light' | 'dark',
    }
}

export interface ButtonInterface extends ComponentInterface {
    properties: Properties,
    methods: {
        buttonClick: (e: unknown) => void,
        buttonLongPress: (e: unknown) => void,
    }
}
