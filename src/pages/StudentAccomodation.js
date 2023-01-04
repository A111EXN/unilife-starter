import React,{useEffect,useState} from 'react'
import Banner from '../components/Banner'
import SearchByCityGrid from '../components/SearchByCityGrid'
import axios from 'axios'
import CityCards from '../components/CityCards'
import '../styles/searchbycitygrid.css'




function StudentAccomodation() {


const [searchCities,setSearchCities]=useState([])
const [topCities,setTopCities]=useState([])


  useEffect(() => {
  axios.get(`https://unilife-server.herokuapp.com/cities?limit=20&page=1`)
  .then(res=>{
   console.log(res.data)
   setTopCities(res.data.response)
  })
  .catch(err=>console.log(err))
}, [])





  return (
    <div>
        <Banner title="Student Accomodation" smallTitle="UniLife have student accomodation available across the UK. Whatever you're after. We can help you find the right student accommodation for you."/>
       
      <div className='studentAccomodationPage'>
        <p className='titleSearchByCity'>Search by City</p>
            <div className='SearchGridContainer'>
                        {
                           topCities?.map(item=>{
                                return <SearchByCityGrid data={item}/>
                           })
                        }        
            </div>
            </div> 
    </div>
  )
}

export default StudentAccomodation