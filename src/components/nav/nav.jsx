import React, {useState} from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {AiOutlineMessage} from 'react-icons/ai'
// import { useState } from 'react' // To navigate what we are using in the nav bar 


const nav = () => {
  // const[activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      {/* <a href = "#" className={activeNav === '#' ? 'active' : ''}> <AiOutlineHome/> </a> */}
      <a href = "#" className = 'active'> <AiOutlineHome/> </a>
      <a href = "#about"> <AiOutlineUser/> </a>
      <a href = "#experience"> <BiBook/> </a>
      <a href = "#services"> <RiServiceLine/> </a>
      <a href = "#contact"> <AiOutlineMessage/> </a>
    </nav>
  )
}

export default nav