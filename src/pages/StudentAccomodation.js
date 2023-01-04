import React,{useEffect,useState} from 'react'
import Banner from '../components/Banner'
import SearchByCityGrid from '../components/SearchByCityGrid'
import axios from 'axios'
import CityCards from '../components/CityCards'



function StudentAccomodation() {


const [searchCities,setSearchCities]=useState([])
const [topCities,setTopCities]=useState([])


  useEffect(() => {
  axios.get(`https://unilife-server.herokuapp.com/cities`)
  .then(res=>{
   console.log(res.data)
   setTopCities(res.data.response)
  })
  .catch(err=>console.log(err))
}, [])





  return (
    <div>
        <Banner title="Student Accomodation" smallTitle="UniLife have student accomodation available across the UK. Whatever you're after. We can help you find the right student accommodation for you."/>
        
                    {
                        topCities?.map(item=>{
                            return <CityCards data={item}/>
                        })
                    }        
        
        <SearchByCityGrid data={item}/>
    </div>
  )
}

export default StudentAccomodation