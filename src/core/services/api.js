import http from "../services/interceptor"

// export const getNews = async ()=>{
//     const data =await http.get("/News/GetListNewsCategory")
//     console.log(data)
//     return data;
// }


export const getNews = async ()=>{
    const data =await http.get("/News?PageNumber=1&RowsOfPage=9&SortingCol=InsertDate&SortType=DESC")
    console.log(data)
    return data;
    
}


export const getCourse = async ()=>{
    const data =await http.get("/Home/GetCoursesWithPagination?PageNumber=1&RowsOfPage=3&SortingCol=Active&SortType=DESC&TechCount=0")
    console.log(data)
    return data;
    
}