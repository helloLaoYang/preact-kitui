
## 对话框 Dialog

弹出式提示框，有多种交互形式。

___

### 使用

```
import { Dialog } from 'preact-kitui'
````

##### 例子

传入一个对象，返回一个 Promise

```
  Dialog({
    title: '提醒',
    content: '这是一条提醒',
  })
```


### API

| 参数 | 说明 | 类型 | 可选 | 默认 |
| --- | --- | --- | --- | --- |
| title | 弹窗的标题 | string | - | - |
| content | 弹窗的内容 | any | - | - |
| imageUrl | 弹窗的图片资源 | string | - | - |
| type | 弹窗的类型 | string | text、alter、confirm、prompt | text |
| align | content内容文本对齐方式 | string | left、center、right | left |
| inputType | type=prompt时，输入框的类型 | string | text、number、textarea | text |
| inputValue | type=prompt时，输入框的值 | string | - | - |
| inputPlaceholder | type=prompt时，输入框的占位符 | string | - | - |
| className | 为dialog添加一个类名 | string | - |
| showConfirmButton | 是否显示确认按钮 | boolean | - | true |
| showCancelButton | 是否显示取消按钮 | boolean | - | false |
| confirmButtonText | 确认按钮文案 | strinng | - | 确定 |
| cancelButtonText | 取消按钮文案 | strinng | - | 取消 |
| buttonList | 自定义按钮队列， 设置后关于按钮的配置将全部失效，action返回点击的按钮的value，并且关闭需要手动调用Dialog destory | { value: string, label: string, className?: string }[] | - | - |
