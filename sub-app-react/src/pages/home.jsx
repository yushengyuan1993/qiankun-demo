import logo from '../logo.svg'

export default function Home() {
  return (
    <div className='home'>
      <img className='logo' src={logo} alt="logo" />
      <h3>react首页</h3>
    </div>
  )
}