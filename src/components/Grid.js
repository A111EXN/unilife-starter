import React,{useEffect,useState} from 'react'
import '../styles/grid.css'
import axios from 'axios'
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


  return (
    <div>
        <p className='title-second'>Student accommodation in our top cities</p>
            <div className='grid-container'>
                <div>
                    {
                        topCities?.map(item=>{
                            return <CityCards data={item}/>
                        })
                    }
                </div>
            </div>
    </div>

  )
}

export default Grid