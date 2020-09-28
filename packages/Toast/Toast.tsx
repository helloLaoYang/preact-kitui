
/**
 * 反馈弹窗 Toast
 * Toast用于显示操作结果，同时不打断用户的行为，默认持续1.5秒。注意文案统一，避免出现「成功」「失败」「错误」等，这些文字容易让用户疑惑和挫败。
 * @author hellolaoyang<aaron@codonas.cn>
 * @date 2020年09月28日14:29:35
 * @upgrade
 */
import { h, render as mount, Component } from 'preact'

//  & Toast ComponentProps
interface ToastComponentProps extends ToastOptions {
  onClosed?(): void;
}

interface ToastOptions {
  icon?: string;
  imgUrl?: string;
  content: string;
  duration?: number;
}

// 真实组件
class ToastComponent extends Component<ToastComponentProps> {
  render () {
    return (
      <div className="kit-toast"></div>
    )
  }
}

// 全局Toast实例
let instance: Element | undefined

// 移除实例
const removeIntance = () => {
  if (instance) {
    document.body.removeChild(instance)
    instance = undefined
  }
}

// 创建实例
const Toast = (options: ToastOptions): void => {
  removeIntance()
  instance = document.createElement('div')
  mount(
    <ToastComponent
      {
        ...options
      }
      onClosed={ removeIntance }
    />, instance,
  )
  document.body.appendChild(instance)
}

// 主动移除实例
Toast.destory = removeIntance

export default Toast
