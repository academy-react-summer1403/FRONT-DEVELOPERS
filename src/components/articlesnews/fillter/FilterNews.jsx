import React from 'react'

const FilterNews = () => {
    const filter=[
        "filter1","filter2","filter3","filter4",

    ]
    

  return (
    <div className='grid grid-cols-4 gap-4 mx-auto justify-items-center pt-3
             px-5 py-2 dark:bg-gray-700/70 rounded-full shadow-sm shadow-gray-300 outline-none indent-0
               dark:text-white text-gray-900 hover:bg-gray-50 cursor-pointer text-lg
    
    '>
        {filter.map((item ,index)=>(
            <div key={index}>
                  <label to="checkbox">{item}</label>
                <input
                    type="checkbox"
                    name="checkbox"
                    className="ml-2 cursor-pointer z-[800] accent-green"
                    onClick={ "" }
                           
                   
                />
            </div>
        ))}
    </div>
  )
}

export default FilterNews