import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {VscFolderLibrary} from 'react-icons/vsc'
import {AiOutlineMessage} from 'react-icons/ai'
// import { useState } from 'react' // To navigate what we are using in the nav bar 


const nav = () => {
  // const[activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      {/* <a href = "#" className={activeNav === '#' ? 'active' : ''}> <AiOutlineHome/> </a> */}
      <a href = "#" className = 'active'> <AiOutlineHome/> </a>
      <a href = "#about"> <AiOutlineUser/> </a>
      <a href = "#skills"> <BiBook/> </a>
      <a href = "#projects"> <VscFolderLibrary/> </a>
      <a href = "#contact"> <AiOutlineMessage/> </a>
    </nav>
  )
}

export default nav