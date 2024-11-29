import { useQueryClient , useMutation} from '@tanstack/react-query';

// import { deleteMyCoursesComments, deleteReserveCourse } from "../DashApi";
import { toast } from 'react-toastify';
import { postUserImg } from '../DashApi';


// export const useDeleteMyCoursesComments=()=>{
//     const queryClient = useQueryClient();

//     return useMutation({
//         mutationFn:(courseCommentId)=> deleteMyCoursesComments(courseCommentId),
//         onSuccess:()=>{
//             toast.success("دیدگاه با موفقیت حذف شد" , {
//                 theme:"colored"
//                 })
//         },
//         onSettled:async(_,error) =>{
//             if(error.status === 400){
//                 toast.warning("این دیدگاه به دلیل داشتن زیر نظر حذف نمیشود" , {
//                     theme:"colored"
//                     })
                
//             }
//             else{
//                await queryClient.invalidateQueries({queryKey:["deleteCourseComments"]})

//             }
//         },
        
//     })
// }


// export const useDeleteReserveCourse=()=>{
//     const queryClient = useQueryClient();

//     return useMutation({
//         mutationFn:(params)=> deleteReserveCourse(params),
//         onSuccess:()=>{
//             toast.success("دوره ی رزرو شده با موفقیت حذف شد" , {
//                 theme:"colored"
//                 })
//         },
//         onSettled:async(_,error) =>{
//             if(error.status === 422){
//                 toast.warning("دوره تایید شده حذف نمیشود" , {
//                     theme:"colored"
//                     })
//             }
//             else{
//                await queryClient.invalidateQueries({queryKey:["deleteDashReserveCourse"]})
                
//             }
//         },
        

//     })
// }



export const usepostUserImg=()=>{
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn:(formFile)=> postUserImg(formFile),
        onSuccess:()=>{
            toast.success("عکس بارگذاری شد" , {
                theme:"colored"
                })
        },
        onSettled:async(_,error) =>{
            if(error.status === 422){
                toast.warning("بارگذاری با خطا مواجه شد" , {
                    theme:"colored"
                    })
            }
            else{
               await queryClient.invalidateQueries({queryKey:["postUserImgA"]})
                
            }
        },
        

    })
}
