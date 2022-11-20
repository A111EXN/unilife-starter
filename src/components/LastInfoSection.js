import React from 'react'
import '../styles/lastInfoSection.css'
import person from '../assets/person.png'



function LastInfoSection() {
  return (
<div>      
  <div> 
    <div className='bottom-page'>
     <div className='right-container'>
      <div>
        <p style={{fontSize:"20px"}}>Best selection</p>
        <div> <p className='comments'>Best selection of studernt accommodations.<br/> Never been easier to find a home that's <br/> right for you</p></div>
      </div>
      <div>
        <p  style={{fontSize:"20px"}}> Your favorite</p>
        <p>Shortlist your favourite properties and send <br/>enquiries in one click</p>
      </div>
      <div>
        <input placeholder='Search & Compare'/>
      </div>
     </div>
     <div className='left-container'>
     <img style={{width:"100%"}} src={person}/>
     </div>
    </div>
  </div>
</div>
  )
}

export default LastInfoSection