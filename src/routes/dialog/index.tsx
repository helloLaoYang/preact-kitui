
/**
 * dialog演示页面
 */
import { h, FunctionalComponent } from 'preact'
import { useCallback, useState, useEffect } from 'preact/hooks'
import Dialog from '@@/packages/Dialog/Dialog'
import '@@/packages/Dialog/index.less'
import * as Style from './index.less'

const DialogView: FunctionalComponent = () => {
  const [example1, setExample1] = useState<string | undefined>(undefined)
  const [example4, setExample4] = useState<string | undefined>(undefined)
  // 样例1点击事件
  const example1Handler = useCallback(() => {
    Dialog({
      title: '确定要删除吗？',
      showCancelButton: true,
      onConfirm: () => {
        setExample1('你点击了确定')
      },
      onCancel: () => {
        setExample1('你点击了取消')
      },
    })
  }, [])

  // 样例2点击事件
  const example2Handler = useCallback(() => {
    Dialog({
      content: '当前活动尚未开始，请于3小时45分22秒后准时参数。',
    })
  }, [])

  // 样例3点击事件
  const example3Handler = useCallback(() => {
    Dialog({
      title: '提醒',
      content: '当前页面非法访问，请规范您的操作。',
      confirmButtonText: '知道了',
      align: 'center',
    })
  }, [])

  // 样例4点击
  const example4Handler = useCallback(() => {
    Dialog({
      title: '提醒',
      content: '请选择您想查看的样例',
      align: 'center',
      buttonList: [{
        label: '样例1',
        value: 'example1',
      }, {
        label: '样例2',
        value: 'example2',
      }, {
        label: '样例3',
        value: 'example3',
      }],
      onConfirm: (r) => {
        setExample4(r)
      },
    })
  }, [])

  // 模拟生命周期
  useEffect(() => () => {
    Dialog.destory()
  }, [])

  return (
    <div className={ Style['dialog-view'] }>
      <header>
        <h1>Dialog</h1>
        弹出式对话框 <a href="">文档地址</a>
      </header>

      <section>
        <h2>如何使用？</h2>
        <p>dialog不提供常规组件且只会存在一个实例。在组件销毁时，注意销毁dialog实例。</p>

        <article>
          { `
import { Dialog } from 'preact-kitui'

Dialog(options)

// 主动关闭销毁实例
Dialog.destory() 
          ` }
        </article>

        <h3>样例1</h3>
        <p>只有标题</p>
        <article>
          { `
import { Dialog } from 'preact-kitui'

Dialog({
  title: '确定要删除吗？',
  showCancelButton: true,
})
          ` }
        </article>
        <p>
          <button
            onClick={ example1Handler }
          >查看样例演示</button>
          { example1 }
        </p>
        <h3>样例2</h3>
        <p>只有内容</p>
        <article>
          { `
import { Dialog } from 'preact-kitui'

Dialog({
  content: '当前活动尚未开始，请于3小时45分22秒后准时参数。'
})
          ` }
        </article>
        <p>
          <button
            onClick={ example2Handler }
          >查看样例演示</button>
        </p>
        <h3>样例3</h3>
        <p>具有标题与内容</p>
        <article>
          { `
import { Dialog } from 'preact-kitui'

Dialog({
  title: '提醒',
  content: '当前页面非法访问，请规范您的操作。',
  confirmButtonText: '知道了',
  align: 'center',
})
          ` }
        </article>
        <p>
          <button
            onClick={ example3Handler }
          >
            查看样例演示
          </button>
        </p>
        <h3>样例4</h3>
        <p>自定义按钮组</p>
        <article>
          { `
import { Dialog } from 'preact-kitui'

Dialog({
  title: '提醒',
  content: '请选择您想查看的样例',
  buttonList: [{
    label: '样例1',
    value: 'example1',
  }, {
    label: '样例2',
    value: 'example2',
  }, {
    label: '样例3',
    value: 'example3',
  }]
})
          ` }
        </article>
        <p>
          <button
            onClick={ example4Handler }
          >
            查看样例演示
          </button>
          { example4
            ? (
              `您点击了：${example4}`
            )
            : null }

        </p>
        <h3>样例5</h3>
        <p>图文弹出</p>
        <article>
          { `
import { Dialog } from 'preact-kitui'

Dialog({
  title: '提醒',
  content: '请选择您想查看的样例',
  imgUrl: '',
  buttonList: [{
    label: '样例1',
    value: 'example1',
  }, {
    label: '样例2',
    value: 'example2',
  }, {
    label: '样例3',
    value: 'example3',
  }]
})
          ` }
        </article>
      </section>
    </div>
  )
}

export default DialogView
