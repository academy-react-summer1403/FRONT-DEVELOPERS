import React from 'react'
import { useReplyCourse } from '../../../core/services/query/CommentQuery'
import { replyComment } from '../../../core/services/apiComment'

const Reply = ({id , courseId}) => {


    console.log(id)

   const Reply = useReplyCourse(id , courseId)
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
    <div className="mt-[15px] ">
        <form onSubmit={(values) => onSubmit(values)} className='flex'>
                <input type="text" id='Title' name='Title' className="w-[100px] h-[20px] border border-red-500"/>
                <input type="text" id='Describe' name='Describe' className='w-[100px] h-[20px] border border-red-500'/>
            <button type='submit' className='bg-red-300'>
                add reply
            </button>
            </form>

    {
        Reply.data?.map((item)=>(

     <div className=" relative  w-full bg-red-500">
        <div className='bg-slate-600 w-full h-full flex flex-col'>
                <h1 className='border border-red-400 w-full h-[30%]'></h1>
                <h1 className='border border-red-400 w-full h-[30%]'></h1>
                <h1 className='border border-red-400 w-full h-[30%]'></h1>

        </div>
     </div>
        ))

    }    
   
  </div>
  )
}

export default Reply
