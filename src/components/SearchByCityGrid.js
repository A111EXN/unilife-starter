import React,{useEffect,useState} from 'react'
import axios from 'axios'
import '../styles/searchbycitygrid.css'
import CityNameCards from './CityNameCards'

function SearchByCityGrid() {

  const [searchCities,setSearchCities]=useState([])


  useEffect(() => {
    axios.get(`https://unilife-server.herokuapp.com/cities`)
    .then(res=>{
     console.log(res.data)
     searchCities(res.data.response)
    })
    .catch(err=>console.log(err))
 }, [])


  return (
    <div className='studentAccomodationPage'>
        <p className='titleSearchByCity'>Search by City</p>
        <div className='SearchGridContainer'>
                    {
                        searchCities?.map(item=>{
                            return <CityNameCards data={item}/>
                        })
                    }
            </div>
    </div>
  )
}

export default SearchByCityGrid