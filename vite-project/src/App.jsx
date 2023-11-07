import { useState } from 'react'
import './App.css'
import Signup from './pages/Signup.jsx'
import Login from './pages/Login.jsx'
import Home from './pages/Home.jsx'
import { Route, Routes } from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Signup />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/home' element={<Home />}/>
      </Routes>
      
    </>
  )
}

export default App
