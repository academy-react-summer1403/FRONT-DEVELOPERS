import { useMutation, useQueryClient } from "@tanstack/react-query";
import { loginApi } from "../auth/auth";


export function useLogin(){


    const queryClient = useQueryClient()

return useMutation({

    mutationFn:(data)=>loginApi(data),
    onMutate:()=>{
       console.log("mutate")
    },

    onError:()=>{
        console.log("error")
    },

    onSuccess:()=>{
        console.log("succed")
    },

    onSettled:async (_,error)=>{
        console.log("setteled")
        if(error){
            console.log(error)
        }
        else{
           await queryClient.invalidateQueries({queryKey:["login"]})
        }
        
    }
})
}