/**
 * 如何安装使用kitui
 */
import { h, FunctionalComponent } from 'preact'
import { Link } from 'preact-router'
import * as Style from './index.less'

const InstallationView: FunctionalComponent = () => (
  <div className={ Style['installation-view'] }>
    <header>
      <h1># 安装/使用</h1>
    </header>
    <section>
      <h2>1.安装</h2>
      <h3>使用 npm 或 yarn 安装</h3>
      <p>我们推荐使用 npm 或 yarn 的方式进行开发，不仅可在开发环境轻松调试，也可放心地在生产环境打包部署使用，享受整个生态圈和工具链带来的诸多好处。</p>
      <article>
        $ npm install preact-kitui --save
      </article>
      <article>
        $ yarn add preact-kitui
      </article>
    </section>

    <section>
      <h2>2.使用</h2>
      <p>我们在 npm 发布包内的 preact-kitui/components 目录下提供了index.js style.css以及用于按需加载的组件列表。</p>

      <h3>使用示例</h3>
      <article>
        { `
import { h, render } from 'preact'
import { Button } from 'preact-kitui'
import 'preact-kitui/components/style.css'

render(
  <Button>按钮</Button>,
  document.getElementById('app')
)
        ` }
      </article>

      <h3>按需加载示例</h3>
      <article>
        { `
import { h, render } from 'preact'
import Button from 'preact-kitui/components/Button'

render(
  <Button>按钮</Button>,
  document.getElementById('app')
)
        ` }
      </article>
    </section>
    <footer>
      <Link href="/components">
        下一步：组件文档
      </Link>
    </footer>
  </div>
)

export default InstallationView
