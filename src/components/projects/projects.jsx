import React from 'react'
import './projects.css'
import IMG1 from '../../assets/p1.png'
import IMG2 from '../../assets/p2.png'
import IMG3 from '../../assets/p3.png'
import IMG4 from '../../assets/p4.png'
import {VscGithub} from 'react-icons/vsc'
import {HiOutlineExternalLink} from 'react-icons/hi'
import {SiAirplayvideo} from 'react-icons/si'

const projects = () => {
  return (
    <section id="projects"> 
      <h2> My Projects </h2>

      <div className="container projects__container">
      <article className="projects__item">
          <div className="projects__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3> React.js, JavaScript, HTML/CSS, Firebase </h3>
          <div className="projects__item-cta">
            <a href="https://github.com/akakshat" className='btn1' target='_blank' > <VscGithub size = {30}/> </a>
            <a href="https://github.com/akakshat"  className='btn1' target='_blank' > <HiOutlineExternalLink size = {30}/></a>
            <a href="https://dribbble.com/Alien_pixels" className='btn1' target='_blank' > <SiAirplayvideo size = {30}/> </a>            
          </div>
        </article>

        <article className="projects__item">
          <div className="projects__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3> Node.js, Express.js, Socket.io, JavaScript</h3>
          <div className="projects__item-cta">
            <a href="https://github.com/akakshat" className='btn1' target='_blank' > <VscGithub size = {30}/> </a>
            <a href="https://github.com/akakshat" className='btn1' target='_blank' > <HiOutlineExternalLink size = {30}/></a>
            <a href="https://dribbble.com/Alien_pixels" className='btn1' target='_blank' > <SiAirplayvideo size = {30}/> </a>            
          </div>
        </article>

        <article className="projects__item">
          <div className="projects__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3> React.js, JavaScript, Hooks, Firebase </h3>
          <div className="projects__item-cta">
            <a href="https://github.com/akakshat" className='btn1' target='_blank' > <VscGithub size = {30}/> </a>
            <a href="https://github.com/akakshat" className='btn1' target='_blank' > <HiOutlineExternalLink size = {30}/></a>
            <a href="https://dribbble.com/Alien_pixels" className='btn1' target='_blank' > <SiAirplayvideo size = {30}/> </a>            
          </div>
        </article>

        <article className="projects__item">
          <div className="projects__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3> JavaScript, HTML/CSS </h3>
          <div className="projects__item-cta">
            <a href="https://github.com/akakshat" className='btn1' target='_blank' > <VscGithub size = {30}/> </a>
            <a href="https://github.com/akakshat" className='btn1' target='_blank' > <HiOutlineExternalLink size = {30}/></a>
            <a href="https://dribbble.com/Alien_pixels" className='btn1' target='_blank' > <SiAirplayvideo size = {30}/> </a>            
          </div>
        </article>
        
      </div>
    </section>
  )
}

export default projects