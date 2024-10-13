import React from 'react'

// image: 


import Offers from './Offers'
import Favorite from './Favorit'
import Podcasts from './Podcasts'

const OfferSection = () => {
    
return(
    <div className='relative col-span-1 pt-[47px]
    '>
        <Offers/>
        <Podcasts/>
        <Favorite/>
    </div>
)
 
}

export default OfferSection