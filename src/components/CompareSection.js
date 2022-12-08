import React from 'react'
import '../styles/compareSection.css'

function CompareSection() {
  return (
    <div className='back-ground'>
        <p className='header'>Compare all inclusive student homes.</p>
        <div className="flex-container">
            <div style={{flexGrow:'1'}} className='box'>
                <img className='pic' src='https://cdn2.iconfinder.com/data/icons/artificial-intelligence-52/48/bl_1645_Search_seo_magnifier_earth_globe_internet-64.png'/>
                <h1 style={{fontSize:'20px'}}>Search</h1>
                <p>Find your dream home in the perfect <br/>area near your university</p>
            </div>
            <div style={{flexGrow:'1'}} className='box'>
                <img className='pic' src='https://cdn3.iconfinder.com/data/icons/4web-3/139/compare2-64.png'/>
                <h1 style={{fontSize:'20px'}}>Compare</h1>
                <p>Compare student accommodation to <br/> find the right home for you</p>
            </div>
            <div style={{flexGrow:'1'}} className='box'>
                <img className='pic' src='https://cdn3.iconfinder.com/data/icons/streamline-icon-set-free-pack/48/Streamline-82-64.png'/>
                <h1 style={{fontSize:'20px'}}>Bills Included</h1>
                <p>Bills are included in all rent prices. <br/> No hidden fees.</p>
            </div>
        </div>
    </div>
  )
}

export default CompareSection