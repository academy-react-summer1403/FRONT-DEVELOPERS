import { useMutation, useQueryClient } from "@tanstack/react-query"
import { loginApi } from "../authApi"
import { likeArticle } from "../getApi"



export const  LikepostQuery=()=>{


    const queryClient=useQueryClient()


    const mutate=useMutation({
        mutationFn:(like)=>likeArticle(like),
        onSuccess:()=>queryClient.invalidateQueries({mutationKeyy:["likekey"]})
    })

    return mutate;
}