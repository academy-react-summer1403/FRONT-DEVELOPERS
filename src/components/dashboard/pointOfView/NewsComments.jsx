import React from 'react'
import { IoEyeOutline } from 'react-icons/io5'
import { TbTrash } from 'react-icons/tb'
import { NavLink } from 'react-router-dom'
import DateApi from '../../DateApi'
import DashPagination from '../DashPagination'


const NewsComments = ({paginatedNewsData, setCurrentNewsPage,totalNewsPages , currentNewsPage}) => {



  return (
    <div>
    {paginatedNewsData.map((item , i) => (
        <ul key={i} style={{boxShadow:" 0px 1px 1px 0px rgba(0,0,0,0.1)"}}
        className="relative grid grid-cols-6 my-2 rounded-md text-[10px] text-center 
          text-gray-600 dark:text-white font-medium justify-items-center "
        >
           <li className='col-1 my-2 flex gap-2'>
            <NavLink>
                <TbTrash className='text-secondary mt-4 w-5 h-5 cursor-pointer 
                
                ' />            
            </NavLink>
            <NavLink>
                <IoEyeOutline className='text-secondary mt-4 w-5 h-5 cursor-pointer 
                
                ' />            
            </NavLink>
            </li> 

            <li className='col-1 my-5'><DateApi dateapi={item.insertDate}/></li>
            <li className="col-1 my-5">{item.accept == true ? "تایید شده" : "تایید نشده"}</li>
            <li className='col-1 my-5'> اخبار </li>
            <li className='col-1 my-5'>{item.courseTitle}</li>

            <li className='col-1 leading-[50px]'>
               #00{i}
            </li>
         
        </ul>
       ))}

    <DashPagination currentPage={currentNewsPage} setCurrentPage={setCurrentNewsPage} totalPages={totalNewsPages}/>

    </div>
  )
}

export default NewsComments
