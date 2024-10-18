import React from 'react'
import BasketCard from './BasketCard'

const NavbarBasket = () => {
  return (

    <div className='container  max-lg:mb-20 '>

    <div className=' mt-10  max-lg:mt-20 flex flex-wrap gap-5 justify-center'>
        <BasketCard/>
    </div>

    <button className=' rounded-3xl  bg-primary
     text-white w-32 ml-[70%] mt-5 h-10 '> 
      تکمیل فرایند
    </button>
    
    </div>
  )
}

export default NavbarBasket
