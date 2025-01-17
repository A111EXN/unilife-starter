import React from 'react'
import '../styles/Header.css'



function Header() {
  return (
    <div className='header-container'>
        <div className='link-container'>
           <img src='https://cdn3.iconfinder.com/data/icons/watchify-v1-0/70/home-70px-64.png'/>
            <a href='/' className='uniLifeTag'>UniLife</a>
        </div>
        <div className='link-container'>
          <img src='https://cdn0.iconfinder.com/data/icons/eon-social-media-contact-info-2/32/mail_email_e-mail_letter-64.png'/>
           <p>Contact Us </p>
        </div>
    </div>
  )
}

export default Header