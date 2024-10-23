import FormData from 'form-data';
import React from 'react'
import { postComment } from '../../../core/services/apiComment';

const Commentdiv = ({comentdiv,setCommentdiv,holder,Id}) => {

  const onSubmit = async (e) => {
    e.preventDefault();
  
    const formData = new FormData(e.target);
    formData.append("CourseId", Id);
    formData.append("Title", Title);
    formData.append("Describe", Describe);


     const addComment = postComment(formData)
     console.log(addComment)

   };

  return (
    
    <div className={`${comentdiv ? "block" : "hidden"} border border-gray-300  dark:bg-slate-600 bg-[#e2e2e2ee] w-[550px] h-[200px] rounded-3xl z-50 top-[35%] left-[32%] fixed `}>
    <svg onClick={()=>setCommentdiv(false)} className=" border border-gray-800  dark:border-white stroke-black dark:stroke-white   mt-5 ml-[92%]" width="15" height="15" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
   <path d="M1.72313 1.72267L10.562 10.5615M10.562 1.72267L1.72313 10.5615" stroke="" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
   </svg>
   
            <form 
                     onSubmit={(values) => onSubmit(values)}
               
               >
                 <div className=" w-[500px] m-auto mt-6 h-[50px] ">
                 <input type="text" className='w-[300px] h-[30px] hidden border border-black' id='Title' name='Title'/>
                   <input type="text" placeholder={holder} className="w-[100%] h-[100%] dark:bg-slate-800 border rounded-3xl px-3  outline-none" id='Describe' name='Describe'/>
                   </div>
                   <button type="submit" className="bg-primary dark:bg-[#FF8A00] font-Yekan text-[#005653] dark:text-white rounded-[30px] ml-[67%] w-[150px] h-[35px] mt-7 ">افزودن نظر جدید</button>
               </form>
   
   
   
   
   
   
   
            </div>
  )
}

export default Commentdiv
