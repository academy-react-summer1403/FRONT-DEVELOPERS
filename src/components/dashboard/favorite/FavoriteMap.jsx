import React, { useRef, useState } from 'react'
import { IoEyeOutline } from 'react-icons/io5'
import { TbTrash } from 'react-icons/tb'
import { useFavoriteCourse } from '../../../core/services/query/DashboardQuery'
import { deleteCourseFavorite } from '../../../core/services/DashApi'
import FormData from 'form-data'
import { ImageErrore } from '../../ImageErrore'
import DateApi from '../../DateApi'

const FavoriteMap = ({search , category} ) => {
 
  const favoriteCourse = useFavoriteCourse()
  console.log(favoriteCourse)


  const [deleteF , setDeleteF] = useState()
  console.log(deleteF)



  const formData = new FormData()
  formData.append("CourseFavoriteId", deleteF);
  


  const deleteFavorite = deleteCourseFavorite(formData)
  console.log(deleteFavorite)

  console.log("category" , category)

  return (
    <div>

      {category === "بدون ترتیب" ? <>
          {favoriteCourse.data?.favoriteCourseDto?.filter((f)=>{
              return search.toLowerCase()===' ' ? f : f.courseTitle.toLowerCase().includes(search)}).map((item) =>(
                

                <ul  style={{boxShadow:" 0px 1px 1px 0px rgba(0,0,0,0.1)"}}
                className="relative grid grid-cols-6 my-2 rounded-md text-[10px] text-center 
                  text-gray-600 dark:text-white font-medium justify-items-center "
                >
                  <li className='col-1 my-2 flex gap-2'>

                    <form>
                      <button type='button' onClick={()=>setDeleteF(item?.favoriteId)}>
                              <TbTrash className='text-secondary mt-4 w-5 h-5 cursor-pointer ' />   
                      </button>
                    </form>

                    <div>
                        <IoEyeOutline className='text-secondary mt-4 w-5 h-5 cursor-pointer 
                        
                        ' />            
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

      </>:

      <>
        {favoriteCourse.data?.favoriteCourseDto?.filter((i)=>{
            return category.toLowerCase()==="بدون ترتیب" ? i : i.levelName.includes(category)}).map((item) =>(
            
                

              <ul  style={{boxShadow:" 0px 1px 1px 0px rgba(0,0,0,0.1)"}}
              className="relative grid grid-cols-6 my-2 rounded-md text-[10px] text-center 
                text-gray-600 dark:text-white font-medium justify-items-center "
              >
                <li className='col-1 my-2 flex gap-2'>

                  <form>
                    <button type='button' onClick={()=>setDeleteF(item?.favoriteId)}>
                            <TbTrash className='text-secondary mt-4 w-5 h-5 cursor-pointer ' />   
                    </button>
                  </form>

                  <div>
                      <IoEyeOutline className='text-secondary mt-4 w-5 h-5 cursor-pointer 
                      
                      ' />            
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
      </>

         

        

      }
    </div>
  )
}


export default FavoriteMap