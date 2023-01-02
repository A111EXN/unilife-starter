import React from 'react'
import Banner from '../components/Banner'
import '../styles/searchaccomodation.css'
import SearchAccomodationGrid from '../components/SearchAccomodationGrid'

function SearchAccomodation() {
  return (
    <div>
        <Banner title="Search Accomodation " smallTitle="Whatever you're after. we can help you find the right student accomodation for you"/>



        <div className='search-filter-student-accommodation'>
            <div className='filter-container-student-accommodation'>
               <div className='filter-options-student-accommodation'>
                   <div className='search-filter-search-name'>
                      <p>Bedroom</p>
                      <select>
                        <option value="">Any bedroom</option>
                       </select>
                  </div>
                  <div className='search-filter-search-name'>
                      <p>Bathroom</p>
                      <select>
                          <option value="">Any bathroom</option>
                      </select>
                  </div>
                   <div className='search-filter-search-name'>
                       <p>Max Price</p>
                      <select>
                         <option value="">Max Price</option>
                      </select>
                   </div>
                  <div className='search-filter-search-name'>
                       <p>Home type</p>
                      <select>
                         <option value="">Home Type</option>
                     </select>
                   </div>                            
               </div>
            </div>
        </div>

        <SearchAccomodationGrid/>



    </div>
  )
}

export default SearchAccomodation