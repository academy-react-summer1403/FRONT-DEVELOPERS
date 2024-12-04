import axios from "axios";
// import { removeItem } from "../Storage/Storage.Services";


const baseURl = import.meta.env.VITE_BASE_URL_THREE;

const instanceThree = axios.create({
  baseURL: baseURl,
  headers: {
    Authorization: "Bearer " + localStorage.getItem("token"),
  },
});




const onSucces = (response) => {

    return response.data; 
  }

const onError = (err) => {
  console.log(err);

  

  return Promise.reject(err);
};

instanceThree.interceptors.response.use(onSucces, onError);


export default instanceThree;
