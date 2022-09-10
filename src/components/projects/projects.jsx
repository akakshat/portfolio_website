import React from 'react'
import './projects.css'
import IMG1 from '../../assets/p1.png'
import IMG2 from '../../assets/p2.png'
import IMG3 from '../../assets/p3.png'
import IMG4 from '../../assets/p4.png'
import {VscGithub} from 'react-icons/vsc'
import {HiOutlineExternalLink} from 'react-icons/hi'
import {SiAirplayvideo} from 'react-icons/si'

const data = 
[
  {
    id : 1,
    image: IMG1,
    title: 'React.js, JavaScript, Material UI, Hooks, Firebase',
    github: 'https://github.com/akakshat/amazon-clone',
    project_link: 'https://clone-2d7c1.web.app/',
    demo : 'https://www.youtube.com/watch?v=T4Yr_vhaaAk'
  },
  {
    id : 2,
    image: IMG2,
    title: 'Node.js, Express.js, Socket.io, JavaScript',
    github: 'https://github.com/akakshat/Vidzyy',
    project_link: 'https://www.youtube.com/watch?v=zAYUY10fbkk',
    demo : 'https://www.youtube.com/watch?v=zAYUY10fbkk'
  },
  {
    id : 3,
    image: IMG3,
    title: 'React.js, JavaScript, Hooks, Firebase',
    github: 'https://github.com/akakshat/Todo-List',
    project_link: 'https://todo-list-aad35.web.app/',
    demo : 'https://www.youtube.com/watch?v=nFON2AGqD6I'
  },
  {
    id : 4,
    image: IMG4,
    title: 'JavaScript',
    github: 'https://github.com/akakshat/Tic-Tac-Toe',
    project_link: 'https://akakshat.github.io/Tic-Tac-Toe/',
    demo : 'https://www.youtube.com/watch?v=f6WOhBqB8v4'
  }
]
const projects = () => {
  return (
    <section id="projects"> 
      <h2> My Projects </h2>

      <div className="container projects__container">
        {
          data.map(({id, image, title, github, project_link, demo}) =>{
            return(
              <article key={id} className="projects__item">
                <div className="projects__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3> {title} </h3>
                <div className="projects__item-cta">
                  <div className="projects__button">
                    <a href= {github} className='btn1' target='_blank' > <VscGithub size = {30}/> </a>
                    <a href= {project_link}  className='btn1' target='_blank' > <HiOutlineExternalLink size = {30}/></a>
                    <a href= {demo} className='btn1' target='_blank' > <SiAirplayvideo size = {30}/> </a>                      
                  </div>
                </div>
              </article>
            )
          })
        }
      </div>

    </section>
  )
}

export default projects