import trash from '../../assets/courses/icons8-trash-can 1.svg'
import fillter from '../../assets/courses/Vector(1).svg'
import arrow from '../../assets/courses/arrow.svg'
import stars from '../../assets/landing/stars.svg'
import star2 from '../../assets/courses/star2.svg'

import { useState } from 'react'

const Filter = () => {
    const [filter, setFilter] = useState([
            {
                id:1,
                name:"تکنولوژی",
                enName:["boot strap",
                        "react",
                        "java script",
                        ".net core",
                        "tail wind",
                ],

                isOpen : false,
            },
            {
                id:2,
                name:"وظعیت",
                enName:["شروع نشده",
                        "در حال برگذاری",
                        "تمام شده",
                ],
                isOpen : false,

            },
            {
                id:3,
                name: "امتیاز",
                enName:[
                    <img src={star2}/>,
                    <img src={stars}/>            
                ],
                isOpen : false,

            },
            {
                id:4,
                name:"سطح",
                enName:[
                    "سخت",
                    "متوسط",
                    "اسان",
                ],
                isOpen : false,

            },
            {
                id:5,
                name: "قیمت",
                enName:[ "رایگان",
                         "غیر رایگان"
                ],
                isOpen : false,
                
            },      
        ]

    );

    const toggleAccordeion = (accordionkey) =>{
        const updateAccordions = filter.map((accrdion)=>{
            if(accrdion.id === accordionkey){
                return{...accrdion,isOpen : !accrdion.isOpen};
            }
            else{return{...accrdion}}
        });

        setFilter(updateAccordions);
    } 

  return (
    <div className='shadow-sm shadow-gray-300 outline-none rounded-xl p-4'>
        <div className="flex p-3 relative
            rounded-sm rounded-t-lg shadow-sm shadow-gray-400 
            text-gray-900 bg-neutral-200 "
        >
            <img src={trash} className="h-6 w-6 mr-8 flex-none" />    
            <p className='absolute right-10 '>فیلتر ها</p>                        
            <img src={fillter}  
            className="absolute right-2 top-4 " />                    

        </div>
    
        <ul className='relative
            max-md:flex  
            max-sm:grid'>
            {filter.map((data ,index )=>(
            <li key={index}         
            className={`relative group bg-gray-50 p-2 my-4 text-right rounded-md shadow-sm shadow-gray-300
            max-md:m-2 max-md:px-4 max-md:${data.isOpen ? "h-2":"h-12"}
            `}
            >         
            
                    <div className='relative flex flex-row text-right border-b-[1.5px] py-1 cursor-pointer'
                        onClick={()=>toggleAccordeion(data.id)}
                    >
                        <img src={arrow}  className={`top-0 ${data.isOpen? "rotate-180":"rotate-0"} transition duration-500 `} />                 
                        <p  className="absolute right-0 top-0 font-medium 
                            max-md:relative  max-md:ml-2
                            max-sm:absolute"
                        >{data.name}</p>
                    </div>
                    {data.isOpen && <div>
                        
                        {data.enName.map((item , index)=>(
                            <div key={index} className="z-40 relative">
                                
                                <label to='checkbox'>{item}</label>
                                <input type='checkbox' name='checkbox' className='ml-2 cursor-pointer z-[800]'/>
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