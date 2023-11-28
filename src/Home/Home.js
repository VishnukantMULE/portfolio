import React from 'react'
import Navbar from './Header/Navbar'
import Landing from './Header/Landing'
import Projects from './Sections/Projects'

export default function Home() {
  return (
    <div>

        <Navbar/>
        <Landing/>
        <Projects/>
    </div>
  )
}
