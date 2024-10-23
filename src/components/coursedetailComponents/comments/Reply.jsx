import React, { useState } from 'react'
import { useReplyCourse } from '../../../core/services/query/CommentQuery'
import { replyComment } from '../../../core/services/apiComment'
import Commentdiv from './commentdiv'

const Reply = ({id , useId,showMore,setCommentdiv1,comentdiv1}) => {


    console.log(id)

   const Reply = useReplyCourse(id , useId)
   console.log(Reply?.data)


   const onSubmit = async (e) => {
    e.preventDefault();

     const formData = new FormData(e.target);
     formData.append("CourseId", courseId);
     formData.append("CommentId", id);
     formData.append("Title", Title);
     formData.append("Describe", Describe);


      const replyAddComment = replyComment(formData)
      console.log(replyAddComment)
    };
 


  return (
    <div className={` w-full  ${
      showMore? "h-[150px] overflow-hidden" : "h-[]"
    }`}>
    {
        Reply.data?.map((item)=>(

 
       <div className=' bg-[#ECECEC] dark:bg-slate-900  px-5 h-[150px] mb-3  rounded-[10px]  w-full flex  flex-wrap'>  
       <div className=' border-b w-full justify-between h-[80px] flex items-center'>

<div  className='  gap-3 flex items-center justify-between'>
<svg onClick={()=>setCommentdiv1(true)} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.73572 0.264172C6.86446 0.393079 6.93678 0.567817 6.93678 0.750005C6.93678 0.932193 6.86446 1.10693 6.73572 1.23584L2.40905 5.5625H11.7499C13.3909 5.5625 14.9647 6.2144 16.1251 7.37478C17.2855 8.53516 17.9374 10.109 17.9374 11.75C17.9374 13.391 17.2855 14.9648 16.1251 16.1252C14.9647 17.2856 13.3909 17.9375 11.7499 17.9375H8.99988C8.81755 17.9375 8.64268 17.8651 8.51375 17.7361C8.38482 17.6072 8.31238 17.4323 8.31238 17.25C8.31238 17.0677 8.38482 16.8928 8.51375 16.7639C8.64268 16.6349 8.81755 16.5625 8.99988 16.5625H11.7499C12.3819 16.5625 13.0077 16.438 13.5915 16.1962C14.1754 15.9543 14.706 15.5998 15.1528 15.153C15.5997 14.7061 15.9542 14.1755 16.1961 13.5917C16.4379 13.0078 16.5624 12.382 16.5624 11.75C16.5624 11.118 16.4379 10.4922 16.1961 9.90834C15.9542 9.32446 15.5997 8.79393 15.1528 8.34705C14.706 7.90017 14.1754 7.54569 13.5915 7.30383C13.0077 7.06198 12.3819 6.9375 11.7499 6.9375H2.40905L6.73572 11.2642C6.80326 11.3271 6.85744 11.403 6.89502 11.4873C6.93259 11.5717 6.9528 11.6627 6.95443 11.755C6.95605 11.8473 6.93907 11.939 6.9045 12.0246C6.86992 12.1102 6.81845 12.188 6.75317 12.2533C6.68788 12.3186 6.61012 12.37 6.52451 12.4046C6.43891 12.4392 6.34722 12.4562 6.2549 12.4545C6.16259 12.4529 6.07156 12.4327 5.98722 12.3951C5.90289 12.3576 5.82699 12.3034 5.76405 12.2358L0.26405 6.73584C0.135304 6.60693 0.0629883 6.43219 0.0629883 6.25C0.0629883 6.06782 0.135304 5.89308 0.26405 5.76417L5.76405 0.264172C5.89296 0.135426 6.06769 0.0631104 6.24988 0.0631104C6.43207 0.0631104 6.60681 0.135426 6.73572 0.264172Z" fill="#01B4AF"/>
</svg>
<h3  onClick={()=>setLike(item?.id)} className=' like flex items-center gap-2'>
<svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.08025 8.39587C5.81909 8.39587 6.4855 7.98704 6.942 7.40587C7.65357 6.49802 8.54682 5.74871 9.56459 5.20587C10.2273 4.85387 10.8021 4.32954 11.0798 3.63379C11.2749 3.14635 11.3751 2.62615 11.375 2.10112V1.52087C11.375 1.33854 11.4474 1.16367 11.5764 1.03474C11.7053 0.905807 11.8802 0.833374 12.0625 0.833374C12.6095 0.833374 13.1341 1.05067 13.5209 1.43747C13.9077 1.82426 14.125 2.34887 14.125 2.89587C14.125 3.95187 13.8867 4.95196 13.4623 5.84571C13.2184 6.35721 13.5603 7.02087 14.1268 7.02087M14.1268 7.02087H16.9923C17.9328 7.02087 18.7753 7.65704 18.8752 8.59296C18.9164 8.97979 18.9375 9.37212 18.9375 9.77087C18.9413 12.2792 18.0841 14.7128 16.5093 16.6651C16.1536 17.107 15.6045 17.3334 15.038 17.3334H11.3567C10.9139 17.3334 10.473 17.2619 10.0523 17.1225L7.19775 16.1692C6.7771 16.0293 6.33665 15.9581 5.89334 15.9584H4.412M14.1268 7.02087H12.0625M4.412 15.9584C4.48809 16.1463 4.57059 16.3296 4.6595 16.5102C4.84009 16.8769 4.588 17.3334 4.18009 17.3334H3.34775C2.53284 17.3334 1.7775 16.8585 1.54009 16.0794C1.22259 15.0373 1.06164 13.9539 1.0625 12.8646C1.0625 11.441 1.33292 10.0816 1.82425 8.83312C2.10475 8.12362 2.81975 7.70837 3.58334 7.70837H4.54859C4.98125 7.70837 5.2315 8.21804 5.00692 8.58837C4.22399 9.87716 3.81106 11.3567 3.81342 12.8646C3.81342 13.9591 4.02609 15.0032 4.41292 15.9584H4.412Z" stroke="#D47300" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

{item?.likeCount}</h3>
<h3 onClick={()=>setLike(item?.id)}  className=' like flex items-center gap-2'>            
  <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.87317 11.9791H3.00767C2.06717 11.9791 1.22475 11.343 1.12483 10.407C1.08324 10.0158 1.06243 9.62259 1.0625 9.22913C1.0625 6.61846 1.97183 4.22046 3.49075 2.33488C3.84642 1.89304 4.3955 1.66663 4.962 1.66663H8.64333C9.08664 1.66636 9.5271 1.73755 9.94775 1.87746L12.8023 2.83079C13.2229 2.97071 13.6634 3.0419 14.1067 3.04163H15.2928M5.87317 11.9791C6.43967 11.9791 6.78158 12.6428 6.53775 13.1543C6.09984 14.0759 5.8734 15.0838 5.875 16.1041C5.875 16.6511 6.0923 17.1757 6.47909 17.5625C6.86589 17.9493 7.39049 18.1666 7.9375 18.1666C8.11984 18.1666 8.2947 18.0942 8.42364 17.9653C8.55257 17.8363 8.625 17.6615 8.625 17.4791V16.8989C8.625 16.3736 8.72583 15.8539 8.92017 15.3662C9.19883 14.6695 9.77267 14.147 10.4354 13.7941C11.4529 13.2512 12.3458 12.5019 13.0571 11.5941C13.5136 11.013 14.1809 10.6041 14.9198 10.6041H15.2717M5.87317 11.9791H7.89167M15.2928 3.04163C15.302 3.08746 15.3185 3.13329 15.3396 3.17729C15.8832 4.27729 16.1875 5.51479 16.1875 6.82288C16.1875 8.18596 15.8575 9.47204 15.2717 10.6041M15.2928 3.04163C15.2232 2.70704 15.4606 2.35413 15.8199 2.35413H16.6523C17.4672 2.35413 18.2225 2.82896 18.4599 3.60813C18.7707 4.62563 18.9375 5.70454 18.9375 6.82288C18.9375 8.24646 18.6671 9.60588 18.1758 10.8544C17.8953 11.5639 17.1802 11.9791 16.4176 11.9791H15.4523C15.0197 11.9791 14.7694 11.4695 14.994 11.0991C15.0923 10.9374 15.1849 10.7723 15.2717 10.6041" stroke="#D47300" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>  {item?.disslikeCount} </h3>





 
   


  </div>


        <div className='  flex items-center'>  
          
      
        <div className="text-right">
              <h3 className=" commentname  max-lg:text-[12px]   max-lg:line-clamp-1 max-md:text-[15px]  max-md:line-clamp-none  ">
                {" "}
                {item?.author}
              </h3>
              <h4 className=" datecomment ">{item?.insertDate}</h4>
            </div>

       

          <img className=' profile' src={item?.pictureAddress} alt="" />
  </div>


 
      </div>



      <p className='w-full  min-h-[40px]  text-right py-2 px-5 comment text-[15px] '>{item?.describe}</p>
                      
                
                </div>
  
        
    
        ))

    }    
    <Commentdiv comentdiv={comentdiv1} setCommentdiv={setCommentdiv1} holder='add reply'/>
   
</div>
      
  )
}

export default Reply
  {/* <form onSubmit={(values) => onSubmit(values)} className='flex'> */}
                {/* <input type="text" id='Title' name='Title' className="w-[100px] h-[20px] border border-red-500"/>
                <input type="text" id='Describe' name='Describe' className='w-[100px] h-[20px] border border-red-500'/>
            <button type='submit' className='bg-red-300'>
                add reply
            </button> */}
            {/* </form> */}
