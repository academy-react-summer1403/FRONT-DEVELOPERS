import React, { useState } from 'react'
import { HiXCircle } from 'react-icons/hi2';
import { usePostReplyComment } from '../../../core/services/mutation/DetailsMutation';

const AddReplyCourse = ({comentdiv ,setCommentdiv,Id ,commentId}) => {


   //addReplyAPI : 
   const AddReply = usePostReplyComment()


    const handlePostCommentCourse = async(e)=>{

        e.preventDefault();

        const formData = new FormData(e.target);
        formData.append("CommentId",commentId );
        formData.append("CourseId", Id,);
        formData.append("Title", e.target.Title.value);
        formData.append("Describe", e.target.Describe.value);
       
        if(formData){
            console.log("formData :" , formData)
            AddReply.mutate(formData)
        }
    }


  return (
    <div className={`${comentdiv ===commentId ? "block" : "hidden"} p-5 border border-gray-300  dark:bg-slate-600 bg-[#e2e2e2ee] w-[90%]  rounded-3xl z-50 top-14 absolute `}>
        <HiXCircle onClick={()=>setCommentdiv(false)} 
            className='absolute right-4 top-4 w-7 h-7 cursor-pointer text-secondary opacity-100 justify-self-end '
        /> 
        <form 
           onSubmit={(values) => handlePostCommentCourse(values)}              
        >
            <div className=" w-[500px] grid gap-2  max-xl:w-3/4  m-auto mt-6">
                <input type="text" placeholder={"عنوان"}  
                className='w-[100%] h-12 dark:bg-slate-800 border rounded-3xl px-3  outline-none' id='Title' name='Title'/>
                 <input type="text" placeholder={"نظر خود را وارد کنید"}  
                className='w-[100%] h-12 dark:bg-slate-800 border rounded-3xl px-3  outline-none' id='Describe' name='Describe'/>
           </div>

           <button type="submit" disabled={AddReply.isPending} value={AddReply.isPending ? "... در حال ارسال ": "افزودن نظر جدید"} className="bg-primary dark:bg-secondary font-Yekan text-darkgreen 
                dark:text-white rounded-[30px] flex mx-auto max-xl:grid leading-8  pl-5
                w-[150px] h-[35px] mt-7 "
            >
                 {AddReply.isPending ? "... در حال ارسال ": "افزودن ریپلای جدید"}
            </button>
        </form>                 
                        
    </div>
  )
}

export default AddReplyCourse
