import React from 'react'
import { IoEyeOutline } from 'react-icons/io5'
import { TbTrash } from 'react-icons/tb'
import { NavLink } from 'react-router-dom'
import { useReserv } from '../../../core/services/query/DashboardQuery'
import { ImageErrore } from '../../ImageErrore'

const ReserveMap = () => {


  
  const Reserv = useReserv()
  console.log(Reserv)



  return (
    <div>
    {Reserv.data?.map((item) => (
        <ul  style={{boxShadow:" 0px 1px 1px 0px rgba(0,0,0,0.1)"}}
        className={`relative grid grid-cols-7 my-2 rounded-md text-[10px] text-center 
          text-gray-600 dark:text-gray-100 font-medium justify-items-center

        `}>
           <li className='col-1 my-2 flex gap-2'>
            <NavLink>
                <TbTrash className='text-secondary mt-4 w-5 h-5 cursor-pointer 
                
                ' />
                            
            </NavLink>
            <NavLink>
                <IoEyeOutline className='text-primary dark:text-emerald-800 mt-4 w-5 h-5 cursor-pointer 
                
                ' />            
            </NavLink>
            </li> 
  
            <li className='col-1 my-5 text-black dark:text-white'></li>
            <li className='col-1 my-5'></li>
            <li className='col-1 my-5'>{item?.reserverDate}</li>
            <li className='col-1 my-5'>{item?.studentName}</li>
            <li className='col-1 my-5'>{item?.courseName}</li>

            <li className='col-1'>
                <img  alt="" className='rounded-full border w-12 h-12 col-1 shadow-md my-1 leading-[50px]'/>
            </li>
         
        </ul>
       ))} 
    </div>
  )
}


export default ReserveMap