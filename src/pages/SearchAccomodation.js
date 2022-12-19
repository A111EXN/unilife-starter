import React from 'react'
import Banner from '../components/Banner'
import '../styles/searchaccomodation.css'

function SearchAccomodation() {
  return (
    <div>
        <Banner title="Search Accomodation " smallTitle="Whatever you're after. we can help you find the right student accomodation for you"/>



        <div className='search-filter-student-accommodation'>
                      <div className='filter-container-student-accommodation'>
                        <div className='filter-options-student-accommodation'>
                            <div>
                               <select>
                                  <option value="">Any bedroom</option>
                                </select>
                            </div>
                            <div>
                                <select>
                                   <option value="">Any bathroom</option>
                                </select>
                            </div>
                            <div>
                                <select>
                                   <option value="">Max Price</option>
                                </select>
                            </div>
                            <div>
                                <select>
                                   <option value="">Home Type</option>
                                </select>
                            </div>                            
                        </div>
                      </div>
               </div>





    </div>
  )
}

export default SearchAccomodation