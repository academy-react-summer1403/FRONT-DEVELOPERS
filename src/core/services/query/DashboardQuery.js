import { useQuery } from "@tanstack/react-query";
import {  getCourseDash, getCourseDash2, getFavoriteCourse,  getMyCourses,  GetProfileInfo,  getUserProfile, reservCourse } from "../DashApi";



export function useUserProfile() {
    return useQuery({
      queryKey: ["userprofile" ],
      queryFn: () =>  getUserProfile(),
    });
  }





  
export function useMyCourses() {
  return useQuery({
    queryKey: ["myCourses" ],
    queryFn: () =>  getMyCourses(),
  });
}



  
export function useReserv() {
  return useQuery({
    queryKey: ["reserv" ],
    queryFn: () =>  reservCourse(),
  });
}


export function useFavoriteCourse() {
  return useQuery({
    queryKey: ["favoriteCourse" ],
    queryFn: () =>  getFavoriteCourse(),
  });
}


export function useCourseDash(params) {
  return useQuery({
    queryKey: ["courseDash"  , params],
    queryFn: () =>  getCourseDash(params),
  });
}

export function useCourseDash2(params2) {
  return useQuery({
    queryKey: ["courseDash2"  , params2],
    queryFn: () =>  getCourseDash2(params2),
  });
}

export function useProfileInfo() {
  return useQuery({
    queryKey: ["profInfo"  , ],
    queryFn: () =>  GetProfileInfo(),
  });
}