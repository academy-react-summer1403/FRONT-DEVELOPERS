import React, { useEffect, useRef, useState } from 'react'
import { IoEyeOutline } from 'react-icons/io5'
import { TbTrash } from 'react-icons/tb'
import { useFavoriteCourse } from '../../../core/services/query/DashboardQuery'
import { deleteCourseFavorite, deleteFavoriteCourse } from '../../../core/services/DashApi'
import FormData from 'form-data'
import { ImageErrore } from '../../ImageErrore'
import DateApi from '../../DateApi'
// import { Link, useNavigate } from 'react-router-dom'
import NotFound from '../../notFound/NotFound'
import DashPagination from '../DashPagination'
import { NavLink } from 'react-router-dom'


const FavoriteMap = ({search , category} ) => {
 
  
    const favoriteCourse = useFavoriteCourse()


  
  const handleRemoveFavorite = (userFavoriteId) => {


    const CourseFavoriteId=new FormData()
   CourseFavoriteId.append('CourseFavoriteId',userFavoriteId)
    const deleteCourseFavorite=deleteFavoriteCourse(CourseFavoriteId)
    

  }
 
  
   // States for Pagination
   const [currentPage, setCurrentPage] = useState(1);
   const itemsPerPage = 4; // Number of items per page
 
   // Filter Data Based on Search and Category
   const filteredData = favoriteCourse.data?.favoriteCourseDto?.filter((f) => {
     const matchesSearch = search.trim() === '' || f.courseTitle.toLowerCase().includes(search.toLowerCase());
     const matchesCategory = category === 'همه' || f.levelName.includes(category);
     return matchesSearch && matchesCategory;
   });
 
   // Paginated Data
   const paginatedData = filteredData?.slice(
     (currentPage-1) * itemsPerPage,
     currentPage * itemsPerPage
   );
 
   const totalPages = Math.ceil((filteredData?.length || 0) / itemsPerPage);
 


  return (
    <div>
    
      {filteredData?.length === 0 ? (
        <div className="relative w-96 flex mx-auto">
        <NotFound />
      </div>
    ) : (

 <>
       {paginatedData?.map((item , i) => (                        

              <ul  style={{boxShadow:" 0px 1px 1px 0px rgba(0,0,0,0.1)"}}
              className="relative grid grid-cols-6 my-2 rounded-md text-[10px] text-center 
                text-gray-600 dark:text-white font-medium justify-items-center "
              >
                <li className='col-1 my-2 flex gap-2'>

                  <form>
                    <button type='button' onClick={()=>handleRemoveFavorite(item?.favoriteId)}>
                            <TbTrash className='text-secondary mt-4 w-5 h-5 cursor-pointer ' />   
                    </button>
                  </form>

                  <div>
                    <NavLink to={"/courses-detail/" + item?.courseId}> <IoEyeOutline className='text-secondary mt-4 w-5 h-5 cursor-pointer ' />  </NavLink> 
                      
                                
                  </div>
                  </li> 
                  <li className='col-1 my-5'>{item?.teacheName}</li>
                  <li className='col-1 my-5'><DateApi dateapi={item?.lastUpdate}/> </li>
                  <li className='col-1 my-5'>{item?.levelName}</li>
                  <li className='col-1 my-5'>{item?.courseTitle}</li>
                  <li className='col-1'>
                      <img
                      src={" " ? "" : <ImageErrore />}
                      onError={ImageErrore}
                      alt=""
                      className='rounded-full border w-12 h-12 col-1 shadow-md my-1'
                      ></img>
                  </li>
              
              </ul>
          ))}


            {/* Pagination Controls */}
            <DashPagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages}/>

      </>

      
    )

     
         

        

      }
    </div>
  )
}


export default FavoriteMap