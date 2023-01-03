import React from 'react'
import '../styles/propertyCards.css'

function PropertyCard({property}) {
  return (
    <div className='property-card'>
        <div className='property-card-container'>
            <img className='property-img' src={property?.images[0]}/>
            <div className='property-information'>
                <div className='property-prices'>
                 <p>{property?.rent}</p>     
                    <p>pppw inc bills</p>
                </div>
                <div className='property-rooms'>
                    <p> <img src='https://cdn1.iconfinder.com/data/icons/furniture-line-modern-classy/512/double_bed-256.png'/> = {property?.bedroom_count}</p>

                    <p><img src='https://cdn2.iconfinder.com/data/icons/home-appliances-furnitures/100/bathtub-64.png'/> = {property?.bathroom_count}</p>         
                </div>
            </div>
            <div className='property-location-information'>
                <div className='property-type-furnished'>
                    <p>{property?.property_type}</p>
                    <p>{property?.furnished}</p>
                </div>
                <div className='property-type-furnished'>
                    <p className='property-adress'> <img src='https://cdn0.iconfinder.com/data/icons/education-340/100/Tilda_Icons_1ed_location-64.png'/> {property.address.street},{property.address.postcode}</p>
                </div>
            </div>
            <a className='property-view'>View Home</a>
        </div>                
    </div>
  )
}

export default PropertyCard