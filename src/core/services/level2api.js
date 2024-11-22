
import http from "./interceptor";





export const StudentAddPeyment = async (formData) => {
  try {
    const token = localStorage.getItem("token");

    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    };

    const response = await http.post(`/CoursePayment/StudentAddPeyment`, formData, { headers });
    console.log("Response:", response);
    return response.data;
  } catch (error) {
    console.error("Error submitting payment:", error.message || error.response);
    throw error;
  }
};


export const StudentCoursePayDetail = async (Id) => {

    const data = await http.get(`/CoursePayment/${Id}`);
    console.log(data);
    return data;
 
};



export const addPayImage = async (imageFile  ) => {
  const data = await http.post(`/CoursePayment/AddPeymentImage` , imageFile )

  console.log(data);
  return data;
};







