import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar  from './components/Navbar'
import Myfooter from './components/Myfooter'
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
<Navbar/>
<div className='min-h-screen'>
  <Outlet/>
</div>

<Myfooter/>
    </>
  )
}

export default App
