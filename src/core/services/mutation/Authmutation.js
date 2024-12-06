import { useMutation, useQueryClient } from "@tanstack/react-query"
import { loginApi, postForgetPassword, postNewForgetPassword, towStepLoginApi } from "../authApi"
import { toast } from "react-toastify"



export const  postQuery=()=>{


    const queryClient=useQueryClient()


    const mutate=useMutation({
        mutationFn:(user)=>loginApi(user),
        onSuccess:()=>queryClient.invalidateQueries({mutationKeyy:["userkey"]})
    })

    return mutate;
}


export const  usePostForgetPassword=()=>{
    const queryClient=useQueryClient()
    return useMutation({
        mutationFn:(params)=>postForgetPassword(params),

        onSuccess:()=>{
            toast.success(". پیام ارسال شد ، ایمیل خود را چک کنید " , {
                theme:"colored",
                     className:"custom-toast"
                })
        },
        onSettled:async(_,error) =>{
            if (error) {
              
                toast.error("خطایی رخ داده است", { theme: "colored",
                    className:"custom-toast" });
                
            }
            else{
               await queryClient.invalidateQueries({queryKey:["ForgetPassword"]})

            }
        },
    })
}


export const  usePostNewForgetPassword=()=>{
    const queryClient=useQueryClient()
    return useMutation({
        mutationFn:(params)=>postNewForgetPassword(params),

        onSuccess:()=>{
            toast.success(".رمز با موفقیت عوض شد" , {
                theme:"colored",
                     className:"custom-toast"
                })
        },
        onSettled:async(_,error) =>{
            if (error) {
              
                toast.error("خطایی رخ داده است", { theme: "colored",
                    className:"custom-toast" });
                
            }
            else{
               await queryClient.invalidateQueries({queryKey:["ForgetPassword"]})

            }
        },
    })
}


export const  usetowStepLoginApi=()=>{
    const queryClient=useQueryClient()
    return useMutation({
        mutationFn:({dataa ,verifyCode})=>towStepLoginApi({dataa ,verifyCode}),

        onSuccess:()=>{
            toast.success("! اطلاعات با موفقیت ثبت شد.خوش آمدید " , {
                theme:"colored",
                     className:"custom-toast"
                })
        },
        onSettled:async(_,error) =>{
            if (error) {
              
                toast.error("خطایی رخ داده است", { theme: "colored",
                    className:"custom-toast" });
                
            }
            else{
               await queryClient.invalidateQueries({queryKey:["towStepLoginApi"]})

            }
        },
    })
}