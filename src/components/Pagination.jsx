// import { useState } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';


const Pagination = ({nextPage , lastPage}) => {
    const num=[1,2,"...",8,9];
    
    return (
        <div className='relative bottom-0 mx-auto flex flex-row justify-center mt-[50px]
            max-md:left-12 
        '>
            <button onClick={lastPage} 
            className='shadow-sm shadow-gray-400 outline-none indent-1 cursor-pointer transition duration-500
             m-1  pl-[6px] w-7 h-7 rounded-full text-sm hover:bg-secondary text-gray-500 dark:text-white'>
                <IoIosArrowBack />
            </button>
            <div className='flex flex-row' >
                {num.map((num)=>(
                    <div key={num}
                        className="shadow-sm shadow-gray-400 outline-none cursor-pointer hover:bg-secondary 
                        indent-1 m-1 pt-1 pl-[6px] w-7 h-7 rounded-full text-sm
                        transition duration-500
                        "
                      
                    >
                        {num}
                    </div>
                ))}
            </div>
            <button onClick={nextPage} 
            className='shadow-sm shadow-gray-400 outline-none cursor-pointer text-gray-500 dark:text-white
                indent-1 m-1 pl-[6px] w-7 h-7 rounded-full text-sm hover:bg-secondary transition duration-500'>
            <IoIosArrowForward />
            </button>
        </div>
      )
}

export default Pagination