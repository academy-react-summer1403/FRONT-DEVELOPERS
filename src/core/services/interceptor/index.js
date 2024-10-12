import axios from "axios";
// import { getItem } from "../common/Storage.Services";

const baseURl = import.meta.env.VITE_BASE_URL

const instance = axios.create({
    baseURL:baseURl
})

const onSucces = (response) =>{
    return response.data;
}

const onError = (err) =>{
    console.log(err)
   
    if(err.response.status >= 400 && err.response.status < 500){
        console.log(err.response.status)
    }

    return Promise.reject(err)
}

instance.interceptors.response.use(onSucces,onError);

// instance.interceptors.request.use((opt)=>{

//     const token = getItem("token") ? getItem("token") : "" ;


//     opt.headers.Authorization = "Bearer " + token;
//     return opt;

// })

export default instance