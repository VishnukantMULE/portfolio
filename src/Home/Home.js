import React from 'react'
import Navbar from './Header/Navbar'
import Landing from './Header/Landing'
import Projects from './Sections/Projects'
import Blogs from './Sections/Blogs'
import Skills from './Sections/Skills'
import Footer from './Footer/Footer'
import MyService from './Sections/services/MyService'

export default function Home() {
  return (
    <div>

        <Navbar/>
        <Landing/>
        <hr className='hr2'/>
        <Skills/>
        <br/>
            <div className='sectionText'>
             My Approach to Success 
            </div>

        <MyService/>

        <br/>
            <div className='sectionText'>
             My Projects
            </div>
        <Projects/>
        {/* <Blogs/> */}
        <Footer/>

    </div>
  )
}
