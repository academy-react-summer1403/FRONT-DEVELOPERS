

import React, { useEffect, useRef, useState } from 'react'
import { IoEyeOutline } from 'react-icons/io5'
import { TbTrash } from 'react-icons/tb'
import { useFavoriteCourse, useFavoriteNews } from '../../../core/services/query/DashboardQuery'
import { deleteCourseFavorite, deleteFavoriteCourse, deleteFavoriteNews } from '../../../core/services/DashApi'
import FormData from 'form-data'
import { ImageErrore } from '../../ImageErrore'
import { Link } from 'react-router-dom'

const FavoriteMapNew = () => {
 
  const favoriteNew = useFavoriteNews()
  // console.log(favoriteNew.data?.myFavoriteNews)


  // const [save,setSave]=useState(false)

  
  


  const handleRemoveFavoriteNews=(deleteFavorite)=>{

    const params={
      deleteEntityId:deleteFavorite
    }

    console.log(deleteFavorite)
   

  const  deleteFavoriteNew = deleteFavoriteNews(params)
  console.log(deleteFavoriteNew)
  
  }

  





  




  return (
    <div>
    {favoriteNew.data?.myFavoriteNews?.map((item) => (
        <ul  style={{boxShadow:" 0px 1px 1px 0px rgba(0,0,0,0.1)"}}
        className="relative grid grid-cols-6 my-2 rounded-md text-[10px] text-center 
          text-gray-600 dark:text-white font-medium justify-items-center "
        >
           <li className='col-1 my-2 flex gap-2'>

            <form>
               <button type='button' className='' onClick={()=>handleRemoveFavoriteNews(item?.favoriteId)}>
                       <TbTrash className='text-secondary mt-4 w-5 h-5 cursor-pointer ' />   
               </button>
            </form>

            <div>
               <Link to={"/article-detail/"+item?.newsId}> <IoEyeOutline className='text-secondary mt-4 w-5 h-5 cursor-pointer' /> </Link>
                
                            
            </div>
            </li> 
            <li className='col-1 my-5'>--</li>
            <li className='col-1 my-5'>{item?.updateDate}</li>
            <li className='col-1 my-5'>--</li>
            <li className='col-1 my-5'>{item?.title}</li>
            <li className='col-1'>
                <img
                src={item?.currentImageAddressTumb}
                onError={ImageErrore}
                alt=""
                className='rounded-full border w-12 h-12 col-1 shadow-md my-1'
                ></img>
            </li>
         
        </ul>
       ))} 
    </div>
  )
}


export default FavoriteMapNew