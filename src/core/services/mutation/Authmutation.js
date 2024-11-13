import { useMutation, useQueryClient } from "@tanstack/react-query"
import { loginApi } from "../authApi"



export const  postQuery=()=>{


    const queryClient=useQueryClient()


    const mutate=useMutation({
        mutationFn:(user)=>loginApi(user),
        onSuccess:()=>queryClient.invalidateQueries({mutationKeyy:["userkey"]})
    })

    return mutate;
}