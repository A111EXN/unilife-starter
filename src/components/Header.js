import React from 'react'
import '../styles/Header.css'



function Header() {
  return (
    <div className='header-container'>
        <div>
           <img src='https://cdn3.iconfinder.com/data/icons/watchify-v1-0/70/home-70px-64.png'/>
            UniLife
        </div>
        <div>
          <img src='https://cdn0.iconfinder.com/data/icons/eon-social-media-contact-info-2/32/mail_email_e-mail_letter-64.png'/>
          Contact Us 
        </div>
    </div>
  )
}

export default Header