import { useState } from 'react'
import arrow from "../assets/courses/arrow.svg"


const Pagination = () => {
    const num=[1,2,"...",8,9];
    const [color, setColor] = useState('')
    const handelolor =()=>{

    }

    return (
        <div className='absolute bottom-0 left-[29%] flex flex-row justify-self-center'>
            <button className='shadow-sm shadow-gray-400 outline-none indent-1 cursor-pointer
             m-1 pt-1 pl-[5px] w-7 h-7 rounded-full text-sm '>
                <img src={arrow} className='rotate-[-90deg]'/>
            </button>
            <div className='flex flex-row' >
                {num.map((num)=>(
                    <div key={num}
                        className={`${color} shadow-sm shadow-gray-400 outline-none cursor-pointer hover:bg-secondary hover:text-white
                        indent-1 m-1 pt-1 pl-[6px] w-7 h-7 rounded-full text-sm `}
                       onClick={handelolor}
                    >
                        {num}
                    </div>
                ))}
            </div>
            <button className='shadow-sm shadow-gray-400 outline-none cursor-pointer
                indent-1 m-1 pt-1 pl-[6px] w-7 h-7 rounded-full text-sm '>
            <img src={arrow} className='rotate-90'/>
            </button>
        </div>
      )
}

export default Pagination