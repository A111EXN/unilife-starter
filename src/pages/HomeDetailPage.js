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
              <div class="home-grid-item">
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
    </div>
  )
}

export default HomeDetailPage