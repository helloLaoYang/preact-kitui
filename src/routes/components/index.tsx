
/**
 * 组件文档索引
 * @author hellolaoyang<aaron@codonas.cn>
 * @date 2020年09月25日17:23:22
 * @version 0.0.1
 * @upgradeDesc
 */
import { h, FunctionalComponent, JSX } from 'preact'
import { Link } from 'preact-router'
import * as Style from './index.less'

const ComponentView: FunctionalComponent = (): JSX.Element => (
  <div className={ Style['components-view'] }>
    <header>
      <h1>组件</h1>
    </header>

    <section>
      <h2>基础组件</h2>
      <ul>
        <li>
          按钮 Button
        </li>
        <li>
          单行输入框 Input
        </li>
        <li>
          多行输入框 Textarea
        </li>
        <li>
          开关 Switch
        </li>
        <li>
          复选框 Checkbox
        </li>
        <li>
          评分 Rate
        </li>
        <li>
          徽章 Badge
        </li>
        <li>
          加载 Loading
        </li>
        <li>
          搜索 Search
        </li>
        <li>
          步骤条 Step
        </li>
        <li>
          气泡 Popover
        </li>
        <li>
          图钉 Affix
        </li>
        <li>
          上传 Uploader
        </li>
      </ul>
    </section>

    <section>
      <h2>交互组件</h2>
      <p>交互组件在一个webview中只会出现唯一个，在上一个实例未被销毁时，创建第二个实例会直接销毁第一个。</p>
      <ul>
        <Link href="/components/dialog">
          对话框 Dialog
        </Link>
        <li>
          提示框 Toast
        </li>
        <li>
          弹出式菜单 ActionSheet
        </li>
        <li>
          多列选择器 Picker
        </li>
        <li>
          时间多列选择器 DatePicker
        </li>
        <li>
          画廊 Gallery
        </li>
      </ul>
    </section>

  </div>
)

export default ComponentView
