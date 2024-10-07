import { useMutation, useQueryClient } from "@tanstack/react-query";


export function useCreateTodo(){


    const queryClient = useQueryClient()

return useMutation({

    mutationFn:(data)=>createTodo(data),
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
           await queryClient.invalidateQueries({queryKey:["todos"]})
        }
        
    }
})
}