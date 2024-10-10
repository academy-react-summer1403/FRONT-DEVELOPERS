import { useState } from 'react'

// images:
import trash from '../../assets/courses/icons8-trash-can 1.svg'
import fillter from '../../assets/courses/Vector(1).svg'
import AccarFilter from './AccarFilter'


const Filter = () => {



    const [filter, setFilter] = useState([
            {
                id:1,
                name:"تکنولوژی",
    
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
    <div className='shadow-sm shadow-gray-300 outline-none rounded-xl p-4 '>
        <div className="flex p-3 relative 
            rounded-sm rounded-t-lg shadow-sm shadow-gray-400 
            text-gray-900 bg-neutral-200 dark:bg-gray-700/70 dark:text-white"
        >
            <img src={trash} className="h-6 w-6 mr-8 flex-none " />    
            <p className='absolute right-10 '>فیلتر ها</p>                        
            <img src={fillter}  
            className="absolute right-2 top-4" />                    

        </div>
    
        <ul className='relative bg-white
            max-md:flex  
            max-sm:grid'>
            
                    <AccarFilter  filter={filter} toggleAccordeion={toggleAccordeion} />
                    

        
        </ul>


    </div>
  )
}

export default Filter