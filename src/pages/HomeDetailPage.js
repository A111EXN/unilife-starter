import React,{useEffect,useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import '../styles/homeDetailPage.css'




function HomeDetailPage() {

    const {propertyId}=useParams()
    const [home,setHome]=useState([])

    useEffect(() => {
        axios.get(`https://unilife-server.herokuapp.com/properties/${propertyId}`)
        .then(res=>{
         console.log(res.data)
         setHome(res.data)
        })
        .catch(err=>console.log(err))
     }, [])





  return (
    <div>
        <div className='picture-and-details-container'>
          <div>
            <div>
            <img className='main-picture' src={home?.images && home?.images[0]}/>
            </div>
            <div>
              <img className='small-pictures' src={home?.images && home?.images[1]}/>
              <img className='small-pictures' src={home?.images && home?.images[2]}/>
              <img className='small-pictures' src={home?.images && home?.images[3]}/>
            </div>
          </div>

          <div className='home-info-container'>
            <div className='home-address'>
              <p>{home?.address?.street}</p>
              <p>{home?.address?.city}</p>
              <p>{home?.address?.postcode}</p>
            </div>
            <div className='home-info-grid-container'>
              <div className="home-grid-item">
                <p>Bedrooms</p>
                {home?.bedroom_count}
              </div>
              <div className="home-grid-item">
                <p>Bathrooms</p>
                {home?.bathroom_count}
              </div>
              <div className="home-grid-item">
                <p>Property Type</p> 
                {home?.property_type}
                </div>
              <div className="home-grid-item">
                <p>Price</p>
                {home?.rent}
                </div>
              <div className="home-grid-item">
                <p>Furnished Type</p>
                {home?.furnished}
                </div>
              <div className="home-grid-item">
                <p>Available From</p>
                {home?.availability}
              </div>
            </div>
              <div>
                <button>Shortlist</button>
                <button>Book Viewing</button>
              </div>
          </div>
        </div>
        <div className='description-price-container'>
          <div className='home-info-description'>
            <p className='description-title'>Description</p>
            <p className='description-text'>{home?.property_description}</p>
          </div>
          <div className='bedroom-prices'>
            <p className='bedroom-title'>Bedroom Prices</p>
            <div className='bedroom-price-grid-container'>
              <div class="bedroom-price-grid"> 
              <p>Bedroom 1</p>
              <p>{home?.bedroom_prices?.bedroom_one}</p>
              </div>
              <div class="bedroom-price-grid"> 
              <p>Bedroom 2</p>
              <p>{home?.bedroom_prices?.bedroom_two}</p>
              </div>
              <div class="bedroom-price-grid"> 
              <p>Bedroom 3</p>
              <p>{home?.bedroom_prices?.bedroom_three}</p>
              </div>
              <div class="bedroom-price-grid"> 
              <p>Bedroom 4</p>
              <p>{home?.bedroom_prices?.bedroom_four}</p>
              </div>
            </div>
          </div>
        </div>
        <div className='key-features-container'>
          <p className='key-features-title'>Key Features</p>
          <li className='key-list'>{home?.key_features?.[0]}</li>
          <li className='key-list'>{home?.key_features?.[1]}</li>
          <li className='key-list'>{home?.key_features?.[2]}</li>
          <li className='key-list'>{home?.key_features?.[3]}</li>
          <li className='key-list'>{home?.key_features?.[4]}</li>
        </div>
    </div>
  )
}

export default HomeDetailPage