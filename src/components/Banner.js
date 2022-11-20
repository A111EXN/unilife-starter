import React from 'react'
import picture from '../assets/cover-img.png'



function banner() {
  return (
    <div className='banner'>
     <img style={{width:"100%"}} src={picture}/>
    </div>
  )
}

export default banner