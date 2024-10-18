import React, { useState } from 'react'
import Reply from './Reply'
import { useCommentCourse } from '../../../core/services/query/CommentQuery';
import {  deleteComment,    dislikeComment,    likeComment,  postComment } from '../../../core/services/apiComment';

const Comment = ({courseId}) => {


  // const [delet , setDelet] = useState()
  // console.log(delet)

  //   const params ={
  //   CourseCommandId : delet
  // }

  //     const deleteComments = deleteComment(params)
  //     console.log(deleteComments) 



    const GetComment = useCommentCourse(courseId);
    console.log(GetComment.data)


     const onSubmit = async (e) => {
    e.preventDefault();

     const formData = new FormData(e.target);
     formData.append("CourseId", courseId);
     formData.append("Title", Title);
     formData.append("Describe", Describe);


      const addComment = postComment(formData)
      console.log(addComment)
    };


  //   const [reject , setReject] = useState()
  //   console.log(reject)
  
  //   const params = {
  //     CommentCourseId : reject
  //   }

  //   const rejectComments = rejectComment(params)
  //   console.log(rejectComments)


  //  const [accept , setAccept] = useState()
  //  console.log(accept)

  //   const send = {
  //     CommentCourseId : accept
  //   }

  //   const acceptComments = AcceptComment(send)
  //   console.log(acceptComments)

    

  const [like , setLike] = useState()
  console.log(like)

  const likeparams = {
    CourseCommandId : like
  }
  

  const likeComments = likeComment(likeparams)
  console.log(likeComments)


  const dislikeComments = dislikeComment(likeparams)
  console.log(dislikeComments)

    

  return (
    <div className="mt-[15px] ">

    <div className=" relative  w-full  ">
      <div>
        <div className=" w-full h-[37px] mb-[20.5px] ">
        <form onSubmit={(values) => onSubmit(values)}>

           <input type="text" className='w-[300px] h-[30px] border border-black' id='Title' name='Title'/>
            <input type="text" className='w-[300px] h-[30px] border border-black' id='Describe' name='Describe'/>

          <button type='submit'  className="  w-[185px] h-[37px] max-xl:w-[170px] max-xl:h-[37px] rounded-[7px] dark:bg-[#FF8A00] bg-[#00E2DC] flex items-center justify-center  gap-2 ">
            <h3 className="font-normal font-Yekan text-[15px] text-[#005653] dark:text-white">
              ارسال دیدگاه جدید
            </h3>
          </button>
        </form>
           
        </div>

        {
            GetComment.data?.map((item)=>(
            <div className="h-[200px] w-full  flex flex-col border border-black mt-[80px]">
                
                <div className='w-full h-[40%] border  flex flex-col'>

                 <h1 className='w-full h-[30%] '>{item?.author}</h1>
                <h1 className='w-full h-[30%] '>{item?.title}</h1>
                <p className='w-full h-[30%] '></p>

                <div className='w-full h-[20px] flex justify-start'>
                    <button onClick={()=>setReject(item?.id)} className='w-[60px] h-[20px] bg-gray-500'>
                  reject
                </button>
                <button onClick={()=>setAccept(item?.id)} className='w-[60px] h-[20px] bg-green'>
                  Accept
                </button>
                <button onClick={()=>setDelet(item?.courseId)} className='w-[60px] h-[20px] bg-red-500'>
                  delete
                </button>
                <button onClick={()=>setLike(item?.id)} className='w-[60px] h-[20px] bg-red-800'>
                  like
                </button>
                <button onClick={()=>setLike(item?.id)} className='w-[60px] h-[20px] bg-red-800'>
                  dislike
                </button>
                </div>  
              
                </div>

           
                <Reply courseId={courseId}  id={item?.id}/>
            </div>

            ))

        }
      
    

        
                     
      </div>
    </div>
  </div>
  )
}

export default Comment
