import http from "../services/interceptor/"
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";



export const CreateJobApi = async (create) => {
    try{
       const data = await http.post(`/SharePanel/CreateJobHistory` , create)
     
    if(data?.message =="عملیات با موفقیت انجام شد."){
      toast.success("good" , {
          theme:"colored"
      })
       console.log(data);
      return data;
    }
    }catch(error){
      if(error.response.status == 422 || error.response.status == 400)
      toast.error("خطا در انجام عملیات" , {theme:"colored"})
  }

  };