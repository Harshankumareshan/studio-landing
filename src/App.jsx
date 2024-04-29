import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Client from './components/Client'
import Footer from './components/Footer'
import Version from './components/Version'
import Explore from './components/Explore'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Header/>
    <Explore/>
    <Version/>
    <Client/>
    <Footer/>
      
    </>
  )
}

export default App
