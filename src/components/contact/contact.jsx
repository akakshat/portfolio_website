import React from 'react'
import './contact.css'
import {SiGmail} from "react-icons/si"
import {BsLinkedin} from "react-icons/bs"
import {BsWhatsapp} from "react-icons/bs"

const contact = () => {
  return (
    <section id="contact">
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className=" contact__options">
          <article className="contact__option">
            <SiGmail className='contact__option-icon'/>
            <h4> Email</h4>
            <h5> akasatgarg@gmail.com</h5>
            <a href="mailto: akasatgarg@gmail.com" target="_blank" >Send a message</a>
          </article>
          <article className="contact__option">
            <BsLinkedin className='contact__option-icon'/>
            <h4> Linkedin</h4>
            <h5> Akshat Garg</h5>
            <a href="https://www.linkedin.com/in/akakshat/" target="_blank" >View Profile</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4> WhatsApp</h4>
            <h5> (+91) 9528464637 </h5>
            <a href="https://api.WhatsApp.com/send?phone=919528464637" target="_blank" >Send a message</a>
          </article>
        </div>

        {/* END OF CONTACT OPTIONS */}
        
        <form action="">
          <input type="text" name='name' placeholder='Full Name' required />
          <input type="email" name=' email' placeholder='Email' required />
          <input type="subject" name=' email' placeholder='Subject' required />
          <textarea name="message" rows="8" placeholder= 'Description' required /> 
          <button type= 'submit' className='btn btn-primary'> Email Me</button>
        </form>
      </div>

    </section>
  )
}

export default contact