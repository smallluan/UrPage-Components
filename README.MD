该项目为本人小乱乱个人开发

其中 `icon` 组件和  `色彩指引` 请参考腾讯 TDesign 组件库 ，链接如下

[TDesign - 开源的企业级设计体系](https://tdesign.tencent.com/)

具体使用的文件夹为 `components/icon` 和 `components/common`

该组件库将持续被更新，有任何建议请联系我  `598051800@qq.com`
该项目可以直接导入到`微信开发者工具`，成品请扫描二维码访问

受微信小程序审核机制影响，`线上版本会落后于最新版本`，体验最新版本推荐将该仓库克隆到本地运行


![UrPage 组件库](https://github.com/user-attachments/assets/78d8dbae-a124-4377-8395-626d25d9f32b)

## 版本指引： 
### v 1.0.0
2025-01-13 21:23:56
首次上传组件库

### v 1.0.1
2025-01-14 08:41:07
更新了组件之间的引用关系，以便按需引入

### v 1.0.2
2025-01-14 10:07:04
快速开发了 “开发者” 页面，方便查看该项目

### v 1.0.3
2025-01-15 00:36:49
code 组件更新，新增 css 代码高亮显示

### v 1.0.4 
2025-01-15 14:11:52
code 组件更新， 新增代码语言右上角显示

### v 1.0.5
2025-01-16 22:39:13
首页新增跳转至搜素页面入口，新增搜索组件页面

### v 1.0.6
2025-01-18 11:40:25
countdown 倒计时组件新增毫秒显示
stepper 步进器组件新增步进大小配置

### v 1.1.0
2025-01-27 23:46:33
新增 Timeline 时间轴组件

### v 1.1.1
2025-01-27 23:55:02
进行了一些修改

### v 1.1.2
2025-01-28 12:513:43
新增版本指引页面：开发者 -> 版本指引
“开发者” 页面布局更新

### v 2.0.0
组件新增分类：组合式组件和功能组件
修改了折叠面板 collapseBox 组件，支持动态获取被折叠部分的高度
由于组件分类被修改，搜索组件页面逻辑更新
功能组件更新，新增 random 随机， 访问路径: 首页 -> 功能 -> 内容类 -> 随机生成
此外:
 修改了 code 代码组件，添加了 js 代码解析的关键词

### v 2.1.0
2025-01-31 09:56:34
搭建 urpage 小程序后端，基于 express 框架。由于本程序为演示性程序，故后端目前只负责静态资源托管

### v 2.1.1
2025-03-09 23:34:20
更新 collapse 折叠面板，新增内容类 -> 单次展开

### v 2.2.0
2025-06-08 11:57:43
着手开始面向对象重构，删除 scroll_top 组件，使用 fab 组件接替它的功能，fab 组件继承自 button 组件。解决了 action 组件向右偏移的问题。
