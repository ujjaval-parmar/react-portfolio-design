import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'




const App = () => {

  const [activeSection, setActiveSection] = useState('home');


  return (
    <>

      <Navbar setActiveSection={setActiveSection}/>


      <main>

        <Home activeSection={activeSection}/>

        <About activeSection={activeSection}/>

        <Projects activeSection={activeSection}/>


        <Skills activeSection={activeSection}/>


        <Contact activeSection={activeSection}/>


      </main>


      <Footer />

    </>
  )
}

export default App