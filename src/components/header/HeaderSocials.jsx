import React from 'react'
import {BsLinkedin} from "react-icons/bs"
import {BsGithub} from "react-icons/bs"
import {SiGmail} from "react-icons/si"

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/akakshat/" target="_blank"> <BsLinkedin size = {25} /> </a>
        <a href="https://github.com/akakshat" target="_blank"> <BsGithub size = {25} /> </a>
        <a href="mailto:akasatgarg@gmail.com" target=" blank"> <SiGmail size = {25} /> </a>
    </div>
  )
}

export default HeaderSocials