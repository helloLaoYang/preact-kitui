
/**
 * 实例主页
 */
import { h, FunctionalComponent } from 'preact'
import { Link } from 'preact-router'
import * as Style from './index.less'

const HomeView: FunctionalComponent = () => (
  <div className={ Style['home-view'] }>
    <header>
      <h3>KIT UI</h3>
      <p>统一体验一致的多鹿客户端<a href="https://github.com/preactjs/preact">preact</a>组件库</p>
    </header>
    <main>
      <Link href="/installation">
        <p>安装/使用</p>
        <i className="kitui-icon">&#xe961;</i>
      </Link>
      <Link href="/components">
        <p>组件文档</p>
        <i className="kitui-icon">&#xe6de;</i>
      </Link>
      <Link>
        <p>改进计划</p>
        <i className="kitui-icon">&#xe63a;</i>
      </Link>
    </main>
  </div>
)

export default HomeView
