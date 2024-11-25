import React from 'react'
import { HiXCircle } from 'react-icons/hi2';
import { usePostCommentCourse} from '../../../core/services/mutation/DetailsMutation';
import { useForm } from 'react-hook-form';

const CommentdivCourse = ({comentdiv ,setCommentdiv,holder,Id }) => {

    const CommentCourse = usePostCommentCourse()
    const handlePostCommentCourse = async(e)=>{

        e.preventDefault();

        const formData = new FormData(e.target);
        formData.append("CourseId", Id,);
        formData.append("Title", e.target.Title.value);
        formData.append("Describe",  e.target.Describe.value);
        if(formData){
            console.log(formData)
            CommentCourse.mutate(formData)
        }
    }


  return (
    <div className={`${comentdiv ===true ? "block" : "hidden"} p-5 border border-gray-300  dark:bg-slate-600 bg-[#e2e2e2ee] max-xl:w-3/4  rounded-3xl z-50 mt-2 relative `}>
        <HiXCircle onClick={()=>setCommentdiv(false)} 
            className='absolute right-4 top-4 w-7 h-7 cursor-pointer text-secondary opacity-100 justify-self-end '
        /> 
        <form 
           onSubmit={(values) => handlePostCommentCourse(values)}              
        >
            <div className=" w-[500px] grid gap-2  max-xl:w-3/4  m-auto mt-6">
                <input type="text" placeholder={"عنوان"}  className='w-[100%] h-12 dark:bg-slate-800 border rounded-3xl px-3  outline-none' id='Title' name='Title'/>
               <input type="text" placeholder={holder} className="w-[100%] h-12 dark:bg-slate-800 border rounded-3xl 
               px-3  outline-none" id='Describe' name='Describe'  />
           </div>

           <button type="submit" disabled={CommentCourse.isPending} value={CommentCourse.isPending ? "... در حال ارسال ": "افزودن نظر جدید"} className="bg-primary dark:bg-secondary font-Yekan text-darkgreen 
                dark:text-white rounded-[30px] flex mx-auto max-xl:grid leading-8  pl-5
                w-[150px] h-[35px] mt-7 "
            >
                 {CommentCourse.isPending ? "... در حال ارسال ": "افزودن نظر جدید"}
            </button>
        </form>
       
                                           
       
                           
                        
    </div>
  )
}

export default CommentdivCourse
