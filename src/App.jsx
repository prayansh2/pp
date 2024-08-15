import React from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Skill from './Components/Skill'
import Op from './Components/Op'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
const App = () => {
  return (
   <>
   <Navbar></Navbar>
   <Hero></Hero>
   <About></About>
   <Skill></Skill>
   <Op></Op>
   <Contact></Contact>
   <Footer></Footer>
   </>
  )
}

export default App