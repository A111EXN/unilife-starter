import React from 'react'
import picture from '../assets/cover-img.png'



function banner() {
  return (
   <div>
    <div className='banner'>
     <img style={{width:"100%"}} src={picture}/>
    </div>
    <div className='big-text'>
     <p> Find student homes with bills included</p>
     <p> A simple and faster way to search for student accommodation</p>
    </div>
   </div>    
  )
}

export default banner