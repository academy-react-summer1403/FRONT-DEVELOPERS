import http from "../interceptor"


export const loginApi = async (user )=>{
    const response =await http.post("/Sign/Login" , user )
    console.log(response)
    return response;
}


