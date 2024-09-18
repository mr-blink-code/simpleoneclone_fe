import './App.css'
import Footer from './components/Footer'
import NavbarLanding from './components/NavbarLanding'
import React from 'react'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Simpleone from './pages/Simpleone'
import Intuitiveness from './pages/Intuitiveness'
import Varient from './pages/Varient'
import Techsmart from './pages/Techsmart'
import Footerbanner from './pages/Footerbanner'

function App() {

  return (
    <BrowserRouter>
      <NavbarLanding/>
      <Home/>
      <Simpleone/>
      <Intuitiveness/>
      <Varient/>
      <Techsmart/>
      <Footerbanner/>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
