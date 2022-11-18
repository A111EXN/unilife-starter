import React from 'react'
import '../styles/Footer.css'




function Footer() {
  return (
  <div>
    <div className='footer-container-upper'>
      <div className='keep-in-touch-container'>
        <p style={{fontSize:"30px"}}>Keep in touch</p>
        <p>Curious about new offerings? Sign up for our <br/>newsletter and stay informed</p>
        <input placeholder='Your email'/>
      </div>
      <div className='lets-socialize-container'>
        <p style={{fontSize:"30px"}}> Let's Socialize</p>
        <p>  <img src='https://cdn3.iconfinder.com/data/icons/social-network-outline-3/100/Facebook-64.png'/> Facebook</p>
        <p> <img src='https://cdn4.iconfinder.com/data/icons/a-s-social-set/256/twitter-64.png'/> Twitter</p>
        <p> <img src='https://cdn4.iconfinder.com/data/icons/a-s-social-set/256/instagram-64.png'/> Instagram</p>

      </div>
    </div>
    <div className='footer-container-lower'>
        <div>About Us</div>
        <div>Terms & Conditions</div>
        <div>Privacy & Cookie Policies</div>      
      <div>2022</div>
       <div>
        <img src='https://cdn1.iconfinder.com/data/icons/hawcons/32/699784-icon-23-file-c-256.png'/>
        Unilife
       </div>
    </div>
  </div>
  )
}

export default Footer