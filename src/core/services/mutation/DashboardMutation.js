import { useQueryClient , useMutation} from '@tanstack/react-query';

// import { deleteMyCoursesComments, deleteReserveCourse } from "../DashApi";
import { toast } from 'react-toastify';
import { deleteProfileImage, postUserImg } from '../DashApi';


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


export const useDeleteProfileImage=()=>{
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn:(formId)=> deleteProfileImage(formId),
        onSuccess:()=>{
            toast.success("عکس با موفقیت حذف شد" , {
                theme:"colored"
                })
        },
        onSettled:async(_,error) =>{
            if(error.status === 422){
                toast.warning("خطا رخ داد ،بعدا تلاش کنید" , {
                    theme:"colored"
                    })
            }
            else{
               await queryClient.invalidateQueries({queryKey:["deleteProfileImages"]})
                
            }
        },
        

    })
}

