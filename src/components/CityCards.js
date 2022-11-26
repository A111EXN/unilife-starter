import React from 'react'
import '../styles/cityCards.css'
import Grid from './Grid'

function CityCards({data}) {

  const imageStyle={
    backgroundImage: `url("https://unilife-server.herokuapp.com/cities/${data?.image_url}")`,
    backgroundSize:'cover',
    backgroundPosition:'center',
    backgroundRepeat:'no-repeat',
    height:"100px",
    width:"100px",
  }







  return (
    <div>
      <div style={imageStyle}></div>
        <p>{data.name}</p>
    </div>
  )
}

export default CityCards