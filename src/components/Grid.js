import React,{useEffect} from 'react'
import '../styles/grid.css'
import axios from 'axios'

function Grid() {

    useEffect(() => {
        axios.get(`https://unilife-server.herokuapp.com/`)
        .then(res=>{
         console.log(res.data.results)
        })
        .catch(err=>console.log(err))
     }, [])


  return (
    <div>
        <p className='title-second'>Student accommodation in our top cities</p>

            <div className='grid-container'>
                <div>
                    hi
                </div>
            </div>
    </div>

  )
}

export default Grid