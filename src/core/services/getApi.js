import { toast } from "react-toastify";
import http from "./interceptor";
import 'react-toastify/dist/ReactToastify.css';


export const getNews = async (params , page,rows  ) => {
  const data = await http.get(`/News?PageNumber=${page}&RowsOfPage=${rows }` , {
    params:params
  });
  console.log(data);
  return data;
};

export const getNewsPudcast = async ( ) => {
  const data = await http.get(`/News`)
  console.log(data);
  return data;
};

export const getNewsId = async (id) => {
  const data = await http.get(`/News/${id}`);
  console.log(data);
  return data;
};




export const getCourse = async (  search , params) => {
  console.log(search,'search from api')

  if (search && search.length>0){
    params.Query = search
  }  
  const data = await http.get(
    `/Home/GetCoursesWithPagination`,{
      params:params
    } 
  );
  console.log(data);
  return data;
};

export const getCourseId = async (courseId) => {
  const data = await http.get(`/Home/GetCourseDetails?CourseId=${courseId}`);
  console.log(data);
  return data;
};


export const getTopCourse = async ()=>{
  const data = await http.get(`/Home/GetCoursesTop?Count=5`)
  console.log(data)
  return data;
}



export const categoryCourses = async () => {
  const data = await http.get("/Home/GetTechnologies");
  console.log(data);
  return data;
};

export const TypeCourses = async () => {
  const data = await http.get("/CourseType/GetCourseTypes");
  console.log(data);
  return data;
};

export const LevelCourses = async () => {
  const data = await http.get("/CourseLevel/GetAllCourseLevel");
  console.log(data);
  return data;
};



export const getCourseLanding = async () => {
  const data = await http.get(`/Home/GetCoursesWithPagination?PageNumber=3&RowsOfPage=12`);
  console.log(data);
  return data;
};


export const getCourseLandingSearchBar = async (params) => {
  const data = await http.get(`/Home/GetCoursesWithPagination` ,{
    params:params
  });
  console.log(data);
  return data;
};

export const getNewsLandingSearchBar = async (params) => {
  const data = await http.get(`/News` ,{
    params:params
  });
  console.log(data);
  return data;
};


export const getLandingReport = async () => {
  const data = await http.get("/Home/LandingReport");
  console.log(data);
  return data;
};



export const likeArticle = async ( like ) => {
  const data = await http.post(`/News/NewsLike/${like}`,
    // toast.success("good",{
    //   theme:"colored"
    // })
  )

  console.log(data);
  return data;
};


export const disslikeArticle = async ( disslike ) => {
  const data = await http.post(`/News/NewsDissLike/${disslike}`,
    // toast.success("good",{
    //   theme:"colored"
    // })
  )

  console.log(data);
  return data;
};
