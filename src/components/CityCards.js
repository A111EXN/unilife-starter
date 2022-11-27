import React from 'react'
import '../styles/cityCards.css'
import Grid from './Grid'

function CityCards({data}) {

  const imageStyle={
    backgroundImage: `url("${data?.image_url}")`,
    backgroundSize:'cover',
    backgroundPosition:'center',
    backgroundRepeat:'no-repeat',
    height:"150px",
    width:"200px",
    borderRadius:'16px',
    position: 'relative',
    zIndex: '-2',
  }







  return (
    <div className='top-cities-cards'>
      <div style={imageStyle}>
        <div className='banner-overlay'>
        <div>
          <h1 className='city-name'>{data?.name}</h1>
          <p className='property-count'>{data?.property_count}</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default CityCards