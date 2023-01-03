import React from 'react'
import '../styles/cityCards.css'
import Grid from './Grid'
import { Link } from 'react-router-dom'


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
    <Link className='top-cities-cards' to={`/SearchAccomodation/${data?._id}`}>
      <div style={imageStyle}>
        <div className='banner-overlay'>
          <div className='cities-display'>
               <h1 className='city-name'>{data?.name}</h1>
               <p className='property-count'>{data?.property_count}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default CityCards