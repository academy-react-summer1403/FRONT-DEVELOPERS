import http from "./interceptor";


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


  
  export const deleteUserImg = async (  deleteData) => {
    const data = await http.delete("/SharePanel/DeleteProfileImage" , deleteData  )

    console.log(data);
    return data;
  };



  
  // export const getMyCourses = async () => {
  //   const data = await http.get("/SharePanel/GetMyCourses" )
  
  //   console.log(data);
  //   return data;
  // };

  export const reservCourse = async () => {
    const data = await http.get("/SharePanel/GetMyCoursesReserve" )

    console.log(data);
    return data;
  };
  
  
  
  export const postReserv = async ( params) => {
    const data = await http.post("/CourseReserve/ReserveAdd" , params )
  
    console.log(data);
    return data;
  };

  export const postFavoriteCourse = async ( addFavorite) => {
    const data = await http.post("/Course/AddCourseFavorite" , addFavorite )
  
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

  