import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLevelCourses } from '../../core/services/query/queries';
import { Add } from '../../core/redux/slices/QueryState/QueryRedux';

const LevelFilter = () => {

    const query = useSelector((state) => state.QuerySlice.search);
    console.log(query);
  
    const dispatch = useDispatch();

    const [filter,setFilter]=useState(true)
    const [filter2,setFilter2]=useState(true)
    const [filter3,setFilter3]=useState(true)


   const Levels = useLevelCourses()
    console.log(Levels)

  return (
    <>
      
    <div className="z-40 relative flex flex-col  gap-2 ">
      <div className="flex flex-row justify-end">
         <label to="checkbox">  مبتدی</label>
      <input
        type="checkbox"
        name="checkbox"
        className="ml-2 cursor-pointer z-[800]"
        onClick={
          filter ? () => dispatch((Add(1)),setFilter(false)):
          () => dispatch((Add("")),setFilter(true))
         }
      />
      </div>
      <div className="flex flex-row justify-end -ml-[3px]">
         <label to="checkbox">متوسط</label>
      <input
        type="checkbox"
        name="checkbox"
        className="ml-2 cursor-pointer z-[800]"
        onClick={
          filter2 ? () => dispatch((Add(2)),setFilter(false)):
          () => dispatch((Add("")),setFilter2(true))
         }
      />
      </div>
        <div className=" flex flex-row justify-end">
           <label to="checkbox">پیشرفته</label>
      <input
        type="checkbox"
        name="checkbox"
        className="ml-2 cursor-pointer z-[800]"
        onClick={
          filter3 ? () => dispatch((Add(3)),setFilter(false)):
          () => dispatch((Add("")),setFilter3(true))
         }
      /> 
        </div>
   
    
     
    </div>
  
</>
  )
}

export default LevelFilter
