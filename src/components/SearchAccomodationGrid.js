
import React,{useEffect,useState} from 'react'
import '../styles/searchAccomodationGrid.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import PropertyCard from './PropertyCard'

function SearchAccomodation() {

  const {cityId}=useParams()
  const [cityProperties,setCityProperties]=useState([])
  const [cityName,setCityName]=useState([])
  const [propertyCount,setPropertyCount]=useState([])

  useEffect(() => {
    axios.get(`https://unilife-server.herokuapp.com/properties/city/${cityId}`)
    .then (res=>{
      console.log(res.data)
      setCityProperties(res.data.response)
      setCityName(res.data.city_name)
      setPropertyCount(res.data.total)
    })
  }, [])
  

  return (
    <div className='search-accomodation-page'>
         <p className='search-accomodation-title-homes'> {propertyCount} homes in {cityName}</p>
            <div className='search-accomodation-grid-container'>
                {
                  cityProperties?.map(item=>{
                    return <PropertyCard key={item._id} property={item}/>
                 })
                }
            </div>
         <div  className='search-accomodation-bottom-description'>
              <div className='search-accomodation-bottom-description-left'>
                <p>text</p>
                <p>text</p>
              </div>
              <div className='search-accomodation-bottom-description-right'>
                Picture
              </div>
         </div>
    </div>
  )
}

export default SearchAccomodation