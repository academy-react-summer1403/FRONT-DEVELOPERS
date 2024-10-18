import http from "./interceptor";

export const getNews = async (params , page ) => {
  const data = await http.get(`/News?PageNumber=${page}&RowsOfPage=6` , {
    params
  });
  console.log(data);
  return data;
};

export const getNewsId = async (id) => {
  const data = await http.get(`/News/${id}`);
  console.log(data);
  return data;
};

export const getCourse = async ( page , params ) => {
  const data = await http.get(
    `/Home/GetCoursesWithPagination?PageNumber=${page}&RowsOfPage=6` , {
      params
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



export const getCourseLanding = async (query) => {
  const data = await http.get(`/Home/GetCoursesWithPagination?PageNumber=3&RowsOfPage=12&Query=${query}`);
  console.log(data);
  return data;
};



export const getLandingReport = async () => {
  const data = await http.get("/Home/LandingReport");
  console.log(data);
  return data;
};


