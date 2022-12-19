import React from 'react'
import Banner from '../components/Banner'
import SearchByCityGrid from '../components/SearchByCityGrid'

function StudentAccomodation() {
  return (
    <div>
        <Banner title="Student Accomodation" smallTitle="UniLife have student accomodation available across the UK. Whatever you're after. We can help you find the right student accommodation for you."/>
        <SearchByCityGrid/>
    </div>
  )
}

export default StudentAccomodation