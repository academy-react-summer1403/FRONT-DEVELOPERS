import React, { useState } from 'react'
import { IoEyeOutline } from 'react-icons/io5'
import { TbTrash } from 'react-icons/tb'
import { NavLink } from 'react-router-dom'
import DateApi from '../../DateApi'
import DashPagination from '../DashPagination'
import { HiXCircle } from 'react-icons/hi2'


const CourseComments = ({paginatedData , setCurrentCoursePage , totalCoursePages ,currentCoursePage , HandleDeleteSubmit}) => {


  const [deletmodal, setDeletmodal] = useState()
  console.log(deletmodal)

  return (
    <div>
    {paginatedData.map((item , i) => (
        <ul key={i} style={{boxShadow:" 0px 1px 1px 0px rgba(0,0,0,0.1)"}}
        className="relative grid grid-cols-6 my-2 rounded-md text-[10px] text-center 
          text-gray-600 dark:text-white font-medium justify-items-center "
        >
           <li className='col-1 my-2 flex gap-2'>
            <div>
                <TbTrash onClick={()=>setDeletmodal(item?.commentId)} className='text-secondary mt-4 w-5 h-5 cursor-pointer 
                  
                ' />            
            </div>
            {/* Delet modal :  */}
                            
            <div className={`${deletmodal == item?.commentId ? "block": "hidden"} fixed left-0 top-0 w-screen h-screen bg-black/70 z-[9999]
                                 backdrop-blur-sm transition-all duration-700`}
            >
                    <div className='bg-white rounded-lg shadow-lg grid gap-3 p-8 mx-auto w-1/3 mt-40'>
                      <HiXCircle onClick={()=>setDeletmodal(false)} 
                        className=' right-4 top-4 w-5 h-5 cursor-pointer text-secondary opacity-100 justify-self-end '
                      />                                
                      <p className='dark:text-gray-950 text-[20px] text-center'> آیا میخواهید دیگاه را حذف کنید؟ </p>
                      <button to={"#"} onClick={()=>(HandleDeleteSubmit(item.commentId) , setDeletmodal(false))}  className='bg-secondary p-2 rounded-md text-sm w-20 hover:scale-110
                        transition duration-500 hover:shadow-md mx-auto text-center'>بله</button>
                    </div>
            </div>

            <NavLink to={`/courses-detail/${item?.courseId}`}>
                <IoEyeOutline className='text-secondary mt-4 w-5 h-5 cursor-pointer 
                
                ' />            
            </NavLink>
            </li> 

            <li className='col-1 my-5'><DateApi dateapi={item.insertDate}/></li>
            <li className="col-1 my-5">{item.accept == true ? "تایید شده" : "تایید نشده"}</li>
            <li className='col-1 my-5'>دوره ها</li>
            <li className='col-1 my-5'>{item.courseTitle}</li>

            <li className='col-1 leading-[50px]'>
              #00{i}
            </li>
         
        </ul>
       ))}


<DashPagination currentPage={currentCoursePage} setCurrentPage={setCurrentCoursePage} totalPages={totalCoursePages}/>

    </div>
  )
}

export default CourseComments
