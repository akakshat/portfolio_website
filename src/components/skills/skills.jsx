import React from 'react'
import './skills.css'
import {BsPatchCheckFill} from 'react-icons/bs'
import {SiHtml5} from 'react-icons/si'
import {FaCss3} from 'react-icons/fa'
import {IoLogoJavascript} from 'react-icons/io'
import {FaReact} from 'react-icons/fa'
import {SiNextdotjs} from 'react-icons/si'
import {SiTailwindcss} from 'react-icons/si'
import {SiBootstrap} from 'react-icons/si'
import {SiNodedotjs} from 'react-icons/si'
import {SiExpress} from 'react-icons/si'
import {SiFirebase} from 'react-icons/si'
import {SiMongodb} from 'react-icons/si'
import {GrMysql} from 'react-icons/gr'
import {SiPython} from 'react-icons/si'

const skills = () => {
  return (
    <section id="skills"> 
      {/* <h5>What Skills I Have</h5> */}
      <h2>My Skills</h2>

      <div className="container skills__container">
        <div className="skills__frontend">
          <h3>Frontend Development</h3>
            <div className="skills__content">
            
              <article className="skills__details">
                <SiHtml5/>
                <div>
                  <h4>HTML</h4>
                  <small className="text-light"> Experienced </small>                  
                </div>
              </article>

              <article className="skills__details">
                <FaCss3/>
                <div>
                  <h4>CSS</h4>
                  <small className="text-light"> Experienced </small>                  
                </div>
              </article>

              <article className="skills__details">
                <IoLogoJavascript/>
                <div>
                  <h4>JavaScript</h4>
                  <small className="text-light"> Experienced </small>                  
                </div>
              </article>

              <article className="skills__details">
                <FaReact/>
                <div>
                  <h4>React.js</h4>
                  <small className="text-light"> Experienced </small>                  
                </div>
              </article>

              <article className="skills__details">
                <SiNextdotjs/>
                <div>
                  <h4>NextJS</h4>
                  <small className="text-light"> Experienced </small>                  
                </div>
              </article>

              <article className="skills__details">
                <SiTailwindcss/>
                <div>
                <h4>Tailwind CSS</h4>
                <small className="text-light"> Experienced </small>                  
                </div>
              </article>

              <article className="skills__details">
                <SiBootstrap/>
                <div>
                  <h4>Bootstrap</h4>
                  <small className="text-light"> Experienced</small>                 
                </div>
              </article>
            </div>
        </div>

        {/*          END OF FRONTEND DEVELOPEMENT PART        */}

        <div className="skills__backend ">
          <h3>Backend Development</h3>
          <div className="skills__content">

            <article className="skills__details">
                <SiNodedotjs/>
                <div>
                  <h4>Node JS</h4>
                  <small className="text-light"> Experienced </small>                  
                </div>
              </article>

              <article className="skills__details">
                <SiExpress/>
                <div>
                  <h4>Express JS</h4>
                  <small className="text-light"> Experienced </small>                  
                </div>
              </article>

              <article className="skills__details">
                <SiFirebase/>
                <div>
                  <h4>Firebase</h4>
                  <small className="text-light"> Experienced </small>                  
                </div>
              </article>

              <article className="skills__details">
                <SiMongodb/>
                <div>
                  <h4>MongoDB</h4>
                  <small className="text-light"> Experienced </small>                  
                </div>
              </article>

              <article className="skills__details">
                <GrMysql/>
                <div>
                  <h4>MySQL</h4>
                  <small className="text-light"> Intermediate </small>                  
                </div>
              </article>

              <article className="skills__details">
                <SiPython/>
                <div>
                  <h4>Python</h4>
                  <small className="text-light"> Basic </small>                  
                </div>
              </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default skills
