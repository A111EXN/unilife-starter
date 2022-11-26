import React from 'react'
import CompareSection from '../components/CompareSection'
import LastInfoSection from '../components/LastInfoSection'
import Banner from '../components/Banner'
import Grid from '../components/Grid'
import CityCards from '../components/CityCards'
import '../styles/homepage.css'


function HomePage() {
  return (
    <div>
      <div>
        <Banner title="Find student homes with bills included" smallTitle=" A simple and faster way to search for student accommodation"/>
        <div className='filter-container'>
          <div className='filter-options'>
            <div>
             <select>
               <option value="">Search by city</option>
             </select>
             </div>
             <div>
             <select>
               <option value="">Any bedroom</option>
             </select>
             </div>
            <div><button>Find Homes</button></div>
           </div>
          </div>
        <Grid/>
        <CompareSection/>
        <LastInfoSection/>
        </div>
    </div>
    
  )
}

export default HomePage