

import React, { useEffect, useRef, useState } from 'react'
import { IoEyeOutline } from 'react-icons/io5'
import { TbTrash } from 'react-icons/tb'
import { useFavoriteNews } from '../../../core/services/query/DashboardQuery'
import { deleteFavoriteNews } from '../../../core/services/DashApi'
import { ImageErrore } from '../../ImageErrore'
import { Link } from 'react-router-dom'
import DateApi from '../../DateApi'
import NotFound from '../../notFound/NotFound'
import DashPagination from '../DashPagination'

const FavoriteMapNew = ({search}) => {
 
  const favoriteNew = useFavoriteNews()
  console.log(favoriteNew.data)

  
  const handleRemoveFavoriteNews=(deleteFavorite)=>{

    const params={
      deleteEntityId:deleteFavorite
    }

   

  const  deleteFavoriteNew = deleteFavoriteNews(params)
  
  }

  
 // States for Pagination
 const [currentPage, setCurrentPage] = useState(1);
 const itemsPerPage = 5; // Number of items per page

 // Filter Data Based on Search
 const filteredData = favoriteNew.data?.myFavoriteNews?.filter((f) =>
   search.trim() === '' || f.title.toLowerCase().includes(search.toLowerCase())

 );

 // Paginated Data
 const paginatedData = filteredData?.slice(
   (currentPage - 1) * itemsPerPage,
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
          {paginatedData?.map((item) =>(  
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
            <li className='col-1 my-5'><DateApi dateapi={item?.updateDate}/> </li>
            <li className='col-1 my-5'>--</li>
            <li className='col-1 my-5'>{item?.title}</li>
            <li className='col-1'>
                <img
                src={item?.currentImageAddressTumb ? item?.currentImageAddressTumb : <ImageErrore/>}
                onError={ImageErrore}
                alt=""
                className='rounded-full border w-12 h-12 col-1 shadow-md my-1'
                ></img>
            </li>
         
        </ul>
       ))} 

        <DashPagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages}/>

        </>
       )
      }
    </div>
  )
}


export default FavoriteMapNew