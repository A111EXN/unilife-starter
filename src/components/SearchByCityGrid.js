import React,{useEffect,useState} from 'react'
import axios from 'axios'
import '../styles/searchbycitygrid.css'
import { Link } from 'react-router-dom'



function SearchByCityGrid({data}) {


  return (
    <div className='studentAccomodationPage'>
        <div className='SearchGridContainer'>
              {
               <Link className='city-search-buttons' to={`/SearchAccomodation/${data?._id}`}>{data.name}</Link>
              }
        </div>
    </div>
  )
}

export default SearchByCityGrid 