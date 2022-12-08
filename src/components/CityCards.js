import React from 'react'
import '../styles/cityCards.css'
import Grid from './Grid'

function CityCards({data}) {

  const imageStyle={
    backgroundImage: `url("${data?.image_url}")`,
    backgroundSize:'cover',
    backgroundPosition:'center',
    backgroundRepeat:'no-repeat',
    height:"200px",
    width:"250px",
    borderRadius:'16px',
    position: 'relative',
    zIndex: '-2',
  }







  return (
    <div className='top-cities-cards'>
      <div style={imageStyle}>
        <div className='banner-overlay'>
          <div className='cities-display'>
               <h1 className='city-name'>{data?.name}</h1>
               <p className='property-count'>{data?.property_count}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CityCards