
import http from "./interceptor";





export const StudentAddPeyment = async (formData  ) => {
    const data = await http.post(`/CoursePayment/StudentAddPeyment` ,formData )
  
    console.log(data);
    return data;
  };
  

export const addPayImage = async (imageFile  ) => {
  const data = await http.post(`/CoursePayment/AddPeymentImage` , imageFile )

  console.log(data);
  return data;
};
