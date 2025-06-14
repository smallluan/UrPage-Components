/**
 * 组件基类，实现了 ComponentInterface 接口，封装了组件的通用属性、方法和生命周期。
 */
class MyComponent implements ComponentInterface {
    // 组件选项配置
    options: OptionsType;
    // 组件属性
    properties: PropertiesType;
    // 组件生命周期钩子
    lifetimes: LifetimesType;
    // 组件的数据对象，与 properties 关联
    data: DataType;
    // 组件的自定义方法集合
    methods: MethodsType;

    /**
     * 构造函数，初始化组件的各项属性。
     * 由于所有属性方法将在子类里面被重写，这里使用断言避免类型错误。
     */
    constructor() {
        this.options = {} as OptionsType;
        this.properties = {} as PropertiesType;
        this.data = {} as DataType;
        this.lifetimes = {
            setData: () => {},
            data: {},
            properties: {}
        } as LifetimesType;

        this.methods = {} as MethodsType;
    }

    /**
     * 指向全局的 this 上的方法
     */
    setData() {}
}

/**
 * 定义组件接口
 * options => 组件配置选项
 * properties => 组件属性，暴露出去
 * data => 内置属性
 * lifetimes => 生命周期
 * setData => 组件方法
 */
export interface ComponentInterface {
    options?: OptionsType;
    properties?: PropertiesType;
    lifetimes?: LifetimesType;
    setData: SetDataType;
}

/**
 * 组件选项类型，定义了插槽支持和样式隔离模式。
 */
export type OptionsType = {
    // 是否允许存在多个插槽
    multipleSlots: boolean;
    // 样式隔离模式，可选多种预定义值
    styleIsolation: "isolated" | "apply-shared" | "shared" | "page-isolated" | "page-apply-shared" | "page-shared" | undefined;
};

/**
 * 组件数据类型，基于 PropertiesType 生成，同时支持额外的任意键值对。
 */
export type DataType = {
    // 从 PropertiesType 中提取每个属性的值类型
    [key in keyof PropertiesType]: PropertiesType[key]['value'];
} & {
    // 允许额外的任意键值对
    [key: string]: any;
};

/**
 * 设置组件数据的方法类型，接受一个对象，对象的键为 PropertiesType 的键。
 */
export type SetDataType = (
    // 要设置的数据对象，键来自 PropertiesType
    obj: { [K in keyof DataType]: any }
) => void;

/**
 * 组件属性类型，支持泛型，可指定属性值的类型。
 */
export type PropertiesType = {
    // 任意字符串键对应一个包含描述、类型和值的对象
    [key: string]: {
        // 属性描述，可选
        description?: string;
        // 属性类型
        type: unknown;
        // 属性值
        value: unknown;
    };
};

/**
 * 组件方法类型，定义了方法以键值对形式存储，每个值为返回 unknown 类型的函数。
 */
export type MethodsType = DataType & {
    // 任意字符串键对应一个返回 unknown 类型的函数
    [key: string]: (...args: Array<unknown>) => unknown;
};

/**
 * 组件生命周期类型，包含多个生命周期钩子和数据管理属性。
 */
export type LifetimesType = {
    // 组件创建完成时调用
    created?: () => void;
    // 组件挂载到页面时调用
    attached?: () => void;
    // 组件数据和方法初始化完成时调用
    ready?: () => void;
    // 组件位置移动时调用
    moved?: () => void;
    // 组件从页面移除时调用
    detached?: () => void;
    // 组件发生错误时调用
    error?(err: WechatMiniprogram.Error): void;
    // 设置组件数据的方法
    setData: SetDataType;
    // 组件属性
    properties: PropertiesType;
    // 组件数据
    data: DataType;
} | undefined;

// 导出组件基类作为默认导出
export default MyComponent;