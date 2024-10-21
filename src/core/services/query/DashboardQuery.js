import { useQuery } from "@tanstack/react-query";
import {  getFavoriteCourse,  getMyCourses,  getUserProfile, reservCourse } from "../DashApi";



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