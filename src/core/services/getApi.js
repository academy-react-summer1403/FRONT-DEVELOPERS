import http from "./interceptor";

export const getNews = async (query , page , sort) => {
  const data = await http.get(`/News?PageNumber=${page}&RowsOfPage=6&Query=${query}&SortingCol=${sort}`);
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
  console.log(courseId);
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
