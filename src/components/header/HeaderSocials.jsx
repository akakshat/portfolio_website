import React from 'react'
import {BsLinkedin} from "react-icons/bs"
import {BsGithub} from "react-icons/bs"
import {SiGmail} from "react-icons/si"

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/akakshat/" target="_blank"> <BsLinkedin/> </a>
        <a href="https://github.com/akakshat" target="_blank"> <BsGithub/> </a>
        <a href="https://www.linkedin.com/in/akakshat/" target=" blank"> <SiGmail/> </a>
    </div>
  )
}

export default HeaderSocials