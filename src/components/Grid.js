import React,{useEffect,useState} from 'react'
import '../styles/grid.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
import CityCards from './CityCards'

function Grid() {
  
    const [topCities,setTopCities]=useState([])

    useEffect(() => {
        axios.get(`https://unilife-server.herokuapp.com/cities`)
        .then(res=>{
         console.log(res.data)
         setTopCities(res.data.response)
        })
        .catch(err=>console.log(err))
     }, [])

     const [cityId, setCityId]=useState('')

  return (
    <div className='grid-parent'>
        <p className='title-second'>Student accommodation in our top cities</p>
            <div className='grid-container'>
                    {
                        topCities?.map(item=>{
                            return <CityCards data={item}/>
                        })
                    }
            </div>
        <Link className='button-see-cities' to='/StudentAccomodation'>See All Cities</Link>
    </div>

  )
}
    
export default Grid