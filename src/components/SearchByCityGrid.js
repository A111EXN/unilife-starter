import React,{useEffect,useState} from 'react'
import axios from 'axios'
import '../styles/searchbycitygrid.css'

function SearchByCityGrid() {

  const [searchCities,setSearchCities]=useState([])


  useEffect(() => {
    axios.get(`https://unilife-server.herokuapp.com/cities?limit=20`)
    .then(res=>{
     console.log(res.data)
     setSearchCities(res.data.response)
    })
    .catch(err=>console.log(err))
    console.log(searchCities)
 }, [])


  return (
    <div className='studentAccomodationPage'>
        <p className='titleSearchByCity'>Search by City</p>
        <div className='SearchGridContainer'>
              {
                  searchCities?.map(item=>{
                      return <button className='city-search-buttons'>{item.name}</button>
                   })
              }
        </div>
    </div>
  )
}

export default SearchByCityGrid 