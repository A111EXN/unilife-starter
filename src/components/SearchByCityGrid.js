import React,{useEffect,useState} from 'react'
import axios from 'axios'
import '../styles/searchbycitygrid.css'
import { Link } from 'react-router-dom'


function SearchByCityGrid(data) {

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
                      return <Link className='city-search-buttons' to={`/SearchAccomodation/${data?._id}`}>{item.name}</Link>
                   })
              }
        </div>
    </div>
  )
}

export default SearchByCityGrid 