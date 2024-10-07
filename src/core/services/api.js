import http from "../interceptor"

export const getCourses = async ()=>{
    const response =await http.get("")

    return response;
}