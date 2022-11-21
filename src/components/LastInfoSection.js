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
      <div className='icon'>
       <img src='https://cdn1.iconfinder.com/data/icons/home-real-estate-2/512/N_F009_10_KnowledgeArtboard_1_copy_4-64.png'/>
       <p style={{fontSize:"20px"}}>Best selection</p>
      </div>
       <div> <p className='comments'>Best selection of studernt accommodations.<br/> Never been easier to find a home that's <br/> right for you</p></div>
      </div>
      <div>
        <div className='icon'>
          <img src='https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-heart-outline-64.png'/>
          <p style={{fontSize:"20px"}}> Your favorite</p>
        </div>
        <p>Shortlist your favourite properties and send <br/>enquiries in one click</p>
      </div>
      <div>
        <button>Search & Compare</button>
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