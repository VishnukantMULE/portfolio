import React from 'react'
import Navbar from './Header/Navbar'
import Landing from './Header/Landing'
import Projects from './Sections/Projects'
import Blogs from './Sections/Blogs'
import Skills from './Sections/Skills'

export default function Home() {
  return (
    <div>

        <Navbar/>
        <Landing/>
        <Skills/>
        <Projects/>
        <Blogs/>
    </div>
  )
}
