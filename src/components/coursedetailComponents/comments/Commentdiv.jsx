import React, { useEffect, useState } from 'react'
import { HiXCircle } from 'react-icons/hi2';
import { usePostCommentNews } from '../../../core/services/mutation/DetailsMutation';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';


const Commentdiv = ({comentdiv ,setCommentdiv,holder,Id , UserId}) => {
    const [userIp, setUserIp] = useState(null);

    // IP address:
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
    

    const validation = yup.object().shape({

        Describe:yup.string().required().min(10,'عنوان باید بیشتر از 5 حرف باشد').max(79,"عنوان طولانی است"),

        Title: yup.string().required().min(5, 'نظر باید بیشتر از 5 حرف باشد')
        .max(390,'نظر باید کمتر از 390 حرف باشد' )
        ,
    
     
      });
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(validation)
    });

  return (
    <div className={`${comentdiv ===true ? "block" : "hidden"} p-5 border border-gray-300  dark:bg-slate-600 bg-[#e2e2e2ee] max-xl:w-3/4  rounded-3xl z-50 mt-2 relative `}>
        <HiXCircle onClick={()=>setCommentdiv(false)} 
            className='absolute right-4 top-4 w-7 h-7 cursor-pointer text-secondary opacity-100 justify-self-end '
        /> 
        <form 
            onSubmit={handleSubmit(handlePostCommentNews)}      
        >
            <div className=" w-[500px] grid gap-2  max-xl:w-3/4  m-auto mt-6">
                <input type="text" placeholder={"عنوان"} {...register("Title")} 
                    className='w-[100%] h-12 dark:bg-slate-800 border rounded-3xl px-3  outline-none' id='Title' name='Title'
                />
               {errors.Title && <p className="text-red-500 text-xs">{errors.Title.message}</p>}

               <input type="text" placeholder={holder} className="w-[100%] h-12 dark:bg-slate-800 border rounded-3xl 
               px-3  outline-none" id='Describe' name='Describe'  {...register("Describe")} />
               {errors.Describe && <p className="text-red-500 text-xs">{errors.Describe.message}</p>}
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

