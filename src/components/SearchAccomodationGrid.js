
import React,{useEffect,useState} from 'react'
import '../styles/searchAccomodationGrid.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import PropertyCard from './PropertyCard'

function SearchAccomodation() {

  const {cityId}=useParams()
  const [cityProperties,setCityProperties]=useState([])

  useEffect(() => {
    axios.get(`https://unilife-server.herokuapp.com/properties/city/${cityId}`)
    .then (res=>{
      console.log(res.data.response)
      setCityProperties(res.data.response)
    })
  }, [])
  

  return (
    <div className='search-accomodation-page'>
         <p className='search-accomodation-title-homes'> {cityId.property_count} homes in {cityId.name}</p>
            <div className='search-accomodation-grid-container'>
                {
                  cityProperties?.map(item=>{
                    return <PropertyCard property={item}/>
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