import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteFavoriteCourse, postFavoriteCourse } from "../DashApi";
import { toast } from "react-toastify";



export const usePostFavoriteCourse=()=>{
        const queryClient = useQueryClient();
    
        return useMutation({
            mutationFn:(params)=> postFavoriteCourse(params),
            onSuccess:()=>{
                toast.success("دوره با موفقیت به علاقه مندی اضافه شد" , {
                    theme:"colored"
                    })
            },
            onSettled:async(_,error) =>{
                if(error){
                    toast.warning("------" , {
                        theme:"colored"
                        })
                    
                }
                else{
                   await queryClient.invalidateQueries({queryKey:["postFavoriteCourses"]})
    
                }
            },
            
        })
    }


    export const useDeleteFavoriteCourse=()=>{
        const queryClient = useQueryClient();
    
        return useMutation({
            mutationFn:(CourseFavoriteId)=> deleteFavoriteCourse(CourseFavoriteId),
            onSuccess:()=>{
                toast.success("دوره با موفقیت از علاقه مندی حذف شد" , {
                    theme:"colored"
                    })
            },
            onSettled:async(_,error) =>{
                if(error){
                    toast.warning("------" , {
                        theme:"colored"
                        })
                    
                }
                else{
                   await queryClient.invalidateQueries({queryKey:["deleteFavoriteCourses"]})
    
                }
            },
            
        })
    }