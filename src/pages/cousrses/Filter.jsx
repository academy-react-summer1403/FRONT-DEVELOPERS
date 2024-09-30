import trash from '../../assets/courses/icons8-trash-can 1.svg'
import filter from '../../assets/courses/Vector(1).svg'
import arrow from '../../assets/courses/arrow.svg'
import stars from '../../assets/landing/stars.svg'
import star2 from '../../assets/courses/star2.svg'

import { useState } from 'react'

const Filter = () => {
    const filters =[
        {
            id:1,
            name:"تکنولوژی",
            enName:["boot strap",
                    "react",
                    "java script",
                    ".net core",
                    "tail wind"
            ]
        },
        {
            id:2,
            name:"وظعیت",
            enName:["شروع نشده",
                    "در حال برگذاری",
                    "تمام شده",
            ]
        },
        {
            id:3,
            name: "امتیاز",
            enName:[
                <img src={star2}/>,
                <img src={stars}/>            
            ]
        },
        {
            id:4,
            name:"سطح",
            enName:[
                "سخت",
                "متوسط",
                "اسان",
            ]
        },
        {
            id:5,
            name: "قیمت",
            enName:[ "رایگان",
                     "غیر رایگان"
            ]
        },      
    ]
    const [open, setOpen] = useState();

    const handleOpen = (value) => setOpen(open === value  ? null : value);
    console.log(open)

  return (
    <div className='shadow-sm shadow-gray-300 outline-none rounded-xl p-4'>
    <div className="flex p-3 relative
        rounded-sm rounded-t-lg shadow-sm shadow-gray-400 
        text-gray-900 bg-neutral-200 "
    >
        <img src={trash} className="h-6 w-6 mr-8 flex-none" />    
        <p className='absolute right-10 '>فیلتر ها</p>                        
        <img src={filter}  
        className="absolute right-2 top-4 " />                    

    </div>
    
    <ul>
        {filters.map((data ,index )=>(
           <li key={index}         
           className='group bg-gray-50 p-2 my-4 text-right rounded-md shadow-sm shadow-gray-300'>         
           
                <div className='relative flex flex-row text-right border-b-[1.5px] py-1 cursor-pointer'
                onClick={() => handleOpen(data.id)}
                open={open ===data.id}
                >
                    <img src={arrow}  className={`top-0 ${open? "rotate-180":"rotate-0"} transition duration-500 `} />                 
                    <p  className="absolute right-0 top-0 
                         font-medium ">{data.name}</p>
                </div>
                {open && <div>
                    
                    {data.enName.map((item , index)=>(
                        <div key={index} className="">
                            
                            <label to='checkbox'>{item}</label>
                            <input type='checkbox' name='checkbox' className='ml-2'/>
                        </div>
                    ))}
                </div>}                  
                
           </li> 
        ))}
    </ul>


</div>
  )
}

export default Filter