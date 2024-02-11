import React from 'react'
import Navbar from './Header/Navbar'
import Landing from './Header/Landing'
import Projects from './Sections/Projects'
import Blogs from './Sections/Blogs'
import Skills from './Sections/Skills'
import Footer from './Footer/Footer'

export default function Home() {
  return (
    <div>

        <Navbar/>
        <Landing/>
        <Skills/>
        <Projects/>
        {/* <Blogs/> */}
        <Footer/>

    </div>
  )
}
