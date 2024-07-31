import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavBar from './components/NavBar'
import SignIn from './components/SignIn'
import Login from './components/Login'

function App() {

  return (
    <>
      <NavBar></NavBar>
      <Login></Login>
      {/* <SignIn></SignIn> */}
    </>
  )
}

export default App
