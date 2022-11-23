import React from 'react'
import '../styles/banner.css'
import picture from '../assets/cover-img.png'


function Banner({title, smallTitle}) {
 

  const sliderStyle = {
    backgroundImage: `url("${picture}")`,
    backgroundSize:'cover',
    backgroundPosition:'center',
    backgroundRepeat:'no-repeat',
    height:"480px",
    position:"relative"
    
  }
  return (

    <div style={sliderStyle}>
    <div  className='banner-overlay'>
     <p className='title'>{title}</p>
     <p className='small-title'>{smallTitle}</p>
    </div>
   </div>    
  )
}

export default Banner