

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
import { HiXCircle } from 'react-icons/hi2';


const FavoriteMapNew = ({search}) => {
 
  const favoriteNews = useFavoriteNews()
  const [favoriteNew, setfavoriteNew] = useState(favoriteNews?.data?.myFavoriteNews || [])
  useEffect(() => {
    if(favoriteNews?.data){
      setfavoriteNew(favoriteNews?.data?.myFavoriteNews)
    }
  }, [favoriteNews?.data])

  
  const handleRemoveFavoriteNews=(deleteFavorite)=>{

    const params={
      deleteEntityId:deleteFavorite
    }
     deleteFavoriteNews(params)
     .then(() => {
      setfavoriteNew(prevData => prevData.filter(item => item?.favoriteId !== deleteFavorite));
    })
  
  }

  
 // States for Pagination
 const [currentPage, setCurrentPage] = useState(1);
 const itemsPerPage = 5; // Number of items per page

 // Filter Data Based on Search
 const filteredData = favoriteNew.filter((f) =>
   search.trim() === '' || f.title.toLowerCase().includes(search.toLowerCase())

 );

 // Paginated Data
 const paginatedData = filteredData?.slice(
   (currentPage - 1) * itemsPerPage,
   currentPage * itemsPerPage
 );

 const totalPages = Math.ceil((filteredData?.length || 0) / itemsPerPage);




  

  
 const [deletmodal, setDeletmodal] = useState()



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
               <button type='button' className='' onClick={() => setDeletmodal(item?.newsId)}>
                       <TbTrash className='text-secondary mt-4 w-5 h-5 cursor-pointer ' />   
               </button>
            </form>
            {/* Delet modal :  */}
                            
            <div className={`${deletmodal == item?.newsId ? "block": "hidden"} fixed left-0 top-0 w-screen h-screen bg-black/70 z-[9999]
                                 backdrop-blur-sm transition-all duration-700`}
                            >
                                <div className='bg-white rounded-lg shadow-lg grid gap-3 p-8 mx-auto w-1/3 mt-40'>
                                    <HiXCircle onClick={()=>setDeletmodal(false)} 
                                        className=' right-4 top-4 w-5 h-5 cursor-pointer text-secondary opacity-100 justify-self-end '
                                    />                                
                                    <p className='dark:text-gray-950 text-[20px] text-center'> آیا میخواهید دوره مورد علاقه را حذف کنید؟ </p>
                                    <button to={"#"} onClick={()=>(handleRemoveFavoriteNews(item?.favoriteId) , setDeletmodal(false))}  className='bg-secondary p-2 rounded-md text-sm w-20 hover:scale-110
                                    transition duration-500 hover:shadow-md mx-auto text-center'>بله</button>
                                </div>
                            </div>

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