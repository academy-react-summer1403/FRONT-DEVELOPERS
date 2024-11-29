import { toast } from "react-toastify";
import http from "./interceptor";
import 'react-toastify/dist/ReactToastify.css';

export const getUserProfile = async () => {
    const data = await http.get("/SharePanel/GetProfileInfo" )

    // console.log(data);
    return data;
  };


  export const postUserImg = async ( formFile) => {
    const data = await http.post("/SharePanel/AddProfileImage" , formFile )

    // console.log(data);
    return data;
  };


  
  export const postUserMainImg = async (  formId) => {
    const data = await http.post("/SharePanel/SelectProfileImage" , formId )

    // console.log(data);
    return data;
  };

  export const putUserInfo = async (formData) => {
      const response = await http.put("/SharePanel/UpdateProfileInfo", formData);
  
      return response;
 
  };
  



  
  export const getMyCourses = async () => {
    const data = await http.get("/SharePanel/GetMyCourses" )
  
    // console.log(data);
    return data;
  };





  export const reservCourse = async () => {
    const data = await http.get("/SharePanel/GetMyCoursesReserve" )

    // console.log(data);
    return data;
  };
  
  
  
  export const postReserv = async ( params ) => {
    const data = await http.post("/CourseReserve/ReserveAdd" , params )
  
    console.log(data);
    return data;
  };




  export const deleteReserveCourse = async ( params ) => {
    const data = await http.delete(`/CourseReserve` , {data :params})
    console.log(data);
    return data;
  };


  export const postFavoriteCourse = async ( params ) => {
    const data = await http.post("/Course/AddCourseFavorite" ,  params)
    console.log(data);
    return data;

    
  };


  export const deleteFavoriteCourse = async ( CourseFavoriteId ) => {
    const data = await http.delete(`/Course/DeleteCourseFavorite`,{
      data:CourseFavoriteId
    } )
    // console.log(data);
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


  export const deleteFavoriteNews = async ( params ) => {
    const data = await http.delete("/News/DeleteFavoriteNews" ,{
      data:params
    })
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
  
    // console.log(data);
    return data;
  };





  // export const getCommentPanel = async ( ) => {
  //   const data = await http.post("/CourseReserve/ReserveAdd" )
  
  //   console.log(data);
  //   return data;
  // };


  export const getFavoriteCourse = async ( ) => {
    const data = await http.get("/SharePanel/GetMyFavoriteCourses")
  
    // console.log(data);
    return data;
  };


  export const getFavoriteMyNews=async()=>{
    const data =await http.get("/SharePanel/GetMyFavoriteNews")

    return data
  }


  export const passwordDash = async (pass ) => {
    const data = await http.post("/SharePanel/ChangePassword", pass )
  
    // console.log(data);
    return data;
  };

  export const deleteCourseFavorite = async ( formData) => {
    const data = await http.delete("/Course/DeleteCourseFavorite" , formData)
  
    // console.log(data);
    return data;
  };


  export const getCourseDash = async ( params) => {
    const data = await http.get("/Home/GetCoursesWithPagination" , {
      params:params
    })
  
    // console.log(data);
    return data;
  };


  export const getCourseDash2 = async ( params2) => {
    const data = await http.get("/Home/GetCoursesWithPagination" , {
      params:params2
    })
  
    // console.log(data);
    return data;
  };


  export const GetProfileInfo = async ( ) => {
    const data = await http.get("/SharePanel/GetProfileInfo")
  
    // console.log(data);
    return data;
  };




  export const likeArticle = async ( id ) => {
    const data = await http.post(`/News/NewsLike/${id}` )
  
    console.log(data);
    return data;
  };
  
  export const deletelikeArticle = async (deleteEntityId) => {
    const response = await http.delete(`/News/DeleteLikeNews/`, {
        data: { deleteEntityId }  
    });

    console.log(response);
    return response;
};

  
  
  export const disslikeArticle = async ( id ) => {
    const data = await http.post(`/News/NewsDissLike/${id}` )
  
    console.log(data);
    return data;
  };


  // export const deletedisslikeArticle = async ( id ) => {
  //   const data = await http.post(`/News/NewsDissLike/${id}` )
  
  //   console.log(data);
  //   return data;
  // };


  export const getMyCoursesComments=async()=>{
    const data =await http.get("/SharePanel/GetMyCoursesComments")

    return data
  }

  export const getMyNewsComments=async()=>{
    const data =await http.get("/SharePanel/GetMyNewsComments")

    return data
  }

  export const deleteMyCoursesComments = async (courseCommentId) => {
    const data = await http.delete(`/Course/DeleteCourseComment` , { data:courseCommentId});

    console.log("data" ,data);
    return data;
};
