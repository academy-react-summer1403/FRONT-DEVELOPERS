import http from "../services/interceptor"

export const getNews = async ()=>{
    const data =await http.get("/News?PageNumber=1&RowsOfPage=10&SortingCol=InsertDate&SortType=DESC")  
        
    console.log(data)
    return data.data;
    
}