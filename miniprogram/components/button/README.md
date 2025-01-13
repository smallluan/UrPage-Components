### Button 按钮
#### 一、引入
首先请在 `app.json` 中声明该组件，请添加以下代码：
```json
 // app.json
 "usingComponents": {
    "m_button": "/components/button/button"
  },
```
然后在要使用该组件的位置添加如下代码，即可使用最基础的 `button` 组件：
```html
<!-- xxx.wxml -->
<m_button content="确认"/> 
```
如果您想尝试其他功能，请参照下面的`API`进行配置。

**注意：**
**a. 下面的图标不会生效，因为图标的尺寸为 `small`：**
```html
<m_button theme="error" icon="app" size="small" content="取消"/>
```
该部分对应的源代码如下:
```html
<t-icon 
  wx:if="{{(icon || loading) && size !== 'small'}}" 
  class="{{ loading ? 'loading-icon' : '' }}"
  style="margin-right: {{content === '' ? '0rpx' : '12rpx'}}" 
  name="{{loading ? 'loading' : icon}}"
/>
```
在第二行的`wx:if`中规定了 `size === small` 时不显示图标，如果您有在该情况下显示图标的需求，建议您使用`纯图标` 或者自行修改代码。

**b. 下面的尺寸修改不会生效，因为是纯图标按钮：**
```html
<m_button content="" icon="search" size="large" />
```
**c. 下面的颜色自定义不会生效，因为内置主题优先级高于自定义主题：**
```html
<m_button content="确认" bg="white" color="red" />
```
正确的操作应该先将 `theme` 置为空：
```html
<m_button content="确认" theme="" bg="white" color="red" />
```
#### 二、APIs
|名称|作用|默认值|注意|
|--|--|--|--|
|content|描述文字|`''`（空字符串）|无|
|icon|图标|`''`（空字符串）|尺寸为`small`时不显示图标;<br/>状态为`loading` 时，图标会被 `loading图标`覆盖  |
|disabled|是否禁用按钮|`false`|无|
|loading|是否在加载|`false`|加载时`按钮会被禁用`，默认图标会被替代为`加载图标`|
|size|尺寸|**`normal`** \| `small` \|`large`|尺寸为`small`时不显示图标|
|shape|按钮形状|**`rect`** \| `round`|无|
|color|文字颜色|**`white`** \| `any`|优先级低于`theme`|
|bg|背景颜色|**`#0052d9`** \| `any`|优先级低于`theme`|
|theme|主题|**`primary`** \| `primary-light` \|`success` \|`success-light`\| `warn` \|`warn-light`\|`error`\|`error-light`|优先级高于自定义颜色，如想自定义颜色，请将该属性赋值为空：`theme=""`表示不使用任何内置主题|

#### 三、事件
|名称|事件结构|注意|
|--|--|--|
|`buttonClick`|`{event: e, componentData: this.data}`|无|
|`buttonClick`|同上|无|