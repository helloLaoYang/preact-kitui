# Button 按钮


> 组件库提供了五种按钮。

* 主按钮

* 默认按钮

以及四种状态属性与上面配合使用。

* 危险：删除/移动/修改权限等危险操作，一般需要二次确认。

* 幽灵：用于背景色比较复杂的地方，常用在首页/产品页等展示场景。

* 禁用：行动点不可用的时候，一般需要文案解释。

* 加载中：用于异步操作等待反馈的时候，也可以避免多次提交。

## API

通过设置 Button 的属性来产生不同的按钮样式

| 属性 | 说明 | 类型 | 可选值 | 默认值
| --- | --- | --- | ---| --- |
| block | 将按钮宽度调整为其父宽度的选项 | boolean | - | false 
| type | 设置按钮类型 | string | primary(主按钮)、default(默认按钮)  | default
| dashed | 虚线属性，使按钮边框变为虚线 | boolean | - | falae
| sloid | 实线属性，使按钮边框变为实线 | boolean | - | falae
| disabled | 按钮失效状态 | boolean | - | false
| loading | 设置按钮载入状态 | boolean | - | false
| onClick | 点击按钮时的回调 | (event) => void | - | -
| shape | 设置按钮形状 | string | circle(圆角)、 round(无圆角) | round
| size	| 设置按钮大小 | string | large()、 middle()、small() | middle
| href | 点击跳转的地址，指定此属性 button 的行为和 a 链接一致 | string | - | - 
