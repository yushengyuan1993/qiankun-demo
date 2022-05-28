import './App.css'
import Home from './pages/home'
import About from './pages/about'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter basename={window.__POWERED_BY_QIANKUN__ ? '/sub-app-react' : '/'}>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
