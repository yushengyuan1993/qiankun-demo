import './public-path'
import React from 'react'
import * as ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
// import reportWebVitals from './reportWebVitals'

let app = null

function render(props) {
  const { container } = props
  const root = container ? container.querySelector('#app') : document.querySelector('#app')
  app = ReactDOM.createRoot(root)
  app.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals()

/**
 * 不使用 qiankun 加载应用的时候，直接加载当前应用
 */
if (!window.__POWERED_BY_QIANKUN__) {
  render({})
}

export async function bootstrap() {
  console.log('[sub-app-react] bootstraped')
}

export async function mount(props) {
  console.log('[sub-app-react] mounted')
  console.log('props: ', props)

  render(props)
}

export async function unmount(props) {
  console.log('[sub-app-react] unmounted')
  console.log('props: ', props)

  console.log('app: ', app)
  app.unmount()
}
