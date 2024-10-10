import http from "../interceptor"


export const getProfile = async ()=>{
    const response =await http.get("/SharePanel/GetProfileInfo")

    return response;
}