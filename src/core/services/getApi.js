
import { toast } from "react-toastify";
import http from "./interceptor";
import 'react-toastify/dist/ReactToastify.css';


export const getNews = async (params , page,rows  ) => {
  const data = await http.get(`/News?PageNumber=${page}&RowsOfPage=${rows }` , {
    params:params
  });
  return data;
};


export const getNews1 = async ( ) => {
  const data = await http.get(`/News?PageNumber=1&RowsOfPage=3` )
  return data;
};
export const getNewsPudcast = async ( ) => {
  const data = await http.get(`/News`)
  return data;
};

export const getNewsId = async (id) => {
  const data = await http.get(`/News/${id}`);
  return data;
};

export const postRateNews  = async ({NewsId, RateNumber}) => {
  const data = await http.post(`/News/NewsRate?NewsId=${NewsId}&RateNumber=${RateNumber}`)
  return data;
};




export const getCourse = async (  search , params) => {

  if (search && search.length>0){
    params.Query = search
  }  
  const data = await http.get(
    `/Home/GetCoursesWithPagination`,{
      params:params
    } 
  );
  return data;
};





export const getfeature = async (params) => {

 
  const data = await http.get(
    `/Home/GetCoursesWithPagination`,{
      params:params
    } 
  );
  
  return data;

  
};


export const getfeature1 = async (params) => {

 
  const data = await http.get(
    `/Home/GetCoursesWithPagination`,{
      params:params
    } 
  );
  
  return data;

  
};


export const getfeature2 = async (params) => {

 
  const data = await http.get(
    `/News`,{params:params}
  );
  
  return data;

  
};

export const Relatedcourse  = async () => {
  const data = await http.get(`/Home/GetCoursesWithPagination?PageNumber=1&RowsOfPage=4`)
     return data;
}




export const getCourseId = async (courseId) => {
  const data = await http.get(`/Home/GetCourseDetails?CourseId=${courseId}`);
  // console.log(data);
  return data;
};


export const getTopCourse = async ()=>{
  const data = await http.get(`/Home/GetCoursesTop?Count=5`)
  // console.log(data)
  return data;
}



export const categoryCourses = async () => {
  const data = await http.get("/Home/GetTechnologies");
  // console.log(data);
  return data;
};

export const TypeCourses = async () => {
  const data = await http.get("/CourseType/GetCourseTypes");
  // console.log(data);
  return data;
};

export const LevelCourses = async () => {
  const data = await http.get("/CourseLevel/GetAllCourseLevel");
  // console.log(data);
  return data;
};

export const TeacherCourses = async () => {
  const data = await http.get("/Home/GetTeachers");
  // console.log(data);
  return data;
};

export const getCost = async (page ,view1, costdown , costup ) => {
  const data = await http.get(`/Home/GetCoursesWithPagination?PageNumber=${page}&RowsOfPage=${view1}&CostDown=${costdown}&CostUp=${costup}`);
  console.log(data);
  return data;
};

export const getCourseLanding = async () => {
  const data = await http.get(`/Home/GetCoursesWithPagination?PageNumber=3&RowsOfPage=12`);
  // console.log(data);
  return data;
};


export const getCourseLandingSearchBar = async (  params2,searchCourse) => {
  if (searchCourse && searchCourse.length>0){
    params2.Query = searchCourse
  }
  const data = await http.get(`/Home/GetCoursesWithPagination` ,{
    params:params2
  });

  return data;
};

export const getNewsLandingSearchBar = async (params , search) => {
  if (search && search.length>0){
    params.Query = search
  }
  const data = await http.get(`/News` ,{
    params:params
  });
  // console.log(data);
  return data;
};


export const getLandingReport = async () => {
  const data = await http.get("/Home/LandingReport");
  // console.log(data);
  return data;
};






export const addPayImage = async (  ) => {
  const data = await http.post(`/CoursePayment/AddPeymentImage` )

  // console.log(data);
  return data;
};


export const addLikeCourse = async ( CourseId ) => {
  try{
  const data = await http.post(`/Course/AddCourseLike?CourseId=${CourseId}` )
  
  if(data?.message =="عملیات با موفقیت انجام شد."){
    toast.success("عملیات با موفقیت انجام شد" , {
        theme:"colored"
    })
     console.log(data);
    return data;
  }
}catch(error){
  if(401){
 toast.warning("ابتدا وارد حساب کاربری خود شوید" , {
     theme:"colored"
 })
 
 }
 else if(error.response.status == 422){
 toast.error("خطا در ارتباط با سرور" , {
   theme:"colored"
 })  
 }
 }
};

export const addDissLikeCourse = async ( CourseId ) => {
  try{
  const data = await http.post(`/Course/AddCourseDissLike?CourseId=${CourseId}` )

  if(data?.message =="عملیات با موفقیت انجام شد."){
    toast.success("عملیات با موفقیت انجام شد" , {
        theme:"colored"
    })
     console.log(data);
    return data;
  }
}catch(error){
  if(401){
 toast.warning("ابتدا وارد حساب کاربری خود شوید" , {
     theme:"colored"
 })
 
 }
 else if(error.response.status == 422){
 toast.error("خطا در ارتباط با سرور" , {
   theme:"colored"
 })  
 }
 }
};