import React, { useState } from 'react'
import arrow from "../../assets/courses/arrow.svg";
import RangeFilter from './RangeFilter';





const RangeAccar = ({Range , toggleAccordeionRange}) => {

   const [value , setValue] = useState(0) 
   console.log(value)




  return (
    <div className='max-sm:w-full '>
            {Range.map((data ,index )=>(

            <li key={index}         
            className={`relative group bg-gray-50 dark:bg-gray-700 p-2 my-4 text-right rounded-md shadow-sm  shadow-gray-300 
            max-md:m-2 max-md:px-4 max-md:${data.isOpen ? "h-2":"h-12"}
            `}
            >         
            
                    <div className='relative flex flex-row text-right border-b-[1.5px] py-2 cursor-pointer'
                        onClick={()=>toggleAccordeionRange(data.id)}
                    >
                        <img src={arrow}  className={`top-0 ${data.isOpen? "rotate-180":"rotate-0"} transition duration-500 `} />                 
                        <p  className="absolute right-0 top-0 font-medium 
                             max-md:ml-2 max-sm:absolute  
                          "
                        >{data.name}</p>
                    </div>
                    {data.isOpen && <div>

                      <h1>{value}</h1>
                        
                        <RangeFilter min={0} max={500} value={value} onChange={setValue} bufferd={30}/>
                    

                    </div>}                  
                    
            </li> 
            ))}

    </div>
  )
}

export default RangeAccar
