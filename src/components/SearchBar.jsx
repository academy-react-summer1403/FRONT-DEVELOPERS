import React from 'react'
import Search from '../assets/landing/Search.svg'

const SearchBar = ({placeholder}) => {
    return (
        <div className='flex flex-row   w-3/4
            max-sm:w-full max-sm:mr-2
            max-md:w-full
            max-lg:w-full
            max-xl:w-3/4'
        >

            <div className="relative top-[29px] left-[70px] bg-orange rounded-full p-4 w-14 h-14 z-40 ">               
              <img src={Search} className="w-full h-full "/>
            </div>

            <input
              id="search"
              name="search"
              type="text"
              placeholder={placeholder}
              className='mx-2 backdrop-blur-sm my-6 border w-full
               h-[65px] rounded-full text-right pr-8 pb-2 
              '
              style={{boxShadow:" 0px 1px 1px 0px rgba(0, 0, 0, 0.2)"}}
              
              onChange={" "}
            />
        </div>
      )
  
}

export default SearchBar