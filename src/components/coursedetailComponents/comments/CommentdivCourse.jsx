import React from 'react'
import { HiXCircle } from 'react-icons/hi2';
import { usePostCommentCourse } from '../../../core/services/mutation/DetailsMutation';
import * as yup from "yup";
import { ErrorMessage, Field, Form, Formik } from 'formik';


const CommentdivCourse = ({comentdiv ,setCommentdiv,holder,Id}) => {
    const CommentCourse = usePostCommentCourse()
    const handlePostCommentCourse = async(values)=>{


        const formData = new FormData();
        formData.append("CourseId", Id,);
        formData.append("Title", values.Title);
        formData.append("Describe",  values.Describe);
        if(formData){
            CommentCourse.mutate(formData)
        }
    }

    const validation = yup.object().shape({

        Describe:yup.string().required().min(5,'عنوان باید بیشتر از 5 حرف باشد').max(79,"عنوان طولانی است"),

        Title: yup.string().required().min(5, 'نظر باید بیشتر از 5 حرف باشد')
        .max(390,'نظر باید کمتر از 390 حرف باشد' )
        ,
    
     
      });

  return (
    <div className={`${comentdiv ===true ? "block" : "hidden"} p-5 border border-gray-300  dark:bg-slate-600 bg-[#e2e2e2ee] w-[90%]  rounded-3xl z-50 top-14 absolute `}>
        <HiXCircle onClick={()=>setCommentdiv(false)} 
            className='absolute right-4 top-4 w-7 h-7 cursor-pointer text-secondary opacity-100 justify-self-end '
        />        
            <Formik
                initialValues={{ Title: '', Describe: '' }}
                validationSchema={validation}
                onSubmit={(values) => handlePostCommentCourse(values)}
            >
                {({ isSubmitting }) => (
                    <Form className="w-[500px] grid gap-2 max-xl:w-3/4 m-auto mt-6">
                        <Field 
                            type="text" 
                            name="Title" 
                            placeholder="عنوان" 
                            className='w-[100%] h-12 dark:bg-slate-800 border rounded-3xl px-3 outline-none' 
                        />
                        <ErrorMessage name="Title" component="div" className="text-red-600" />

                        <Field 
                            type="text" 
                            name="Describe" 
                            placeholder={holder} 
                            className="w-[100%] h-12 dark:bg-slate-800 border rounded-3xl px-3 outline-none" 
                        />
                        <ErrorMessage name="Describe" component="div" className="text-red-600" />

                        <button 
                            type="submit" 
                            disabled={isSubmitting || CommentCourse.isPending} 
                            className="bg-primary dark:bg-secondary font-Yekan text-darkgreen dark:text-white rounded-[30px] flex mx-auto max-xl:grid leading-8 pl-5 w-[150px] h-[35px] mt-7"
                        >
                            {CommentCourse.isPending ? "... در حال ارسال " : "افزودن نظر جدید"}
                        </button>
                    </Form>
                )}
            </Formik>
                                           
       
                           
                        
    </div>
  )
}

export default CommentdivCourse
