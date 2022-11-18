import React from 'react'
import '../styles/body.css'
import '../assets/person.png'

function Body() {
  return (
    <div className='bottom-page'>
     <div className='right-container'>
      <div>
        <p style={{fontSize:"20px"}}>Best selection</p>
        <p>Best selection of studernt accommodations.<br/> Never been easier to find a home that's <br/> right for you</p>
      </div>
      <div>
        <p style={{fontSize:"20px"}}> Your favorite</p>
        <p>Shortlist your favourite properties and send <br/>enquiries in one click</p>
      </div>
      <div>
        <input placeholder='Search & Compare'/>
      </div>
     </div>
     <div className='left-container'>
        <img src='src\assets\person.png'/>
     </div>
    </div>
  )
}

export default Body