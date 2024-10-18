import axios from "axios";
import { removeItem } from "../Storage/Storage.Services";
// import { getItem } from "../common/Storage.Services";

const baseURl = import.meta.env.VITE_BASE_URL;

const instance = axios.create({
  baseURL: baseURl,
  headers: {
    Authorization: "Bearer " + localStorage.getItem("token"),
  },
});

const onSucces = (response) => {
  return response.data;
};

const onError = (err) => {
  console.log(err);

  // if (err.response.status == 401){
  //     removeItem("token");
  //     window.location.pathname = "/auth/v1"
  // }

  //  if(err.response.status >= 400 && err.response.status < 500){
  //     alert(err.response.status)
  //     //    removeItem("token");
  //     // window.location.pathname = "/auth/v1"
  // }

  return Promise.reject(err);
};

instance.interceptors.response.use(onSucces, onError);

// instance.interceptors.request.use((opt)=>{

//     const token = getItem("token") ;

//   if (token) opt.headers.Authorization = "Bearer " + token;
//     return opt;

// })

export default instance;
