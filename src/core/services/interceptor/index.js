import axios from "axios";
import { removeItem } from "../Storage/Storage.Services";


const baseURl = import.meta.env.VITE_BASE_URL;

const instance = axios.create({
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

instance.interceptors.response.use(onSucces, onError);


export default instance;
