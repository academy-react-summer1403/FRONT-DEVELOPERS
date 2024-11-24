import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteFavoriteCourse, deleteFavoriteNews, postFavoriteCourse, postFavoriteNews } from "../DashApi";
import { toast } from "react-toastify";
import { postRateNews } from "../getApi";



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
                    toast.error("خطایی رخ داده است" , {
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

    export const usePostRateNews=()=>{
        const queryClient = useQueryClient();
    
        return useMutation({
            mutationFn:(NewsId , RateNumber)=> postRateNews(NewsId , RateNumber),
            onSuccess:()=>{
                toast.success("امتیاز شما ثبت شد" , {
                    theme:"colored"
                    })
            },
            onSettled:async(_,error) =>{
                if(error){
                    toast.warning("شما قبلا امتیاز داده اید" , {
                        theme:"colored"
                        })
                    
                }
                else{
                   await queryClient.invalidateQueries({queryKey:["postRateNewses"]})
    
                }
            },
            
        })
    }

    export const usePostFavoriteNews=()=>{
        const queryClient = useQueryClient();
    
        return useMutation({
            mutationFn:(params)=> postFavoriteNews(params),
            onSuccess:()=>{
                toast.success("خبر به علاقه مندی اضافه شد" , {
                    theme:"colored"
                    })
            },
            onSettled:async(_,error) =>{
                if(error){
                    toast.error("خطایی رخ داده است" , {
                        theme:"colored"
                        })
                    
                }
                else{
                   await queryClient.invalidateQueries({queryKey:["postFavoriteNewses"]})
    
                }
            },
            
        })
    }

    export const useDeleteFavoriteNews=()=>{
        const queryClient = useQueryClient();
    
        return useMutation({
            mutationFn:(params)=> deleteFavoriteNews(params),
            onSuccess:()=>{
                toast.success("خبر با موفقیت از علاقه مندی حذف شد" , {
                    theme:"colored"
                    })
            },
            onSettled:async(_,error) =>{
                if(error){
                    toast.warning("خطایی رخ داده است" , {
                        theme:"colored"
                        })
                    
                }
                else{
                   await queryClient.invalidateQueries({queryKey:["deleteFavoriteNewses"]})
    
                }
            },
            
        })

    }