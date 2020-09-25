import { FunctionalComponent, h } from 'preact'
import { Router } from 'preact-router'
import './icon/iconfont.css'
import './App.less'

import Home from '@/routes/home'
import Installation from '@/routes/installation'
import Components from './routes/components'

const App: FunctionalComponent = () => (
  <div id="app">
    <Router>
      <Home
        path="/"
        default
      />
      <Installation
        path="/installation"
      />
      <Components
        path="/components"
      ></Components>
    </Router>
  </div>
)

export default App
