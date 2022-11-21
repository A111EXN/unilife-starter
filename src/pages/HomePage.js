import React from 'react'
import CompareSection from '../components/CompareSection'
import LastInfoSection from '../components/LastInfoSection'
import Banner from '../components/Banner'
import '../styles/homepage.css'

function HomePage() {
  return (
    <div>
      <div>
        <Banner/>
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
        <CompareSection/>
        <LastInfoSection/>
        </div>
    </div>
    
  )
}

export default HomePage