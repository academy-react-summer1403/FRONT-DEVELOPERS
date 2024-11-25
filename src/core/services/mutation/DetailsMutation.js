import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteFavoriteCourse, deleteFavoriteNews, deletelikeArticle, disslikeArticle, likeArticle, postFavoriteCourse, postFavoriteNews } from "../DashApi";
import { toast } from "react-toastify";
import { postRateNews } from "../getApi";
import { deleteCourseCommentLike, deleteLikeComment, dislikeCourseComment, likeComment, postCommentNews, postCourseCommentLike } from "../apiComment";


    // cours Mutations : 
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

    export const useLikeCommentCourse=()=>{
        const queryClient = useQueryClient();
    
        return useMutation({
            mutationFn:(id)=> postCourseCommentLike(id),
            onSuccess:()=>{
                toast.success("نظر لایک شد" , {
                    theme:"colored"
                    })
            },
            onSettled:async(_,error) =>{
                if(error){
                    
                    toast.error(`${error.message}` , {
                        theme:"colored"
                        })
                    
                }
                else{
                   await queryClient.invalidateQueries({queryKey:["postCourseCommentLikes"]})
    
                }
            },
            
        })
    }

    export const useDeleteCourseCommentLike=()=>{
        const queryClient = useQueryClient();
    
        return useMutation({
            mutationFn:(params)=> deleteCourseCommentLike(params),
            onSuccess:()=>{
                toast.success(" لایک حذف شد" , {
                    theme:"colored"
                    })
            },
            onSettled:async(_,error) =>{
                if(error){
                    toast.warning("خطایی رخ داد" , {
                        theme:"colored"
                        })
                    
                }
                else{
                   await queryClient.invalidateQueries({queryKey:["deleteCourseCommentLikes"]})
    
                }
            },
            
        })
    }
    export const useDislikeCourseComment=()=>{
        const queryClient = useQueryClient();
    
        return useMutation({
            mutationFn:(disslikeparams)=> dislikeCourseComment(disslikeparams),
            onSuccess:()=>{
                toast.success("عملیات موفق" , {
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
                   await queryClient.invalidateQueries({queryKey:["postdisslikeArticle"]})
    
                }
            },
            
        })
    }

    // cours article&News Mutations : 

    export const usePostRateNews=()=>{
        const queryClient = useQueryClient();
    
        return useMutation({
            mutationFn:({NewsId, RateNumber})=> postRateNews({NewsId, RateNumber}),
            onSuccess:()=>{
                toast.success("امتیاز شما ثبت شد" , {
                    theme:"colored"
                    })
            },
            onSettled:async(_,error) =>{
                if (error) {
                    console.error("Error Details:", error);
                    if (error.response?.status === 400) {
                        toast.warning("داده‌های ارسالی اشتباه است یا قبلاً امتیاز داده‌اید", { theme: "colored" });
                    } else {
                        toast.error("خطای نامشخص رخ داده است", { theme: "colored" });
                    }
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

    export const uselikeArticle=()=>{
        const queryClient = useQueryClient();
    
        return useMutation({
            mutationFn:(id)=> likeArticle(id),
            onSuccess:()=>{
                toast.success("خبر لایک شد" , {
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
                   await queryClient.invalidateQueries({queryKey:["postlikeArticle"]})
    
                }
            },
            
        })
    }

    export const useDeletelikeArticle=()=>{
        const queryClient = useQueryClient();
    
        return useMutation({
            mutationFn:(deleteEntityId)=> deletelikeArticle(deleteEntityId),
            onSuccess:()=>{
                toast.success("لایک حذف شد" , {
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
                   await queryClient.invalidateQueries({queryKey:["deletelikeArticles"]})
    
                }
            },
            
        })

    }

    export const useDisslikeArticle=()=>{
        const queryClient = useQueryClient();
    
        return useMutation({
            mutationFn:(id)=> disslikeArticle(id),
            onSuccess:()=>{
                toast.success("عملیات موفق" , {
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
                   await queryClient.invalidateQueries({queryKey:["postdisslikeArticle"]})
    
                }
            },
            
        })
    }

    export const useLikeComment=()=>{
        const queryClient = useQueryClient();
    
        return useMutation({
            mutationFn:(likeparams)=> likeComment(likeparams),
            onSuccess:()=>{
                toast.success("نظر لایک شد" , {
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
                   await queryClient.invalidateQueries({queryKey:["postlikeComment"]})
    
                }
            },
            
        })
    }
    
    export const useDeleteLikeComment=()=>{
        const queryClient = useQueryClient();
    
        return useMutation({
            mutationFn:(params)=> deleteLikeComment(params),
            onSuccess:()=>{
                toast.success(" لایک حذف شد" , {
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
                   await queryClient.invalidateQueries({queryKey:["deleteLikeComments"]})
    
                }
            },
            
        })
    }

    export const usePostCommentNews=()=>{
        const queryClient = useQueryClient();
    
        return useMutation({
            mutationFn:(params)=> postCommentNews(params),
            onSuccess:()=>{
                toast.success("نظر شما ثبت شد" , {
                    theme:"colored"
                    })
            },
            onSettled:async(_,error) =>{
                if (error) {
                  
                    toast.error("خطایی رخ داده است", { theme: "colored" });
                    
                }
                else{
                   await queryClient.invalidateQueries({queryKey:["postRateNewses"]})
    
                }
            },
            
        })
    }

