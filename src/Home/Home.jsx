import React from 'react'
import './Home.css'
import Introduction from './Introduction/Introduction'
import Contact from './Contact/Contact'
import Projects from './Projects/Projects'
import Experiance from './Experiance/Experiance'
import TechStack from './TechStack/TechStack'

function Home() {
  return (
    <div>
      <Introduction />
      <Projects />
      <Experiance/>    
      <Contact />  
      <TechStack/>
    </div>
  )
}

export default Home