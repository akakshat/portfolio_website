import React from 'react'
import './about.css'
import Me from '../../assets/me-about.png'
import {FaAward} from 'react-icons/fa'
import {MdOutlineWork} from 'react-icons/md'
import {VscFolderLibrary} from 'react-icons/vsc'

const about = () => {
  return(<section id="about">
  <h5>                     </h5>
  <h2 className='about__tagline'> About Me </h2>
  <div className="container about__container" >
    <div className="about__me">
      <div className=" about__me-image">
        <img src={Me} alt="About Image" />
      </div>
    </div>

  <div className="about__content" >
    <div className="about__cards">

      <article className="about__card">
        <FaAward className="about__icon"/>
        <h5>Work Experience</h5>
      </article>

      <article className="about__card">
        <MdOutlineWork className="about__icon"/>
        <h5>Volunteer Experience</h5>
      </article>

      <article className="about__card">
        <VscFolderLibrary className="about__icon"/>
        <h5>Projects</h5>
      </article>
    </div>
    
      <p>
      I am a full stack software developer with more than 5000 hours of building, maintaining and deploying single page/eCommerce applications and I can adapt onto any technology rapidly making myself flexible upon any tech stack. A passionate, diligent person who wants to learn continuously.
      </p>
      <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    
  </div>
</div>
</section>
)
}

export default about