import React from 'react'
import '../styles/compareSection.css'

function CompareSection() {
  return (
    <div className='back-ground'>
        <p className='header'>Compare all inclusive student homes.</p>
        <div class="flex-container">
            <div style={{flexGrow:'1'}}>
                <img src='https://cdn2.iconfinder.com/data/icons/artificial-intelligence-52/48/bl_1645_Search_seo_magnifier_earth_globe_internet-64.png'/>
                <p>Search</p>
                <p>Find your dream home in the perfect <br/>area near your university</p>
            </div>
            <div style={{flexGrow:'1'}}>
            <img src='https://cdn3.iconfinder.com/data/icons/4web-3/139/compare2-64.png'/>
                <p>Compare</p>
                <p>Compare student accommodation to <br/> find the right home for you</p>
            </div>
            <div style={{flexGrow:'1'}}>
            <img src='https://cdn3.iconfinder.com/data/icons/streamline-icon-set-free-pack/48/Streamline-82-64.png'/>
                <p>Bills Included</p>
                <p>Bills are included in all rent prices. <br/> No hidden fees.</p>
            </div>
        </div>
    </div>
  )
}

export default CompareSection