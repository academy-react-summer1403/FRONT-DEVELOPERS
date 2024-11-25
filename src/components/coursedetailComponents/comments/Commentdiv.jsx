// import FormData from 'form-data';
// import React from 'react'
// import { postComment } from '../../../core/services/apiComment';

// const Commentdiv = ({comentdiv,setCommentdiv,holder,Id}) => {

//   const onSubmit = async (e) => {
//     e.preventDefault();
  
//     const formData = new FormData(e.target);
//     formData.append("CourseId", Id);
//     formData.append("Title", Title);
//     formData.append("Describe", Describe);


//      const addComment = postComment(formData)
//      console.log(addComment)

//    };

//   return (
    
//     <div className={`${comentdiv ? "block" : "hidden"} border border-gray-300  dark:bg-slate-600 bg-[#e2e2e2ee] w-[550px] max-xl:w-3/4 h-[200px] rounded-3xl z-50 top-[35%]  fixed `}>
//    
   
//          
   
   
   
   
   
   
   
//             </div>
//   )
// }

// export default Commentdiv


import React, { useEffect, useState } from 'react'
import { HiXCircle } from 'react-icons/hi2';
import { usePostCommentNews } from '../../../core/services/mutation/DetailsMutation';
import { useForm } from 'react-hook-form';

const Commentdiv = ({comentdiv ,setCommentdiv,holder,Id , UserId}) => {
    const [userIp, setUserIp] = useState(null);

    useEffect(() => {
        fetch('https://api.ipify.org?format=json')
          .then(response => response.json())
          .then(data => setUserIp(data.ip))
          .catch(error => console.error('Error fetching IP:', error));
      }, []);

    const CommentNews = usePostCommentNews()
    const handlePostCommentNews = (data)=>{
        const params ={
            "newsId": Id,
            "userIpAddress": userIp,
            "title": data.Title,
            "describe": data.Describe,
            "userId": UserId
        }
        if(data){
            console.log(params)
            CommentNews.mutate(params)
        }
    }
    const {register, handleSubmit}= useForm()

  return (
    <div className={`${comentdiv ===true ? "block" : "hidden"} p-5 border border-gray-300  dark:bg-slate-600 bg-[#e2e2e2ee] max-xl:w-3/4  rounded-3xl z-50 mt-2 relative `}>
        <HiXCircle onClick={()=>setCommentdiv(false)} 
            className='absolute right-4 top-4 w-7 h-7 cursor-pointer text-secondary opacity-100 justify-self-end '
        /> 
        <form 
        //   onSubmit={(values) => onSubmit(values)} 
        onSubmit={handleSubmit(handlePostCommentNews)}              
        >
            <div className=" w-[500px] grid gap-2  max-xl:w-3/4  m-auto mt-6">
                <input type="text" placeholder={"عنوان"} {...register("Title")} className='w-[100%] h-12 dark:bg-slate-800 border rounded-3xl px-3  outline-none' id='Title' name='Title'/>
               <input type="text" placeholder={holder} className="w-[100%] h-12 dark:bg-slate-800 border rounded-3xl 
               px-3  outline-none" id='Describe' name='Describe'  {...register("Describe")} />
           </div>

           <button type="submit" disabled={CommentNews.isPending} value={CommentNews.isPending ? "... در حال ارسال ": "افزودن نظر جدید"} className="bg-primary dark:bg-secondary font-Yekan text-darkgreen 
                dark:text-white rounded-[30px] flex mx-auto max-xl:grid leading-8  pl-5
                w-[150px] h-[35px] mt-7 "
            >
                 {CommentNews.isPending ? "... در حال ارسال ": "افزودن نظر جدید"}
            </button>
        </form>
       
                                           
       
                           
                        
    </div>
  )
}

export default Commentdiv

