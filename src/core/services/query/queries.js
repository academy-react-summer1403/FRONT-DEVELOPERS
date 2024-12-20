import { useQuery } from "@tanstack/react-query";

import {
  categoryCourses,
  getCost,
  getCourse,
  getCourseId,
  getCourseLanding,
  getCourseLandingSearchBar,
  getfeature,
  getfeature1,
  getfeature2,
  getLandingReport,
  getNews,
  getNews1,
  getNewsId,
  getNewsLandingSearchBar,
  getNewsPudcast,
  getTopCourse,
  LevelCourses,
  Relatedcourse,
  TeacherCourses,
  TypeCourses,
} from "../getApi";
import { GetSecurityInfo, StudentCoursePayDetail } from "../level2api";
import { getConfigValue } from "../authApi";
import { getSendValue } from "../DashApi";


export function useNewsData(params , page,rows ) {
  return useQuery({
    queryKey: ["news", params,page,rows  ],
    queryFn: () => getNews( params, page ,rows  ),
  });
}

export function useNewsData1() {
  return useQuery({
    queryKey: ["news" ],
    queryFn: () => getNews1( ),
  });
}

export function useNewsPudcast( ) {
  return useQuery({
    queryKey: ["newsPudcast"],
    queryFn: () => getNewsPudcast(),
  });
}

export function useArticleDetail(id) {
  const query = useQuery({
    queryKey: ["newsdetail", id],
    queryFn: () => getNewsId(id),
  });

  return query;
}

export function useCourses(  search , params ) {
  return useQuery({
    queryKey: ["courses",    search , params ],
    queryFn: () => getCourse(   search , params ),
  });
}


export function usefeature( params ) {
  return useQuery({
    queryKey: ["feature", params ],
    queryFn: () => getfeature( params),
  });
}

export function usefeature1( params ) {
  return useQuery({
    queryKey: ["feature1", params ],
    queryFn: () => getfeature1( params),
  });
}




export function usefeature2( params ) {
  return useQuery({
    queryKey: ["feature2", params ],
    queryFn: () => getfeature2( params),
  });
}

export function useTopCourses() {
  return useQuery({
    queryKey: ["courses"],
    queryFn: () => getTopCourse(),
  });
}

export function useCourseId(courseId) {
  const query = useQuery({
    queryKey: ["courseId", courseId],
    queryFn: () => getCourseId(courseId),
  });

  return query;
}

export function useCategoryCourses() {
  return useQuery({
    queryKey: ["categoryC"],
    queryFn: () => categoryCourses(),
  });
}

export function useTypeCourses() {
  return useQuery({
    queryKey: ["categoryT"],
    queryFn: () => TypeCourses(),
  });
}

export function useLevelCourses() {
  return useQuery({
    queryKey: ["categoryL"],
    queryFn: () => LevelCourses(),
  });
}

export function useGetCost(page ,view1, costdown , costup ) {
  return useQuery({
    queryKey: ["Cost" , page ,view1, costdown , costup ],
    queryFn: () => getCost(page ,view1, costdown , costup ),
  });
}

export function useTeacherCourses() {
  return useQuery({
    queryKey: ["Teacher"],
    queryFn: () => TeacherCourses(),
  });
}

export function useCourseLanding(){
  return useQuery({
    queryKey:["landingCourse" , ],
    queryFn:()=>getCourseLanding()
  })
}

export function useCourseLandingSearchBar(params2 , searchCourse){
  return useQuery({
    queryKey:["CourseBar" , params2 , searchCourse],
    queryFn:()=>{
      return getCourseLandingSearchBar(params2 , searchCourse)
    }
  })
}

export function useNewsLandingSearchBar(params , search){
  return useQuery({
    queryKey:["landingNewsSearchBar" , params , search],
    queryFn:()=>getNewsLandingSearchBar(params , search)
  })
}

export function useLandingReport(){
  return useQuery({
    queryKey:["landingCourse2" ],
    queryFn:()=>getLandingReport()
  })
}

export function useStudentCoursePayDetail(Id){
  return useQuery({
    queryKey:["paymentdetail" ],
    queryFn:()=>StudentCoursePayDetail(Id)
  })
}

export function useGetSecurityInfo(){
  return useQuery({
    queryKey:["GetSecurityInfo" ],
    queryFn:()=>GetSecurityInfo()
  })
}


export function useGetRelatedcourse(){
  return useQuery({
    queryKey:["Relatedcourse" ],
    queryFn:()=>Relatedcourse()
  })
}

export function useGetConfigValue(params){
  return useQuery({
    queryKey:["getConfigValue" , params ],
    queryFn:()=>getConfigValue(params)
  })
}


export function useGetSendValue(params){
  return useQuery({
    queryKey:["getSendValue" , params ],
    queryFn:()=>getSendValue(params)
  })
}
StudentCoursePayDetail

