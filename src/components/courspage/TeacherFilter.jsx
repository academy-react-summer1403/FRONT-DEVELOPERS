import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { Add } from '../../core/redux/slices/QueryState/QueryRedux';
import { useTeacherCourses } from '../../core/services/query/queries';

const TeacherFilter = () => {


  const query = useSelector((state) => state.QuerySlice.search);
  console.log(query);

  const dispatch = useDispatch();

  const [filter,setFilter]=useState(true)
  const [filter2,setFilter2]=useState(true)
  const [filter3,setFilter3]=useState(true)
  const [filter4,setFilter4]=useState(true)



    const teacher = useTeacherCourses()
    console.log(teacher.data)



  return (
    <>
      
        <div className="z-40 relative flex flex-col gap-2  ">
          <div className="flex flex-row justify-end overflow-hidden">
             <label className='cursor-pointer' htmlFor='teacher1' to="checkbox" >{teacher.data?.[0].fullName}</label>
          <input
            id="teacher1"
            type="checkbox"
            name="checkbox"
            className="ml-2 cursor-pointer z-[800]"
            onClick={
              filter ? () => dispatch((Add(teacher.data?.[0].teacherId)),setFilter(false)):
              () => dispatch((Add("")),setFilter(true))
             }
          />
          </div>

          {/* <div className="flex flex-row justify-end overflow-hidden">
             <label to="checkbox">{teacher.data?.[1].fullName}</label>
          <input
            type="checkbox"
            name="checkbox"
            className="ml-2 cursor-pointer z-[800]"
            onClick={
              filter2 ? () => dispatch((Add(teacher.data?.[1].teacherId)),setFilter(false)):
              () => dispatch((Add("")),setFilter2(true))
             }
          />
          </div> */}

            <div className=" flex flex-row justify-end overflow-hidden ">
               <label className='whitespace-nowrap cursor-pointer' htmlFor='teacher2' to="checkbox">{teacher.data?.[2].fullName}</label>
          <input
            id='teacher2'
            type="checkbox"
            name="checkbox"
            className="ml-2 cursor-pointer z-[800]"
            onClick={
              filter3 ? () => dispatch((Add(teacher.data?.[2].teacherId)),setFilter(false)):
              () => dispatch((Add("")),setFilter3(true))
             }
          /> 
            </div>

            <div className=" flex flex-row justify-end overflow-hidden ">
               <label className='whitespace-nowrap cursor-pointer' htmlFor='teacher3' to="checkbox">{teacher.data?.[3].fullName}</label>
          <input
            id='teacher3'
            type="checkbox"
            name="checkbox"
            className="ml-2 cursor-pointer z-[800]"
            onClick={
              filter4 ? () => dispatch((Add(teacher.data?.[3].teacherId)),setFilter(false)):
              () => dispatch((Add("")),setFilter4(true))
             }
          /> 
            </div>
       
        
         
        </div>
      
    </>
  )
}

export default TeacherFilter
