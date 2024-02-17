import React from 'react'
import '../About/About.css'
import Pic from '../assests/im doing a webs 1.png'

function About() {
  return (
    <div className="about">
        <section className='left-about'>
          <img src={Pic} alt="Pic" />
        </section>
        <section className='right-about'>
          <span className='first-about'>I'm a Designer</span>
          <h1 className='about-h'>I Can Design Anything You Want</h1>
          <p>Hello there! I'm a web designer, and I'm very passionate and dedicated to my work. With 20 years experience as a professional web developer, I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the design process, from discussion and collaboration.</p>
          <button>Hire me</button>
        </section>
    </div>
  )
}

export default About