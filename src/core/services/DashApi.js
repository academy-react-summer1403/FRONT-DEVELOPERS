import { toast } from "react-toastify";
import http from "./interceptor";
import 'react-toastify/dist/ReactToastify.css';

export const getUserProfile = async () => {
    const data = await http.get("/SharePanel/GetProfileInfo" )

    console.log(data);
    return data;
  };


  export const postUserImg = async ( formFile) => {
    const data = await http.post("/SharePanel/AddProfileImage" , formFile )

    console.log(data);
    return data;
  };


  
  export const postUserMainImg = async (  formId) => {
    const data = await http.post("/SharePanel/SelectProfileImage" , formId )

    console.log(data);
    return data;
  };

  export const putUserInfo = async (  formData) => {
    const data = await http.put("/SharePanel/UpdateProfileInfo" ,  formData )
  
    console.log(data);
    return data;
  };


  
  // export const deleteUserImg = async (  deleteData) => {
  //   const data = await http.delete("/SharePanel/DeleteProfileImage" , deleteData  )

  //   console.log(data);
  //   return data;
  // };



  
  export const getMyCourses = async () => {
    const data = await http.get("/SharePanel/GetMyCourses" )
  
    console.log(data);
    return data;
  };

  export const reservCourse = async () => {
    const data = await http.get("/SharePanel/GetMyCoursesReserve" )

    console.log(data);
    return data;
  };
  
  
  
  export const postReserv = async ( params ) => {
    const data = await http.post("/CourseReserve/ReserveAdd" , params ,
    
    )
  
    console.log(data);
    return data;
  };

  export const postFavoriteCourse = async ( addFavorite ) => {
    const data = await http.post("/Course/AddCourseFavorite" , addFavorite )
    console.log(data);
    return data;
  };




  export const postFavoriteNews = async (  params) => {
    const data = await http.post(`/News/AddFavoriteNews`,null,{
      params:params
    },
    )
  
    console.log(data);
    return data;
  };



  
  export const postRateNews = async (  params) => {
    const data = await http.post(`/News/NewsRate`,null,{
      params:params
    })
    //   toast.success("عملیات  با موفقیت انجام شد" ,{
    //     theme:"colored"}
    // ))
  
    console.log(data);
    return data;
  };





  // export const getCommentPanel = async ( ) => {
  //   const data = await http.post("/CourseReserve/ReserveAdd" )
  
  //   console.log(data);
  //   return data;
  // };


  export const getFavoriteCourse = async ( ) => {
    const data = await http.get("/SharePanel/GetMyFavoriteCourses")
  
    console.log(data);
    return data;
  };

  export const passwordDash = async (pass ) => {
    const data = await http.post("/SharePanel/ChangePassword", pass )
  
    console.log(data);
    return data;
  };

  export const deleteCourseFavorite = async ( formData) => {
    const data = await http.delete("/Course/DeleteCourseFavorite" , formData)
  
    console.log(data);
    return data;
  };


  export const getCourseDash = async ( params) => {
    const data = await http.get("/Home/GetCoursesWithPagination" , {
      params:params
    })
  
    console.log(data);
    return data;
  };


  export const getCourseDash2 = async ( params2) => {
    const data = await http.get("/Home/GetCoursesWithPagination" , {
      params:params2
    })
  
    console.log(data);
    return data;
  };


  export const GetProfileInfo = async ( ) => {
    const data = await http.get("/SharePanel/GetProfileInfo")
  
    console.log(data);
    return data;
  };