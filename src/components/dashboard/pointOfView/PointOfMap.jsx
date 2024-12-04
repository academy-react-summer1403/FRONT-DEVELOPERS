import React, { useEffect, useState } from 'react';
import { useMyCoursesComments, useMyNewsComments } from '../../../core/services/query/DashboardQuery';
import CourseComments from './CourseComments';
import NewsComments from './NewsComments';
import NotFound from '../../notFound/NotFound';
import { deleteMyCoursesComments } from '../../../core/services/DashApi';
import { toast } from 'react-toastify';

const PointOfMap = ({ search , category}) => {

  // get: 
  const myCoursesComments = useMyCoursesComments();

  const [CoursesComments, setCoursesComments] = useState(myCoursesComments.data?.myCommentsDtos ||[])
   
  useEffect(() => {
    if(myCoursesComments.data?.myCommentsDtos){
      setCoursesComments(myCoursesComments.data?.myCommentsDtos)
    }
  }, [myCoursesComments.data?.myCommentsDtos])

  const myNewsComments = useMyNewsComments();
  console.log(myNewsComments.data)


  // COURSE : 

    // Filter Courses Data Based on Search
    const filteredCourseData =
    CoursesComments.filter((f) =>
        f.courseTitle?.toLowerCase().includes(search.toLowerCase())
      ) || [];

    // States for course Pagination
    const [currentCoursePage, setCurrentCoursePage] = useState(1);
    const itemsPerPage = 5; // Number of items per page
      // Paginated Course Data
      const paginatedData = filteredCourseData?.slice(
        (currentCoursePage-1) * itemsPerPage,
        currentCoursePage * itemsPerPage
      );
    const totalCoursePages = Math.ceil((filteredCourseData?.length || 0) / itemsPerPage);

    // Delete Course Comment :

    const HandleDeleteSubmit = async(courseCommentId) => {
  
        return deleteMyCoursesComments(courseCommentId) .then(() => {
          setCoursesComments(prevData => prevData.filter(item => item.commentId !== courseCommentId));
        }).then(response => {
         
          toast.success("کامنت با موفقیت حذف شد", {
            theme: "colored",
          });
        })
        .catch(error => {
          toast.error("ابتدا زیر نظر را حذف کنید", {
            theme: "colored",
          });
        });         
        
    }


  // NEWES :

    // Filter News Data Based on Search
    const filteredNewsData =
      myNewsComments.data?.myNewsCommetDtos?.filter((f) =>
        f.courseTitle?.toLowerCase().includes(search.toLowerCase())
      ) || [];

      // States for course Pagination
    const [currentNewsPage, setCurrentNewsPage] = useState(1);
    const NewsitemsPerPage = 5; // Number of items per page
      // Paginated Course Data
      const paginatedNewsData = filteredNewsData?.slice(
        (currentNewsPage-1) * NewsitemsPerPage,
        currentNewsPage * NewsitemsPerPage
      );
    const totalNewsPages = Math.ceil((filteredCourseData?.length || 0) / itemsPerPage);

       // Delete News Comment :نداشت
      



  const noResults = filteredCourseData.length  && filteredNewsData.length ;

  
  

  return (
    <div>
      {noResults === "" ? (
        <div className="relative w-96 flex mx-auto">
          <NotFound />
        </div>
      ) : (
        <>
          {
            category == "اخبار" ? <> {filteredNewsData.length > 0  ?<NewsComments paginatedNewsData={paginatedNewsData} setCurrentNewsPage={setCurrentNewsPage} currentNewsPage={currentNewsPage} totalNewsPages={totalNewsPages} /> : <NotFound/>} </> :

            <> {filteredCourseData.length > 0 ? <CourseComments paginatedData={paginatedData} setCurrentCoursePage={setCurrentCoursePage} 
                    currentCoursePage={currentCoursePage} totalCoursePages={totalCoursePages}
                    HandleDeleteSubmit={HandleDeleteSubmit}      
              /> : <NotFound/>} </> 

        
          }
          
          
        </>
      )}
    </div>
  );
};

export default PointOfMap;
