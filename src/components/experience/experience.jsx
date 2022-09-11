import React from 'react'
import './experience.css'
import AVTR1 from '../../assets/a1.png'
import AVTR2 from '../../assets/a2.png'

import {Pagination} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
  avatar: AVTR1,
  name: 'Work Experience',
  title:'Rising Sun International School - Web Developer',
  used: 'React.js, Tailwind Css',
  review: '➤ Built the portfolio website of the organisation, achieving the target in less than 50% of the given time.',
  review1:'➤ Designed and developed the user interface.'
  
},
{
  avatar: AVTR2,
  name: 'Volunteer Experience',
  title:'Hindi Club - Treasurer',
  used:'Financial Management, Event Management, Public Connections',
  review: '➤ Oversaw the flow of cash and all financial aspects of the club.',
  review1: '➤ Managed the inflow/outflow of finances of 10+ events during the tenure.'
},
{
  avatar: AVTR2,
  name: 'Volunteer Experience',
  title:'Aperture MUJ - Working Committee',
  used:'Photo Editing, Video Editing',
  review: '➤ Worked as a junior Photo and Video Editor',
  review1: '➤ Conducted 5+ events during my tenure.'
}] 


const experience = () => {
  return (
    <section id="experience">
      <h2>My Experience </h2>

      <Swiper className="container experience__container"
        // install Swiper modules
          modules={[Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
        >
        {
          data.map(({avatar, name, review, title, used, review1}, index) =>{
            return (
              <SwiperSlide key={index} className="experience">
              <div className="work__avatar">
                <img src= {avatar} />
              </div>
                <h6 className="work__name">{name}</h6>
                <h4 className="work__title">{title}</h4>
                <h7 className="work__used">{used}</h7>
                <small className="work__review">{review} <br/>{review1}</small>
              </SwiperSlide>
            )
          })
        } 
      </Swiper>
    </section>
  )
}

export default experience