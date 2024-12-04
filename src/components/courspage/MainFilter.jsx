import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useCategoryCourses } from "../../core/services/query/queries";
import { Add } from "../../core/redux/slices/QueryState/QueryRedux";

const MainFilter = () => {
  const query = useSelector((state) => state.QuerySlice.search);
  console.log(query);

  const dispatch = useDispatch();
  const [filter,setFilter]=useState(true)
  const [filter2,setFilter2]=useState(true)
  const [filter3,setFilter3]=useState(true)
  const [filter4,setFilter4]=useState(true)

 


  const category = useCategoryCourses();
  console.log(category.data?.[0].id);

  


  return (
    <>
      
        <div className="z-40 relative flex flex-col gap-2">
          <div className="flex flex-row justify-end">
             <label htmlFor="setFilter" to="checkbox" className="cursor-pointer">{category.data?.[0].techName}</label>
          <input
          id="setFilter"
            type="checkbox"
            name="checkbox"
            className="ml-2 cursor-pointer z-[800]"
            onClick={
             filter ? () => dispatch((Add(category.data?.[0].id)),setFilter(false)):
             () => dispatch((Add("")),setFilter(true))
            }
          />
          </div>
          <div className="flex flex-row justify-end ">
             <label htmlFor="setFilter2" to="checkbox" className="cursor-pointer">{category.data?.[1].techName}</label>
          <input
          id="setFilter2"
            type="checkbox"
            name="checkbox"
            className="ml-2 cursor-pointer z-[800]"
            onClick={
              filter2 ? () => dispatch((Add(category.data?.[1].id)),setFilter2(false)):
              () => dispatch((Add("")),setFilter2(true))
             }
          />
          </div>
            <div className=" flex flex-row justify-end ">
               <label htmlFor="setFilter3" to="checkbox" className="cursor-pointer">{category.data?.[2].techName}</label>
          <input
          id="setFilter3"
            type="checkbox"
            name="checkbox"
            className="ml-2 cursor-pointer z-[800]"
            onClick={
              filter3 ? () => dispatch((Add(category.data?.[2].id)),setFilter3(false)):
              () => dispatch((Add("")),setFilter3(true))
             }
          /> 
            </div>
          <div className="flex flex-row justify-end">
          <label htmlFor="setFilter4" to="checkbox" className="cursor-pointer">{category.data?.[3].techName}</label>
          <input
            id="setFilter4"
            type="checkbox"
            name="checkbox"
            className="ml-3 cursor-pointer z-[800]"
            onClick={
              filter4 ? () => dispatch((Add(category.data?.[3].id)),setFilter4(false)):
              () => dispatch((Add("")),setFilter4(true))
             }
          />

          </div>
       
         
        </div>
      
    </>
  );
};

export default MainFilter;
