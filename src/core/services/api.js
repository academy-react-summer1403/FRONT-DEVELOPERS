import http from "../services/interceptor"




export const getNews = async (query)=>{
    const data =await http.get(`/News?PageNumber=1&RowsOfPage=10&Query=${query}`)
    console.log(data)
    return data;
    
}


export const getNewsId = async (id) => {
    const data = await http.get(`/News/?id=${id}`);
    console.log(data)
    return data
  };


export const getCourse = async (query)=>{
    const data =await http.get(`/Home/GetCoursesWithPagination?PageNumber=1&RowsOfPage=9&Query=${query}`)
    console.log(data)
    return data;
    
}

export const getCourseId = async (courseId)=>{
    const data =await http.get(`/Home/GetCourseDetails?CourseId=${courseId}`)
    console.log(data)
    console.log(courseId)
    return data;
  
    
}

