import React from 'react'
import './about.css'
import Me from '../../assets/me-about.png'
import {BsBriefcaseFill} from 'react-icons/bs'
import {SiHandshake} from 'react-icons/si'
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

      <a href = "#experience"> 
        <article className="about__card">
          <BsBriefcaseFill className="about__icon"/> 
            <h5>Work <br/> Experience</h5>
        </article> 
      </a>

      <a href = "#experience"> 
        <article className="about__card">
          <SiHandshake className="about__icon"/>
            <h5>Volunteer <br/> Experience</h5>
        </article> 
      </a>

      <a href = "#projects"> 
        <article className="about__card"> 
          <VscFolderLibrary className="about__icon"/> 
            <h5>My <br/> Projects</h5>
        </article> 
      </a>
    </div>
    
      <p>
      I am a full stack developer with more than 5000 hours of building, maintaining and deploying multi page and eCommerce websites and I can adapt onto any technology rapidly making myself flexible upon any tech stack. A passionate, diligent person who wants to learn continuously.
      </p>
      <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    
  </div>
</div>
</section>
)
}

export default about